import React from "react";
import "./style.scss";
import propType from "prop-types";

Discount.propType = {
  discountList: propType.array,
};

export default function Discount({ discountList }) {
  return (
    <div className="discount">
      <a className="discount__header">
        <span className="discount__title">超值特惠</span>
        <span className="discount__more">更多优惠</span>
        <span className="discount__arrow" />
      </a>
      <div className="discount__content">
        {discountList.map((item, index) => {
          return (
            <a key={item.id} className="discount__item" href={item.url}>
              <div className="discount__itemPic">
                <img width="100%" height="100%" src={item.picture} />
              </div>
              <div className="discount__itemTitle">{item.shop}</div>
              <div className="discount__itemPriceWrapper">
                <ins className="discount__itemCurrentPrice">
                  {item.currentPrice}
                </ins>
                <del className="discount__itemOldPrice">{item.oldPrice}</del>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
