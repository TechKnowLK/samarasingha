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
you may not use this file except in compliance with the License .

What's app Group- https://chat.whatsapp.com/E4nzpMwQsqqCOzUeHO0x3s 
Youtube - Techkonwlk  
*/

const Kingamda = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('kingamda');

    Kingamda.addCommand({pattern: 'freedata', fromMe: true, desc: Lang.DATA}, (async (message, match) => {
       var image = await axios.get (Config.FREE, {responseType: 'arraybuffer'})
       await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*
  *》》─FREE INTERNET─《《*
*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*

*╭─「  මොනවද මේ EHI 🤔」* 
│👉.ehelp
╰──────►
*╭─「 කොහොමද  CONNECT කරන්නෙ😐」*
│👉.connect 
╰───────►
 *╭─「  INJECTOR APK😈」*
│👉.iapk
╰──────►

*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*
   *》》》──EHI FILES──《《《*
*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*

*╭─「  ALL WHATSAPP EHI」*
│😎 .WEHI
╰──────►
*╭─「 ALL YOUTUBE EHI」*
│😋 .YEHI
╰──────►
*╭─「 ALL FACEBOOK EHI」*
│😌 .FEHI
╰──────►
*╭─「 ALL ZOOM EHI」*
│🤪 .ZEHI
╰──────►
*╔════*
*║ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ➼*
             *Pasindu Samara$ingha ║*
                                            *════╝*
`}) 

 }));
