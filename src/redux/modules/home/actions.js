/*
 *actionTypes
 */
export const homeActionTypes = {
  //获取猜你喜欢请求
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
  //获取猜你喜欢请求成功
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  //获取猜你喜欢请求失败
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",
  //获取超值特惠请求
  AXIOS_DISCOUNT_REQUEST: "HOME/AXIOS_DISCOUNT_REQUEST",
  //获取超值特惠请求成功
  AXIOS_DISCOUNT_SUCCESS: "HOME/AXIOS_DISCOUNT_SUCCESS",
  //获取超值特惠请求失败
  AXIOS_DISCOUNT_FAILURE: "HOME/AXIOS_DISCOUNT_FAILURE",
};

/*
 * actionCreators
 */
export const homeActionCreators = {
  // 喜欢列表获取的actions
  fetchLikesRequest: (pageCount) => ({
    type: homeActionTypes.FETCH_LIKES_REQUEST,
    pageCount,
  }),
  fetchLikesSuccess: (data) => ({
    type: homeActionTypes.FETCH_LIKES_SUCCESS,
    data,
  }),
  fetchLikesFailure: (error) => ({
    type: homeActionTypes.FETCH_LIKES_FAILURE,
    error,
  }),
  // 超值特惠列表action的获取
  axiosDiscountRequest: () => ({
    type: homeActionTypes.AXIOS_DISCOUNT_REQUEST,
  }),
  axiosDiscountSuccess: (data) => ({
    type: homeActionTypes.AXIOS_DISCOUNT_SUCCESS,
    data,
  }),
  axiosDiscountFailure: (error) => ({
    type: homeActionTypes.AXIOS_DISCOUNT_FAILURE,
    error,
  }),
};
