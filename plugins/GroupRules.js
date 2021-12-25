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
const sql = require('./sql/greetings');
const Language = require('../language');
const Lang = Language.getString('greetings');
const hd = "*《《──── « ⋅ʚ♡ɞ⋅ » ────》》*\n    *》》──Group Rules─《《*\n*《《──── « ⋅ʚ♡ɞ⋅ » ────》》* \n\n"
const pw = "◄●👑 *ҚɪЛƓ 卂ϻᗪ卂* 👑●►"

Kingamda.addCommand({pattern: 'rules', fromMe: true, desc: Lang.RULE_DESC}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hd + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

Kingamda.addCommand({pattern: 'setrules (.*)', fromMe: true, desc: Lang.SETRULE_DESC}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_RULE_TEXT,MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.RULE_DELETED,MessageType.text); return await sql.deleteMessage(message.jid, 'rule'); }
        await sql.setMessage(message.jid, 'rule', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.RULE_SETTED,MessageType.text)
    }
}));

Kingamda.addCommand({pattern: 'rules', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hd + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

Kingamda.addCommand({pattern: 'setrules (.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
	await message.sendMessage("Only Admins can Set Rules in this Group.")
}));
