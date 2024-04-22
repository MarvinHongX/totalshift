<script setup>
const { web3Filecoin01Url, web3Filecoin02Url, web3Filecoin03Url, web3Filecoin04Url } = useImg();
const tabNames = [
    { name: '파일코인' },
    { name: '알레오 크레딧 (준비중)' },
];
</script>
<template>
    <FullCard class="section-web3">
        <div class="web3-header mb-4">
            <span>WEB 3.0 Project</span>
        </div>
        <div class="web3-header2 mb-2">
            <span>블록체인은 중앙 기관 없이 안전한 거래를 가능케 하는 기술입니다.</span>
        </div>
        <div class="web3-header2 mb-2">
            <span>연결된 블록들로 데이터를 분산 저장하며 변경을 방지하고, 금융부터 의료, 공급망 등 다양한 분야에 혁신을 가져옵니다.</span>
        </div>
        <div class="web3-header2 mb-7">
            <span>이는 데이터의 안전성과 투명성을 높여 개인의 자유와 안전을 보장합니다.</span>
        </div>
        <!-- <div class="web3-header2 web3-paragraph mb-7">
            <span>연결된 블록들로 데이터를 분산 저장하며 변경을 방지하고, 금융부터 의료, 공급망 등 다양한 분야에 혁신을 가져옵니다.</span>
            <span>이는 데이터의 안전성과 투명성을 높여 개인의 자유와 안전을 보장합니다.</span>
        </div> -->
        <div class="web3-tab">
            <TabView :tabNames="tabNames">
                <template #default="{ tabIndex }">
                    <div v-if="tabIndex === 0" class="web3-items">
                        <div class="item-group">
                            <div class="web3-item">
                                <div class="web3-item-a mb-3">
                                    <NuxtImg loading="lazy" :src="web3Filecoin01Url" alt="web3Filecoin01"/>
                                </div>
                                <div class="web3-item-b mb-2">
                                    <span>분산스토리지 네트워크</span>
                                </div>
                                <div class="web3-item-c mb-5">
                                    <span>Decentralized Storage Network</span>
                                </div>
                            </div>
                            <div class="web3-itemEnd">
                                <div class="web3-item-a mb-3">
                                    <NuxtImg loading="lazy" :src="web3Filecoin02Url" alt="web3Filecoin02"/>
                                </div>
                                <div class="web3-item-b mb-2">
                                    <span>새로운 스토리지 증명</span>
                                </div>
                                <div class="web3-item-c mb-5">
                                    <span>Novel Proofs-of-Storage</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-group">
                            <div class="web3-item">
                                <div class="web3-item-a mb-3">
                                    <NuxtImg loading="lazy" :src="web3Filecoin03Url" alt="web3Filecoin03"/>
                                </div>
                                <div class="web3-item-b mb-2">
                                    <span>검증 가능한 시장</span>
                                </div>
                                <div class="web3-item-c mb-5">
                                    <span>Variable Markets</span>
                                </div>
                            </div>
                            <div class="web3-itemEnd">
                                <div class="web3-item-a mb-3">
                                    <NuxtImg loading="lazy" :src="web3Filecoin04Url" alt="web3Filecoin04"/>
                                </div>
                                <div class="web3-item-b mb-2">
                                    <span>유용한 작업증명서</span>
                                </div>
                                <div class="web3-item-c mb-5">
                                    <span>Useful Proof-of-Work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabIndex === 1" class="web3-items">
                        <div class="item-group">
                            <div class="web3-item">
                                <span class="web3-item-b mb-8">준비중입니다.</span>
                            </div>
                        </div>
                        
                    </div>
                </template>
            </TabView>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-web3 {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 825px;
    background-color: #111112;
    font-weight: 600;
    font-size: 18px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    .web3-header {
        font-weight: 700;
        font-size:45px;
        color: #FFFFFF;
    }
    .web3-header2 {
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
    }
    .web3-header3 {
        font-weight: 700;
        font-size: 45px;
        color: #525252;
    }
    .web3-tab {
        display: flex;
        flex-direction: row;
        font-weight: 700;
        font-size: 45px;
        color: #FFFFFF;
        width: 100%;
        // max-width: 1024px;
        .web3-items {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 240px;
            .item-group {
                width: 48%;
                // width: 500px;
                height: 220px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
                margin-bottom: 15px;
                .web3-item {
                    margin-right: 15px;
                }
                .web3-item, .web3-itemEnd {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 320px;
                    height: 100%;
                    padding-top: 20px;
                    background-color: #252525;
                    border-radius: 20px;
                    .web3-item-a {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: end;
                        height: 45%;
                        font-weight: 600;
                        font-size: 24px;
                        // color: #057FFC;
                    }
                    .web3-item-a > img {
                        height: 80%;
                    }
                    .web3-item-b {
                        font-weight: 600;
                        font-size: 22px;
                        color: #FFFFFF;
                    }
                    .web3-item-c {
                        font-weight: 600;
                        font-size: 15px;
                        color: #525252;
                    }
                }
                .web3-item > img {
                    width: 100%; 
                    height: auto;
                }
            }
        }
    }
}
@media (max-width: 1350px) {
    .section-web3 {
        height: 925px;
        padding: 2rem 1rem;  
        .web3-paragraph {
            display: flex;
            flex-direction: column;
            justify-content: start;
        }
        .web3-paragraph > span {
            display: flex;
            margin-bottom: 8px;
        }
        .web3-header {
            font-size: 24px;
        }
        .web3-header2 {
            font-size: 12px;
        }
        .web3-tab {
            .web3-items {
                height: 500px;
                flex-direction: column;

                .item-group {
                    width: 100%;
                    .web3-item {
                        height: 100%;
                        margin-right: 15px;
                    }
                    


                    // .web3-item {
                    //     justify-content: end;
                    //     width: 320px;
                    //     height: 180px;
                    //     border-radius: 15px;
                        // .web3-item-a {
                        //     font-size: 15px;
                        // }
                        // .web3-item-b {
                        //     font-size: 12px;
                        // }
                        // .web3-item-c {
                        //     font-size: 8px;
                        // }
                    // }
                }
            }
        }
    }
}
@media (max-width: 680px) {
    .section-web3 {
        height: 1225px;
        padding: 2rem 1rem;  
        .web3-tab {
            .web3-items {
                // padding-top: 30px;
                height: 100%;
                width: 100%;
                // height: 750px;
                padding: 1rem 1rem;
                .item-group {
                    // height: 500px;
                    flex-direction: column;
                    justify-content: space-between;
                    // background-color: red;
                    .web3-item {
                        margin-bottom: 15px;
                        margin-right: 0px;
                    }
                    .web3-itemEnd {
                        margin-bottom: 0px;
                        margin-right: 0px;
                    }
                    .web3-item, .web3-itemEnd {
                        justify-content: start;
                        width: 100%;
                        height: 220px;
                        border-radius: 15px;
                        padding-top: 40px;
                        // margin-bottom: 10px;
                    }
                    .web3-item, .web3-itemEnd {
                        .web3-item-a > img {
                            height: 100%;
                        }
                    }

                }
            }
        }
    }
}
</style>