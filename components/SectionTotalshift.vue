<script setup>
const { introduceUrl } = useImg();
</script>
<template>
    <FullCard class="section-totalshift flex flex-column align-items-start">
        <video v-if="introduceUrl" :src="introduceUrl" autoplay loop muted></video>
        <div class="totalshift-header mb-6">
            <span>TOTAL SHIFT</span>
        </div>
        <div class="totalshift-header2 mb-4">
            <span>웹3.0 데이터 센터 & 서비스</span>
        </div>
        <div class="totalshift-header3">
            <span>속도보단 방향 Direction</span>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-totalshift {
    height: 984px;
    width: 100%;
    padding: 12rem 12rem;  
    color: #FFFFFF;

    position: relative;
    overflow: hidden;  
    z-index: 1;        

    video {
        position: absolute; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; 
        z-index: -1;    
        opacity: 0.8;
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
    }
}
</style>