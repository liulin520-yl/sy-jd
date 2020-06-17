<template>
  <div class="box">
    <div class="main-content">
        <router-view  ></router-view>
    </div>
    <div class="switch-btn">
        <div class="switch-btn-item" @click="changeBtn(1)">
            <img src="../assets/home/s1.png" alt="" v-if="page==1">
            <img src="../assets/home/s2.png" alt="" v-else>

        </div>
        <div class="switch-btn-item" @click="changeBtn(2)">
            <img src="../assets/home/s3.png" alt=""  v-if="page==2">
            <img src="../assets/home/s7.png" alt="" v-else>
        </div>
        <div class="switch-btn-item" @click="changeBtn(3)">
            <img src="../assets/home/s4.png" alt="">

        </div>
        <div class="switch-btn-item" @click="changeBtn(4)">
            <img src="../assets/home/s6.png" alt=""  v-if="page==4">
            <img src="../assets/home/s5.png" alt="" v-else>
        </div>
        <div class="switch-btn-item" @click="changeBtn(5)">
            <img src="../assets/home/s8.png" alt="">
        </div>
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
    background-color: rgb(255, 255, 255);
}
.switch-btn .switch-btn-item{
    width: 20%;
    
}
.switch-btn-item img{
    width: 60px;
    height: 46px;
    display: inline-block;
    margin-top: 2px;
}
</style>
<script>
export default {
    data(){
        return{
            page:1
        }
    },
    methods:{
        changeBtn(index){
            this.page=index;
            // if(index==1){
            //      this.$router.push("first-page")
            // }
        }
    }
}
</script>