import { put, takeLatest } from 'redux-saga/effects';
import { setCommunity } from '../Slice/CommunitySlide';
import { STATUS_CODE } from '../../util/constants/SettingSystem';
import { communityService } from '../../services/CommunityService';
import { GET_COMMUNITY_BYID_SAGA } from '../actionSaga/CommunityActionSaga';

// Get Community By ID Saga
function* getCommunityByIDSaga({ payload }: any) {
    yield communityService.getCommunityByID(payload);
  try {
    const { data, status } = yield communityService.getCommunityByID(payload);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(setCommunity(data.content));
    }
  } catch (err: any) {
    console.log(err.response.data);
  }
}

export function* theoDoiGetCommunityByIDSaga() {
  yield takeLatest(GET_COMMUNITY_BYID_SAGA, getCommunityByIDSaga);
}
