import { ORDER_SUBJECT } from '../emailTemplate/orderTemplate';
import { COLLECTIVE_SUBJECT } from '../emailTemplate/collectiveTemplate';
import { OTP_SUBJECT } from '../emailTemplate/otpTemplate';
import { DONATION_SUBJECT } from '../emailTemplate/donationTemplate';
import { CONTACT_SUBJECT } from '../emailTemplate/contactUsTemplate';
export const EMAILS = {
    OTP: 'otp',
    COLLECTIVE: 'collective',
    ORDER: 'order',
    DONATION: 'donation',
    CONTACT: 'contact'
};

export const EMAIL_SUBJECT = {
    OTP: OTP_SUBJECT,
    COLLECTIVE: COLLECTIVE_SUBJECT,
    ORDER: ORDER_SUBJECT,
    DONATION: DONATION_SUBJECT,
    CONTACT: CONTACT_SUBJECT
};

export const GAME_TOKEN = {
    GameAccessToken: 'gameAccessToken',
    GameVerifyToken: 'gameVerifyToken',
    UserRegisterToken: 'userRegisterToken'
};

export const GAME_VERIFY_TOKEN = {
    gameAccessToken: 'GameAccessToken',
    gameVerifyToken: 'GameVerifyToken',
    userRegisterToken: 'UserRegisterToken'
};

export const OTP_TYPE = {
    login: 'Login',
    collectible: 'Collectible'
};

export const BUCKET_TYPE = {
    collectibles: 'collectibles',
    products: 'products'
};

export const ARTIVIVE_IMAGE = {
    1: '1.jpeg',
    2: '2.jpeg',
    3: '3.jpeg',
    4: '4.jpeg',
    5: '5.jpeg'
};