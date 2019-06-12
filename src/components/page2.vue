<template>

  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-select v-model="form.sheng" @change="choseProvince" placeholder="省级地区">
        <el-option v-for="item in form.province" :key="item.id" :label="item.value" :value="item.id"></el-option>
       <text v-for="item in form.province">item.value</text>
      </el-select>
      <el-select v-model="form.shi" @change="choseCity" placeholder="市级地区">
        <el-option v-for="item in form.shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
      </el-select>
      <el-select v-model="form.qu" @change="choseBlock" placeholder="区级地区">
        <el-option v-for="item in form.qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图片上传">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success="handleAvatarSuccess"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="form.dialogVisible">
        <img width="100%" :src="form.dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import axios from "axios";
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          province: "",
          sheng: "",
          shi: "",
          shi1: [],
          qu: "",
          qu1: [],
          city: "",
          block: "",
          dialogImageUrl: '',
          dialogVisible: false


        },
         mapJson: "../static/json/map.json",

      }
    },
    methods: {
      // 加载china地点数据，三级
      getCityData: function() {
        var that = this.form;
        axios
          .get(this.mapJson)
          .then(function(response) {
            if (response.status == 200) {
              var data = response.data;
              that.province = [];
              that.city = [];
              that.block = [];
              // 省市区数据分类
              for (var item in data) {
                if (item.match(/0000$/)) {
                  //省
                  that.province.push({
                    id: item,
                    value: data[item],
                    children: []
                  });
                } else if (item.match(/00$/)) {
                  //市
                  that.city.push({ id: item, value: data[item], children: [] });
                } else {
                  //区
                  that.block.push({ id: item, value: data[item] });
                }
              }
              // 分类市级
              for (var index in that.province) {
                for (var index1 in that.city) {
                  if (
                    that.province[index].id.slice(0, 2) ===
                    that.city[index1].id.slice(0, 2)
                  ) {
                    that.province[index].children.push(that.city[index1]);
                  }
                }
              }
              // 分类区级
              for (var item1 in that.city) {
                for (var item2 in that.block) {
                  if (
                    that.block[item2].id.slice(0, 4) ===
                    that.city[item1].id.slice(0, 4)
                  ) {
                    that.city[item1].children.push(that.block[item2]);
                  }
                }
              }
            }
            else {
              console.log(response.status);
            }
          })
          .catch(function(error) {
            console.log(typeof +error);
          });
      },
      // 选省
      choseProvince: function(e) {
        var that=this.form;
        for (var index2 in that.province) {
          if (e === that.province[index2].id) {
            that.shi1 = that.province[index2].children;
            that.shi = that.province[index2].children[0].value;
            that.qu1 = that.province[index2].children[0].children;
            that.qu = that.province[index2].children[0].children[0].value;
            that.E = that.qu1[0].id;
          }
        }
      },
      // 选市
      choseCity: function(e) {
        var that=this.form;
        for (var index3 in that.city) {
          if (e === that.city[index3].id) {
            that.qu1 = that.city[index3].children;
            that.qu = that.city[index3].children[0].value;
            that.E = that.qu1[0].id;
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock: function(e) {
        this.E = e;
        // console.log(this.E)
      },
      onSubmit() {
        console.log('submit!');
      },
      // 图片上传事件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleAvatarSuccess(file, fileList){
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        console.log(file);
        this.form.dialogImageUrl = file.url;
        this.form.dialogVisible = true;
      }
  },
    created: function() {
    this.getCityData();
  },
    mounted: function() {

  },

    }

</script>
<style>
  .el-form-item__content {
    text-align: left !important;
    width: 663px;
  }

  .line {
    text-align: center;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
