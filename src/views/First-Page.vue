<template>
  <div class="box">
    <div class="frist-page-head-l">
      <div class="header-left-l">
        <div class="head-icon-l"></div>
      </div>
      <div class="header-form-l">
        <div class="header-input-l">
            <div class="input-jd-l"></div>
            <i ></i>
            <div class="input-fdj-l"></div>
            <div class="search-input-l">
                鲁花花生油
            </div>
        </div>
      </div>
      <div class="header-load-l">
          <span>登录</span>
      </div>
    </div>
    <div class="main-content-l">
        <div class="content-fir-l"></div>
    </div>
    <div class="switch-btn-l">
      <div class="switch-btn-item-l" @click="changeBtn(1)">
        <img src="../assets/home/s1.png" alt v-if="page==1" />
        <img src="../assets/home/s2.png" alt v-else />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(2)">
        <img src="../assets/home/s3.png" alt v-if="page==2" />
        <img src="../assets/home/s7.png" alt v-else >
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(3)">
        <img src="../assets/home/s4.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(4)">
        <img src="../assets/home/s6.png" alt v-if="page==4" />
        <img src="../assets/home/s5.png" alt v-else />
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
      if (index == 1) {
        this.$router.push("first-page");
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
.header-input-l i{
    content: "";
    position: absolute;
    border-right: 1px solid #ddd;
    top: 7px;
    left: 42px;
    height: 16px;
}
.input-jd-l{
    width: 20px;
    height: 15px;
    background-image: url("../assets/page-first/jd.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 8px 8px 0 15px;
}
.input-fdj-l{
    width: 18px;
    height: 15px;
    background-image: url("../assets/page-first/jd-sprites.png");
    background-position: -80px 0;
    background-size: 200px;
    margin: 8px 0 0 5px;
}
.search-input-l{
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
.header-load-l{
    width: 40px;
    height: 44px;
}
.header-load-l span{
    display: inline-block;
    margin: 10px 0;
    color: #fff;
    font-size: 14px;
}
/* 中间商品内容部分 */
.content-fir-l{
    width: 100%;
    
    background-image: url("../assets/page-first/bg1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    /* background-size: cover; */
}




.box-l {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.main-content-l {
  flex-grow: 1;
  background-color: aqua;
  overflow: auto;
  width: 100%;
  margin: 0 auto;
}
.main-content-l .haha{
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