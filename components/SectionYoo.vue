<script setup>
const { yooUrl, yooProfileUrl, youtubeUrl } = useImg();
const { youtubeHref } = useHref();
</script>
<template>
    <FullCard class="section-yoo">
        <div class="yoo-pic">
            <img loading="lazy" :src="yooUrl" alt="yoo" style="width: 100%;" />
        </div>
        <div class="yoo-pic2 mb-4">
            <img loading="lazy" :src="yooProfileUrl" alt="yoo" style="width: 100%;" />
        </div>
        <div class="yoo-me">
            <div class="yoo-me-header mb-6">
                <span class="yoo-me-name">이사 유 상 진</span>
            </div>
            <div class="yoo-me-body">
                <div class="inline-flex mb-2">
                    <span>회사의 가치와 비전에 대한 소식을 빠르고 정확하게 전달하고, </span>  
                </div>
                <div class="inline-flex mb-4">
                    <span>고객과의 소통을 넓히고 강화해 나가는데 최선을 다하고 있습니다.</span>
                </div>
                <div class="flex flex-row align-items-center">
                    <a :href="youtubeHref" target="_blank" class="youtube-link flex flex-row">
                        <img loading="lazy" :src="youtubeUrl" alt="youtube" class="youtube mr-3" /> 
                        <div class="flex flex-row align-items-center">
                            <span class="mr-3">파일&알레오TV 채널운영</span>
                            <span class="mr-1"> 바로가기</span><span>▶</span>
                        </div>
                    </a>         
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-yoo {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 599px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    background-color: #CECED6;
    color: #070707;
    font-weight: 500;
    font-size: 18px;
    .yoo-pic {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        width: 500px; 
        height: 100%;
        overflow: hidden;
    }
    .yoo-pic2 {
        display: none;
    }
    .yoo-pic > img {
        width: 100%; 
        height: auto;
    }
    .yoo-me {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - 500px);
        height: 100%;
        padding-top: 13rem;
        .yoo-me-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .yoo-me-name {
            font-weight: 600;
            font-size: 30px;            
        }
        .youtube-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: inherit;
        }
    }
}
@media (max-width: 1350px) {
    .section-yoo {
        flex-direction: column;
        justify-content: center;
        height: 612px;
        font-size: 12px;
        .yoo-pic {
            display: none;
        }
        .yoo-pic2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 210px; 
            height: 210px;
            overflow: hidden;
        }
        .yoo-me {
            width: 100%;
            height: 100px;
            padding-top: 1rem;
            .yoo-me-name {
                font-weight: 500;
                font-size: 18px;
            }
            .youtube-link {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: inherit;
            }
        }
        .youtube {
            width: 22px;

        }
    }

}
</style>