<script setup>
const { filecoinLogoUrl } = useImg();
</script>
<template>
    <FullCard class="section-filecoin flex flex-column align-items-start justify-content-start">
        <div class="filecoin-img-wrapperer">
            <img :src="filecoinLogoUrl" alt="filecoinLogo" class="filecoin-img"/>
        </div>
        <div class="filecoin-header mb-1">
            <span>Filecoin</span>
        </div>
        <div class="filecoin-header mb-6">
            <span>introduction</span>
        </div>
        <div class="mb-1">
            <span class="filecoin-bold">Filecoin 네트워크</span> 
            <span>: Filecoin은 파일을 저장하고 시간이 지남에 따라 신뢰성 있게 저장되었는지</span>
        </div>
        <div class="mb-5">
            <span>증명하는 경제적 인센티브와 암호화가 내장된 P2P 네트워크입니다.</span>
        </div>
        <div class="mb-1">
            <span class="filecoin-bold">스토리지 프로바이더</span> 
            <span>: 사용자는 파일을 저장하기 위해 스토리지 프로바이더에게 Filecoin을 지불하며</span>
        </div>
        <div class="mb-5">
            <span>누구나 파일 저장 또는 타인의 파일 저장으로 수익을 창출하기 위해 Filecoin에 참여할 수 있습니다.</span>
        </div>
        <div class="mb-1">
            <span class="filecoin-bold">IPFS와의 차이</span> 
            <span>: Filecoin은 IPFS 프로토콜 위에 구축되었으며, 콘텐트 어드레스 지정을 이용하여 데이터에 대한 영구 참조를 가능하게 합니다.</span>
        </div>
        <div class="mb-5">
            <span>Filecoin은 인센티브 계층을 추가하여 내용이 신뢰성 있게 저장되고 접근할 수 있도록 합니다.</span>
        </div>
        <div class="mb-1">
            <span class="filecoin-bold">다양한 사용 사례</span> 
            <span>: Filecoin은 Web3 네이티브 NFT, 메타버스 및 게임 자산 저장, 인센티브가 있는 영구 저장,</span>
        </div>
        <div>
            <span>클라우드 저장소에 대한 저렴한 대안으로 Web2 데이터셋을 보관하는 등 다양한 사용 사례로 사용됩니다.</span>
        </div>
        <div class="filecoin-separator"></div>
        <div class="filecoin-header3 mb-6">
            <span>아래 링크를 통하여 Filecoin 관련 자세한 정보를 얻을 수 있습니다.</span>
        </div>  
        <div class="mb-5">
            <a href="https://docs.filecoin.io" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">Filecoin Docs ▶</div>
            </a>    
        </div>
        <div class="mb-5">
            <a href="https://docs.filecoin.io/basics/what-is-filecoin/crypto-economics" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">Filecoin Crypto-economics ▶</div>
            </a>    
        </div>
        <div>
            <a href="https://docs.filecoin.io/basics/what-is-filecoin/blockchain" target="_blank" class="filecoin-link">
                <div class="filecoin-header4">Filecoin Blockchain ▶</div>
            </a>    
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-filecoin {
    height: 1300px;
    padding: 9rem;
    background-color: #F4F6F8;
    color: #333333;
    font-weight: 400;
    font-size: 20px;


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
        color: #333333;
        font-weight: 500;
        font-size: 30px;
    }
    .filecoin-header4 {
        color: #666666;
        font-weight: 500;
        font-size: 25px;
    }
    .filecoin-header2-point {
        color: #057FFC;
    }

    .filecoin-img-wrapperer {
        width: 87px;
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
    .filecoin-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        text-decoration: none;
        color: inherit;
    }
}
</style>

