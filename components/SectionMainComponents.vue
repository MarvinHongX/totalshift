<script setup>
const { businessAUrl, businessBUrl, businessCUrl, businessDUrl } = useImg();
</script>
<template>
    <FullCard class="section-maincomponents">
        <div class="maincomponents-header mb-4">
            <span>주요 구성요소</span>
        </div>
        <div class="maincomponents-header2">
            <span>테라바이트에서 페타바이트에 이르기까지 최고 용량을 갖춘 클라우드</span>
        </div>
        <div class="maincomponents-header2 mb-5">
            <span>탈중앙화 데이터 스토리지 솔루션을 제공하는 기업입니다.</span>
        </div>
        <div class="maincomponents-header2">
            <span>현시대의 IDC(Internet Data Center)에서 미래의 Web3 대응 IPFS</span>
        </div>
        <div class="maincomponents-header2">
            <span>(Inter Planetary File System)까지 솔루션을 개발 및 제공 하면서 </span><span>미래의 시장을 선도해 나가겠습니다.</span>
        </div>
        <div class="maincomponents-separator"></div>
        <DualTabView/>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-maincomponents {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 1520px;
    padding: 9rem;
    background-color: #111112;

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
@media (max-width: 890px) {
    .section-maincomponents {
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 1020px;
        width: 100%;
        padding: 9rem 1rem;
        background-color: #111112;

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

