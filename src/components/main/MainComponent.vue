<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const state = useCounterStore()
</script>

<template>
    <main>
        <div>Hello, World!</div>
        <div> {{ state.doubleCount }} </div>
        <button @click="state.increment()">Increment</button>
    </main>
</template>