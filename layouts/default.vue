<script setup lang="ts">
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
    <div>
        <AppNavBar />

        <main>
            <slot />
        </main>
    </div>
</template>
