<script setup>
const { businessAUrl, businessBUrl, businessCUrl, businessDUrl } = useImg();
</script>
<template>
    <FullCard class="section-maincomponents">
        <div class="maincomponents-header mb-4">
            <span>WEB 3.0 Project</span>
        </div>
        <div class="maincomponents-header2 mb-2">
            <span>블록체인은 중앙 기관 없이 안전한 거래를 가능케 하는 기술입니다.</span>
        </div>
        <div class="maincomponents-header2 mb-2">
            <span>연결된 블록들로 데이터를 분산 저장하며 변경을 방지하고, 금융부터 의료, 공급망 등 다양한 분야에 혁신을 가져옵니다.</span>
        </div>
        <div class="maincomponents-header2 mb-7">
            <span>이는 데이터의 안전성과 투명성을 높여 개인의 자유와 안전을 보장합니다.</span>
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
        height: 300px;
        padding: 2rem 1rem;

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

