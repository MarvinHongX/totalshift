<script setup>
const { leeUrl, teamAUrl, teamBUrl, teamCUrl, teamDUrl, authAUrl } = useImg();

const isHovering = ref(false);

const teamItems = ref([
    { imgUrl: teamAUrl, label: '기술팀' },
    { imgUrl: teamBUrl, label: '기획팀' },
    { imgUrl: teamCUrl, label: '개발팀' },
    { imgUrl: teamDUrl, label: '영업지원팀' }
]);


onMounted(() => {
    const container = document.querySelector('.team-right-body');

    container.addEventListener('mouseover', () => {
        isHovering.value = true;
    });

    container.addEventListener('mouseout', () => {
        isHovering.value = false;
    });

    container.addEventListener('wheel', (event) => {
        if (isHovering.value) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        }
    });
});

</script>
<template>
    <FullCard class="section-team">
        <div class="team-left">
            <div class="lee-wrapper">
                <NuxtImg format="webp" loading="lazy" :src="leeUrl" alt="lee" class="lee-img" />
                <span class="lee-label">연구소장 이영모</span>
                <NuxtImg format="webp" loading="lazy" :src="authAUrl" alt="authA" class="auth-img" />
            </div>
        </div>
        <div class="team-right">
            <div class="team-right-top mb-8">
                <div class="team-header2 mb-4">
                    <span>Team</span>
                </div>
                <div class="team-header mb-4">
                    <span>최고의 팀을 만들다</span>
                </div>
                <div class="team-header2 mb-2">
                    <span>전문성을 가진 </span><span class="team-point">경력있는 팀을 형성하여</span>
                </div>
                <div class="team-header2 mb-2">
                    <span>시너지를 높이 끌어올립니다.</span>
                </div>
            </div>
            <div class="lee-wrapper2">
                <NuxtImg format="webp" loading="lazy" :src="leeUrl" alt="lee" class="lee-img" />
                <span class="lee-label">연구소장 이영모</span>
                <NuxtImg format="webp" loading="lazy" :src="authAUrl" alt="authA" class="auth-img" />
            </div>
            <div class="team-right-body">
                <div v-for="(item, index) in teamItems" :key="index" class="team-item mr-4">
                    <div class="team-img-wrapper">
                        <NuxtImg format="webp" loading="lazy" :src="item.imgUrl" :alt="'team' + index" class="team-img" />
                        <span class="team-label">{{ item.label }}</span>
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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1050px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
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
    .team-point {
        color: #057FFC;
    }
    .team-left {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: end;
        width: 600px; 
        height: 800px;
        .lee-wrapper {
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: center;
            position: relative; 
            width: 100%;
            height: 532px;
            overflow: hidden;
            margin-bottom: 10px;
            padding-right: 3rem;
            .auth-img {
                width: 45%;
                z-index: 2;
                position: absolute;
                top: 15%;  
                left: -10px;  
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
                margin-right: 3rem;
                z-index: 1; 
            }
        }
    }

    .team-right {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
        width: calc(100% - 600px);
        height: 800px;
        .team-right-top {
            display: flex;
            flex-direction: column;
            align-items: end;
            width: 100%;
            text-align: right;
            padding-right: 3rem;
        }    
        .team-right-body {
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: start;
            width: 100%;
            height: 280px;
            // min-width: 600px;
            overflow-x: auto;
            .team-item {
                display: flex;
                flex-direction: column;
                width: 250px;
                height: 250px;
                color: #FFFFFF;
                font-weight: 500;
                font-size: 18px;
                flex-shrink: 0;
                .team-img-wrapper {
                    display: flex;
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

        .team-right-body::-webkit-scrollbar {
            // width: 20px;
            height: 4px;
        }
        .team-right-body::-webkit-scrollbar-thumb {
            background: rgba(255,255,255);
            border-radius: 10px;
        }
        .team-right-body::-webkit-scrollbar-track {
            background-color:#3B3B3B;
        }
        .lee-wrapper2 {
            display: none;
        }
    }

}
@media (max-width: 1350px) {
    .section-team {
        padding: 0rem 1rem;
        .team-header {
            font-weight: 600;
            font-size: 35px;
        }
        .team-header2 {
            font-size: 16px;
        }
        .team-left {
            width: 500px; 
            height: 700px;
            .lee-wrapper {
                height: 450px;
                .auth-img {
                    top: 30%;  
                    left: -5px;
                }
                .lee-img {
                    width: 320px;
                }
                .lee-label {
                    position: absolute;
                    width: 320px;
                }
            }
        }
        .team-right {
            height: 700px;
            .team-right-body {
                height: 280px;
            }
            .lee-wrapper2 {
                display: none;
            }
        }

    }
}

@media (max-width: 1050px) {
    .section-team {
        flex-direction: column;
        height: 1250px;
        padding: 0rem 9rem;

        .team-header {
            font-weight: 600;
            font-size: 38px;
        }
        .team-header2 {
            font-weight: 400;
            font-size: 14px;
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
                height: 230px;
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
            .lee-wrapper2 {
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
@media (max-width: 665px) {
    .section-team {
        padding: 0rem 3rem;

    }

}
</style>

