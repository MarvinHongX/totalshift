import { minerBalance } from "@/server/services/miner";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const response = await minerBalance(body);
    return response;
});