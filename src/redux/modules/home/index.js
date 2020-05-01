import { fromJS } from "immutable";
import { homeActionTypes } from "./actions";

const defaultState = fromJS({
  // 猜你喜欢列表
  likesList: [],
  discountList: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case homeActionTypes.FETCH_LIKES_SUCCESS:
      let oldData = state.get("likesList").toJS();
      let newData = oldData.concat(action.data);
      // 请求成功拿到了likesList数据
      console.log(newData);
      return state.set("likesList", fromJS(newData));
    case homeActionTypes.FETCH_LIKES_FAILURE:
      // 请求失败的action处理
      console.error(action.error);
      return state;
    case homeActionTypes.AXIOS_DISCOUNT_SUCCESS:
      return state.set("discountList", fromJS(action.data));
    case homeActionTypes.AXIOS_DISCOUNT_FAILURE:
      console.error(action.error);
      return state;
    default:
      return state;
  }
};

export default reducer;
