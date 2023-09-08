import { Request, Response, NextFunction } from "express";

import { returnError } from "./response.handler";
import * as CryptoJS from "crypto-js";
import { EMAIL_SUBJECT, EMAILS } from "../../constants/enums";
import { OTP } from '../../emailTemplate/otpTemplate';
import { COLLECTIVE } from "../../emailTemplate/collectiveTemplate";
import { ORDER } from "../../emailTemplate/orderTemplate";
import { DONATION } from "../../emailTemplate/donationTemplate";
import { CONTACT } from "../../emailTemplate/contactUsTemplate";
const nodemailer = require("nodemailer");
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

export async function sendEmail(email: any, data: any, type= 'otp') {
  try {
    let subject;
    let body;
    if(type === EMAILS.OTP){
      subject = EMAIL_SUBJECT.OTP;
      body = OTP(data)
    } else if(type === EMAILS.COLLECTIVE){
      subject = EMAIL_SUBJECT.COLLECTIVE;
      body = COLLECTIVE(data)
    }else if(type === EMAILS.ORDER){
      subject = EMAIL_SUBJECT.ORDER;
      body = ORDER(data)
    }else if(type === EMAILS.DONATION){
      subject = EMAIL_SUBJECT.DONATION;
      body = DONATION(data)
    }else if(type === EMAILS.CONTACT){
      subject = EMAIL_SUBJECT.CONTACT;
      body = CONTACT(data)
    }
   
    const info = await transporter.sendMail({
      from: '"Satyug" <'+process.env.NODEMAILER_EMAIL+'>', 
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
