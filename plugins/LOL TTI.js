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

/* උස්සන්න හදන්න එපා 😂 API search කරලා රෙපො එකටම උක්කවනවා 😂 වේසා පක්කු
 එක පකෙක්වත් උස්සන්න හදන්න එපා

©️KINGAMDA
*/


const Kingamda = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Amdo = require('../config');
const Amda = require('../amda');
const config = require('../Config/config');
const NEED = "**😑ඔහොම නෙවෙයි කමාන්ඩ් එක Use කරන්නෙ* \n```[Ex-] .iglitch Kingamda```"
const desc = "Text to image Pack";
let tn = Amdo.WORKTYPE == 'public' ? false : true


var r_text = new Array ();

r_text[0] = "b9e8f4480c723bc8d7e26700"
r_text[1] = "ee3139cb85c9080e6d4ca578"
r_text[2] = "e0e8dc383be2978c4152d7b3"
r_text[3] = "66e30164128117de97859e1e"
r_text[4] = "1b60d93e51f16b9c8e58a3be"
r_text[5] = "aac8ea0489917f2ff5b0cdf2"
r_text[6] = "e18b3770b925d0511c88a645"
r_text[7] = "4fedc39480117bd44c58fc8e"
r_text[8] = "2a64d1a42d5a6f68b19437ff"
r_text[9] = "aa7e4ba220e59f2f2e423c31"
r_text[10] = "5331f347982563721f41fb85"
r_text[11] = "d069d03eaf6ea4f8eba4e874"
r_text[12] = "57e0e9921d74d656dc100f98"
r_text[13] = "3462d0b225a08e4cf185ea34"
r_text[14] = "57e0e9921d74d656dc100f98"
r_text[15] = "dd38485f6bfc0d2f17cd6205"
r_text[16] = "184a639b6af3ed7074fc7899"
r_text[17] = "10618dfd536290648be9cd62"
r_text[18] = "981de498a6f6bc354def7abf"
r_text[19] = "4a224dd98f82d85a31b98623"
r_text[20] = "b5d3a6f9dab55a3cf2a17b1e"
r_text[21] = "b1fbf581aededfb5452b1234"
r_text[22] = "9aa9cb49605d984d3d5adbbd"
r_text[23] = "13ec11f0715999b7bed14f4d"
r_text[24] = "b2f0830f4cfeb11a06e12145"
r_text[25] = "8009644efaf622cedd70b010"
r_text[26] = "34ed1814e777d298e5723759"
r_text[27] = "4e40bed861cf739799e06c6f"
r_text[28] = "e86ac17d6c570a9785ab873f"
r_text[29] = "6ef771c31d8c43ebb997183a"
r_text[30] = "a16977898a0a6134533767de"
r_text[31] = "b3f7bfd83e8281aee168ca07"
r_text[32] = "fda0ce1d194fe687279248e5"
r_text[33] = "cfcf0727b737c91ab29d47dd"
r_text[34] = "3e8cd747497b81feb1657211"
r_text[35] = "fbd60ce18363b89781e085da"

var i = Math.floor(36*Math.random())  

Kingamda.addCommand({ pattern: 'avatardota ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/avatardota${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'lolbanner ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/lolbanner${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'avatarlolnew ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/avatarlolnew${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'fpslogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/fpslogo${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'logogaming ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/logogaming${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'aovwall ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/aovwall${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'pubgmaskot ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/pubgmaskot${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'mlwall ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/mlwall${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'cartoongravity ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/cartoongravity${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'freefire ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/freefire${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'silverplaybutton ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/silverplaybutton${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'goldplaybutton ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/goldplaybutton${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'birthdayday ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/birthdayday${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'snow3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/snow3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'galaxybat ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/galaxybat${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'writegalacy ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/writegalacy${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'textbyname ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/textbyname${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'wooden3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/wooden3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'starsnight ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/starsnight${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'textcake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/textcake${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'glittergold ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/glittergold${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'noeltext ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/noeltext${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'metallogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/metallogo${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'greenbush ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/greenbush${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'glossychrome ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/glossychrome${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'greenneon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/greenneon${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'hologram3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/hologram3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'galaxystyle ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/galaxystyle${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'birthdaycake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/birthdaycake${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'heartshaped ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/heartshaped${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'royaltext ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/royaltext${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'puppycute ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/puppycute${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'beautifulflower ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/beautifulflower${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'lighttext ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/lighttext${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'galaxywallpaper ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/galaxywallpaper${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'luxurygold ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/luxurygold${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'watercolor ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/watercolor${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'multicolor3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/multicolor3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'wetglass ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.EPHOTO}1/wetglass${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'bannerlol ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}3/bannerlol${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'carvedwood ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/carvedwood${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/harrypotter${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'flamming ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/flamming${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'fallleaves ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/fallleaves${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'summernature ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/summernature${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'golderrose ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/golderrose${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'underwater ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/underwater${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'nature3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/nature3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'wolfmetal ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/wolfmetal${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'summer3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/summer3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'woodenboard ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/woodenboard${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'woodheart ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/woodheart${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'coffe ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/coffe${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'love ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/love${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'undergrass ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/undergrass${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'lovemessage ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/lovemessage${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'burnpaper ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/burnpaper${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'smoke ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/smoke${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'romance ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/romance${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'cup1 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/cup1${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'cup ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/cup${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'shadow ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.PHOTOOXY}1/shadow${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'wonderfulg ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/wonderfulgraffiti${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'foggywindow ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/foggywindow${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'iglitch ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/impressiveglitch${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'magma ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/magma${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'thunder ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/thunder${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'horrorblood ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/horrorblood${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'summersand ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/summersand${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'cloud ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/cloud${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'luxury ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/luxury${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'icecold ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/icecold${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'roadwarning ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/roadwarning${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'box3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/box3d${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'strawberry ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/strawberry${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'toxic ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/toxic${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'bokeh ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/bokeh${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'natureleaves ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/natureleaves${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'fireworksparkle ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/fireworksparkle${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'jokerlogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/jokerlogo${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'halloween ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/halloween${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'bloodfrosted ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/bloodfrosted${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'newyearcard ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/newyearcard${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'deluxesilver ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/deluxesilver${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'minion ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/minion${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'text1917 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/text1917${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'holographic ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/holographic${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'neonlight ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/neonlight${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'metaldark ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/metaldark${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'sandengraved ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/sandengraved${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'sandsummer ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/sandsummer${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'sandwriting ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/sandwriting${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'futureneon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/futureneon${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'blackpink ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/blackpink${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));
Kingamda.addCommand({ pattern: 'neon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${Amda.LOL}${Amdo.TEXTPRO}/neon${Amda.LKEY}${r_text[i]}${Amda.LTEXT}=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Amdo.KARE})
    }));






















