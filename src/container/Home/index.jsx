import React, { useEffect, memo, useRef } from "react";
import "./style.css";
import { connect } from "react-redux";
import { homeActionCreators } from "../../redux/modules/home/actions";
import Category from "./components/Category";
import Headline from "./components/Headline";
import Discount from "./components/Discount";
import LikeList from "./components/LikeList";
import HomeHeader from "./components/HomeHeader";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Activity from "./components/Activity";

const Home = memo((props) => {
  const { handleLikesList, likeList, handleDiscountList, discountList } = props;
  var pageCount = useRef(1);

  useEffect(() => {
    handleLikesList(pageCount.current++);
    handleDiscountList();
  }, []);

  return (
    <div className="home">
      <HomeHeader />
      <Banner />
      <Category />
      <Headline />
      <Activity />
      <Discount discountList={discountList} />
      <LikeList
        likeList={likeList}
        handleLikesList={handleLikesList}
        pageCount={pageCount}
      />
      <Footer />
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    likeList: state.getIn(["home", "likesList"]).toJS(), // toJS()是原生js的方法，这里将immutable对象转换为普通js对象
    discountList: state.getIn(["home", "discountList"]).toJS(),
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    handleLikesList(pageCount) {
      dispatch(homeActionCreators.fetchLikesRequest(pageCount));
    },
    handleDiscountList() {
      dispatch(homeActionCreators.axiosDiscountRequest());
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Home);
