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
          <van-swipe-item class="child"><img src="../assets/partmain/1.webp" alt=""></van-swipe-item>
          <van-swipe-item class="child"><img src="../assets/partmain/2.webp" alt=""></van-swipe-item>
          <van-swipe-item class="child"><img src="../assets/partmain/3.webp" alt=""></van-swipe-item>
          <van-swipe-item class="child"><img src="../assets/partmain/4.webp" alt=""></van-swipe-item>
          <van-swipe-item class="child"><img src="../assets/partmain/5.webp" alt=""></van-swipe-item>
          <van-swipe-item class="child"><img src="../assets/partmain/6.webp" alt=""></van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
          </template>
        </van-swipe>
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
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop = event.target.scrollTop;
      console.log(event.target.scrollTop);
    },
     onChange(index) {
      this.current = index;
    },
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
.partmain-content .swipe-m{
    background: rgb(255, 255, 255);
    height: 375px;
    width: 375px;
    max-width: 640px;
    max-height: 640px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.partmain-content .swipe-m .swipe-img{
    height: 100%;
    width: 100%;
    position: relative;
}
.partmain-content .swipe-m .swipe-img .child img{
    width: 375px;
    height: 375px;
}


.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>