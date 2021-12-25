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
const got = require('got');
const Language = require('../language');
let config = require('../config');
const Lang = Language.getString('weather');
let td = config.WORKTYPE == 'public' ? false : true


Kingamda.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {

             return;
         }
         let regex1 = new RegExp('👑ANIME-LIST')
         let regex2 = new RegExp('👑MEME-LIST')
         let regex3 = new RegExp('👑TTP-LIST')
         let regex4 = new RegExp('👑ALL-COMMAND')
         let regex5 = new RegExp('👑ADMIN-LIST')
         let regex6 = new RegExp('👑LOGO-LIST')
         let regex7 = new RegExp('👑DOWNLOAD-LIST')
         let regex8 = new RegExp('👑MAIN-LIST')
         let regex9 = new RegExp('👑HELP-LIST')
         let regex10 = new RegExp('👑APK-LIST')
         let regex11 = new RegExp('👑EHI-LIST')
         let regex12 = new RegExp('QASH')
         let regex13 = new RegExp('JASH')
         let regex14 = new RegExp('CASH')
         let regex15 = new RegExp('XASH')
         let regex16 = new RegExp('DASH')
         let regex17 = new RegExp('EASG')
         let regex18 = new RegExp('YASH')
         let regex19 = new RegExp('UASH')
          if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'*👑ҚɪЛƓ 卂ϻᗪ卂👑 Anime List*\n\n*╭───────────●●▷*\n*│*\n*│🔖: .loli*\n*│🔖: .wifu*\n*│🔖: .neko*\n*│🔖: .ava*\n*│🔖: .kemo*\n*│🔖: .awoo*\n*│🔖: .shinobu*\n*│🔖: .megumin*\n*│*\n*╰───────────●●▷*', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'*╔═════◉King Amda◉═════╗*\n*▷👑ҚɪЛƓ 卂ϻᗪ卂👑* *මීම් ලැයිස්තුව*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit:Pasindu Samarasingha*' , MessageType.text, {quoted: message.data })
         }
          else if (regex3.test(message.message)) {
             await message.client.sendMessage(message.jid,'*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*\n*👑ҚɪЛƓ 卂ϻᗪ卂 TTP List👑*\n *《《──── « ⋅ʚ♡ɞ⋅ » ────》》*\n\n*╭───────────●●▷*\n*│*\n*│📑: .tblue < your Text>*\n*│📑: .tyellow < your Text>*\n*│📑: .tgreen< your Text>*\n*│📑: .tpink < your Text>*\n*│📑: .tpurple < your Text>*\n*│📑: .tred < your Text>*\n*│📑: .tblack < your Text>*\n*│📑: .tbrown < your Text>*\n│📑: .tpurple < your text>\n*│*\n*╰───────────●●▷*', MessageType.text, {quoted: message.data })
         }
         else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
         else if (regex5.test(message.message)) {
           await message.client.sendMessage(message.jid,'*◁=====👑ҚɪЛƓ 卂ϻᗪ卂👑 Admin Panel====▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n*🌀විධානය* : .rename\n*💠විස්තරය* : සමූහයෙ නම වෙනස් කරයි.\n\n*🌀විධානය* : .safemode on -off\n*💠විස්තරය* : අර queen මේ queen ඔයාගෙ ගෲප් එක ස්පෑම් ගහන්න හැදුවොත් Auto Remove.', MessageType.text, {quoted: message.data })
         }
          else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n👑', MessageType.text, {quoted: message.data })
         }
          else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
          else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
          else if (regex9.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
         else if (regex10.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
         else if (regex11.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }   
         else if (regex12.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
         else if (regex13.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }

         else if (regex14.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }

         else if (regex15.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
        
         else if (regex16.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
        
         else if (regex17.test(message.message)) {
            await message.client.sendMessage(message.jid,'*👑', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
        
         else if (regex19.test(message.message)) {
            await message.client.sendMessage(message.jid,'👑', MessageType.text, {quoted: message.data })
         }
        
 }));
