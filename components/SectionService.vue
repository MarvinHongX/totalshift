<script setup>
const { skyzoneUrl, aleoTrackUrl, aleoCatUrl } = useImg();
</script>
<template>
    <FullCard class="section-service flex flex-column align-items-start">
        <div class="service-header mb-4">
            <span>제공중인 서비스</span>
        </div>
        <div class="service-header2 mb-2">
            <span>테라바이트에서 페타바이트에 이르기까지 최고 용량을 갖춘 클라우드</span>
        </div>
        <div class="service-header2 mb-6">
            <span> 탈중앙화 데이터 스토리지 솔루션을 제공하는 기업입니다.</span>
        </div>
        <div class="service-items flex flex-row align-items-center justify-content-between">
            <div class="service-item flex flex-column align-items-center justify-content-end mr-5">
                <a href="https://www.theskyzone.net" target="_blank" class="service-link">
                    <div class="mb-5">
                        <img :src="skyzoneUrl" alt="skyzone" style="width: 90%;" />
                    </div>
                    <div class="mb-5">
                        <span>더스카이존</span>
                    </div>
                </a>
            </div>
            <div class="service-item flex flex-column align-items-center justify-content-end mr-5">
                <a href="https://www.aleotrack.com" target="_blank" class="service-link">
                    <div class="mb-6">
                        <img :src="aleoTrackUrl" alt="aleotrack" style="width: 90%;" />
                    </div>
                    <div class="mb-5">
                        <span>알레오 트랙</span>
                    </div>
                </a>
            </div>
            <div class="service-item flex flex-column align-items-center justify-content-end">
                <a href="https://www.aleocat.com" target="_blank" class="service-link">
                    <div class="mb-6">
                        <img :src="aleoCatUrl" alt="aleocat" style="width: 90%;" />
                    </div>
                    <div class="mb-5">
                        <span>알레오 캣</span>
                    </div>
                </a>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-service {
    height: 825px;
    width: 100%;
    padding: 4rem 8rem;  
    background-color: #111112;
    color: #111112;
    font-weight: 600;
    font-size: 18px;
    .service-header {
        font-weight: 700;
        font-size: 45px;
        color: #FFFFFF;
    }
    .service-header2 {
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
    }
    .service-items {
        width: 100%;
    }
    .service-item {
        width: 448px;
        height: 300px;
        background-color: #FFFFFF;
    }
    .service-item > img {
        width: 100%; 
        height: auto;
    }
    .service-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        text-decoration: none;
        color: inherit;
    }
}
</style>