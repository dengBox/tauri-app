<template>
  <div class="login-view">
    <el-button type="primary" @click="goCommon">login</el-button>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {

  },
  data () {
    return {

    };
  },
  methods: {
    goCommon () {
      this.$router.push('/common/test/index');
    }
  }
};
</script>

<style scoped lang="scss">

</style>
