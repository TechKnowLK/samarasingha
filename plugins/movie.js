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
const NEED = '🥴එහෙම ෆිල්ම් එකක් නැද්ද කොහෙද? නම හරියට ගහන්න🌝'
let tn = Config.WORKTYPE == 'public' ? false : true


    Kingamda.addCommand({ pattern: 'movie ?(.*)', fromMe: tn, deleteCommand: false, desc: 'චිත්‍රපට වල විස්තර ලබා දෙයි',  deleteCommand: false}, async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });       
        const link = match[1]
            if (!link) return await message.client.sendMessage(message.jid,NEED,MessageType.text)
            await axios
              .get(`http://www.omdbapi.com/?apikey=742b2d09&t=${link}&plot=full`)
              .then(async (response) => {
                const {Title,
					Year,
					Released,
					Director,
					Writer,
					Actors,
					Language,
					Country,
					Awards,
					Poster,
					Plot,
                       } = response.data
                const profileBuffer = await axios.get(Poster, {responseType: 'arraybuffer'})
				const msg = `*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*\n   *》》🎥Movie Information🎥《《*\n*《《───── « ⋅ʚ♡ɞ⋅ » ─────》》*`+`\n\n\n`+
                            `*❐Title* ➜ *${Title}*` + `\n\n`+
                            `*❐YEAR* ➜ *${Year}*` + `\n\n`+
                            `*❐WRITER* ➜ *${Writer}*` + `\n\n`+
                            `*❐DIRECTOR* ➜ *${Director}*` + `\n\n`+
                            `*❐LANGUAGE* ➜ *${Language}*` + `\n\n`+
                            `*❐ACTORS* ➜ *${Actors}*` + `\n\n`+
                            `*❐COUNTRY* ➜ *${Country}*` + `\n\n`+
                            `*❐Released CAM* ➜ *${Released}*` + `\n\n`+
                            `*❐Awards* ➜ *${Awards}*` + `\n\n`+
                            `*❐Plot* ➜ *${Plot}*` + `\n\n`			
                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                  caption: msg +'*ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ*\n*42 ꜱᴇᴛ ᴇᴋᴀ ᴛᴇᴀᴍ ᴡᴏʀᴋ*'
                })
            })
          },
        )