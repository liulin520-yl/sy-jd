<template>
  <div class="no-load-y">
    <div class="no-load-head-y">
      <div class="no-load-return" @click="personReturn">
        <img src="../assets/classify-img/left-y.png" alt />
      </div>
      <div class="no-load-title">京东登录注册</div>
    </div>
    <div class="no-load-body-y">
      <!-- 手机账户 -->
      <div class="no-load-tel">
        <div class="number-y">{{areanum}}</div>
        <div class="area-y">
          <img src="../assets/classify-img/bottom.png" alt />
        </div>
        <div class="input-y">
          <input type="text" placeholder="请输入手机号"  @focus="phoneFocus" @blur="phoneblur" v-model="tel">
        </div>
        <div class="delete-y" @click="deleteone">
          <img src="../assets/classify-img/cha.png" alt v-show="showone">
        </div>
      </div>
      <!-- 验证码 -->
      <div class="password-y">
        <div class="pass-number-y">
          <input type="password" placeholder="请输入收到的验证码" @focus="passFocus" @blur="passblur" v-model="pass">
        </div>
        <div class="cha2-y"  @click="deletetwo">
          <img src="../assets/classify-img/cha.png" v-show="showtwo">
        </div>
        <div class="verify" :class="{numcolor:see}">获取验证码</div>
      </div>
      <!-- 登录 -->
      <div class="landing-y" :class="{active:judge}" @click="login">登录</div>
      <!-- 一键登录 -->
      <div class="landing-one-y">一键登录</div>
      <!-- 账户密码 -->
      <div class="id-password">
        <div>账户密码登录</div>
        <div>手机快速注册</div>
      </div>
      <!-- 其他登录方式 -->
      <div class="landing-way-y">
        <div class="wire-one-y"></div>
        <div class="landing-way">其他登录方式</div>
        <div class="wire-two-y"></div>
      </div>
      <!-- 登录图标-->
      <div class="landing-img-box">
         <div>
           <img src="../assets/classify-img/qq.png" alt="">
           <p>QQ</p>
         </div>
         <div>
           <img src="../assets/classify-img/wx.png" alt="">
           <p>微信</p>
         </div>
         <div>
           <img src="../assets/classify-img/iphone.png" alt="">
           <p>苹果</p>
         </div>
      </div>
      <p class="protocol">未注册的手机号验证后将自动创建京东账号, 
        登录即代表您已同意<span>京东隐私政策</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
         see:false,
         areanum:"+86",
         showone:false,
         showtwo:false,
         tel:"",
         pass:"",
         judge:false
    }
  },
  methods:{
    phoneFocus(){
      this.showone=true
    },
    passFocus(){
      this.showtwo=true
    },
    phoneblur(){
      this.showone=false
    },
    passblur(){
      this.showtwo=false;
    },
    bgcevent(){
      if(this.tel.length==11){
        if(this.pass.length!=0){
          this.judge=true
        }else{
          this.judge=false
        }
      }
    },
    seem(){
      if(this.tel.length==11){
        this.see=true
      }else{
        this.see=false
      }
    },
    deleteone(){
      this.tel=""
    },
    deletetwo(){
      this.pass=""
    },
    personReturn(){
       this.$router.go(-1)
    },
    login(){
       this.$router.push("personage-page")
    }
  },
  watch:{
    tel:function(){
        this.bgcevent(),
        this.seem()
    },
    pass:function(){
        this.bgcevent()
    } 
  }
};
</script>

<style scoped>
.no-load-y {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/*  头部 */
.no-load-head-y {
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
.no-load-return {
  width: 25px;
  height: 25px;
}
.no-load-return img {
  width: 25px;
  height: 25px;
}
.no-load-title {
  flex-grow: 1;
  font-size: 17px;
}
/* 主要内容 */
.no-load-body-y {
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
  padding: 20px 25px;
}
.no-load-tel {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.number-y {
  font-size: 16px;
}
.area-y {
  width: 14px;
  height: 20px;
  margin-left: 6px;
}
.area-y img {
  width: 14px;
  height: 10px;
}
.input-y {
  flex-grow: 1;
  margin-left: 5px;
}
.input-y input {
  width: 100%;
  height: 29px;
  border: none;
  outline: none;
}
.delete-y {
  width: 14px;
  height: 29px;
  text-align: center;
  line-height: 29px;
}
.delete-y img {
  width: 14px;
  height: 14px;
}
/* 验证码区 */
.password-y {
  margin-top: 20px;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pass-number-y {
  flex-grow: 1;
}
.pass-number-y input {
  width: 100%;
  height: 29px;
  border: none;
  outline: none;
}
.cha2-y {
  width: 14px;
  height: 29px;
  text-align: center;
  line-height: 29px;
}
.cha2-y img {
  width: 14px;
  height: 14px;
}
.verify {
  width: 110px;
  height: 23px;
  color: #848689;
  font-size: 14px;
  text-align: center;
}
.numcolor{
  color: #f10000;
}
/* 登录 */
.landing-y {
  margin-top: 15px;
  height: 50px;
  width: 100%;
  background-color: rgb(255, 192, 181);
  border-radius: 25px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
.active{
  background-color: rgb(255, 31, 0);
}
/* 一键登录 */
.landing-one-y {
  margin-top: 10px;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #f10000;
  color: #f10000;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
/* 账户 密码 */
.id-password {
  margin-top: 20px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(0, 0,0, 0.4);
}
/* 登录方法 */
.landing-way-y {
  margin-top: 77px;
  height: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.landing-way {
  width: 140px;
  height: 16px;
  font-style: 12px;
  color: rgb(0, 0, 0, 0.2);
  text-align: center;
  line-height: 16px;
}
.wire-one-y {
  flex-grow: 1;
  height: 1px;
  background-color: rgb(0, 0, 0, 0.2);
}
.wire-two-y {
  flex-grow: 1;
  height: 1px;
  background-color: rgb(0, 0, 0, 0.2);
}
/* 登录图标 */
.landing-img-box{
  width: 100%;
  height: 69px;
  margin: 25px 0px 12px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.landing-img-box>div{
  width: 48px;
  height: 69px;
  margin: 0px 15px;
  text-align: center;
  font-size: 12px;
}
.landing-img-box>div img{
  width: 48px;
}
.protocol{
  text-align: center;
  font-size: 13px;
  color: rgb(0, 0, 0,0.3);
}
.protocol span{
  color: #4A90E2;
}
</style>>

