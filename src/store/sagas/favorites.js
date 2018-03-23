import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { addFavoriteSuccess, addFavoriteError } from 'store/actions/favorites';

// import { Creators as FavoriteActions } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    // yield put(FavoriteActions.addFavoriteSuccess(response.data));
    yield put(addFavoriteSuccess(response.data));
  } catch (err) {
    // yield put(FavoriteActions.addFavoriteError('Repositório inexistente'));
    yield put(addFavoriteError('Repositório inexistente'));
  }
}
