<script setup>
definePageMeta({
    middleware: ['disable-scroll']
});
</script>

<template>
    <div class="flex flex-column" style="width:100%">
        <SectionCenterA />
        <SectionCenterADetail />
        <SectionMainComponentsTop />
        <SectionIpfs />
        <SectionSeparator />
        <!-- <SectionFilecoin /> -->
        <!-- <SectionMainComponentsBottom /> -->
        <!-- <SectionFilecoinNode /> -->
        <!-- <SectionAleo /> -->
        <!-- <SectionCenterB /> -->
    </div>
</template>

<style lang="scss" scoped>
</style>