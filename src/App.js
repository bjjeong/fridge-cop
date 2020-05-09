import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

import routes, { RenderRoutes } from './routes';
import store from './store/store';
import './App.css';

export const AuthContext = React.createContext(null);

const App = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser({ ...firebaseUser });
            }
        });
    }, []);

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
