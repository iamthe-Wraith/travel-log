<script setup lang="ts">
const isSidebarOpen = ref(false);

onMounted(() => {
    isSidebarOpen.value = localStorage.getItem('isSidebarOpen') === 'true';
});

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
    localStorage.setItem('isSidebarOpen', isSidebarOpen.value.toString());
}
</script>

<template>
    <div class="flex-1 flex">
        <div
            :class="{ 'w-64': isSidebarOpen, 'w-15': !isSidebarOpen }"
            class="bg-base-200 transition-all duration-300"
        >
            <button
                :class="{ 'justify-end': isSidebarOpen, 'justify-center': !isSidebarOpen }"
                class="flex w-full pb-2 hover:cursor-pointer"
                @click="toggleSidebar"
            >
                <Icon
                    v-if="isSidebarOpen"
                    name="tabler:chevron-left"
                    size="32"
                />
                <Icon
                    v-else
                    name="tabler:chevron-right"
                    size="32"
                />
            </button>

            <div class="flex flex-col">
                <SidebarButton to="/dashboard" icon="tabler:map" label="Locations" :show-label="isSidebarOpen" />

                <SidebarButton to="/dashboard/add" icon="tabler:circle-plus-filled" label="Add Location" :show-label="isSidebarOpen" />

                <div class="divider" />

                <SidebarButton to="/sign-out" icon="tabler:logout-2" label="Sign Out" :show-label="isSidebarOpen" />
            </div>
        </div>
        <div class="flex-1 p-4">
            <h1>you are logged in!</h1>
        </div>
    </div>
</template>
