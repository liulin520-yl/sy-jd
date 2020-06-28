<template>
  <div class="box-y">
    <!-- 头部 -->
    <div class="classify-head-y">
      <div class="classify-head-return-y" @click="classReturn">
        <img src="../assets/classify-img/left-y.png" alt />
      </div>
      <div class="classify-head-input-y">
        <input type="text" placeholder="oppo手机" @focus="focu" />
      </div>
      <div class="classify-head-dot-y">
        <img src="../assets/classify-img/dot.png" alt />
      </div>
    </div>
    <!-- 内容 -->
    <div class="classify-main-y">

      <div class="navigation">
        <div class="navigation-box-y" ref="left">
          <div
            class="navigation-item"
            ref="items"
            :class="{active:num==index}"
            v-for="(item,index) in list"
            :key="index"
            @click="clickPro(index)"
          >{{item}}</div>
        </div>
      </div>

      <div class="mian-content">
        <div class="product-item" v-for="(item,index) in prolist" :key="index">
          <div class="pro-title">
            <div class="title">
              <strong>{{item.name}}</strong>
            </div>
            <div class="pro-title-img">
              <img :src="item.imga" alt />
            </div>
            <div class="pro-title-img-y">{{item.text}}</div>
          </div>
          <div class="product-box">
            <div class="product-y" v-for="(item,index) in item.pro" :key="index">
              <img :src="item.img" alt />
              <p>{{item.proname}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="switch-btn-y">
      <div class="switch-btn-item-y" @click="changeBtn(1)">
        <img src="../assets/home/s2.png" alt />
      </div>
      <div class="switch-btn-item-y">
        <img src="../assets/home/s3.png" @click="changeBtn(2)">
      </div>
      <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
      <div class="switch-btn-item-y">
        <img src="../assets/home/s4.png" alt />
      </div>
      </a>
      <div class="switch-btn-item-y" @click="changeBtn(4)">
        <img src="../assets/home/s5.png" alt />
      </div>
      <div class="switch-btn-item-y" @click="changeBtn(5)">
        <img src="../assets/home/s10.png" v-if="landing">
        <img src="../assets/home/s8.png" v-else>
      </div>
    </div>
  </div>
</template>

<script>
import { pro1 } from "../components/data";
import { pro2 } from "../components/data";
import { pro3 } from "../components/data";
import { pro4 } from "../components/data";
import { pro5 } from "../components/data";
import { pro6 } from "../components/data";
import { pro7 } from "../components/data";

export default {
  computed: {
        landing() {
            return this.$store.state.landing
        },
    },
  data() {
    return {
      list: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母婴童装",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食物生鲜",
        "酒水饮料",
        "家具家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢侈品",
        "京东国际",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品"
      ],
      num: 0,
      prolist: pro1
    };
  },
  methods: {
    focu() {
      this.$router.push("focus-page");
    },
    classReturn() {
      this.$router.go(-1);
    },
    changeBtn(index) {
      this.page = index;
      if (index == 1) {
        this.$router.push("/");
      }
      if (index == 4) {
        this.$router.push("shopping-page");
      }
      if (index == 5) {
        if(this.landing==false){
         this.$router.push("noload-page");
        }else{
          this.$router.push("personage-page");
        }
      }
    },
    clickPro(index) {
      this.num = index;
      if (index == 0) {
        this.prolist = pro1;
      } else if (index == 1){
        this.prolist = pro2;
      } else if (index == 2){
        this.prolist = pro3;
      } else if (index == 3){
        this.prolist = pro4;
      } else if (index == 4){
        this.prolist = pro5;
      } else if (index == 5){
        this.prolist = pro6;
      } else if (index == 6){
        this.prolist = pro7;
      }
      let height=this.$refs.items[0].clientHeight;
      this.$refs.left.scrollTo({
        top:height*index,
        behavior:"smooth"
      })
    }
    
  }
};
</script>

<style  scoped>
.box-y {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 分类的样式 头部 */
.classify-head-y {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(229, 229, 229);
}
.classify-head-return-y {
  text-align: center;
  width: 25px;
  height: 30px;
  padding: 2.5px 0px;
}
.classify-head-return-y img {
  width: 20px;
  height: 20px;
}
.classify-head-input-y {
  padding-left: 10px;
  flex-grow: 1;
}
.classify-head-input-y input {
  height: 30px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid rgb(237, 237, 237);
  padding-left: 15%;
  background-color: rgb(247, 247, 247);
  outline: none;
  background: url("../assets/classify-img/big.png") no-repeat 6% center;
  background-size: 15px 15px;
}
.classify-head-dot-y {
  width: 30px;
  height: 30px;
  text-align: right;
  padding: 5px 0px;
}
.classify-head-dot-y img {
  width: 20px;
  height: 20px;
}
/* 分类的样式 内容 */
.classify-main-y {
  height: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* 导航 */
.navigation {
  width: 20%;
  align-items: stretch;
  background-color: rgb(248, 248, 248);
  /* overflow: auto; */
  overflow: hidden;
}
.navigation-box-y {
  width: 110%;
  height: 100%;
  /* background-color: rgb(14, 144, 177); */
  overflow: auto;
}
.navigation-item {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #333;
  font-size: 14px;
}
.active {
  background-color: rgb(255, 255, 255);
  color: #e93b3d;
}
/* 产品 */
.mian-content {
  width: 80%;
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
  overflow: auto;
}
.product-item {
  margin: 19px 7px 0px 7px;
}
.pro-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pro-title-img {
  width: 15px;
  height: 15px;
}
.pro-title-img img {
  width: 15px;
  height: 15px;
}
.pro-title-img-y {
  width: 45px;
  height: 15px;
  color: #848689;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
}
.pro-title .title {
  font-size: 14px;
  flex-grow: 1;
}
.product-box {
  margin: 16px 0px 0px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.product-y {
  width: 33%;
  height: 100px;
  flex-shrink: 0;
  text-align: center;
}
.product-y img {
  width: 70%;
}
.product-y p {
  font-size: 12px;
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