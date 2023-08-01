<template>
  <div class="h-40px bg-#000 c-white flex">
    <div class="p-l-20px w-200px flex flex-items-center font-600 cursor-pointer" @click="expandMenu">
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
