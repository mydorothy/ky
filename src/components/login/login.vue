<template>
  <div class="login">
    <div>
      <cube-input
        v-model="param.phone"
        :placeholder="placeholder.phone"
        :type="'tel'"
        :maxlength="maxlength"
        :autofocus="autofocus"></cube-input>
      <cube-input
        v-model="param.password"
        :placeholder="placeholder.password"
        :type="'password'"
        :maxlength="maxlength"
        :readonly="readonly"
        :disabled="disabled"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :eye="eye"></cube-input>
      <cube-button :primary="true" @click="btnLogin">登录</cube-button>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        readonly: false,
        maxlength: 26,
        disabled: false,
        autofocus: true,
        autocomplete: true,
        eye: {//默认 false，密码眼睛不可见；
          open: false,//控制眼睛张开还是闭合
          reverse: false //控制密码可见和眼睛开闭是否相反。
        },
        placeholder: {
          phone: '请输入手机号',
          password: '请输入密码',
        },
        param: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      btnLogin() {

        /*this.$axios.post('http://192.168.100.88:8086/user/account/',{
         phone:'18600536683',
         password:'111111',
         })
         .then(function(response){
         console.log(response);
         })
         .catch(function(error){
         console.log(error);
         });*/
        this.$axios({
          method: 'post',//方法
          url: 'http://192.168.100.88:8086/user/account/',//地址
          data: {//参数
            phone: '18600536683',
            password: '111111'
          }
        }).then(function (response) {
          console.log(response);
        })
          .catch(function (error) {
            console.log(error);
          });

        /*this.$axios.get('http://192.168.100.88:8086/user/account/', {
          params: {
            phone: '18600536683',
            password: '111111'
          }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error)
          });*/
      }
    }
  }
</script>
<style>
  .login {
    padding: 20px;
  }
</style>
