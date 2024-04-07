<script setup>
import { ref } from 'vue';

const { historyLogUrl, authBUrl } = useImg();

const events = ref([
    { year: '2020', content: [
        { month: '10', detail: '(주)필데이타 법인 설립' },
    ]},
    { year: '2021', content: [
        { month: '03', detail: 'NICE평가정보 기술평가 우수기업 선정' },
        { month: '08', detail: '가산 지식산업센터 IDC 구축' },
    ]},
    { year: '2022', content: [
        { month: '04', detail: '법인명 변경 (주)토탈쉬프트(Total Shift)' },
        { month: '05', detail: '클라우드 서비스 The Sky Zone 오픈' },
        { month: '06', detail: 'IDC 구축 및 확산 프로젝트' },
        { month: '08', detail: '(주)토탈쉬프트 기업부설연구소 설립' },
    ]},
    { year: '2023', content: [
        { month: '05', detail: 'Aleo Proving Center 구축(경기도 안성)' },
        { month: '07', detail: 'Aloe 익스플로러(aleotrak.com) 개발' },
        { month: '09', detail: '한국IPFS발전협동조합 이사회 참여' },
    ]},
    
]);
</script>


<template>
<FullCard class="section-history">
    <div class="history-left">
        <div class="auth-img-wrapper">
            <img :src="authBUrl" alt="authB" class="auth-img mb-4" />
            <div class="auth-img-header mb-1">
                <span>도전의 시작을 알리다.</span>
            </div>
            <div class="auth-img-header">
                <span class="auth-img-header-point">기술평가 우수기업 인증서</span>
                <span> 입니다.</span>
            </div>
        </div>
    </div>

    <div class="history-timeline">
        <div class="timeline-logo">
            <img :src="historyLogUrl" alt="historyLog" />
        </div>
        <div v-for="event in events" :key="event.year" class="timeline-event flex flex-row mb-8">
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
    color: #ECECEC;
    background-color: #111112;
    padding: 10rem 0;
    width: 100%;
    height: 1700px;
    .history-left {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 45%;
        height: 100%;
        .auth-img-wrapper {
            display: flex;
            flex-direction: column;
            position: relative; 
            width: 353px;
            height: 100%;
            overflow: hidden;
            margin-bottom: 10px;
            position: sticky;
            top: 0;
            z-index: 4; 
            .auth-img {
                width: 100%;
                height: auto;
                
            }
            .auth-img-header {
                color: #EEEEEE;
            }
            .auth-img-header-point {
                color: #057FFC;
            }
        }
    }
    .history-timeline {
        display: flex;
        flex-direction: column;
        // background-color: white;
        border-left: 1.4px solid #3E3E3E;
        width: 50%;
        margin-left: 4rem;
        .timeline-logo > img {
            transform: translate(-50%, -73%);
        }
        .timeline-event {
            padding-bottom: 5rem;
            .timeline-event-left {
                width: 21px;
                height: 100%;
                border-top: 1.4px solid #3E3E3E;
            }
            .timeline-marker {
                position: relative;
                top: 50%;
                // left: 50%;
                transform: translate(-55%, -52%);
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #37459B;
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



@media (max-width: 890px) {
    .section-history {
        flex-direction: column;
        height: 2400px;
        .history-left {
            align-items: center;
            width: 100%;
            .auth-img-wrapper {
                height: 620px;
                .auth-img {
                    width: 100%;
                    height: auto;
                    
                }
                .auth-img-header {
                    color: #EEEEEE;
                }
                .auth-img-header-point {
                    color: #057FFC;
                }
            }
        }
        .history-timeline {
            width: 70%;
            margin-left: 0rem;
            .timeline-event {
                padding-bottom: 1rem;
                .timeline-marker {
                    position: relative;
                    top: 0%;
                    // left: 50%;
                    transform: translate(-55%, -52%);
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
}


@media (max-width: 530px) {
    .section-history {
        .history-left {
            .auth-img-wrapper {
                width: 303px;
            }
        }
        .history-timeline {
            width: 80%;
            .timeline-event {
                padding-bottom: 1rem;
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
