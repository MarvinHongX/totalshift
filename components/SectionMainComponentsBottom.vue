<script setup>
const { businessAUrl, businessBUrl, businessCUrl, businessDUrl } = useImg();
</script>
<template>
    <FullCard class="section-maincomponents">
        <!-- <div class="maincomponents-separator"></div> -->
        <DualTabView/>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-maincomponents {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 780px;
    background-color: #111112;
    padding-top: 5rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );

    .maincomponents-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
    .maincomponents-header-point {
        color: #666666;
    }
    .maincomponents-header2 {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }
    .maincomponents-header2-point {
        color: #057FFC;
    }
    .maincomponents-separator {
        height: 1.5px;
        width: 100%;
        background-color: #707070;
        margin: 4.5rem 0;
    }
}
@media (max-width: 1350px) {
    .section-maincomponents {
        height: 1000px;
        padding: 9rem 1rem;

        .maincomponents-header {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 24px;
        }
        .maincomponents-header-point {
            color: #666666;
        }
        .maincomponents-header2 {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;
            color: #FFFFFF;
            font-weight: 500;
            font-size: 12px;
        }
        .maincomponents-header2 > span {
            margin-bottom: 10px;
        }
        .maincomponents-header2-point {
            color: #057FFC;
        }
        .maincomponents-separator {
            height: 1px;
            width: 70%;
            background-color: #707070;
            margin: 2.5rem 0;
        }
    }
}
</style>

