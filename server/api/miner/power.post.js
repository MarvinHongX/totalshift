import { minerPower } from "@/server/services/miner";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const response = await minerPower(body);
    return response;
});