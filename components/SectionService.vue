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
                <div class="service-item">
                    <a :href="skyzoneHref" target="_blank" class="service-link">
                        <div class="mb-5 img-wrapper">
                            <img :src="skyzoneUrl" alt="skyzone"/>
                        </div>
                        <div class="mb-3">
                            <span>더스카이존</span>
                        </div>
                    </a>
                </div>
                <div class="service-itemEnd">
                    <a :href="aleotrackHref" target="_blank" class="service-link">
                        <div class="mb-6 img-wrapper">
                            <img :src="aleoTrackUrl" alt="aleotrack"/>
                        </div>
                        <div class="mb-3">
                            <span>알레오 트랙</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item-groupEnd">
                <div class="service-itemEnd">
                    <a :href="aleocatHref" target="_blank" class="service-link">
                        <div class="mb-6 img-wrapper">
                            <img :src="aleoCatUrl" alt="aleocat"/>
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
                margin-right: 15px;
            }
            .service-item, .service-itemEnd {
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
                    justify-content: start;
                    text-decoration: none;
                    color: inherit;
                    .img-wrapper > img {
                        width: 90%; 
                        height: auto;
                    }
                }
                .service-item-none {
                    background-color: transparent;
                }
            }
        }
    }
}
@media (max-width: 1350px) {
    .section-service {
        height: 925px;
        padding: 1rem 1rem;  
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
            align-items: center;
            width: 100%;
            height: 510px;
            // height: 100%;
            .item-group, .item-groupEnd {
                width: 640px;
                height: 100%;
                .service-item {
                    justify-content: end;
                    margin-right: 15px;
                }
                .service-itemEnd {
                    margin-right: 0px;
                }
                .service-item, .service-itemEnd {  
                    .service-link {
                        .img-wrapper {
                            padding-left: 20px;
                        }
                        .img-wrapper > img {
                            width: 80%; 
                            height: auto;
                        }
                    }
                }                
            }
            .item-groupEnd {
                .service-item, .service-itemEnd {
                    width: 49%;
                    .service-link {
                        .img-wrapper > img {
                            width: 80%; 
                            height: auto;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 680px) {
    .section-service {
        height: 1225px;
        .service-items {
            // padding-top: 50px;
            width: 100%;
            // height: 700px;
            height: 100%;
            padding: 1rem 2rem;
            .item-group, .item-groupEnd {
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                // height: 700px;
                .service-item {
                    // justify-content: end;
                    // margin-right: 15px;
                    width: 100%;
                    margin-right: 0px;
                    margin-bottom: 15px;
                }
                .service-itemEnd {
                    width: 100%;
                    margin-right: 0px;
                }
                .service-item, .service-itemEnd {  
                    // width: 320px;
                    // height: 240px;
                    height: 100%;
                    .service-link {
                        .img-wrapper {
                            padding-left: 20px;
                        }
                        .img-wrapper > img {
                            width: 80%; 
                            height: auto;
                        }
                    }
                }                
            }
            .item-group {
                height: 100%;
            }
            .item-groupEnd {
                height: 100%;
                .service-item, .service-itemEnd {
                    // width: 50%;
                    height: 50%;
                    width: 100%;
                    .service-link {
                        .img-wrapper > img {
                            width: 80%; 
                            height: auto;
                        }
                    }
                }
            }
        }
    }

}

@media (max-width: 580px) {
    .section-service {
        height: 925px;
        .service-items {
            // padding-top: 50px;
            width: 100%;
            height: 750px;
            padding: 1rem 1rem;
            .item-group, .item-groupEnd {
                .service-item, .service-itemEnd {  
                    padding-bottom: 0px;
                    .service-link {
                        .img-wrapper {
                            padding-left: 20px;
                        }
                        .img-wrapper > img {
                            width: 80%; 
                            height: auto;
                        }
                    }
                }                
            }
        }
    }

}



</style>