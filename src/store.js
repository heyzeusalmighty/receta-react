import { createStore } from 'redux';
import reducers from './reducers';
// import * as recipeApi from './api/recipe.api';

const store = createStore(reducers);

export default store;
