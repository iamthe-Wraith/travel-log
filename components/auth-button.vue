<script setup lang="ts">
import { createAuthClient } from 'better-auth/client';

const authClient = createAuthClient();
const loading = ref(false);

async function signIn() {
    loading.value = true;

    await authClient.signIn.social({
        provider: 'github',
        callbackURL: 'http://localhost:3000/dashboard',
    });

    loading.value = false;
}
</script>

<template>
    <button
        :disabled="loading"
        class="btn btn-accent text-xl"
        @click="signIn"
    >
        Sign in with GitHub
        <span v-if="loading" class="loading loading-spinner loading-md" />
        <Icon v-else name="tabler:brand-github" size="24" />
    </button>
</template>
