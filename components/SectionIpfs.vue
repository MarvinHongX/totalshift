<script setup>
const { ipfsLogoUrl } = useImg();
const { ipfsIntroHref, ipfsDocsHref, ipfsNewsHref } = useHref();
</script>
<template>
    <FullCard class="section-ipfs">
        <div class="ipfs-img-wrapperer">
            <img :src="ipfsLogoUrl" alt="ipfsLogo" class="ipfs-img"/>
        </div>
        <div class="ipfs-header mb-6">
            <span>IPFS</span>
        </div>
        <div class="ipfs-top mb-6">
            <div class="ipfs-top-paragraph mb-1">
                <span>분산형 파일 시스템인 IPFS(Interplanetary File System)는</span>
                <span>탈중앙화, P2P(peer-to-peer), 무신뢰(trustless) 방식을 사용하여</span>
                <span>모든 종류의 파일을 저장하는 블록체인 네트워크입니다.</span>
            </div>
            <div class="ipfs-top-paragraph mb-1">
                <span>IPFS는 웹의 정보 검색, 저장, 전송 능력을 혁신적으로 변화시키고자 하며,</span>
                <span>HTTP(Hypertext Transfer Protocol)를 대체할 목표를 가지고 있습니다.</span>
            </div>
            <div class="ipfs-top-paragraph">
                <span>이 시스템은 속도, 효율성, 보안, 개방성을 향상시키기 위해 설계되었습니다.</span>
            </div>
        </div>
        <div class="ipfs-header2 mb-4">
            <span>IPFS는 분산형 시대를 위한 다목적 도구로서, 주요 특징은 다음과 같습니다.</span>
        </div>
        <div class="ipfs-top-block">
            <div class="ipfs-top-paragraph2">
                <span class="ipfs-bold ipfs-top-title">콘텐츠 주소 지정</span> 
                <span class="ipfs-none"> : </span><span>데이터를 이름이나 위치가 아닌 실제 콘텐츠의 지문을</span>
                <span> 기반으로 저장, 검색, 찾기 위한 혁신입니다.</span>
            </div>
        </div>
        <div class="ipfs-top-block">
            <div class="ipfs-top-paragraph2">
                <span class="ipfs-bold ipfs-top-title">데이터 무결성</span> 
                <span class="ipfs-none"> : </span><span>해시 함수를 사용하여 모든 데이터의 무결성을 검증하므로,</span>
                <span> 원하는 데이터를 항상 신뢰할 수 있습니다.</span>
            </div>
        </div>
        <div class="ipfs-top-block">
            <div class="ipfs-top-paragraph2">
                <span class="ipfs-bold ipfs-top-title">다중 노드 저장</span> 
                <span class="ipfs-none"> : </span><span>여러 노드에 걸쳐 파일과 데이터를 저장하여</span>
                <span> 중요한 중단 시에도 콘텐츠를 준비 상태로 유지합니다.</span>
            </div>      
        </div>
        <div class="ipfs-bottom">
            <div class="ipfs-bottom-paragraph2 mb-1">
                <span>개발자들은 IPFS를 사용하여 개방적이고 검증 가능하며</span>
                <span>탄력적인 소프트웨어를 구축할 수 있습니다.</span>
            </div>
            <div class="ipfs-bottom-paragraph2 mb-1">
                <span>Go, Rust, JavaScript등으로 구현이 가능하며</span>
                <span> 데스크톱, 브라우저, 모바일, 임베디드 장치 등을 지원합니다.</span>
            </div>
            <div class="ipfs-bottom-paragraph2">
                <span>파일 공유, 음악 스트리밍, 웹사이트 게시, NFT 저장 등</span>
                <span> 다양한 애플리케이션을 통해 IPFS를 활용할 수 있습니다.</span>
            </div>
        </div>
        <div class="ipfs-separator"></div>
        <div class="ipfs-header3 ipfs-bottom-paragraph mb-6">
            <span>IPFS에 대한 더 궁금하시면 아래 링크를 통하여 더 자세한 정보를 얻을 수 있습니다.</span>
        </div>  
        <div class="ipfs-link-wrapper mb-5">
            <a :href="ipfsIntroHref" target="_blank" class="ipfs-link">
                <div class="ipfs-header4">IPFS Intro ▶</div>
            </a>    
        </div>
        <div class="ipfs-link-wrapper mb-5">
            <a :href="ipfsDocsHref" target="_blank" class="ipfs-link">
                <div class="ipfs-header4">IPFS Docs ▶</div>
            </a>    
        </div>
        <div class="ipfs-link-wrapper">
            <a :href="ipfsNewsHref" target="_blank" class="ipfs-link">
                <div class="ipfs-header4">IPFS News ▶</div>
            </a>    
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-ipfs {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 1700px;
    padding: 9rem;
    background-color: #F4F6F8;
    color: #333333;
    font-weight: 400;
    font-size: 20px;


    .ipfs-bold {
        font-weight: 700;
    }
    .ipfs-header {
        color: #1C1C1C;
        font-weight: 600;
        font-size: 45px;
    }
    .ipfs-header-point {
        color: #666666;
    }
    .ipfs-header2 {
        color: #333333;
        font-weight: 800;
        font-size: 20px;
    }
    .ipfs-header3 {
        color: #333333;
        font-weight: 500;
        font-size: 30px;
    }
    .ipfs-header4 {
        color: #666666;
        font-weight: 500;
        font-size: 25px;
    }
    .ipfs-header2-point {
        color: #057FFC;
    }
    .ipfs-top {
        display: flex;
        flex-direction: column;
    }
    .ipfs-top-paragraph {
        padding-bottom: 4px;
    }
    .ipfs-top-block {
        padding-bottom: 50px;
    }
    .ipfs-bottom {
        display: flex;
        flex-direction: column;
        .ipfs-bottom-paragraph2 {
            padding-bottom: 4px;
        }
    }
    .ipfs-img-wrapperer {
        width: 87px;
        margin-bottom: 50px;
    }
    .ipfs-img {
        width: 87px;
        object-fit: cover;
    }
    .ipfs-separator {
        height: 1.5px;
        width: 100%;
        background-color: #707070;
        margin: 4.5rem 0;
    }
    .ipfs-link-wrapper {
        width: 100%;
        .ipfs-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            text-decoration: none;
            color: inherit;
        }
    }
}
@media (max-width: 890px) {
    .section-ipfs {
        padding: 5rem 1rem;
        font-weight: 400;
        font-size: 12px;
        height: 1380px;
        align-items: center;
        background-color: #FFFFFF;
        .ipfs-bold {
            font-weight: 700;
        }
        .ipfs-header {
            display: none;
        }
        .ipfs-header-point {
            color: #666666;
        }
        .ipfs-header2 {
            color: #333333;
            font-weight: 600;
            font-size: 12px;
        }
        .ipfs-header3 {
            color: #131313;
            font-weight: 700;
            font-size: 12px;
        }
        .ipfs-header4 {
            color: #666666;
            font-weight: 500;
            font-size: 12px;
            text-align: left;
        }
        .ipfs-header2-point {
            color: #057FFC;
        }
        .ipfs-top {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .ipfs-top-paragraph {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 20px;
        }
        .ipfs-top-block {
            width: 325px;
            // height: 167px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:#F3F3F3;
            border-radius: 15px;
            .ipfs-top-paragraph2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 20px;
                // margin-bottom: 20px;
                .ipfs-top-title{
                    font-size: 14px;
                    padding-bottom: 20px;
                }
            }
            margin-bottom: 20px;
            padding: 1rem;
        }
        .ipfs-top-paragraph3 {
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        }
        .ipfs-img-wrapperer {
            width: 58px;
        }
        .ipfs-none {
            display: none;
        }
        .ipfs-img {
            width: 58px;
            object-fit: cover;
        }
        .ipfs-separator {
            height: 1px;
            width: 90%;
            background-color: #707070;
            margin: 2rem 0;
        }
        .ipfs-bottom-paragraph {
            display: flex;
            flex-direction: column;       
            align-items: start;
            justify-content: space-between;
            width: 325px;
            height: 40px;
        }
        .ipfs-bottom {
            height: 160px;
            flex-direction: end;
            align-items: end;
            .ipfs-bottom-paragraph2 {
                display: flex;
                flex-direction: column;       
                align-items: center;
                justify-content: space-between;
                width: 325px;
                height: 50px;
                padding-bottom: 10px; 
            }
        }
        .ipfs-link-wrapper {
            width: 325px;
            .ipfs-link {
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

