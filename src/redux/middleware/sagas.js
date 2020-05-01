import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { homeActionTypes, homeActionCreators } from "../modules/home/actions";
import axios from "axios";

// 获取猜你喜欢列表
function* getLikesList(action) {
  try {
    console.log(action.pageCount);
    const res = yield axios.get(`/mock/products/likes${action.pageCount}.json`);
    yield put(homeActionCreators.fetchLikesSuccess(res.data));
  } catch (error) {
    yield put(homeActionCreators.fetchLikesFailure(error));
  }
}

// 获取超值特惠列表
function* getDiscountList(action) {
  try {
    const res = yield axios.get(`/mock/products/discount.json`);
    yield put(homeActionCreators.axiosDiscountSuccess(res.data));
  } catch (error) {
    yield put(homeActionCreators.axiosDiscountFailure(error));
  }
}

function* mySaga() {
  yield takeEvery(homeActionTypes.FETCH_LIKES_REQUEST, getLikesList);
  yield takeEvery(homeActionTypes.FETCH_LIKES_REQUEST, getDiscountList);
}

export default mySaga;
