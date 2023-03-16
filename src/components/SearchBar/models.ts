/* c8 ignore next */
import { Empty } from '../../models';

export type Props = Empty;

export type State = {
  searchValue: string;
};

export type SearchInputProps = {
  type: 'text';
  className: string;
  autoComplete: 'off' | 'on';
  autoFocus: boolean;
  role: string;
  placeholder: string;
  'aria-label': string;
};
