<script setup>
const { idcUrl, tempHumidityUrl, upsUrl, firewallUrl, extinguisherUrl, realtimeUrl } = useImg();
</script>
<template>
    <FullCard class="section-centerA flex flex-column align-items-start">
        <div class="flex flex-column justify-content-start mb-5">
            <div class="centerA-header mb-4">
                <span>가산 캠퍼스</span>
            </div>
            <div class="centerA-header2 mb-2">
                <span>서울 금천구 가산로9길 66 더리즌밸리 501호~507호</span>
            </div>
            <div class="centerA-header2">
                <span>최대 70페타바이트 스토리지 용량</span>
            </div>
        </div>
        <div class="centerA-img-wrapperer">
            <div class="centerA-img">
                <img :src="idcUrl" alt="centerA" style="width: 100%;" />
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-centerA {
    height: 1000px;
    padding: 9rem;
    background-color: #070707;
    .centerA-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
    .centerA-header2 {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }

    .centerA-img-wrapperer {
        width: 1420px;
        overflow: visible; 
    }
    
    .centerA-img {
        width: 100%;
        position: relative; 
        top: 0; left: 0;
        // object-fit: cover;
    }
}
</style>

