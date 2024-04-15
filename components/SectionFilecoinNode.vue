<script setup>
import { ref, onBeforeMount } from 'vue';
const { filecoin2Url, filecoinBackgroundUrl } = useImg();
const { filfoxHref, filswanHref } = useHref();
const loading =ref(true);
const tabItems = ref([
    { name: 'f01115949', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01115949' },
    { name: 'f01770778', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01770778' },
    { name: 'f01900525', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01900525' },
    { name: 'f01924824', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01924824' },
    { name: 'f01927163', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01927163' },
    { name: 'f01924891', score: null, power: null, balance: null, filfoxMinerHref: 'https://filfox.info/en/address/f01924891' },
]);

const getScore = async (minerId) => {
    // return 96;
    try {
        const response = await $fetch('/api/miner/score', {
            method: 'POST',
            body: minerId,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        const scoreData = response.data;
        return scoreData.miner.score || 96;
    } catch (error) {
        console.error('Error fetching score:', error);
        return 96;
    }
};
const getPower = async (minerId) => {
    try {
        const response = await $fetch('/api/miner/power', {
            method: 'POST',
            body: minerId,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        const powerData = response;
        const lastPowerInfo = powerData[powerData.length - 1];

        const extractedInfo = {
            height: lastPowerInfo.height,
            timestamp: lastPowerInfo.timestamp,
            rawBytePower: lastPowerInfo.rawBytePower,
            qualityAdjPower: lastPowerInfo.qualityAdjPower
        };

        return extractedInfo;
    } catch (error) {
        console.error('Error fetching power:', error);
        return null;
    }
};

const getBalance = async (minerId) => {
    try {
        const response = await $fetch('/api/miner/balance', {
            method: 'POST',
            body: minerId,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        const balanceData = response;
        const lastBalanceInfo = balanceData[balanceData.length - 1];

        const extractedInfo = {
            height: lastBalanceInfo.height,
            timestamp: lastBalanceInfo.timestamp,
            balance: lastBalanceInfo.balance,
            availableBalance: lastBalanceInfo.availableBalance,
            sectorPledgeBalance: lastBalanceInfo.sectorPledgeBalance,
            vestingFunds: lastBalanceInfo.vestingFunds

        };

        return extractedInfo;
    } catch (error) {
        console.error('Error fetching balance:', error);
        return null;
    }
};

onBeforeMount(async () => {
    const scorePromises = tabItems.value.map(tab => getScore(tab.name));
    const powerPromises = tabItems.value.map(tab => getPower(tab.name));
    const balancePromises = tabItems.value.map(tab => getBalance(tab.name));

    const scores = await Promise.all(scorePromises);
    const powers = await Promise.all(powerPromises);
    const balances = await Promise.all(balancePromises);

    tabItems.value = tabItems.value.map((item, index) => ({
        ...item,
        score: scores[index],
        power: powers[index],
        balance: balances[index],
    }));
    loading.value = false;
});
</script>
<template>
    <FullCard v-if="!loading" class="section-filecoinnode">
        <div class="filecoinnode-header mb-1">
            <span>Total Shift</span>
        </div>
        <div class="filecoinnode-header mb-4">
            <span>Filecoin Node</span>
        </div>
        <div class="filecoinnode-header2 mb-6">
            <span>(주) 토탈쉬프트 파일코인 노드 운영현황</span>
        </div>
        <div class="filecoinnode-header2 filecoinnode-none mb-1">
            <span>Update: {{ formatTimestampYYYYMMDDHHMMSS(tabItems[0].balance.timestamp) }}</span>
        </div>
        <div class="filecoinnode-item mb-7">
            <div class="filecoinnode-item-left" :style="{ backgroundImage: `url(${filecoinBackgroundUrl})` }">
                <div class="filecoinnode-img-wrapper">
                    <NuxtImg format="webp" loading="lazy" :src="filecoin2Url" alt="filecoin2" class="filecoinnode-img" />
                </div>
            </div>
            <div class="filecoinnode-item-center">
                <div class="filecoinnode-center-top">
                    <div class="filecoinnode-header5">
                        Total Adjusted Power
                    </div>
                    <div class="flex flex-row align-items-end">
                        <span v-if="tabItems" class="filecoinnode-header3-point">
                            {{
                                tabItems.length > 0 
                                    ? bytesToPiB(tabItems.reduce((acc, tab) => acc + (parseFloat(tab.power?.qualityAdjPower || 0)), 0))
                                    : '0.00'
                            }}
                        </span>
                        <span class="filecoinnode-header4-point">PiB</span>
                    </div>
                </div>
                <div class="filcoinnode-link-wrapper filecoinnode-header2">
                    <a :href="filfoxHref" target="_blank" class="filecoinnode-link">
                        <span>filfox.io</span>
                    </a>
                </div>                  
            </div>
            <div class="filecoinnode-item-right">
                <div class="flex flex-column align-items-center justify-content-end">
                    <div class="filecoinnode-header5">
                        Average Score
                    </div>
                    <div class="flex flex-row align-items-end">
                        <span v-if="tabItems" class="filecoinnode-header3-point">
                            {{
                                tabItems.length > 0 
                                    ? (tabItems.reduce((acc, tab) => acc + (tab.score || 0), 0) / tabItems.length).toFixed(2)
                                    : '0.00'
                            }}
                        </span>
                    </div>
                </div>
                <div class="filcoinnode-link-wrapper filecoinnode-header2">
                    <a :href="filswanHref" target="_blank" class="filecoinnode-link">
                        <span>console.filswan.com</span>
                    </a>
                </div>                  
            </div>
        </div>
        <div v-if="tabItems" class="filecoinnode-tab flex flex-rows">
            <TabView2 :tabItems="tabItems" />
        </div>
    </FullCard>
</template>

<style lang="scss" scoped>
.section-filecoinnode {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 1300px;
    padding-top: 0rem;
    background-color: #070707;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: calc((100% - 1280px) / 2 );
    padding-right: calc((100% - 1280px) / 2 );
    .filecoinnode-header {
        color: #EEEEEE;
        font-weight: 700;
        font-size: 45px;
    }
    .filecoinnode-header-point {
        color: #42C1CA;
    }
    .filecoinnode-header2 {
        color: #EEEEEE;
        font-weight: 500;
        font-size: 18px;
    }
    .filecoinnode-header3-point {
        color: #42C1CA;
        font-weight: 500;
        font-size: 70px;
    }
    .filecoinnode-header4-point {
        color: #42C1CA;
        font-weight: 500;
        font-size: 35px;
    }
    .filecoinnode-header5 {
        color: #EEEEEE;
        font-weight: 400;
        font-size: 20px;
    }
    .filecoinnode-header6 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 35px;
    }
    .filecoinnode-header7 {
        color: #EEEEEE;
        font-weight: 600;
        font-size: 72px;
    }
    .filecoinnode-header8 {
        color: #999999;
        font-weight: 600;
        font-size: 40px;
    }
    .filecoinnode-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // width: 1000px;
        width: 100%;
        height: 280px;
    }
    .filecoinnode-item-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // width: 320px;
        width: 33%;
        height: 100%;
        
        background-color: #EEEEEE;
        margin-right: 2rem;
        padding: 2.5em;
    }
    .filecoinnode-item-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // width: 320px;
        width: 33%;
        height: 100%;
        background-color: #1C1C1C;
        margin-right: 2rem;
        padding-top: 2rem;
        .filecoinnode-center-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
        }
        .filcoinnode-link-wrapper  {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            .filecoinnode-link {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                text-decoration: none;
                color: inherit;
            }
        }
    }
    .filecoinnode-item-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // width: 320px;
        width: 33%;
        height: 100%;
        background-color: #1C1C1C;
        padding-top: 2rem;
        .filcoinnode-link-wrapper  {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            .filecoinnode-link {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                text-decoration: none;
                color: inherit;
            }
        }
    }

    .filecoinnode-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    .filecoinnode-img-wrapper {
        width: 291px;
        height: 97px;
        overflow: hidden;
    }
    .filecoinnode-tab {
        font-weight: 700;
        font-size: 20px;
        color: #EEEEEE;
        width: 100%;
        height: 360px;
    }

}
@media (max-width: 1350px) {
    .section-filecoinnode {
        justify-content: start;
        height: 1100px;
        padding: 6rem 1rem;
        .filecoinnode-none {
            display: none;
        }
        .filecoinnode-header {
            font-size: 24px;
        }
        .filecoinnode-header2 {
            font-size: 12px;
        }
        .filecoinnode-header3-point {
            font-weight: 500;
            font-size: 24px;
        }
        .filecoinnode-header4-point {
            font-size: 14px;
        }
        .filecoinnode-header5 {
            font-size: 10px;
        }
        .filecoinnode-items {
            background-color:#1C1C1C;
        }
        .filecoinnode-item {
            // align-items: start;
            justify-content: start;
            width: 100%;
            // width: 325px;
            height: 150px;
        }
        .filecoinnode-item-left {
            display: none;
        }
        .filecoinnode-item-center {
            justify-content: space-evenly;
            // width: 175px;
            width: 48%;
            height: 100%;
            margin-right: 1rem;
            padding-top: 1rem;
        }
        .filecoinnode-item-right {
            justify-content: space-evenly;
            // width: 175px;
            width: 48%;
            padding-top: 1rem;
            .filcoinnode-link-wrapper  {
                .filecoinnode-link {
                    font-size: 8px;
                }
            }
        }
        .filecoinnode-tab {
            font-size: 25px;
            height: 600px;
        }
    }
}
</style>

