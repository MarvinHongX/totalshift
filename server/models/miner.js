const getScoreById = async (minerId) => {
    const config  = useRuntimeConfig();
    
    const apiBase = config.apiBase2;
    const url = `${apiBase}/${minerId}`;
    const response = await $fetch(url);
    return response;
}

const getPowerById = async (minerId) => {
    try {
        const config = useRuntimeConfig();
        const apiBase = config.apiBase;

        const rpcUrl = `${apiBase}/rpc/v0`;
        const rpcMethod = "Filecoin.StateMinerPower";

        // const cids = await getCids();
        const cids = null;
        // if (!cids) {
        //     throw new Error('CIDs not found or invalid');
        // }

        const rpcParams = [
            minerId,
            cids
        ];

        const response = await rpcRequest(rpcUrl, rpcMethod, rpcParams);
        if (!response || !response.result) {
            throw new Error('Invalid response from the RPC request');
        }
        return response;

    } catch (error) {
        console.error('Error in getPowerById:', error.message);
        return null;
    }
}

const getBalanceById = async (minerId) => {
    try {
        const config = useRuntimeConfig();
        const apiBase = config.apiBase;

        const rpcUrl = `${apiBase}/rpc/v0`;
        const rpcMethod = "Filecoin.WalletBalance";

        const rpcParams = [
            minerId
        ];

        const response = await rpcRequest(rpcUrl, rpcMethod, rpcParams);

        if (!response || !response.result) {
            throw new Error('Invalid response from the RPC request');
        }

        return response;

    } catch (error) {
        console.error('Error in getBalanceById:', error.message);
        return null;
    }
}

const getCids = async () => {
    const config  = useRuntimeConfig();
    
    const apiBase = config.apiBase;

    const rpcUrl = `${apiBase}/rpc/v0`;
    let rpcMethod = "Filecoin.ChainHead";
    const rpcParams = [];
    const response = await rpcRequest(rpcUrl, rpcMethod, rpcParams);

    return response.result && response.result.Cids ? response.result.Cids : null;
}

const rpcRequest = async (url, method, params) => {
    const body = {
        jsonrpc: "2.0",
        id: "1",
        method: method,
        params: params
    };

    return await $fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export { getScoreById, getPowerById, getBalanceById }