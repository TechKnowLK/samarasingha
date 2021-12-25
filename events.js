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


var config = require('./config');
var Commands = [];

function addCommand(info, func) {
    
    var types = ['photo', 'image', 'text', 'message'];

    var infos = {
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], // Or Sudo
        onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
        onlyPinned: info['onlyPinned'] === undefined ? false : info['onlyPinned'],
        onlyPm: info['onlyPm'] === undefined ? false : info['onlyPm'],
        deleteCommand: info['deleteCommand'] === undefined ? true : info['deleteCommand'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        usage: info['usage'] === undefined ? '' : info['usage'],
        dontAddCommandList: info['dontAddCommandList'] === undefined ? false : info['dontAddCommandList'],
        warn: info['warn'] === undefined ? '' : info['warn'],
        function: func
    };

    if (info['on'] === undefined && info['pattern'] === undefined) {
        infos.on = 'message';
        infos.fromMe = false;
    } else if (info['on'] !== undefined && types.includes(info['on'])) {
        infos.on = info['on'];

        if (info['pattern'] !== undefined) {
            infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
        }
    } else {
        infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
    }

    Commands.push(infos);
    return infos;
}

module.exports = {
    addCommand: addCommand,
    commands: Commands
}
