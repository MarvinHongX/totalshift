<script setup>
const { yooUrl, youtubeUrl } = useImg();
</script>
<template>
    <FullCard class="section-yoo flex flex-row align-items-center">
        <div class="yoo-pic flex flex-column align-items-center justify-content-end">
            <img :src="yooUrl" alt="yoo" style="width: 100%;" />
        </div>
        <div class="yoo-me flex flex-column align-items-center">
            <div class="yoo-me-header mb-6">
                <span class="yoo-me-name">이사 유 상 진</span>
            </div>
            <div class="yoo-me-body flex flex-column align-items-center">
                <div class="inline-flex mb-2">
                    <span>회사의 가치와 비전에 대한 소식을 빠르고 정확하게 전달하고, </span>  
                </div>
                <div class="inline-flex mb-4">
                    <span>고객과의 소통을 넓히고 강화해 나가는데 최선을 다하고 있습니다.</span>
                </div>
                <div class="flex flex-row align-items-center">
                    <a href="https://www.youtube.com/@FIL-ALEO" target="_blank" class="youtube-link flex flex-row">
                        <img :src="youtubeUrl" alt="youtube" class="mr-3" /> 
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
    height: 812px;
    background-color: #CECED6;
    color: #070707;
    font-weight: 500;
    font-size: 18px;
    
    .yoo-pic {
        width: 500px; 
        height: 100%;
        overflow: hidden;
    }
    .yoo-pic > img {
        width: 100%; 
        height: auto;
    }

    .yoo-me {
        width: calc(100% - 500px);
        height: 100%;
        padding-top: 17rem;
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
</style>