import { types } from "../types/types";

export const setErrorAction = (errorMessage) => ({
    type: types.uiSetError,
    payload: errorMessage
});

export const removeErrorAction = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});