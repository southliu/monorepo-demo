<template>
    <div class="btn">
        {{ msg }}
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    msg?: string
}>();
</script>

<style scoped>
.btn {
    margin: 8px;
    padding: 4px 8px;
    border-radius: 50%;
    background-color: skyblue;
    border: 1px slid darkmagenta;
}
</style>