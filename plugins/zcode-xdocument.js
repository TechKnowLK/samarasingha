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
const Config = require('../config');
const config = require('../amda');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : true   

if (Config.ADULT_MODE == 'on') {    
Kingamda.addCommand({pattern: 'feetggif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/feetg?apikey=${config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Kingamda.addCommand({pattern: 'pussygif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/pussy?apikey=${config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Kingamda.addCommand({pattern: 'kunigif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/kuni?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Kingamda.addCommand({pattern: 'analgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/anal?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Kingamda.addCommand({pattern: 'spankgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/spank?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));
}
