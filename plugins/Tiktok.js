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
const {MessageType,mimetype,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Amda = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('kingamda');
let typea = Amda.WORKTYPE == 'private' ? false : true
let typeb = Amda.WORKTYPE == 'public' ? true : false

 // ===============================================================================================================
 if (Amda.WORKTYPE == 'private') {
  Kingamda.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, dontaddCommandList:false, desc: ALang.TIKTOK}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *🥲කො බුන්ගා ටික්ටොක් විඩියො ලින්ක් එක* ")

    await message.sendMessage(Lang.DOWNLOADING_VIDEO)

		var url = `https://api.dapuhy.xyz/api/socialmedia/ttdownloader?url=${link}&apikey=xxaCRjUYbu` 
// උස්සන්න එපා
				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {
							nowm
						} = response.data.result

						const linkdata = await axios.get(nowm, {
							responseType: 'arraybuffer'
						})
						await message.sendMessage('🚀 *Your Tiktok Video Uploading*')
						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: `${Amda.KARE}`,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) }//pattern close






if (Amda.WORKTYPE == 'public') {
	Kingamda.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false, dontaddCommandList:false, desc: ALang.TIKTOK}, async (message, match) => {
  
	  const link = match[1]
  
	  if (!link) return await message.sendMessage(" *🥲කො බුන්ගා ටික්ටොක් විඩියො ලින්ක් එක* ")
  
	  await message.sendMessage(Lang.DOWNLOADING_VIDEO)
  
		  var url = `https://api.dapuhy.xyz/api/socialmedia/ttdownloader?url=${link}&apikey=xxaCRjUYbu` 
  // උස්සන්න එපා
				  await axios
					  .get(`${url}`)
					  .then(async(response) => {
						  const {
							  nowm
						  } = response.data.result
  
						  const linkdata = await axios.get(nowm, {
							  responseType: 'arraybuffer'
						  })
						  await message.sendMessage('🚀 *Your Tiktok Video Uploading*')
						  await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								  caption: `${Amda.KARE}`,
						  })
							  .catch(
								  async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							  )
					  })
					  
  }) }//pattern close
