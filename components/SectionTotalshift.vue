<script setup>
import { ref } from 'vue';
const { totalshiftUrl } = useImg();

const slogans = [
    '속도보다 방향 Direction',
    '능력보다 태도 Attitude',
    '숫자보다 가치 Quality',
    '유행보다 창조 Creative',
    '그리고 밸런스 Balance'
];

const currentSlogan = ref(slogans[0]);
const currentIndex = ref(0);
const currentOpacity = ref(0);
const intervalId = ref(null);
const cycle = ref(0);
const videoRef = ref(null);


const changeSlogan = () => {
    if (cycle.value == 0) {
        currentSlogan.value = slogans[currentIndex.value];
        currentOpacity.value = 1
        cycle.value = cycle.value + 1
    } else if (cycle.value == 1) {
        currentIndex.value = (currentIndex.value + 1) % slogans.length;
        cycle.value = cycle.value + 1
    } else {
        currentOpacity.value = 0
        cycle.value = 0;
    }
};

onMounted(() => {
    intervalId.value = setInterval(changeSlogan, 1000);
    // const video = videoRef.value;
    // if (video) {
    //     video.play();
    // }
});

onUnmounted(() => {
    clearInterval(intervalId.value);
});
</script>


<template>
    <FullCard class="section-totalshift">
        <div class="totalshift-background-wrapper">
            <video ref="videoRef" class="totalshift-background" :src="totalshiftUrl" loop muted autoplay playsinline preload="none">
            </video>
        </div>
        <div class="totalshift-header mb-5">
            <span>TOTAL SHIFT</span>
        </div>
        <div class="totalshift-header2 mb-4">
            <span>웹3.0 데이터 센터 & 서비스</span>
        </div>
        <div class="totalshift-header3" :style="{ opacity: currentOpacity }">
            <span>{{ currentSlogan }}</span>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-totalshift {
    position: relative;
    overflow: hidden;  
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 720px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    color: #FFFFFF;
    z-index: 1;        
    .totalshift-background-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        .totalshift-background {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.65;
        }
    }
    .totalshift-header {
        font-weight: 600;
        font-size: 20px;
    }
    .totalshift-header2 {
        font-weight: 800;
        font-size: 50px;
    }
    .totalshift-header3 {
        font-weight: 600;
        font-size: 40px;
        transition: opacity 0.5s ease-in-out;
    }
}

@media (max-width: 1350px) {
    .section-totalshift {
        height: 700px;
        padding: 0rem 2rem;  
        .totalshift-header {
            font-weight: 400;
            font-size: 15px;
        }
        .totalshift-header2 {
            font-weight: 600;
            font-size: 30px;
        }
        .totalshift-header3 {
            font-weight: 500;
            font-size: 24px;
        }
    }
}
@media (max-width: 900px) {
    .section-totalshift {
        height: 650px;
    }
}
@media (max-width: 800px) {
    .section-totalshift {
        height: 600px;
    }
}
@media (max-width: 700px) {
    .section-totalshift {
        height: 550px;
    }
}
@media (max-width: 600px) {
    .section-totalshift {
        height: 500px;
    }
}
@media (max-width: 500px) {
    .section-totalshift {
        height: 450px;
    }
}
@media (max-width: 390px) {
    .section-totalshift {
        height: 400px;
        .totalshift-header {
            font-size: 10px;
        }
        .totalshift-header2 {
            font-weight: 500;
            font-size: 19px;
        }
        .totalshift-header3 {
            font-size: 17px;
        }
    }
}
</style>
