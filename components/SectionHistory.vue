<script setup>
import { ref } from 'vue';

const { historyLogUrl, authBUrl } = useImg();

const events = ref([
    { year: '2020', 
        content: [
            { month: '10', detail: '(주)필데이타 법인 설립' },
        ],
        class: 'timeline-event flex flex-row mb-1',
    },
    { year: '2021', 
        content: [
            { month: '03', detail: 'NICE평가정보 기술평가 우수기업 선정' },
            { month: '08', detail: '가산 지식산업센터 IDC 구축' },
        ],
        class: 'timeline-event flex flex-row mb-1',
    },
    { year: '2022', 
        content: [
            { month: '04', detail: '법인명 변경 (주)토탈쉬프트(Total Shift)' },
            { month: '05', detail: '클라우드 서비스 The Sky Zone 오픈' },
            { month: '06', detail: 'IDC 구축 및 확산 프로젝트' },
            { month: '08', detail: '(주)토탈쉬프트 기업부설연구소 설립' },
        ],
        class: 'timeline-event flex flex-row mb-1',
    },
    { year: '2023', 
        content: [
            { month: '05', detail: 'Aleo Proving Center 구축(경기도 안성)' },
            { month: '07', detail: 'Aloe 익스플로러(aleotrack.com) 개발' },
            { month: '09', detail: '한국IPFS발전협동조합 이사회 참여' },
        ],
        class: 'timeline-eventEnd flex flex-row mb-1',
    },
    
]);
</script>


<template>
<FullCard class="section-history">
    <div class="history-auth">
        <div class="auth-wrapper">
            <NuxtImg format="webp" loading="lazy" :src="authBUrl" alt="authB" class="auth-img mb-4" />
            <div class="auth-header mb-1">
                <span>도전의 시작을 알리다.</span>
            </div>
            <div class="auth-header">
                <span class="auth-point">기술평가 우수기업 인증서</span>
                <span> 입니다.</span>
            </div>
        </div>
    </div>

    <div class="history-timeline">
        <div class="timeline-logo-wrapper">
            <img loading="lazy" class="timeline-logo" :src="historyLogUrl" alt="historyLog" />
        </div>
        <div v-for="event in events" :key="event.year" :class="event.class">
            <div class="timeline-event-left">
                <div class="timeline-marker"></div>
            </div>
            <div class="timeline-event-right">    
                <div class="event-right-year">{{ event.year }}</div>
                <div class="event-right-content">
                    <div v-for="item in event.content" :key="item.month" class="mb-2">
                        <div>
                            <span class="event-right-month">
                                · {{ item.month }} 
                            </span>
                            <span class="event-right-detail">
                                {{ item.detail }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</FullCard>
</template>

<style lang="scss" scoped>
.section-history {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 1300px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    background-color: #111112;
    .history-auth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        .auth-wrapper {
            position: sticky;
            display: flex;
            flex-direction: column;
            width: 353px;
            overflow: hidden;
            padding: 8rem 0rem;
            top: 0;
            z-index: 4; 
            .auth-img {
                width: 100%;
                height: auto;
            }
            .auth-header {
                color: #EEEEEE;
            }
            .auth-point {
                color: #057FFC;
            }
        }
    }
    .history-timeline {
        display: flex;
        flex-direction: column;
        border-left: 1.4px solid #3E3E3E;
        width: 100%;
        .timeline-logo-wrapper {
            .timeline-logo {
                transform: translate(-50%, -73%);
            }
        }
        .timeline-event {
            padding-bottom: 8rem;
        }
        .timeline-eventEnd {
            padding-bottom: 0rem;
        }
        .timeline-event, .timeline-eventEnd {
            .timeline-event-left {
                width: 24px;
                border-top: 1.4px solid #3E3E3E;
                .timeline-marker {
                    position: relative;
                    top: 0%;
                    left: 0%;
                    transform: translate(-55%, -52%);
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: #37459B;
                }    
            }
            .timeline-event-right {
                padding-left: 25px;
                .event-right-year {
                    position: relative;
                    top: -20px;
                    font-weight: 800;
                    font-size: 30px;
                    color: #EEEEEE;
                }
                .event-right-month {
                    font-weight: 700;
                    font-size: 18px;
                    color: #A3A3A3;
                }
                .event-right-detail {
                    font-weight: 500;
                    font-size: 18px;
                    color: #A3A3A3;
                    padding-left: 15px;
                }
            }
        }
    }
}

@media (max-width: 1350px) {
    .section-history {
        flex-direction: column;
        height: 1600px;
        .history-auth {
            height: 700px;
            .auth-wrapper {
                width: 320px;
            }
        }
        .history-timeline {
            width: 70%;
            .timeline-event {
                padding-bottom: 5rem;
            }
            .timeline-eventEnd {
                padding-bottom: 0rem;
            }
        }
    }
}

@media (max-width: 530px) {
    .section-history {
        height: 1150px;
        .history-auth {
            height: 550px;
            .auth-wrapper {
                width: 240px;
            }
        }
        .history-timeline {
            width: 80%;
            .timeline-event, .timeline-eventEnd {
                .timeline-event-right {
                    padding-left: 15px;
                    .event-right-year {
                        position: relative;
                        top: -10px;

                        font-weight: 600;
                        font-size: 20px;
                        color: #EEEEEE;
                    }
                    .event-right-month {
                        font-weight: 500;
                        font-size: 12px;
                        color: #A3A3A3;
                    }
                    .event-right-detail {
                        font-weight: 400;
                        font-size: 12px;
                        color: #A3A3A3;
                        padding-left: 15px;
                    }
                }
            }
        }
    }
}
</style>
