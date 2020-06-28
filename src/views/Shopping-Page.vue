<template>
  <div class="box-m" @scroll=" handleScroll()">
    <div class="wx-wrap-m" >
      <!-- 购物车 -->
      <div class="header-bar">
        <div class="header-bar-back" @click="gwcReturn"></div>
        <div class="header-bar-title">购物车</div>
        <div class="header-bar-menu"></div>
      </div>
      <!-- 免费赢京豆 -->
      <div class="top-banner" v-show="get">
        <img src="../assets/cart/jies.png" alt />
        <i class="close" @click="deltopbanner"></i>
      </div>
      <!-- 编辑商品 -->
      <div class="redact">
        <div class="redact-box">
          <div class="address">
            <div class="text">朝阳区三环到四环之间</div>
          </div>
          <!-- <div class="btn">编辑商品</div> -->
        </div>
      </div>
      <!-- 登录 -->
      <div class="shopcart-login-bar" v-if="!landing">
        登录后可同步账户购物车中的商品
        <div class="shopcart-login-bar-btn" @click="loaderpage">登录</div>
      </div>
      <!-- 登录后可同步购物车中的商品 -->
      <div v-if="!landing">
        <div class="empty-cart" v-if="showEmptyCart">
          <div class="empty-warp">
            <div class="empty-icon"></div>
            <p>登录后可同步购物车中商品</p>
          </div>
        </div>
      </div>

      <!-- 商品详情 -->
      <div id="jdtab-m" class="section-list">
        <div class="section" v-for="(item,index) in gwcList" :key="index">
          <div class="head-wrap">
            <div class="head-fixbar">
              <van-checkbox
                bind:change="onChange"
                v-model="item.checked"
                checked-color="rgb(234,59,61)"
                @click="isAllChecked(index)"
              ></van-checkbox>
              <i class="icon-shop"></i>
              <div class="title">
                {{item.storename}}
                <i class="icon-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="goods">
              <van-checkbox
                bind:change="onChange"
                v-model="item.checked"
                checked-color="rgb(234,59,61)"
                @click="isAllChecked(index)"
              ></van-checkbox>
              <img :src="item.img1" alt />

              <div class="content">
                <div class="name">{{item.title}}</div>
                <div class="sku" >
                  <div class="skuu">{{item.key}}</div>
                  <div class="service">选服务</div>
                </div>
                <div class="price-line">
                  <div class="price">
                    ¥
                    <em class="int">{{item.price}}</em>
                    .00
                  </div>
                  <div class="num">
                    <span class="minus" @click="btnMinute(index)"></span>
                    <div class="input">
                      <input type="tel" class="nums" v-model="item.count" />
                    </div>
                    <span class="plus" @click="btnAdd(index)"></span>
                  </div>
                </div>
                <div class="action">
                  <span class="delt" @click="delCart(index)">删除</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 京东秒杀 -->
      <div class="shopchat-mod" v-if="msshow">
        <div class="shopchat-mod-title">
          <span>京东秒杀</span>
        </div>
        <div class="mall-seckill">
          <div class="header">
            <div class="title">京东秒杀</div>
            <div class="header-countdown">
              <span class="time">16点场</span>
              <van-count-down :time="time" class="countdown-detali">
                <template v-slot="timeData">
                  <span class="item">0{{ timeData.hours }}</span>
                  <span class="item">{{ timeData.minutes }}</span>
                  <span class="item">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <div class="header-link">查看更多</div>
          </div>
          <div class="slider" >
            <div class="item" v-for="(item,index) in seckilllist" :key="index">
              <div class="image">
                <img :src="item.src" alt />
              </div>
              <p class="price">
                ¥{{item.newprice}}
                <span class="del">¥{{item.oldprice}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 新用户福利领劵 -->
      <div class="coupon" v-if="msshow">
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
      <!-- 可能还想要 -->
      <div class="shopchat-mod">
        <div class="shopchat-mod-title">
          <span>可能还想要</span>
        </div>
        <div class="mod-recommend2">
          <ul class="list">
            <li class="li" v-for="(item,index) in orderList" :key="index">
              <div class="cover" @click="goodpage(index)">
                <img :src="item.img1" alt />
              </div>
              <div class="info">
                <div class="rec-name">
                  <i class="mod-tag">
                    <img src="../assets/cart/jdcs.webp" alt />
                  </i>
                  {{item.title}}
                </div>
                <div class="flex-wrap">
                  <div class="price-info">
                    <div class="price">
                      ¥
                      <em>{{item.price}}</em>
                    </div>
                  </div>
                  <div class="rec-cart" @click="bottomPopup(item,index)"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 加入购物车弹框 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }" closeable>
      <div class="mod-sku-switch" >
        <div class="switch-header">
          <img :src="number.img1" alt />
          <div class="switch-header-content">
            <p class="price">
              ¥
              <em>{{number.price}}</em>
            </p>
            <p class="prop" >
              <span>已选</span>
              {{gglist}}
            </p>
          </div>
        </div>
        <div class="switch-body">
          <div class="kind">{{number.specificationName}}</div>
          <div class="choose" v-for="(item, index) of number.specification" :key="index">
            <span
              class="choice"
              :class="{red:index==specifyIndex}"
              @click="chooseitem(index,item)"
            >{{item}}</span>
          </div>
        </div>
        <div class="switch-footer">
          <div class="btnshow">
            <div class="btn" @click="enterGwc(number)">加入购物车</div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 提交订单 -->
    <div class="fixbar" v-for="(item,index) in gwcList" :key="index">
      <i class="icon-select" v-if="allcheck" @click="radios(index)">全选</i>
      <i class="icon-select2" v-else @click="radios(item)">全选</i>
      <!-- <van-checkbox value="checked" bind:change="onChange" v-model="item.checked">全选</van-checkbox> -->
      <div class="total">
        <div class="detail">
          <p class="t-main">
            总计：
            <span class="t-price">¥{{goodssum}}.00</span>
          </p>
        </div>
        <div class="buy">
          去结算
          <span class="num">({{goodscount}}件)</span>
        </div>
      </div>
    </div>
    <!-- 底部导航 -->
    <div class="switch-btn-m">
      <div class="switch-btn-item-m" @click="changeBtn(1)">
        <img src="../assets/home/s2.png" alt />
      </div>
      <div class="switch-btn-item-m" @click="changeBtn(2)">
        <img src="../assets/home/s7.png" alt />
      </div>
        <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
      <div class="switch-btn-item-m">
        <img src="../assets/home/s4.png" alt />
      </div>
        </a>
      <div class="switch-btn-item-m">
        <img src="../assets/home/s6.png" alt />
      </div>
      <div class="switch-btn-item-m" @click="changeBtn(5)">
        <img src="../assets/home/s10.png" v-if="landing" alt />
        <img src="../assets/home/s8.png" v-else alt />
      </div>
    </div>
    <!-- 该商品1件起售 -->
    <div class="mask-m" v-if="maskshow">
      <div class="mask-box">该商品1件起售</div>
    </div>
    <!-- 删除成功 -->
    <div class="mask-m" v-if="maskshow2">
      <i></i>
      <div class="mask-box">删除成功</div>
    </div>

    <!-- 向上 -->
    <div class="scoll-out-l" :style="outstyle" @click="outchange"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      outstyle: [],

      get: true,
      msshow:true,
      page: 1,
      time: 30 * 60 * 60 * 1000,
      result: [],
      show: false,
      number: "",
      showSale: false,
      specifyIndex: 0,
      gglist: "",
      seckilllist:[
        {
          src:require("../assets/cart/seckill1.jpg"),
          newprice:49.9,
          oldprice:59.9
        },
        {
          src:require("../assets/cart/seckill2.jpg"),
          newprice:919,
          oldprice:1099
        },
        {
          src:require("../assets/cart/seckill3.jpg"),
          newprice:15.9,
          oldprice:39
        },
        {
          src:require("../assets/cart/seckill3.png"),
          newprice:12.9,
          oldprice:24.9
        },
        {
          src:require("../assets/cart/seckill4.jpg"),
          newprice:219,
          oldprice:288
        },
        {
          src:require("../assets/cart/seckill5.jpg"),
          newprice:999,
          oldprice:1299
        },
      ],
    };
  },

  computed: {
    orderList() {
      return this.$store.state.orderList;
    },
    maskshow(){
      return this.$store.state.maskshow;
    },
    maskshow2(){
      return this.$store.state.maskshow2;
    },
    gwcList() {
      return this.$store.state.gwcList;
    },
    showEmptyCart() {
      return this.$store.state.showEmptyCart;
    },

    landing() {
      return this.$store.state.landing;
    },
    allcheck() {
      return this.$store.state.allcheck;
    },
    zongji() {
      return this.$store.state.zongji;
    },
    goodscount() {
      let sum = 0;
      for (let i = 0; i < this.gwcList.length; i++) {
        if (this.gwcList[i].checked == true) {
          sum += this.gwcList[i].count;
        }
      }
      return sum;
    },
    goodssum() {
      let zongji = 0;
      for (let i = 0; i < this.gwcList.length; i++) {
        if (this.gwcList[i].checked == true) {
          zongji += this.gwcList[i].price * this.gwcList[i].count;
        }
      }
      return zongji;
    }
  },
  methods: {
    handleScroll(){
      this.scrollTop = event.target.scrollTop;
      console.log(this.scrollTop)
       let obj1 = {
        display: "none"
      };
       if (this.scrollTop > 400) {
        obj1.display = "block";
      }
    },
    // 向上
     outchange() {
      console.log(88);
      document.querySelector(".wx-wrap-m").scrollIntoView(true);
    },
    goodpage(index) {
      this.$router.push({
        path: "part-main",
        query: {
          num: index
        }
      });
    },
    loaderpage() {
      this.$router.push("noload-page");
    },
    isAllChecked(index) {
      this.$store.commit("isAllChecked", index);
    },
    deltopbanner() {
      this.get = false;
    },
    gwcReturn() {
      this.$router.go(-1);
    },
    changeBtn(index) {
      this.page = index;
      if (index == 2) {
        this.$router.push("classify-page");
      }
      if (index == 1) {
        this.$router.push("/");
      }
      if (index == 5) {
        if (this.landing == false) {
          this.$router.push("noload-page");
        } else {
          this.$router.push("personage-page");
        }
      }
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    bottomPopup(item, index) {
      this.show = true;
      this.number = item;
      this.gglist=item.key
    },
    enterGwc(number) {
      this.$store.commit("enterGwc", {
        title: number.title,
        count: number.count,
        price: number.price,
        img1: number.img1,
        checked: number.checked,
        storename: number.storename,
        key:this.gglist
      });
      this.show = false;
      this.msshow=false;
    },
    btnMinute(index) {
      this.$store.commit("btnMinute", index);
    },
    btnAdd(index) {
      this.$store.commit("btnAdd", index);
    },
    delCart(index) {
      this.$store.commit("delCart", index);
    },
    chooseitem(index, item) {
      this.specifyIndex = index;
      this.gglist =this.number.specification[index]
      ;
      // this.ggindex=index
      // console.log(this.gglist)
    },
    onChange(event) {
      this.setData({
        result: event.detail
      });
    },
    radios() {
      this.$store.commit("allSelect");
    }
    // itemClick(){
    //   console.log(index);
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ol,
ul {
  list-style: none;
}
.box-m {
  width: 100%;
  height: 100%;
  background-color: rgb(247, 247, 247);
}
.wx-wrap-m {
  padding-bottom: calc(70px + 13.33333vw);
  overflow: auto;
  /* height: 1800px; */
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
.wx-wrap-m .shopchat-mod .mod-recommend2 {
  position: relative;
  overflow: hidden;
  background: #fff;
}
.mod-recommend2 .list {
  padding-right: 1px;
  overflow: hidden;
  background: #f7f7f7;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mod-recommend2 .list .li {
  background: #fff;
  position: relative;
  float: left;
  width: 50%;
  margin-bottom: 1px;
  padding: 15px 15px 0;
  box-sizing: border-box;
  border-radius: 10px;
}
.mod-recommend2 .list .li::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 1px;
  background: #999;
  opacity: 0.5;
  right: 2px;
  bottom: 2px;
}
.mod-recommend2 .list .li .cover {
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  height: 0;
}
.mod-recommend2 .list .li .cover img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mod-recommend2 .list .li .info .rec-name {
  margin: 12px 0 4px;
  font-size: 12px;
  color: #333;
  line-height: 18px;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mod-recommend2 .list .li .info .rec-name i.mod-tag {
  display: inline-block;
  vertical-align: middle;
  height: 14px;
}
.mod-recommend2 .list .li .info .rec-name i.mod-tag img {
  display: block;
  height: 100%;
}
.mod-recommend2 .list .li .info .flex-wrap {
  display: flex;
}
.mod-recommend2 .list .li .info .flex-wrap .price-info {
  width: 100%;
  overflow: hidden;
  flex: 1;
  -webkit-box-flex: 1;
}
.mod-recommend2 .list .li .info .flex-wrap .price-info .price {
  display: inline-block;
  font-size: 12px;
  color: #e93b3d;
  margin-right: 3px;
  line-height: 20px;
}
.mod-recommend2 .list .li .info .flex-wrap .price-info .price em {
  font-size: 16px;
  font-style: normal;
}
.mod-recommend2 .list .li .info .flex-wrap .rec-cart {
  width: 30px;
  height: 24px;
  background: url(../assets/cart/gwc-ifont.png) no-repeat 50%;
  position: relative;
  background-size: 15px;
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
/*  编辑商品*/
.wx-wrap-m .redact {
  position: relative;
  height: 45px;
}
.redact .redact-box {
  overflow: hidden;
  position: relative;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  background: #fff;
  display: flex;
}
.redact .redact-box .address {
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  color: #999;
  margin-right: 10px;
  padding-left: 18px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.redact .redact-box .address::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -8px;
  background-image: url(../assets/cart/zong.png);
  background-position: -118px -45px;
  background-size: 133px 112px;
  width: 13px;
  height: 15px;
}
.redact .redact-box .address .text {
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
}
.redact .redact-box .btn {
  display: block;
  position: relative;
  flex-shrink: 0;
  padding-left: 10px;
  font-size: 14px;
  color: #333;
}
/* 商品详情 */
.wx-wrap-m .section-list {
  width: 100%;
  font-size: 12px;
  color: #333;
}
.wx-wrap-m .section-list .section {
  position: relative;
  margin: 15px 0;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
}
.wx-wrap-m.section-list .section .head-wrap {
  min-height: 46px;
}
.section .head-wrap .head-fixbar {
  box-sizing: border-box;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 5px 10px 5px 42px;
  min-height: 46px;
  z-index: 1;
}
.section .head-wrap .head-fixbar .van-checkbox {
  top: 13px;
  width: 20px;
  height: 20px;
  z-index: 1;
  display: block;
  font-style: normal;
  position: absolute;
  left: 3%;
}
.section .head-wrap .head-fixbar .icon-select::after {
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  background-image: url(../assets/cart/zong.png);
  background-size: 133px 112px;
  width: 20px;
  height: 20px;
  background-position: -98px -40px;
  position: absolute;
  left: 50%;
  content: "";
  margin-left: -10px;
}
.section .head-wrap .head-fixbar .icon-select2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 100%;
  z-index: 1;
  display: block;
  font-style: normal;
}
.section .head-wrap .head-fixbar .icon-select2::after {
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  background-image: url(../assets/cart/zong.png);
  background-size: 133px 112px;
  width: 20px;
  height: 20px;
  background-position: -78px -20px;
  position: absolute;
  left: 50%;
  content: "";
  margin-left: -10px;
}
.section .head-wrap .head-fixbar .icon-shop {
  background-image: url(../assets/cart/zong.png);
  background-size: 133px 112px;
  width: 20px;
  height: 20px;
  background-position: -78px 0;
}
.section .head-wrap .head-fixbar .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  width: 100%;
  font-style: normal;
}
.section .head-wrap .head-fixbar .title i.icon-arrow-right {
  margin-left: 5px;
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  width: 6px;
  height: 10px;
  background-image: url(../assets/cart/arrow-right.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  font-style: normal;
}
.section .item {
  position: relative;
  overflow: hidden;
  background: #fff;
}
.section .item .goods {
  padding-top: 0;
  z-index: 1;
  position: relative;
  min-height: 100px;
  padding: 0px 0 20px 150px;
  background: #fff;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
}
.section .item .goods .van-checkbox {
  top: 40px;
  width: 20px;
  height: 20px;
  z-index: 1;
  display: block;
  font-style: normal;
  position: absolute;
  left: 10px;
}
.section .item .goods img {
  position: absolute;
  left: 40px;
  display: block;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border: 0;
  /* vertical-align: top; */
}
.section .item .content .name {
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 3px;
  word-break: break-all;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.section .item .content .sku {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 5px 10px 0 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 10px;
}

.section .item .content .sku .skuu {
  position: relative;
  background: #f7f7f7;
  padding: 0 15px 0 5px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  color: #666;
  -webkit-box-flex: 1;
  flex: 1;
  border-radius: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.section .item .content .sku .skuu::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -5px;
  background-image: url(../assets/cart/zong.png);
  background-position: -118px -94px;
  background-size: 133px 112px;
  width: 10px;
  height: 10px;
}
.section .item .content .service {
  margin-left: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0 17px 0 5px;
  background: #f7f7f7;
  color: #666;
  border-radius: 2px;
  position: relative;
  font-size: 10px;
}
.section .item .content .service::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  margin-top: 1px;
}
.section .item .content .service::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -5px;
  background-image: url(../assets/cart/zong.png);
  background-position: -118px -94px;
  background-size: 133px 112px;
  width: 10px;
  height: 10px;
}
.section .item .content .price-line {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 5px 10px 0 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 10px;
}
.section .item .content .price-line .price {
  font-family: JDZH-Regular;
  -webkit-box-flex: 1;
  flex: 1;
  line-height: 16px;
  color: #f2270c;
  font-size: 10px;
}
.section .item .content .price-line .price em.int {
  font-size: 16px;
  font-style: normal;
}
.section .item .content .price-line .num {
  position: relative;
  display: block;
  width: 72px;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f7f7f7;
  font-weight: 400;
  font-size: 10px;
}
.section .item .content .price-line .num .minus {
  position: relative;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.section .item .content .price-line .num .minus::after {
  position: absolute;
  left: 50%;
  top: 50%;
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  margin: -1px 0 0 -5px;
  background: #333;
  border-radius: 1px;
}
.section .item .content .price-line .num .plus {
  position: relative;
  float: right;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.section .item .content .price-line .num .plus::after {
  position: absolute;
  left: 50%;
  top: 50%;
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  margin: -1px 0 0 -5px;
  background: #333;
  border-radius: 1px;
}
.section .item .content .price-line .num .plus::before {
  width: 2px;
  height: 10px;
  margin: -5px 0 0 -1px;
  border-radius: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  content: "";
  display: block;
  background: #333;
}
.section .item .content .price-line .input {
  float: left;
  position: relative;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
.section .item .content .price-line .input input {
  color: #333;
  font-size: 14px;
  font-family: JDZH-Regular;
  -webkit-appearance: none;
  border: none;
  width: 30px;
  text-align: center;
  position: relative;
  float: left;
  height: 20px;
  line-height: 20px;
}
.section .item .content .price-line .input input::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  margin-top: 1px;
}
.section .item .content .action {
  margin: 10px 10px 0 0;
  height: 15px;
  color: #999;
  font-size: 0;
  text-align: right;
}
.section .item .content .action .delt {
  position: relative;
  padding: 0 10px;
  line-height: 15px;
  font-size: 10px;
}

/* 弹框 */
.mod-sku-switch {
  position: absolute;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.mod-sku-switch .switch-header {
  display: flex;
  -webkit-box-align: end;
  align-items: flex-end;
  height: 120px;
  padding: 10px;
  font-weight: 400;
  flex-shrink: 0;
  box-sizing: border-box;
}
.mod-sku-switch .switch-header img {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-color: #fff;
}
.mod-sku-switch .switch-header .switch-header-content {
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 10px;
}
.mod-sku-switch .switch-header .switch-header-content .price {
  height: 40px;
  line-height: 40px;
  color: #f2270c;
  font-size: 10px;
  font-weight: 700;
  font-family: arial;
}
.mod-sku-switch .switch-header .switch-header-content .price em {
  font-size: 22px;
  font-style: normal;
}
.mod-sku-switch .switch-header .switch-header-content .prop {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  color: #333;
  line-height: 1.4em;
}
.mod-sku-switch .switch-header .switch-header-content .prop span {
  color: #999;
}
.mod-sku-switch .switch-body {
  height: 320px;
  font-size: 14px;
  padding-bottom: 40px;
  overflow: hidden;
  overflow-y: auto;
  -webkit-box-flex: 1;
  flex: 1;
}
.mod-sku-switch .switch-body .kind {
  color: #333;
  font-weight: 500;
  margin: 15px 10px 0;
  height: 25px;
  line-height: 25px;
}
.mod-sku-switch .switch-body .choose {
  overflow: hidden;
}
.mod-sku-switch .switch-body .choose .choice {
  color: #333;
  background-color: #f3f2f8;
  padding: 0 15px;
  min-width: 20px;
  max-width: 270px;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  float: left;
  text-align: center;
  margin: 5px 0 5px 10px;
  border-radius: 15px;
}
.mod-sku-switch .switch-footer {
  position: relative;
  height: 70px;
  flex-shrink: 0;
}
.mod-sku-switch .switch-footer .btnshow {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 70px;
  padding: 0 10px;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  background: #fff;
}
.mod-sku-switch .switch-footer .btnshow .btn {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
  background-color: #f2270c;
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
}
/* 提交订单 */
.fixbar {
  bottom: 13.33333vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  position: fixed;
  z-index: 120;
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 40px;
}
.fixbar::before {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ddd;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
}
.fixbar .icon-select {
  width: 40px;
  padding-top: 32px;
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  height: 15px;
  color: #999;
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-style: normal;
}
.fixbar .icon-select::after {
  top: 7px;
  background-image: url(../assets/cart/zong.png);
  background-size: 133px 112px;
  width: 20px;
  height: 20px;
  background-position: -98px -40px;
  position: absolute;
  left: 50%;
  content: "";
  margin-left: -10px;
}
.fixbar .icon-select2 {
  width: 40px;
  padding-top: 32px;
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  height: 15px;
  color: #999;
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-style: normal;
}
.fixbar .icon-select2::after {
  top: 7px;
  background-image: url(../assets/cart/zong.png);
  background-size: 133px 112px;
  width: 20px;
  height: 20px;
  background-position: -78px -20px;
  position: absolute;
  left: 50%;
  content: "";
  margin-left: -10px;
}
.fixbar .total {
  display: flex;
  font-size: 12px;
}
.fixbar .total .detail {
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 50px;
  text-align: right;
  position: relative;
  font-family: JDZH-Regular;
  display: flex;
}
.fixbar .total .detail .t-main {
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 0.8rem;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  text-align: right;
}
.fixbar .total .detail .t-main span.t-price {
  color: #f2270c;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 0.8rem;
}
.fixbar .total .buy {
  margin: 5px 5px 0 10px;
  font-weight: 700;
  display: block;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  border-radius: 20px;
  background-color: #f2270c;
  color: #fff;
  /* font-size: .8rem; */
  background-image: linear-gradient(135deg, #f2270c, #f2270c 70%, #f24d0c);
  box-shadow: 0 6px 12px 0 rgba(255, 65, 66, 0.2);
}
.fixbar .total .buy .num {
  font-weight: 400;
  font-size: 0.6rem;
  font-family: none;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

/* 底部 */
.switch-btn-m {
  z-index: 5;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
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
.asale {
  z-index: 999;
  white-space: normal;
  width: auto;
  overflow: hidden;
  max-width: 270px;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 35%;
  margin: auto;
  text-align: center;
  border-radius: 10px;
}
.mod-sku-switch .switch-body .choose .choice.red {
  background-color: #f2270c;
  color: #fff;
}
/* .icon-select{
  position: relative;
  width: 20px !important;
  height: 20px !important;
  border: 1px solid #ccc;
  border-radius: 50%;
} */
.mask-m{
  
  width: 130px;
  height: 30px;
  position: fixed;
  top: 48%;
    left: 36%;
  z-index: 999;
}
.mask-m .mask-box{
  border-radius: 10px;
  text-align: center;
  width: auto;
  overflow: hidden;
  max-width: 270px;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.3);
}
/* 向上 */
.scoll-out-l {
  display: none;
  position: fixed;
  bottom: 80px;
  right: 9px;
  width: 38px;
  height: 38px;
  background-image: url("../assets/home/out.png");
  background-size: 38px 38px;
  background-repeat: no-repeat;
  background-position: 50%;
  z-index: 20;
}
</style>