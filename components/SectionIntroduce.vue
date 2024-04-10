<script setup>
</script>
<template>
    <FullCard class="section-introduce">
        <div class="introduce-top">
            <span>토탈쉬프트</span><span class="introduce-point">는</span><span> 미래</span><span class="introduce-point">를</span><span> 앞서봅니다</span>
        </div>
        <div class="introduce-separator"></div>
        <div class="introduce-body">
            <div class="body-paragraph">
                <span>테라바이트에서 페타바이트에 이르기까지 최고 용량을 </span>
                <span>갖춘 클라우드 탈중앙화 데이터 스토리지 솔루션을 </span>
                <span>제공하는 기업입니다.</span>
            </div>
            <div class="body-paragraphEnd">
                <span>현시대의 IDC(Internet Data Center)에서 미래의 Web3 대응 </span>
                <span>IPFS (Inter Planetary File System)까지 솔루션을 </span>   
                <span>개발 및 제공 하면서 미래의 시장을 선도해 나가겠습니다.</span>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-introduce {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 800px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );  
    color: #ECECEC;
    background-color: #070707;
    .introduce-top {
        font-weight: 700;
        font-size: 50px;
    }
    .introduce-point {
        color: #666666;
    }
    .introduce-separator {
        height: 1.5px;
        width: 120px;
        background-color: #ECECEC;
        margin: 3.5rem 0;
    }
    .introduce-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        .body-paragraph {
            margin-bottom: 15px;
        }
        .body-paragraphEnd {
            margin-bottom: 0px;
        }
    }
}
@media (max-width: 1350px) {
    .section-introduce {
        align-items: start;
        height: 516px;
        padding: 0rem 3rem;  
        .introduce-top {
            font-size: 30px;
        }
        .introduce-separator {
            width: 110px;
            margin: 2.5rem 0;
        }
        .introduce-body {
            align-items: start;
            font-weight: 400;
            .body-paragraph {
                margin-bottom: 30px;
            }
        }
        .body-paragraph, .body-paragraphEnd {
            display: flex;
            flex-direction: column;
            justify-content: start;
        }
        .body-paragraph > span {
            display: flex;
            margin-bottom: 8px;
        }
        .body-paragraphEnd > span {
            display: flex;
            margin-bottom: 8px;
        }
    }
}

@media (max-width: 449px) {
    .section-introduce {
        height: 376px;
        padding: 0rem 2rem;  
        .introduce-top {
            font-size: 20px;
        }
        .introduce-separator {
            margin: 1.8rem 0;
            width: 77px;
        }
        .introduce-body {
            font-size: 12px;
        }
    }
}
</style>
