<template>
  <div class="box-l">
    <div class="main-content-l" @scroll="handleScroll">
      <div class="content-fir-l" id="content-fir-l">
        <div class="frist-page-head-l2" :style="mystyle">
          <div class="header-left-l">
            <div class="head-icon-l"></div>
          </div>
          <div class="header-form-l">
            <div class="header-input-l">
              <div class="input-jd-l"></div>
              <i></i>
              <div class="input-fdj-l"></div>
              <div class="search-input-l">鲁花花生油</div>
            </div>
          </div>
          <div class="header-load-l">
            <span v-if="landing" class="already-load-l"></span>
            <span v-else class="no-load-l">登录</span>
          </div>
        </div>
        <div class="frist-page-head-l">
          <div class="header-left-l">
            <div class="head-icon-l"></div>
          </div>
          <div class="header-form-l">
            <div class="header-input-l" @click="enterserach">
              <div class="input-jd-l"></div>
              <i></i>
              <div class="input-fdj-l"></div>
              <div class="search-input-l">鲁花花生油</div>
            </div>
          </div>
          <div class="header-load-l">
            <span v-if="landing" class="already-load-l"></span>
            <span v-else class="no-load-l">登录</span>
          </div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/page-first/brand1.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/brand2.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/brand3.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/brand4.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/brand5.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/brand6.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content-sed-l">
        <div class="sed1-l">
          <div class="sed11-l"></div>
          <div class="sed12-l">
            <img src="../assets/page-first/618-22.jpg" alt />
            <div class="sed-title-l">6.18元秒</div>
          </div>
        </div>
        <div class="sed2-l">
          <img src="../assets/page-first/618-m1.jpg" alt />
          <img src="../assets/page-first/618-m2.jpg" alt />
        </div>
        <div class="sed3-l">
          <div class="sed31-l">
            <img src="../assets/page-first/618-32.jpg" alt />
            <div class="sed-title-l">爆款家电</div>
          </div>
          <div class="sed32-l">
            <img src="../assets/page-first/618-42.jpg" alt />
            <div class="sed-title-l">风电服饰</div>
          </div>
        </div>
      </div>

      <!-- 主菜单的轮播-->
      <div class="main-menu-l">
        <van-swipe class="my-swipe main-swiper" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <div class="main-swipe-item" v-for="item in mainlist" :key="item.title">
              <img :src="item.img" alt />
              <p>{{item.title}}</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="main-swipe-item" v-for="item in mainlist2" :key="item.title">
              <img :src="item.img" alt />
              <p>{{item.title}}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 狂欢购 -->
      <div class="goto-title-l">
        <img src="../assets/page-first/goto.png" alt />
      </div>
      <!-- 京东秒杀区域 -->
      <div class="jd-ms-l">
        <div class="jd-ms-area-l">
          <div class="js-ms-title-l">
            <div class="seckill-t-l">京东秒杀</div>
            <div class="seckill-m-l">
              <div class="seckill-nth-l">10点场</div>
              <van-count-down :time="time" class="countdown-detali seckill-timer-l">
                <template v-slot="timeData">
                  <span class="sec-timer-item">{{ timeData.hours }}</span>
                  <span class="sec-timer-item">:</span>
                  <span class="sec-timer-item">{{ timeData.minutes }}</span>
                  <span class="sec-timer-item">:</span>
                  <span class="sec-timer-item">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <a
              href="https://wqs.jd.com/portal/wx/seckill_m/index.shtml?st=1"
              class="link-seckill-l"
            >
              更多秒杀
              <i class="ms-link-icon-l"></i>
            </a>
          </div>
          <div class="slider-l">
            <div class="item" v-for="item in mslist" :key="item.img">
              <div class="image">
                <img :src="item.img" alt />
              </div>
              <p class="price">
                ¥{{item.price}}
                <span class="del">¥{{item.price2}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 两个小广告区域 -->
      <div class="con-adv-l">
        <div class="con-adv-box-l">
          <img src="../assets/page-first/con-adv1.png" alt />
          <img src="../assets/page-first/con-adv2.png" alt />
        </div>
      </div>
      <!-- 新人一元省省卡 -->
      <div class="new-mon-l">
        <img src="../assets/page-first/new.png" alt />
      </div>
      <!-- 新人一元卡下面的轮播图 -->
      <div class="new-banner-l">
        <van-swipe class="my-swipe my-swiper-l" :autoplay="5000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/page-first/newban11.png" alt class="new-ban-ll" />
            <img src="../assets/page-first/newban12.png" alt class="new-ban-bl" />
            <img src="../assets/page-first/newban13.png" alt class="new-ban-ll" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/page-first/newban21.png" alt class="new-ban-ll" />
            <img src="../assets/page-first/newban22.png" alt class="new-ban-bl" />
            <img src="../assets/page-first/newban23.png" alt class="new-ban-ll" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 东家小院商品区 -->
      <!-- 标题 -->
      <div class="west-home-title-l">
        <img src="../assets/page-first/west-t.png" alt />
      </div>
      <!-- 商品 -->
      <div class="west-box-l">
        <div class="west-goods-l">
          <div class="west-good-b-l">
            <div class="west-good-b-left-l">
              <div class="west-good-title-l">
                <span>棱镜生活</span>
                <p>畅游荒野打卡都市</p>
              </div>
              <div class="west-good-img-l">
                <img src="../assets/page-first/west1.jpg" alt />
                <img src="../assets/page-first/west2.jpg" alt />
              </div>
            </div>
            <div class="west-good-b-left-l">
              <div class="west-good-title-l">
                <span>男得好货</span>
                <p>不可多得的潮流夯货</p>
              </div>
              <div class="west-good-img-l">
                <img src="../assets/page-first/west3.jpg" alt />
                <img src="../assets/page-first/west4.jpg" alt />
              </div>
            </div>
          </div>
          <div class="west-good-l-l">
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">新春势力</span>
                <p>时尚爆料王</p>
              </div>
              <div>
                <img src="../assets/page-first/west5.jpg" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-left-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">爱享美味</span>
                <p>美味吃出来</p>
              </div>
              <div>
                <img src="../assets/page-first/west6.jpg" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">职场精英</span>
                <p>办公室装备</p>
              </div>
              <div>
                <img src="../assets/page-first/west7.jpg" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">国机自强</span>
                <p>全新体验</p>
              </div>
              <div>
                <img src="../assets/page-first/west8.jpg" class="west-img-l" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 每日逛区域 -->
      <!-- 标题 -->
      <div class="west-home-title-l">
        <img src="../assets/page-first/every-t.png" alt />
      </div>
      <!-- 商品 -->
      <div class="west-box-l">
        <div class="west-goods-l">
          <div class="west-good-l-l every-goods-l-l">
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">免息星球</span>
                <p>白条免息购</p>
              </div>
              <div>
                <img src="../assets/page-first/mr1.jpg" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-left-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">每日特价</span>
                <p>9块9疯抢</p>
              </div>
              <div>
                <img src="../assets/page-first/mr2.jpg" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">品牌闪购</span>
                <p>汇打牌好价</p>
              </div>
              <div>
                <img src="../assets/page-first/mr3.png" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">京东直播</span>
                <p>边看边买</p>
              </div>
              <div>
                <img src="../assets/page-first/mr4.png" class="west-img-l" alt />
              </div>
            </div>
          </div>
          <div class="west-good-l-l">
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">排行榜</span>
                <p>热销推荐</p>
              </div>
              <div>
                <img src="../assets/page-first/mr5.png" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-left-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">拍拍好物</span>
                <p>二手优品</p>
              </div>
              <div>
                <img src="../assets/page-first/mr6.png" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l west-good-right-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">新品首发</span>
                <p>京东小魔方</p>
              </div>
              <div>
                <img src="../assets/page-first/mr7.png" class="west-img-l" alt />
              </div>
            </div>
            <div class="west-good-l-item-l">
              <div class="west-good-title-l west-good-item-l">
                <span class="west-good-title-black-l">发现好物</span>
                <p>教你买买买</p>
              </div>
              <div>
                <img src="../assets/page-first/mr8.jpg" class="west-img-l" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 末尾猜你喜欢栏目 -->
      <div class="last-floor-l">
        <div class="last-floor-title-l">
          <img src="../assets/page-first/foryou.png" alt />
        </div>
        <div class="last-floor-love-l">
          <div
            class="last-floor-page-l"
            v-for="(item,index) in orderList"
            :key="index"
            @click="goodpage(index)"
          >
            <div class="last-floor-page-img">
              <img :src="item.img1" alt />
            </div>
            <div class="last-floor-product-l">
              <img src="../assets/page-first/foryou/618.png" alt />
              <img src="../assets/page-first/foryou/sup.png" alt />
              {{item.title}}
            </div>
            <div class="last-floor-price-l">
              <span class="last-floor-pro-l">
                ￥
                <span>{{item.price}}</span>
              </span>
              <span class="last-floor-mon-l">看相似</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-btn-l">
      <div class="switch-btn-item-l">
        <img src="../assets/home/s1.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(2)">
        <img src="../assets/home/s7.png" alt />
      </div>
      <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
        <div class="switch-btn-item-l">
          <img src="../assets/home/s4.png" alt />
        </div>
      </a>
      <div class="switch-btn-item-l" @click="changeBtn(4)">
        <img src="../assets/home/s5.png" alt />
      </div>
      <div class="switch-btn-item-l" @click="changeBtn(5)">
        <img src="../assets/home/s10.png" v-if="landing" alt />
        <img src="../assets/home/s8.png" v-else alt />
      </div>
    </div>
    <div class="scoll-out-l" :style="outstyle" @click="outchange"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outstyle: [],
      mystyle: [],
      scrollchange: true,
      page: 1,
      current: 0,
      time: 30 * 60 * 60 * 1000,
      mainlist: [
        {
          img: require("../assets/page-first/main-swipe/s1.png"),
          title: "京东超市"
        },
        {
          img: require("../assets/page-first/main-swipe/s2.png"),
          title: "数码电器"
        },
        {
          img: require("../assets/page-first/main-swipe/s3.png"),
          title: "京东服饰"
        },
        {
          img: require("../assets/page-first/main-swipe/s4.png"),
          title: "京东生鲜"
        },
        {
          img: require("../assets/page-first/main-swipe/s5.png"),
          title: "京东到家"
        },
        {
          img: require("../assets/page-first/main-swipe/s6.png"),
          title: "充值缴费"
        },
        {
          img: require("../assets/page-first/main-swipe/s7.png"),
          title: "9.9元拼"
        },
        {
          img: require("../assets/page-first/main-swipe/s8.png"),
          title: "领券"
        },
        {
          img: require("../assets/page-first/main-swipe/s9.png"),
          title: "赚钱"
        },
        {
          img: require("../assets/page-first/main-swipe/s10.png"),
          title: "PLUS会员"
        }
      ],
      mainlist2: [
        {
          img: require("../assets/page-first/main-swipe/s11.png"),
          title: "京东国际"
        },
        {
          img: require("../assets/page-first/main-swipe/s12.png"),
          title: "数码拍卖"
        },
        {
          img: require("../assets/page-first/main-swipe/s13.png"),
          title: "唯品会"
        },
        {
          img: require("../assets/page-first/main-swipe/s14.png"),
          title: "玩3C"
        },
        {
          img: require("../assets/page-first/main-swipe/s15.png"),
          title: "沃尔玛"
        },
        {
          img: require("../assets/page-first/main-swipe/s16.png"),
          title: "美妆馆"
        },
        {
          img: require("../assets/page-first/main-swipe/s17.png"),
          title: "京东旅行"
        },
        {
          img: require("../assets/page-first/main-swipe/s18.png"),
          title: "拍拍二手"
        },
        {
          img: require("../assets/page-first/main-swipe/s19.png"),
          title: "物流查询"
        },
        {
          img: require("../assets/page-first/main-swipe/s20.png"),
          title: "全部"
        }
      ],
      mslist: [
        {
          img: require("../assets/page-first/ms1.jpg"),
          price: 79,
          price2: 119
        },
        {
          img: require("../assets/page-first/ms2.jpg"),
          price: 29,
          price2: 89
        },
        {
          img: require("../assets/page-first/ms3.jpg"),
          price: 20.9,
          price2: 29.9
        },
        {
          img: require("../assets/page-first/ms4.jpg"),
          price: 69,
          price2: 199
        },
        {
          img: require("../assets/page-first/ms5.jpg"),
          price: 39.9,
          price2: 129
        },
        {
          img: require("../assets/page-first/ms6.jpg"),
          price: 2668,
          price2: 3449
        },
        {
          img: require("../assets/page-first/ms7.jpg"),
          price: 1539,
          price2: 2989
        },
        {
          img: require("../assets/page-first/ms9.jpg"),
          price: 79,
          price2: 119
        }
      ]
    };
  },
  computed: {
    orderList() {
      return this.$store.state.orderList;
    },
    landing() {
      return this.$store.state.landing;
    }
  },
  methods: {
    enterserach() {
      this.$router.push("focus-page");
    },
    handleScroll(e) {
      this.scrollTop = event.target.scrollTop;
      let obj = {
        opacity: 0
      };
      let obj1 = {
        display: "none"
      };
      this.mystyle.push(obj);
      this.outstyle.push(obj1);
      if (this.scrollTop > 700) {
        obj1.display = "block";
      } else if (this.scrollTop > 40) {
        obj.opacity = 1;
      } else if (this.scrollTop < 2) {
        obj.opacity = 0;
      } else {
        obj.opacity += 0.5;
      }
    },
    changeBtn(index) {
      this.page = index;
      if (index == 2) {
        this.$router.push("classify-page");
      }
      if (index == 4) {
        this.$router.push("shopping-page");
      }
      if (index == 5) {
        if (this.landing == false) {
          this.$router.push("noload-page");
        } else {
          this.$router.push("personage-page");
        }
      }
    },
    onChange(index) {
      this.current = index;
    },
    goodpage(index) {
      this.$router.push({
        path: "part-main",
        query: {
          num: index
        }
      });
    },
    outchange() {
      console.log(88);
      document.querySelector("#content-fir-l").scrollIntoView(true);
    }
  }
};
</script>

<style scoped>
.frist-page-head-l2 {
  background-color: rgb(228, 49, 48);

  opacity: 1;
  position: fixed;
  top: 0;
}
.frist-page-head-l,
.frist-page-head-l2 {
  width: 100%;
  height: 44px;
  display: flex;

  justify-content: space-between;
  z-index: 100;
}
.frist-page-head-l .header-left-l {
  width: 40px;
  height: 44px;
  padding: 15px 0 0 14px;
}
.frist-page-head-l .head-icon-l {
  width: 20px;
  height: 18px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* margin: 14px 0 0 15px; */
  background-image: url("../assets/page-first/head-i.png");
}
.frist-page-head-l2 .head-icon-l {
  width: 20px;
  height: 18px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 14px 0 0 15px;
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
.header-input-l i {
  content: "";
  position: absolute;
  border-right: 1px solid #ddd;
  top: 7px;
  left: 42px;
  height: 16px;
}
.input-jd-l {
  width: 20px;
  height: 15px;
  background-image: url("../assets/page-first/jd.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 8px 8px 0 15px;
}
.input-fdj-l {
  width: 18px;
  height: 15px;
  background-image: url("../assets/page-first/jd-sprites.png");
  background-position: -80px 0;
  background-size: 200px;
  margin: 8px 0 0 5px;
}
.search-input-l {
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
.header-load-l {
  width: 45px;
  height: 44px;
}
.already-load-l {
  display: inline-block;
  margin: 10px 12px 12px 10px;
  width: 20px;
  height: 22px;
  background: url("../assets/home/loader.png") no-repeat 50%;
  background-size: 20px;
}
.header-load-l .no-load-l {
  display: inline-block;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
}
/* 中间商品内容部分 */
.main-content-l {
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
.main-content-l .content-fir-l {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  width: 100%;
  background-image: url("../assets/page-first/bg2.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
/* 第一个轮播图 */

.content-fir-l img {
  width: 387px;
  height: 153px;
  display: inline-block;
  margin: 0 auto;
  border-radius: 10px;
}
.content-sed-l {
  height: 156px;
  width: 100%;
  max-height: 415px;
  background-color: rgb(231, 220, 220);
  display: flex;
}
.sed1-l {
  height: 100%;
  width: 23.4%;
}
.sed11-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.sed12-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-21.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}
.sed12-l img {
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 10px;
  left: 18px;
  background-color: #fff;
  display: inline-block;
}
.sed31-l img {
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 5px;
  left: 13px;
  background-color: #fff;
  display: inline-block;
}
.sed32-l img {
  width: 68%;
  height: 66%;
  position: absolute;
  z-index: 1;
  border-radius: 15px;
  top: 10px;
  left: 13px;
  background-color: #fff;
  display: inline-block;
}
.sed-title-l {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  text-align: center;
  height: 0.8rem;
  width: 100%;
  font-family: PingFang-SC-Bold;
  font-size: 0.6rem;
  line-height: 0.8rem;
  color: #fff;
  letter-spacing: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  padding: 0 0.2rem;
}
.sed2-l {
  height: 100%;
  width: 53.1%;
  background-image: url("../assets/page-first/618main.gif");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.sed2-l :first-child {
  width: 89px;
  height: 89px;
  display: inline-block;
  border-radius: 15px;
  position: absolute;
  top: 35px;
  left: 12px;
}
.sed2-l :last-child {
  width: 90px;
  height: 90px;
  border-radius: 15px;
  display: inline-block;
  position: absolute;
  top: 35px;
  right: 13px;
}
.sed3-l {
  height: 100%;
  width: 23.4%;
}
.sed31-l {
  height: 50%;
  width: 100%;
  background-image: url("../assets/page-first/618-31.png");
  background-size: 100% 100%;
  position: relative;
  background-repeat: no-repeat;
}
.sed32-l {
  height: 50%;
  position: relative;
  width: 100%;
  background-image: url("../assets/page-first/618-41.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* 主菜单的轮播 */
.main-menu-l {
  width: 100%;
  height: 179px;
}
.main-swiper .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 179px; */
  text-align: center;
  background-color: rgb(246, 246, 246);
  display: flex;
  height: 179px;
  flex-wrap: wrap;
}
.main-swiper .van-swipe__indicators {
  display: none;
}
.main-swipe-item {
  width: 20%;
  height: 50%;
  text-align: center;
}
.main-swipe-item img {
  width: 44px;
  height: 44px;
  margin-top: 11px;
}
.main-swipe-item p {
  margin-top: 0.3rem;
  font-size: 0.6rem;
  color: #666;
}
/* 狂欢购 */
.goto-title-l {
  width: 100%;
  height: 100px;
  background-color: #fed5db;
}
.goto-title-l img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 1px;
  min-width: 1px;
}
/* 京东秒杀区域 */
.jd-ms-l {
  width: 100%;
  height: 191px;
  background-color: #fed5db;
  padding-top: 10px;
}
.jd-ms-area-l {
  width: 94.5%;
  height: 169px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  border-radius: 0.3rem;
}
.js-ms-title-l {
  width: 100%;
  height: 37.53px;
  background-image: url("../assets/page-first/ms1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
}
.seckill-t-l {
  display: inline-block;
  height: 1.35rem;
  margin-top: 0.4rem;
  margin-right: 0.25rem;
  margin-left: 0.5rem;
  font-family: PingFangSC-Semibold;
  font-size: 14.45px;
  color: #333;
  letter-spacing: 0;
  line-height: 1.2;
}
.seckill-m-l {
  height: 19px;
  display: flex;
  align-items: center;
  border: 1px solid #f2270c;
  border-radius: 0.4rem;
  line-height: 19px;
  font-size: 0;
  margin-top: 0.4rem;
  vertical-align: middle;
  width: 123px;
}
.seckill-nth-l {
  background-image: linear-gradient(90deg, #f10001, #fe4e18);
  border-radius: 0.4rem;
  font-family: PingFangSC-Regular;
  font-size: 0.6rem;
  color: #fff;
  letter-spacing: 0;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  position: relative;
  left: -1px;
  height: 100%;
  margin-right: 0.2rem;
  width: 53px;
  line-height: 1.4;
}
/* 倒计时 */
.seckill-timer-l {
  width: 60px;
  height: 19px;
  line-height: 19px;
  /* margin-top: 5px; */
}

.sec-timer-item {
  display: inline-block;
  height: 100%;
  line-height: 1.4;
  font-size: 13.24px;
  text-align: center;
  font-family: PingFangSC-Regular;
  color: #f2270c;
  letter-spacing: 1px;
  font-weight: 700;
}
/* 京东秒杀链接处 */
.link-seckill-l {
  height: 100%;
  width: 90px;
  display: inline-block;
  color: #f23030;
  font-size: 13.684px;
  text-align: right;
  padding-right: 24.288px;
  position: absolute;
  right: 0;
  bottom: 0;
  line-height: 37.52px;
}
.ms-link-icon-l {
  display: inline-block;
  width: 12.14px;
  height: 12.14px;
  background: url(//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png)
    no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.4rem;
  top: 0.7rem;
}
.slider-l {
  position: relative;
  padding: 0 15px 15px;
  font-size: 0;
  font-family: none;
  white-space: nowrap;
  overflow: auto;
}
.slider-l .item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: center;
  width: 24%;
  margin-right: 10px;
  padding: 0 5px 5px;
  border-radius: 4px;
}
.slider-l .item .image {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
}
.slider-l .item .image img {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  border: 0;
  vertical-align: top;
}
.slider-l .item p.price {
  font-size: 16px;
  margin-top: 5px;
  color: #f2270c;
}
.slider-l .item p.price .del {
  display: block;
  font-size: 12px;
  color: #ccc;
  line-height: 1;
  text-decoration: line-through;
}

/* 中间广告区域 */
.con-adv-l {
  width: 100%;
  height: 143px;
  background-color: #fed5db;
}
.con-adv-l .con-adv-box-l {
  height: 133px;
  width: 94.5%;
  margin: 0 auto;
}
.con-adv-box-l :first-child {
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
.con-adv-box-l :last-child {
  width: 50%;
  height: 100%;
  border-radius: 0 10px 10px 0;
}
/* 新人一元省省卡 */
.new-mon-l {
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #fed5db;
}
.new-mon-l img {
  height: 100%;
  width: 99%;
}
/* 新人一元卡下面的轮播图 */
.new-banner-l {
  width: 100%;
  height: 110px;
  background-color: #fed5db;
  overflow: hidden;
}
.my-swiper-l .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fed5db;
  text-align: center;
  height: 100%;
}
.my-swiper-l .van-swipe__indicators {
  display: none;
}
.new-ban-ll {
  width: 29%;
  height: 80%;
}
.new-ban-bl {
  width: 32.5%;
  height: 90%;
  margin: 0 10px;
}
/* 东家小院商品区 */
.west-home-title-l {
  width: 100%;
  height: 39px;
  background-color: #fed5db;
}
.west-home-title-l img {
  width: 100%;
  height: 100%;
}
/* 东家商品区 */
.west-box-l {
  width: 100%;
  height: 266px;
  background-color: #fed5db;
}
.west-goods-l {
  width: 94.5%;
  margin: 0 auto;
  height: 95%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.west-good-b-l {
  width: 100%;
  height: 50%;
  display: flex;
  border-bottom: 1px solid #fed5db;
}

.west-good-b-left-l {
  padding: 0.325rem 0 0.25rem;
  width: 50%;
  height: 100%;
  border-right: 1px solid #fed5db;
}
.west-good-title-l {
  padding-left: 10px;
}
.west-good-item-l {
  padding-left: 0px;
}
.west-good-title-l span {
  color: #1471fb;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.125rem;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.west-good-title-l p {
  font-size: 14px;
  color: #666;
}
.west-good-img-l {
  width: 100%;
  height: 58%;
  padding: 0 15.4px;
  margin: 0 auto;
}
.west-good-img-l img {
  width: 66px;
  height: 66px;
  margin: 0.275rem 0.35rem 0;
}
.west-good-l-l {
  width: 100%;
  height: 50%;
  display: flex;
}
.west-good-l-item-l {
  width: 25%;
  height: 100%;
  padding: 7.1px 0 5.5px 5px;
  text-align: center;
}
.west-good-item-l .west-good-title-black-l {
  color: #000;
}
.west-good-left-right-l {
  border-left: 1px solid #fed5db;
  border-right: 1px solid #fed5db;
}
.west-good-right-l {
  border-right: 1px solid #fed5db;
}
.west-img-l {
  width: 66px;
  height: 66px;
  margin: 0.275rem 0.35rem 0;
}
.every-goods-l-l {
  border-bottom: 1px solid #fed5db;
}
/* 末尾猜你喜欢栏目 */
.last-floor-l {
  width: 100%;
  background-color: rgb(240, 242, 245);
  padding: 0 11px;
}
.last-floor-title-l {
  width: 100%;
  height: 38.6px;
  text-align: center;
}
.last-floor-title-l img {
  width: 100%;
  height: 100%;
}
.last-floor-love-l {
  margin-top: 2px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.last-floor-page-l {
  width: 49.6%;
  height: 285px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
}
.last-floor-page-img img {
  width: 100%;
  height: 194px;
}
.last-floor-product-l {
  width: 100%;
  height: 31px;
  padding-left: 4px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #232326;
  margin-top: 5px;
  line-height: 16px;
  margin-bottom: 3px;
}
.last-floor-product-l img {
  height: 13px;
  margin-right: 4px;
}
.last-floor-price-l {
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
}
.last-floor-pro-l {
  color: #f23030;
  display: inline-block;
  padding: 0 5px 0 4px;
  position: relative;
  top: 1px;
  height: 25px;
  line-height: 25px;
  font-family: JDZhengHT-EN-Regular;
  font-size: 13px;
}
.last-floor-pro-l span {
  font-size: 16px;
}
.last-floor-mon-l {
  display: inline-block;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: #666;
  width: 50px;
  height: 25px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  margin-right: 7px;
}

.box-l {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}

.main-content-l .haha {
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
.scoll-out-l {
  display: none;
  position: fixed;
  bottom: 80px;
  right: 9px;
  width: 38px;
  height: 38px;
  background-image: url("../assets/home/out.png");
  background-size: 38px 38px;
  background-repeat: no-repeat;
  background-position: 50%;
  z-index: 20;
}
</style>