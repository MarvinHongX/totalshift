<script setup>
const { filfoxBtnUrl } = useImg();
const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

</script>
<template>
    <div class="filecoinnode-tabitems-wrapper">
        <div class="filecoinnode-tabitems">
            <div class="filecoinnode-tabitem">
                <div class="filecoinnode-tabitem-left">
                    <div class="filecoinnode-header5">
                        <span>Address Balance</span>
                    </div>
                    <div class="filecoinnode-header6">
                        <span>{{ convertToFil(props.item.balance.balance) }} FIL</span>
                    </div>
                    <div class="filecoinnode-header5">
                        <span>Available Balance : {{ convertToFil(props.item.balance.availableBalance) }} FIL</span>
                    </div>  
                    <div class="filecoinnode-header5">
                        <span>Initial Pledge: {{ convertToFil(props.item.balance.sectorPledgeBalance) }} FIL</span>
                    </div>  
                    <a :href="props.item.filfoxMinerHref" target="_blank" class="filecoinnode-link filecoinnode-display">
                        <div class="filfox-img-wrapper">
                            <img :src="filfoxBtnUrl" alt="filecoin" class="filfox-img" />
                        </div>
                    </a>
                </div>
                <div class="filecoinnode-tabitem-center">
                    <div class="filecoinnode-header5">
                        <span>Adjusted Power</span>
                    </div>
                    <div class="filecoinnode-header6">
                        <span >{{ bytesToPiB(props.item.power.qualityAdjPower) }} PiB</span>
                    </div>
                    <div class="filecoinnode-header5">
                        <span>Raw Byte Power: {{ bytesToPiB(props.item.power.rawBytePower) }} PiB</span>
                    </div>  
                    <div class="filecoinnode-display align-items-end" style="height: 75px">
                        <span class="filecoinnode-header">
                            {{ props.item.score }}
                        </span>
                        <span class="filecoinnode-header9">Score</span>
                    </div>
                </div>
                <div class="filecoinnode-tabitem-right">
                    <div class="flex flex-row align-items-end">
                        <span class="filecoinnode-header8 mr-3 mb-2">Score</span>
                        <span class="filecoinnode-header7">
                            {{ props.item.score }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.miner {
    width: 100%;
    border: 1px solid;
}
.filecoinnode-tabitems-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color:#1C1C1C;
}
.filecoinnode-tabitems {
    display: flex;
    flex-direction: row; 
    background-color:#1C1C1C;
    height: 280px;
}

.filecoinnode-tabitem {
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding: 1.5rem 0rem;
    height: 280px;
}
.filecoinnode-tabitem-left {
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: space-between;
    width: 320px;
    height: 100%;
    padding: 2.2rem 0rem 3.5rem 1.5rem;
}
.filecoinnode-tabitem-center {
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: space-between;
    width: 320px;
    height: 100%;
    background-color: #1C1C1C;
    border-left: 1px solid #707070;
    padding: 2.5rem 0rem 6rem 4rem;
}
.filecoinnode-tabitem-right {
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    
    width: 320px;
    height: 100%;
    background-color: #1C1C1C;
    // padding: 3rem;
}
.filecoinnode-header5 {
    color: #EEEEEE;
    font-weight: 400;
    font-size: 18px;
}
.filecoinnode-header6 {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 25px;
}
.filecoinnode-header7 {
    color: #EEEEEE;
    font-weight: 600;
    font-size: 70px;
}
.filecoinnode-header8 {
    color: #999999;
    font-weight: 600;
    font-size: 30px;
}
.filecoinnode-header9 {
    color: #999999;
    font-weight: 600;
    font-size: 22px;
}
.filecoinnode-display {
    display: none;
}
@media (max-width: 1350px) {
    .miner {
        width: 100%;
        border: 1px solid;
    }
    .filecoinnode-tabitems-wrapper {
        width: 100%;
        min-width: 280px;
        padding: 1rem;
        height: 550px;
        background-color:#1C1C1C;
    }
    .filecoinnode-tabitems {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color:#1C1C1C;
    }

    .filecoinnode-tabitem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .filecoinnode-tabitem-left {
        width: 100%;
        height: 100%;
        padding: 0rem 0rem 1rem 2rem;
    }
    .filecoinnode-tabitem-center {
        width: 100%;
        height: 100%;
        flex-direction: column;
        border-top: 1px solid #707070;
        border-left: 0px;
        padding: 2rem 0rem 1rem 2rem;
    }
    .filecoinnode-tabitem-right {
        display: none;
    }
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
        font-size: 90px;
    }
    .filecoinnode-header4-point {
        color: #42C1CA;
        font-weight: 500;
        font-size: 50px;
    }
    .filecoinnode-header5 {
        color: #EEEEEE;
        font-weight: 400;
        font-size: 12px;
    }
    .filecoinnode-header6 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 22px;
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
    .filecoinnode-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        text-decoration: none;
        color: inherit;
        font-size: 8px;
    }
    .filfox-img-wrapper {
        width: 89px;
        height: 39px;
        border-radius: 5px;
        margin-top: 10px;
        .filfox-img {
            width: 80%;
            height: 80%;
        }
    }
    .filecoinnode-display {
        display: flex;
    }
}

</style>