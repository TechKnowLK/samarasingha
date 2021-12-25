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

// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕

const Kingamda = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');

var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY PASINDU SAMARASINGAHA' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Amda = require(file);
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('kingamda');
const capt = "\n\n🧛‍♂️ *Kingamda PINTEREST DOWNLOADER* 💜"
let typea = Amda.WORKTYPE == 'public' ? false : true
let typeb = Amda.WORKTYPE == 'public' ? true : false
const need = "🧛‍♂️ Type some word after command"
const sch = "🧛‍♂️ *Uploading 4 photos of* "
const DOWNMSG = "🧛‍♂️ *DOWNLOADING PINTEREST IMG...* 🤍"
// ${Kingamda.L001}

//-------IMG-----------------------------------------------------------------	
Kingamda.addCommand({ pattern: 'pimg ?(.*)', fromMe: typea, desc: Lang.PIMG_DESC}, (async (message, match) => {
	// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(sch+input)
	
	var url = `${Amda.BAPIS}pinterest?text=${input}&apikey=${Amda.BAPIKEY}`
	
	// Loop 4 times
	for (let i = 0; i < 4; i++) { // for start
		
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {image,} = response.data

    const linkdata = await axios.get(image, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png})
      .catch(
        async (err) => await message.sendMessage("⛔️ *Command Error* \n *Try again Later*"),
      )
  })
	} // for end
})); // IMG close

//-------PINTEREST Downloader-----------------------------------------------------------------	
Kingamda.addCommand({ pattern: 'pindown ?(.*)', fromMe: typea, desc: ALang.PTDOWN}, (async (message, match) => {
// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(DOWNMSG)
	
	var url = `${Amda.JAPIS}pinterest?url=${input}`
	
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {result,} = response.data

    const linkdata = await axios.get(result, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png, caption: Amda.BOT_NAME + capt})
      .catch(
        async (err) => await message.sendMessage("⛔️ *IMG NOT FOUND*"),
      )
  })

})); // PINTEREST close

//-------IMG-----------------------------------------------------------------	
Kingamda.addCommand({ pattern: 'pimg ?(.*)', fromMe: typeb, dontAddCommandList: true}, (async (message, match) => {
	// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(sch+input)
	
	var url = `${Amda.BAPIS}pinterest?text=${input}&apikey=${Amda.BAPIKEY}`
	
	// Loop 4 times
	for (let i = 0; i < 4; i++) { // for start
		
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {image,} = response.data

    const linkdata = await axios.get(image, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png})
      .catch(
        async (err) => await message.sendMessage("⛔️ *Command Error* \n *Try again Later*"),
      )
  })
	} // for end
})); // IMG close

//-------PINTEREST Downloader-----------------------------------------------------------------	
Kingamda.addCommand({ pattern: 'pindown ?(.*)', fromMe: typeb, dontAddCommandList: true}, (async (message, match) => {
// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(DOWNMSG)
	
	var url = `${Amda.JAPIS}pinterest?url=${input}`
	
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {result,} = response.data

    const linkdata = await axios.get(result, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png, caption: Amda.BOT_NAME + capt})
      .catch(
        async (err) => await message.sendMessage("⛔️ *IMG NOT FOUND*"),
      )
  })

})); // PINTEREST close

// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
