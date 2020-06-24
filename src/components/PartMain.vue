<template>
  <div class="partmain-m" @scroll="handleScroll">
    <div class="partmain-content">
      <div class="header-l">
        <div class="header-box">
          <div class="headerbox-left">
            <span @click="getReturn()"></span>
          </div>
          <div class="headerbox-middle"></div>
          <div class="headerbox-right">
            <span></span>
          </div>
        </div>
      </div>
      <div class="header" :style="mystyle">
        <div class="header-box">
          <div class="headerbox-left">
            <span @click="getReturn()"></span>
          </div>
          <div class="headerbox-middle">
            <div class="headerbox-m-item" @click="llselect(1)">
              商品
              <span :class="{active:num==1}"></span>
            </div>
            <div class="headerbox-m-item" @click="llselect(2)">
              评价
              <span :class="{active:num==2}"></span>
            </div>
            <div class="headerbox-m-item" @click="llselect(3)">
              详情
              <span :class="{active:num==3}"></span>
            </div>
          </div>
          <div class="headerbox-right">
            <span></span>
          </div>
        </div>
      </div>
      <div class="swipe-m">
        <van-swipe @change="onChange" class="swipe-img">
          <van-swipe-item class="child" style="width: 375px;">
            <img :src="orderList[page].img1" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img :src="orderList[page].img2" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img :src="orderList[page].img3" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img :src="orderList[page].img4" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img :src="orderList[page].img5" alt />
          </van-swipe-item>
          <van-swipe-item class="child">
            <img :src="orderList[page].img6" alt />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/6</div>
          </template>
        </van-swipe>
      </div>
      <div class="middle-content-l">
        <div class="middle-ban-l">
          <img src="../assets/partmain/banner.png" alt />
        </div>
        <div class="part-data-l">
          <div class="part-price-l">
            <div class="part-pro-price-l">
              <span>￥</span>
              <span>{{orderList[page].price}}</span>
              <span>.00</span>
            </div>
            <div class="part-pro-icon-l">
              <span>
                <img src="../assets/partmain/price-icon1.png" alt />
                <div>降价提</div>
              </span>
              <span>
                <img src="../assets/partmain/price-icon2.png" alt />
                <div>收藏</div>
              </span>
              <span></span>
            </div>
          </div>
          <div class="part-pro-wrap-l">
            <div class="part-pro-smore-l">{{orderList[page].title}}</div>
            <div class="part-pro-bru-l">
              {{orderList[page].specification}}
              <span>查看></span>
            </div>
          </div>
          <!-- 放心购 -->
          <div class="part-pro-show-l">
            <span></span>
            <p>送运费险 . 一年质保.全国联保.7天保价</p>
            <div class="part-pro-show-dis-l">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠 favourable -->
      <div class="part-pro-favour-l">
        <div class="mod_discount" style id="discountFloor" ptag="7001.1.180">
          <span class="title-l">优惠</span>
          <div class="content">
            <div class="dicount_plus-l" style="display:none;">
              <i class="dicount_plus_icon-l"></i>
              <span></span>
            </div>
            <div class="dicount_coupon-l" style>
              <span class="coupon-l">满25减8</span>
              <span class="coupon-l">满20减5</span>
              <span class="coupon-l bg_red-l">新用户专享</span>
            </div>
            <div class="detail_prom" style>
              <div class="de_row prom_item">
                <div class="de_tag" tag="7">
                  <em class="hl_red_bg">限购</em>
                </div>
                <span>购买1-10件时享受单件价￥66，超出数量...</span>
              </div>
              <div class="de_row prom_item">
                <div class="de_tag" tag="17">
                  <em class="hl_red_bg">加价购</em>
                </div>
                <span>购买食品部分品类满1元就返零食调味149...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 配送地址 -->
      <div class="part-pro-adress-l">
        <div class="sku_window" id="skuWindow" ptag="7001.11.1">
          <div class="sku_choose_info">
            <h3>已选</h3>
            <span id="skuChoose1">1个</span>
          </div>
          <div class="sku_service" id="ybArea3"></div>
        </div>
        <!-- 送货地址 -->
        <div class="detail_transfer" id="sendArea">
          <div class="J_ping detail_transfer_row" id="addrArea" ptag="7001.1.4">
            <i class="detail_transfer_row_link"></i>
            <span class="detail_transfer_row_tit">送至</span>
            <div class="detail_transfer_row_content">
              <p class="detail_transfer_row_content_oline" id="addrName">北京朝阳区三环到四环之间</p>
              <p>
                <i id="beforeStockTag" style class="detail_transfer_row_content_icon">
                  <img src="../assets/partmain/jdwl.png" />
                </i>
                <span id="postNotice" style>
                  <small>
                    <span>现货</span>
                    <b id="postTip">
                      23:00前下单，预计
                      <b>明天(06月23日)</b>送达，受道路封闭影响，您的订单可能会有所延迟，我们将尽快为您送达，请您耐心等待。
                    </b>
                  </small>
                </span>
              </p>
            </div>
          </div>
          <div class="detail_transfer_row" id="postArea" style>
            <span class="detail_transfer_row_tit-l">运费</span>
            <div class="detail_transfer_row_content">
              <p id="postPrice">在线支付免运费</p>
            </div>
          </div>
          <div class="detail_transfer_row" id="weightArea" style="display:none;">
            <span class="detail_transfer_row_tit">重量</span>
            <div class="detail_transfer_row_content">
              <p id="weightVal"></p>
            </div>
          </div>
          <div class="detail_transfer_row" id="qualityArea" style="display:none;">
            <span class="detail_transfer_row_tit">批次</span>
            <div class="detail_transfer_row_content">
              <p id="qualityVal"></p>
            </div>
          </div>
        </div>
        <div class="detail_serve_container">
          <ul class="detail_serve" id="serviceArea" ptag="7001.1.24">
            <li class="detail_serve_item" tag>京东发货&amp;商家售后</li>
            <li class="detail_serve_item" tag>7天无理由退货（拆封后不支持）</li>
            <li class="detail_serve_item disabled" tag="jqdqTitle" style="display:none;"></li>
            <li class="detail_serve_item" tag>预约送货</li>
            <li class="detail_serve_item" tag>部分收货</li>
            <li class="detail_serve_item" tag>自提</li>
          </ul>
        </div>
      </div>
      <!-- 评价appraise -->
      <div class="part-pro-appraise-l">
        <div class="detail_row detail_row_cmt" id="summaryEnter" ptag="7001.1.27" style empty>
          <h3 class="tit" id="summaryTitle">评价</h3>
          <i class="icon_promote" id="summaryEnterIco"></i>
          <p class="good" id="evalRateP">
            好评度
            <strong id="evalRate">96%</strong>
          </p>
          <p class="count" id="evalNo2">8.3万+</p>
          <p class="cmt_none_tips" id="evalNone" style="display: none;">暂无评价，欢迎您购买之后留下宝贵的评价</p>
        </div>
        <div class="detail_row detail_cmt" id="mainCmt" style>
          <div class="cmt_tag cmt_tag_new" id="evalTag" style>
            <span no="9d8a323c646add49" ptag="7001.1.218">美味可口(237)</span>
            <span no="1586edc345e29ed7" ptag="7001.1.218">口感细嫩(40)</span>
            <span no="3b1728e0c663a84e" ptag="7001.1.218">口感俱佳(28)</span>
            <span no="a82883cfae33a780" ptag="7001.1.218">方便实用(22)</span>
            <span no="4fa2d72ac670a981" ptag="7001.1.218">食用方便(18)</span>
            <span no="242f106dc21f387f" ptag="7001.1.218">饱腹感强(8)</span>
            <span no="64306b7f0d354940" ptag="7001.1.218">营养丰富(6)</span>
            <span no="220a3e80f28a2477" ptag="7001.1.218">漂亮好看(3)</span>
            <span no="078ca410b4346e1a" ptag="7001.1.218">干干净净(2)</span>
            <span no="b433a520d01fa114" ptag="7001.1.218">含量丰富(2)</span>
            <span no="c2f38f1a77ddcb44" ptag="7001.1.218">肉大饱满(1)</span>
            <span no="454158fe42107f0c" ptag="7001.1.218">大气十足(1)</span>
          </div>
          <div class="cmt_list_wrap">
            <ul class="cmt_list" id="evalDet_main">
              <li>
                <div class="cmt_user" ptag="7001.3.7">
                  <img
                    src="//storage.360buyimg.com/i.imageUpload/3937393536373237305f6d31353536383534383734383335_sma.jpg"
                  />
                  <span class="user">啦里啦啦啷</span>
                  <span class="credit star-five">
                    <span></span>
                  </span>
                  <span class="date">2020-03-29</span>
                </div>
                <div
                  class="cmt_cnt"
                  ptag="7001.3.7"
                >味道特别棒，各种口味都有。又鸡汁味、藤椒味、烧烤味、新奥尔良味、川辣味，这几种口味搭配起来吃一点都不腻。鸡肉口感特别好，吃起来特香，没有油味道清淡适合减肥健身吃。这次买了两大包家里人都很喜欢，我自己也特别满意。</div>
                <div class="cmt_att" ptag="7001.3.7">
                  <span
                    class="video"
                    data-video="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/4f72be45296619988734242817/v.f30.mp4?dockingId=b1dec3fd-a62e-43a5-a79c-1642b962ea75&amp;storageSource=3"
                    style="overflow:hidden;"
                  >
                    <video
                      data-width="640"
                      data-height="1280"
                      width="100%"
                      height="auto"
                      src="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/4f72be45296619988734242817/v.f30.mp4?dockingId=b1dec3fd-a62e-43a5-a79c-1642b962ea75&amp;storageSource=3"
                      poster="//img.300hu.com/4c1f7a6atransbjngwcloud1oss/4f72be45296619988734242817/imageSampleSnapshot/1585455725_588233024.100_627.jpg"
                      webkit-playsinline="true"
                      playsinline
                      preload="none"
                      muted="muted"
                    >暂时不支持播放该视频</video>
                    <div class="button"></div>
                  </span>
                  <span class="img">
                    <img
                      ptag="7001.1.29"
                      src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/91094/12/16832/117472/5e8022efEc1012491/4ea3068c3f85b148.jpg!cc_100x100!q70.dpg.webp"
                      prview="//img30.360buyimg.com/shaidan/jfs/t1/91094/12/16832/117472/5e8022efEc1012491/4ea3068c3f85b148.jpg!q70.dpg.webp"
                    />
                  </span>
                </div>
                <div class="cmt_sku">
                  <div class="reply">
                    <a
                      href="javascript:void(0);"
                      productid="40551513676"
                      orderid="0"
                      guid="12a16284-62fa-4f97-aa8b-803aed3d0279"
                      class="reply_btn btn"
                    >
                      <span class="num">2</span>回复
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="cmt_user" ptag="7001.3.8">
                  <img
                    src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png"
                  />
                  <span class="user">奔跑的大药丸子</span>
                  <span class="credit star-five">
                    <span></span>
                  </span>
                  <span class="date">2020-04-12</span>
                </div>
                <div class="cmt_cnt" ptag="7001.3.8">
                  看见这个文案我就不行了
                  这怎么好意思不瘦下去呢
                  哈哈哈哈哈哈哈哈哈哈哈
                  口味很多，最喜欢孜然味和奥尔良味的
                  以前为了减脂总自己水煮鸡胸肉，实在是太柴了。所以买这种调味的鸡胸肉试一下，确实比自己这种手残厨艺做得好吃多了。
                </div>
                <div class="cmt_att" ptag="7001.3.8">
                  <span
                    class="video"
                    data-video="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/48ad2511301789880211021825/v.f30.mp4?dockingId=9f568004-eb86-4577-8e2f-c1f032da5234&amp;storageSource=3"
                    style="overflow:hidden;"
                  >
                    <video
                      data-width="1280"
                      data-height="720"
                      width="auto"
                      height="100%"
                      src="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/48ad2511301789880211021825/v.f30.mp4?dockingId=9f568004-eb86-4577-8e2f-c1f032da5234&amp;storageSource=3"
                      poster="//img.300hu.com/4c1f7a6atransbjngwcloud1oss/48ad2511301789880211021825/imageSampleSnapshot/1586688318_862992087.100_694.jpg"
                      webkit-playsinline="true"
                      playsinline
                      preload="none"
                      muted="muted"
                    >暂时不支持播放该视频</video>
                    <div class="button"></div>
                  </span>
                  <span class="img">
                    <img
                      ptag="7001.1.29"
                      src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/116395/21/960/381014/5e92f13eE4c5b552c/69f2686f9facfb0b.jpg!cc_100x100!q70.dpg.webp"
                      prview="//img30.360buyimg.com/shaidan/jfs/t1/116395/21/960/381014/5e92f13eE4c5b552c/69f2686f9facfb0b.jpg!q70.dpg.webp"
                    />
                  </span>
                </div>
                <div class="cmt_sku">
                  <div class="reply">
                    <a
                      href="javascript:void(0);"
                      productid="40551513676"
                      orderid="0"
                      guid="a88ec5ba-c684-46cd-8bde-48eaa281a72d"
                      class="reply_btn btn"
                    >回复</a>
                  </div>
                </div>
              </li>
            </ul>
            <div id="summaryEnter3" class="cmt_more" style>
              <a href="javascript:;" ptag="7001.1.28" class="cmt_more_lnk">
                查看全部评价
                <i class="icon_arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="part-pro-image-l">
        <img src="../assets/partmain/good11.jpg" alt />
        <img src="../assets/partmain/good22.jpg" alt />
      </div>
    </div>
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="gwcList.count" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" @click="addCratl(page)" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <div class="scoll-out-l" :style="outstyle" @click="outchange"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outstyle: [],
      num: 1,
      mystyle: [],
      page: "",
      scrollTop: "",
      current: 0
    };
  },
  created() {
    this.page = this.$route.query.num;
  },
  computed: {
    orderList() {
      return this.$store.state.orderList;
    },
    gwcList(){
      return this.$store.state.gwcList;
    }
  },
  methods: {
    llselect(index) {
      this.num = index;
      if (index == 1) {
        document.querySelector(".partmain-content").scrollIntoView(true);
      }
      if (index == 2) {
        document.querySelector(".part-pro-appraise-l").scrollIntoView(true);
      }
      if (index == 3) {
        document.querySelector(".part-pro-image-l").scrollIntoView(true);
      }
    },
    // 滚轮事件
    handleScroll() {
      this.scrollTop = event.target.scrollTop;
      let obj = {
        opacity: 0
      };
      let obj1 = {
        display: "none"
      };
      this.outstyle.push(obj1);
      this.mystyle.push(obj);
      if (this.scrollTop > 700) {
        obj1.display = "block";
      }
      if (this.scrollTop > 40) {
        obj.opacity = 1;
      } else if (this.scrollTop < 2) {
        obj.opacity = 0;
      } else {
        obj.opacity += 0.1;
      }
      if (this.scrollTop > 0 && this.scrollTop <= 1012) {
        this.num = 1;
      } else if (this.scrollTop > 1012 && this.scrollTop <= 1727) {
        this.num = 2;
      } else if (this.scrollTop > 1727) {
        this.num = 3;
      }
    },
    onChange(index) {
      this.current = index;
    },
    addCratl(page) {
      this.$toast.success("加入购物车成功");
      this.$store.commit("enterGwc", {
        title: this.orderList[page].title,
        count: this.orderList[page].count,
        price: this.orderList[page].price,
        img1: this.orderList[page].img1,
        storename: this.orderList[page].storename,
        key:this.orderList[page].key,
        checked:this.orderList[page].checked
      });
    },
    getReturn() {
      this.$router.go(-1);
      this.$destroy(true);
    },
    outchange() {
      console.log(88);
      document.querySelector(".partmain-content").scrollIntoView(true);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.partmain-m {
  width: 100%;
  height: 100%;
  background-color: rgb(242, 242, 242);
  overflow: auto;
}
.partmain-m .partmain-content {
  /* background-color: blue; */
  width: 100%;
  margin-bottom: 100px;
}
.partmain-content .header-l {
  z-index: 1;
  position: fixed;
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  color: #252525;
  min-height: 44px;
}
.partmain-content .header {
  z-index: 10;
  position: fixed;
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  color: #252525;
  min-height: 44px;
  background-color: #fff;
}
.header-l .header-box {
  position: relative;
  min-height: 44px;
  /* display: flex; */
}
.header .header-box {
  position: relative;
  min-height: 44px;
  display: flex;
  justify-content: space-between;
}
.header .headerbox-middle {
  width: 70%;
  height: 44px;
  display: flex;
  line-height: 44px;
  text-align: center;
}
.headerbox-m-item {
  width: 33%;
  height: 100%;
  position: relative;
}
.active {
  display: block;
  position: absolute;
  content: "";
  width: 28px;
  height: 3px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(90deg, #f5503a, #fad1cb);
  bottom: 6px;
}
.header-l .header-box .headerbox-left {
  float: left;
  background-color: #666;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 0 0 5px;
  opacity: 1;
}
.header .header-box .headerbox-left {
  float: left;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 0 0 5px;
  opacity: 1;
}
.header-l .header-box .headerbox-left span {
  display: inline-block;
  background: url(../assets/partmain/left-arrows.png) no-repeat 50%;
  background-size: 20px 20px;
  margin: 0;
  width: 20px;
  height: 20px;
}
.header .header-box .headerbox-left span {
  display: inline-block;
  background: url(../assets/partmain/left-arr.png) no-repeat 50%;
  background-size: 20px 20px;
  margin: 0;
  width: 20px;
  height: 20px;
}
.header-l .header-box .headerbox-right {
  background-color: #666;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 5px 0 0;
  opacity: 1;
  overflow: hidden;
  float: right;
}
.header .header-box .headerbox-right {
  padding: 5px;
  width: 30px;
  height: 30px;
  margin: 7px 5px 0 0;
  opacity: 1;
  overflow: hidden;
  float: right;
}
.header-box .headerbox-right .leave {
  background-color: #fff;
  color: #666;
}
.header .header-box .headerbox-right span {
  display: inline-block;
  background: url(../assets/partmain/dian1.png) no-repeat 100%;
  background-size: 20px;
  margin: 0;
  width: 20px;
  height: 20px;
}
.header-l .header-box .headerbox-right span {
  background: url(../assets/partmain/dian.png) no-repeat 50%;
  display: inline-block;
  /* margin: 12px 12px 12px 10px; */
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin: 0;
}
.partmain-content .swipe-m {
  background: rgb(255, 255, 255);
  height: 375px;
  width: 375px;
  max-width: 640px;
  max-height: 640px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.partmain-content .swipe-m .swipe-img {
  height: 100%;
  width: 100%;
  position: relative;
}
.partmain-content .swipe-m .swipe-img .child img {
  width: 375px;
  height: 375px;
}

/* 轮播图 */
.swipe-img .child {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.custom-indicator {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 9px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 40px;
  text-align: center;
}
/* 轮播图下面的广告 */
.middle-ban-l {
  width: 100%;
  height: 55px;
}
.middle-ban-l img {
  width: 100%;
}
.middle-content-l {
  background-color: rgb(255, 255, 255);
}
.part-data-l {
  width: 100%;
}
.part-price-l {
  width: 100%;
  height: 35px;
  margin-top: 12px;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
}
.part-pro-price-l {
  width: 100px;
  height: 100%;
  font-family: JDZH-Regular;
  font-size: 14px;
  line-height: 30px;
  color: #f2270c;
  display: inline-block;
  font-weight: bold;
}
.part-pro-icon-l {
  width: 80px;
  height: 100%;
}
.part-pro-price-l span {
  font-size: 28px;
}
.part-pro-icon-l span {
  display: inline-block;
  width: 50%;
  height: 100%;
  font-size: 9px;
  text-align: center;
}
.part-pro-icon-l span img {
  width: 50%;
  height: 50%;
}
/* 产品介绍 */
.part-pro-wrap-l {
  width: 100%;
  padding: 12px 18px;
  color: #262626;
}
.part-pro-wrap-l .part-pro-smore-l {
  width: 100%;
  /* height: 36px; */
  font-size: 16px;
  /* line-height: 36px; */
}
.part-pro-wrap-l h1 img {
  width: 31.56px;
  height: 13px;
}
.part-pro-bru-l {
  width: 378px;
  padding: 18px 0 0;
  font-size: 12px;
  color: #666;
}
.part-pro-bru-l span {
  color: #e4393c;
  text-decoration: underline;
}

/* 放心购 */
.part-pro-show-l {
  width: 100%;
  height: 37px;
  padding: 12px 48px 12px 10px;
  color: #e93b3d;
  font-size: 13px;
  background-color: rgb(251, 240, 253);
}
.part-pro-show-l > span {
  display: inline-block;
  width: 70px;
  height: 13px;
  background-image: url("../assets/partmain/buy.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 4px;
}
.part-pro-show-l p {
  height: 13px;
  display: inline-block;
  line-height: 15px;
}
.part-pro-show-dis-l {
  width: 20px;
  height: 13px;
  float: right;
  line-height: 13px;
  font-size: 30px;
}
.part-pro-show-dis-l span {
  display: inline-block;
  width: 100%;
  height: 13px;
  background-image: url("../assets/partmain/r-icon.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
/* 优惠 favourable */
.part-pro-favour-l {
  width: 100%;
  /* height: 151px; */
  margin: 12px 0 0;
  padding: 0 18px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.part-pro-favour-l .mod_discount {
  position: relative;
  padding: 18px 20px 5px 38px;
  /* font-size: 0; */
  color: #333;
  word-break: break-word;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  white-space: nowrap;
}
.part-pro-favour-l .mod_discount .title-l {
  position: absolute;
  left: 0;
  top: 18px;
  color: #262626;
  font-weight: 700;
}
.dicount_plus-l {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dicount_plus_icon-l {
  display: inline-block;
  width: 53px;
  height: 14px;
  margin-right: 5px;
  vertical-align: text-bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/partmain/95.png");
}
.dicount_coupon-l {
  height: 18px;
  line-height: 0;
  overflow: hidden;
  word-break: break-word;
}
.dicount_coupon-l::after {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../assets/partmain/load-icon.png");
  background-repeat: no-repeat;
  background-size: 20px;
  top: 12px;
  right: 0;
  content: "";
}
.coupon-l {
  position: relative;
  display: inline-block;
  margin-right: 5px;
  padding: 0 9px 0 12px;
  border-top: 1px solid #f2270c;
  border-bottom: 1px solid #f2270c;
  height: 18px;
  line-height: 18px;
  color: #f2270c;
  font-size: 10px;
}
.coupon-l::before {
  width: 7px;
  content: "";
  left: 0;
  width: 7px;
  position: absolute;
  top: -1px;
  height: 18px;
  background-image: url("../assets/partmain/cop-before.png");
  background-size: 15px 18px;
  background-repeat: no-repeat;
}
.coupon-l::after {
  right: 0;
  width: 4px;
  background-position: -11px 0;
  /* width: 7px; */
  content: "";
  position: absolute;
  top: -1px;
  height: 18px;
  background-size: 15px 18px;
  background-repeat: no-repeat;
  background-image: url("../assets/partmain/cop-before.png");
}
.bg_red-l {
  color: #fff;
  margin: 0 8.5px 0 9px;
  padding: 0 5.5px 0 3px;
  background-color: #f2270c;
}
.bg_red-l::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -9px;
  height: 18px;
  background-image: url("../assets/partmain/l-icon.png");
  background-size: 15px 18px;
  background-repeat: no-repeat;
  width: 9px;
}
.bg_red-l::after {
  content: "";
  position: absolute;
  top: -1px;
  right: -3.5px;
  height: 18px;
  background-image: url("../assets/partmain/l-icon.png");
  background-size: 15px 18px;
  background-repeat: no-repeat;
  width: 4.5px;
  background-position: -11px 0;
}
.de_row.prom_item {
  width: 100%;
  margin: 18px 0 12px;
  height: 18px;
}
.de_row.prom_item span {
  width: 80%;
  margin-left: 10px;
}
.detail_prom .de_tag {
  margin-right: 5px;
  padding-top: 1px;
  display: inline-block;
}
.detail_prom .de_tag .hl_red_bg {
  display: inline-block;
  margin: 0;
}
.detail_prom .hl_red_bg {
  /* width: 30px; */
  border: 1px solid #e4393c;
  font-style: normal;
  position: relative;
  padding: 0 3px;
  margin-right: 0;
  height: 13px;
  line-height: 13px;
  font-size: 9px;
  color: #e4393c;
  background: #fff;
}
.detail_prom .hl_red_bg:before {
  border-color: #e4393c;
  border-radius: 2px;
}
.part-pro-adress-l {
  width: 100%;
  margin: 12px 0 0;
  padding: 0 18px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.sku_window {
  background: #fff;
  padding: 18px 0;
  position: relative;
  font-size: 13px;
  color: #8c8c8c;
}
.sku_window .sku_choose_info {
  position: relative;
  padding: 0 40px 0 38px;
}
.sku_window .sku_service {
  padding: 0 20px 0 38px;
  font-size: 12px;
}
.sku_window .sku_choose_info h3 {
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 35px;
  color: #262626;
  font-weight: 700;
}
.sku_window .sku_choose_info span {
  font-size: 13px;
  color: #333;
  line-height: 22px;
}
.sku_window:after {
  content: "";
  top: 12px;
  right: 0;
}
.sku_window:after {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../assets/partmain/load-icon.png");
  background-repeat: no-repeat;
  background-size: 20px;
}
.detail_transfer {
  position: relative;
}
.detail_transfer .detail_transfer_row {
  position: relative;
  padding: 18px 20px 18px 0;
  font-size: 13px;
  display: flex;
}
.detail_transfer .detail_transfer_row::before {
  left: 10px;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_link {
  position: absolute;
  right: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../assets/partmain/load-icon.png");
  background-repeat: no-repeat;
  background-size: 20px;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_tit {
  width: 91px;
  color: #262626;
  font-weight: 700;
  display: block;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_tit-l {
  width: 38px;
  color: #262626;
  font-weight: 700;
  display: block;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_content {
  font-size: 13px;
  color: #333;
  overflow: hidden;
  display: inline-block;
}
.buy_area .blue_row .txt,
.buy_area .old_price_wrap,
.buy_area .plus_bar .text.one_line,
.color_switch_area ul li p,
.de_oline,
.de_pm_list .sku_select,
.de_return_toApp,
.detail_baitiao .desc_list .desc_item,
.detail_faqbox_list_desc,
.detail_mendian_list_desc,
.detail_mendian_list_name,
.detail_prom .de_pm_list .name,
.detail_transfer
  .detail_transfer_row
  .detail_transfer_row_content
  .detail_transfer_row_content_oline,
.shop_info_wrap .shop_name,
.wiki a.wiki_content p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail_transfer_row
  .detail_transfer_row_content
  .detail_transfer_row_content_icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 4px;
  height: 13px;
}
.detail_transfer
  .detail_transfer_row
  .detail_transfer_row_content
  .detail_transfer_row_content_icon
  img {
  display: block;
  height: 100%;
}
.detail_transfer
  .detail_transfer_row
  .detail_transfer_row_content
  .detail_transfer_row_content_icon
  img {
  display: block;
  height: 100%;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_content small {
  font-size: 12px;
  color: #999;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_content span {
  font-size: 12px;
  color: #f2270c;
  margin-right: 3px;
}
.detail_transfer .detail_transfer_row .detail_transfer_row_content b {
  font-weight: 400;
}
.detail_serve_container {
  padding: 9px 18px;
  margin: 0 -18px;
  background-color: #fafafa;
}
.detail_serve {
  position: relative;
  color: #262626;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding-right: 20px;
}
.detail_serve .detail_serve_item {
  padding: 3px 12px 3px 0;
  display: inline-block;
  line-height: 1;
  color: #8c8c8c;
}
.detail_serve .detail_serve_item:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 6px;
  width: 11px;
  height: 11px;
  background: url("../assets/partmain/good.png") no-repeat;
  background-size: 11px auto;
}
.detail_serve:after {
  content: "";
  right: 0;
  top: 0;
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../assets/partmain/load-icon.png");
  background-repeat: no-repeat;
  background-size: 20px;
}
.part-pro-appraise-l {
  /* height: 500px; */
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
}
.detail_row.detail_row_cmt {
  position: relative;
  height: 45px;
  line-height: 45px;
  color: #262626;
  padding-left: 8px;
  margin-top: 3px;
}
.detail_row.detail_row_cmt::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 15px;
  background-image: linear-gradient(180deg, #f5503a, #fad1cb);
}
.detail_row.detail_row_cmt h3.tit {
  font-size: 15px;
  padding: 0;
}
.detail_row .tit,
.detail_row h3.tit {
  color: #262626;
  font-weight: 700;
  /* font-size: 13px; */
}
.detail_row .tit,
.detail_row h3.tit {
  color: #262626;
  font-weight: 700;
  font-size: 13px;
}
.detail_row.detail_row_cmt p.good {
  top: 0;
  color: #8c8c8c;
  right: 15px;
  font-family: JDZhengHT-EN-Regular;
  font-size: 12px;
  position: absolute;
  height: 45px;
  line-height: 45px;
}
.detail_row.detail_row_cmt p.count {
  top: 3px;
  left: 45px;
  font-weight: bold;
}
.detail_row.detail_row_cmt .cmt_none_tips {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  color: #8c8c8c;
}
.detail_row.detail_row_cmt p.count,
.detail_row.detail_row_cmt p.good {
  font-size: 12px;
  position: absolute;
  height: 45px;
  line-height: 45px;
}
.detail_row.detail_row_cmt .icon_promote {
  margin-top: -1px;
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: url("../assets/partmain/right-icon.png") no-repeat;
  background-size: cover;
}
.cmt_tag.cmt_tag_new {
  position: relative;
  padding: 3px 3px 0 0;
  max-height: 80px;
  margin: 0;
}
.cmt_tag {
  overflow: hidden;
  margin: 15px 0 2px;
  max-height: 55px;
  font-size: 0;
  font-family: Helvetica;
}
.cmt_tag.cmt_tag_new span {
  margin: 0 12px 12px 0;
  background: #fcedeb;
  border-radius: 15px;
}
.cmt_tag span {
  display: inline-block;
  margin: 0 5px 5px 0;
  padding: 0 10px;
  height: 30px;
  border-radius: 15px;
  line-height: 30px;
  font-size: 11px;
  color: #262626;
  background: #fcedeb;
}
.detail_cmt .cmt_list {
  font-size: 12px;
  color: #262626;
  margin-bottom: -1px;
}
.detail_cmt .cmt_list li:first-child {
  padding-top: 6px;
}
.detail_cmt .cmt_list li {
  position: relative;
  padding: 18px 0;
}
li,
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.detail_cmt .cmt_user {
  line-height: 20px;
}
.detail_cmt .cmt_user img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
}
.detail_cmt .cmt_user .user {
  margin-left: 12px;
  display: inline-block;
  color: #262626;
  max-width: 8.2em;
  vertical-align: middle;
}
.detail_cmt .cmt_user .credit {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 10px;
  margin: -2px 0 -2px 6px;
  vertical-align: middle;
}
.detail_cmt .cmt_user .credit.star-five::after,
.detail_cmt .cmt_user .credit.star-five::before,
.detail_cmt .cmt_user .credit.star-five span,
.detail_cmt .cmt_user .credit.star-five span::after,
.detail_cmt .cmt_user .credit.star-five span::before {
  background-image: url("../assets/partmain/start.png");
}
.detail_cmt .cmt_user .credit span::before {
  left: -11px;
}
.detail_cmt .cmt_user .credit::before {
  left: 0;
}
.detail_cmt .cmt_user .credit span {
  width: 10px;
  height: 10px;
  margin-right: 2px;
  position: absolute;
  top: 0;
  left: 22px;
  background-size: cover;
  background-image: url("../assets/partmain/start.png");
}
.detail_cmt .cmt_user .credit::after,
.detail_cmt .cmt_user .credit::before,
.detail_cmt .cmt_user .credit span::after,
.detail_cmt .cmt_user .credit span::before {
  display: inline-block;
  content: "";
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  margin-right: 2px;
  background-size: cover;
}
.detail_cmt .cmt_user .credit span::after {
  right: -13px;
}
.detail_cmt .cmt_user .credit::after {
  right: 0;
}
.detail_cmt .cmt_user .date {
  float: right;
  color: #999;
  margin-left: -60px;
}
#evalDet_main .cmt_cnt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.detail_cmt .cmt_cnt {
  position: relative;
  line-height: 1.5;
  font-size: 13px;
  margin: 18px 0;
  word-break: break-all;
  overflow: hidden;
  white-space: normal;
  max-height: 126px;
}
.detail_cmt .cmt_att .img,
.detail_cmt .cmt_att .video {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-right: 6px;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  background: #f3f3f3;
  vertical-align: middle;
}
.detail_cmt .cmt_att .img img {
  width: auto;
  display: inline-block;
  height: auto;
  min-width: 80px;
  max-height: 80px;
}
.detail_cmt .cmt_att:after,
.detail_cmt .cmt_sku:after {
  clear: both;
  content: "\20";
  display: block;
}
.cmt_more .cmt_more_lnk {
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  text-align: center;
  color: #262626;
  padding: 0 5px 0 10px;
  margin-bottom: 18px;
  position: relative;
  display: inline-block;
}
.cmt_more .cmt_more_lnk:before {
  border-color: #8c8c8c;
  border-radius: 40px;
  border-width: 0.5px;
}
.cmt_more .cmt_more_lnk:before {
  bottom: -100%;
  right: -100%;
}
.cmt_more .cmt_more_lnk:before {
  content: "";
  display: block;
  border: 1px solid #ddd;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
.mod_fix_wrap .mod_tab {
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
}
.mod_tab {
  height: 40px;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.mod_tab .item.cur {
  position: relative;
  font-weight: 700;
  color: #262626;
}
.mod_tab .item:first-child,
.mod_tab span:first-child {
  border-left: 0;
}
.mod_tab .item {
  height: 61px;
  line-height: 13px;
  padding-top: 24px;
  border: none;
  color: #262626;
  font-size: 13px;
}
.mod_tab .item.cur::after {
  position: absolute;
  left: 50%;
  bottom: 15px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  content: "";
  display: block;
  width: 26px;
  height: 3px;
  background-image: linear-gradient(90deg, #f5503a, #fad1cb);
}
.part-pro-image-l {
  width: 100%;
  margin-top: 20px;
}
.part-pro-image-l img {
  width: 100%;
}
.van-toast__text {
  margin: 55px 10px 0;
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