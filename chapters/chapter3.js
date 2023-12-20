import { sdjClient } from "sdj";
import dotenv from "dotenv";
const client = new sdjClient();
dotenv.config();

const catchMessage = async message=>{
    if(message.content === "!omikuzi"){
        const result = omikuzi();
        await client.sendMessage(message.channel,`今日の運勢は${result}です！`);
    }
}

function omikuzi(){
    const omikuzi = ["大吉","中吉","小吉","吉","凶","大凶"];
    return omikuzi[Math.floor(Math.random() * omikuzi.length)];
}

async function Chapter3() {
    await client.build(process.env.TOKEN);

    await client.listenOnEvent('messageCreate',message);
}

Chapter3();
