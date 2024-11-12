<script setup>
import { ref } from 'vue';
const { explorerBtnUrl } = useImg();

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
        <div class="tabs">
            <span
                v-for="(tab, index) in tabItems"
                :key="index"
                :class="{'active-tab mr-3': activeTab === index, 'inactive-tab mr-3': activeTab !== index}"
                @click="toggleMenu(index)"
            >
                {{ tab.name }}
            </span>
        </div>
        <div class="separator"></div>
        <div class="contents">
            <MinerInfo :item="getMinerInfo()"/>
        </div>
        <div class="explorer-img-wrapper tab-none">
            <a :href="getMinerInfo().explorerMinerHref" target="_blank">
                <NuxtImg format="webp" loading="lazy" :src="explorerBtnUrl" alt="explorerBtn" class="explorer-img" />
            </a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tab-view {
    width: 100%;
    height: 100%;
}
.tabs {
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    width: 100%;
    height: 50px;
    display: flex;
}
.tabs span {
    padding: 0px;
    cursor: pointer;
    margin-right: 0;
}
.tabs span:last-child {
    margin-right: 0;
}
.active-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 15%;
    min-width: 60px;
    height: 100%;
    background-color: #1C1C1C;
    border-radius: 5px;
}
.inactive-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #666666; 

    width: 15%;
    min-width: 60px;
    height: 100%;
    background-color: #1C1C1C;
    border-radius: 5px;
}

.separator {
    width: 100%;
    height: 2px;
    background-color: #707070;
    margin: 20px 0;
}
.contents {
    display: flex;
    flex-direction: row; 
    justify-content: center;
    width: 100%;
    // margin-top: 5rem;
}
.explorer-img-wrapper {
    // margin-top: 20px;
    width: 150px;
    height: auto;
    overflow: hidden;
}
.explorer-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 30px;
}
@media (max-width: 1350px) {
    .tab-view {
        width: 100%;
    }
    .tab-none {
            display: none;
    }
    .tabs {
        display: flex;
        flex-direction: row; 
        // justify-content: space-between; 
        justify-content: start; 
        width: 100%;
        height: 30px;
        overflow-x: auto;
    }

    .tabs span {
        padding: 0px;
        cursor: pointer;
        margin-right: 0px;
    }

    .tabs span:last-child {
        margin-right: 0;
    }

    .active-tab {
        width: 15%;
        min-width: 60px;
        // width: 60px;
        height: 100%;
        background-color: #1C1C1C;
        border-radius: 5px;
        font-size: 12px;
    }
    .inactive-tab {
        width: 15%;
        min-width: 60px;
        height: 100%;
        // margin-right: 100px;
        color: #666666; 
        background-color: #1C1C1C;
        border-radius: 5px;
        font-size: 12px;
    }

    .separator {
        width: 100%;
        height: 2px;
        background-color: #707070;
        margin: 20px 0;
    }

    .contents {
        // width: 320px;
        width: 100%;
        height: 450px;
        padding: 1rem;
        // margin-top: 5rem;
    }
}
</style>
