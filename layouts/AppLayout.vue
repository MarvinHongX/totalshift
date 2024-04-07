<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppGoto from './AppGoto.vue';

const { layoutConfig, layoutState } = useLayout();

// watch(layoutState.hamburgerMenuActive , (newVal) => {
//     if (newVal) {
//         bindOutsideClickListener();
//     } else {
//         unbindOutsideClickListener();
//     }
// });

const scrollDirection = ref('up'); 


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    if (window.scrollY > 0) {
        scrollDirection.value = 'down';
    } else {
        scrollDirection.value = 'up';
    }
};

const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === true,
        'layout-theme-dark': layoutConfig.darkTheme.value === true,
    };
});

const outsideClickListener = ref(null);



const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.hamburgerMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    const sidebarEl = document.querySelector('.menu-hamburger');
    const topbarEl = document.querySelector('.menu-hamburger-wrapper');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || 
            topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar v-if="scrollDirection === 'up'"></app-topbar>
        <div class="layout-main-container">
            <div class="layout-main">
                <NuxtPage />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
    <app-goto :simple="scrollDirection == 'up'"></app-goto>
</template>

<style lang="scss" scoped>
.layout-wrapper {
    position: relative;

    .layout-main-container {
        padding-top: 0px;
    }

    .layout-main {
        transition: padding-top 0.3s ease;
    }
}

</style>