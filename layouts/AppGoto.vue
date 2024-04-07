<script setup>
const { gotoUrl } = useImg();

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
    <a v-if="!simple" class="layout-goto-button" @click="onGotoButtonClick()">
        <div class="goto-img-wrapperer">
            <img :src="gotoUrl" alt="goto" class="goto-img"/>
        </div>
    </a>
</template>

<style lang="scss" scoped></style>