<script setup>
const { leeUrl, teamAUrl, teamBUrl, teamCUrl, teamDUrl, authAUrl } = useImg();
</script>
<template>
    <FullCard class="section-team">
        <div class="team-left">
            <div class="lee-img-wrapper">
                <img :src="leeUrl" alt="lee" class="lee-img" />
                <span class="lee-label">연구소장 이영모</span>
                <img :src="authAUrl" alt="authA" class="auth-img" />
            </div>
        </div>
        <div class="team-right">
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
            <div class="lee-img-wrapper2">
                <img :src="leeUrl" alt="lee" class="lee-img" />
                <span class="lee-label">연구소장 이영모</span>
                <img :src="authAUrl" alt="authA" class="auth-img" />
            </div>
            <div class="team-right-body flex flex-row align-items-start justify-content-start">
                <div class="team-item flex flex-column mr-4">
                    <div class="team-img-wrapper flex">
                        <img :src="teamAUrl" alt="teamA" class="team-img" />
                        <span class="team-label">기술팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column mr-4">
                    <div class="team-img-wrapper">
                        <img :src="teamBUrl" alt="teamB" class="team-img" />
                        <span class="team-label">기획팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column mr-4">
                    <div class="team-img-wrapper">
                        <img :src="teamCUrl" alt="teamC" class="team-img" />
                        <span class="team-label">개발팀</span>
                    </div>
                </div>
                <div class="team-item flex flex-column">
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
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: between;
    width: 100%;
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
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
        width: 800px; 
        height: 800px;
        padding: 0 4rem;
        .lee-img-wrapper {
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: center;
            position: relative; 
            width: 650px;
            height: 532px;
            overflow: hidden;
            margin-bottom: 10px;
            .auth-img {
                width: 45%;
                z-index: 2;
                position: absolute;
                top: 15%;  
                left: 90px;  
                object-fit: cover;
                z-index: 2;
                border-radius: 0px;
            }
            .lee-img {
                width: 400px;
                height: 100%;
                object-fit: cover;
                border-radius: 25px;
                position: relative;
                z-index: 1; 
            }
            .lee-label {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 400px;
                background-color: rgba(255, 255, 255, 0);
                color: #CCCCCC;
                font-size: 20px;
                font-weight: 500;
                text-align: center;
                padding: 30px 30px;
                z-index: 1; 
            }
        }
    }




    .team-right {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
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
            .team-item {
                width: 250px;
                height: 250px;
                color: #FFFFFF;
                font-weight: 500;
                font-size: 18px;
                flex-shrink: 0;

                .team-img-wrapper {
                    width: 250px;
                    height: 250px;
                    overflow: hidden;
                    position: relative;
                    border-radius: 15px;
                    margin-bottom: 10px;
                    .team-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 15px;
                        position: relative;
                    }
                    .team-label {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        
                        // background-color: #606060;
                        // background: #606060 0% 0% no-repeat padding-box;
                        backdrop-filter: blur(15px);
                        color: #ffffff;
                        font-size: 25px;
                        font-weight: 500;
                        text-align: center;
                        padding: 23px 0;
                    }
                }
            }

        }
        .lee-img-wrapper2 {
            display: none;
        }
    }

}

@media (max-width: 890px) {
    .section-team {
        flex-direction: column;
        height: 1250px;
        padding: 10rem 1rem;

        .team-header {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 38px;
        }
        .team-header2 {
            color: #FFFFFF;
            font-weight: 400;
            font-size: 14px;
        }
        .team-header2-point {
            color: #057FFC;
        }
        .team-left {
            display: none;
        }

        .team-right {
            align-items: end;
            justify-content: center;
            width: 100%;
            height: 100%;
            .team-right-top {
                width: 100%;
                text-align: right;
                padding-right: 0rem;
            }    
            .team-right-body {
                margin-top: 100px;
                .team-item {
                    width: 200px;
                    height: 200px;

                    .team-img-wrapper {
                        width: 200px;
                        height: 200px;
                        border-radius: 18px;
                        margin-bottom: 10px;
                        .team-img {
                            border-radius: 18px;
                        }
                        .team-label {
                            font-size: 18px;
                            font-weight: 500;
                            padding: 20px 0;
                        }
                    }
                }
            }
            .lee-img-wrapper2 {
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: center;
                position: relative; 
                width: 350px;
                height: 367px;
                overflow: hidden;
                margin-bottom: 10px;
                .auth-img {
                    width: 50%;
                    z-index: 2;
                    position: absolute;
                    top: 20%;  
                    left: 0px;  
                    object-fit: cover;
                    z-index: 2;
                    border-radius: 0px;
                }
                .lee-img {
                    width: 255px;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 15px;
                    position: relative;
                    z-index: 1; 
                }
                .lee-label {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 255px;
                    background-color: rgba(255, 255, 255, 0);
                    color: #CCCCCC;
                    font-size: 15px;
                    font-weight: 500;
                    text-align: center;
                    padding: 30px 50px;
                    z-index: 1; 
                }
            }
        }

    }

}
</style>

