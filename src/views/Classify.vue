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
        <div class="navigation-item" v-for="item in list" :key="item">{{item}}</div>
      </div>
      <div class="mian-content">

        <div class="product-item">
          <p>当季主推</p>
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

         <div class="product-item">
          <p>当季主推</p>
          <div class="product-box">
                <div class="product-y">
                  <img src="../assets/classify-img/01.jpg" alt />
                  <p>图书专区</p>
                </div>
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
    <div class="switch-btn">
      <div class="switch-btn-item">
        <img src alt />1
      </div>
      <div class="switch-btn-item">
        <img src alt />2
      </div>
      <div class="switch-btn-item">
        <img src alt />6
      </div>
      <div class="switch-btn-item">
        <img src alt />5
      </div>
      <div class="switch-btn-item">
        <img src alt />7
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
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
                   ]
        }
    }
};
</script>

<style>
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
  background-color: rgb(248, 248, 248);
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
.product-item > p {
  font-style: 14px;
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
.switch-btn {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 0, 212);
}
.switch-btn .switch-btn-item {
  width: 20%;
  padding: 10px 0;
}
</style>