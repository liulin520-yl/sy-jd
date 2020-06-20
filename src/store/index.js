import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landing:false,
    orderList:[
      {
        img1:require("../assets/com-store/1.webp"),
        img2:require("../assets/com-store/2.webp"),
        img3:require("../assets/com-store/3.webp"),
        img4:require("../assets/com-store/4.webp"),
        img5:require("../assets/com-store/5.webp"),
        img6:require("../assets/com-store/6.webp"),
        price:88,
        title:"施华蔻专业OSIS劲能喷发胶300ml（发蜡发泥干胶啫喱 OSIS明星银胶 强力清爽定型喷雾 男女士）",
        specificationName:"规格",
        specification:["（2级定型）OSIS发胶2号300ml","（3级定型）OSIS发胶3号300ml","（明星搭档）发胶300ml+发蜡85ml","（4级定型）丝露华发胶500ml","（反复塑型）型格强力发胶300ml","（3级定型）OSIS发胶3号100ml"],
        shorter:"【每满300减40，限量300减30】施华蔻专业钜惠续航60小时，1次下单至高减70元，带走8件！星品继续8折抢！至高满赠134元礼包！详情速戳 ",
        weight:'0.28kg',
      },
      {
        img1:require("../assets/com-store/pk1.webp"),
        img2:require("../assets/com-store/pk2.webp"),
        img3:require("../assets/com-store/pk3.webp"),
        img4:require("../assets/com-store/pk4.webp"),
        img5:require("../assets/com-store/pk5.webp"),
        img6:require("../assets/com-store/pk6.webp"),
        price:69,
        title:"巴朗男士双肩包新款大容量背包时尚潮休闲17寸笔记本电脑包高中大学生书包商务旅行出差包运动USB充电包 黑色 标准版",
        specificationName:"颜色",
        specification:["黑色","灰色","蓝色","黑配灰色","黑配蓝色","黑配红色"],
        shorter:"【顺丰包邮】【好店认证放心购】【送运费险、支持七天无理由退换货】 ",
        weight:'1.5kg',
      },
      {
        img1:require("../assets/com-store/ly1.webp"),
        img2:require("../assets/com-store/ly2.webp"),
        img3:require("../assets/com-store/ly3.webp"),
        img4:require("../assets/com-store/ly1.webp"),
        img5:require("../assets/com-store/ly2.webp"),
        img6:require("../assets/com-store/ly3.webp"),
        price:109,
        title:"友讯(D-Link)dlink DIR-822+ 11AC 1200M 双频百兆智能无线路由器 WIFI无线穿墙",
        specificationName:"颜色",
        specification:["DIR-822+ 11AC 1200M双频百兆","DIR-823G 全千兆家用性价比之选","COVR-C1203 1200M分布式Mesh路由","DIR-867 1750M 全千兆双核处理","COVR-3902 2600M分布式Mesh路由","DES-1008A 8口交换机"],
        shorter:"【顺丰包邮】【好店认证放心购】【送运费险、支持七天无理由退换货】 ",
        weight:'0.73kg',
      },
      {
        img1:require("../assets/com-store/sj1.webp"),
        img2:require("../assets/com-store/sj2.webp"),
        img3:require("../assets/com-store/sj3.webp"),
        img4:require("../assets/com-store/sj4.webp"),
        img5:require("../assets/com-store/sj5.webp"),
        img6:require("../assets/com-store/sj3.webp"),
        price:69,
        title:"三星 Galaxy S20 Ultra 5G 少量现货【白条分期0首付6期免息】5G手机 遐想灰 白条分期 12GB+256GB",
        specificationName:"版本",
        specification:["12GB+256GB","白条分期 12GB+256GB"],
        shorter:"【少量现货，下单速发顺丰包邮，高端产品出库发货后不接受退款】【白条分期套餐0首付6期免息】 ",
        weight:'0.35kg',
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
