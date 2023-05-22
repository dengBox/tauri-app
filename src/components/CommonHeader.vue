<template>
  <div class="common-header">
    <div class="left-logo" @click="expandMenu">
      <img src="../../src-tauri/icons/32x32.png">
      <span>Tauri App</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useGlobalStore from '@/plugin/store';

export default {
  name: 'CommonHeader',
  components: {
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState(useGlobalStore, ['isCollapse'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeCollapse']),
    expandMenu () {
      this.changeCollapse(!this.isCollapse);
    }
  }
};
</script>

<style scoped lang="scss">
.common-header {
  height: 40px;
  background: #000;
  display: flex;
  color: #fff;
  .left-logo {
    padding-left: 20px;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
