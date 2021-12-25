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
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ANIME = "\n\n  *👑ҚɪЛƓ 卂ϻᗪ卂👑 Anime List*\n\n*╭───────────●●▷*\n*│*\n*│🔖: .loli*\n*│🔖: .wifu*\n*│🔖: .neko*\n*│🔖: .ava*\n*│🔖: .kemo*\n*│🔖: .awoo*\n*│🔖: .shinobu*\n*│🔖: .megumin*\n*│*\n*╰───────────●●▷*"
const fs = require('fs');
const Ln = "Anime List"
const axios = require('axios');
let Language = require('../language');
let Lang = Language.getString('kingamda');
const Config = require('../config');
let tk = Config.WORKTYPE == 'public' ? false : true


    Kingamda.addCommand({ pattern: 'loli ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));

    Kingamda.addCommand({ pattern: 'ava ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/avatar?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));

    Kingamda.addCommand({ pattern: 'kemo ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/kemonomimi?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));

    Kingamda.addCommand({ pattern: 'wifu ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.HSITE}.herokuapp.com/api/sfw/waifu?apikey=${Config.BAPIKEY}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));


    Kingamda.addCommand({ pattern: 'awoo ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.HSITE}.herokuapp.com/api/sfw/awoo?apikey=${Config.BAPIKEY}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));   
    
    
    Kingamda.addCommand({ pattern: 'shinobu ?(.*)', fromMe: tk, dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.HSITE}.herokuapp.com/api/sfw/shinobu?apikey=${Config.BAPIKEY}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));

    Kingamda.addCommand({ pattern: 'megumin ?(.*)', fromMe: tk, dontAddCommandList: true}, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.HSITE}.herokuapp.com/api/sfw/megumin?apikey=${Config.BAPIKEY}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));

    Kingamda.addCommand({ pattern: 'alist ?(.*)', fromMe: tk, dontAddCommandList: false, desc: Lang.ANIMELIST,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Kingamda.addCommand({ pattern: 'neko ?(.*)', fromMe: tk, dontaddCommandList: false, desc: Lang.ANIMELIST,}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.HSITE}.herokuapp.com/api/sfw/neko?apikey=${Config.BAPIKEY}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:'*ඇම්ඩා තමයි හොදටම කරෙ🤪*'})
    
    }));
