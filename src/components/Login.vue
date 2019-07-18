<template>
 <div class="login">
   <el-form ref="form" :rules="rules" :model="form" label-width="80px" status-icon>
        <img src="../assets/avatar.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
  </el-form>
 </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          // required: 非空规则
          // message: 提示信息
          // trigger: 触发的方式  blur  change
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    resetForm () {
    // 获取表单组件，调用方法
      this.$refs.form.resetFields()
    },
    async login () {
      // 对表单进行校验
      // 如果表单校验成功,会走resolve,如果失败,走reject
      try {
        // 等待表单校验成功
        await this.$refs.form.validate()
        // 从成功的结果中解构出 meta 和 data
        // const res = await this.axios.post('login', this.form)
        const { meta, data } = await this.axios.post('login', this.form)
        if (meta.status === 200) {
          this.$message({
            message: '登录成功',
            type: 'success',
            duration: 1000
          })

          // 存储token
          localStorage.setItem('token', data.token)
          // 跳转到首页组件

          this.$router.push('/index')
        } else {
          this.$message.error(meta.msg)
        }
      } catch (e) {
        return false
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
