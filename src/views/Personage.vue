<template>
  <div class="big-box-y">
    <div class="personMain-y">
      <!-- 头部 我的京东 -->
      <div class="personMain-head-y">
        <div class="person-return-y" @click="perReturn">
          <img src="../assets/classify-img/left-y.png" alt />
        </div>
        <div class="me-jd-y">我的京东</div>
        <div class="preson-dot-y">
          <img src="../assets/classify-img/dot.png" alt />
        </div>
      </div>
      <!-- 个人中心 -->
      <div class="person-data-y">
        <!-- 账户设置 -->
        <div class="id-set-y">
          <img src="../assets/classify-img/set.png" alt />
          <span>账户设置</span>
        </div>
        <!-- 个人 -->
        <div class="i-y">
          <div class="i-img-y">
            <img src="../assets/classify-img/I.jpg" alt />
          </div>
          <div class="i-introduce-y">
            <div class="introduce-name-y">
              <div class="shanxian-y">jd1835614jiumin</div>
              <div class="iconone">
                <img src="../assets/classify-img/down.png" alt />
              </div>
              <div class="icontwo">
                <img src="../assets/classify-img/jd.png" alt />
                <span>铜牌</span>
              </div>
            </div>
            <div class="introduce-id-y">用户名:闪现到ad怀里</div>
            <div class="introduce-money">
              <div class="price-y">京享值1006</div>
              <div class="credit-y">小白信用67.7></div>
            </div>
          </div>
        </div>
        <!-- 红包 -->
        <div class="red-packed-y">
          <div class="red-packed-main">
            <div class="red-packed-left">
              <img src="../assets/classify-img/bao-left.png" alt />
              <strong>|</strong>
              <span>30元无门槛红包 开卡立得</span>
            </div>
            <div class="red-packed-right">
              <span>立即查看</span>
              <strong>></strong>
            </div>
          </div>
        </div>
        <!-- 付款栏 -->
      </div>
      <div class="payment">
        <div class="payment-one">
          <div>
            <img src="../assets/classify-img/one.png" alt />
          </div>
          <p>代付款</p>
        </div>
        <div class="payment-two">
          <div>
            <img src="../assets/classify-img/two.png" alt />
          </div>
          <p>待收货</p>
        </div>
        <div class="payment-three">
          <div>
            <img src="../assets/classify-img/three.png" alt />
          </div>
          <p>退换/售后</p>
        </div>
        <div class="payment-four">
          <div>
            <img src="../assets/classify-img/four.png" alt />
          </div>
          <p>全部订单</p>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="discount-y">
        <div>
          <P>0张</P>
          <div>
            <span>京东劵</span>
          </div>
        </div>
        <div>
          <p>4713.00元</p>
          <div>
            <span>白条额度</span>
          </div>
        </div>
        <div>
          <p>44个</p>
          <div>
            <span>京豆</span>
          </div>
        </div>
        <div>
          <p>0元</p>
          <div>
            <span>红包</span>
          </div>
        </div>
        <div>
          <div class="discount-y-img">
            <img src="../assets/classify-img/pay1.png" alt />
          </div>
          <span>我的资产</span>
        </div>
      </div>
      <!-- 店铺 -->
      <div class="my-shop">
        <div>
          <p>0</p>
          <span>商品收藏</span>
        </div>
        <div>
          <p>0</p>
          <span>店铺收藏</span>
        </div>
        <div>
          <p>2</p>
          <span>我的足迹</span>
        </div>
      </div>
      <!-- 应用 -->
      <div class="my-use-v">
        <div>
          <img src="../assets/classify-img/01.png" alt />
          <p>我的预约</p>
        </div>
        <div>
          <img src="../assets/classify-img/02.png" alt />
          <p>高价回收</p>
        </div>
        <div>
          <img src="../assets/classify-img/03.png" alt />
          <p>京东火车票</p>
        </div>
        <div>
          <img src="../assets/classify-img/04.png" alt />
          <p>应用推荐</p>
        </div>
        <div>
          <img src="../assets/classify-img/05.png" alt />
          <p>京东机票</p>
        </div>
        <div>
          <img src="../assets/classify-img/06.png" alt />
          <p>京东酒店</p>
        </div>
        <div>
          <img src="../assets/classify-img/07.png" alt />
          <p>闲置换钱</p>
        </div>
      </div>
      <!-- 客户服务 -->
      <div class="client-y">
        <div class="client-left-y">客户服务</div>
        <div class="client-right"></div>
      </div>
      <!-- 为你推荐 -->
      <div class="recomment-y">
        <div class="recomment-left"></div>
        <div class="recomment-center">
          <strong>·</strong>
          <span>为你推荐</span>
          <strong>·</strong>
        </div>
        <div class="recomment-right"></div>
      </div>
      <!-- 商品 -->
      <div class="recomment-pro">
        <div class="recomment-pro-item" v-for="(item,index) in orderList" :key="index" @click="perRouter(index)">
          <div class="pro-item-img">
            <img :src="item.img1" alt />
          </div>
          <div class="pro-item-introduce">
            <p>
              <img class="pro-one" src="../assets/classify-img/pro-one.png" alt />
              <img class="pro-two" src="../assets/classify-img/pro-two.png" alt />
              <span>{{item.title}}</span>
            </p>
          </div>
          <p class="me-price">￥{{item.price}}</p>
        </div>
        
       
      </div>
    </div>
    <div class="switch-btn-y">
      <div class="switch-btn-item-y" @click="changeBtn(1)">
        <img src="../assets/home/s2.png" alt />
      </div>
      <div class="switch-btn-item-y">
        <img src="../assets/home/s7.png" @click="changeBtn(2)" />
      </div>
      <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
      <div class="switch-btn-item-y">
        <img src="../assets/home/s4.png" @click="changeBtn(3)" />
      </div>
      </a>
      <div class="switch-btn-item-y" @click="changeBtn(4)">
        <img src="../assets/home/s5.png" alt />
      </div>
      <div class="switch-btn-item-y" @click="changeBtn(5)">
        <img src="../assets/home/s9.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    landing() {
      return this.$store.state.landing;
    },    
    orderList() {
      return this.$store.state.orderList;
    },
  },

  methods: {
    perReturn() {
      this.$router.go(-2);
    },
    changeBtn(index) {
      if (index == 1) {
        this.$router.push("/");
      }
      if (index == 2) {
        this.$router.push("classify-page");
      }
      if (index == 4) {
        this.$router.push("shopping-page");
      }
    },
    perRouter(index){
      this.$router.push({
        path: "part-main",
        query: {
          num: index
        }
      });
    }
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.big-box-y {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 主要内容 */
.personMain-y {
  flex-grow: 1;
  background-color: rgb(247, 247, 247);
  overflow: auto;
}
/* 头部 我的京东 */
.personMain-head-y {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
}
.person-return-y {
  width: 40px;
  height: 44px;
  text-align: center;
  padding: 11px 0px;
}
.person-return-y img {
  width: 20px;
  height: 20px;
}
.preson-dot-y {
  width: 40px;
  height: 44px;
  text-align: center;
  padding: 11px 0px;
}
.preson-dot-y img {
  width: 20px;
  height: 20px;
}
.me-jd-y {
  height: 44px;
  flex-grow: 1;
  color: #333333;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
}
/* 个人中心 */
.person-data-y {
  overflow: hidden;
  width: 100%;
  height: 134px;
  background-color: rgb(15, 133, 211);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 300px 20px;
  border-bottom-left-radius: 300px 20px;
  background-image: linear-gradient(90deg, rgb(235, 60, 60), rgb(255, 116, 89));
}
/* 账户设置 */
.id-set-y {
  width: 100%;
  height: 25px;
  padding: 0px 15px;
  text-align: right;
}
.id-set-y img {
  width: 12px;
  height: 12px;
  margin-top: 14px;
}
.id-set-y span {
  margin-top: 9px;
  color: rgb(76, 0, 0, 0.7);
  font-size: 12px;
  margin-left: 5px;
}
/* 个人 */
.i-y {
  width: 100%;
  height: 72px;
  padding: 0px 15px 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.i-img-y {
  width: 60px;
  height: 60px;
}
.i-img-y > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.i-introduce-y {
  padding-left: 15px;
  height: 61px;
  flex-grow: 1;
}
.introduce-name-y {
  width: 100%;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.shanxian-y {
  color: #ffffff;
  font-size: 14px;
}
.iconone {
  width: 20px;
  height: 20px;
  margin-left: 8px;
  text-align: center;
}
.iconone img {
  width: 15px;
  height: 15px;
}
.icontwo {
  width: 50px;
  height: 20px;
  background-color: rgb(200, 72, 63);
  border-radius: 15px;
}
.icontwo span {
  color: white;
  font-size: 12px;
  vertical-align: top;
}
.icontwo img {
  width: 18px;
  height: 18px;
  vertical-align: center;
}
.introduce-id-y {
  width: 100%;
  height: 18px;
  color: rgb(255, 255, 255, 0.7);
  font-size: 12px;
  line-height: 18px;
}
.introduce-money {
  width: 100%;
  height: 22px;
  padding-top: 6px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.price-y {
  width: 76px;
  height: 16px;
  background-color: rgb(200, 72, 63);
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}
.credit-y {
  width: 92px;
  height: 16px;
  background-color: rgb(200, 72, 63);
  margin-left: 8px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}
/* 红包 */
.red-packed-y {
  width: 90%;
  height: 37px;
  padding-top: 9px;
  background-color: rgb(114, 69, 69);
  margin: 0 auto;
  background: url("../assets/classify-img/bao.png") no-repeat center center;
  background-size: 100% 100%;
}
.red-packed-main {
  width: 95%;
  height: 18px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.red-packed-left {
  height: 18px;
  flex-grow: 1;
  color: #ffe678;
  font-size: 12px;
}
.red-packed-left strong {
  margin: 0px 10px;
}
.red-packed-left img {
  width: 57px;
  height: 12px;
}
.red-packed-right {
  height: 18px;
  width: 58px;
  color: #ffe678;
  font-size: 12px;
}
/* 付款栏 */
.payment {
  width: 100%;
  height: 84px;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.payment > div {
  width: 25%;
  text-align: center;
  font-size: 12px;
  color: #666666;
}
.payment > div > div {
  padding-top: 11px;
  height: 42px;
  text-align: center;
}
.payment > div > div > img {
  width: 20px;
  height: 20px;
}
.payment p {
  line-height: 32px;
}
/* 优惠券 */
.discount-y {
  margin-top: 10px;
  width: 100%;
  height: 72px;
  background-color: rgb(255, 255, 255);
  padding: 17px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.discount-y > div {
  width: 20%;
  height: 45px;
  text-align: center;
}
.discount-y > div > p {
  color: #e93b3d;
  font-size: 16px;
}
.discount-y > div span {
  color: #666666;
  font-size: 12px;
  line-height: 34px;
}
.discount-y-img {
  height: 21px;
}
.discount-y-img img {
  width: 20px;
  height: 20px;
}
/* 店铺 */
.my-shop {
  height: 72px;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  padding: 17px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}
.my-shop > div {
  width: 33.3%;
  height: 45px;
}
.my-shop > div > p {
  text-align: center;
  font-size: 16px;
  color: #000000;
}
.my-shop > div > span {
  line-height: 34px;
  font-size: 12px;
  color: #000000;
}
/* 应用 */
.my-use-v {
  width: 100%;
  height: 130px;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.my-use-v > div {
  width: 25%;
  background-color: rgb(255, 255, 255);
  padding: 10px 0px 8px 0px;
  text-align: center;
}
.my-use-v > div > p {
  font-size: 12px;
  color: #666666;
  text-align: center;
}
.my-use-v > div > img {
  width: 20px;
  height: 20px;
}
/* 客户服务 */
.client-y {
  width: 100%;
  height: 45px;
  margin: 15px 0px;
  padding: 0px 10px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.client-left-y {
  flex-grow: 1;
  line-height: 45px;
  font-size: 14px;
  color: #666666;
}
.client-right {
  width: 20px;
  background-color: rgb(82, 52, 52);
  background: url("../assets/classify-img/right.png") no-repeat center center;
  background-size: 15px 15px;
}
/* 为你推荐 */
.recomment-y {
  width: 100%;
  margin: 15px 0px;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.recomment-center {
  width: 78px;
  height: 12px;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  color: #666666;
}
.recomment-center span {
  margin: 0px 10px;
}
.recomment-left {
  height: 1px;
  background-color: #666666;
  background-color: rgb(227, 227, 227);
  flex-grow: 1;
}
.recomment-right {
  height: 1px;
  background-color: rgb(227, 227, 227);
  flex-grow: 1;
}
/* 商品 */
.recomment-pro {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.recomment-pro-item {
  width: 50%;
  padding: 15px 15px 0px 15px;
}
.pro-item-img {
  width: 100%;
  background-color: #fff;
}
.pro-item-img img {
  width: 100%;
}
.pro-item-introduce {
  height: 36px;
  margin: 12px 0px 4px 0px;
  font-size: 12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pro-one {
  width: 34px;
  height: 14px;
}
.pro-two {
  width: 51px;
  height: 14px;
  margin-left: 5px;
}
.me-price {
  font-size: 14px;
  color: #e93b3d;
}
/* 分页的底部 */
.switch-btn-y {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
.switch-btn-y .switch-btn-item-y {
  width: 20%;
}
.switch-btn-item-y img {
  width: 60px;
  height: 46px;
  display: inline-block;
  margin-top: 2px;
}
</style>