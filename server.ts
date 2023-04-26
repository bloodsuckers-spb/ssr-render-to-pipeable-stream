import express from 'express';
import fs from 'fs/promises';
import { createServer } from 'vite';

const PORT = 3000;

const app = express();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const parts = template.split('<!--ssr-outlet-->');

    const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

    const stream = render(url, {
      onShellReady() {
        res.write(parts[0]);
        stream.pipe(res);
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  }
});

app.listen(PORT, () =>
  console.log('Server started at http://localhost:' + PORT)
);
