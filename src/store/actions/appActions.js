import { languages } from '../../utils/constant';
import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});

export const changLangueAPP = (languageInput) => ({
    type: actionTypes.CHANGE_LANGUE,
    language: languageInput,
});
export const onOffMenuVectical = () => ({
    type: actionTypes.IS_SHOW_MENU_VERTICAL,
});