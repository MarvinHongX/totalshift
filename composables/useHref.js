export const useHref = () => {
    const defiHref = computed(() => {
        return `https://tsdefi.com`;
    });
    const youtubeHref = computed(() => {
        return `https://www.youtube.com/@FIL-ALEO`;
    });
    const skyzoneHref = computed(() => {
        return `https://theskyzone.net`;
    });
    const aleotrackHref = computed(() => {
        return `https://www.aleotrack.com`;
    });
    const aleocatHref = computed(() => {
        return `https://aleocat.com`;
    });
    const explorerHref = computed(() => {
        return `https://www.filutils.com`;
    });
    const filswanHref = computed(() => {
        return `https://console.filswan.com`;
    });
    const ipfsIntroHref = computed(() => {
        return `https://ipfs.tech`;
    });
    const ipfsDocsHref = computed(() => {
        return `https://docs.ipfs.tech`;
    });
    const ipfsNewsHref = computed(() => {
        return `https://blog.ipfs.tech`;
    });    
    const filecoinDocsHref = computed(() => {
        return `https://docs.filecoin.io`;
    });
    const filecoinCryptoEconomicsHref = computed(() => {
        return `https://docs.filecoin.io/basics/what-is-filecoin/crypto-economics`;
    });
    const filecoinBlockchainHref  = computed(() => {
        return `https://docs.filecoin.io/basics/what-is-filecoin/blockchain`;
    });
    const aleoIntroHref = computed(() => {
        return `https://aleo.org`;
    });
    const aleoDocsHref = computed(() => {
        return `https://developer.aleo.org`;
    });
    const aleoBlogHref = computed(() => {
        return `https://aleo.org/blog`;
    });

    return {
        defiHref,
        youtubeHref,
        skyzoneHref,
        aleotrackHref,
        aleocatHref,
        explorerHref,
        filswanHref,
        ipfsIntroHref,
        ipfsDocsHref,
        ipfsNewsHref,
        filecoinDocsHref,
        filecoinCryptoEconomicsHref,
        filecoinBlockchainHref,
        aleoIntroHref,
        aleoDocsHref,
        aleoBlogHref,
    };
};

