<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { userApi } from '@south/apis';
import { arrayUtil } from '@south/utils'
import TheWelcome from '../components/TheWelcome.vue'

const callApi = () => {
  userApi.getUser(20).then((res: any) => {
    console.log('res:', res)
  })

  userApi.getUserById(666).then((res: any) => {
    console.log('getUserById:', res)
  });
};

onMounted(() => {
  arrayUtil
  const arr = ['jay', 'tom'];
  console.log(arrayUtil.findIndex('tom', arr));
});
</script>