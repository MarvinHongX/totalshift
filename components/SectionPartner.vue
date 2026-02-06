<script setup>
import { ref } from 'vue';
const { ktUrl, seagateUrl, protocolLabsUrl, ipfsUrl, filecoinUrl, kidcUrl, aleoUrl } = useImg();

const items = ref([
    { name: 'kt', url: ktUrl },
    { name: 'seagate', url: seagateUrl },
    { name: 'protocolLabs', url: protocolLabsUrl },
    { name: 'ipfs', url: ipfsUrl },
    // { name: 'filecoin', url: filecoinUrl },
    { name: 'kidc', url: kidcUrl },
    // { name: 'aleo', url: aleoUrl },
]);
</script>
<template>
    <FullCard class="section-partner">
        <div class="partner-header mb-4">
            <span>PARTNER & CLIENT</span>
        </div>
        <div class="partner-header2">
            <span>다양한 파트너와</span>
        </div>
        <div class="partner-header2">
            <span>앞으로의 성장을 함께합니다.</span>
        </div>
        <div class="partner-separator"></div>
        <div class="partner-items-wrapper">
            <div class="partner-items">
                <div class="partner-item" v-for="(item, index) in items" :key="index">
                    <NuxtImg :src="item.url" :alt="item.name" />
                </div>
            </div>
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-partner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 825px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    background-color: #FFFFFF;
    .partner-header {
        font-weight: 700;
        font-size: 28px;
        color: #354082;
    }
    .partner-header2 {
        font-weight: 800;
        font-size: 56px;
        color: #333333;
    }
    .partner-items-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 85%;
        height: 100px;
        overflow: hidden;
    }
    .partner-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 65%;
        animation: moveItems 20s linear infinite;
        .partner-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 500px; 
            height: 100%;
            margin: 0 2rem;
            // width: 100%;
            // overflow: hidden; 
        }
        .partner-item > img {
            height: 100%;
            width: auto; 
        }
    }

    @keyframes moveItems {
        0% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
        }
        100% {
            -webkit-transform: translateX(-150%);
            transform: translateX(-150%);
        }
    }

    .partner-separator {
        height: 1.5px;
        width: 85%;
        background-color: #707070;
        margin: 6.5rem 0 3rem 0;
    }
}
@media (max-width: 1350px) {
    .section-partner {
        height: 525px;
        padding: 0rem 1rem;
        .partner-header {
            font-size: 12px;
        }
        .partner-header2 {
            font-size: 25px;
        }
        .partner-separator {
            height: 1px;
            width: 75%;
            margin: 2.5rem 0 3rem 0;
        }
        .partner-items-wrapper {
            width: 75%;
        }
        .partner-items {
            height: 50%;
            animation: moveItems 20s linear infinite;
            .partner-item {
                margin: 0 1rem;
            }
        }

        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-120%);
                transform: translateX(-120%);
            }
        }
    }

}
@media (max-width: 1000px) {
    .section-partner {
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-160%);
                transform: translateX(-160%);
            }
        }
    }
}
@media (max-width: 850px) {
    .section-partner {
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-185%);
                transform: translateX(-185%);
            }

        }
    }
}
@media (max-width: 750px) {
    .section-partner {
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-190%);
                transform: translateX(-190%);
            }
        }
    }
}
@media (max-width: 650px) {
    .section-partner {
        height: 465px;
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-260%);
                transform: translateX(-260%);
            }
        }
    }
}
@media (max-width: 550px) {
    .section-partner {
        height: 425px;
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-300%);
                transform: translateX(-300%);
            }
        }
    }
}
@media (max-width: 460px) {
    .section-partner {
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-340%);
                transform: translateX(-340%);
            }
        }
    }
}
@media (max-width: 400px) {
    .section-partner {
        height: 425px;
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-360%);
                transform: translateX(-360%);
            }
        }
    }
}
@media (max-width: 320px) {
    .section-partner {
        height: 425px;
        @keyframes moveItems {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-460%);
                transform: translateX(-460%);
            }
        }
    }
}
</style>