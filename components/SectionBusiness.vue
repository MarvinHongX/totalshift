<script setup>
const { businessAUrl, businessBUrl, businessCUrl, businessDUrl } = useImg();

const isHovering = ref(false);

onMounted(() => {
    const container = document.querySelector('.business-items');

    container.addEventListener('mouseover', () => {
        isHovering.value = true;
    });

    container.addEventListener('mouseout', () => {
        isHovering.value = false;
    });

    container.addEventListener('wheel', (event) => {
        if (isHovering.value) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        }
    });
});

</script>
<template>
    <FullCard class="section-business">
        <div class="business-left">
            <div class="business-left-top">
                <div class="business-header2 mb-4">
                    <span>Business</span>
                </div>
                <div class="business-header">
                    <span>최고로 향하는</span>
                </div>
                <div class="business-header">
                    <span class="business-point">발걸음</span>
                </div>
            </div>
            <div class="business-left-body">
                <div class="business-header2 mb-2">
                    <span>토탈쉬프트에서</span>
                </div>
                <div class="business-header2">
                    <span class="business-point2">진행중인 사업</span>
                    <span> 입니다.</span>
                </div>
            </div>
        </div>
        <div class="business-right">
            <div class="business-items">

                <div class="business-item flex flex-column mr-4">
                    <div class="business-img-wrapper flex">
                        <img :src="businessAUrl" alt="businessA" class="business-img" />
                        <div class="business-label">
                            <div>
                                <span>Web 3.0</span>
                            </div>
                            <div>
                                <span class="business-label-small">블록체인 기반 맞춤형 정보</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="business-item flex flex-column mr-4">
                    <div class="business-img-wrapper">
                        <img :src="businessBUrl" alt="businessB" class="business-img" />
                        <span class="business-label">
                            <div>
                                <span>데이터 센터 (IDC)</span>
                            </div>
                            <div>
                                <span class="business-label-small">효율적인 데이터, 속도, 안전성</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="business-item flex flex-column mr-4">
                    <div class="business-img-wrapper">
                        <img :src="businessCUrl" alt="businessC" class="business-img" />
                        <span class="business-label">
                            <div>
                                <span>Development</span>
                            </div>
                            <div>
                                <span class="business-label-small">혁신을 앞서는 개발</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="business-item flex flex-column mr-4">
                    <div class="business-img-wrapper">
                        <img :src="businessDUrl" alt="businessD" class="business-img" />
                        <span class="business-label">
                            <div>
                                <span>IT Service</span>
                            </div>
                            <div>
                                <span class="business-label-small">혁신적인 플랫폼 및 서비스</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-business {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: between;
    width: 100%;
    height: 420px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    background-color: #111112;

    .business-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
    .business-point {
        color: #666666;
    }
    .business-header2 {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }
    .business-point2 {
        color: #057FFC;
    }
    .business-left {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: end;
        height: 630px;
        padding: 0 3.5rem;
        position: relative;
        .business-left-top {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: end;
            width: 100%;
            padding-right: 3rem;
        }    
        .business-left-body {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: end;
            width: 100%;
            height: 150px;
        }
    }
    .business-right {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
        width: calc(100% - 500px);
        height: 800px;
    }
    .business-items {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        width: 100%;
        // min-width: 500px;
        overflow-x: scroll;
        .business-item {
            width: 340px;
            height: 420px;
            color: #FFFFFF;
            font-weight: 500;
            font-size: 18px;
            flex-shrink: 0;
            .business-item-header {
                color: #FFFFFF;
                font-weight: 600;
                font-size: 32px;
            }
            .business-img-wrapper {
                width: 320px;
                height: 320px;
                overflow: hidden;
                position: relative;
                border-radius: 30px;
                margin-bottom: 10px;
                background-color: #2c2d2f;
                .business-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 30px;
                    position: relative;
                }
                .business-label {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: rgb(32,32,34, 1);
                    color: #ffffff;
                    font-size: 25px;
                    font-weight: 600;
                    text-align: left;
                    padding: 20px;
                    .business-label-small {
                        font-weight: 500;
                        font-size: 18px;
                    }
                }
            }
        }
    }
}

@media (max-width: 1350px) {
    .section-business {
        flex-direction: column;
        height: 308px;
        padding-top: 0rem;
        .business-header {
            font-weight: 700;
            font-size: 30px;
        }
        .business-header2 {
            font-weight: 400;
            font-size: 14px;
        }
        .business-left {
            flex-direction: row;
            align-items: end;
            justify-content: start;
            width: 100%; 
            height: 100%;
            padding: 0 1rem;
            .business-left-top {
                padding: 0rem;
            }    
            .business-left-body {
                align-items: end;
                justify-content: end;
                height: 100%;
            }
        }
        .business-right {
            width: 100%;
            height: 100%;
            padding: 2rem 1rem;
        }
        .business-items {
            .business-item {
                width: 200px;
                height: 233px;        
                .business-img-wrapper {
                    width: 200px;
                    height: 200px;;
                    border-radius: 15px;
                    .business-img {
                        border-radius: 15px;
                    }
                    .business-label {
                        font-size: 16px;
                        font-weight: 500;
                        padding: 15px;
                        .business-label-small {
                            font-weight: 400;
                            font-size: 11px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 530px) {
    .section-business {
        height: 285px;
    }
}
</style>

