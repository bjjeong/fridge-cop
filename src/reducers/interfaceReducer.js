import { createReducer } from '@reduxjs/toolkit';
import {
    showLoader,
    hideLoader,
    showAlert,
    hideAlert,
} from '../actions/interfaceActions';

const initialState = {
    alert: null,
    loading: {
        recipeView: false,
    },
    modal: {
        component: null,
        modalProps: null,
    },
};


const interfaceReducer = createReducer(initialState, {
    [showLoader]: (state, { payload: type }) => ({
        ...state,
        loading: {
            ...state.loading,
            [type]: true,
        },
    }),

    [hideLoader]: (state, { payload: type }) => ({
        ...state,
        loading: {
            ...state.loading,
            [type]: false,
        },
    }),

    [showAlert]: (state, { payload }) => {
        const { message, type = 'error', timeout = 500 } = payload;
        return {
            ...state,
            alert: { type, message, timeout },
        };
    },

    [hideAlert]: (state) => ({
        ...state,
        alert: null,
    }),
});

export default interfaceReducer;
