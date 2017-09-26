import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import TransactionsList from './components/transactions_list';
import CategoriesList from './components/categories_list';
import GraphList from './components/graphs_list';
// reducers
import reducers from './reducers';
// middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/categories" component={CategoriesList} />
          <Route path="/graphs" component={GraphList} />
          <Route path="/" component={TransactionsList} />
        </Switch>
      </div> 
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
