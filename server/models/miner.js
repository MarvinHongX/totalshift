const getScoreById = async (minerId) => {
    const config  = useRuntimeConfig();
    
    const apiBase = config.apiBase2;
    const url = `${apiBase}/${minerId}`;
    const response = await $fetch(url);
    return response;
}

const getPowerById = async (minerId) => {
    const config  = useRuntimeConfig();
    
    const apiBase = config.apiBase;
    const url = `${apiBase}/${minerId}/power-stats`;
    const response = await $fetch(url);
    return response;
}

const getBalanceById = async (minerId) => {
    const config  = useRuntimeConfig();
    
    const apiBase = config.apiBase;
    const url = `${apiBase}/${minerId}/balance-stats`;
    const response = await $fetch(url);
    return response;
}

export { getScoreById, getPowerById, getBalanceById }