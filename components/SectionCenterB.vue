<script setup>
const { centerBAUrl, centerBBUrl, centerBCUrl, centerBDUrl } = useImg();
</script>
<template>
    <FullCard class="section-centerB">
        <div class="centerB-wrapper">
            <div class="centerB-top">
                <div class="centerB-header mb-1">
                    <span>알레오웍스</span>
                </div>
                <div class="centerB-header">
                    <span>클라우드 프루빙 안성센터</span>
                </div>
            </div>
            <div class="centerB">
                <div class="centerB-a">
                    <div class="centerB-item">
                        <NuxtImg format="webp" loading="lazy" class="mb-3" :src="centerBAUrl" alt="centerBA" />
                        <div class="centerB-item-header mb-3">
                            <span>안성 프루빙 센터</span>
                        </div>
                        <div class="mb-1">
                            <span>경기도 안성 소재</span>
                        </div>
                        <div class="mb-1">
                            <span>실평수 150명</span>
                        </div>
                    </div>
                    <div class="centerB-item">
                        <NuxtImg format="webp" loading="lazy" class="mb-3" :src="centerBBUrl" alt="centerBB" />
                        <div class="centerB-item-header mb-3">
                            <span>전원 관리시설</span>
                        </div>
                        <div class="mb-1">
                            <span>최대 250kw 수전 용량</span>
                        </div>
                        <div class="mb-1">
                            <span>GPU 6-Way 서버 최대 80대 가능</span>
                        </div>
                    </div>
                </div>
                <div class="centerB-b">
                    <div class="centerB-item">
                        <NuxtImg format="webp" loading="lazy" class="mb-3" :src="centerBCUrl" alt="centerBC" />
                        <div class="centerB-item-header mb-3">
                            <span>프루빙 센터 내부 전경</span>
                        </div>
                        <div class="mb-1">
                            <span>GPU 6-Way 서버 세팅 완료 </span>
                        </div>
                        <div class="mb-1">
                            <span>ASIC 서버 (준비중)</span>
                        </div>
                    </div>
                    <div class="centerB-item centerB-item-last">
                        <NuxtImg format="webp" loading="lazy" class="mb-3" :src="centerBDUrl" alt="centerBD" />
                        <div class="centerB-item-header mb-3">
                            <span>환풍 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>고정식 7기 (창문4, 천정3)</span>
                        </div>
                        <div class="mb-1">
                            <span>이동식 6기</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-centerB {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 2282px;
    padding-top: 6rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    .centerB-wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 100%;
        .centerB-top {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            width: 100%;

        }
        .centerB-header {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 45px;
        }
        .centerB-header2 {
            color: #FFFFFF;
            font-weight: 500;
            font-size: 18px;
        }
        .centerB {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            .centerB-a {
                display: flex;
                flex-direction: column;
                justify-content: start;
                margin-right: 60px;
                width: 100%;
            }
            .centerB-b {
                display: flex;
                flex-direction: column;
                justify-content: start;
                margin-top: 15rem;
                width: 100%;
            }
            .centerB-item {
                display: flex;
                flex-direction: column;
                width: 100%;
                color: #FFFFFF;
                font-weight: 500;
                font-size: 18px;
                padding-bottom: 12rem;
                .centerB-item-header {
                    color: #FFFFFF;
                    font-weight: 600;
                    font-size: 32px;
                }
            }
            .centerB-item-last {
                padding-bottom: 0rem;
            }
            .centerB-item > img {
                width: 90%;
                border-radius: 15px;
            }
        }
    }
}

@media (max-width: 1350px) {
    .section-centerB {
        height: 2082px;
        padding: 4rem 1rem;
        .centerB-wrapper {
            align-items: center;
            justify-content: start;
            width: 100%;
            padding: 1rem;
            .centerB-header {
                font-size: 24px;
            }
            .centerB {
                // padding: 0rem 8rem;
                .centerB-a {
                    margin-right: 15px;
                }
                .centerB-item {
                    font-size: 12px;
                    .centerB-item-header {
                        font-size: 18px;
                    }
                }
                .centerB-item > img {
                    width: 90%;
                    border-radius: 10px;
                }
            }
        }
    }
}
@media (max-width: 1000px) {
    .section-centerB {
        height: 1882px;
        .centerB-wrapper {
            .centerB {
                .centerB-a {
                    margin-right: 20px;
                }
                .centerB-item > img {
                    width: 95%;
                    border-radius: 10px;
                }
            }
        }
    }
}

@media (max-width: 950px) {
    .section-centerB {
        height: 1782px;
        
    }
}
@media (max-width: 900px) {
    .section-centerB {
        height: 1712px;
        
    }
}
@media (max-width: 870px) {
    .section-centerB {
        height: 1542px;
        
    }
}
@media (max-width: 670px) {
    .section-centerB {
        height: 1342px;
        .centerB-wrapper {
            .centerB {
                .centerB-a {
                    margin-right: 20px;
                }
                .centerB-item > img {
                    width: 100%;
                    border-radius: 10px;
                }
            }
        }       
    }
}
@media (max-width: 570px) {
    .section-centerB {
        height: 1242px;
    }
}
@media (max-width: 470px) {
    .section-centerB {
        height: 1182px;
        .centerB-wrapper {
            .centerB {
                .centerB-a {
                    margin-right: 10px;
                }
            }
        }
    }
}
@media (max-width: 370px) {
    .section-centerB {
        height: 1082px;
        
    }
}
</style>

