<template>
  <div class="focus-box-y">
      <div class="focus-head-y">
          <div class="focus-return-y">
              <img src="../assets/classify-img/left-y.png" alt />
          </div>
          <div class="focus-input-y">
              <input type="text" placeholder="oppo手机">
          </div>
          <div class="focus-serach-y">搜索</div>
      </div>
  </div>
</template>

<script>
export default {

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
}
.focus-return-y{
    width: 40px;
    height: 44px;
    text-align: center;
    line-height: 60px;
}
.focus-return-y img{
    width: 25px;
    height: 25px;
}
.focus-input-y{
    flex-grow: 1;
    height: 100%;
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
  margin-top: 7px;
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
</style>