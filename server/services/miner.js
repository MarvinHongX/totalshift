import { getScoreById, getPowerById, getBalanceById } from "@/server/models/miner";

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



export { minerScore, minerPower, minerBalance }