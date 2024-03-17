const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = require('../tensile-oarlock-416923-3be4eca09e8a.json');

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

export const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        let realResponse = CirilicToLatinic(response);
        return realResponse;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

const CirilicToLatinic = (text) => {
    text = text.replaceAll("а", "a");
    text = text.replaceAll("б", "b");
    text = text.replaceAll("в", "v");
    text = text.replaceAll("г", "g");
    text = text.replaceAll("д", "d");
    text = text.replaceAll("ђ", "đ");
    text = text.replaceAll("е", "e");
    text = text.replaceAll("ж", "ž");
    text = text.replaceAll("з", "z");
    text = text.replaceAll("и", "i");
    text = text.replaceAll("ј", "j");
    text = text.replaceAll("к", "k");
    text = text.replaceAll("л", "l");
    text = text.replaceAll("љ", "lj");
    text = text.replaceAll("м", "m");
    text = text.replaceAll("н", "n");
    text = text.replaceAll("њ", "nj");
    text = text.replaceAll("о", "o");
    text = text.replaceAll("п", "p");
    text = text.replaceAll("р", "r");
    text = text.replaceAll("с", "s");
    text = text.replaceAll("т", "t");
    text = text.replaceAll("ћ", "ć");
    text = text.replaceAll("у", "u");
    text = text.replaceAll("ф", "f");
    text = text.replaceAll("х", "h");
    text = text.replaceAll("ц", "c");
    text = text.replaceAll("ч", "č");
    text = text.replaceAll("џ", "dž");
    text = text.replaceAll("ш", "š");
    text = text.replaceAll("А", "A");
    text = text.replaceAll("Б", "B");
    text = text.replaceAll("В", "V");
    text = text.replaceAll("Г", "G");
    text = text.replaceAll("Д", "D");
    text = text.replaceAll("Ђ", "Đ");
    text = text.replaceAll("Е", "E");
    text = text.replaceAll("Ж", "Ž");
    text = text.replaceAll("З", "Z");
    text = text.replaceAll("И", "I");
    text = text.replaceAll("Ј", "J");
    text = text.replaceAll("К", "K");
    text = text.replaceAll("Л", "L");
    text = text.replaceAll("Љ", "LJ");
    text = text.replaceAll("М", "M");
    text = text.replaceAll("Н", "N");
    text = text.replaceAll("Њ", "NJ");
    text = text.replaceAll("О", "O");
    text = text.replaceAll("П", "P");
    text = text.replaceAll("Р", "R");
    text = text.replaceAll("С", "S");
    text = text.replaceAll("Т", "T");
    text = text.replaceAll("Ћ", "Ć");
    text = text.replaceAll("У", "U");
    text = text.replaceAll("Ф", "F");
    text = text.replaceAll("Х", "H");
    text = text.replaceAll("Ц", "C");
    text = text.replaceAll("Ч", "Č");
    text = text.replaceAll("Џ", "DŽ");
    text = text.replaceAll("Ш", "Š");
    
    return text;
}