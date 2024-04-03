<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabItems: {
        type: Array,
        required: true,
    },
});

const activeTab = ref(0);

const toggleMenu = (index) => {
    activeTab.value = index;
}


const getMinerInfo = () => {
    if (props.tabItems && props.tabItems.length > 0) {
        return props.tabItems[activeTab.value] || null;
    }
    return null;
}
</script>

<template>
    <div class="tab-view">
        <div class="tabs flex flex-row justify-content-between">
            <span
                v-for="(tab, index) in tabItems"
                :key="index"
                :class="{'active-tab mr-5': activeTab === index, 'inactive-tab mr-5': activeTab !== index}"
                @click="toggleMenu(index)"
            >
                {{ tab.name }}
            </span>
        </div>
        <div class="separator"></div>
        <div class="contents">
            <!-- Dynamic component rendering based on activeTab -->
            <MinerInfo :item="getMinerInfo()"/>
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
    color: #666666; 
}

.separator {
    width: 100%;
    height: 2px;
    background-color: #707070;
    margin: 20px 0;
}

.contents {
    width: 100%;
    // margin-top: 5rem;
}
</style>
