<template>
    <h1>Index</h1>
  </template>
<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()//router 就是原来实例的 $router，也有 beforeEach, afterEach 等等方法

    // 也可以解构
    const { push, go, back } = useRouter()
  }
}
</script>


