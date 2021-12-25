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
const amdda = require('../amda');
const config = require('../Config/config');
const NEED = "*😑ඔහොම නෙවෙයි කමාන්ඩ් එක Use කරන්නෙ* \n```[Ex-] .qr Kingamda```"
const desc = "Text to image Pack";
let tn = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({ pattern: 'qr ?(.*)', fromMe: tn,dontAddCommandList: true, desc: 'QR කෙත නිර්මාණය කරයි'}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.KARE})
    }));