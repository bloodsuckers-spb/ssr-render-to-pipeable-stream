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
          data-testid="overlay"
        >
          <div
            className={styles.content}
            onClick={onContentClick}
          >
            {children}
            {onClose ? (
              <div
                className={styles.cross}
                onClick={onClose}
                data-testid="modal-cross"
              ></div>
            ) : null}
          </div>
        </div>
      </div>
    </Portal>
  );
};
