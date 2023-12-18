import { sdjClient } from "sdj";
import dotenv from "dotenv";

dotenv.config();
const client = new sdjClient();

const message = async message=>{
    if(message.content === "!omikuzi"){
        await client.sendMessage(message.channel,`今日の運勢は大吉です！`);
    }
}

async function Chapter2() {
    await client.build(process.env.TOKEN);

    await client.listenOnEvent('messageCreate',message);
}

Chapter2();