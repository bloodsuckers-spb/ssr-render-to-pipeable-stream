import { Empty } from '../../models';
import { Pages } from '../../constants';

export type Props = Empty;

type CurrentPage = (typeof Pages)[Partial<keyof typeof Pages>];

export type State = {
  currentPage: CurrentPage;
};

export type ChangeCurrentPage = (currentPage: CurrentPage) => void;