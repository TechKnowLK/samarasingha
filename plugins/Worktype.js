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
const config = require('../config');
const Heroku = require('heroku-client');
const Language = require('../language');
const Lang = Language.getString('kingamda');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {

    W_ADM = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ' 
    W_PUB = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
    W_PRI = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    if (config.LANG == 'SI') {

      W_ADM = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* ඇඩ්මින් ලෙස ක්‍රියාකරයි.'
      W_PUB = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* පොදු ආකාරයට ක්‍රියාකරයි.'
      W_PRI = '*👑ҚɪЛƓ 卂ϻᗪ卂👑* පෞද්ගලික ආකාරයට ක්‍රියාකරයි.'
    }

 Kingamda.addCommand({pattern: 'work ?(.*)', fromMe: true, dontAddCommandList: false, desc: Lang.WORK}, (async (message, match) => {
        if (match[1] == 'public') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'admin'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));
