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

        <div class="product-item" v-for="(item,index) in prolist" :key="index">
          <div class="pro-title">
              <div class="title">
                 <strong>
                  {{item.name}}
                 </strong>
              </div>
              <div class="pro-title-img">
                <img :src="item.imga" alt="">
              </div>
              <div class="pro-title-img-y">{{item.text}}</div>
          </div>
          <div class="product-box">
            <div class="product-y" v-for="(item,index) in item.pro" :key="index">
              <img :src=item.img alt="">
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
import pro1 from "../components/data.js"
console.log(pro1)
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
      num:0,
      prolist:[
        {
          name:"浏览足迹",
          imga:require("../assets/classify-img/qing.png"),
          text:"清空",
          pro:[
            {
              proname:"图书专区",
              img:require("../assets/classify-img/01.jpg")
            },
             {
              proname:"米面调料",
              img:require("../assets/classify-img/09.jpg")
            },
          ]
        },
         {
          name:"618大促",
          text:"",
          imga:require("../assets/classify-img/26.png"),
          pro:[
            {
              proname:"尖货手机",
              img:require("../assets/classify-img/11.png")
            },
             {
              proname:"潮流小电",
              img:require("../assets/classify-img/12.png")
            },
             {
              proname:"超嗨预售",
              img:require("../assets/classify-img/13.jpg")
            },
             {
              proname:"5G盛典",
              img:require("../assets/classify-img/14.jpg")
            },
             {
              proname:"健康爆款",
              img:require("../assets/classify-img/15.jpg")
            },
             {
              proname:"空调",
              img:require("../assets/classify-img/16.jpg")
            },
          ]
        },
        {
          name:"热门分类",
          text:"排行榜>",
          imga:require("../assets/classify-img/08.png"),
          pro:[
            {
              proname:"5G",
              img:require("../assets/classify-img/17.jpg")
            },
             {
              proname:"电脑",
              img:require("../assets/classify-img/18.png")
            },
             {
              proname:"全面屏手机",
              img:require("../assets/classify-img/19.jpg")
            },
             {
              proname:"保健品",
              img:require("../assets/classify-img/20.jpg")
            },
             {
              proname:"口罩",
              img:require("../assets/classify-img/21.jpg")
            },
             {
              proname:"驱蚊用品",
              img:require("../assets/classify-img/22.jpg")
            },
             {
              proname:"电磁炉",
              img:require("../assets/classify-img/23.jpg")
            }, 
            {
              proname:"电热水壶",
              img:require("../assets/classify-img/24.jpg")
            },
             {
              proname:"数据线",
              img:require("../assets/classify-img/25.jpg")
            }, 
            {
              proname:"图书",
              img:require("../assets/classify-img/01.jpg")
            }, 
            {
              proname:"美妆护肤",
              img:require("../assets/classify-img/27.jpg")
            }, 
            {
              proname:"除菌液",
              img:require("../assets/classify-img/28.jpg")
            },
             {
              proname:"休闲零食",
              img:require("../assets/classify-img/29.jpg")
            },
             {
              proname:"充电宝",
              img:require("../assets/classify-img/30.jpg")
            },
             {
              proname:"游戏手机",
              img:require("../assets/classify-img/31.jpg")
            },
             {
              proname:"温度计",
              img:require("../assets/classify-img/32.jpg")
            },
             {
              proname:"摄影机",
              img:require("../assets/classify-img/33.jpg")
            },
             {
              proname:"游戏机",
              img:require("../assets/classify-img/34.jpg")
            },
          ]
        },
      ]
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