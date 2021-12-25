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

const Kingamda  = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Kingamda .addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*╭────────────●●▷*\n*│👑ҚɪЛƓ 卂ϻᗪ卂👑*\n*│😌Hey There Im Alive Now*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│*\n*│◉Version :► 2.0.0 (Public Release)*\n*│◉Branch  :► Awsh*\n*│◉About :► Kingamda Is* \n*│A Powerfull Bot For Whatsapp.*\n*│◉Github Link :►*\n*│ bit.ly/KingamdaGIT*\n*│◉YouTube Link :►*\n*│ bit.ly/KingamdaYT*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│🌝©Join Our Group*\n*│▷📑News & Update Report*\n*│* bit.ly/WaNewsGroup\n*│▷⚡Official Pluggins Group* \n*│* bit.ly/WaPluginGroup\n*│🛡️Support Community*\n*│* bit.ly/WaSupportGroup\n*│*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│*\n*│42 Set Eka Team Work*\n*│Make By-*\n*│ _Pasindu Samara$ingha_*\n│\n*╰────────────●●▷*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👑Powered By King Amda*' })
     }
    }));

 if (Config.WORKTYPE == 'public') {

    Kingamda .addCommand({pattern: 'alive', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*╭────────────●●▷*\n*│👑ҚɪЛƓ 卂ϻᗪ卂👑*\n*│😌Hey There Im Alive Now*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│*\n*│◉Version :► 2.0.0 (Public Release)*\n*│◉Branch  :► Awsh*\n*│◉About :► Kingamda Is* \n*│A Powerfull Bot For Whatsapp.*\n*│◉Github Link :►*\n*│ bit.ly/KingamdaGIT*\n*│◉YouTube Link :►*\n*│ bit.ly/KingamdaYT*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│🌝©Join Our Group*\n*│▷📑News & Update Report*\n*│* bit.ly/WaNewsGroup\n│▷⚡Official Pluggins Group* \n*│* bit.ly/WaPluginGroup\n*│🛡️Support Community*\n*│* bit.ly/WaSupportGroup\n*│*\n*╰────────────●●▷*\n\n*╭────────────●●▷*\n*│*\n*│42 Set Eka Team Work*\n*│Make By-*\n*│ _Pasindu Samara$ingha_*\n│\n*╰────────────●●▷*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👑Powered By King Amda*' })
     }
    }));

}
