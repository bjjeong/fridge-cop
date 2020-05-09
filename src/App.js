import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes, { RenderRoutes } from './routes';
import store from './store/store';
import './App.css';

export const AuthContext = React.createContext(null);

const App = () => {
    const [user, setUser] = useState(false);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
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
