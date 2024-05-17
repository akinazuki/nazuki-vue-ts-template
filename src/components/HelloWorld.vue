<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

function a() {
  count.value++;
}
</script>

<template>
  <h1 class="text-3xl font-bold underline" @click="a">
    {{ msg }} {{ count }}
  </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
