<script>
</script>
<template>
    <FullCard class="section-introduce">
        <div class="introduce-header">
            <span>토탈쉬프트</span>
            <span class="introduce-header-point">는</span>
            <span> 미래</span>
            <span class="introduce-header-point">를</span>
            <span> 앞서봅니다</span>
        </div>
        <div class="introduce-separator"></div>
        <div class="introduce-body">
            <div class="introduce-body-paragraph">
                <span>테라바이트에서 페타바이트에 이르기까지 최고 용량을 </span>
                <span>갖춘 클라우드 탈중앙화 데이터 스토리지 솔루션을 </span>
                <span>제공하는 기업입니다.</span>
            </div>
            <div class="introduce-body-paragraph">
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
    width: 100%;
    height: 800px;
    padding: 20rem 3rem 5rem 3rem;  
    color: #ECECEC;
    background-color: #070707;

    .introduce-header {
        font-weight: 700;
        font-size: 50px;
    }
    .introduce-header-point {
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
        .introduce-body-paragraph {
            margin-bottom: 15px;
        }
    }
}
@media (max-width: 890px) {
    .section-introduce {
        align-items: start;
        height: 516px;
        padding: 5rem 3rem;  
        .introduce-header {
            font-weight: 700;
            font-size: 30px;
        }
        .introduce-header-point {
            color: #666666;
        }
        .introduce-separator {
            margin: 2.5rem 0;
            width: 110px;
        }
        .introduce-body {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-weight: 400;
            font-size: 16px;
            .introduce-body-paragraph {
                margin-bottom: 30px;
            }
        }
        .introduce-body-paragraph {
            display: flex;
            flex-direction: column;
            justify-content: start;
        }
        .introduce-body-paragraph > span {
            display: flex;
            margin-bottom: 8px;
        }
    }
}

@media (max-width: 449px) {
    .section-introduce {
        align-items: start;
        height: 376px;
        padding: 3rem 2rem;  
        .introduce-header {
            font-weight: 700;
            font-size: 20px;
        }
        .introduce-header-point {
            color: #666666;
        }
        .introduce-separator {
            margin: 1.8rem 0;
            width: 77px;
        }
        .introduce-body {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-weight: 400;
            font-size: 12px;
            .introduce-body-paragraph {
                margin-bottom: 30px;
            }
        }
        .introduce-body-paragraph {
            display: flex;
            flex-direction: column;
            justify-content: start;
        }
        .introduce-body-paragraph > span {
            display: flex;
            margin-bottom: 8px;
        }
    }
}
</style>
