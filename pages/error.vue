<script setup lang="ts">
const route = useRoute();
const error = route.query.error || 'An unknown error occurred';
</script>

<template>
    <div class="card container flex flex-col justify-center items-center gap-4 min-h-72 mt-4 mx-auto text-center bg-base-300">
        <div role="alert" class="alert alert-error min-w-1/2 text-center">
            <div>Well this is awkward...</div>
            <div>{{ error }}</div>
        </div>

        <NuxtLink to="/" class="btn btn-primary">
            Go back to the home page
            <Icon name="tabler:arrow-left" size="32" />
        </NuxtLink>
    </div>
</template>
