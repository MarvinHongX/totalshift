<script setup>
definePageMeta({
    middleware: ['disable-scroll']
});
</script>

<template>
    <div class="flex flex-column" style="width:100%">
        <SectionTotalshift />
        <SectionIntroduce />
        <SectionHistory />
        <SectionBusiness />
        <SectionTeam />
        <!-- <SectionYoo /> -->
        <SectionSong />
        <SectionPartner />
        <SectionIdc />
        <SectionWeb3 />
        <SectionService />
    </div>
</template>

<style lang="scss" scoped>
</style>