<script setup lang="ts">
const props = defineProps<{
    to: string;
    icon: string;
    label: string;
    showLabel?: boolean;
}>();

const route = useRoute();
</script>

<template>
    <div
        :class="{ 'tooltip tooltip-right': !props.showLabel }"
        :data-tip="props.showLabel ? undefined : props.label"
    >
        <NuxtLink
            :to="props.to"
            :class="{
                'bg-base-300': route.path === props.to,
            }"
            class="flex justify-start gap-2 flex-nowrap py-2 px-4 hover:bg-base-300 hover:cursor-pointer"
        >
            <Icon :name="props.icon" size="24" />
            <Transition name="fade">
                <span v-if="props.showLabel" class="whitespace-nowrap">{{ props.label }}</span>
            </Transition>
        </NuxtLink>
    </div>
</template>

<style scoped>
.fade-enter-active {
    animation: fade 0.2s ease;
}

.fade-leave-active {
    animation: fade 0.2s ease reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
