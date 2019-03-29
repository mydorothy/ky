<template>
  <div id="app">
    <router-view/>

    <div class="footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedLabelDefault: 'kuangyun',//默认选中的tab(value值)
      tabs: [{
        label: '矿云矿机',
        value:'kuangyun',//用于判断哪个 tab 的值作为选中值
        icon: 'cubeic-home'
      }, {
        label: '账户',
        value:'account',
        icon: 'cubeic-like'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
      if(label == this.tabs[0].value) {
        this.$router.push('/index')
      } else {
        this.$router.push('/account')
      }


    },
    changeHandler (label) {
      console.log('12',label)
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .cube-toolbar-item.active {
    background:$main-color;
  }
  .footer {
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    background: #fff;
    border-top: 1px solid #eee;
  }
</style>
