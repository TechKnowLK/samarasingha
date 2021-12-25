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
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const config = require('../amda');
const Language = require('../language');
const Lang = Language.getString('kingamda');
let tn = Config.WORKTYPE == 'public' ? false : true
const NEED_WORD = '🍭Type Word'

//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!
//මේක උස්සන්නෙ අම්මෙක් අප්පෙක් නැති අවජාතකයෙක් eeeew!!

   Kingamda.addCommand({ pattern: '1ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '2ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '3ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '4ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.cereal?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '5ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.sound?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
Kingamda.addCommand({ pattern: '6ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.star?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '7ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.zilch?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '8ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.casino?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '9ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.army?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '01ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.fun?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '02ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.neon?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '03ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.trance?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Kingamda.addCommand({ pattern: '04ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.glow?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
Kingamda.addCommand({ pattern: '05ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.prime?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
