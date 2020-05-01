import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";
import "./style.css";
import propTypes from "prop-types";

// LikeList组件的propTypes校验
LikeList.propTypes = {
  likeList: propTypes.array,
  handleLikesList: propTypes.func,
  pageCount: propTypes.object,
};

export default function LikeList(props) {
  const likeListRef = useRef();
  const { likeList, handleLikesList, pageCount } = props;
  const [isRemoveEvent, setIsRemoveEvent] = useState(true);

  // 处理滚动的函数
  const handleScroll = useCallback(() => {
    if (pageCount.current > 3) {
      return;
    }
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const likeListTop = likeListRef.current.offsetTop;
    const likeListHeight = likeListRef.current.offsetHeight;
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      handleLikesList(pageCount.current++);
    }
  }, [pageCount.current]);

  useEffect(() => {
    if (pageCount.current > 3) {
      document.removeEventListener("scroll", handleScroll);
      setIsRemoveEvent(true);
      return;
    }
    document.addEventListener("scroll", handleScroll);
    setIsRemoveEvent(false);
    return () => {
      if (!isRemoveEvent) {
        document.removeEventListener("scroll", handleScroll);
        setIsRemoveEvent(true);
      }
    };
  }, [pageCount.current]);

  return (
    <div className="likeList">
      <div className="likeList__header">猜你喜欢</div>
      <div ref={likeListRef} className="likeList__list">
        {likeList.map((item, index) => {
          return <LikeItem key={index} data={item} />;
        })}
      </div>
      {pageCount.current <= 3 ? (
        <Loading />
      ) : (
        <a className="likeList__viewAll">查看更多</a>
      )}
    </div>
  );
}
