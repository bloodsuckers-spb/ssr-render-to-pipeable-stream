export type Props = Record<string, never>;

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
