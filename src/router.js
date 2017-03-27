import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main-layout';
// import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import RecipeListContainer from './containers/recipe-list';
import RecipeContainer from './containers/recipe';


// import UserListContainer from './components/containers/user-list-container';
// import UserProfileContainer from './components/containers/user-profile-container';
// import WidgetListContainer from './components/containers/widget-list-container';



export default (
  <Router history={browserHistory}>
    <Route component={MainLayout} path="/">
		<IndexRoute component={RecipeListContainer} />
		<Route path="/recipes/:recipeId" component={RecipeContainer} />
    </Route>
  </Router>
);
