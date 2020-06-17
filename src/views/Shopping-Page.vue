<template>
  <div class="box-m">
    <div class="wx-wrap-m">
      <div class="header-bar">
        <div class="header-bar-back"></div>
        <div class="header-bar-title">购物车</div>
        <div class="header-bar-menu"></div>
      </div>
      <div class="top-banner" v-show="get">
        <img src="../assets/cart/jies.png" alt />
        <i class="close" @click="deltopbanner"></i>
      </div>
      <div class="shopcart-login-bar">
        登录后可同步账户购物车中的商品
        <div class="shopcart-login-bar-btn">登录</div>
      </div>
      <div class="empty-cart">
        <div class="empty-warp">
          <div class="empty-icon"></div>
          <p>登录后可同步购物车中商品</p>
        </div>
      </div>
      <div class="shopchat-mod">
        <div class="shopchat-mod-title">
          <span>京东秒杀</span>
        </div>
        <div class="mall-seckill">
          <div class="header">
            <div class="title">京东秒杀</div>
            <div class="header-countdown">
              <span class="time">16点场</span>
              <div class="countdown-detali">
                <div class="item">
                  <i class="inner">01</i>
                </div>
                <div class="item">
                  <i class="inner">01</i>
                </div>
                <div class="item">
                  <i class="inner">01</i>
                </div>
              </div>
            </div>
            <div class="header-link">查看更多</div>
          </div>
          <div class="slider">
            <div class="item">
              <div class="image">
                <img src="../assets/cart/bigwcard.webp" alt />
              </div>
              <p class="price">
                ¥1.00
                <span class="del">¥3.00</span>
              </p>
            </div>
            <div class="item">
              <div class="image">
                <img src="../assets/cart/bigwcard.webp" alt />
              </div>
              <p class="price">
                ¥1.00
                <span class="del">¥3.00</span>
              </p>
            </div>
            <div class="item">
              <div class="image">
                <img src="../assets/cart/bigwcard.webp" alt />
              </div>
              <p class="price">
                ¥1.00
                <span class="del">¥3.00</span>
              </p>
            </div>
            <div class="item">
              <div class="image">
                <img src="../assets/cart/bigwcard.webp" alt />
              </div>
              <p class="price">
                ¥1.00
                <span class="del">¥3.00</span>
              </p>
            </div>
            <div class="item">
              <div class="image">
                <img src="../assets/cart/bigwcard.webp" alt />
              </div>
              <p class="price">
                ¥1.00
                <span class="del">¥3.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="coupon">
        <div class="coupon-head">
          <div class="title">
            新用户福利
            <i class="dot"></i>
            专属优惠礼包
          </div>
          <div class="get">一键领取</div>
        </div>
        <div class="coupon-area">
          <div class="type-dong">
            <div class="info">
              <p class="c-type">东券</p>
              <div class="c-count">
                <span class="yen">¥</span>
                <span class="num">8</span>
              </div>
              <div class="c-desc">全品类可用</div>
            </div>
            <div class="more">满25可用</div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-btn-m">
      <div class="switch-btn-item-m" >
        <img src="../assets/home/s2.png" alt />
      </div>
      <div class="switch-btn-item-m" >
        <img src="../assets/home/s7.png" alt  >
      </div>
      <div class="switch-btn-item-m" >
        <img src="../assets/home/s4.png" alt />
      </div>
      <div class="switch-btn-item-m" >
        <img src="../assets/home/s6.png" alt  />
      </div>
      <div class="switch-btn-item-m" >
        <img src="../assets/home/s8.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      get: true
    };
  },
  methods: {
    deltopbanner() {
      this.get = false;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box-m{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: stretch; */
}
.wx-wrap-m {
  /* flex-shrink: 0; */
  overflow: auto;
  /* height: 80%; */
  font-size: 12px;
  color: #333;
  width: 100%;
  line-height: 1.5;
  background-color: rgb(247, 247, 247);
}
.wx-wrap-m .header-bar {
  display: flex;
  height: 44px;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid rgb(247, 247, 247);
}
.wx-wrap-m .header-bar .header-bar-back {
  display: block;
  width: 44px;
  height: 44px;
  background: url(../assets/cart/left-arrows.png) no-repeat 50%;
  background-size: 20px 20px;
}
.wx-wrap-m .header-bar .header-bar-title {
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  color: #333;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wx-wrap-m .header-bar .header-bar-menu {
  display: block;
  width: 44px;
  height: 44px;
  background: url(../assets/cart/ellipsis.png) no-repeat 50%;
  background-size: 20px;
}
.wx-wrap-m .top-banner {
  padding: 8px 10px;
  position: relative;
}
.wx-wrap-m .top-banner img {
  display: block;
  width: 100%;
}
.wx-wrap-m .top-banner .close {
  position: absolute;
  content: "";
  width: 25px;
  height: 25px;
  right: 0;
  top: 3px;
}
.wx-wrap-m .shopcart-login-bar {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
}
.wx-wrap-m .shopcart-login-bar .shopcart-login-bar-btn {
  display: inline-block;
  margin-left: 10px;
  width: 58px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
  border-radius: 15px;
}
.wx-wrap-m .empty-cart .empty-warp {
  padding: 70px 0 65px;
  text-align: center;
}
.wx-wrap-m .empty-cart .empty-warp .empty-icon {
  display: inline-block;
  width: 90px;
  height: 90px;
  background: url(../assets/cart/GWC.png) no-repeat 50%;
  background-size: 90px 90px;
}
.wx-wrap-m .empty-cart .empty-warp p {
  font-size: 16px;
  color: #333;
  line-height: 16px;
  margin-top: 15px;
}
.wx-wrap-m .shopchat-mod .shopchat-mod-title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.wx-wrap-m .shopchat-mod .shopchat-mod-title::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 10px;
  right: 10px;
  top: 50%;
}

.wx-wrap-m .shopchat-mod .shopchat-mod-title span {
  position: relative;
  z-index: 2;
  padding: 0 15px;
  background-color: #f7f7f7;
}
.wx-wrap-m .shopchat-mod .shopchat-mod-title span::before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  transform: rotate(45deg);
}
.wx-wrap-m .shopchat-mod .shopchat-mod-title span::after {
  right: 0;
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wx-wrap-m .shopchat-mod .mall-seckill {
  background-color: #fff;
  border-radius: 4px 0 0 4px;
  margin: 0 0 15px 15px;
}
.wx-wrap-m .shopchat-mod .mall-seckill .header {
  display: flex;
  height: 45px;
  line-height: 45px;
}
.mall-seckill .header .title {
  font-size: 16px;
  color: #333;
  margin: 0 10px 0 15px;
  font-weight: 700;
}
.mall-seckill .header .header-countdown {
  display: flex;
  flex: 1;
}
.mall-seckill .header .header-countdown span.time {
  color: #999;
  font-size: 12px;
}
.mall-seckill .header .header-countdown .countdown-detali {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.mall-seckill .header .header-countdown .countdown-detali .item {
  -webkit-box-flex: 1;
  flex: 1;
  width: 15px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  position: relative;
  margin-left: 5px;
  background: url(../assets/cart/i.png) no-repeat 50%;
  background-size: 15px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 1px 2px hsla(0, 0%, 66.7%, 0.2);
}
.mall-seckill .header .header-countdown .countdown-detali .item i.inner {
  display: block;
  color: #f2270c;
  font-size: 12px;
  font-style: normal;
}
.mall-seckill .header .header-countdown .countdown-detali .item::after {
  right: -100%;
  bottom: -100%;
  border-radius: 4px;
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ddd;
  top: 0;
  left: 0;
  background: none;
  border: 1px solid #ddd;
}
.mall-seckill .header .header-link {
  position: relative;
  display: block;
  padding: 0 21px 0 10px;
  font-size: 12px;
  color: #999 !important;
  font-size: 0;
}
.mall-seckill .header .header-link::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 10px;
  background-image: url(../assets/cart/right-arrows.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -6px;
}
.wx-wrap-m .shopchat-mod .mall-seckill .slider {
  position: relative;
  padding: 0 15px 15px;
  font-size: 0;
  font-family: none;
  white-space: nowrap;
  overflow: auto;
}

.wx-wrap-m .shopchat-mod .mall-seckill .slider .item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: center;
  width: 24%;
  margin-right: 10px;
  padding: 0 5px 5px;
  border-radius: 4px;
}
.wx-wrap-m .shopchat-mod .mall-seckill .slider .item .image {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
}
.wx-wrap-m .shopchat-mod .mall-seckill .slider .item .image img {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  border: 0;
  vertical-align: top;
}
.wx-wrap-m .shopchat-mod .mall-seckill .slider .item p.price {
  font-size: 16px;
  margin-top: 5px;
  color: #f2270c;
}
.wx-wrap-m .shopchat-mod .mall-seckill .slider .item p.price .del {
  display: block;
  font-size: 12px;
  color: #ccc;
  line-height: 1;
  text-decoration: line-through;
}
.wx-wrap-m .coupon {
  padding: 15px 10px;
  background: #fff;
}
.wx-wrap-m .coupon .coupon-head {
  display: flex;
  justify-content: space-between;
}
.wx-wrap-m .coupon .coupon-head .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
}
.wx-wrap-m .coupon .coupon-head .title::after {
  top: 6px;
  margin-left: 3px;
  position: absolute;
  content: "";
  width: 12px;
  height: 17px;
  background: url(../assets/cart/dot.png) no-repeat;
  background-size: 12px;
}
.wx-wrap-m .coupon .coupon-head .title::before {
  left: 0;
  top: 5px;
  transform: rotate(180deg);
  position: absolute;
  content: "";
  width: 12px;
  height: 17px;
  background: url(../assets/cart/dot.png) no-repeat;
  background-size: 12px;
}
.wx-wrap-m .coupon .coupon-head .title i.dot {
  position: relative;
  padding: 0 10px 0 7px;
  font-style: normal;
}
.wx-wrap-m .coupon .coupon-head .title i.dot::after {
  position: absolute;
  content: "";
  width: 3px;
  height: 3px;
  background: #333;
  border-radius: 50%;
  top: 50%;
  margin-top: -2px;
}
.wx-wrap-m .coupon .coupon-head .get {
  flex-shrink: 0;
  max-width: 150px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  background-image: linear-gradient(-90deg, #f2270c, #ff9574);
  box-shadow: 0 5px 10px 0 rgba(233, 59, 61, 0.2);
  border-radius: 15px;
  padding: 0 15px;
}
.wx-wrap-m .coupon .coupon-area {
  height: 64px;
  margin-top: 12px;
}
.wx-wrap-m .coupon .coupon-area .type-dong {
  width: 33.33%;
  height: 64px;
  float: left;
  position: relative;
  margin-right: 1px;
  overflow: hidden;
}
.wx-wrap-m .coupon .coupon-area .type-dong::before {
  left: 0;
  background: url(../assets/cart/type-dong.png) no-repeat;
  background-size: 3px 64px;
  position: absolute;
  content: "";
  width: 3px;
  height: 64px;
  top: 0;
  z-index: 3;
}
.wx-wrap-m .coupon .coupon-area .type-dong::after {
  right: 0;
  background: url(../assets/cart/type-dong2.png) no-repeat;
  background-size: 3px 64px;
  position: absolute;
  content: "";
  width: 3px;
  height: 64px;
  top: 0;
  z-index: 3;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info {
  height: 40px;
  padding: 0 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  border-top: 1px solid #f7f7f7;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info p.c-type {
  position: absolute;
  z-index: 0;
  width: 36px;
  height: 36px;
  border: 2px solid #eee;
  border-radius: 50%;
  top: -11px;
  left: -4px;
  color: #eee;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info .c-count {
  color: #6ed1d3;
  position: relative;
  line-height: 1;
  flex-shrink: 0;
  max-width: 62px;
  vertical-align: bottom;
  overflow: hidden;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info .c-count .yen {
  position: absolute;
  left: 0;
  bottom: 5px;
  font-size: 12px;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info .c-count .num {
  padding-left: 10px;
  font-weight: 700;
  font-size: 24px;
  position: relative;
  top: 14px;
  display: block;
  max-width: 52px;
}
.wx-wrap-m .coupon .coupon-area .type-dong .info .c-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-left: 3px;
  line-height: 12px;
  height: 12px;
  margin-top: 23px;
  font-size: 10px;
  color: #999;
}
.wx-wrap-m .coupon .coupon-area .type-dong .more {
  background-image: linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 10px;
  line-height: 24px;
  color: #fff;
}


/* 底部 */
.switch-btn-m {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
.switch-btn-m .switch-btn-item-m {
  width: 20%;
}
.switch-btn-item-m img {
  width: 60px;
  height: 46px;
  display: inline-block;
  margin-top: 2px;
}
</style>