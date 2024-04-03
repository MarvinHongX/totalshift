<script setup>
const { aleoLogoUrl } = useImg();
</script>
<template>
    <FullCard class="section-aleo flex flex-column align-items-start justify-content-start">
        <div class="aleo-img-wrapperer">
            <img :src="aleoLogoUrl" alt="aleoLogo" class="aleo-img"/>
        </div>
        <div class="aleo-header mb-6">
            <span>Aleo</span>
        </div>
          
        <div class="flex flex-column mb-6">
            <div class="mb-1"><span>Aleo는 완전히 개인화된 애플리케이션을 제공하는 최초의 플랫폼입니다.</span></div>
            <div class="mb-1"><span>분산 시스템의 강점과 개인정보 보호를 강화하는 제로-지식 암호화를 결합하여 웹 사용자의 데이터를 보호합니다.</span></div>
            <div><span>기본적으로 개인정보 보호를 제공하며 오픈 소스로 구축되었으며 웹을 위해 설계되었습니다.</span></div>
        </div>
        <div class="mb-1">
            <span class="aleo-bold">제로-지식 암호화</span> 
            <span>: Aleo는 제로-지식(ZK) 암호화를 사용하는 개인 애플리케이션을 위한 플랫폼입니다.</span>
        </div>
        <div class="mb-6">
            <span>Aleo 블록체인은 제로-지식(ZK) 증명을 활용하여 전통적인 모델보다 빠르고 효율적으로 설계되었습니다.</span>
        </div>
        <div class="mb-1">
            <span class="aleo-bold">Leo 프로그래밍 언어</span> 
            <span>: Aleo에서는 Leo라는 프로그래밍 언어를 사용하여 제로-지식 앱을 구축할 수 있습니다.</span>
        </div>
        <div class="mb-6">
            <span>이 언어는 낮은 수준의 암호학을 추상화하는 Rust 기반 DSL로, 제로-지식에서 논리를 쉽게 표현할 수 있게 해줍니다.</span>
        </div>
        <div class="mb-6">
            <span class="aleo-bold">AleoBFT 합의 프로토콜</span> 
            <span>: Aleo는 AleoBFT라는 새로운 합의 프로토콜을 통해 허가 없는 및 확장 가능한 네트워크를 제공합니다.</span>
        </div>
        <div class="mb-6">
            <span class="aleo-bold">제로-지식 실행을 위한 가상 머신</span> 
            <span>: Aleo는 사용자 정의 즉시 표현(IR), 무제한 런타임 및 효율적인 증명 생성을 특징으로 하는 강력한 제로-지식 실행 가상 머신을 갖추고 있습니다.</span>
        </div>
        <div>
            <span>이러한 기능들을 통해 Aleo는 사용자와 애플리케이션 개발자에게 무제한의 계산 능력과 절대적인 개인정보 보호를 제공합니다.</span>
        </div>      
        <div class="aleo-separator"></div>
        <div class="aleo-header3 mb-6">
            <span>Aleo에 대한 더 궁금하시면 아래 링크를 통하여 더 자세한 정보를 얻을 수 있습니다.</span>
        </div>  
        <div class="mb-5">
            <a href="https://aleo.org/post/welcome-to-aleo" target="_blank" class="aleo-link">
                <div class="aleo-header4">Aleo Intro ▶</div>
            </a>    
        </div>
        <div class="mb-5">
            <a href="https://developer.aleo.org/getting_started" target="_blank" class="aleo-link">
                <div class="aleo-header4">Aleo Docs ▶</div>
            </a>    
        </div>
        <div>
            <a href="https://aleo.org/blog/" target="_blank" class="aleo-link">
                <div class="aleo-header4">Aleo Blog ▶</div>
            </a>    
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-aleo {
    height: 1700px;
    padding: 9rem;
    background-color: #F4F6F8;
    color: #333333;
    font-weight: 400;
    font-size: 20px;


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
        color: #333333;
        font-weight: 500;
        font-size: 30px;
    }
    .aleo-header4 {
        color: #666666;
        font-weight: 500;
        font-size: 25px;
    }
    .aleo-header2-point {
        color: #057FFC;
    }

    .aleo-img-wrapperer {
        width: 87px;
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
    .aleo-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        text-decoration: none;
        color: inherit;
    }
}
</style>

