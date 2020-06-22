<template>
  <div class="focus-box-y">
      <div class="focus-head-y">
          <div class="focus-return-y" @click="returnFocus">
              <img src="../assets/classify-img/left-y.png" alt />
          </div>
          <div class="focus-input-y">
              <input type="text" placeholder="外星人笔记本">
          </div>
          <div class="focus-serach-y">搜索</div>
      </div>
      <div class="main-focus-y">
          <div class="main-focus">最近搜索</div>
      </div>
      <div class="his-pro-y">
          <div>
              外置光驱
          </div>
      </div>
       <div class="main-hot">
          <div class="main-hot-left">热门搜索</div>
          <div class="main-hot-right">隐藏</div>
      </div>
      <div class="his-product">
          <div href="">洗面奶</div>
          <div href="">加湿器</div>
          <div href="">自拍杆</div>
          <div href="">一体机电脑</div>
          <div href="">按摩器</div>
          <div href="">儿童遥控飞机</div>
          <div href="">卡卡西手办</div>
          <div href="">魔方杯子</div>
          <div href="">儿童遥控飞机</div>

      </div>
  </div>
</template>

<script>
export default {
   methods:{
        returnFocus(){
             this.$router.go(-1);
        }
   }
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
.focus-box-y{
    width: 100%;
    height: 100%;
}
.focus-head-y{
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
}
.focus-return-y{
    width: 40px;
    height: 44px;
    text-align: center;
    padding-top: 12px;
}
.focus-return-y img{
    width: 20px;
    height: 20px;
}
.focus-input-y{
    flex-grow: 1;
    height: 100%;
    padding-right: 10px;
}
.focus-serach-y{
    width: 40px;
    height: 28px;
    background-color:#E93B3D;
    border-radius: 4px;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 28px;
}
.focus-input-y input {
  font-size: 12px;
  margin-top: 7px;
  height: 30px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid rgb(237, 237, 237);
  padding-left: 15%;
  outline: none;
  background: url("../assets/classify-img/big.png") no-repeat 6% center;
  background-size: 15px 15px;
}
.main-focus-y{
    width: 100%;
    height: 26px;
    padding:0px 15px 11px;
    background-color: rgb(255, 255, 255);
    margin-top: 10px;
}
.main-focus{
    font-size: 15px;
    color: #232623;
    background: url("../assets/classify-img/qing.png") no-repeat top right;
    background-size: 15px 15px;
}
.his-pro-y{
    width: 100%;
    height: 33px;
    padding: 0 20px;
    font-size: 12px;
}
.his-pro-y div{
    width: 74px;
    height: 23px;
    background-color: rgb(240, 242, 245);
    text-align: center;
    line-height: 23px;
    margin-top: 11px;
}
.main-hot{
    width: 100%;
    height: 26px;
    padding:0px 15px 11px;
    background-color: rgb(255, 255, 255);
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.main-hot-left{
    font-size: 15px;
    color: #232623;
}
.main-hot-right{
    font-size: 15px;
    color: #999999;
}
.his-product{
    padding: 11px 20px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
}
.his-product div{
    background-color: rgb(240, 242, 245);
    font-size: 12px;
    text-align: center;
    line-height: 23px;
    margin-left: 10px;
    margin-top: 10px;
}

.his-product div:nth-child(1){
    color: #e93b3d;
}
.his-product div:nth-child(2){
    color: #e93b3d;
}
.his-product div:nth-child(3){
    color: #e93b3d;
}
</style>