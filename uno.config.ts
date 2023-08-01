// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  // ...UnoCSS options
  theme: {},
  rules: [
    ['m-1', { margin: '0.3rem' }],
    /** match[1]代表获取到的值 */
    [/^m-(\d+)$/, match => ({ margin: `${+match[1] * 10}px` })]
  ],
  shortcuts: [
    { 'flex-center': 'flex items-center justify-center' },
    [/^base-border-(.*)$/, match => `border-1 border-style-dashed border-${match[1]}`]
  ],
  presets: [
    presetUno()
  ],
  transformers: []
});
