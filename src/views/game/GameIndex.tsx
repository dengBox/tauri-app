import './index.scss';
import { defineComponent, ref } from 'vue';
import { invoke } from '@tauri-apps/api/tauri';

export default defineComponent({
  name: 'GameIndex',
  inheritAttrs: false,
  setup () {
    const numList = ref([]);
    const getList = () => {
      invoke('count_random').then(res => {
        numList.value = res as Array<never>;
      });
    };
    getList();
    return () => {
      return <div class="game-wrap">
        <header class="header">你的幸运号码是：</header>
        <main>
          {
            numList.value.map((num, i) => {
              return <span class={{ 'blue-ball': i > 4, 'red-ball': i < 5 }}>{num}</span>;
            })
          }
        </main>
        <footer class="footer">
          <el-button type='primary' onClick={getList}>再试一次</el-button>
        </footer>
      </div>;
    };
  }
});
