import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withNavbar from './features/withNavbar';
import Home from './pages/Home/Home';
import About from './pages/About';
import RecipeView from './pages/RecipeView/RecipeView';

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component {...props} routes={route.routes} />}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={route.key} {...route} />)}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

const routes = [
    {
        path: '/',
        key: 'ROOT',
        exact: true,
        component: withNavbar(Home),
    },
    {
        path: '/about',
        key: 'ABOUT',
        exact: true,
        component: withNavbar(About),
    },
    {
        path: '/recipes',
        key: 'RECIPES',
        component: RenderRoutes,
        routes: [
            {
                path: '/recipes',
                key: 'RECIPES_ROOT',
                exact: true,
                component: withNavbar(Home),
            },
            {
                path: '/recipes/:id',
                key: 'RECIPE_PAGE',
                exact: true,
                component: withNavbar(RecipeView),
            },
        ],
    },
];

export default routes;
