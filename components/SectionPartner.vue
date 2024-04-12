<script setup>
const { ktUrl, seagateUrl, protocolLabsUrl, ipfsUrl, filecoinUrl, kidcUrl, aleoUrl } = useImg();
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
        <div class="partner-items">
            <div class="item-group">
                <div class="partner-item mr-3">
                    <img loading="lazy" :src="ktUrl" alt="kt" />
                </div>
                <div class="partner-item">
                    <img loading="lazy" :src="seagateUrl" alt="seagate" />
                </div>
            </div>
            <div class="item-group">
                <div class="partner-item">
                    <img loading="lazy" :src="protocolLabsUrl" alt="protocolLabs"/>
                </div>
                <div class="partner-item">
                    <img loading="lazy" :src="ipfsUrl" alt="IPFS" />
                </div>
            </div>
            <div class="item-group">
                <div class="partner-item mr-3">
                    <img loading="lazy" :src="filecoinUrl" alt="filecoin" />
                </div>
                <div class="partner-item mr-4">
                    <img loading="lazy" :src="kidcUrl" alt="KIDC" />
                </div>
            </div>
            <div class="item-group">
                <div class="partner-item">
                    <img loading="lazy" :src="aleoUrl" alt="aleo" />
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
    .partner-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        .item-group {
            display: flex;
            flex-direction: row;
            align-items: center;   
            justify-content: between;  
            .partner-item {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: auto; 
                overflow: hidden; 
            }
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
        height: 825px;
        padding: 0rem 1rem;
        .partner-header {
            font-size: 12px;
        }
        .partner-header2 {
            font-size: 25px;
        }
        .partner-items {
            flex-direction: column;
            .item-group {
                width: 100%;
                height: auto;
                justify-content: start;
                margin-bottom: 30px;
                .partner-item {
                    width: 50%;
                    flex-direction: column;
                    justify-content: start;
                    height: auto; 
                }
            }
        }
        .partner-separator {
            height: 1px;
            width: 75%;
            margin: 2.5rem 0 3rem 0;
        }
    }

}
</style>