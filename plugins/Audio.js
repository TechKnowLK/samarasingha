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
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('kingamda');
const BLang = Language.getString('scrapers');
const YTV_DESC = "Youtube Audio Downloader."
const YT_NEED = "🌀 *URL එක දෙන්න* \nExample:-\n _.audio https://www.youtube.com/watch?v=XnnjCyPDG9c_"
const DWLOAD_AUD = "*🎧Downloading Your Audio...*"
const YTV_UP = "*🚀 Uploading Your Audio...*"
const NO_RESULT = "☹️ *Can't Find Anything...*"
let tk = Config.WORKTYPE == 'public' ? false: true
let tn = Config.WORKTYPE == 'public' ? false: true

    Kingamda.addCommand({ pattern: 'audio ?(.*)', fromMe: tk, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_AUD,MessageType.text);
        await axios
          .get(`https://api.dapuhy.ga/api/socialmedia/ytmp3v2?url=${link}&apikey=xxaCRjUYbu`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );



    Kingamda.addCommand({ pattern: 'ytmp3 ?(.*)', fromMe: true, dontAddCommandList: true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_AUD,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytmp3/2?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
	
	
