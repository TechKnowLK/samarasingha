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
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('kingamda');
const tk = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({pattern: 'menu', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 15) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 15 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

 *╭─「 ᴄᴏᴍᴍᴀɴᴅs ᴘᴀɴᴇʟ」*
 *│*
 *├─────────●●▷*
 *│👋HEY,*  `+wish+`
 *│🤵‍♂️Name:* `+Config.BOT_NAME+`
 *│Time⌚:* `+time+`
 *│📡Server:* Digital Ocean
 *│🛢️Frameworks:* Nodejs
 *│☬Working As*
 *│⚙️ `+Config.WORKTYPE+`*
 *│*
 *│Developer:* 
 *│    Pasindu Samara$ingha*
 *│_42 Set Eka Team Work_*
 *╰──────────●●▷*

*╭──────────●●▷*
*│🛡️BOT COMMANDS*
*│*   ───────
*│*
*│⎔ .`+Config.PANEL_COMMAND+` [All command list]*
*│⎔ .alive [Check bot status]*
*│⎔ .bot [chat with bot]*
*│⎔ .admin [ for owner ]*
*│⎔ .version [check Version* 
*│⎔.update [check Update]*
*│⎔.update now [get update ]*
*│⎔.restart* 
*╰───────────●●▷*

*╭───────────●●▷*
*│🎴STICKER COMMANDS*
*│*      ───────
*│⎔ .attp [text ]*
*│⎔ .sticker*
*│⎔ .photo*
*│⎔ .listp*
*╰────────────●●▷*

*╭────────────●●▷*
*│💾TEXT TO IMG*
*│*   ───────
*│⎔ .textimg* 
*│⎔ .prologo (unlimited logos)*
*│⎔ .prologo your Text*
*│⎔ .moretext*
*│⎔ .ffpack [Free fire Logo pack]*
*│⎔ .ttp [ text ]*
*│⎔ .dttp [ text ]*
*│⎔ .trumpsay [ text ]*
*│⎔ .changesay [ text ]*
*│⎔ .animesay [ text ]*
*│⎔ .meme*
*│⎔ .listp*
*│⎔ .mmpack*
*╰────────────●●▷*

*╭────────────●●▷*
*│🔖DOWNLOAD COMMANDS*
*│*      ────────
*│⎔ .video [ Yt Link]*
*│⎔.mp4    [Name]*
*│⎔.audio  [yt link ]*
*│⎔ .download  [status download]*
*│⎔.song  [ song name ]*
*│⎔.dcsong [ song name ]*
*│⎔.img [ name ]*
*│⎔.fb  link ]*
*│⎔.tiktok [ link ]*
*│⎔.vinsta  [ Insta Video ]*
*│⎔.pinsta [ Insta Post ]*
*│⎔.twt [twitter video Link]*
*│⎔.mediafire*
*╰────────────●●▷*

*╭────────────●●▷*
*│🔍SEARCH COMMANDS*
*│*     ──────────
*│⎔ .yt [ topic ]*
*│⎔ .wiki [text ]*
*│⎔ .movie [ movie name ]*
*│⎔ .github [ name ]*
*│⎔ .show [tv series ]*
*│⎔ .weather [ city ]*
*│*
*╰────────────●●▷*

*╭────────────●●▷*
*│🛸GROUP COMMANDS*
*│*  ─────────
*│⎔ .rename [change name]*
*│⎔ .rules    [check rules]*
*│⎔ .info [check details]*
*│⎔ .tagadmin*
*│⎔.antispm*
*│⎔.clear*
*│⎔ .report*
*│⎔ .tagall*  
*│⎔ .ban [ for owner ]*
*│⎔ .add [ for owner ]*
*│⎔ .promote [ for owner ]*
*│⎔ .demote [ for owner ]*
*│⎔ .invite [ for owner ]*
*│⎔ .leave [ for owner ]*
*│⎔.welcome*
*│⎔.goodbye*
*╰───────────●●▷*

*╭───────────●●▷*
*│🎨MEDIA TOOLS*
*│*      ───────
*│⎔ .axmedia [25+ tools]*
*│⎔ .tblend*
*│⎔.ocr [Read Text]*
*│⎔.mp3 [Video To mp3]*
*│⎔ .ffmpeg [fade in:0:30 ]*
*│⎔ .removebg*
*│⎔ .spdf [convent site to pdf]*
*│⎔ .voicy*
*│⎔ .unvoice [mp3 to voice]*
*╰───────────●●▷*

*╭───────────●●▷*
*│⚡MORE COMMAND*
*│*  ────────
*│⎔.scan*
*│⎔.brdmore*
*│⎔.rdmore*
*│⎔.tts*
*│⎔.gm*
*│⎔.gn*
*│⎔.ftext*
*│⎔ .wallpaper*
*│⎔ .anime*
*│⎔ .listanim*
*│⎔ .device*
*│⎔ .currency*
*│⎔ .ss [link ]*
*│⎔ .afk [ bot is online ]*
*│⎔ .short { link ]*
*│⎔ .wame [ get user link ]*
*│⎔ .currency*
*│⎔ .trt { en si }*
*│⎔ .notes*
*│⎔ .save*
*│⎔ .deleteNotes*
*│⎔ .covid  [ covid LK]*
*╰────────────●●▷*

*╭───────────●●▷*
*│⚙️BOT SETTINGS*
*│*    ───────
*│⎔ .pp [set profilr pic]*
*│⎔.autobio on/off [change bio ]*
*│⎔.whatsblock on [WA link Block]* 
*│⎔.inblock on /off*
*│⎔.work public /private*
*│⎔.setrules*
*│⎔ .setvar*
*│ ▷EMOJI_COMMAND:🛡️ [change Cmd emoj]*
*│ ▷EMOJI_DESCRIPTION:  🔍 [change des emoj]*
*│ ▷EMOJI_EXAMPLE:🔆 [change ex emoji]*
*│ ▷EMOJI_WARNING:⚠️ [change war emoj]*
*│ ▷BOT_NAME: <bot name> [change NAME]*
*│ ▷BIO: <your Text> [change bio]*
*│ ▷MENU_LOGO: <link> [change Logo]*
*│ ▷CAPTION: <text> [change caption]*
*│ ▷MENUINFO: <text> [change Menu info]*
*│ ▷SUDO: <number> [add sudo]*
*│*    
*│THANK FOR*
*│USING*
*│👑ҚɪЛƓ 卂ϻᗪ卂👑*
*│42 SET EKA TEAM WORK*
*╰───────────●●▷*
 
`}) 

 }));
