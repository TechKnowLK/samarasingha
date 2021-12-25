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
const LOAD_ING = "*😎Searching Song Lyrics*"
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('kingamda');
let tn = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({pattern: 'lyrics ?(.*)', fromMe: tn, desc: 'සින්දුවල ගි පද පෙලි ලබා දෙයි' , dontAddCommandList: false}, async (message, match) => {
    
const {data} = await axios(`https://zenzapi.xyz/api/liriklagu?query=${match[1]}&apikey=a9a05974d30e`)
const { status, result } = data
if(!status) return await message.sendMessage('*🥴එහෙම සින්දුවක් හොයාගන්න නෑ..*')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = ''
msg += `*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n  *》》》─👑 ҚɪЛƓ 卂ϻᗪ卂👑─《《《*\n*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n\n`
msg += `*🎧සින්දුවෙ නම* :${result.judul}\n\n`
msg += `*👨‍🦳OWNER* :${result.penyanyi}\n\n`
msg += `*🌝LYRICS*\n :${result.lirik}\n\n`
 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
 
});
