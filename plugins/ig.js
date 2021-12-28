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

//Api එක උස්සන එකාගෙ මුලු පව්ලම හෙන හතක් වැදිලා 
//මකබෑවිලාම යන්න ඕනෙ..!!!! eeeew!

const Kingamda = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const samare = require('../amda');
const Language = require('../language');
const Lang = Language.getString('kingamda');
const IGV_DESC = "Instergram Video බාගත කරයි."
const IGI_DESC = "Instergram Video බාගත කරයි."
const IG_NEED = "*Link එක දෙන්නො...*"
const DWLOAD_VID = "*😌Downloading Your Video...*"
const DWLOAD_IMG = "*😌Downloading Your Image...*"
const IGV_UP = "*🚀Uploading Your Video...*"
const IGI_UP = "*🚀Uploading Your Image...*"
const NO_RESULT = "*🥴can't Find Anything...*"
const tk = Config.WORKTYPE == 'public' ? false : true



    Kingamda.addCommand({ pattern: 'igvid ?(.*)', fromMe: tk, deleteCommand: false, desc: IGV_DESC,  deleteCommand: false}, async (message, match) => {
        
    const link = match[1]
        if (!link) return await message.client.sendMessage(message.jid,IG_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://api.dapuhy.xyz/api/socialmedia/igdownload?url=${link}${samare.KEY}${samare.GAAPI}`)
          .then(async (response) => {
            const {download_url} = response.data.result
            const videoBuffer = await axios.get(download_url, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,IGV_UP,MessageType.text);
            await message.sendMessage(Buffer.from(videoBuffer.data), MessageType.video, {
              caption: "*ඇම්ඩා තමයි හොදටම කරෙ🤪*",
            })
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )

    Kingamda.addCommand({ pattern: 'igimg ?(.*)', fromMe: tk, deleteCommand: false, desc: IGI_DESC,  deleteCommand: false}, async (message, match) => {
        
      const link = match[1]
          if (!link) return await message.client.sendMessage(message.jid,IG_NEED,MessageType.text)
          await message.client.sendMessage(message.jid,DWLOAD_IMG,MessageType.text);
          await axios
            .get(`https://api.dapuhy.xyz/api/socialmedia/igdownload?url=${link}${samare.KEY}${samare.GAAPI}`)
            .then(async (response) => {
              const {download_url} = response.data.result
              const videoBuffer = await axios.get(download_url, {responseType: 'arraybuffer'})
              await message.client.sendMessage(message.jid,IGI_UP,MessageType.text);
              await message.sendMessage(Buffer.from(videoBuffer.data), MessageType.image, {
                caption: "*ඇම්ඩා තමයි හොදටම කරෙ🤪*",
              })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
          )
        },
      )

//=====================================================================================
//=====================================================================================
