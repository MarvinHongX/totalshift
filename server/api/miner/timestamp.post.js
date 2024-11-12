import { timestamp } from "@/server/services/miner";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const response = await timestamp();
    return response;
});