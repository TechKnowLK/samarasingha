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

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Kingamda = require('../events');
const Config = require('../config');
const UNQ = "wrong command dont type words after command"
const DDO = `👿CRASHING...BY `+Config.BOT_NAME+`👿`
const UUU = "CRASH GROUP (Bot Bug Virus)"
const ONO = ".tagall *😈☠King Amda☠ We are Deamons Do not run away...😈😈😈*"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

Kingamda.addCommand({pattern: `${Config.BUG_COMMAND} ?(.*)`, fromMe: true, desc: UUU,deleteCommand: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Kingamda.addCommand({pattern: 'awsh ?(.*)', fromMe: true, desc: UUU, dontAddCommandList: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));
