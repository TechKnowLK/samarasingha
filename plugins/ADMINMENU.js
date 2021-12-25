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
Youtube -  Techkonwlk  
*/

const Kingamda = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('kingamda');
const tk = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({pattern: 'admin2', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

    await message.sendMessage (Buffer.from (), MessageType.text, `        

*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*
      *》》》───ADMIN MENU───《《《*
*《《────── « ⋅ʚ♡ɞ⋅ » ──────》》*

📌 Command: !install
🔸 Description: Install external plugins.

📌 Command: !plugin
🔸 Description: Shows the plugins you have installed.

📌 Command: !remove
🔸 Description: Removes the plugin.

📌 Command: !ban
🔸 Description: Ban someone in the group. Reply to message or tag a person to use command.

📌 Command: !add
🔸 Description: Adds someone to the group.

📌 Command: !promote
🔸 Description: Makes any person an admin.

📌 Command: !demote
🔸 Description: Takes the authority of any admin.

📌 Command: !mute
🔸 Description: Mute the group chat. Only the admins can send a message.

📌 Command: !unmute
🔸 Description: Unmute the group chat. Anyone can send a message.

📌 Command: !invite
🔸 Description: Provides the groups invitation link.

📌 Command: !afk
🔸 Description: It makes you AFK - Away From Keyboard.

📌 Command: !del
🔸 Description: Deletes The Replied Message Send By The Bot [ ✅ Official External Plugin ]

📌 Command: !justspam
🔸 Description: spam the sticker you replyed.

📌 Command: !welcome
🔸 Description: It sets the welcome message. If you leave it blank it shows the welcome message.

📌 Command: !goodbye
🔸 Description: Sets the goodbye message. If you leave blank, it shows the goodbye message

📌 Command: !phelp
🔸 Description: Gives information about using the bot from the Help menu.

📌 Command: !degis

📌 Command: !restart
🔸 Description: Restart pinky

📌 Command: !shutdown
🔸 Description: Shutdown pinky

📌 Command: !dyno
🔸 Description: Check heroku dyno usage

📌 Command: !setvar
🔸 Description: Set heroku config var

📌 Command: !delvar
🔸 Description: Delete heroku config var

📌 Command: !getvar
🔸 Description: Get heroku config var

📌 Command: !leave
🔸 Description: It kicks you from the group you are using it in.

📌 Command: !pp
🔸 Description: Makes the profile photo what photo you reply.

📌 Command: !block
🔸 Description: Block user.

📌 Command: !unblock
🔸 Description: Unblock user.

📌 Command: !jid
🔸 Description: Giving users JID.

📌 Command: !scam
🔸 Description: Creates 5 minutes of fake actions.

📌 Command: !spam
🔸 Description: It spam until you stop it.⌨️ Example: .spam test

📌 Command: !filtre
🔸 Description: add filtre in chatseg: .filter "input" "output"

📌 Command: !tagall
🔸 Description: Tags everyone in the group.

📌 Command: !stam
🔸 Description: sends the replyed messages to all the members in the group 

📌 Command: !update
🔸 Description: Checks the update.

📌 Command: update now
🔸 Description: It makes updates.

*╔════**║ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ➼*
             *Pasindu Samara$ingha ║* 
                                                        *════╝*
`) 

 }));
