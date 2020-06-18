<template>
  <div class="big-box">
    <div class="personMain">

    </div>
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
export default {};
</script>

<style scoped>
.big-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/* 主要内容 */
.personMain{
    flex-grow: 1;
    background-color: rgb(15, 182, 194);
    overflow: auto;
}
/* .personMain{} */
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