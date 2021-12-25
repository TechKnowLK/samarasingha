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
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const FICF = require('../FICF');
const axios = require('axios');
const amda = require('../amda');
const Language = require('../language');
let tn = Config.WORKTYPE == 'public' ? false : true
const XN_UP = "*Please Wait Little Bit Im Uploding Your Ehi⏱*"
const DESC = "Free data( EHI ලැයිස්තුව)"
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your EHI😌*"
const TXN_D = "*😌Downloading Your APK*"
const TXN_UP = "*Uploading Your APK🤟*"
const W_D = "*😎Downloading Whatsapp  EHI*"
const Y_D = "*😎Downloading Youtube  EHI*"
const F_D = "*😎Downloading Facebook  EHI*"
const Z_D = "*😎Downloading Zoom EHI*"

Kingamda.addCommand({pattern: '1apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.JE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '2apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.ZR}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '3apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.CIP}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '4apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.RIP}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '5apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.RIL}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '6apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.HI}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '7apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.HIL}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '8apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.HC}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '9apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.TLS}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '10apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.OT}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '11apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.SI}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '1exe ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.HTP}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '2exe ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.SVL}`, { responseType: 'arraybuffer' }) 
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '3exe ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.TCP}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '4exe ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.BSC}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Kingamda.addCommand({pattern: '5exe ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.PROX}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));      


//=====================================================================================
//=====================================================================================

Kingamda.addCommand({pattern: 'WEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
   await message.client.sendMessage(message.jid,W_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.WE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Kingamda.addCommand({pattern: 'FEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,F_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.FE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Kingamda.addCommand({pattern: 'YEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,Y_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.ZE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
      }));
Kingamda.addCommand({pattern: 'ZEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,Z_D,MessageType.text);
       var webimage = await axios.get(`https${amda.AMDA_SITE}${FICF.YE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
      })); 


//=====================================================================================


 Kingamda.addCommand({pattern: 'iapk', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*
*》》─🚀 INJECTORS🚀 ─《《*
*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*


*╭───────────●●▷*
*│ _🔖NO CONFIG APP_*
*│*
*│*
*│ 1]. 🚀Je Http Pro*
*│* _🔎 .1apk_
*│*
*│ 2]. 🚀Zr Tunnel*
*│* _🔎 .2apk_
*│*
*│ 3]. 🚀Cyber Inject Pro*
*│* _🔎 .3apk_
*│*
*│ 4]. 🚀Rapid Inject Pro*
*│* _🔎 .4apk_
*│*
*│ 5]. 🚀Rapid Inject Lite*
*│* _🔎 .5apk_
*│*
*╰───────────●●▷*

*╭───────────●●▷*
*│ _🔖CONFIG APPS_*
*│*
*│*
*│ 1]. 🚀Http Injector*
*│* _🔎 .6apk_
*│*
*│ 2]. 🚀Http Injector Lite*
*│* _🔎 .7apk_
*│*
*│ 3]. 🚀Http Custom*
*│* _🔎 .8apk_
*│*
*│ 4]. 🚀TLS Tunnel*
*│* _🔎 .9apk_
*│*
*│ 5]. 🚀Open Tunnel*
*│* _🔎 .10apk_
*│*
*│ 6]. 🚀SSH Injector*
*│* _🔎 .11apk_
*│*
*╰───────────●●▷*


*╭───────────●●▷*
*│ _💻WINDOWS_*
*│*
*│*
*│ 1]. 🚀Http Proxy Injector*
*│* _🔎 .1exe_
*│*
*│ 2]. 🚀Svl Injector*
*│* _🔎 .2exe_
*│*
*│ 3]. 🚀TCP Over SSL Tunnel*
*│* _🔎 .3exe_
*│*
*│ 4]. 🚀Bitvise Ssh Client*
*│* _🔎 .4exe_
*│*
*│ 5]. 🚀Proxifier*
*│* _🔎 .5exe_
*│*
*╰───────────●●▷*
*╔════*
*║ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ➼*
             *Pasindu Samara$ingha ║*
                                            *════╝*`
                                          }) 
 }));

Kingamda.addCommand({pattern: 'ehelp', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*
  *》》👑ҚɪЛƓ 卂ϻᗪ卂👑《《*
*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*

*🤔මොනවද මේ හැමෝම කතාවෙන Ehi ෆයිල්*

Ehi ෆයිල් කියන්නෙ Https injector app (isp ලාගේ ෆ්‍රි පැකෙජ් , සයිට් මගින්  ෆ්‍රි ඉන්ටනෙට් යන්න පුලුවන් vpn App එකක්.)

එක යූස් කරලා සාදා ගන්නා ෆයිල් එකක් ehi යනුවෙන් හදුන්වන්නෙ එහි ෆයිල් ෆෝමැට් එකයි. ( සාදාගන්නා හැටි කියලා දිමට යන්නෙ නෑ  අපි හදල දෙනව ඒව යුස් කරන්න තියෙන්නෙ 😊)  මේ දවස් වල ඉන්ටනෙට් යන්න මෙම යිල් භාවිතා කරන ආකාරය පමනයි පෝස්ට් එකේ ඇතුලත් කරන්නෙ.

ගොඩක් අය පාවිච්චි කරලා ඇති ඒත් සමහර අය ඉන්නවා මේක ගැන නොදන්න ඒ අයටයි මේ පෝස්ට් එක.

කොහොමද ඔයාලා මේකෙන් ඉන්ටනෙට් යන්නෙ ...

👉ඔයාලට කරන්න තියෙන්නෙ ඔයාල ලග  තියෙන සිම් සමාගමේ  වට්සැප් ෆේස්බුක් යූටියුබ් සූම් වැනි පැකේජ් තියෙනව නම්  ඒකෙන් එකක් ඇක්ටිව් කර ගන්න.

🤟දැන් injector  ඇප් එකක් මාර්ගයෙන් අපි ක්‍රියාත්මක කර ඇති පැකේජයෙන් අන්තර්ජාලයට පිවිසිය හැක.

 `}) 
 }));

Kingamda.addCommand({pattern: 'connect', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*

*🤔කොහොමද Connect කරගන්නෙ?*

🙂ඉස්සෙලම ඔයාගෙ සිම් එකට අදාළ පැකේජ් එකක් Active කරගන්න. whatsapp facebook etc:

😜VPN මගින් අන්තර්ජාලයට සම්බන්ධ වීමට Injecter APP එකක් ඔබ Install කරගන්න ඕන. http injector recommend

😉දැන් ඔයා Active කරපු පැකේජ් එකට අදාල EHI FILE එක Download කරලා Open කරන්න. (install කරපු injector එකෙන්)

😌APP එක open උනාම Start CLICK කරන්න Vpn on කරන්න අදාළ permission ඉල්ලයි ඒවා දෙන්න..
දැන් ඔයාට පැකේජ් එක මගින් අන්තර්ජාලය පිවිසිය හැකියි...

🌝🌝

 `}) 
 }));
