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
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Heroku = require('heroku-client');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


Kingamda.addCommand({pattern: 'killspam', fromMe: true, dontAddCommandList: true, desc: Lang.STOP_SPAMDESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));

Kingamda.addCommand({pattern: 'spam ?(.*)', fromMe: true, dontAddCommandList: true, desc: Lang.SPAM_DESC}, (async (message, match) => {


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

    }

    var spam = `${match[1]}`
    var fin = spam.replace(/#/g, "\n");

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
}));
