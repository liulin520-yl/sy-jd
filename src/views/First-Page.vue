<template>
  <div class="box-l">
    <div class="frist-page-head-l">
      <div class="header-left-l">
        <div class="head-icon-l"></div>
      </div>
      <div class="header-form-l">
        <div class="header-input-l">
          <div class="input-jd-l"></div>
          <i></i>
          <div class="input-fdj-l"></div>
          <div class="search-input-l">鲁花花生油</div>
        </div>
      </div>
      <div class="header-load-l">
        <span>登录</span>
      </div>
    </div>
    <div class="main-content-l">
      <div class="content-fir-l">
        <img src="../assets/page-first/brand1.jpg" alt />
      </div>
      <div class="content-sed-l">
        <div class="sed1-l">
          <div class="sed11-l"></div>
          <div class="sed12-l">
            <img src="../assets/page-first/618-22.jpg" alt />
            <div class="sed-title-l">6.18元秒</div>
          </div>
        </div>
        <div class="sed2-l">
             <img src="../assets/page-first/618-m1.jpg" alt />
             <img src="../assets/page-first/618-m2.jpg" alt />

        </div>
        <div class="sed3-l">
          <div class="sed31-l">
             <img src="../assets/page-first/618-32.jpg" alt />
            <div class="sed-title-l">爆款家电</div>
          </div>
          <div class="sed32-l">
             <img src="../assets/page-first/618-42.jpg" alt />
            <div class="sed-title-l">风电服饰</div>
          </div>
        </div>
      </div>

      <!-- 暂时不做的区域 -->
      <div class="nono"></div>
      <!-- 暂时不做的区域 -->

      <div class="con-adv-l">
        <div class="con-adv-box-l">
          <img src="../assets/page-first/618-22.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="switch-btn-l">
      <div class="switch-btn-item-l">
        <img src="../assets/home/s1.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(2)">
        <img src="../assets/home/s7.png" alt />
      </div>
      <div class="switch-btn-item-l">
        <img src="../assets/home/s4.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(4)">
        <img src="../assets/home/s5.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(5)">
        <img src="../assets/home/s8.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  methods: {
    changeBtn(index) {
      this.page = index;
      if (index == 2) {
        this.$router.push("classify-page");
      }
      if (index == 4) {
        this.$router.push("shopping-page");
      }
      if (index == 5) {
        this.$router.push("noload-page");
      }
    }
  }
};
</script>

<style>
.frist-page-head-l {
  width: 100%;
  height: 44px;
  background-color: rgb(228, 49, 48);
  display: flex;
  justify-content: space-between;
}
.frist-page-head-l .header-left-l {
  width: 40px;
  height: 44px;
  padding: 15px 0 0 14px;
}
.header-left-l .head-icon-l {
  background-color: rgb(228, 49, 48);
  width: 20px;
  height: 18px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* margin: 14px 0 0 15px; */
  background-image: url("../assets/page-first/head-i.png");
}
.header-form-l {
  height: 44px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 10px 0 10px;
}
.header-form-l .header-input-l {
  width: 100%;
  height: 30px;
  background-color: rgb(247, 247, 247);
  border-radius: 15px;
  display: flex;
  position: relative;
}
.header-input-l i {
  content: "";
  position: absolute;
  border-right: 1px solid #ddd;
  top: 7px;
  left: 42px;
  height: 16px;
}
.input-jd-l {
  width: 20px;
  height: 15px;
  background-image: url("../assets/page-first/jd.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 8px 8px 0 15px;
}
.input-fdj-l {
  width: 18px;
  height: 15px;
  background-image: url("../assets/page-first/jd-sprites.png");
  background-position: -80px 0;
  background-size: 200px;
  margin: 8px 0 0 5px;
}
.search-input-l {
  font-size: 12px;
  color: rgb(147, 147, 147);
  padding-left: 5px;
  -webkit-box-flex: 1;
  height: auto;
  margin: 0 0 0 5px;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* width: 100%; */
  line-height: 30px;
}
.header-load-l {
  width: 40px;
  height: 44px;
}
.header-load-l span {
  display: inline-block;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
}
/* 中间商品内容部分 */
.main-content-l {
  flex-grow: 1;
  background-color: aqua;
  overflow: auto;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
.main-content-l .content-fir-l {
  text-align: center;
  width: 100%;
  height: 154px;
  background-image: url("../assets/page-first/bg2.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content-fir-l img {
  width: 90%;
  height: 153px;
  display: inline-block;
  margin: 0 auto;
}
.content-sed-l {
  height: 156px;
  width: 100%;
  max-height: 415px;
  background-color: rgb(231, 220, 220);
  display: flex;
}
.sed1-l {
  height: 100%;
  width: 23.4%;
}
.sed11-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.sed12-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-21.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}
.sed12-l img {
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 10px;
  left: 18px;
  background-color: #fff;
  display: inline-block;
}
.sed31-l img{
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 5px;
  left: 13px;
  background-color: #fff;
  display: inline-block;
}
.sed32-l img{
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 10px;
  left: 13px;
  background-color: #fff;
  display: inline-block;
}
.sed-title-l{
  position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    text-align: center;
    height: .8rem;
    width: 100%;
    font-family: PingFang-SC-Bold;
    font-size: .6rem;
    line-height: .8rem;
    color: #fff;
    letter-spacing: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    padding: 0 .2rem;
}
.sed2-l {
  height: 100%;
  width: 53.1%;
  background-image: url("../assets/page-first/618main.gif");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.sed2-l :first-child{
  width: 89px;
  height: 89px;
  display: inline-block;
  border-radius: 15px;
  position: absolute;
  top: 35px;
  left: 12px;
}
.sed2-l :last-child{
  width: 90px;
  height: 90px;
  border-radius: 15px;
  display: inline-block;
  position: absolute;
  top: 35px;
  right: 13px;
}
.sed3-l {
  height: 100%;
  width: 23.4%;
}
.sed31-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-31.png");
  background-size: 100% 100%;
  position: relative;
  background-repeat: no-repeat;
}
.sed32-l {
  height: 50%;
  position: relative;
  width: 100%;
  background-image: url("../assets/page-first/618-41.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* 暂时不做的界面 */
.nono{
  width: 100%;
  height: 800px;
}

/* 中间广告区域 */
.con-adv-l{
  width: 100%;
  height: 133px;
}
.con-adv-l .con-adv-box-l{
  height: 100%;
  width: 94.5%;
  margin: 0 auto;
  background-color: white;
}







.box-l {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}

.main-content-l .haha {
  width: 100%;
  height: 500px;
  background-color: blue;
  margin: 10px 0px;
}
.switch-btn-l {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
.switch-btn-l .switch-btn-item-l {
  width: 20%;
}
.switch-btn-item-l img {
  width: 60px;
  height: 46px;
  display: inline-block;
  margin-top: 2px;
}
</style>