<script setup>
import { ref } from 'vue';
const { filfoxBtnUrl } = useImg();

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
        <div class="filfox-img-wrapper tab-none">
            <a :href="getMinerInfo().filfoxMinerHref" target="_blank">
                <img :src="filfoxBtnUrl" alt="filfoxBtn" class="filfox-img" />
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
}
.inactive-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #666666; 
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
.filfox-img-wrapper {
    margin-top: 5px;
    width: 109px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
}
.filfox-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
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
