<script setup>
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';

const { layoutConfig } = useLayout();

const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === true,
        'layout-theme-dark': layoutConfig.darkTheme.value === true,
    };
});

</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-main-container">
            <div class="layout-main">
                <NuxtPage />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>