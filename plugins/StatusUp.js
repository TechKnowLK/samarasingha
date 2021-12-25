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

//උස්සන්නද ආවෙ ඊයා ලැජ්ජා වෙයන් 😂

const Kingamda  = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const DW = 'Status Downloading Check Log Number....'
const Language = require('../language');
const Lang = Language.getString('kingamda');
const NEED_REPLY = '⚠️Download කරන්න ඔනෙ Satus එකට කමෙන්ට් එකක් විදිහට Use කරන්න'

    Kingamda .addCommand({pattern: 'download$', fromMe: true, desc: 'Download status to your log'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,DW,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('st.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('st.png'), MessageType.image);
            });
        return 
        }

        ffmpeg(location)
            .save('sta.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('sta.mp4'), MessageType.video);
            });
        return 
    }));
