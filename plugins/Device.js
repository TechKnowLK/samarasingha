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
const NEED = '🥴එහෙම පොන් එකක් නැද්ද කොහෙද? නම හරියට ගහන්න🌝'
let ps = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({ pattern: 'device ?(.*)', fromMe: ps, deleteCommand: false, desc: 'පොන් වල සියලුම විස්තර ලබා දෙයි',  deleteCommand: false}, async (message, match) => {
        
        const link = match[1]
            if (!link) return await message.client.sendMessage(message.jid,NEED,MessageType.text)
            await axios
              .get(`https://zenzapi.xyz/api/gsmarena?query=${link}&apikey=a9a05974d30e`)
              .then(async (response) => {
                const {judul,
                        rilis,
                        thumb,
                        ukuran,
                        type,
                        storage,
                        display,
                        inchi,
                        pixel,
                        videoPixel,
                        ram,
                        chipset,
                        batrai,
                        merek_batre,
                        detail} = response.data.result
                const profileBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})
                const msg = `*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*\n   *》》📱Phone Information📱《《*\n*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*`+`\n\n\n`+
                            `*NAME* ➜ *${judul}*` + `\n\n`+
                            `**${rilis}*` + `\n\n`+
                            `*RAM* ➜ *${ram}*` + `\n\n`+
                            `*BATTRY* ➜ *${batrai}*` + `\n\n`+
                            `*A VERSHION* ➜ *${type}*` + `\n\n`+
                            `*STORAGE* ➜ *${storage}*` + `\n\n`+
                            `*DISPLAY* ➜ *${display}*` + `\n\n`+
                            `*SIZE* ➜ *${inchi}*` + `\n\n`+
                            `*MAIN CAM* ➜ *${pixel}*` + `\n\n`+
                            `*VIDEO* ➜ *${videoPixel}*` + `\n\n`+
                            `*CHIPSET* ➜ *${chipset}*` + `\n\n`
                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                  caption: msg +'*ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ*\n*42 ꜱᴇᴛ ᴇᴋᴀ ᴛᴇᴀᴍ ᴡᴏʀᴋ*'
                })
            })
          },
        )
