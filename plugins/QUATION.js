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
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('kingamda');


const brainly = "Finds the answer."
const usage = ".brainly <Question>"

const butuh = "```Enter the Question!```"

if (Config.WORKTYPE == 'public') {
Kingamda.addCommand({ pattern: 'kingamda ?(.*)', fromMe: false, dontAddCommandList:true}, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*Soal:* ${soal}
*Jawaban Brainly:* ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly Found/g, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}

