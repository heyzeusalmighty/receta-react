import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import RecipeListContainer from './containers/recipe-list';
import RecipeContainer from './containers/recipe';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={RecipeListContainer}/>
                <Route path="/recipes/:recipeId" component={RecipeContainer} />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;