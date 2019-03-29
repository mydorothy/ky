<template>
  <div class="index">
    <div>
      <cube-slide :data="items"/>
    </div>
    <div class="main">
      <ul>
        <li>
          <h2 class="title">BTC 矿机</h2>
        </li>
        <li>
          <p>电价(￥/kw·h)</p>
          <h4>1000</h4>
        </li>
        <li>
          <p>功耗(W)</p>
          <h4>1000</h4>
        </li>
        <li>
          <p>剩余/总量(台)</p>
          <h4>1000</h4>
        </li>
        <li class="center clearfix">
          <span class="left red">￥2000</span>
          <span class="btn-box">
            <cube-button :primary="true">加入购物车</cube-button>
          </span>
        </li>
      </ul>
    </div>
    <div class="intro">
      <h2 class="center title">矿机介绍</h2>
      <dl>
        <dd class="center">
          <img src="//wayicn.oss-cn-shanghai.aliyuncs.com/assets/images/about2.png" alt="">
        </dd>
        <dt>
        <p>
          采用冷存储多备份方式，保障用户虚拟资产安全，放心又安心。
        </p>
        <p>银行用户数据加密，保障安全交易。</p>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        msg: 'hello world',
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//wayicn.oss-cn-shanghai.aliyuncs.com/assets/images/background/banner2_zh.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//wayicn.oss-cn-shanghai.aliyuncs.com/assets/images/background/banner2_zh.png'
          }
        ]
      }
    },
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/index.scss";

</style>
