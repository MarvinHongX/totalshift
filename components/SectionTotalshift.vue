<script setup>
const { introduceUrl } = useImg();

const texts = [
    '속도보다 방향 Direction',
    '능력보다 태도 Attitude',
    '숫자보다 가치 Quality',
    '유행보다 창조 Creative',
    '그리고 밸런스 Balance'
];

const currentText = ref(texts[0]);
const currentIndex = ref(0);
const currentOpacity = ref(0);
const intervalId = ref(null);
const changeCycle = ref(0);

const changeText = () => {
    if (changeCycle.value == 0) {
        currentText.value = texts[currentIndex.value];
        currentOpacity.value = 1
        changeCycle.value = changeCycle.value + 1
    } else if (changeCycle.value == 1) {
        currentIndex.value = (currentIndex.value + 1) % texts.length;
        changeCycle.value = changeCycle.value + 1
    } else {
        currentOpacity.value = 0
        changeCycle.value = 0;
    }
};

onMounted(() => {
    intervalId.value = setInterval(changeText, 1000);
});

onUnmounted(() => {
    clearInterval(intervalId.value);
});

</script>

<template>
    <FullCard class="section-totalshift">
        <div class="video-background">
            <video v-if="introduceUrl" :src="introduceUrl" autoplay loop muted playsinline></video>
        </div>
        <div class="totalshift-header mb-5">
            <span>TOTAL SHIFT</span>
        </div>
        <div class="totalshift-header2 mb-4">
            <span>웹3.0 데이터 센터 & 서비스</span>
        </div>
        <div class="totalshift-header3" :style="{ opacity: currentOpacity }">
            <span>{{ currentText }}</span>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-totalshift {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 984px;
    padding: 12rem 12rem;  
    color: #FFFFFF;
    position: relative;
    overflow: hidden;  
    z-index: 1;        

    .video-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        video {
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
@media (max-width: 992px) {
    .section-totalshift {
        height: 716px;
        padding: 18rem 2rem;  
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
            transition: opacity 0.5s ease-in-out;
        }
    }
}
@media (max-width: 390px) {
    .section-totalshift {
        height: 616px;
        padding: 16rem 2rem; 
        .totalshift-header {
            font-weight: 400;
            font-size: 10px;
        }
        .totalshift-header2 {
            font-weight: 500;
            font-size: 19px;
        }
        .totalshift-header3 {
            font-weight: 500;
            font-size: 17px;
            transition: opacity 0.5s ease-in-out;
        }
    }

}
</style>
