<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
    authStore.signOut();
});
</script>

<template>
    <div class="card container flex flex-col justify-center items-center gap-4 min-h-72 mt-4 mx-auto text-center bg-base-300">
        <span class="loading loading-spinner loading-xl" />
    </div>
</template>
