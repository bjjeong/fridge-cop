import { createAction } from '@reduxjs/toolkit';

export const showLoader = createAction('SHOW_LOADER');
export const hideLoader = createAction('HIDE_LOADER');

export const showAlert = createAction('SHOW_ALERT');
export const hideAlert = createAction('HIDE_ALERT');
