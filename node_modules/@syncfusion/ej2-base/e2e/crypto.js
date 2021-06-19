var crypto = require("crypto");
global.encrypt_decrypt = {
    "encrypt": function(data) {
        var key = "syncfusion";
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(data, 'utf-8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    "decrypt": function(data) {
        var key = "syncfusion";
        var decipher = crypto.createDecipher('aes-256-cbc', key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }
};
