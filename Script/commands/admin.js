const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
🅳︎🅾︎ 🅽︎🅾︎🆃︎ 🆃︎🆁︎🆄︎🆂︎🆃︎ 🆃︎🅷︎🅴︎ 🅱︎🅾︎🆃︎ 🅾︎🅿︎🅴︎🆁︎🅰︎🆃︎🅾︎🆁︎
--------------------------------------------
╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝ 

💖🌸ইসলামিক পরিচয় পর্ব 🌸💖 

- নাম    : TᗩᗰIᗰ  🅰︎🅷︎🅰︎🅼︎🅴︎🅳︎ 

-FB  : Tamim Bbz 
︵💚🌺🦋
●━━•*@𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞* 

--- 

🤗🥀 

●━━•*༅༎ Tamim Bbz (ছোট নবাব )---•☺️✌️ 

༅༎ლ ࿐🤍💖🌺 

- বর্তমান ঠিকানা  : 𝐍𝐢𝐦𝐬𝐡𝐚𝐫,𝐂𝐨𝐦𝐢𝐥𝐥𝐚 

- স্থায়ী ঠিকানা    : ℕ𝕚𝕞𝕤𝕙𝕒𝕣,ℂ𝕠𝕞𝕚𝕝𝕝𝕒 

- বয়স          : 𝐍/𝐀 

- GENDER       : 𝐌𝐚𝐥𝐞 

- উচ্চতা         : ℕ/𝔸 

- জন্ম তারিখ     :𝕂𝕠𝕚𝕥𝕒𝕞 𝕟𝕒 

- পেশা          : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 

- যোগ্যতা        :  𝙸𝚗𝚝𝚎𝚛 2nd 𝚢𝚎𝚊𝚛 end

- রিলেশন শিপ    : 𝐏𝐮𝐫𝐞  𝐒𝐢𝐧𝐠𝐥𝐞😢 

- প্রিয়জন        : 𝐌𝐚𝐚 / 𝐁𝐚𝐛𝐚❤️❤️ 

- প্রিয় রং        : 🅆🄷🄸🅃🄴 ⚫😇 

- প্রিয় খাবার      : 𝐅𝐢𝐬𝐡 ❤️❤️ 

- শখ            : ✨ধর্মীয় আলোচনা✨ ছবি দেখা✨ বই  পড়া✨ অনেক রাতে হাটতে যাওয়া✨ প্রিও মানুষ টাকে নিয়ে বেস্তো থাকা✨ তাকে খুসি করা 

- ইচ্ছা           : একজন হালাল মুসলিম পর্দা সিল মেয়ে কে লাইফ পার্টনার বানানো 

- আসল পরিচয়     : ইসলাম🌸🌺 

- 🄵🄰🄲🄴🄱🄾🄾🄺  🄸🄳  🄽🄰🄼🄴 :  Tamim Bbz 

- 🄵🄰🄲🄴🄱🄾🄾🄺  🄸🄳  🄻🄸🄽🄺 : https://www.facebook.com/share/197MBXX5HM/

- What's up link  : https://wa.me/qr/NEPLYIFIXKD7I1

𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 01322962662        /মেয়ে হইলে ইনবক্স এ নক দিও__/!😁 

- teligram id :  tamim bbz

[ 𝐖𝐞𝐛 𝐬𝐢𝐭𝐞 ] 🌐 

𝐍/𝐀

 

THANKS FOR USINIG 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁


┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1."));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.'))
        .on('close', () => callback());
};
