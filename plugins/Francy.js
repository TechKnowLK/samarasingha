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
const axios = require ('axios')
const LOAD_ING = "*😎Francy Text Genarating*"
const Config = require('../config');
const Language = require('../language');
const spr = require('../amda');
const Lang = Language.getString('kingamda');
let tn = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({pattern: 'ftext ?(.*)', fromMe: tn, desc: 'පොන් වල විස්තර ලබා දෙයි' , dontAddCommandList: false}, async (message, match) => {
    
const {data} = await axios(`${spr.LOCKH}${spr.BSITE}/api/others/styletext?text=${match[1]}${spr.KEY}${spr.GAAPI}`)
const { status, result } = data
if(!status) return await message.sendMessage('🥴🥴🥴')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = ''
msg += `${result.Circled}\n`
msg += `${result.Fullwidth}\n`
msg += `${result.Parenthesized}\n`
msg += `${result.Squared}\n`
msg += `${result.Reversed}\n`
msg += `${result.Stroked}\n`
msg += `${result.Subscript}\n`
msg += `${result.Inverted}\n`
msg += `${result.Superscript}\n`

 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
 
});


/*
const Kingamda = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('kingamda');
let tk = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({ pattern: 'ftext ?(.*)', desc: Lang.FRANCY, fromMe: tk }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://api.dapuhy.xyz/api/others/styletext?text=${word}&apikey=Ar6P0HIGXxTwAfu`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `**◁◉◉◉◉Fancy Text◉◉◉▷* \n             *👑ҚɪЛƓ 卂ϻᗪ卂👑* * \n              \n\n ${result} \n\n                 *◄◉◉◉◉◉◉◉◉◉◉ᴀʟᴇxᴀ◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
	
	Kingamda.addCommand({ pattern: 'ftext ?(.*)', dontAddCommandList: true, fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://.herokuapp.com/api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*◁◉◉◉◉Fancy Text◉◉◉▷* \n             *👑ҚɪЛƓ 卂ϻᗪ卂👑* \n\n ${result} \n\n                \n*◄◉◉◉◉◉◉◉◉◉◉ᴀʟᴇxᴀ◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
*/
