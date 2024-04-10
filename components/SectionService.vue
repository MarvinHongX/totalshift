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
            <div class="item-groupEnd">
                <div class="service-item mr-3">
                    <a :href="aleocatHref" target="_blank" class="service-link">
                        <div class="mb-6">
                            <img :src="aleoCatUrl" alt="aleocat" style="width: 90%;" />
                        </div>
                        <div class="mb-3" >
                            <span>알레오 캣</span>
                        </div>
                    </a>
                </div>
                <!-- <div class="service-item service-item-none">
                </div> -->
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-service {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 725px;
    background-color: #111112;
    font-weight: 600;
    font-size: 18px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
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
        // width: 1024px;
        width: 100%;
        .item-group {
            // display: flex;
            // flex-direction: columns;
            // align-items: center;
            // justify-content: start;   
            width: 65%;
        }
        .item-groupEnd {
            width: 32.5%;
        }
        .item-group, .item-groupEnd {
            color: #111112;
            // width: 800px;
            height: 310px;
            display: flex;
            flex-direction: row;
            align-items: center;
            // justify-content: center;
            margin-right: 15px;
            margin-bottom: 15px;
            .service-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                width: 548px;
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
@media (max-width: 1350px) {
    .section-service {
        height: 625px;
        padding: 1rem 1rem;  
        font-size: 7px;
        .service-header {
            font-weight: 600;
            font-size: 24px;
        }
        .service-header2 {
            font-weight: 400;
            font-size: 12px;
        }
        .service-items {
            flex-direction: column;
            justify-content: center;
            width: 100%;
            .item-group {
                .service-item {
                    width: 100%;
                }
            }
            .item-groupEnd {
                .service-item {
                    width: 156px;
                }
            }
            .item-group, .item-groupEnd {
                width: 324px;
                height: 113px;
                .service-item-none {
                    background-color: transparent;
                }
                .service-item {
                    padding: 0rem;
                    .service-link {
                        padding: 1.5rem 1.5rem 0 1.5rem;
                    }
                }
            }
        }
    }
}
</style>