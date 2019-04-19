<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动位置">
       <el-select v-model="form.sheng" @change="choseProvince" placeholder="省级地区">
          <el-option v-for="item in form.province" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="form.shi" @change="choseCity" placeholder="市级地区">
          <el-option v-for="item in form.shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="form.qu" @change="choseBlock" placeholder="区级地区">
          <el-option v-for="item in form.qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
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
          block: ""
        
        },
         mapJson: "../static/json/map.json",
           
      }
    },
    methods: {
     
         // 加载china地点数据，三级
    getCityData: function() {
      var that = this;
      console.log(this.form.mapJson);
      axios
        .get(this.form.mapJson)
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            that.form.province = [];
            that.form.city = [];
            that.form.block = [];
            // 省市区数据分类
            console.log(data);
            for (var item in data) {
              if (item.match(/0000$/)) {
                //省
                that.form.province.push({
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
            for (var index in that.form.province) {
              for (var index1 in that.form.city) {
                if (
                  that.form.province[index].id.slice(0, 2) ===
                  that.form.city[index1].id.slice(0, 2)
                ) {
                  that.form.province[index].children.push(that.form.city[index1]);
                }
              }
            }
            // 分类区级
            for (var item1 in that.form.city) {
              for (var item2 in that.form.block) {
                if (
                  that.form.block[item2].id.slice(0, 4) ===
                  that.form.city[item1].id.slice(0, 4)
                ) {
                  that.form.city[item1].children.push(that.form.block[item2]);
                }
              }
            }
          } else {
            console.log(response.status);
          }
        })
        .catch(function(error) {
          console.log(typeof +error);
        });
    },
    // 选省
    choseProvince: function(e) {
      for (var index2 in this.form.province) {
        if (e === this.form.province[index2].id) {
          this.form.shi1 = this.form.province[index2].children;
          this.form.shi = this.form.province[index2].children[0].value;
          this.form.qu1 = this.form.province[index2].children[0].children;
          this.form.qu = this.form.province[index2].children[0].children[0].value;
          this.form.E = this.form.qu1[0].id;
        }
      }
    },
    // 选市
    choseCity: function(e) {
      for (var index3 in this.form.city) {
        if (e === this.form.city[index3].id) {
          this.form.qu1 = this.form.city[index3].children;
          this.form.qu = this.form.city[index3].children[0].value;
          this.form.E = this.form.qu1[0].id;
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
  },
  created: function() {
    this.getCityData();
  },
    mounted: function() {
       
  },
 
    }
  
</script>
<style>
.el-form-item__content{
  text-align: left !important;
  width: 500px;
}
</style>
