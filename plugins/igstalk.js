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
const NEED = '*නම හරියට ගහන්න🌝*'
let tn = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({ pattern: 'igstalk ?(.*)', fromMe: tn, deleteCommand: false, desc: 'පොන් වල සියලුම විස්තර ලබා දෙයි',  deleteCommand: false}, async (message, match) => {
        
        const link = match[1]
            if (!link) return await message.client.sendMessage(message.jid,NEED,MessageType.text)
            await message.client.sendMessage(message.jid,LOAD_ING,MessageType.text)
            await axios
              .get(`https://api.lolhuman.xyz/api/stalkig/${link}?apikey=YTRAMLANID`)
              .then(async (response) => {
                const {photo_profile,
                    username,
                    fullname,
                    posts,
                    followers,
                    following,
                    bio} = response.data.result
                const profileBuffer = await axios.get(photo_profile, {responseType: 'arraybuffer'})
                const msg = `*NAME* ➜ *${fullname}*` + `\n\n`+
                            `*USERNAME* ➜ *${username}*` + `\n\n`+
                            `*POSTS* ➜ *${posts}*` + `\n\n`+
                            `*FOLLOWERS* ➜ *${followers}*` + `\n\n`+
                            `*FOLLOWEING* ➜ *${following}*` + `\n\n`+
                            `*BIO* ➜ *${bio}*` + `\n\n`
                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                  caption: msg +'*ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ*\n*42 ꜱᴇᴛ ᴇᴋᴀ ᴛᴇᴀᴍ ᴡᴏʀᴋ*'
                })
            })
          },
        )
