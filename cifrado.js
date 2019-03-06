/*
Info
https://gist.github.com/503945930/4fe93be5b7738495b6fcace84478454e
*/

var crypto = require("crypto");

function encrypt(key, data) {
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(data, 'utf-8', 'hex');
        //crypted += cipher.final('hex');
        crypted += cipher.final('base64');


        return crypted;
}

function decrypt(key, data) {
        var decipher = crypto.createDecipher('aes-256-cbc', key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');

        return decrypted;
}

var key = "4pPl1c4t1oNdR1Ven4CdFt30F1G4Mmdc";
var idUser = "43005";
var idPayment = "0";

var encIDUSER = encrypt(key, idUser);
var encIDPAYM = encrypt(key, idPayment);

console.log("IDUser encriptado "+encIDUSER.toUpperCase());
//console.log("IDPAYM encriptado "+encIDPAYM.toUpperCase());


