<script setup>
const { centerBAUrl, centerBBUrl, centerBCUrl, centerBDUrl } = useImg();
</script>
<template>
    <FullCard class="section-centerB flex flex-row align-items-start">
        <div class="flex flex-column align-items-start justify-content-start">
            <div class="centerB-header mb-1">
                <span>알레오웍스</span>
            </div>
            <div class="centerB-header mb-8">
                <span>클라우드 프로빙 안성센터</span>
            </div>
            <div class="flex flex-row align-items-center">
                <div class="centerB-a flex flex-column justify-content-start">

                    <div class="centerB-item flex flex-column mb-8">
                        <img class="mb-3" :src="centerBAUrl" alt="centerBA" />
                        <div class="centerB-item-header mb-3">
                            <span>안성 프로빙 센터</span>
                        </div>
                        <div class="mb-1">
                            <span>경기도 안성 소재</span>
                        </div>
                        <div class="mb-1">
                            <span>실평수 150명</span>
                        </div>
                    </div>
                    <div class="centerB-item flex flex-column mb-8">
                        <img class="mb-3" :src="centerBBUrl" alt="centerBB" />
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
                <div class="centerB-b flex flex-column justify-content-start">
                    <div class="centerB-item flex flex-column mb-8">
                        <img class="mb-3" :src="centerBCUrl" alt="centerBC" />
                        <div class="centerB-item-header mb-3">
                            <span>프로빙 센터 내부 전경</span>
                        </div>
                        <div class="mb-1">
                            <span>GPU 6-Way 서버 세팅 완료 </span>
                        </div>
                        <div class="mb-1">
                            <span>ASIC 서버 (준비중)</span>
                        </div>
                    </div>
                    <div class="centerB-item centerB-item-last flex flex-column">
                        <img class="mb-3" :src="centerBDUrl" alt="centerBD" />
                        <div class="centerB-item-header mb-3">
                            <span>환풍 시스템</span>
                        </div>
                        <div class="mb-1">
                            <span>고정식 7시 (창문4, 천정3)</span>
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
    height: 2582px;
    padding: 9rem;

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
    .centerB-b {
        margin-top: 15rem;
    }
    .centerB-item {
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
        width: 82%;
        border-radius: 15px;
    }
}
</style>

