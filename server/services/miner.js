import { getScoreById, getPowerById, getBalanceById, getTimestamps } from "@/server/models/miner";

const minerScore = async (minerId) => {
    if (!minerId || minerId == '') return false;
    const score = await getScoreById(minerId);

    return score;
};

const minerPower = async (minerId) => {
    if (!minerId || minerId == '') return false;
    const power = await getPowerById(minerId);
    
    return power;
};

const minerBalance = async (minerId) => {
    if (!minerId || minerId == '') return false;
    const balance = await getBalanceById(minerId);

    return balance;
};

const timestamp = async () => {
    const timestamp = await getTimestamps();

    return timestamp;
};



export { minerScore, minerPower, minerBalance, timestamp }