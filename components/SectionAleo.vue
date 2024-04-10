<script setup>
const { aleoLogoUrl } = useImg();
const { aleoIntroHref, aleoDocsHref, aleoBlogHref } = useHref();
</script>
<template>
    <FullFoldCard class="section-aleo" :logoUrl="aleoLogoUrl" logoName="Aleo" :isExpanded="false">
        <div class="aleo-img-wrapperer">
            <img :src="aleoLogoUrl" alt="aleoLogo" class="aleo-img"/>
        </div>
        <div class="aleo-header mb-6">
            <span>Aleo</span>
        </div>
        <div class="aleo-top mb-6">
            <div class="aleo-top-paragraph mb-1">
                <span class="aleo-none">Aleo는 </span>
                <span>완전히 개인화된 애플리케이션을 제공하는 최초의 플랫폼입니다.</span>
            </div>
            <div class="aleo-top-paragraph mb-1">
                <span>분산 시스템의 강점과 개인정보 보호를 강화하는</span>
                <span>제로-지식 암호화를 결합하여 웹 사용자의 데이터를 보호합니다.</span>
            </div>
            <div class="aleo-top-paragraph">
                <span>기본적으로 개인정보 보호를 제공하며</span>
                <span>오픈 소스로 구축되었으며 웹을 위해 설계되었습니다.</span>
            </div>
        </div>
        <div class="aleo-top-block">
            <div class="aleo-top-paragraph2 mb-1">
                <span class="aleo-bold aleo-top-title">제로-지식 암호화</span> 
                <span class="aleo-none"> : </span><span>Aleo는 제로-지식(ZK) 암호화를 사용하는</span><span>개인 애플리케이션을 위한 플랫폼입니다.</span>
            </div>
            <div class="aleo-top-paragraph2">
                <span>Aleo 블록체인은 제로-지식(ZK) 증명을 활용하여</span><span>전통적인 모델보다 빠르고 효율적으로 설계되었습니다.</span>
            </div>
        </div>
        <div class="aleo-top-block">
            <div class="aleo-top-paragraph2 mb-1">
                <span class="aleo-bold aleo-top-title">Leo 프로그래밍 언어</span> 
                <span class="aleo-none"> : </span><span>Aleo에서는 Leo라는 프로그래밍 언어를 사용하여</span><span>제로-지식 앱을 구축할 수 있습니다.</span>
            </div>
            <div class="aleo-top-paragraph2">
                <span>이 언어는 낮은 수준의 암호학을 추상화하는 Rust 기반 DSL로,</span><span>제로-지식에서 논리를 쉽게 표현할 수 있게 해줍니다.</span>
            </div>
        </div>
        <div class="aleo-top-block">
            <div class="aleo-top-paragraph2">
                <span class="aleo-bold aleo-top-title">AleoBFT 합의 프로토콜</span> 
                <span class="aleo-none"> : </span><span>Aleo는 AleoBFT라는 새로운 합의 프로토콜을 통해 </span><span>허가 없는 및 확장 가능한 네트워크를 제공합니다.</span>
            </div>
        </div>
        <div class="aleo-top-block">
            <div class="aleo-top-paragraph2">
                <span class="aleo-bold aleo-top-title">제로-지식 실행을 위한 가상 머신</span> 
                <span class="aleo-none"> : </span><span>Aleo는 사용자 정의 즉시 표현(IR), 무제한 런타임 및</span><span>효율적인 증명 생성을 특징으로 하는 강력한</span><span>제로-지식 실행 가상 머신을 갖추고 있습니다.</span>
            </div>
        </div>
        <div class="aleo-top-paragraph3">
            <span>이러한 기능들을 통해 Aleo는 사용자와</span><span>애플리케이션 개발자에게 무제한의 계산 능력과</span><span>절대적인 개인정보 보호를 제공합니다.</span>
        </div>      
        <div class="aleo-separator"></div>
        <div class="aleo-header3 aleo-bottom-paragraph mb-6">
            <span>Aleo에 대한 더 궁금하시면 </span><span> 아래 링크를 통하여 더 자세한 정보를 얻을 수 있습니다.</span>
        </div>  
        <div class="aleo-link-wrapper mb-5">
            <a :href="aleoIntroHref" target="_blank" class="aleo-link">
                <div class="aleo-header4">
                    <span class="mr-2">Aleo Intro </span>
                    <svg class="aleo-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="aleo-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>    
        </div>
        <div class="aleo-link-wrapper mb-5">
            <a :href="aleoDocsHref" target="_blank" class="aleo-link">
                <div class="aleo-header4">
                    <span class="mr-2">Aleo Docs </span>
                    <svg class="aleo-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="aleo-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>    
        </div>
        <div class="aleo-link-wrapper">
            <a :href="aleoBlogHref" target="_blank" class="aleo-link">
                <div class="aleo-header4">
                    <span class="mr-2">Aleo Blog </span>
                    <svg class="aleo-none" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#707070" stroke-width="1.5"/>
                        <polygon points="23,15 12,23 12,7" fill="#333333" />
                    </svg>
                    <svg class="aleo-display" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" fill="#FFFFFF" stroke="#333333" stroke-width="1"/>
                        <polygon points="14,9 6,14 6,4" fill="#333333" />
                    </svg>
                </div>
            </a>    
        </div>
    </FullFoldCard>
</template>

<style lang="scss" scoped>
.section-aleo {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    // height: 1700px;
    padding: 9rem;
    background-color: #F4F6F8;
    color: #333333;
    font-weight: 400;
    font-size: 20px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );


    .aleo-bold {
        font-weight: 700;
    }
    .aleo-header {
        color: #1C1C1C;
        font-weight: 600;
        font-size: 45px;
    }
    .aleo-header-point {
        color: #666666;
    }
    .aleo-header2 {
        color: #333333;
        font-weight: 800;
        font-size: 20px;
    }
    .aleo-header3 {
        display: flex;
        flex-direction: row;
        color: #333333;
        font-weight: 500;
        font-size: 30px;
    }
    .aleo-header4 {
        display: flex;
        flex-direction: row;
        color: #666666;
        font-weight: 500;
        font-size: 25px;
    }
    .aleo-header2-point {
        color: #057FFC;
    }
    .aloe-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .aleo-top-paragraph {
        padding-bottom: 4px;
    }
    .aleo-top-block {
        padding-bottom: 50px;
        .aleo-top-paragraph2 {
            display: inline-block;
        }
        .aleo-top-paragraph2 > span{
            display: inline-block;
        }
    }
    .aleo-img-wrapperer {
        width: 87px;
        margin-bottom: 50px;
    }
    .aleo-none {
        display: block;
    }
    .aleo-display {
        display: none;
    }
    .aleo-img {
        width: 87px;
        object-fit: cover;
    }
    .aleo-separator {
        height: 1.5px;
        width: 100%;
        background-color: #707070;
        margin: 4.5rem 0;
    }
    .aleo-link-wrapper {
        width: 100%;
        .aleo-link {
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
    .section-aleo {
        padding: 2rem 2rem;
        font-weight: 400;
        font-size: 12px;
        // height: 1500px;
        align-items: center;
        background-color: #FFFFFF;
        .aleo-bold {
            font-weight: 700;
        }
        .aleo-header {
            display: none;
        }
        .aleo-header-point {
            color: #666666;
        }
        .aleo-header2 {
            color: #333333;
            font-weight: 800;
            font-size: 20px;
        }
        .aleo-header3 {
            color: #131313;
            font-weight: 700;
            font-size: 12px;
        }
        .aleo-header4 {
            color: #666666;
            font-weight: 500;
            font-size: 12px;
            text-align: left;
        }
        .aleo-header2-point {
            color: #057FFC;
        }
        .aleo-top {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .aleo-top-paragraph {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 20px;
        }
        .aleo-top-block {
            width: 325px;
            // height: 167px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:#F3F3F3;
            border-radius: 15px;
            .aleo-top-paragraph2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 20px;
                // margin-bottom: 20px;
                .aleo-top-title{
                    font-size: 14px;
                    padding-bottom: 20px;
                }
            }
            margin-bottom: 20px;
            padding: 1rem;
        }
        .aleo-top-paragraph3 {
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        }
        .aleo-img-wrapperer {
            // width: 58px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .aleo-none {
            display: none !important;
        }
        .aleo-display {
            display: block !important;
        }
        .aleo-img {
            width: 58px;
            object-fit: cover;
        }
        .aleo-separator {
            height: 1px;
            width: 90%;
            background-color: #707070;
            margin: 3.5rem 0;
        }
        .aleo-bottom-paragraph {
            display: flex;
            flex-direction: column;       
            align-items: start;
            justify-content: space-between;
            width: 325px;
            height: 40px;
        }

        .aleo-link-wrapper {
            width: 325px;
            .aleo-link {
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

