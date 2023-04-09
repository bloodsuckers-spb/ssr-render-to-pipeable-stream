import { createPortal } from 'react-dom';

import { Props } from './models';

export const Portal = ({ children, wrapper = document.body }: Props) => {
  return createPortal(children, wrapper);
};
