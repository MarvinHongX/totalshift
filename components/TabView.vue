<script setup>
import { ref } from 'vue';
const props = defineProps({
    tabNames: {
        type: Array,
        required: true,
    },
});
const activeTab = ref(0);

const toggleMenu = (index) => {
    // return;
    activeTab.value = index;
}
</script>

<template>
    <div class="tab-view">
        <div class="tabs">
            <span
                v-for="(tab, index) in tabNames"
                :key="index"
                :class="{'active-tab mr-5': activeTab === index, 'inactive-tab mr-5': activeTab !== index}"
                @click="toggleMenu(index)"
            >
                {{ tab.name }}
            </span>
        </div>
        <div class="separator"></div>
        <div class="contents">
            <slot :tabIndex="activeTab"></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tab-view {
    width: 100%;
}
.tabs {
    width: 100%;
    display: flex;
    justify-content: start;
}

.tabs span {
    padding: 0px;
    cursor: pointer;
    margin-right: 0;
}

.tabs span:last-child {
    margin-right: 0;
}

.inactive-tab {
    color: #525252; 
}

.separator {
    width: 100%;
    height: 2px;
    background-color: #707070;
    margin: 20px 0;
}

.contents {
    width: 100%;
    margin-top: 5rem;
}
@media (max-width: 890px) {
    .active-tab {
        font-size: 18px;
    }
    .inactive-tab {
        color: #525252; 
        font-size: 18px;
    }
    .contents {
        margin-top: 1rem;
    } 
}
</style>
