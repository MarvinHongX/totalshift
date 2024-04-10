<script setup>
const { filecoinLogoUrl } = useImg();
const { filecoinDocsHref, filecoinCryptoEconomicsHref, filecoinBlockchainHref } = useHref();
</script>
<template>
    <FullFoldCard class="section-filecoin" :logoUrl="filecoinLogoUrl" logoName="Filecoin" :isExpanded="false">
        <div class="filecoin-img-wrapperer">
            <img :src="filecoinLogoUrl" alt="filecoinLogo" class="filecoin-img"/>
        </div>
        <div class="filecoin-header mb-1">
            <span>Filecoin</span>
        </div>
        <div class="filecoin-header mb-6">
            <span>introduction</span>
        </div>
        <div class="filecoin-top-block">
            <div class="filecoin-top-paragraph2">
                <span class="filecoin-bold filecoin-top-title">Filecoin 네트워크</span> 
                <span class="filecoin-none"> : </span><span>Filecoin은 파일을 저장하고 시간이 지남에 따라</span><span>신뢰성 있게 저장되었는지 증명하는 경제적 인센티브와 </span>
            </div>
            <div class="filecoin-top-paragraph2">
                <span>암호화가 내장된 P2P 네트워크입니다.</span>
            </div>
        </div>
        <div class="filecoin-top-block">
            <div class="filecoin-top-paragraph2">
                <span class="filecoin-bold filecoin-top-title">스토리지 프로바이더</span> 
                <span class="filecoin-none"> : </span><span>사용자는 파일을 저장하기 위해 스토리지 프로바이더에게</span>
                <span>Filecoin을 지불하며 누구나 파일 저장 또는 타인의</span>
            </div>
            <div class="filecoin-top-paragraph2">
                <span> 파일 저장으로 수익을 창출하기 위해</span><span>Filecoin에 참여할 수 있습니다.</span>
            </div>
        </div>
        <div class="filecoin-top-block">
            <div class="filecoin-top-paragraph2">
                <span class="filecoin-bold filecoin-top-title">IPFS와의 차이</span> 
                <span class="filecoin-none"> : </span><span>Filecoin은 IPFS 프로토콜 위에 구축되었으며,</span><span>콘텐트 어드레스 지정을 이용하여 데이터에 대한</span><span>영구 참조를 가능하게 합니다.</span>
            </div>
            <div class="filecoin-top-paragraph2">
                <span>Filecoin은 인센티브 계층을 추가하여 내용이</span><span>신뢰성 있게 저장되고 접근할 수 있도록 합니다.</span>
            </div>
        </div>
        <div class="filecoin-top-block">
            <div class="filecoin-top-paragraph2">
                <span class="filecoin-bold filecoin-top-title">다양한 사용 사례</span> 
                <span class="filecoin-none"> : </span><span>Filecoin은 Web3 네이티브 NFT, 메타버스 및</span><span>게임 자산 저장, 인센티브가 있는 영구 저장,</span>
            </div>
            <div class="filecoin-top-paragraph2">
                <span>클라우드 저장소에 대한 저렴한 대안으로 Web2 데이터셋을</span><span>보관하는 등 다양한 사용 사례로 사용됩니다.</span>
            </div>
        </div>
        <div class="filecoin-separator"></div>
        <div class="filecoin-header3 filecoin-bottom-paragraph mb-6">
            <span>아래 링크를 통하여 Filecoin 관련 자세한 정보를 얻을 수 있습니다.</span>
        </div>  
        <div class="filecoin-link-wrapper mb-5">
            <a :href="filecoinDocsHref" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">
                    <span class="mr-2">Filecoin Docs </span>
                    <svg class="filecoin-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="filecoin-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>    
        </div>
        <div class="filecoin-link-wrapper mb-5">
            <a :href="filecoinCryptoEconomicsHref" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">
                    <span class="mr-2">Filecoin Crypto-economics </span>
                    <svg class="filecoin-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="filecoin-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>    
        </div>
        <div class="filecoin-link-wrapper">
            <a :href="filecoinBlockchainHref" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">
                    <span class="mr-2">Filecoin Blockchain </span>
                    <svg class="filecoin-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="filecoin-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>  
        </div>
    </FullFoldCard>
</template>

<style lang="scss" scoped>
.section-filecoin {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    // height: 1300px;
    padding: 9rem;
    background-color: #F4F6F8;
    color: #333333;
    font-weight: 400;
    font-size: 20px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );


    .filecoin-bold {
        font-weight: 700;
    }
    .filecoin-header {
        color: #1C1C1C;
        font-weight: 600;
        font-size: 45px;
    }
    .filecoin-header-point {
        color: #666666;
    }
    .filecoin-header2 {
        color: #333333;
        font-weight: 800;
        font-size: 20px;
    }
    .filecoin-header3 {
        display: flex;
        flex-direction: row;
        color: #333333;
        font-weight: 500;
        font-size: 30px;
    }
    .filecoin-header4 {
        display: flex;
        flex-direction: row;
        color: #666666;
        font-weight: 500;
        font-size: 25px;

    }
    .filecoin-header2-point {
        color: #057FFC;
    }
    .filecoin-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .filecoin-top-paragraph {
        padding-bottom: 4px;
    }
    .filecoin-top-block {
        padding-bottom: 50px;
        .filecoin-top-paragraph2 {
            display: inline-block;
        }
        .filecoin-top-paragraph2 > span{
            display: inline-block;
        }
    }
    .filecoin-img-wrapperer {
        width: 87px;
        margin-bottom: 50px;
    }
    .filecoin-none {
        display: block;
    }
    .filecoin-display {
        display: none;
    }
    .filecoin-img {
        width: 87px;
        object-fit: cover;
    }
    .filecoin-separator {
        height: 1.5px;
        width: 100%;
        background-color: #707070;
        margin: 4.5rem 0;
    }
    .filecoin-link-wrapper {
        width: 100%;
        .filecoin-link {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: end;
            text-decoration: none;
            color: inherit;
        }
    }
}
@media (max-width: 1350px) {
    .section-filecoin {
        padding: 2rem 2rem;
        font-weight: 400;
        font-size: 12px;
        // height: 1350px;
        align-items: center;
        background-color: #FFFFFF;
        .filecoin-bold {
            font-weight: 700;
        }
        .filecoin-header {
            display: none;
        }
        .filecoin-header-point {
            color: #666666;
        }
        .filecoin-header2 {
            color: #333333;
            font-weight: 800;
            font-size: 20px;
        }
        .filecoin-header3 {
            color: #131313;
            font-weight: 700;
            font-size: 12px;
        }
        .filecoin-header4 {
            color: #666666;
            font-weight: 500;
            font-size: 12px;
            text-align: left;
        }
        .filecoin-header2-point {
            color: #057FFC;
        }
        .filecoin-top {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .filecoin-top-paragraph {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 20px;
        }
        .filecoin-top-block {
            width: 325px;
            // height: 167px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:#F3F3F3;
            border-radius: 15px;
            .filecoin-top-paragraph2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                .filecoin-top-title{
                    font-size: 14px;
                    padding-bottom: 20px;
                }
            }
            .filecoin-top-paragraph2 > span {
                padding-bottom: 7px;
            }
            margin-bottom: 20px;
            padding: 1rem;
        }
        .filecoin-top-paragraph3 {
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        }
        .filecoin-img-wrapperer {
            // width: 58px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .filecoin-none {
            display: none !important;
        }
        .filecoin-display {
            display: block !important;
        }
        .filecoin-img {
            width: 58px;
            object-fit: cover;
        }
        .filecoin-separator {
            height: 1px;
            width: 90%;
            background-color: #707070;
            margin: 3.5rem 0;
        }
        .filecoin-bottom-paragraph {
            display: flex;
            flex-direction: column;       
            align-items: start;
            justify-content: space-between;
            width: 325px;
            height: 40px;
        }

        .filecoin-link-wrapper {
            width: 325px;
            .filecoin-link {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: end;
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
</style>