<template>
    <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost text-xl">
                Travel Log
            </NuxtLink>
        </div>

        <div class="navbar-end">
            <AppThemeToggle />

            <NuxtLink to="/" class="btn btn-accent text-xl">
                Sign in with GitHub
                <Icon name="tabler:brand-github" size="24" />
            </NuxtLink>
        </div>
    </div>
</template>
