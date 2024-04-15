<script setup>
const { songUrl, songProfileUrl } = useImg();
</script>
<template>
    <FullCard class="section-song">
        <div class="song-pic2">
            <NuxtImg format="webp" loading="lazy" :src="songProfileUrl" alt="song" style="width: 100%;" />
        </div>
        <div class="song-me">
            <div class="song-me-header mb-6">
                <span class="song-me-name">CEO 송 창 익</span>
            </div>
            <div class="song-me-body">
                <div class="inline-flex mb-2">
                    <span>“디지털 혁신은 전분야 비즈니스의 형태를 근본적으로 변화시키고 있습니다. </span>  
                </div>
                <div class="inline-flex mb-2">
                    <span>웹3.0 시대에 부합하는 차세대 IPFS 프로토콜을 기반으로</span>
                </div>
                <div class="inline-flex mb-2">
                    <span>효율적인 데이타 관리를 위한 연구와 서비스 개발에 매진하고 있습니다.”</span>
                </div>
            </div>
        </div>
        <div class="song-pic">
            <NuxtImg format="webp" loading="lazy" :src="songUrl" alt="song" style="width: 80%;" />
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-song {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 599px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    background-color:#2F3445;
    color: #EEEEEE;
    font-weight: 500;
    font-size: 18px;
    .song-pic {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        width: 500px; 
        height: 100%;
        overflow: hidden;
    }
    .song-pic2 {
        display: none;
    }
    .song-pic > img {
        width: 100%; 
        height: auto;
        margin-bottom: -130px; 
    }
    .song-me {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - 500px);
        height: 100%;
        padding-top: 13rem;
        .song-me-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .song-me-name {
            font-weight: 600;
            font-size: 30px;            
        }
    }
}
@media (max-width: 1350px) {
    .section-song {
        flex-direction: column;
        justify-content: center;
        height: 612px;
        font-weight: 500;
        font-size: 12px;
        // padding-top: 6rem;
        .song-pic {
            display: none;
        }
        .song-pic2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 210px; 
            height: 210px;
            overflow: hidden;
        }
        .song-pic2 > img {
            width: 100%; 
            height: auto;
        }

        .song-me {
            width: 100%;
            height: 100px;
            padding-top: 1rem;
            .song-me-name {
                font-weight: 500;
                font-size: 18px;
            }
        }
    }
}
</style>