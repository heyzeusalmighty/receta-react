import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';

// Layouts
// import MainLayout from './layouts/main-layout';
// import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import RecipeListContainer from './containers/recipe-list';
import RecipeContainer from './containers/recipe';

const routerConfig = (
  <Router>
    <div>
      <Route exact path="/" component={RecipeListContainer}/>
      <Route path="/recipes/:recipeId" component={RecipeContainer} />
    </div>
  </Router>
);

export default routerConfig;