<script setup>
const tabNames = [
    { name: '파일코인' },
    { name: '알레오 크레딧 (준비중)' },
];
</script>
<template>
    <FullCard class="section-web3">
        <div class="web3-header mb-4">
            <span>WEB 3.0</span>
        </div>
        <div class="web3-header2 mb-2">
            <span>현시대의 IDC(Internet Data Center)에서 미래의 Web3 대응 IPFS</span>
        </div>
        <div class="web3-header2 web3-paragraph mb-7">
            <span>(Inter Planetary File System)까지 솔루션을 개발 및 제공 하면서 </span>
            <span>미래의 시장을 선도해 나가겠습니다.</span>
        </div>
        <div class="web3-tab flex flex-rows">
            <TabView :tabNames="tabNames">
                <template #default="{ tabIndex }">
                    <div v-if="tabIndex === 0">
                        <div class="web3-items">
                            <div class="item-group">
                                <div class="web3-item mr-3">
                                    <div class="web3-item-a mb-3">
                                        <span>1</span>
                                    </div>
                                    <div class="web3-item-b mb-2">
                                        <span>분산스토리지 네트워크</span>
                                    </div>
                                    <div class="web3-item-c mb-5">
                                        <span>Decentralized Storage Network</span>
                                    </div>
                                </div>
                                <div class="web3-item">
                                    <div class="web3-item-a mb-3">
                                        <span>2</span>
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
                                <div class="web3-item mr-3">
                                    <div class="web3-item-a mb-3">
                                        <span>3</span>
                                    </div>
                                    <div class="web3-item-b mb-2">
                                        <span>검증 가능한 시장</span>
                                    </div>
                                    <div class="web3-item-c mb-5">
                                        <span>Variable Markets</span>
                                    </div>
                                </div>
                                <div class="web3-item">
                                    <div class="web3-item-a mb-3">
                                        <span>4</span>
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
                    
                    </div>
                    <div v-if="tabIndex === 1">
                        <div class="web3-items">
                            <div class="item-group">
                                <div class="web3-item mr-3">
                                    <span class="web3-item-b mb-8">준비중입니다.</span>
                                </div>
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
    width: 100%;
    height: 1025px;
    padding: 4rem 8rem;  
    background-color: #111112;
    color: #111112;
    font-weight: 600;
    font-size: 18px;
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
        font-weight: 700;
        font-size: 45px;
        color: #FFFFFF;
        width: 100%;
        .web3-items {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: between;
            .item-group {
                min-width: 550px;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 15px;
                margin-bottom: 15px;
                .web3-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: end;
                    width: 320px;
                    height: 224px;
                    background-color: #252525;
                    border-radius: 30px;
                    .web3-item-a {
                        font-weight: 600;
                        font-size: 24;
                        color: #057FFC;
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
@media (max-width: 890px) {
    .section-web3 {
        flex-direction: column;
        align-items: start;
        height: 625px;
        width: 100%;
        padding: 4rem 1rem;  
        font-weight: 600;
        font-size: 18px;
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
            font-weight: 700;
            font-size: 24px;
            color: #FFFFFF;
        }
        .web3-header2 {
            font-weight: 700;
            font-size: 12px;
            color: #FFFFFF;
        }
        .web3-header3 {
            font-weight: 700;
            font-size: 45px;
            color: #525252;
        }
        .web3-tab {
            .web3-items {
                // width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .item-group {
                    min-width: 50%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .web3-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: end;
                        width: 166px;
                        height: 123px;
                        background-color: #252525;
                        border-radius: 15px;
                        .web3-item-a {
                            font-weight: 600;
                            font-size: 15px;
                            color: #057FFC;
                        }
                        .web3-item-b {
                            font-weight: 600;
                            font-size: 12px;
                            color: #FFFFFF;
                        }
                        .web3-item-c {
                            font-weight: 600;
                            font-size: 8px;
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
}
</style>