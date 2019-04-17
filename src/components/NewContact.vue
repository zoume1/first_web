<template>
  <div style="background-color: #EBEBEB;min-height:900px">
    <div style="width:100%;background-color: #636363; overflow: hidden">
      <span
        class="demonstration"
        style="float:left;padding-top:10px;color:white;margin-left:1%"
      >网站首页</span>
      <span
        class="demonstration"
        style="float:left;padding:5px;color:white;margin-left:2%;width:15%"
      >
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="searchCriteria"
          :on-icon-click="handleIconClick"
        ></el-input>
      </span>
      <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="color:white">
            admin
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>

    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              style="min-height:900px"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <i class="el-icon-message"></i>导航一
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>导航二
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div
              style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white"
            >
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div style="margin-top:10px">
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
      url:"https://www.easy-mock.com/mock/5cb688ed6e42965531956007/root/clichs",

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
        case "1":
          this.$router.push("/Page1");
          this.breadcrumbItems = ["导航一"];
          break;
        case "2":
          this.$router.push("/Page2");
          this.breadcrumbItems = ["导航二"];
          break;
      }
    }
  }
};
</script>