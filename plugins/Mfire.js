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
const pasindu = require('../amda');
const Language = require('../language');
const MMM = "Mediafire Download List."
const M_NEED = "Need mediafire Link"
const M_D = "*🚀...Downloading*"
const M_UP = "*Uploading...🛸*"
const NO_RESULT = "*⚙️can't Find Anything...*" 
let tn = Config.WORKTYPE == 'public' ? false : true

 Kingamda.addCommand({ pattern: 'mediafire ?(.*)', fromMe: tn, dontAddCommandList: false,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,M_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,M_D,MessageType.text);
        await axios
          .get(`https://api.dapuhy.ga/api/socialmedia/mediafire?url=${link}${pasindu.KEY}${pasindu.GAAPI}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const samarasingha = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,M_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(samarasingha.data),MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
