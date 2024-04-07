<script setup>
const { skyzoneUrl, aleoTrackUrl, aleoCatUrl } = useImg();
const { skyzoneHref, aleotrackHref, aleocatHref } = useHref();
</script>
<template>
    <FullCard class="section-service">
        <div class="service-header mb-4">
            <span>제공중인 서비스</span>
        </div>
        <div class="service-header2 mb-2">
            <span>테라바이트에서 페타바이트에 이르기까지 최고 용량을 갖춘 클라우드</span>
        </div>
        <div class="service-header2 mb-4">
            <span> 탈중앙화 데이터 스토리지 솔루션을 제공하는 기업입니다.</span>
        </div>
        <div class="service-items">
            <div class="item-group">
                <div class="service-item mr-3">
                    <a :href="skyzoneHref" target="_blank" class="service-link">
                        <div class="mb-5">
                            <img :src="skyzoneUrl" alt="skyzone" style="width: 90%;" />
                        </div>
                        <div class="mb-3">
                            <span>더스카이존</span>
                        </div>
                    </a>
                </div>
                <div class="service-item">
                    <a :href="aleotrackHref" target="_blank" class="service-link">
                        <div class="mb-6">
                            <img :src="aleoTrackUrl" alt="aleotrack" style="width: 90%;" />
                        </div>
                        <div class="mb-3">
                            <span>알레오 트랙</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item-group">
                <div class="service-item mr-3">
                    <a :href="aleocatHref" target="_blank" class="service-link">
                        <div class="mb-6">
                            <img :src="aleoCatUrl" alt="aleocat" style="width: 90%;" />
                        </div>
                        <div class="mb-3">
                            <span>알레오 캣</span>
                        </div>
                    </a>
                </div>
                <div class="service-item service-item-none">
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-service {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 825px;
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: between;
        width: 100%;
        .item-group {
            // min-width: 550px;
            height: 362px;
            display: flex;
            flex-direction: row;
            align-items: center;
            // justify-content: center;
            margin-right: 15px;
            margin-bottom: 8px;
            .service-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                width: 448px;
                height: 100%;
                background-color: #FFFFFF;
                padding-bottom: 50px;
                .service-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: end;
                    text-decoration: none;
                    color: inherit;
                }
            }
            .service-item-none {
                background-color: transparent;
            }
            .service-item > img {
                width: 100%; 
                height: auto;
            }
        }
    }
}
@media (max-width: 890px) {
    .section-service {
        height: 625px;
        padding: 1rem 1rem;  
        font-weight: 600;
        font-size: 7px;
        .service-header {
            font-weight: 600;
            font-size: 24px;
            color: #FFFFFF;
        }
        .service-header2 {
            font-weight: 400;
            font-size: 12px;
            color: #FFFFFF;
        }
        .service-items {
            flex-direction: column;
            align-items: center;
            justify-content: between;
            .item-group {
                height: 148px;
                .service-item-none {
                    background-color: transparent;
                }
                .service-item {
                    padding: 0rem;
                    justify-content: end;
                    width: 165px;
                    height: 138px;
                    .service-link {
                        padding: 1.5rem 1.5rem 0 1.5rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: end;
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
        }
    }
}
</style>