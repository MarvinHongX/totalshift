<script setup>
const { leeUrl, teamAUrl, teamBUrl, teamCUrl, teamDUrl, authAUrl } = useImg();
</script>
<template>
    <FullCard class="section-team flex flex-row align-items-end justify-content-between">
        <div class="team-left flex flex-column justify-content-end align-items-start">
            <div class="lee-img-wrapper flex flex-column justify-content-center align-items-end">
                <img :src="leeUrl" alt="lee" class="lee-img" />
                <span class="lee-label">연구소장 이영모</span>
                <img :src="authAUrl" alt="authA" class="auth-img" />
            </div>
        </div>
        <div class="team-right flex flex-column justify-content-end align-items-end">
            <div class="team-right-top flex flex-column justify-content-end team-item mb-8">
                <div class="team-header2 mb-4">
                    <span>team</span>
                </div>
                <div class="team-header mb-4">
                    <span>최고의 팀을 만들다</span>
                </div>
                <div class="team-header2 mb-2">
                    <span>전문성을 가진 </span><span class="team-header2-point">경력있는 팀을 형성하여</span>
                </div>
                <div class="team-header2 mb-2">
                    <span>시너지를 높이 끌어올립니다.</span>
                </div>
            </div>
            <div class="team-right-body flex flex-row align-items-start justify-content-start">
                <div class="team-item flex flex-column mr-5">
                    <div class="team-img-wrapper flex">
                        <img :src="teamAUrl" alt="teamA" class="team-img" />
                        <span class="team-label">기술팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column mr-5">
                    <div class="team-img-wrapper">
                        <img :src="teamBUrl" alt="teamB" class="team-img" />
                        <span class="team-label">기획팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column mr-5">
                    <div class="team-img-wrapper">
                        <img :src="teamCUrl" alt="teamC" class="team-img" />
                        <span class="team-label">개발팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column mr-5">
                    <div class="team-img-wrapper">
                        <img :src="teamDUrl" alt="teamD" class="team-img" />
                        <span class="team-label">영업지원팀</span>
                    </div>
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-team {
    height: 1350px;
    padding: 7rem 0rem;
    background-color: #171717;

    .team-header {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 45px;
    }
    .team-header2 {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }
    .team-header2-point {
        color: #057FFC;
    }
    .team-left {
        width: 800px; 
        height: 800px;
        padding: 0 4rem;
    }

    .lee-img-wrapper {
        position: relative; 
        width: 650px;
        height: 700px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .auth-img {
        width: 50%;
        z-index: 2;
        position: absolute;
        top: 30%;  
        left: -10px;  
        z-index: 2;
    }
    .lee-img {
        width: 500px;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        position: relative;
        z-index: 1; 
    }

    .lee-label {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0);
        color: #CCCCCC;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 30px 0;
    }
    .team-left > img {
        border-radius: 35px;
        width: 100%;
        height: auto;
        object-fit: cover;
    }


    .team-right {
        width: calc(100% - 800px);
        height: 800px;
        .team-right-top {
            width: 100%;
            text-align: right;
            padding-right: 3rem;
        }    
        .team-right-body {
            width: 100%;
            overflow-x: scroll;
        }
    }



    .team-item {
        width: 320px;
        height: 320px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        flex-shrink: 0;

        .team-item-header {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 32px;
        }
    }

    .team-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        position: relative;
    }

    .team-img-wrapper {
        width: 320px;
        height: 320px;
        overflow: hidden;
        position: relative;
        border-radius: 30px;
        margin-bottom: 10px;
    }

    .team-label {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5); /* 불투명한 배경 색상 */
        color: #ffffff;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        padding: 30px 0;
    }
}
</style>

