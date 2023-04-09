import { MouseEvent } from 'react';
import { Portal } from '../portal';

import { classNames } from '../../libs/classNames';

import { Props } from './models';

import styles from './index.module.scss';

export const Modal = ({ children, isOpen, onClose }: Props) => {
  console.log(children);
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(styles.modal, mods)}>
        <div
          className={styles.overlay}
          onClick={onClose}
        >
          <div
            className={styles.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
