<template>
 <div class="login">
   <el-form ref="form" :model="form" label-width="80px">
      <img src="../assets/avatar.jpg" alt="">
     <el-form-item label="用户名">
       <el-input v-model="form.username"></el-input>
     </el-form-item>
     <el-form-item label="密码">
       <el-input v-model="form.password"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onSubmit">登录</el-button>
       <el-button>重置</el-button>
     </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
.login{
  background-color:#2d434c;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin:200px auto;
    background-color: #fff;
    padding:40px 60px 10px 20px;
    border-radius:20px;
    position: relative;
    img{
      position: absolute;
      left:50%;
      top:-70px;
      width: 100px;
      height: 100px;
      border-radius:50%;
      border: 3px solid #fff;
      transform:translateX(-50%);
    }
  }
}
</style>
