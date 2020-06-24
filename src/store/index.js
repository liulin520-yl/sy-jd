import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landing: false,
    allcheck: true,
    showEmptyCart: true,
    maskshow: false,
    maskshow2: false,
    orderList: [
      {
        img1: require("../assets/com-store/1.webp"),
        img2: require("../assets/com-store/2.webp"),
        img3: require("../assets/com-store/3.webp"),
        img4: require("../assets/com-store/4.webp"),
        img5: require("../assets/com-store/5.webp"),
        img6: require("../assets/com-store/6.webp"),
        price: 88,
        title: "施华蔻专业OSIS劲能喷发胶300ml（发蜡发泥干胶啫喱 OSIS明星银胶 强力清爽定型喷雾 男女士）",
        specificationName: "规格",
        specification: ["（2级定型）OSIS发胶2号300ml", "（3级定型）OSIS发胶3号300ml", "（明星搭档）发胶300ml+发蜡85ml", "（4级定型）丝露华发胶500ml", "（反复塑型）型格强力发胶300ml", "（3级定型）OSIS发胶3号100ml"],
        shorter: "【每满300减40，限量300减30】施华蔻专业钜惠续航60小时，1次下单至高减70元，带走8件！星品继续8折抢！至高满赠134元礼包！详情速戳 ",
        weight: '0.28kg',
        storename: "京东自营",
        count: 1,
        pricenum: 1,
        checked: true,
        key: "（2级定型）OSIS发胶2号300ml",
      },
      {
        img1: require("../assets/com-store/pk1.webp"),
        img2: require("../assets/com-store/pk2.webp"),
        img3: require("../assets/com-store/pk3.webp"),
        img4: require("../assets/com-store/pk4.webp"),
        img5: require("../assets/com-store/pk5.webp"),
        img6: require("../assets/com-store/pk6.webp"),
        price: 69,
        title: "巴朗男士双肩包新款大容量背包时尚潮休闲17寸笔记本电脑包高中大学生书包商务旅行出差包运动USB充电包 黑色 标准版",
        specificationName: "颜色",
        specification: ["黑色巴朗男士双肩包新款", "灰色巴朗男士双肩包新款", "蓝色巴朗男士双肩包新款", "黑配灰色巴朗男士双肩包新款",],
        shorter: "【顺丰包邮】【好店认证放心购】【送运费险、支持七天无理由退换货】 ",
        weight: '1.5kg',
        storename: "巴朗旗舰店",
        count: 1,
        pricenum: 0,
        checked: true,
        key: "黑色巴朗男士双肩包新款",
      },
      {
        img1: require("../assets/com-store/ly1.webp"),
        img2: require("../assets/com-store/ly2.webp"),
        img3: require("../assets/com-store/ly3.webp"),
        img4: require("../assets/com-store/ly1.webp"),
        img5: require("../assets/com-store/ly2.webp"),
        img6: require("../assets/com-store/ly3.webp"),
        price: 109,
        title: "友讯(D-Link)dlink DIR-822+ 11AC 1200M 双频百兆智能无线路由器 WIFI无线穿墙",
        specificationName: "颜色",
        specification: ["DIR-822+ 11AC 1200M双频百兆", "DIR-823G 全千兆家用性价比之选", "COVR-C1203 1200M分布式Mesh路由", "DIR-867 1750M 全千兆双核处理", "COVR-3902 2600M分布式Mesh路由", "DES-1008A 8口交换机"],
        shorter: "【顺丰包邮】【好店认证放心购】【送运费险、支持七天无理由退换货】 ",
        weight: '0.73kg',
        storename: "京东自营",
        count: 1,
        pricenum: 0,
        checked: true,
        key: "DIR-822+ 11AC 1200M双频百兆",
      },
      {
        img1: require("../assets/com-store/sj1.webp"),
        img2: require("../assets/com-store/sj2.webp"),
        img3: require("../assets/com-store/sj3.webp"),
        img4: require("../assets/com-store/sj4.webp"),
        img5: require("../assets/com-store/sj5.webp"),
        img6: require("../assets/com-store/sj3.webp"),
        price: 7999,
        title: "三星 Galaxy S20 Ultra 5G 少量现货【白条分期0首付6期免息】5G手机 遐想灰 白条分期 12GB+256GB",
        specificationName: "版本",
        specification: ["12GB+256GB", "白条分期 12GB+256GB"],
        shorter: "【少量现货，下单速发顺丰包邮，高端产品出库发货后不接受退款】【白条分期套餐0首付6期免息】 ",
        weight: '0.35kg',
        storename: "三星旗舰店",
        count: 1,
        pricenum: 0,
        checked: true,
        key: "12GB+256GB",
      },
      {
        img1: require("../assets/com-store/w1.jpg"),
        img2: require("../assets/com-store/w2.jpg"),
        img3: require("../assets/com-store/w3.jpg"),
        img4: require("../assets/com-store/w4.jpg"),
        img5: require("../assets/com-store/w5.jpg"),
        img6: require("../assets/com-store/w6.jpg"),
        price: 3299,
        title: "Apple Watch Series 5智能手表（GPS款 44毫米深空灰色铝金属表壳 黑色运动型表带 MWVF2CH/A)",
        specificationName: "颜色",
        specification: ["黑色44毫米"],
        shorter: "【由 京东 发货, 并提供售后服务. 12:00前下单，预计今天(06月24日)送达】【【宅出健康，安全出行！】【AppleWatch低至1499！】【AppleMusic新用户再享3个月试用！】库存紧张，马上抢购！】 ",
        weight: '0.35kg',
        storename: "iphone旗舰店",
        count: 1,
        pricenum: 0,
        checked: true,
        key: "黑色44毫米",
      },
      {
        img1: require("../assets/com-store/w7.jpg"),
        img2: require("../assets/com-store/w8.jpg"),
        img3: require("../assets/com-store/w9.jpg"),
        img4: require("../assets/com-store/w10.jpg"),
        img5: require("../assets/com-store/w11.jpg"),
        img6: require("../assets/com-store/w12.jpg"),
        price: 22355,
        title: "外星人Alienware area-51m 17.3英寸游戏笔记本电脑九代i7 RTX2060OC 144Hz 戴尔dell R1735DB",
        specificationName: "颜色",
        specification: ["RTX2060 OC，i7 16G 1TSSD 144 眼动 黑"],
        shorter: "【由 京东 发货, 并提供售后服务. 12:00前下单，预计今天(06月24日)送达】【【宅出健康，安全出行！】【外星人m15/m17全新升级10代处理器！指定产品钜惠千元，白条24期免息，晒单返千元好礼！超轻悍游戏本献给玩家立即查看】库存紧张，马上抢购！】 ",
        weight: '2.0kg',
        storename: "外星人京东自营旗舰店",
        count: 1,
        pricenum: 0,
        checked: true,
        key:"RTX2060 OC，i7 16G 1TSSD 144 眼动 黑"
      },
    ],
    gwcList: [],

  },
  mutations: {
    allSelect(state) {
      state.allcheck = !state.allcheck;
      for (let i = 0; i < state.gwcList.length; i++) {
        state.gwcList[i].checked = state.allcheck;
      }
    },
    isAllChecked(state, index) {
      let counts = 0;
      let hh = state.gwcList[index].checked
      for (let i = 0; i < state.gwcList.length; i++) {
        if (state.gwcList[i].checked == true) {
          counts++;
        }
      }
      if (counts == state.gwcList.length) {
        state.allcheck = true;
      } else {
        state.allcheck = false;
      }
    },
    enterGwc(state, goods) {
      let x = -1;
      for (let i = 0; i < state.gwcList.length; i++) {
        if (goods.title == state.gwcList[i].title) {
          x = i
        }
      }
      if (x > -1) {
        state.gwcList[x].count++;
      } else {
        state.gwcList.push({
          title: goods.title,
          count: 1,
          pricenum: 0,
          price: goods.price,
          img1: goods.img1,
          storename: goods.storename,
          checked: goods.checked,
          key: goods.key
        });
      }
      state.showEmptyCart = false;
    },
    btnMinute(state, index) {
      if (state.gwcList[index].count > 0) {
        state.gwcList[index].count--;
        if (state.gwcList[index].count == 0) {

          state.gwcList[index].count = 1;
          state.maskshow = true
          setTimeout(function () {
            state.maskshow = false
          }, 1500)
        }
      }

    },
    btnAdd(state, index) {
      state.gwcList[index].count++;
    },
    delCart(state, index) {
      state.gwcList.splice(index, 1);
      state.maskshow2 = true
      setTimeout(function () {
        state.maskshow2 = false
      }, 500)
      if(state.gwcList.length<1){
        console.log("123");
        
        state.showEmptyCart = true;
      }
      
    },


  },




  actions: {
  },
  modules: {
  }
})
