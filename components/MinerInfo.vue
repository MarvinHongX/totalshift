<script setup>
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
            <div class="filecoinnode-tabitem mb-7">
                <div class="filecoinnode-tabitem-left">
                    <div class="filecoinnode-header5 mb-3">
                        <span>Address Balance</span>
                    </div>
                    <div class="filecoinnode-header6 mb-3">
                        <span>{{ convertToFil(props.item.balance.balance) }} FIL</span>
                    </div>
                    <div class="filecoinnode-header5 mb-3">
                        <span>Available Balance : {{ convertToFil(props.item.balance.availableBalance) }} FIL</span>
                    </div>  
                    <div class="filecoinnode-header5">
                        <span>Initial Pledge: {{ convertToFil(props.item.balance.sectorPledgeBalance) }} FIL</span>
                        
                    </div>  
                </div>
                <div class="filecoinnode-tabitem-center">
                    <div class="filecoinnode-header5 mb-3">
                        <span>Adjusted Power</span>
                    </div>
                    <div class="filecoinnode-header6 mb-3">
                        <span >{{ bytesToPiB(props.item.power.qualityAdjPower) }} PiB</span>
                    </div>
                    <div class="filecoinnode-header5">
                        <span>Raw Byte Power: {{ bytesToPiB(props.item.power.rawBytePower) }} PiB</span>
                    </div>  
                </div>
                <div class="filecoinnode-tabitem-right">
                    <div class="flex flex-row align-items-end">
                        <span class="filecoinnode-header8 mr-3 mb-1">Score</span>
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
    padding: 2rem;
    height: 410px;
    background-color:#1C1C1C;
}
.filecoinnode-tabitems {
    background-color:#1C1C1C;
}

.filecoinnode-tabitem {
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    height: 326px;
}
.filecoinnode-tabitem-left {
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: start;
    width: 450px;
    height: 100%;
    padding: 4rem 0rem 0rem 3.5rem;
}
.filecoinnode-tabitem-center {
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: start;
    width: 450px;
    height: 100%;
    background-color: #1C1C1C;
    border-left: 1px solid #707070;
    padding: 4rem 0rem 0rem 6rem;
}
.filecoinnode-tabitem-right {
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    
    width: 450px;
    height: 100%;
    background-color: #1C1C1C;
    padding: 3rem;
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
@media (max-width: 890px) {
    .miner {
        width: 100%;
        border: 1px solid;
    }
    .filecoinnode-tabitems-wrapper {
        padding: 1rem;
        height: 636px;
        background-color:#1C1C1C;
    }
    .filecoinnode-tabitems {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color:#1C1C1C;
    }

    .filecoinnode-tabitem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 616px;
    }
    .filecoinnode-tabitem-left {
        width: 100%;
        height: 308px;
        padding: 2rem;
    }
    .filecoinnode-tabitem-center {
        width: 100%;
        height: 308px;
        flex-direction: column;
        border-top: 1px solid #707070;
        border-left: 0px;
        padding: 2rem;
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
        font-size: 15px;
    }
    .filecoinnode-header6 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 27px;
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
}

</style>