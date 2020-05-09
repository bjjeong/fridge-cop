import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes, { RenderRoutes } from './routes';
import store from './store/store';
import './App.css';

export const AuthContext = React.createContext(null);

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            <Provider store={store}>
                <BrowserRouter>
                    {
                        RenderRoutes({ routes })
                    }
                </BrowserRouter>
            </Provider>
        </AuthContext.Provider>
    );
};

export default App;
