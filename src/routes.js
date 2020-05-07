import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import withNavbar from './features/withNavbar';

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
        component: withNavbar(Home),
    },
    {
        path: '/app',
        key: 'APP',
        component: RenderRoutes,
        routes: [
            {
                path: '/app',
                key: 'APP_ROOT',
                exact: true,
                component: withNavbar(Home),
            },
            {
                path: '/app/page',
                key: 'APP_PAGE',
                exact: true,
                component: () => <h1>App Page</h1>,
            },
        ],
    },
];

export default routes;
