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
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
const UP = "*😎Uploading Mp3 please wait*"

Kingamda.addCommand({pattern: 'xvo1 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/10n_R6Ut-_4-ZScLY3liWadigO7I4wxdS/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Kingamda.addCommand({pattern: 'xvo2 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1q1NFXEBEENY_22RsRA0ksl3nBTDUVlgv/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Kingamda.addCommand({pattern: 'xvo3 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1sUEx_4fnmGZzK5pOdxiNNncnI4juTPN_/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Kingamda.addCommand({pattern: 'xvo4 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/18MHArl0OH2sLfHmYUbCVoctcU0TF1wYe/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Kingamda.addCommand({pattern: 'xvo5 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/181DjWZZIJ-gm32T_u5vM35RlHfVySQMX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Kingamda.addCommand({pattern: 'xvo6 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1gE5xg5txJsaHCHZKpXK2uRFvLMbh8CMv/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Kingamda.addCommand({pattern: 'xvo7 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/181DjWZZIJ-gm32T_u5vM35RlHfVySQMX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
