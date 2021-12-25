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

const fs = require('fs')
const Kingamda = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Kingamda.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "gm" "Good Morning"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Kingamda.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
//=========================Private STAT=======================
//=========================Private START=======================

Kingamda.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919778042644@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','onam']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

//=================voice reyply=========================
//======================================================
Kingamda.addCommand({on: 'text', fromMe: true}, (async (message, match) => {
    if(Config.VOICEFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '94786238616@s.whatsapp.net') {
    await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
    const array = ['api asarana vela','api asarana wela','api thamayi hodatama kare','bim','bin','brazzers','dilwale','fuck','ganjaa','heminiyan','hodhatama kare','huththa','huththo','karapu heti','keriya','left','mama thamayi hodatama kare','not responding','olmaadha baduwak','olmaadhe','olmade','pak','pakaya','pakayo','pamkaya','pamkayo','pem sitha','pronhub','randika','uththo','utti','uttige','utto','vakubadu','vesi','wesi','wtf','xnxx','gamja','run','ammage redda','bombayi motayi','kata vakkade','ateth ekkkama','ded','malakeliyayi','daam veno duum veno','oya podda podda','dhathuvada','balu veda','balu weda','drop eka pudanna','me sepa loke','gm','hahaha','hattikee','haththike','me monata me vela thiyenne','apen ekeki eee minisa','yawvanane ee sagayaa','mata mage novana','mata mage nowana','katada ban me boru karanne','uba vage gon harakek','uba vage gonek','no god','panda remix','vushana kosha','Wushana kosha','thalagannaepa']
    array.map( async (a) => {
    let pattern = new RegExp(`\\b${a}\\b`, 'g');
    if(pattern.test(message.message)){
    /*
    if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.recording)
            }, 4000)
        }
        */
       await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
    }
    });
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
    }));

}
//=========================Private End=======================
//=========================Private End=======================

else if (Config.WORKTYPE == 'public') {

Kingamda.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Kingamda.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
//=================voice reyply=========================
//======================================================
Kingamda.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.VOICEFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '94785457519@s.whatsapp.net') {
    await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
    const array = ['api asarana vela','api asarana wela','api thamayi hodatama kare','bim','bin','brazzers','dilwale','fuck','ganjaa','heminiyan','hodhatama kare','huththa','huththo','karapu heti','keriya','left','mama thamayi hodatama kare','not responding','olmaadha baduwak','olmaadhe','olmade','pak','pakaya','pakayo','pamkaya','pamkayo','pem sitha','pronhub','randika','uththo','utti','uttige','utto','vakubadu','vesi','wesi','wtf','xnxx','gamja','run','ammage redda','bombayi motayi','kata vakkade','ateth ekkkama','ded','malakeliyayi','daam veno duum veno','oya podda podda','dhathuvada','balu veda','balu weda','drop eka pudanna','me sepa loke','gm','hahaha','hattikee','haththike','me monata me vela thiyenne','apen ekeki eee minisa','yawvanane ee sagayaa','mata mage novana','mata mage nowana','katada ban me boru karanne','uba vage gon harakek','uba vage gonek','no god','panda remix','vushana kosha','Wushana kosha','thalagannaepa']
    array.map( async (a) => {
    let pattern = new RegExp(`\\b${a}\\b`, 'g');
    if(pattern.test(message.message)){
    /*
    if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.recording)
            }, 4000)
        }
        */
       await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
    }
    });
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
    }));


    Kingamda.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.AUTOSTICKER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919778042644@s.whatsapp.net') {
    await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
        }
    const array = ['hi','mk','adareyi','love','modi','gmmac','na','kawada','gm','gn','umma','mkna']
    array.map( async (a) => {
    let pattern = new RegExp(`\\b${a}\\b`, 'g');
    if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
    }
    });
    }
    }));
    }



    //===========================ALL END=====================
    //================================================
    //================================================
