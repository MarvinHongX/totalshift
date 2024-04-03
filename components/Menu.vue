<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
items: {
    type: Array,
    required: true,
},
});

const showMenu = ref(false);

const isMobile = computed(() => {
    return false;
});

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}
</script>
<template>
    <div>
        <button v-if="isMobile" @click="toggleMenu">☰</button>
        <div v-if="!isMobile" class="menu">
        <router-link
            v-for="item in items"
            :key="item.path"
            :to="item.path"
            class="menu-item"
        >
            {{ item.label }}
        </router-link>
        </div>
        <div v-if="isMobile && showMenu" class="mobile-menu">
        <router-link
            v-for="item in items"
            :key="item.path"
            :to="item.path"
            class="menu-item"
        >
            {{ item.label }}
        </router-link>
        </div>
    </div>
</template>
  

<style lang="scss" scoped>
.menu {
    display: flex;
    gap: 1.5rem;
    .menu-item {
        color: var(--text-color);
        text-decoration: none;
        transition: opacity 0.3s; 

        &:hover {
            text-decoration: none;
            opacity: 0.3;
        }
    }
}

.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: transparent;
    color: var(--text-color);

.menu-item {
    display: block;
    padding: 1rem;
    text-align: center;


}
}
</style>
