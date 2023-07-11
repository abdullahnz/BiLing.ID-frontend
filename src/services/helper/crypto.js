import CryptoJS from 'crypto-js';

const secretkey = process.env.APP_SECRETKEY || "secretkeyasdasda"

export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretkey).toString();
}

export const decrypt = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, secretkey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}