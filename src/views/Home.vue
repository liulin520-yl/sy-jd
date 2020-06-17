<template>
  <div class="box">
    <div class="main-content"></div>
    <div class="switch-btn">
        <div class="switch-btn-item"><img src="" alt="">1</div>
        <div class="switch-btn-item"><img src="" alt="">2</div>
        <div class="switch-btn-item"><img src="" alt="">6</div>
        <div class="switch-btn-item"><img src="" alt="">5</div>
        <div class="switch-btn-item"><img src="" alt="">7</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.main-content{
    flex-grow: 1;
    background-color: aqua;
}
.switch-btn{
    display: flex;
    align-items: center;
    text-align: center;
    background-color: rgb(255, 0, 212);
}
.switch-btn .switch-btn-item{
    width: 20%;
    padding: 10px 0;

}
</style>