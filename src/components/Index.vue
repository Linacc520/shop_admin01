<template>
  <el-container class="index">
    <el-header>
      <div class="logo"></div>
      <div class="title">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎你,xxx
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // 给用户一个提示
      // 参数1: 提示内容
      // 参数2: 提示标题
      this.$confirm('你确定要退出吗', '温馨提示', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 点击确定了
          localStorage.removeItem('token')
          // 跳转到登录页
          this.$router.push('/login')
          // 提示
          this.$message.success('退出成功')
        })
        .catch(() => {
          this.$message('操作已取消')
        })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
// 如果给style标签添加scoped,表示style标签中的样式仅仅在当前组件中生效,不会影响到其他组件
// 推荐每个单文件组件都加上scoped属性.
// 原理: 如果给某个单文件组件的style添加了scoped属性
// 1.会给当前组件中所有元素都添加一个随机的自定义属性
// 2.会给当前组件中的style中的所有样式都加上一个属性选择器,属性选择器和添加的自定义属性是匹配的
.index {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;
    display: flex;
    .logo,
    .logout {
      width: 180px;
    }
    .logo {
      background: url("../assets/logo.png") no-repeat center center/contain;
    }
    .title {
      flex: 1;
      text-align: center;
      color: #fff;
      height: 60px;
      line-height: 60px;
    }
    .logout {
      height: 60px;
      line-height: 60px;
      font-weight: 700;
      text-align: right;
      a {
        color: orange;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #eaeef1;
  }
}
</style>
