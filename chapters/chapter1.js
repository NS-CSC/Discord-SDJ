import { sdjClient } from "sdj";
import dotenv from "dotenv";
const client = new sdjClient();
dotenv.config();

async function Chapter1() {
    await client.build(process.env.TOKEN);
    
    const channel = await client.getChannel(process.env.ChannelId);
    await client.sendMessage(channel,"Hello World!");
}

Chapter1();