import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestIndex',
  inheritAttrs: false,
  setup () {
    return () => {
      return <div class="test-index-wrap">
        test
      </div>;
    };
  }
});
