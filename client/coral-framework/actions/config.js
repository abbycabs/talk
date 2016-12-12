import coralApi from '../helpers/response';
import * as actions from '../constants/config';
import {addNotification} from '../actions/notification';

import I18n from 'coral-framework/modules/i18n/i18n';
import translations from './../translations';
const lang = new I18n(translations);

const updateConfigRequest = () => ({type: actions.UPDATE_CONFIG_REQUEST});
const updateConfigSuccess = config => ({type: actions.UPDATE_CONFIG_SUCCESS, config});
const updateConfigFailure = () => ({type: actions.UPDATE_CONFIG_FAILURE});

export const updateConfiguration = newConfig => (dispatch, getState) => {
  const assetId = getState().items.get('assets')
    .keySeq()
    .toArray()[0];

  dispatch(updateConfigRequest());
  coralApi(`/asset/${assetId}/settings`, {method: 'PUT', body: newConfig})
    .then(() => {
      dispatch(addNotification('success', lang.t('successUpdateSettings')));
      dispatch(updateConfigSuccess(newConfig));
    })
    .catch(error => dispatch(updateConfigFailure(error)));
};

const openStream = () => ({type: actions.OPEN_COMMENTS});
const closeStream = () => ({type: actions.CLOSE_COMMENTS});

export const updateOpenStatus = status => dispatch => {
  if (status === 'open') {
    dispatch(openStream());
    dispatch(updateConfiguration({closedAt: null}));
  } else {
    dispatch(closeStream());
    dispatch(updateConfiguration({closedAt: Date.now()}));
  }
};
