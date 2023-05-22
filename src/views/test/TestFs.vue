<template>
  <div class="test-fs-wrap">
    fs & tauri
  </div>
</template>

<script lang="ts" setup>
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

async function loadfile () {
  const resourcePath = await resolveResource('resources/test.json');
  const langDe = JSON.parse(await readTextFile(resourcePath));

  console.log(langDe.hello); // This will print 'Guten Tag!' to the devtools console
}
loadfile();

</script>