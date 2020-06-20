<template>
  <div class="partmain-m" @scroll="handleScroll">
    <div class="partmain-content">
      <div class="header">
        <div class="header-box">
          <div class="headerbox-left">
            <span></span>
          </div>
          <div class="headerbox-middle"></div>
          <div class="headerbox-right">
            <span></span>
          </div>
        </div>
      </div>
      <div class="swipe-m">
        <van-swipe @change="onChange" class="swipe-img">
          <van-swipe-item class="child" style="width: 414px;">
            <img src="../assets/partmain/1.webp" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img src="../assets/partmain/2.webp" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img src="../assets/partmain/3.webp" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img src="../assets/partmain/4.webp" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img src="../assets/partmain/5.webp" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img src="../assets/partmain/6.webp" alt />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/6</div>
          </template>
        </van-swipe>
      </div>
      <div class="middle-content-l">
        <div class="middle-ban-l">
          <img src="../assets/partmain/banner.png" alt />
        </div>
        <div class="part-data-l">
          <div class="part-price-l">
            <div class="part-pro-price-l">
              <span>￥</span>
              <span>{{partlist.price}}</span>
              <span>.00</span>
            </div>
            <div class="part-pro-icon-l">
              <span>
                <img src="../assets/partmain/price-icon1.png" alt />
                <div>降价提</div>
              </span>
              <span>
                <img src="../assets/partmain/price-icon2.png" alt />
                <div>收藏</div>
              </span>
              <span></span>
            </div>
          </div>
          <div class="part-pro-wrap-l">
            <h1>
              <i>
                <img src="../assets/partmain/618.png" alt />
              </i>
              华为p30 手机 赤茶橘 8GB+128GB 全网通
            </h1>
            <div class="part-pro-bru-l">
              【华为官方直供，官网直降400元】现货当天发！
               【赠】两年保修+运费险退换货无忧【华为P40】 
               <span>查看></span>
            </div>
          </div>
          <!-- 放心购 -->
          <div class="part-pro-show-l">
            <span></span>
            <p>送运费险 . 一年质保.全国联保.7天保价</p>
            <div class="part-pro-show-dis-l">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: "",
      current: 0,
      partlist: {
        price: 2999
      }
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop = event.target.scrollTop;
      console.log(event.target.scrollTop);
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.partmain-m {
  width: 100%;
  height: 100%;
  background-color: rgb(242, 242, 242);
  overflow: auto;
}
.partmain-m .partmain-content {
  /* background-color: blue; */
  width: 100%;
  height: 1000px;
}
.partmain-content .header {
  z-index: 10;
  position: fixed;
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  color: #252525;
  min-height: 44px;
}
.partmain-content .header .header-box {
  position: relative;
  min-height: 44px;
}
.partmain-content .header .header-box .headerbox-left {
  float: left;
  background-color: #666;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 0 0 5px;
  opacity: 1;
}
.partmain-content .header .header-box .headerbox-left span {
  display: inline-block;
  background: url(../assets/partmain/left-arrows.png) no-repeat 50%;
  background-size: 20px 20px;
  margin: 0;
  width: 20px;
  height: 20px;
}
.partmain-content .header .header-box .headerbox-right {
  background-color: #666;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 5px 0 0;
  opacity: 1;
  overflow: hidden;
  float: right;
}
.partmain-content .header .header-box .headerbox-right .leave {
  background-color: #fff;
  color: #666;
}
.partmain-content .header .header-box .headerbox-right span {
  display: inline-block;
  background: url(../assets/partmain/dian.png) no-repeat 50%;
  background-size: 20px 20px;
  margin: 0;
  width: 20px;
  height: 20px;
}
.partmain-content .swipe-m {
  background: rgb(255, 255, 255);
  height: 375px;
  width: 375px;
  max-width: 640px;
  max-height: 640px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.partmain-content .swipe-m .swipe-img {
  height: 100%;
  width: 100%;
  position: relative;
}
.partmain-content .swipe-m .swipe-img .child img {
  width: 375px;
  height: 375px;
}

/* 轮播图 */
.swipe-img .child {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.custom-indicator {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 9px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 40px;
  text-align: center;
}
/* 轮播图下面的广告 */
.middle-ban-l {
  width: 100%;
  height: 55px;
}
.middle-ban-l img {
  width: 100%;
}
.middle-content-l {
  background-color: rgb(255, 255, 255);
}
.part-data-l {
  width: 100%;
}
.part-price-l {
  width: 100%;
  height: 35px;
  margin-top: 12px;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
}
.part-pro-price-l {
  width: 100px;
  height: 100%;
  font-family: JDZH-Regular;
  font-size: 14px;
  line-height: 30px;
  color: #f2270c;
  display: inline-block;
  font-weight: bold;
}
.part-pro-icon-l {
  width: 80px;
  height: 100%;
}
.part-pro-price-l span {
  font-size: 28px;
}
.part-pro-icon-l span {
  display: inline-block;
  width: 50%;
  height: 100%;
  font-size: 9px;
  text-align: center;
}
.part-pro-icon-l span img {
  width: 50%;
  height: 50%;
}
/* 产品介绍 */
.part-pro-wrap-l {
  width: 100%;
  height: 108px;
  padding: 12px 18px;
  color: #262626;
}
.part-pro-wrap-l h1 {
  width: 100%;
  height: 36px;
  font-size: 16px;
  line-height: 36px;
}
.part-pro-wrap-l h1 img {
  width: 31.56px;
  height: 13px;
}
.part-pro-bru-l {
  width: 378px;
  height: 48px;
  padding: 18px 0 0;
  font-size: 12px;
  color: #666;
}
.part-pro-bru-l span{
  color: #e4393c;
    text-decoration: underline;
}

/* 放心购 */
.part-pro-show-l{
  width: 100%;
  height: 37px;
  padding: 12px 48px 12px 10px;
  color: #e93b3d;
  font-size: 13px;
  background-color: rgb(251, 240, 253);
}
.part-pro-show-l>span{
  display: inline-block;
  width: 70px;
  height: 13px;
  background-image: url("../assets/partmain/buy.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 4px;
}
.part-pro-show-l p{
  height: 13px;
  display: inline-block;
  line-height: 15px;
}
.part-pro-show-dis-l{
  width: 20px;
  height: 13px;
  float: right;
  line-height: 13px;
  font-size: 30px;
}
.part-pro-show-dis-l span{
  display: inline-block;
  width: 100%;
   height: 13px;
  background-image: url("../assets/partmain/r-icon.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>