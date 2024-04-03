<script setup>
const { songUrl } = useImg();
</script>
<template>
    <FullCard class="section-song flex flex-row align-items-center">
        <div class="song-me flex flex-column align-items-center">
            <div class="song-me-header mb-6">
                <span class="song-me-name">CEO 송 창 익</span>
            </div>
            <div class="song-me-body flex flex-column align-items-center">
                <div class="inline-flex mb-2">
                    <span>“디지털 혁신은 전분야 비즈니스의 형태를 근본적으로 변화시키고 있습니다. </span>  
                </div>
                <div class="inline-flex mb-2">
                    <span>웹3.0 시대에 부합하는 차세대 IPFS 프로토콜을 기반으로 효율적인 데이타 관리를 위한</span>
                </div>
                <div class="inline-flex mb-2">
                    <span>연구와 서비스 개발에 매진하고 있습니다.”</span>
                </div>
            </div>
        </div>
        <div class="song-pic flex flex-column align-items-center justify-content-end">
            <img :src="songUrl" alt="song" style="width: 80%;" />
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-song {
    height: 799px;
    background-color:#2F3445;
    color: #EEEEEE;
    font-weight: 500;
    font-size: 18px;

    .song-pic {
        width: 500px; 
        height: 100%;
        overflow: hidden;
    }
    .song-pic > img {
        width: 100%; 
        height: auto;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), 0 100%);
    }

    .song-me {
        width: calc(100% - 500px);
        height: 100%;
        padding-top: 14rem;
        .song-me-name {
            font-weight: 600;
            font-size: 30px;            
        }
    }
}
</style>