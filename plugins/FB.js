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
const pasindu = require('../amda');
const Language = require('../language');
const Lang = Language.getString('kingamda');
const YTV_DESC = "Facebook Video බාගත කරයි ."
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*😌Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🥴can't Find Anything...*"
const tk = Config.WORKTYPE == 'public' ? false : true


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
 r_text[14] = "3462d0b225a08e4cf185ea34"
 r_text[15] = "57e0e9921d74d656dc100f98"
 r_text[16] = "dd38485f6bfc0d2f17cd6205"
 r_text[17] = "e2d2e00519aa6fb101a28321"
 r_text[18] = "2dbaa67ad9f98f3d1b881e00"
 r_text[19] = "50c56a605497a09091d23c31"
 r_text[20] = "7142e9d406296e0b2f8c645d"
 r_text[21] = "32ce9cf50294e7fcc61c4326"
 r_text[22] = "b2899148da0102da927d853b"
 r_text[23] = "cb111dd282c2413233b39f2f"
 r_text[24] = "27fab8d31395ed84ad8f7d35"
 r_text[25] = "3946d0dced5dce884387d9ec"
 r_text[26] = "5697a64554bfd4dab337ae81"
 r_text[27] = "4acc912b74882fdd329e5935"
 r_text[28] = "95d7bdbcb8b773238886115f"
 r_text[29] = "d408f1e53d883c46dcee884e"
 r_text[30] = "9bdb73524c94125c50e5302c"
 r_text[31] = "27409327266da176b32e83c5"
 r_text[32] = "80d424bc3b424a03565a766c"
 r_text[33] = "5aa42ce8f8ed740cfb5e480d"
 r_text[34] = "36fa8143058c8fdfb7dc66f6"
 r_text[35] = "54465556e28ad01709ae860f"
 r_text[36] = "955f87a83b942a39f785380c"
 r_text[37] = "45410f2dd23e2a145ca1e243"
 r_text[38] = "836b947d9600e91d5f3a494f"
 r_text[39] = "8593b9d30d0024f6cb4a106f"
 r_text[40] = "341bc29e631f1b79739b1012"
 r_text[41] = "18cb66e4aa02810196cdd872"
 r_text[42] = "49f61b732532239df09a52fc"
 r_text[43] = "eede9033a9d70f91237ec501"
 r_text[44] = "2a9039b81709a77eb2bb1d30"
 r_text[45] = "bcc38e688e820511a8a33013"
 r_text[46] = "dfee0c9ac9bc40dfd31b3ce5"
 r_text[47] = "15333a6e6778dc713f9a1836"
 r_text[48] = "09c825eab3af09ad69a6c64a"
 r_text[49] = "7db9527f1994bb4a7b507cdf"
 r_text[50] = "464418be400e4a0746b7faff"
 r_text[51] = "2c491fca40824b0c68f51155"
 r_text[52] = "42f0edbc93f1f0f3c8836f5f"
 r_text[53] = "65cdb0d22f6a72eb1236f853"
 r_text[54] = "9ac70e84ac8d7330cd224c1b"
 r_text[55] = "aed853c72b9d71a5a54b263d"
 r_text[56] = "1bc7cd2747d40d6c19d63ac8"
 r_text[57] = "ad61a8304e3df298436a4253"
 r_text[58] = "e95489a44ad324310745775e"
 r_text[59] = "3538911185fe544b8f164751"

var i = Math.floor(60*Math.random())  

Kingamda.addCommand({ pattern: 'fb ?(.*)', fromMe: tk, deleteCommand: false, desc: Lang.MP4,  deleteCommand: false}, async (message, match) => {
        
    const link = match[1]
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://api.dapuhy.xyz/api/socialmedia/snapsave?url=${link}&apikey=${pasindu.GAAPI}`)
          .then(async (response) => {
            const {result} = response.data
            const videoBuffer = await axios.get(result.preview, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.sendMessage(Buffer.from(videoBuffer.data), MessageType.video, {
              caption: "*ඇම්ඩා තමයි හොදටම කරෙ🤪*",
            })
        })
        .catch(async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )

//=====================================================================================
//=====================================================================================
