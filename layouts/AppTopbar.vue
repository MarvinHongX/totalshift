<script setup>
const { logoUrl } = useImg();

const menuItems = [
    { label: 'About Us', path: '/' },
    { label: 'Web3.0', path: '/web3' },
];

</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="topbar-logo">
            <img :src="logoUrl" alt="logo" />
        </router-link>
        <div class="topbar-menu-container">
            <Menu :items="menuItems" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>