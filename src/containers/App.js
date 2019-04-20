import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CharactersPage from './CharactersPage';
import CharacterDetailPage from './CharacterDetailPage';

const supportsHistory = 'pushState' in window.history;

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename={'/marvel-characters'} forceRefresh={!supportsHistory}>
    <div className="flexgrid flexgrid-full flexgrid--center flexgrid--middle flexgrid--column u-height--full container">
      <Switch>
        <Route exact path={`/`} component={CharactersPage} />
        <Route path={`/:characterId`} component={CharacterDetailPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;

