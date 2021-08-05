import CryptoJS from "crypto-js";

class EncryptionService<T> {

    getSecretKey(): string {
        const key = process.env.REACT_APP_SECRET_KEY;
        console.log(`Secret Key: ${key}`);
        return key ? key : "";
    }

    encrypt(data: T): string {
        return CryptoJS.AES.encrypt(JSON.stringify(data), this.getSecretKey()).toString();
    }

    decrypt(data: string): T {
        const bytes = CryptoJS.AES.decrypt(data, this.getSecretKey());
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

}

export default EncryptionService;
