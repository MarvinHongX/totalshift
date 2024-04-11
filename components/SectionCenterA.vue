<script setup>
const { idcUrl, tempHumidityUrl, upsUrl, firewallUrl, extinguisherUrl, realtimeUrl } = useImg();
</script>
<template>
    <FullCard class="section-centerA">
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
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 1000px;
    padding: 9rem;
    background-color: #070707;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
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
        width: 1130px;
        overflow: visible; 
        
    }
    
    .centerA-img {
        width: 100%;
        position: relative; 
        top: 0; left: 0;
        
        // object-fit: cover;
    }
    .centerA-img > img {
        border-radius: 15px;
    }
}
@media (max-width: 1350px) {
    .section-centerA {
        height: 1050px;
        padding: 9rem 1rem;
        .centerA-header {
            font-weight: 600;
            font-size: 24px;
        }
        .centerA-header2 {
            font-size: 12px;
        }

        .centerA-img-wrapperer {
            width: 95%;
        }
    }
}

@media (max-width: 860px) {
    .section-centerA {
        height: 850px;
    }
}
@media (max-width: 650px) {
    .section-centerA {
        height: 650px;
    }
}
</style>

