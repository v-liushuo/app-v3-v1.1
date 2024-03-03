<script setup>
import CustomInputSetup from "@/components/CustomInputSetup.vue";
import {ref, watch} from "vue";

const searchValue = ref('');

watch(searchValue, async (value, oldValue) => {
  console.log('new value:', value, 'old value:', oldValue)
})
</script>

<template>
  <div>12312312312</div>
  <CustomInputSetup v-model:model-value="searchValue"></CustomInputSetup>
  <p>{{ searchValue }}</p>
</template>

<style scoped>

</style>