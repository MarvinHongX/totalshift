<script setup>
const { gotoUrl, defiUrl } = useImg();
const { defiHref } = useHref();

defineProps({
    simple: {
        type: Boolean,
        default: false
    }
});

const onGotoButtonClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

</script>

<template>
    <div class="goto">    
        <a v-if="!simple" class="layout-defi-button" :href="defiHref" target="_blank">
            <div class="defi-img-wrapperer">
                <NuxtImg format="webp" :src="defiUrl" alt="defi" class="defi-img"/>
            </div>
        </a>
        <a v-if="!simple" class="layout-goto-button" @click="onGotoButtonClick()">
            <div class="goto-img-wrapperer">
                <NuxtImg format="webp" :src="gotoUrl" alt="goto" class="goto-img"/>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped></style>