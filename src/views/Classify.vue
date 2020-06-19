<template>
  <div class="box-y">
    <!-- 头部 -->
    <div class="classify-head-y">
      <div class="classify-head-return-y">
        <img src="../assets/classify-img/left-y.png" alt />
      </div>
      <div class="classify-head-input-y">
        <input type="text" placeholder="oppo手机" />
      </div>
      <div class="classify-head-dot-y">
        <img src="../assets/classify-img/dot.png" alt />
      </div>
    </div>
    <!-- 内容 -->
    <div class="classify-main-y">
      <div class="navigation">
        <div class="navigation-box-y">
            <div class="navigation-item" ref="items" :class="{active:num==index}" v-for="(item,index) in list" :key="index" @click="clickPro(index)">{{item}}</div>
        </div>
      </div>
      <div class="mian-content">

        <div class="product-item">
          <div class="pro-title">
              <div class="title">
                 <strong>
                  当季主推
                 </strong>
              </div>
              <div class="pro-title-img">
                <img src="../assets/classify-img/qing.png" alt="">
              </div>
              <div class="pro-title-img-y">清空</div>
          </div>
          <div class="product-box">
            <div class="product-y">
              <img src="../assets/classify-img/01.jpg" alt />
              <p>图书专区</p>
            </div>
            <div class="product-y">
              <img src="../assets/classify-img/01.jpg" alt />
              <p>图书专区</p>
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
        <img src="../assets/home/s3.png" alt />
      </div>
      <div class="switch-btn-item-y">
        <img src="../assets/home/s4.png" alt />
      </div>
      <div class="switch-btn-item-y" @click="changeBtn(4)">
        <img src="../assets/home/s5.png" alt />
      </div>
      <div class="switch-btn-item-y" @click="changeBtn(5)">
        <img src="../assets/home/s8.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "计生情趣",
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
        "工业品",
      ],
      num:0
    };
  },
  methods: {
    changeBtn(index) {
      this.page = index;
      if (index == 1) {
        this.$router.push("/");
      }
      if (index == 4) {
        this.$router.push("shopping-page");
      }
      if (index == 5) {
        this.$router.push("noload-page");
      }
    },
    clickPro(index){
      this.num=index;
      // let height=this.$refs.items[0].clientHeight;
      // this.$refs.left.scrollTo({
      //   top:50*index,
      //   behavior:"smooth"
      // })
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
  width: 25px;
  height: 25px;
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
.navigation-box-y{
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
.active{
  background-color: rgb(255, 255, 255);
  color: #E93B3D;
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
.pro-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pro-title-img{
  width: 15px;
  height: 15px;
}
.pro-title-img img{
   width: 15px;
  height: 15px;
}
.pro-title-img-y{
  width: 45px;
  height: 15px;
  color: #848689;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
}
.pro-title .title{
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
  width: 33.3%;
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