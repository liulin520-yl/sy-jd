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
      <div class="no-load-tel" v-if="showthree">
        <div class="number-y">{{areanum}}</div>
        <div class="area-y">
          <img src="../assets/classify-img/bottom.png" alt />
        </div>
        <div class="input-y">
          <input
            type="text"
            placeholder="请输入手机号"
            @focus="phoneFocus"
            @blur="phoneblur"
            v-model="tel"
          />
        </div>
        <div class="delete-y" @click="deleteone">
          <img src="../assets/classify-img/cha.png" alt v-show="showone" />
        </div>
      </div>
      <div class="no-load-id" v-else>
          <div class="id-name-y">
            <input type="text"  v-model="tel"  placeholder="用户名/邮箱/手机号"  @focus="phoneFocus"  @blur="phoneblur">
          </div>
          <div class="id-img-y"  @click="deleteone">
              <img src="../assets/classify-img/cha.png" alt v-show="showone">
          </div>
      </div>
      <!-- 验证码 -->
      <div class="password-y" v-if="showfour">
        <div class="pass-number-y">
          <input
            type="password"
            placeholder="请输入收到的验证码"
            @focus="passFocus"
            @blur="passblur"
            v-model="pass"
          />
        </div>
        <div class="cha2-y" @click="deletetwo">
          <img src="../assets/classify-img/cha.png" v-show="showtwo" />
        </div>
        <div class="verify" :class="{numcolor:see}" @click="btn">{{authCode}}</div>
      </div>
      <div class="id-password-y" v-else>
            <div class="id-password-y-input">
                 <input type="text"  placeholder="请输入密码" v-model="pass" @focus="passFocus"
            @blur="passblur">
            </div>
            <div class="id-password-y-see">
                  <img src="../assets/classify-img/hu.png" alt>
            </div>
            <div class="id-password-cha"  @click="deletetwo">
                   <img src="../assets/classify-img/cha.png" alt v-show="showtwo">
            </div>
            <div class="wang">
                 忘记密码
            </div>
      </div>
      <!-- 登录 -->
      <div class="landing-y" :class="{active:judge}" @click="login">登录</div>
      <!-- 一键登录 -->
      <div class="landing-one-y">一键登录</div>
      <!-- 账户密码 -->
      <div class="id-password">
        <div @click="loginclick">{{loginway}}</div>
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
          <img src="../assets/classify-img/qq.png" alt />
          <p>QQ</p>
        </div>
        <div>
          <img src="../assets/classify-img/wx.png" alt />
          <p>微信</p>
        </div>
        <div>
          <img src="../assets/classify-img/iphone.png" alt />
          <p>苹果</p>
        </div>
      </div>
      <p class="protocol">
       {{text}}
        <span>京东隐私政策</span>
      </p>
    </div>
    <div class="shade" v-show="shade">请获取短信验证码</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      see: false,
      areanum: "+86",
      showone: false,
      showtwo: false,
      showthree:true,
      tel: "",
      pass: "",
      judge: false,
      authCode: "获取验证码",
      num: 60,
      timer: null,
      loginway:"账户密码登录",
      showfour:true,
      textname:/^1\d{10}$/,
      textpass:/^\d{4}$/,
      shade:false,
      text:"未注册的手机号验证后将自动创建京东账号,登录即代表您已同意"
  
    };
  },
    computed: {
        landing() {
            return this.$store.state.landing
        },
    },
  methods: {
    phoneFocus() {
      this.showone = true;
    },
    passFocus() {
      this.showtwo = true;
    },
    phoneblur() {
      this.showone = false;
    },
    passblur() {
      this.showtwo = false;
    },
    bgcevent() {
      if (this.tel.length == 11) {
        if (this.pass.length != 0) {
          this.judge = true;
        } else {
          this.judge = false;
        }
      }
    },
    seem() {
      if (this.tel.length == 11) {
        this.see = true;
      } else {
        this.see = false;
      }
    },
    deleteone() {
      this.tel = "";
    },
    deletetwo() {
      this.pass = "";
    },
    personReturn() {
      this.$router.go(-1);
    },
    btn() {
      if (this.tel.length == 11) {
        let that = this;
        this.see=false
        this.timer = setInterval(function() {
          that.num--;
          that.authCode = "重新获取(" + that.num + "s)";
        if (that.num == 0) {
          clearInterval(that.timer)
          this.timer=null;
          that.authCode="获取验证码"
          that.num =60
        }
        }, 1000);
      }
    },
    loginclick(){
      if(this.loginway=="账户密码登录"){
        this.loginway="短信验证码登录"
        this.showthree=!this.showthree
        this.showfour=!this.showfour
      }else{
        this.loginway="账户密码登录"
        this.showthree=!this.showthree
        this.showfour=!this.showfour
      };
      if(this.text=="未注册的手机号验证后将自动创建京东账号,登录即代表您已同意"){
        this.text="登录及代表你已同意"
      }else{
        this.text="未注册的手机号验证后将自动创建京东账号,登录即代表您已同意"
      }
    },
    // 登录
    login() {
      clearInterval(this.timer);
      this.authCode="获取验证码"
      this.num =60
      if(this.textname.test(this.tel)==true){
        if(this.textpass.test(this.pass)==true){
          this.$router.push("personage-page");
          this.$store.state.landing=true
          localStorage.setItem("tel", JSON.stringify(this.tel))
          localStorage.setItem("pass", JSON.stringify(this.pass))
        }else{
          this.shade=true
          let that=this
          setTimeout(function(){
              that.shade=false
          },2000)
        }
      }
    },
  },
  watch: {
    tel: function() {
      this.bgcevent(), this.seem();
      if(this.tel.length!=11){
         this.num=60
         clearInterval(this.timer);
         this.authCode="获取验证码"
      }
    },
    pass: function() {
      this.bgcevent();
    }
  },
    created() {
        let a = localStorage.getItem("tel")
        if (a) {
            a = JSON.parse(a)
            this.tel = a
        }
        let b = localStorage.getItem("pass")
        if (b) {
            b = JSON.parse(b)
            this.pass = b
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
  padding: 2.5px;
}
.no-load-return img {
  width: 20px;
  height: 20px;
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
  margin: 0px 5px;
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
  margin: 0px 5px;
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
  border-left: 1px solid #ccc;
}
.numcolor {
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
.active {
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
  color: rgb(0, 0, 0, 0.4);
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
.landing-img-box {
  width: 100%;
  height: 69px;
  margin: 25px 0px 12px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.landing-img-box > div {
  width: 48px;
  height: 69px;
  margin: 0px 15px;
  text-align: center;
  font-size: 12px;
}
.landing-img-box > div img {
  width: 48px;
}
.protocol {
  text-align: center;
  font-size: 13px;
  color: rgb(0, 0, 0, 0.3);
}
.protocol span {
  color: #4a90e2;
}
/* 账号登录 */
.no-load-id{
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.id-name-y{
  flex-grow: 1;
}
.id-name-y input{
  width: 100%;
  height: 29px;
  border: none;
  outline: none;
}
.id-img-y{
  width: 14px;
  height: 29px;
  text-align: center;
  line-height: 29px;
}
.id-img-y img{
  width: 14px;
  height: 14px;
}
/* 密码 */
.id-password-y{
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
}

.id-password-y-input{
  flex-grow: 1;
}
.id-password-y-input input{
  width: 100%;
  height: 29px;
  border: none;
  outline: none;
}
.id-password-y-see{
  width: 20px;
  height: 29px;
  text-align: center;
  line-height: 29px;
  margin: 0px 5px;
}
.id-password-y-see img{
  width: 20px;
  height: 20px;
}
.id-password-cha{
  width: 14px;
  height: 29px;
  text-align: center;
  line-height: 29px;
  margin: 0px 5px;
}
.id-password-cha img{
  width: 14px;
  height: 14px;
}
.wang{
  width: 110px;
  height: 23px;
  color: #848689;
  font-size: 14px;
  text-align: center;
  border-left: 1px solid #ccc;
}
.shade{
  width: 140px;
  height: 50px;
  background-color: rgb(56, 55, 55);
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -70px;
  line-height: 50px;
  font-size: 16px;
  color: white;
  text-align: center;
  border-radius: 10PX;
}
</style>>

