<template>
  <div class="title">

  </div>
</template>

<script>
  export default {

    data() {
      return {

      };
    },
    methods: {

    },
    mounted() {
      // post请求
      this.$axios.post('https://www.easy-mock.com/mock/5cb688ed6e42965531956007/root/clichs',
        {
          a: 0,
        }
      )
        .then(res => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
      // get请求
      this.$axios.get('https://www.easy-mock.com/mock/5cb687ffb543fe5b60ec2877/example/', {
        params: {
          ID: 12345
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
  };
</script>

<style>

</style>
