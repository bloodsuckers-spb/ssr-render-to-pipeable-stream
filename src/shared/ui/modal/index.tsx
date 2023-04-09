import { MouseEvent } from 'react';
import { Portal } from '../portal';

import { classNames } from '../../libs/classNames';

import { Props } from './models';

import styles from './index.module.scss';

export const Modal = ({ children, isOpen, onClose }: Props) => {
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <div
        className={classNames(styles.modal, mods)}
        data-testid="modal"
      >
        <div
          className={styles.overlay}
          onClick={onClose}
        >
          <div
            className={styles.content}
            onClick={onContentClick}
          >
            {children}
            <div
              className={styles.cross}
              onClick={onClose}
            ></div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
