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

const kingamda = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('_kingamda');

if (Config.WORKTYPE == 'private') {

    kingamda.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
        var CMD_HELP = '';
        if (match[1] === '') {
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );

            await message.client.sendMessage(message.jid, '*『》》》────⪼ ◔͜◔ ⪻────《《《』*\n*╔══╗*\n*╚╗╔╝*\n*╔╝(>‿◔)*\n*╚══`.¸.[ 👑 ҚɪЛƓ 卂ϻᗪ卂👑 ]*\n   *〉〉〉42 Sҽƚ Eƙα Tҽαɱ Wσɾƙ〈〈〈*\n\n*『》》》────⪼ ◔͜◔ ⪻────《《《』*\n*╔════*\n*║ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ➼*\n             *Pasindu Samara$ingha ║*\n                                            *════╝*\n*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n  *》》》》》》───MENU───《《《《《《*\n*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n\n'+ CMD_HELP, MessageType.text,{quoted: message.data}); 
       }
       else {
            var CMD_HELP = '';
            
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                  }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));
    }
if (Config.WORKTYPE == 'public') {
    
     kingamda.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: false, dontAddCommandList: true}, (async (message, match) => {
         
        var CMD_HELP = '';
        if (match[1] === '') {
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
            await message.client.sendMessage(message.jid, '*『》》》────⪼ ◔͜◔ ⪻────《《《』*\n*╔══╗*\n*╚╗╔╝*\n*╔╝(>‿◔)*\n*╚══`.¸.[ 👑 ҚɪЛƓ 卂ϻᗪ卂👑 ]*\n   *〉〉〉42 Sҽƚ Eƙα Tҽαɱ Wσɾƙ〈〈〈*\n\n*『》》》────⪼ ◔͜◔ ⪻────《《《』*\n*╔════*\n*║ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ➼*\n             *Pasindu Samara$ingha ║*\n                                            *════╝*\n*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n  *》》》》》》───MENU───《《《《《《*\n*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*\n\n'+ CMD_HELP, MessageType.text,{quoted: message.data});
       }
       else {
            var CMD_HELP = '';
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                      }
                   }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));

kingamda.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: true, dontAddCommandList: true}, (async (message, match) => {
         
        var CMD_HELP = '';
        if (match[1] === '') {
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
             
       }
       else {
            var CMD_HELP = '';
            kingamda.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                      }
                   }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));
}
