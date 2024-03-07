<script setup >
 import { useStore } from 'vuex'
const store = useStore()
 console.log(store.state.count)
</script>
<template>
  <div>
    /index132{{ store.state.user }}
  </div>
  <button @click="store.state.count++">1</button>
</template>