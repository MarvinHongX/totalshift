<script setup>
const { businessAUrl, businessBUrl, businessCUrl, businessDUrl } = useImg();
</script>
<template>
    <FullCard class="section-maincomponents">
        <div class="maincomponents-header mb-4">
            <span>WEB 3.0 Project</span>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-maincomponents {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 100%;
    height: 280px;
    background-color: #111112;
    padding-top: 8rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );

    .maincomponents-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
   
}
@media (max-width: 1350px) {
    .section-maincomponents {
        height: 180px;
        padding: 2rem 1rem;

        .maincomponents-header {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 24px;
        }
    }
}
</style>

