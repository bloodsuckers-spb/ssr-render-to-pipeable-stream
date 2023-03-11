import { Empty } from '../../models';

export type Props = Empty;

export type State = {
  searchValue: string;
};

export type SearchInputProps = {
  type: 'text';
  id: string;
  placeholder: string;
  autoComplete: 'off' | 'on';
  autoFocus: boolean;
};
