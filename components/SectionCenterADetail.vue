<script setup>
const { idcUrl, tempHumidityUrl, upsUrl, firewallUrl, extinguisherUrl, realtimeUrl } = useImg();
</script>
<template>
    <FullCard class="section-centerADetail flex flex-column align-items-start">
        <div class="centerADetail-items flex flex-row">
            <div class="centerADetail-item flex flex-row justify-content-between">
                <div class="centerADetail-item-left flex flex-column align-items-start">
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
                <div class="centerADetail-item-center flex">
                    <div class="centerADetail-img-wrapper">
                        <img :src="firewallUrl" alt="firewall" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right flex flex-column justify-content-between">
                    <div class="centerADetail-header">
                        1 / 5    
                    </div>
                    <div>
                        <div class="centerADetail-header2">
                            <span>안전한 방화벽</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span>토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                        <div class="mb-2">
                            <span>아마두 토탈쉬프트 비즈니스에 관련한 아무 내용입니다. </span>
                        </div>
                        <div class="mb-2">
                            <span>제가보기엔 토탈쉬프트 비즈니스에 관련한 내용 </span>
                        </div>
                        <div class="mb-2">
                            <span>다시한번 토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                    </div>                  
                </div>
            </div>
            <div class="centerADetail-item flex flex-row justify-content-between">
                <div class="centerADetail-item-left flex flex-column align-items-start">
                    <div class="centerADetail-header mb-4">
                        <span>모델명</span>
                    </div>
                    <div class="mb-2">
                        <span>· 용량 : 3상 100 KVA</span>
                    </div>
                    <div class="mb-2">
                        <span>· 입력 : 3상4선식 380/220V</span>
                    </div>
                    <div class="mb-2">
                        <span>· 출력 : 3상4선식 380/220V</span>
                    </div>
                    <div class="mb-2">
                        <span>· 정전보상 : 서버 300대 풀가동시 30분</span>
                    </div>
                    <div class="mb-2">
                        <span>· Battery : 12V 200AH 30CELL</span>
                    </div>
                </div>
                <div class="centerADetail-item-center flex">
                    <div class="centerADetail-img-wrapper">
                        <img :src="upsUrl" alt="ups" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right flex flex-column justify-content-between">
                    <div class="centerADetail-header">
                        2 / 5    
                    </div>
                    <div>
                        <div class="centerADetail-header2">
                            <span>무정전 UPS</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span>토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                        <div class="mb-2">
                            <span>아마두 토탈쉬프트 비즈니스에 관련한 아무 내용입니다. </span>
                        </div>
                        <div class="mb-2">
                            <span>제가보기엔 토탈쉬프트 비즈니스에 관련한 내용 </span>
                        </div>
                        <div class="mb-2">
                            <span>다시한번 토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                    </div>                  
                </div>
            </div>
            <div class="centerADetail-item flex flex-row justify-content-between">
                <div class="centerADetail-item-left flex flex-column align-items-start">
                    <div class="centerADetail-header mb-4">
                        <span>모델명</span>
                    </div>
                    <div class="mb-2">
                        <span>· 소화 약제 : HFC-125</span>
                    </div>
                    <div class="mb-2">
                        <span>· 방호 체적 : 62.4㎥</span>
                    </div>
                    <div class="mb-2">
                        <span>· 예비 전원 : Ni-Cd DC 24V, 1300㎃</span>
                    </div>
                    <div class="mb-2">
                        <span>· 경보 : 싸이렌 및 음성경보 주의 온도 : -10℃ ~ 40℃</span>
                    </div>
                </div>
                <div class="centerADetail-item-center flex">
                    <div class="centerADetail-img-wrapper">
                        <img :src="extinguisherUrl" alt="extinguisher" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right flex flex-column justify-content-between">
                    <div class="centerADetail-header">
                        3 / 5    
                    </div>
                    <div>
                        <div class="centerADetail-header2">
                            <span>자동 소화</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span>토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                        <div class="mb-2">
                            <span>아마두 토탈쉬프트 비즈니스에 관련한 아무 내용입니다. </span>
                        </div>
                        <div class="mb-2">
                            <span>제가보기엔 토탈쉬프트 비즈니스에 관련한 내용 </span>
                        </div>
                        <div class="mb-2">
                            <span>다시한번 토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                    </div>                  
                </div>
            </div>
            <div class="centerADetail-item flex flex-row justify-content-between">
                <div class="centerADetail-item-left flex flex-column align-items-start">
                    <div class="centerADetail-header mb-4">
                        <span>모델명</span>
                    </div>
                    <div class="mb-2">
                        <span>· 냉방능력 27,000kcal/h</span>
                    </div>
                    <div class="mb-2">
                        <span>· 난방능력 17,200kcal/h</span>
                    </div>
                    <div class="mb-2">
                        <span>· 가습능력 7.0kg/h</span>
                    </div>
                    <div class="mb-2">
                        <span>· 풍량 105CMM</span>
                    </div>
                </div>
                <div class="centerADetail-item-center flex">
                    <div class="centerADetail-img-wrapper">
                        <img :src="tempHumidityUrl" alt="tempHumidity" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right flex flex-column justify-content-between">
                    <div class="centerADetail-header">
                        4 / 5    
                    </div>
                    <div>
                        <div class="centerADetail-header2">
                            <span>온/습도 유지</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span>토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                        <div class="mb-2">
                            <span>아마두 토탈쉬프트 비즈니스에 관련한 아무 내용입니다. </span>
                        </div>
                        <div class="mb-2">
                            <span>제가보기엔 토탈쉬프트 비즈니스에 관련한 내용 </span>
                        </div>
                        <div class="mb-2">
                            <span>다시한번 토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                    </div>                  
                </div>
            </div>
            <div class="centerADetail-item flex flex-row justify-content-between">
                <div class="centerADetail-item-left flex flex-column align-items-start">
                    <div class="centerADetail-header mb-4">
                        <span>모델명</span>
                    </div>
                    <div class="mb-2">
                        <span>· KT 기가센싱</span>
                    </div>
                    <div class="mb-2">
                        <span>· 입출입 시 보안검사</span>
                    </div>
                    <div class="mb-2">
                        <span>· CCTV 모니터링</span>
                    </div>
                </div>
                <div class="centerADetail-item-center flex">
                    <div class="centerADetail-img-wrapper">
                        <img :src="realtimeUrl" alt="realtime" class="centerADetail-img" />
                    </div>
                </div>
                <div class="centerADetail-item-right flex flex-column justify-content-between">
                    <div class="centerADetail-header">
                        5 / 5    
                    </div>
                    <div>
                        <div class="centerADetail-header2">
                            <span>실시간 제어</span>
                        </div>
                        <div class="centerADetail-header2">
                            <span>시스템</span>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span>토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                        <div class="mb-2">
                            <span>아마두 토탈쉬프트 비즈니스에 관련한 아무 내용입니다. </span>
                        </div>
                        <div class="mb-2">
                            <span>제가보기엔 토탈쉬프트 비즈니스에 관련한 내용 </span>
                        </div>
                        <div class="mb-2">
                            <span>다시한번 토탈쉬프트 비즈니스에 관련한 아무 내용</span>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-centerADetail {
    height: 860px;
    width: 100%;
    padding: 9rem;
    background-color: #1C1C1C;

    .centerADetail-items {
        width: 100%;
        overflow: visible; 
        padding-top: 2.5rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory; 
    }
    .centerADetail-item {
        height: 450px;
        color: #ECECEC;
        flex-shrink: 0;
        font-size: 18px;
        scroll-snap-align: start; 
        .centerADetail-header {
            color:#ECECEC;
            font-weight: 400;
            font-size: 28px;
        }
        .centerADetail-header2 {
            color:#FFFFFF;
            font-weight: 700;
            font-size: 45px;
        }
        .centerADetail-item-left {
            width: 450px;
            height: 100%;
            
            background-color: #202022;
            padding: 2.5em;
            margin-right: 2rem;
        }
        .centerADetail-item-center {
            width: 450px;
            height: 100%;
            background-color: #202022;
            margin-right: 2rem;
        }
        .centerADetail-item-right {
            width: 450px;
            height: 100%;
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
        width: 450px;
        height: 450px;
        overflow: hidden;
        position: relative;
        margin-bottom: 10px;
    }
}
</style>

