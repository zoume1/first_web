<template>
  <div style="background-color: #EBEBEB;min-height:900px">
    <div class="top">
      <div class="left">
        <div class="logo">
          <img src="../assets/img/logo.png" alt>
        </div>
        <div class="name">滴金茶业后台</div>
      </div>
      <div class="right">
        <div class="news">
          <i class="el-icon-document"></i>
        </div>
        <div class="load_name">admin</div>
        <div class="unload">退出登录</div>
      </div>
    </div>

    <div style="margin-top:5px">
      <el-row >
        <el-col style=" width: 124px; margin-left: 7px;">
          <div>
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span class="top_text">导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">运费模板</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
                <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span class="top_text">导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">运费模板</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
             
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div style="background: #fff;min-height:900px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchCriteria: "",
      breadcrumbItems: ["导航一"],
      url: "https://www.easy-mock.com/mock/5cb688ed6e42965531956007/root/clichs"
    };
  },
  // 生命周期
  beforeCreate: function() {
    console.group("beforeCreate 创建前状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    // console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    // console.log("%c%s", "color:red", "message: " + this.message);
  },
  created: function() {
    console.group("created 创建完毕状态===============》");
    this.$common.post(this.url, null, r => {
      console.log(r);
    });
    // console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeMount: function() {
    console.group("beforeMount 挂载前状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  mounted: function() {
    console.group("mounted 挂载结束状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeUpdate: function() {
    console.group("beforeUpdate 更新前状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el);
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data);
    // console.log("%c%s", "color:red", "message: " + this.message);
  },
  updated: function() {
    console.group("updated 更新完成状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el);
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data);
    // console.log("%c%s", "color:red", "message: " + this.message);
  },
  beforeDestroy: function() {
    console.group("beforeDestroy 销毁前状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el);
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data);
    // console.log("%c%s", "color:red", "message: " + this.message);
  },
  destroyed: function() {
    console.group("destroyed 销毁完成状态===============》");
    // console.log("%c%s", "color:red", "el     : " + this.$el);
    // console.log(this.$el);
    // console.log("%c%s", "color:red", "data   : " + this.$data);
    // console.log("%c%s", "color:red", "message: " + this.message);
  },
  // 生命周期

  methods: {
    handleIconClick(ev) {
      console.log(ev);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "1-1":
          this.$router.push("/Page1");
          this.breadcrumbItems = ["导航一"];
          break;
        case "1-2":
          this.$router.push("/Page2");
          this.breadcrumbItems = ["导航二"];
          break;
      }
    }
  }
};
</script>
<style>
.el-submenu .el-menu-item {
    
    min-width: 100% !important;
}
.el-submenu__title,.el-menu-item {
   
    padding: 0 !important;
  
}
.el-submenu__icon-arrow{
  right: 0;
  color: #fff !important;
  font-weight: bold;
}
.el-submenu{
  padding-right:10px;
}
.list {
  background: #eeeeee;
}
/* 头部 */
.top img {
  width: 100%;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  background: #585e6b;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
}
.top .left {
  display: flex;
  align-items: center;
}
.top .left .logo {
  width: 25px;
}
.top .right {
  display: flex;
  align-items: center;
}
.top .left .name {
  font-size: 20px;
  font-weight: bold;
  width: 148px;
  text-align: center;
}
.right>div{
  width: 80px;
  text-align: center;
  font-size: 15px;
}

</style>
