<script setup>
const { layoutState, onHamburgerMenuToggle, isHamburgerMenuActive } = useLayout();
const { logoUrl } = useImg();
const { defiHref } = useHref();

const items = [
    { label: 'About Us', path: '/' },
    { label: 'Web3.0', path: '/web3' },
    { label: 'DEFI', path: '/defi' },
];

const onItemClick = (path) => {
    layoutState.hamburgerMenuActive.value = false;
    if (path === '/defi') {
        window.open(defiHref.value, '_blank');
        return;
    } 
    navigateTo(path);
};

const onLogoClick = () => {
    layoutState.hamburgerMenuActive.value = false;
    navigateTo('/');
};
 
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-left">
            <a 
                class="topbar-logo"
                @click="() => onLogoClick()"
            >
                <img :src="logoUrl" alt="logo" />
            </a>  
        </div>
        <div class="topbar-right">
            <div class="menu" :class="{ 'menu-open': isHamburgerMenuActive }">
                <div class="menu-items">
                    <a
                        v-for="item in items"
                        :key="item.path"
                        class="menu-item"
                        @click="() => onItemClick(item.path)"
                    >
                        {{ item.label }}
                    </a>
                </div>
                <div v-if="isHamburgerMenuActive" class="menu-hamburger-items">
                    <a
                        v-for="item in items"
                        :key="item.path"
                        class="menu-hamburger-item"
                        @click="() => onItemClick(item.path)"
                    >
                        {{ item.label }}
                    </a>
                </div>
                <div class="menu-label">
                    <span v-if="isHamburgerMenuActive">MENU</span>
                </div>
                <div class="menu-hamburger-wrapper">
                    <a class="menu-hamburger" @click="onHamburgerMenuToggle">
                        <svg v-if="!isHamburgerMenuActive" width="30" height="30" viewBox="2 4 18 18">
                            <path fill="#FFFFFF" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                        <span>
                            <svg v-if="isHamburgerMenuActive" width="30" height="30" viewBox="2 4 18 18">
                                <path fill="#FFFFFF" d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59L5 6.41l5.59 5.59L5 17.59l1.41 1.41L12 13.41l5.59 5.59 1.41-1.41-5.59-5.59z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>