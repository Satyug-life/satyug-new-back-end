import { Request, Response, NextFunction } from "express";

import { returnError } from "./response.handler";
import * as CryptoJS from "crypto-js";
import { Bangla, DefaultLang, EMAILS, English, Gujrati, Hindi, Kanada, LANGUAGE, Marathi, Tamil, Telugu } from "../../constants/enums";
import { SEND_EMAIL } from "../../emailTemplate/emailTemplate";
// import { OTP } from '../../emailTemplate/otpTemplate';
// import { COLLECTIVE } from "../../emailTemplate/collectiveTemplate";
// import { ORDER } from "../../emailTemplate/orderTemplate";
// import { DONATION } from "../../emailTemplate/donationTemplate";
// import { CONTACT } from "../../emailTemplate/contactUsTemplate";
import { BAGICHA, BHOJNALAYA, CERTIFICATE, KARMAPOINTS, MURTI, ORDER, PHYSICAL_THALI, POOJA_INITIATED, PRASAD_DELIVERED, PRASAD_OUT_FOR_DELIVERY, VIRTUAL_THALI, COLLECTIVE, DONATION, CONTACT, OTP } from "../../constants/emailBody.constant"
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';
import { sendSuccess } from "../succes-handler/response-handler";
const nodemailer = require("nodemailer");
import { INVOICE } from '../../emailTemplate/invoice1';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

const PROJECT_NAME_ENCRYPTION_KEY = process.env.PROJECT_NAME_ENCRYPTION_KEY;
const encryption_key = `${PROJECT_NAME_ENCRYPTION_KEY}Encryption`;
export const encryptBody = async (data: any) => {
  try {
    // Encrypt
    const cipherText: any = CryptoJS.AES.encrypt(
      data,
      encryption_key
    ).toString();
    return cipherText;
  } catch (error) {
    console.log("error == ", error);
    return returnError(true, 'Invalid body token.');
  }
};

export async function sendEmail(email: any, data: any, type = 'otp', lang = 'en') {
  try {
    console.log("data0000000000000000000", data, typeof data)
    if (typeof data === 'object') {
      data["appPath"] = process.env.APP_BASE_PATH
    }
    let subject;
    let body;

    switch (LANGUAGE[lang]) {
      case 'English':
        subject = English[type];
        break;
      case 'Hindi':
        subject = Hindi[type];
        break;
      case 'Tamil':
        subject = Tamil[type];
        break;
      case 'Telugu':
        subject = Telugu[type];
        break;
      case 'Marathi':
        subject = Marathi[type];
        break;
      case 'Kanada':
        subject = Kanada[type];
        break;
      case 'Gujrati':
        subject = Gujrati[type];
        break;
      case 'Bangla':
        subject = Bangla[type];
        break;
      default:
        subject = DefaultLang[type]; // Default to English
    }

    if (type === EMAILS.OTP) {
      console.log("data, lang======", data, lang)
      body = SEND_EMAIL(OTP(data, lang), lang)
      console.log(body, "body----------")
    }

    else if (type === EMAILS.COLLECTIVE) {
      // subject = `Welcome to Digital Ram Mandir`
      body = SEND_EMAIL(COLLECTIVE(data, lang), lang)
    }

    else if (type === EMAILS.ORDER) {
      // subject = `PURCHASE  DETAILS`;
      body = SEND_EMAIL(ORDER(data, lang), lang)
    }

    else if (type === EMAILS.DONATION) {
      // subject = `Digital Ram Mandir - Donations`;
      body = SEND_EMAIL(DONATION(data, lang), lang)
    }
    else if (type === EMAILS.CONTACT) {
      // subject = `Contact us`;
      body = SEND_EMAIL(CONTACT(data, lang), lang)
    }
    else if (type === EMAILS.PHYSICAL_THALI) {
      // subject = `Physical pooja of Shree Ram`;
      body = SEND_EMAIL(PHYSICAL_THALI(data, lang), lang)
    }
    else if (type === EMAILS.POOJA_INITIATED) {
      // subject = `Pooja initiated`;
      body = SEND_EMAIL(POOJA_INITIATED(data, lang), lang)
    }
    else if (type === EMAILS.PRASAD_OUT_FOR_DELIVERY) {
      // subject = `Prasad out for Delivery`;
      body = SEND_EMAIL(PRASAD_OUT_FOR_DELIVERY(data, lang), lang)
    }
    else if (type === EMAILS.PRASAD_DELIVERED) {
      // subject = `Prasad Delivered Successfully`;
      body = SEND_EMAIL(PRASAD_DELIVERED(data, lang), lang)
    }
    else if (type === EMAILS.VIRTUAL_THALI) {

      // subject = `Buying Thali for Prasad and Aarti`;
      body = SEND_EMAIL(VIRTUAL_THALI(data, lang), lang)
    }

    else if (type === EMAILS.MURTI) {
      // subject = `Shringaar of Lord Ram`
      body = SEND_EMAIL(MURTI(data, lang), lang)
    }
    else if (type === EMAILS.BAGICHA) {
      // subject = `Bagiche ka nirman`
      body = SEND_EMAIL(BAGICHA(data, lang), lang)
    }
    else if (type === EMAILS.BHOJNALAYA) {
      // subject = `Bhojnalaya Ki Dakshina`
      body = SEND_EMAIL(BHOJNALAYA(data, lang), lang)
    }
    else if (type === EMAILS.CERTIFICATE) {
      // subject = `Digital Ram Mandir Certificate`
      body = SEND_EMAIL(CERTIFICATE(data, lang), lang)
    }
    else if (type === EMAILS.KARMAPOINTS) {
      // subject = `Thank you for sharing our application.`
      body = SEND_EMAIL(KARMAPOINTS(data, lang), lang)
    }
    const info = await transporter.sendMail({
      from: '"Digital Ram Mandir" <' + process.env.NODEMAILER_EMAIL + '>',
      to: email,
      subject: subject,
      text: body,
      html: body,
    });
    console.log("Message sent: %s", info.messageId);
    return {
      message: 'OTP send successfully',
    };
  } catch (error) {
    console.log('EMAIL ERROR ::: ', error);
    return returnError(
      true,
      error?.response?.body?.errors[0]?.message,
      error.code,
    );
  }
}

export async function generateOtp() {
  try {
    const otpCode: number = Math.floor(100000 + Math.random() * 900000);
    return otpCode;
  } catch (error: any) {
    return returnError(true, error.message);
  }
};

export async function generateRandomString32(length = 32) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export async function generatePdf(data: any) {
  try {
    const filePath = path.join(__dirname, '../../../');
    const options: puppeteer.PDFOptions = {
      format: 'A4',
      // margin: {
      //   top: '0px',
      //   right: '0px',
      //   bottom: '0px',
      //   left: '0px',
      // },
      // width: '8.5in',
      // height: '11in',
    };
    const browser = await puppeteer.launch({
      headless: true, ignoreHTTPSErrors: true,
      slowMo: 10,
      executablePath: '/usr/bin/chromium-browser',
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox"
      ]
    });
    const page = await browser.newPage();
    await page.setContent(INVOICE(data));
    const pdfBuffer = await page.pdf(options);
    await browser.close();
    fs.writeFileSync(data?.name, pdfBuffer);
    console.log('PDF generation successfully:');
    return sendSuccess(false, 'PDF generation successfully', filePath)
  } catch (error) {
    // Handle the error, log it, or send an appropriate response
    console.error('Error in PDF generation controller:', error);
    return returnError(true, 'Error in PDF generation controller:');
  }
}

