import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TransactionsReducer from './reducer_transactions';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
  transactions: TransactionsReducer,
  categories: CategoriesReducer,
  form: formReducer
});

export default rootReducer;
