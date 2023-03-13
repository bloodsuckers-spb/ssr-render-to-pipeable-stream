import { Component } from 'react';

import { localStorageService } from '../../services/StorageWrapper';

import { AppHeader, AppMain, AppFooter, AppNav, SideBar } from '..';

import { Pages } from '../../constants';

import { Props, State, ChangeCurrentPage } from './models';

import './index.css';

export default class App extends Component<Props, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      currentPage: localStorageService.get('lastPage') || Pages.Home,
    };
  }

  private changeCurrentPage: ChangeCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage,
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader currentPage={this.state.currentPage} />
        <AppMain
          SideBar={
            <SideBar
              AppNav={<AppNav changeCurrentPage={this.changeCurrentPage} />}
            />
          }
        />
        <AppFooter />
      </div>
    );
  }
}
