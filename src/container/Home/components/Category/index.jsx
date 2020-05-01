import React from "react";
import { Grid } from "antd-mobile";

export default function Category() {
  const dataSource = [
    {
      text: "猫眼电影",
      icon:
        "https://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png",
    },
    {
      text: "酒店",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png",
    },
    {
      text: "休闲娱乐",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png",
    },
    {
      text: "外卖",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203251waimai.png",
    },
    {
      text: "火锅",
      icon: "https://www.dpfile.com/sc/eleconfig/20160204172927huoguo.png",
    },
    {
      text: "美食",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126194705meishi.png",
    },
    {
      text: "丽人",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126202946liren.png",
    },
    {
      text: "休闲娱乐",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203542ktv.png",
    },
    {
      text: "KTV",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png",
    },
    {
      text: "婚纱摄影",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203830jiehun.png",
    },
    {
      text: "生活服务",
      icon:
        "https://www.dpfile.com/sc/eleconfig/20170308125500community_new.png",
    },
    {
      text: "景点",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126205135jingguan.png",
    },
    {
      text: "爱车",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203742aiche.png",
    },
    {
      text: "运动健身",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203617jianshen.png",
    },
    {
      text: "购物",
      icon:
        "https://www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png",
    },
    {
      text: "亲子",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203905qinzi.png",
    },
    {
      text: "到家",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126203812daojia.png",
    },
    {
      text: "家装",
      icon: "https://www.dpfile.com/sc/eleconfig/20161213162031zhuangxiu.png",
    },
    {
      text: "学习培训",
      icon: "https://www.dpfile.com/gp/cms/1455525720807.png",
    },
    {
      text: "医疗健康",
      icon: "https://www.dpfile.com/sc/eleconfig/20160126204327yiliao.png",
    },
    {
      text: "小吃快餐",
      icon:
        "https://www.dpfile.com/sc/eleconfig/20160204173331xiaochikuaican.png",
    },
    {
      text: "自助餐",
      icon: "https://www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png",
    },
    {
      text: "日本菜",
      icon: "https://www.dpfile.com/sc/eleconfig/20160415121719rihanliaoli.png",
    },
    {
      text: "美发",
      icon: "https://www.dpfile.com/sc/eleconfig/20160316142804meifa.png",
    },
    {
      text: "美甲美瞳",
      icon: "https://www.dpfile.com/sc/eleconfig/20160316143047meijia.png",
    },
    {
      text: "美容SPA",
      icon: "https://www.dpfile.com/sc/eleconfig/20160316143239meirong.png",
    },
    {
      text: "瘦身",
      icon: "https://www.dpfile.com/sc/eleconfig/20160316143316shoushen.png",
    },
    {
      text: "亲子摄影",
      icon:
        "https://www.dpfile.com/sc/eleconfig/20160316143612qinzisheying.png",
    },
    {
      text: "亲子娱乐",
      icon: "https://www.dpfile.com/sc/eleconfig/20160316143656qinziyoule.png",
    },
    {
      text: "全部分类",
      icon: "https://www.dpfile.com/sc/eleconfig/20160125182200more.png",
    },
  ];

  return (
    <div>
      <Grid
        data={dataSource}
        isCarousel
        columnNum={5}
        autoplay
        infinite
        onClick={(_el) => console.log(_el)}
      />
    </div>
  );
}
