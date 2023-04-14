import '@testing-library/jest-dom';

import { server } from './app/mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
