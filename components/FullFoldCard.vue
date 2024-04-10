<script setup>
import { ref } from 'vue';
const props = defineProps({
    logoUrl: {
        type: String,
        required: true,
    },
    logoName: {
        type: String,
        required: true,
    },
    isExpanded: {
        type: Boolean,
        required: true,
    },
});

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

onMounted(() => {
    isExpanded.value = props.isExpanded;
});

</script>

<template>
    <div class="full-fold-card">
        <!-- Toggle button -->
        <div class="toggle-wrapper">
            <div v-if="!isExpanded" class="logo-wrapper">
                <div class="full-fold-img-wrapperer mr-3">
                    <img :src="logoUrl" alt="logo" class="full-fold-img"/>
                </div>
                <div class="full-fold-header">
                    <span>{{ props.logoName }}</span>
                </div>
            </div>
            <div @click="toggleExpand" class="toggle-button">
                <svg v-if="!isExpanded" width="24" height="12" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L1 1L2 0" stroke="#333333" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="isExpanded" width="24" height="12" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L1 0L2 1" stroke="#333333" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <!-- Content -->
        <div :class="{'collapsed': !isExpanded}">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.full-fold-card {
    width: 100%;
    /* 기본 스타일 */
}
.full-fold-header {
    font-size: 22px;
    font-weight: 600;
    color: #131313;
}
.toggle-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 78px;
    .logo-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: calc(100% - 30px);
    }
}

.toggle-button {
    cursor: pointer;
}

.collapsed {
    display: none;
}
</style>
