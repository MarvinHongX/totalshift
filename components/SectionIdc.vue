<script setup>
const { idcUrl, idcBackgroundUrl, tempHumidityUrl, upsUrl, firewallUrl, extinguisherUrl, realtimeUrl } = useImg();
</script>
<template>
    <FullCard class="section-idc flex flex-row align-items-center justify-content-between" :style="{ backgroundImage: 'url(' + idcBackgroundUrl + ')' }">
        <div class="idc-left flex flex-column justify-content-start">
            <div class="idc-header mb-4">
                <span>IDC 가산 캠퍼스</span>
            </div>
            <div class="idc-header2 mb-2">
                <span>서울 금천구 가산로9길 66 더리즌밸리 501호~507호</span>
            </div>
            <div class="idc-header2">
                <span>최대 70페타바이트 스토리지 용량</span>
            </div>
        </div>
        <div class="idc-right flex flex-column align-items-start justify-content-start">
            <div class="idc-item mb-8">
                <img :src="idcUrl" alt="idc" style="width: 100%;" />
            </div>
            <div class="flex flex-row align-items-center">
                <div class="dic-right-a flex flex-column justify-content-start">
                    <div class="idc-item flex flex-column mb-8">
                        <img class="mb-3" :src="realtimeUrl" alt="realtime" style="width: 80%;" />
                        <div class="idc-item-header mb-3">
                            <span>실시간 제어 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>KT 기가센싱</span>
                        </div>
                        <div class="mb-1">
                            <span>입출입 시 보안검사</span>
                        </div>
                        <div class="mb-1">
                            <span>CCTV 모니터링</span>
                        </div>
                    </div>
                    <div class="idc-item flex flex-column mb-8">
                        <img class="mb-3" :src="extinguisherUrl" alt="extinguisher" style="width: 80%;" />
                        <div class="idc-item-header mb-3">
                            <span>자동소화 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>소화 약제 : HFC-125</span>
                        </div>
                        <div class="mb-1">
                            <span>방호 체적 : 62.4㎥ </span>
                        </div>
                        <div class="mb-1">
                            <span>예비 전원 : Ni-Cd DC 24V, 1300㎃</span>
                        </div>
                        <div class="mb-1">
                            <span>경보 : 싸이렌 및 음성경보 주의 온도 : -10℃ ~ 40℃</span>
                        </div>
                        
                    </div>
                    <div class="idc-item flex flex-column">
                        <img class="mb-3" :src="firewallUrl" alt="firewall" style="width: 80%;" />
                        <div class="idc-item-header mb-3">
                            <span>방화벽 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>방화벽 검사 3.0Gbps</span>
                        </div>
                        <div class="mb-1">
                            <span>VPN 처리량 1.3Gbps</span>
                        </div>
                        <div class="mb-1">
                            <span>최대 연결 : 1,000,000</span>
                        </div>
                        <div class="mb-1">
                            <span>새 연결/초 : 14,000</span>
                        </div>
                    </div>
                </div>
                <div class="dic-right-b flex flex-column justify-content-start">
                    <div class="idc-item flex flex-column mb-8">
                        <img class="mb-3" :src="tempHumidityUrl" alt="tempHumidity" style="width: 80%;" />
                        <div class="idc-item-header mb-3">
                            <span>항온항습 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>냉방능력 27,000kcal/h</span>
                        </div>
                        <div class="mb-1">
                            <span>난방능력 17,200kcal/h</span>
                        </div>
                        <div class="mb-1">
                            <span>가습능력 7.0kg/h</span>
                        </div>
                        <div class="mb-1">
                            <span>풍량 105CMM</span>
                        </div>
                    </div>
                    <div class="idc-item flex flex-column">
                        <img class="mb-3" :src="upsUrl" alt="ups" style="width: 80%;" />
                        <div class="idc-item-header mb-3">
                            <span>무정전 UPS 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>용량 : 3상 100 KVA </span>
                        </div>
                        <div class="mb-1">
                            <span>입력 : 3상4선식 380/220V</span>
                        </div>
                        <div class="mb-1">
                            <span>출력 : 3상4선식 380/220V </span>
                        </div>
                        <div class="mb-1">
                            <span>정전보상 : 서버 300대 풀가동시 30분</span>
                        </div>
                        <div class="mb-1">
                            <span>Battery : 12V 200AH 30CELL</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-idc {
    height: 3582px;
    padding-top: 30rem;

    .idc-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
    .idc-header2 {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }
    .idc-left {
        padding: 5rem;
        height: 100%;
    }
    .idc-left-float {
        z-index: 997;
        left: 0;
        top: 0;
        position: fixed;
    }
    .idc-right {
        height: 100%;
    }
    .idc-right-a {
        margin-top: 2rem;
    }
    .idc-right-b {
        margin-top: 4rem;
    }
    .idc-item {
        width: 100%;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        .idc-item-header {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 32px;
        }
    }
    .idc-item > img {
        border-radius: 15px;
    }
}
</style>

