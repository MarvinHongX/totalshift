<script setup>
const { idcUrl, tempHumidityUrl, upsUrl, firewallUrl, extinguisherUrl, realtimeUrl } = useImg();

const isHovering = ref(false);
const scrollContainer = ref(null);

const scrollLeft = () => {
    if (scrollContainer.value) {
        const item = document.querySelector('.centerADetail-item');
        const itemWidth = item.offsetWidth;
        scrollContainer.value.scrollLeft -= itemWidth;

        
    }
};

const scrollRight = () => {
    if (scrollContainer.value) {
        const item = document.querySelector('.centerADetail-item');
        const itemWidth = item.offsetWidth;
        scrollContainer.value.scrollLeft += itemWidth;
    }
};

</script>
<template>
    <FullCard class="section-centerADetail">
        <div class="scroll-buttons">
            <button @click="scrollLeft">
                <svg width="70" height="100" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg);">
                    <path d="M0 0L1 1L2 0" stroke="#FFFFFF" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="centerADetail-items" ref="scrollContainer">
            <div class="centerADetail-item">
                <div class="centerADetail-item-left">
                    <div class="centerADetail-header mb-4">
                        <span>NSA2650</span>
                    </div>
                    <div class="mb-2">
                        <span>· 방화벽 검사 3.0Gbps</span>
                    </div>
                    <div class="mb-2">
                        <span>· VPN 처리량 1.3Gbps</span>
                    </div>
                    <div class="mb-2">
                        <span>· 최대 연결 : 1,000,000</span>
                    </div>
                    <div class="mb-2">
                        <span>· 새 연결/초 : 14000</span>
                    </div>
                    <div class="mb-2">
                        <span>· 인터페이스 구성</span>
                    </div>
                    <div class="mb-2">
                        <span>· 4 x 2.5-GbE</span>
                    </div>
                    <div class="mb-2">
                        <span>· SFP 4 x 2.5-GbE</span>
                    </div>
                    <div class="mb-2">
                        <span>· 12 x 1 -GbE</span>
                    </div>
                    <div class="mb-2">
                        <span>· 내장 스토리지 16GB</span>
                    </div>
                </div>
                <div class="centerADetail-item-center">
                    <div class="centerADetail-img-wrapper">
                        <img :src="firewallUrl" alt="firewall" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right">
                    <div class="centerADetail-header">
                        1 / 5    
                    </div>
                    <div class="flex flex-column align-items-start justify-content-center" style="height:100%">
                        <div class="centerADetail-header2">
                            <span>안전한 방화벽</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>               
                </div>
            </div>
            <div class="centerADetail-item">
                <div class="centerADetail-item-left">
                    <div class="centerADetail-header mb-4">
                        <span>HT-A10GC3</span>
                    </div>
                    <div class="mb-2">
                        <span>· 2CYCLE, 스텐드 상향식 챔버타입</span>
                    </div>
                    <div class="mb-2">
                        <span>· 실내조건 : 25±2도 DB, 55%±5% RH 기준,</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span> 친환경냉매 R-407C 적용</span>
                    </div>
                    <div class="mb-2">
                        <span>· 10RT - 냉방능력 27,000kcal/h,</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span> 난방능력 17,200kcal/h,</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span> 가습능력 7.0kg/h,</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span> 풍량 105CMM</span>
                    </div>
                </div>
                <div class="centerADetail-item-center">
                    <div class="centerADetail-img-wrapper">
                        <img :src="tempHumidityUrl" alt="tempHumidity" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right">
                    <div class="centerADetail-header">
                        2 / 5    
                    </div>
                    <div class="flex flex-column align-items-start justify-content-center" style="height:100%">
                        <div class="centerADetail-header2">
                            <span>항온항습</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>                 
                </div>
            </div>
            <div class="centerADetail-item">
                <div class="centerADetail-item-left">
                    <div class="centerADetail-header mb-4">
                        <span>HFC-125</span>
                    </div>
                    <div class="mb-2">
                        <span>· 소화 약재: HFC-125</span>
                    </div>
                    <div class="mb-2">
                        <span>· 외형 치수(mm) : W 400 * D 400 * H 1900</span>
                    </div>
                    <div class="mb-2">
                        <span>· 약제 중량 : 50kg</span>
                    </div>
                    <div class="mb-2">
                        <span>· 방호 체적 : 62.4㎥</span>
                    </div>
                    <div class="mb-2">
                        <span>· 상용 전원 : AC 220V,</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span> 60㎐ - 예비 전원 : Ni-Cd Battery DC 24V, 1300 ㎃</span>
                    </div>
                    <div class="mb-2">
                        <span>· 경보 : 싸이렌 및 음성경보</span>
                    </div>
                    <div class="mb-2">
                        <span>· 주의 온도 : -10℃ ~ 40℃</span>
                    </div>
                    <div class="mb-2">
                        <span>· 외함 재질 : KSD 3503 1.6t</span>
                    </div>
                    <div class="mb-2">
                        <span>· 외부 기지 : 감지기, 수동조작함, 방출표시 등</span>
                    </div>
                    <div class="mb-2">
                        <span>· 솔레노이드: DC 24V, 1.5A</span>
                    </div>
                </div>
                <div class="centerADetail-item-center">
                    <div class="centerADetail-img-wrapper">
                        <img :src="extinguisherUrl" alt="extinguisher" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right">
                    <div class="centerADetail-header">
                        3 / 5    
                    </div>
                    <div class="flex flex-column align-items-start justify-content-center" style="height:100%">
                        <div class="centerADetail-header2">
                            <span>자동 소화</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>             
                </div>
            </div>
            <div class="centerADetail-item">
                <div class="centerADetail-item-left">
                    <div class="centerADetail-header mb-4">
                        <span>무정전전원장치</span>
                    </div>
                    <div class="mb-2">
                        <span>· 용량 : 3상 100 KVA</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>입력 : 3상4선식 380/220V</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>출력 : 3상4선식 380/220V</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>정전보상 : 30분용</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>Battery : 12V 200AH 30CELL</span>
                    </div>
                    <div class="mb-2">
                        <span>· 입출력 분전반</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>S/T 분전반 600*1200*200mm</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>Main MCCB 4P150A 2EA</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>휘다 MCCB 4P50A 2EA</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>MCCB 2P50A/30A 10EA</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2"></span><span>( 양문 DOOR 및 계량기 포함 )</span>
                    </div>
                </div>
                <div class="centerADetail-item-center">
                    <div class="centerADetail-img-wrapper">
                        <img :src="upsUrl" alt="ups" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right">
                    <div class="centerADetail-header">
                        4 / 5    
                    </div>
                    <div class="flex flex-column align-items-start justify-content-center" style="height:100%">
                        <div class="centerADetail-header2">
                            <span>무정전 UPS</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>               
                </div>
            </div>
            <div class="centerADetail-item">
                <div class="centerADetail-item-left">
                    <div class="centerADetail-header mb-4">
                        <span>KT 기가센싱</span>
                    </div>
                    <div class="mb-2">
                        <span>· 출입문 감지</span>
                    </div>
                    <div class="mb-2">
                        <span>· 화재 감지</span>
                    </div>
                    <div class="mb-2">
                        <span>· 누수 감지</span>
                    </div>
                    <div class="mb-2">
                        <span>· 온/습도 측정</span>
                    </div>
                    <div class="mb-2">
                        <span>· UPS 전압측정</span>
                    </div>
                </div>
                <div class="centerADetail-item-center">
                    <div class="centerADetail-img-wrapper">
                        <img :src="realtimeUrl" alt="realtime" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right">
                    <div class="centerADetail-header">
                        5 / 5    
                    </div>
                    <div class="flex flex-column align-items-start justify-content-center" style="height:100%">
                        <div class="centerADetail-header2">
                            <span>실시간 제어</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-buttons">
            <button @click="scrollRight">
                <svg width="70" height="100" viewBox="0 0 2 1" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg);">
                    <path d="M0 0L1 1L2 0" stroke="#FFFFFF" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


            </button>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-centerADetail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    background-color: #1C1C1C;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );

    .scroll-buttons {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        width: 70px;
        height: 400px;
        z-index: 10;

        button {
            background: none;
            border: none;
            cursor: pointer;
            margin: 0 0.5rem;
            transition: opacity 0.3s;

            &:hover {
                opacity: 0.7;
            }

            svg {
                width: 70px;
                height: 100px;
            }
        }
    }
    .centerADetail-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        height: 400px;
        overflow: visible; 
        overflow-x: scroll;
        scroll-snap-type: x mandatory; 
    }
    .centerADetail-item {
        display: flex;
        // flex: 0 0 calc(20% - 2rem);
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 320px;
        color: #ECECEC;
        flex-shrink: 0;
        font-size: 12px;
        scroll-snap-align: start; 
        .centerADetail-header {
            color:#ECECEC;
            font-weight: 400;
            font-size: 20px;
        }
        .centerADetail-header2 {
            color:#FFFFFF;
            font-weight: 700;
            font-size: 38px;
        }
        .centerADetail-item-left {
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 320px;
            height: 320px;
            
            background-color: #202022;
            padding: 2em;
            margin-right: 1rem;
        }
        .centerADetail-item-center {
            display: flex;
            width: 320px;
            height: 320px;
            background-color: #202022;
            margin-right: 1rem;
        }
        .centerADetail-item-right {
            display: flex;
            flex-direction: column;
            justify-content: between;
            width: 320px;
            height: 320px;
            background-color: transparent;
        }
    }

    .centerADetail-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    .centerADetail-img-wrapper {
        width: 320px;
        height: 320px;
        overflow: hidden;
        position: relative;
        margin-bottom: 10px;
    }
}
@media (max-width: 1350px) {
    .section-centerADetail {
        height: 1100px;
        padding: 8rem 1rem;
        .centerADetail-items {
            width: 264px;
            height: 100%; 
            padding-top: 2.5rem;
            overflow-x: auto;
        }
        .centerADetail-item {
            flex-direction: column-reverse;
            justify-content: space-between;
            height: 800px;
            .centerADetail-header {
                font-size: 18px;
            }
            .centerADetail-header2 {
                font-size: 24px;
            }
            .centerADetail-item-left {
                width: 240px;
                height: 600px;
                padding: 2.5em;
                margin-right: 2rem;
            }
            .centerADetail-item-center {
                width: 240px;
                height: 325px;
                margin-right: 2rem;
            }
            .centerADetail-item-right {
                width: 240px;
                height: 170px;
            }
        }

        .centerADetail-img-wrapper {
            width: 240px;
            height: 240px;
        }
    }
}
</style>

