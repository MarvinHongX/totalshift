<script setup>
const { ktUrl, seagateUrl, protocolLabsUrl, ipfsUrl, filecoinUrl, kidcUrl, aleoUrl } = useImg();
</script>
<template>
    <FullCard class="section-partner flex flex-column align-items-center">
        <div class="partner-header mb-4">
            <span>PARTNER & CLIENT</span>
        </div>
        <div class="partner-header2">
            <span>다양한 파트너와</span>
        </div>
        <div class="partner-header2">
            <span>앞으로의 성장을 함께합니다.</span>
        </div>
        <div class="partner-separator"></div>
        <div class="partner-items flex flex-row align-items-center justify-content-between">
            <div class="partner-item mr-3">
                <img :src="ktUrl" alt="kt" style="width: 80%;" />
            </div>
            <div class="partner-item">
                <img :src="seagateUrl" alt="seagate" style="width: 80%;" />
            </div>
            <div class="partner-item">
                <img :src="protocolLabsUrl" alt="protocolLabs" style="width: 80%;" />
            </div>
            <div class="partner-item">
                <img :src="ipfsUrl" alt="IPFS" style="width: 80%;" />
            </div>
            <div class="partner-item">
                <img :src="filecoinUrl" alt="filecoin" style="width: 80%;" />
            </div>
            <div class="partner-item mr-3">
                <img :src="kidcUrl" alt="KIDC" style="width: 80%;" />
            </div>
            <div class="partner-item">
                <img :src="aleoUrl" alt="aleo" style="width: 80%;" />
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-partner {
    height: 825px;
    padding-top: 11rem;
    background-color: #FFFFFF;
    .partner-header {
        font-weight: 700;
        font-size: 28px;
        color: #354082;
    }
    .partner-header2 {
        font-weight: 800;
        font-size: 56px;
        color: #333333;
    }
    .partner-items {
        width: 70%;
    }
    .partner-separator {
        height: 1.5px;
        width: 85%;
        background-color: #707070;
        margin: 6.5rem 0 3rem 0;
    }
}
</style>