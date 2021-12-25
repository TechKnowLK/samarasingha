const logomaker = require('kingamda-logomaker'); // Import NPM Package

const Kingamda = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('textmaker');
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvS2luZ0FtZGEtdjI=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
let wk = Config.WORKTYPE == 'public' ? false : true

Kingamda.addCommand({pattern: 'textmaker ?(.*)', fromMe: wk, desc: Lang.TEXTMAKER_DESC}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    var t47 = ''
    var t48 = ''
    var t49 = ''
    var t50 = ''
    var t51 = ''
    var t52 = ''
    var t53 = ''
    var t54 = ''
    var t55 = ''
    var t56 = ''
    var t57 = ''
    var t58 = ''
    var t59 = ''
    var t60 = ''
    var t61 = ''
    var t62 = ''
    var t63 = ''
    var t64 = ''
    var t65 = ''
    var t66 = ''
    var t67 = ''
    var t68 = ''
    var t69 = ''
    var t70 = ''
    var t71 = ''
    var t72 = ''
    var t73 = ''
    var t74 = ''
    var t75 = ''
    var t76 = ''
    var t77 = ''
    var t78 = ''
    var t79 = ''
    var t80 = ''
    var t81 = ''
var t82 = ''
var t83 = ''
var t84 = ''
var t85 = ''
var t86 = ''
var t87 = ''
var t88 = ''
var t89 = ''
var t90 = ''
var t91 = ''
var t92 = ''
var t93 = ''
var t94 = ''
var t95 = ''
var t96 = ''
var t97 = ''
var t98 = ''
var t99 = ''
var t101 = ''
var t102 = ''
var t103 = ''
var t104 = ''
var t105 = ''
var t106 = ''
var t107 = ''
var t108 = ''
var t109 = ''
var t110 = ''
var t111 = ''
var t112 = ''
var t113 = ''
var t114 = ''
var t115 = ''
var t116 = ''

    
    if (Config.LANG == 'SI') {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = 'Makes a Second Black and Pink Themed Logo.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Makes PUBG Themed Video Logo.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Makes Road Themed Logo.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Makes a Sad Themed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Makes Animated Bear Logo.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Makes Animated Puppy Logo.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Makes Second PUBG Themed Video Logo.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Makes Third PUBG Themed Logo.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Makes Heart Animated Logo.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Makes Fourth Graffiti Themed Logo.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Makes a Second Space Themed Logo.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Makes Angel Themed Logo.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Makes Leaf Themed Logo.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Makes Gold Themed Logo.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Makes a Third Space Themed Logo.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Makes Third Flame Themed Logo.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Makes Fifth Graffiti Themed Logo.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Makes Snow Themed Logo.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Makes a Second Color Gradient Themed Logo.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Makes a Sixth Neon Themed Logo.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Makes a Hot Air Balloon Themed Logo.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Makes a Second Gold Themed Logo.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Makes Matrix Themed Logos.' // https://en.ephoto360.com/matrix-text-effect-154.html
        t81 = 'Makes a Sevent Neon Themed Logo.' //https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"

        t82 = 'Makes a Cloud Text Logo.' //https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"

        t83 = 'Makes a Summer Text Logo.' //https://textpro.me/write-in-sand-summer-beach-free-online-991.html"

        t84 = 'Makes a Sand Text Logo.' //https://textpro.me/sand-writing-text-effect-online-9100.html"

        t85 = 'Makes a Secound Sand Text Logo.' //https://textpro.me/sand-engraved-3d-text-effect-989.html"

        t86 = 'Makes a Summery Text Logo.' //https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"

        t87 = 'Makes a Glossy Carbon Logo.' //https://textpro.me/glossy-carbon-text-effect-965.html"

        t88 = 'Makes a Captain America Logo.' //https://textpro.me/captain-america-text-effect-1005.html"

        t89 = 'Makes a Drop Water Effcet Text Logo.' //https://textpro.me/dropwater-text-effect-872.html"

        t90 = 'Makes a 3d Luxury Text Logo.' //https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"

        t91 = 'Makes a 3d gradient Text Logo.' //https://textpro.me/3d-gradient-text-effect-online-free-1002.html"

        t92 = 'Makes a Another Cloud Text Logo.' //https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"

        t93 = 'Makes a Black&Pink Text Logo.' //https://textpro.me/create-blackpink-logo-style-online-1001.html"

        t94 = 'Makes a Wonderful Graffiti Text Logo.' //https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"

        t95 = 'Makes a Multicolor Logo.' //https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"

        t96 = 'Makes a Foggy Window Logo.' //https://textpro.me/write-text-on-foggy-window-online-free-1015.html"

        t97 = 'Makes a Watercolor Text Logo.' //https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"

        t98 = 'Makes a Art Paper Text Logo.' //https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"

        t99 = 'Makes a Embossed Text Effect Logo.' //https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"

        t100 = 'Makes a deep sea Text Logo.' //https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"

        t101 = 'Makes a Broken Glass Logo.' //https://textpro.me/broken-glass-text-effect-free-online-1023.html"

        t102 = 'Makes a Impressive Glitch Text Logo.' //https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"

        t103 = 'Makes a Stone Cracked Logo.' //https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"

        t104 = 'Makes a Magma Text Logo.' //https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"

        t105 = 'Makes a thunder Text Logo.' //https://textpro.me/online-thunder-text-effect-generator-1031.html"

        t106 = 'Makes a transformer Logo.' //https://textpro.me/create-a-transformer-text-effect-online-1035.html"

        t107 = 'Makes a berry Text Logo.' //https://textpro.me/create-berry-text-effect-online-free-1033.html"

        t108 = 'Makes a science fiction Text Logo.' //https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"

        t109 = 'Makes a horror Text Logo.' //https://textpro.me/create-green-horror-style-text-effect-online-1036.html"

        t110 = 'Makes a glossy metalic Text Logo.' //https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"

        t111 = 'Makes a metallic Text Logo.' //https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"

        t112 = 'Makes a circuit Text Logo.' //https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"

        t113 = 'Makes a 3d water pipe Text Logo.' //https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"

        t114 = 'Makes a scisci Text Effect.' //https://textpro.me/create-3d-sci-sci-text-effect-online-1050.html"

        t115 = 'Makes a candy Text Logo.' //https://textpro.me/create-christmas-candy-cane-text-effect-1056.html"

        t116 = 'Makes a christmas Text Logo.' //https://textpro.me/3d-christmas-text-effect-by-name-1055.html"


       
   }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = 'Makes a Second Black and Pink Themed Logo.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Makes PUBG Themed Video Logo.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Makes Road Themed Logo.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Makes a Sad Themed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Makes Animated Bear Logo.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Makes Animated Puppy Logo.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Makes Second PUBG Themed Video Logo.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Makes Third PUBG Themed Logo.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Makes Heart Animated Logo.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Makes Fourth Graffiti Themed Logo.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Makes a Second Space Themed Logo.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Makes Angel Themed Logo.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Makes Leaf Themed Logo.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Makes Gold Themed Logo.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Makes a Third Space Themed Logo.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Makes Third Flame Themed Logo.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Makes Fifth Graffiti Themed Logo.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Makes Snow Themed Logo.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Makes a Second Color Gradient Themed Logo.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Makes a Sixth Neon Themed Logo.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Makes a Hot Air Balloon Themed Logo.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Makes a Second Gold Themed Logo.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Makes Matrix Themed Logos.' // https://en.ephoto360.com/matrix-text-effect-154.html
        t81 = 'Makes a Sevent Neon Themed Logo.' //https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
        t82 = 'Makes a Cloud Text Logo.' //https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
        t83 = 'Makes a Summer Text Logo.' //https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
        t84 = 'Makes a Sand Text Logo.' //https://textpro.me/sand-writing-text-effect-online-9100.html"
        t85 = 'Makes a Secound Sand Text Logo.' //https://textpro.me/sand-engraved-3d-text-effect-989.html"
        t86 = 'Makes a Summery Text Logo.' //https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
        t87 = 'Makes a Glossy Carbon Logo.' //https://textpro.me/glossy-carbon-text-effect-965.html"
        t88 = 'Makes a Captain America Logo.' //https://textpro.me/captain-america-text-effect-1005.html"
        t89 = 'Makes a Drop Water Effcet Text Logo.' //https://textpro.me/dropwater-text-effect-872.html"
        t80 = 'Makes a 3d Luxury Text Logo.' //https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
        t91 = 'Makes a 3d gradient Text Logo.' //https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
        t92 = 'Makes a Another Cloud Text Logo.' //https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
        t93 = 'Makes a Black&Pink Text Logo.' //https://textpro.me/create-blackpink-logo-style-online-1001.html"
        t94 = 'Makes a Wonderful Graffiti Text Logo.' //https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
        t95 = 'Makes a Multicolor Logo.' //https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
        t96 = 'Makes a Foggy Window Logo.' //https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
        t97 = 'Makes a Watercolor Text Logo.' //https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
        t98 = 'Makes a Art Paper Text Logo.' //https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
        t99 = 'Makes a Embossed Text Effect Logo.' //https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
        t100 = 'Makes a deep sea Text Logo.' //https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
        t101 = 'Makes a Broken Glass Logo.' //https://textpro.me/broken-glass-text-effect-free-online-1023.html"

        t102 = 'Makes a Impressive Glitch Text Logo.' //https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"

        t103 = 'Makes a Stone Cracked Logo.' //https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"

        t104 = 'Makes a Magma Text Logo.' //https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"

        t105 = 'Makes a thunder Text Logo.' //https://textpro.me/online-thunder-text-effect-generator-1031.html"

        t106 = 'Makes a transformer Logo.' //https://textpro.me/create-a-transformer-text-effect-online-1035.html"

        t107 = 'Makes a berry Text Logo.' //https://textpro.me/create-berry-text-effect-online-free-1033.html"

        t108 = 'Makes a science fiction Text Logo.' //https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"

        t109 = 'Makes a horror Text Logo.' //https://textpro.me/create-green-horror-style-text-effect-online-1036.html"

        t110 = 'Makes a glossy metalic Text Logo.' //https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"


        t111 = 'Makes a metallic Text Logo.' //https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"


        t112 = 'Makes a circuit Text Logo.' //https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"


        t113 = 'Makes a 3d water pipe Text Logo.' //https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"

        t114 = 'Makes a scisci Text Effect.' //https://textpro.me/create-3d-sci-sci-text-effect-online-1050.html"

        t115 = 'Makes a candy Text Logo.' //https://textpro.me/create-christmas-candy-cane-text-effect-1056.html"

        t116 = 'Makes a christmas Text Logo.' //https://textpro.me/3d-christmas-text-effect-by-name-1055.html"

     

        

    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI' || Config.LANG == 'si') {
        command_cmd = '✒️ *විදානය:* '
        usage_cmd = '📝 *උදා:* _'
        desc_cmd = '📌 *විස්තරෙ:* _'
    } else { 
        command_cmd = '✒️ *Command:* '
        usage_cmd = '*📝 Example:* _'
        desc_cmd = '📌 *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '.textdevil KingAmda\n\n' +
        command_cmd + '```.text2devil``` \n' + desc_cmd + t55 + '_\n' + usage_cmd + '.text2devil KingAmda\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear KingAmda\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf King/Amda\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon KingAmda\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon KingAmda\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon KingAmda\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon KingAmda\n\n' +
        command_cmd + '```.text5neon``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '.text5neon KingAmda\n\n' +
        command_cmd + '```.text6neon``` \n' + desc_cmd + t77 + '_\n' + usage_cmd + '.text6neon KingAmda\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight KingAmda\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker KingAmda\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja King/Amda\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter KingAmda\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh KingAmda\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel King/Amda\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel King/Amda\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers King/Amda\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf King/Amda\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf King/Amda\n\n' +  
        command_cmd + '```.text3graf``` \n' + desc_cmd + t53 + '_\n' + usage_cmd + '.text3graf KingAmda\n\n' +
        command_cmd + '```.text4graf``` \n' + desc_cmd + t67 + '_\n' + usage_cmd + '.text4graf KingAmda\n\n' +
        command_cmd + '```.text5graf``` \n' + desc_cmd + t74 + '_\n' + usage_cmd + '.text5graf KingAmda\n\n' +
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion King/Amda\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice KingAmda\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace King/Amda\n\n' +
        command_cmd + '```.text2space``` \n' + desc_cmd + t68 + '_\n' + usage_cmd + '.text2space KingAmda\n\n' +
        command_cmd + '```.text3space``` \n' + desc_cmd + t72 + '_\n' + usage_cmd + '.text3space KingAmda\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke KingAmda\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow KingAmda\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire KingAmda\n\n' +
        command_cmd + '```.text2fire``` \n' + desc_cmd + t46 + '_\n' + usage_cmd + '.text2fire KingAmda\n\n' +
        command_cmd + '```.text3fire``` \n' + desc_cmd + t73 + '_\n' + usage_cmd + '.text3fire KingAmda\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry KingAmda\n\n' +
        command_cmd + '```.text2harry``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '.text2harry KingAmda\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup KingAmda\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery KingAmda\n\n' +
        command_cmd + '```.textstone``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '.textstone KingAmda\n\n' +
        command_cmd + '```.textgradient``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '.textgradient KingAmda\n\n' +
        command_cmd + '```.text2gradient``` \n' + desc_cmd + t76 + '_\n' + usage_cmd + '.text2gradient KingAmda\n\n' +
        command_cmd + '```.textmagma``` \n' + desc_cmd + t35 + '_\n' + usage_cmd + '.textmagma KingAmda\n\n' +
        command_cmd + '```.textbglass``` \n' + desc_cmd + t36 + '_\n' + usage_cmd + '.textbglass KingAmda\n\n' +
        command_cmd + '```.textpaper``` \n' + desc_cmd + t37 + '_\n' + usage_cmd + '.textpaper KingAmda\n\n' +
        command_cmd + '```.textmetal``` \n' + desc_cmd + t38 + '_\n' + usage_cmd + '.textmetal KingAmda\n\n' +
        command_cmd + '```.textwcolor``` \n' + desc_cmd + t39 + '_\n' + usage_cmd + '.textwcolor KingAmda\n\n' +
        command_cmd + '```.textart``` \n' + desc_cmd + t40 + '_\n' + usage_cmd + '.textart KingAmda\n\n' +
        command_cmd + '```.text3d``` \n' + desc_cmd + t41 + '_\n' + usage_cmd + '.text3d King/Amda\n\n' +
        command_cmd + '```.text2light``` \n' + desc_cmd + t42 + '_\n' + usage_cmd + '.text2light KingAmda\n\n' +
        command_cmd + '```.textrobo``` \n' + desc_cmd + t43 + '_\n' + usage_cmd + '.textrobo KingAmda\n\n' +
        command_cmd + '```.textblood``` \n' + desc_cmd + t44 + '_\n' + usage_cmd + '.textblood KingAmda\n\n' +
        command_cmd + '```.text2blood``` \n' + desc_cmd + t45 + '_\n' + usage_cmd + '.text2blood KingAmda\n\n' +
        command_cmd + '```.textpink``` \n' + desc_cmd + t47 + '_\n' + usage_cmd + '.textpink KingAmda\n\n' +
        command_cmd + '```.text2pink``` \n' + desc_cmd + t58 + '_\n' + usage_cmd + '.text2pink KingAmda\n\n' +
        command_cmd + '```.textsand``` \n' + desc_cmd + t48 + '_\n' + usage_cmd + '.textsand KingAmda\n\n' +
        command_cmd + '```.text2sand``` \n' + desc_cmd + t49 + '_\n' + usage_cmd + '.text2sans KingAmda\n\n' +
        command_cmd + '```.text3sand``` \n' + desc_cmd + t50 + '_\n' + usage_cmd + '.text3sand KingAmda\n\n' +
        command_cmd + '```.text4sand``` \n' + desc_cmd + t51 + '_\n' + usage_cmd + '.text4sand KingAmda\n\n' +
        command_cmd + '```.textberry``` \n' + desc_cmd + t52 + '_\n' + usage_cmd + '.textberry KingAmda\n\n' +
        command_cmd + '```.texthub``` \n' + desc_cmd + t54 + '_\n' + usage_cmd + '.texthub Thiccy;Hub_\n\n' +
        command_cmd + '```.textretro``` \n' + desc_cmd + t56 + '_\n' + usage_cmd + '.textretro King/Amda\n\n' +
        command_cmd + '```.textsci``` \n' + desc_cmd + t57 + '_\n' + usage_cmd + '.textsci KingAmda\n\n' +
        command_cmd + '```.textpubg``` \n' + desc_cmd + t59 + '_\n' + usage_cmd + '.textpubg KingAmda\n\n' +
        command_cmd + '```.textroad``` \n' + desc_cmd + t60 + '_\n' + usage_cmd + '.textroad KingAmda\n\n' +
        command_cmd + '```.textsad``` \n' + desc_cmd + t61 + '_\n' + usage_cmd + '.textsad KingAmda\n\n' +
        command_cmd + '```.textabear``` \n' + desc_cmd + t62 + '_\n' + usage_cmd + '.textabear KingAmda\n\n' +
        command_cmd + '```.textpuppy``` \n' + desc_cmd + t63 + '_\n' + usage_cmd + '.textpuppy KingAmda\n\n' +
        command_cmd + '```.text2pubg``` \n' + desc_cmd + t64 + '_\n' + usage_cmd + '.text2pubg KingAmda\n\n' +
        command_cmd + '```.text3pubg``` \n' + desc_cmd + t65 + '_\n' + usage_cmd + '.text3pubg KingAmda\n\n' +
        command_cmd + '```.textheart``` \n' + desc_cmd + t66 + '_\n' + usage_cmd + '.textheart KingAmda\n\n' +
        command_cmd + '```.textangel``` \n' + desc_cmd + t69 + '_\n' + usage_cmd + '.textangel KingAmda\n\n' +
        command_cmd + '```.textleaf``` \n' + desc_cmd + t70 + '_\n' + usage_cmd + '.textleaf KingAmda\n\n' +
        command_cmd + '```.textgold``` \n' + desc_cmd + t71 + '_\n' + usage_cmd + '.textgold KingAmda\n\n' +
        command_cmd + '```.text2gold``` \n' + desc_cmd + t79 + '_\n' + usage_cmd + '.text2gold KingAmda\n\n' +
        command_cmd + '```.textsnow``` \n' + desc_cmd + t75 + '_\n' + usage_cmd + '.textsnow KingAmda\n\n' +
        command_cmd + '```.textballoon``` \n' + desc_cmd + t78 + '_\n' + usage_cmd + '.textballoon KingAmda\n\n' +
        command_cmd + '```.textmatrix``` \n' + desc_cmd + t80 + '_\n' + usage_cmd + '.textmatrix KingAmda\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch King/Amda\n\n' +
        command_cmd + '```.text2glitch``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '.text2glitch King/Amda\n\n' +
        command_cmd + '```.text7neon``` \n' + desc_cmd + t81 + '_\n' + usage_cmd +'.text7neon Kingamda \n\n' + 
        command_cmd + '```.textcloud``` \n' + desc_cmd + t82 + '_\n' + usage_cmd +'.textcloud Kingamda \n\n' + 
        command_cmd + '```.textsummer``` \n' + desc_cmd + t83 + '_\n' + usage_cmd +'.textsummer Kingamda \n\n' +
        command_cmd + '```.textsand``` \n' + desc_cmd + t84 + '_\n' + usage_cmd +'.textsand Kingamda \n\n' + 
        command_cmd + '```.text2sand``` \n' + desc_cmd + t85 + '_\n' + usage_cmd +'.text2sand Kingamda \n\n' + 
        command_cmd + '```.text3sand``` \n' + desc_cmd + t86 + '_\n' + usage_cmd +'.text3sand Kingamda \n\n' +
        command_cmd + '```.textcarbon``` \n' + desc_cmd + t87 + '_\n' + usage_cmd +'.textcarbon Kingamda \n\n' + 
        command_cmd + '```.textcaptain``` \n' + desc_cmd + t88 + '_\n' + usage_cmd +'.textcaptain Kingamda \n\n' + 
        command_cmd + '```.textdropwater``` \n' + desc_cmd + t89 + '_\n' + usage_cmd +'.textdropwater Kingamda \n\n' + 
        command_cmd + '```.textluxury``` \n' + desc_cmd + t90 + '_\n' + usage_cmd +'.textluxury Kingamda \n\n' +
        command_cmd + '```.textgradient``` \n' + desc_cmd + t91 + '_\n' + usage_cmd +'.textgradient Kingamda \n\n' +
        command_cmd + '```.text2cloud``` \n' + desc_cmd + t92 + '_\n' + usage_cmd +'.text2cloud Kingamda \n\n' + 
        command_cmd + '```.textbalckpink``` \n' + desc_cmd + t93 + '_\n' + usage_cmd +'.textbalckpink Kingamda \n\n' +
        command_cmd + '```.textgraffiti``` \n' + desc_cmd + t94 + '_\n' + usage_cmd +'.textgraffiti Kingamda \n\n' +
        command_cmd + '```.textmulticolor``` \n' + desc_cmd + t95 + '_\n' + usage_cmd +'.textmulticolor Kingamda \n\n' +
        command_cmd + '```.textfoggy``` \n' + desc_cmd + t96 + '_\n' + usage_cmd +'.textfoggy Kingamda \n\n' +
        command_cmd + '```.textwatercolor``` \n' + desc_cmd + t97 + '_\n' + usage_cmd +'.textwatercolor Kingamda \n\n' + 
        command_cmd + '```.textpaper``` \n' + desc_cmd + t98 + '_\n' + usage_cmd +'.textpaper Kingamda \n\n' +
        command_cmd + '```.textcracked``` \n' + desc_cmd + t99 + '_\n' + usage_cmd +'.textcracked Kingamda \n\n' +
        command_cmd + '```.textglass``` \n' + desc_cmd + t100 + '_\n' + usage_cmd +'.textglass Kingamda \n\n' + 
        command_cmd + '```.textiglitch``` \n' + desc_cmd + t101 + '_\n' + usage_cmd +'.textiglitch Kingamda \n\n' + 
        command_cmd + '```.textstone``` \n' + desc_cmd + t102 + '_\n' + usage_cmd +'.textstone Kingamda \n\n' + 
        command_cmd + '```.textmagma``` \n' + desc_cmd + t103 + '_\n' + usage_cmd +'.textmagma Kingamda \n\n' +
        command_cmd + '```.textthunder``` \n' + desc_cmd + t104 + '_\n' + usage_cmd +'.textthunder Kingamda \n\n' +
        command_cmd + '```.texttransformer``` \n' + desc_cmd + t105 + '_\n' + usage_cmd +'.texttransformer Kingamda \n\n' + 
        command_cmd + '```.textberry``` \n' + desc_cmd + t106 + '_\n' + usage_cmd +'.textberry Kingamda \n\n' + 
        command_cmd + '```.textscience``` \n' + desc_cmd + t107 + '_\n' + usage_cmd +'.textscience Kingamda \n\n' +
        command_cmd + '```.texthorror``` \n' + desc_cmd + t108 + '_\n' + usage_cmd +'.texthorror Kingamda \n\n' +
        command_cmd + '```.textglossy``` \n' + desc_cmd + t109 + '_\n' + usage_cmd +'.textglossy Kingamda \n\n' +
        command_cmd + '```.textmetallic``` \n' + desc_cmd + t110 + '_\n' + usage_cmd +'.textmetallic Kingamda \n\n' +
        command_cmd + '```.textcircuit``` \n' + desc_cmd + t111 + '_\n' + usage_cmd +'.textcircuit Kingamda \n\n' +
        command_cmd + '```.text3dwater``` \n' + desc_cmd + t112 + '_\n' + usage_cmd +'.text3dwater Kingamda \n\n' +
        command_cmd + '```.textsifi``` \n' + desc_cmd + t113 + '_\n' + usage_cmd +'.textsifi Kingamda \n\n' +
        command_cmd + '```.textcandy``` \n' + desc_cmd + t114 + '_\n' + usage_cmd +'.textcandy Kingamda \n\n' + 
        command_cmd + '```.textchristmas``` \n' + desc_cmd + t115 + '_\n' + usage_cmd +'.textchristmas Kingamda \n\n' + 
        command_cmd + '```.textdeepsea``` \n' + desc_cmd + t116 + '_\n' + usage_cmd +'.textdeepsea Kingamda' 

    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));

Kingamda.addCommand({pattern: 'textpencil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

Kingamda.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/devil.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/devil.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

























Kingamda.addCommand({pattern: 'text7neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsummer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcarbon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcaptain ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/captain-america-text-effect-905.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textdropwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/dropwater-text-effect-872.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textluxury ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textgradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2cloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textbalckpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textgraffiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmulticolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textfoggy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textwatercolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textpaper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcracked ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textiglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textstone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textthunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'texttransformer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textscience ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'texthorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textglossy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmetallic ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcircuit ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3dwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsifi ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcandy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textchristmas ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textdeepsea ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));





















Kingamda.addCommand({pattern: 'textleaf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textmatrix ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text2gradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textballoon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textsnow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text2gold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text5graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text3fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text2space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE})
}));
Kingamda.addCommand({pattern: 'textgold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text3space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textangel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text2pink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textabear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.gif })
}));
Kingamda.addCommand({pattern: 'text6neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textheart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.gif })
}));
Kingamda.addCommand({pattern: 'text4graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textpuppy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.gif })
}));
Kingamda.addCommand({pattern: 'textroad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textsad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'text3pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var img = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
}));
Kingamda.addCommand({pattern: 'textpubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var vid = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.mp4 })
}));

















Kingamda.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var vid = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.mp4 })
}));

















Kingamda.addCommand({pattern: 'text2pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    var vid = await logomaker.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.KARE, mimetype: Mimetype.mp4 })
}));
Kingamda.addCommand({pattern: 'text2devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/devil2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/devil2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'texthub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/hub.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/hub.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textretro ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/retr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/retr.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t3gr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t3gr.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/bry.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/bry.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text4sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t4snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t4snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t3snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t3snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t2snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t2snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/fh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/fh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tpink.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tpink.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/cbld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/cbld.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textblood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/bld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/bld.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t2lgh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t2lgh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textrobo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/robo.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/robo.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3d ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/3dl.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/3dl.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tart.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tart.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textwcolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/wcolor.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/wcolor.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/magma.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/magma.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmetal ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/metal.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/metal.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textpaper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/papert.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/papert.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textbglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/glass.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/glass.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text5neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t5neon.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t5neon.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textgradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tgrone.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tgrone.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/hp2n.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/hp2n.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textstone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/stone.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/stone.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/bear.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/bear.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/wolf.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/wolf.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/neon.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/neon.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/neon2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/neon2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/li.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/li.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/joker.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/joker.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/ninja.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/ninja.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tt.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tt.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/bkh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/bkh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/marvel.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/marvel.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/mar2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/mar2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/aven.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/aven.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/samarasingha/t2gl.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t2gl.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tt2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tt2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/ttgra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/ttgra.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t2gra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t2gra.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/lion.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/lion.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/neon3.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/neon3.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/ice.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/ice.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    logomaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/space.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/space.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/smoke.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/smoke.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/samarasingha/glowttp.png', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/glowttp.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
    })
}));
Kingamda.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/tfire.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/tfire.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/hp.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/hp.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/t4n.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/t4n.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/cmth.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/cmth.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Kingamda.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEEDWORD,MessageType.text);
    logomaker.photooxy ("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/cup.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/cup.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));














Kingamda.addCommand({pattern: 'texthub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED2WORD,MessageType.text);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    logomaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/samarasingha/hub.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/samarasingha/hub.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.KARE })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));