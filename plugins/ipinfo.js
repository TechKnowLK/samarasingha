/*
$$\   $$\ $$\                            $$$$$$\                      $$\           
$$ | $$  |\__|                          $$  __$$\                     $$ |          
$$ |$$  / $$\ $$$$$$$\   $$$$$$\        $$ /  $$ |$$$$$$\$$$$\   $$$$$$$ | $$$$$$\  
$$$$$  /  $$ |$$  __$$\ $$  __$$\       $$$$$$$$ |$$  _$$  _$$\ $$  __$$ | \____$$\ 
$$  $$<   $$ |$$ |  $$ |$$ /  $$ |      $$  __$$ |$$ / $$ / $$ |$$ /  $$ | $$$$$$$ |
$$ |\$$\  $$ |$$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |$$  __$$ |
$$ | \$$\ $$ |$$ |  $$ |\$$$$$$$ |      $$ |  $$ |$$ | $$ | $$ |\$$$$$$$ |\$$$$$$$ |
\__|  \__|\__|\__|  \__| \____$$ |      \__|  \__|\__| \__| \__| \_______| \_______|
                        $$\   $$ |                                                  
                        \$$$$$$  |                                                  
                         \______/   
                         》》42 SET EKA TEAM WORK《《
                               
                                 Created by
                         》》PASINDU SAMARA$INGHA《《  

Copyright (C) 2021 PASINDU SAMARA$INGHA-King Amda
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

What's app Group- https://chat.whatsapp.com/E4nzpMwQsqqCOzUeHO0x3s 
Youtube - Techkonwlk  
*/



const Kingamda = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*😎Searching details*"
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('kingamda');
const NEED = 'ip එක හරියට ගහන්න🌝'
let tn = Config.WORKTYPE == 'public' ? false : true

    Kingamda.addCommand({ pattern: 'ipinfo ?(.*)', fromMe: tn, deleteCommand: false, desc: 'ip හි විස්තර ලබාදෙ',  deleteCommand: false}, async (message, match) => {
        
        const link = match[1]
            if (!link) return await message.client.sendMessage(message.jid,NEED,MessageType.text)
            await message.client.sendMessage(message.jid,LOAD_ING,MessageType.text)
            await axios
              .get(`https://zenzapi.xyz/api/iplookup?apikey=amda&query=${link}`)
              .then(async (response) => {
                const {region,
                    country,
                    city,
                    zip,
                    latitude,
                    longtitude,
                    isp,
                    domain,
                    usage_type,
                    time_zone,
                    proxy,
                       } = response.data.result
                        var respoimage = await axios.get(`https://i.ibb.co/bB5qgcf/location-4496459-640.png`, { responseType: 'arraybuffer' })
                const msg = `*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*\n   *》》🌍IP Information📡《《*\n*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*`+`\n\n\n`+
                            `*COUNTRY* ➜ *${country}*` + `\n\n`+
                            `*REGION* ➜ *${region}*` + `\n\n`+
                            `*CITY* ➜ *${city}*` + `\n\n`+
                            `*ZIP CODE* ➜ *${zip}*` + `\n\n`+
                            `*ISP* ➜ *${isp}*` + `\n\n`+
                            `*DOMAIN* ➜ *${domain}*` + `\n\n`+
                            `*TIME ZONE* ➜ *${time_zone}*` + `\n\n`+
                            `*PROXY* ➜ *${proxy}*` + `\n\n`
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
                  caption: msg +'*ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ*\n*42 ꜱᴇᴛ ᴇᴋᴀ ᴛᴇᴀᴍ ᴡᴏʀᴋ*'
                })
            })
          },
        )
