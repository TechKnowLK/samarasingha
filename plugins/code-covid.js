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
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');

//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {

    Kingamda.addCommand({pattern: "watch lk ?(.*)", fromMe: true, desc: Clang.COV_DESC, dontAddCommandList: true}, (async (message, match) => {
          if (match[1] === "sl" || match[1] === "srilanka" || match[1] === "Sri lanka" || match[1] === "Srilnka" || match[1] === "srelanka") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri Lanka").then(async ok  => {
                    AMDA = JSON.parse(ok.body);
                    await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n😷 *සම්පූර්ණ වාර්තාවීම් :* ${AMDA.cases}\n🏥 *අදදින වාර්තාවීම් :* ${AMDA.todayCases}\n⚰️ *මුළු මරණ සංඛ්‍යාව :* ${AMDA.deaths}\n☠️ *අද දින මරණ :* ${AMDA.todayDeaths}\n💊 *සුවය ලැබූ මුළු ගණන :* ${AMDA.recovered}\n😷 *සක්‍රිය වාර්තාවීම් :* ${AMDA.active}\n🆘 *තහවුරු නොවූ :* ${AMDA.critical}\n🧪 *පරීක්ෂා කර ඇති මුළු ගණන :* ${AMDA.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
        }));

}

else if (config.WORKTYPE == 'public') {

       Kingamda.addCommand({pattern: "watch lk ?(.*)", fromMe: false, desc: Clang.COV_DESC, dontAddCommandList: true}, (async (message, match) => {
          if (match[1] === "sl" || match[1] === "srilanka" || match[1] === "Sri lanka" || match[1] === "Srilnka" || match[1] === "srelanka") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri Lanka").then(async ok  => {
                    AMDA = JSON.parse(ok.body);
                    await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n\n😷 *සම්පූර්ණ වාර්තාවීම් :* ${AMDA.cases}\n🏥 *අදදින වාර්තාවීම් :* ${AMDA.todayCases}\n⚰️ *මුළු මරණ සංඛ්‍යාව :* ${AMDA.deaths}\n☠️ *අද දින මරණ :* ${AMDA.todayDeaths}\n💊 *සුවය ලැබූ මුළු ගණන :* ${AMDA.recovered}\n😷 *සක්‍රිය වාර්තාවීම් :* ${AMDA.active}\n🆘 *තහවුරු නොවූ :* ${AMDA.critical}\n🧪 *පරීක්ෂා කර ඇති මුළු ගණන :* ${AMDA.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
        }));

//===================================================================================================================================================================================================

        Kingamda.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC, dontAddCommandList: true}, (async (message, match) => {
            if (match[1] === "sl" || match[1] === "srilanka" || match[1] === "Sri lanka" || match[1] === "Srilnka" || match[1] === "srelanka") {
              try{
                  const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri Lanka").then(async ok  => {
                      AMDA = JSON.parse(ok.body);
                      await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n😷 *සම්පූර්ණ වාර්තාවීම් :* ${AMDA.cases}\n🏥 *අදදින වාර්තාවීම් :* ${AMDA.todayCases}\n⚰️ *මුළු මරණ සංඛ්‍යාව :* ${AMDA.deaths}\n☠️ *අද දින මරණ :* ${AMDA.todayDeaths}\n💊 *සුවය ලැබූ මුළු ගණන :* ${AMDA.recovered}\n😷 *සක්‍රිය වාර්තාවීම් :* ${AMDA.active}\n🆘 *තහවුරු නොවූ :* ${AMDA.critical}\n🧪 *පරීක්ෂා කර ඇති මුළු ගණන :* ${AMDA.totalTests}`);
  
                  });
  
              } catch (err) {
                  await message.reply(`Error : \n${err.message}`, MessageType.text)
              }
          }
          else {
              return await message.client.sendMessage(
                  message.jid,
                  Clang.NOT,
                  MessageType.text
              );
          }
          }));

          

}
