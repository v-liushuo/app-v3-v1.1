<script>
import CustomInput from "@/components/CustomInput.vue";

export default {
  components: {CustomInput},
  data() {
    return {
      searchValue: '',
    }
  }
}
</script>

<template>
  <div>12312312312</div>
  <CustomInput v-model:modelValue="searchValue"></CustomInput>
  <p>{{ searchValue }}</p>
</template>

<style scoped>

</style>