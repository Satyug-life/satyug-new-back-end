import { comnTemp } from "../constants/message.constant";

export const OTP_SUBJECT = ` Welcome to Digital Ram Mandir - Your one time password`;
export const SEND_EMAIL = (data, lang) => {
    const res: any = comnTemp(lang)
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template Xegara</title>
    <style>
        html,
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0 auto !important;
            padding: 0 !important;
            height: auto;
            width: 100% !important;
            background: #fff;
        }
        

        /* What it does: Stops email clients resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            box-sizing: border-box;
        }

        /* What it does: Centers email on Android 4.4 */
        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        /* What it does: Stops Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        /* What it does: Fixes webkit padding issue. */
        table {
            border-spacing: 0 !important;
            /* border-collapse: collapse !important; */
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        /* What it does: Uses a better rendering method when resizing images in IE. */
        img {
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
        a {
            text-decoration: none;
        }

        /* What it does: A work-around for email clients meddling in triggered links. */
        *[x-apple-data-detectors],
        /* iOS */
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        /* What it does: Prevents Gmail from changing the text color in conversation threads. */
        .im {
            color: inherit !important;
        }

        /* If the above doesn't work, add a .g-img class to any image in question. */
        img.g-img+div {
            display: none !important;
        }


        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
        /* Create one of these media queries for each additional viewport size you'd like to fix */
        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .email-container {
                min-width: 320px !important;
            }
        }

        /* iPhone 6, 6S, 7, 8, and X */
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .email-container {
                min-width: 375px !important;
            }
        }

        /* iPhone 6+, 7+, and 8+ */
        @media only screen and (min-device-width: 414px) {
            u~div .email-container {
                min-width: 414px !important;
            }
        }
         .get_img {
            background-image: url(https://dvf7opio6knc7.cloudfront.net/email/bg.png);
            padding: 8px 30px;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0;
            color: #000;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            background-position: center;
            display: block !important;
        }
    </style>
    <style>
        @media screen and (max-width: 767px) {


            .logo {
                width: 100%;
            }

        }


        @media screen and (max-width: 575px) {
            .footer_cell {
                display: block;
                text-align: center;
                width: 100% !important;
                padding: 15px 0 !important;

            }

            .footer_cell h3 {
                margin-bottom: 0 !important;
                text-align: center !important;
            }

            .h1 {
                font-size: 20px !important;
                line-height: 1.3 !important;
                padding-bottom: 15px !important;
            }


            .content {
                padding: 6px 14px !important;
            }

            .footer {
                padding: 17px 18px !important;
            }

            .h2 {
                font-size: 17px !important;
                font-weight: 600 !important;
                line-height: 1.3 !important;

            }

            .text {
                font-size: 19px !important;

                line-height: 1.3 !important;

            }

            .stats-icon img {
                max-width: 150px !important;
            }

            .logo-outer {
                padding: 30px 90px !important;
            }

            .main {
                padding: 0px 23px 35px 21px !important;
            }

            .stats-heading {
                font-size: 16px !important;
            }

            .logo {
                width: 100%;
                // max-width: 116px !important;
            }
        }
         .get_img {
            background-image: url(https://dvf7opio6knc7.cloudfront.net/email/bg.png);
            padding: 8px 30px;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0;
            color: #000;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            background-position: center;
            display: block !important;
        }

        .table_img {
            max-width: 27px;
            width: 100%;
        }
    </style>
    <style>
        @media screen and (max-width: 575px) {
            .get_img {
                background-position: center !important;
                font-size: 10px !important;
                background-size: contain;
                padding: 2px 4px;
            }
        }
    </style>
    <style>
        @media screen and (max-width: 375px) {
            .get_img {
                background-position: center !important;
                font-size: 10px !important;
                background-size: contain;
                padding: 6px 16px;
            }

            .main {
                padding: 0 15px 57px !important;
            }
        }
    </style>
</head>

<body>
    <table class="main-handle" style="
        border: 0;
        max-width: 640px;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: separate !important;
      ">
        <tbody>
            <tr>
                <td class="logo-outer"
                    style="width: 100%; background-color: #1E1D24; text-align: center;padding: 61px 0 0 0; max-width: 160px;">
                    <img class="logo" src="https://dvf7opio6knc7.cloudfront.net/image.png"
                        style="vertical-align: bottom;  width: 100%;max-width: 160px;" alt="Logo">
                </td>
            </tr>
            <tr>
                <td class="main"
                    style="width: 100%; background: #1E1D24;padding: 0 40px 57px 40px ; margin: 0; box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.01);">
                    <table style="width: 100%; border-spacing: 0;">
                        <tbody>
                            <tr>
                                <td class="stats-heading"
                                    style="text-align: center;padding: 30px 0; border-bottom: 1px solid #FFD08B ;max-width: 560px;width: 100%;">
                                    <h1 style="font-size: 32px; font-weight: 400;color: #FEC045;margin: 0;">${res?.heading}</h1>
                                </td>
                            </tr>
                            <tr>
                               <td style=" width: 100%;text-align: center;padding: 18px 0 25px 0;margin: 0;   ">
                                   <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;"></h3>
                              </td>
                            </tr>
                            <tr>
                           
                            <!--Dynamic Body Start -->
                            ${data}
                            <!--Dynamic Body End -->                   
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content" style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                       ${res?.donation}<br/> <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-913382841" style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-913382841</a></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="footer" style="background-color: #313131; padding: 30px 60px;">
                    <table style="width: 100%; margin: 0 auto;">
                        <tbody>
                        <tr>

                        <td class="footer_cell"
                            style="vertical-align: top;width: 100%; padding-left: 18px;text-align: center;">
                            <a href="https://www.facebook.com/DigitalRamMandir?mibextid=ZbWKwL" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/facebook%20logo.png"
                                style="width:  20px;height:  20px;" alt=""></a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDigiRamMandir" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/twitter logo.png" style="width:  20px;height:  20px;" alt=""></a>
                        <a href="https://www.instagram.com/digitalrammandir/?utm_source=qr&igshid=YTlmZjI0ZWMzOA%3D%3D" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/instagram%20logo.png" style="width:  20px;height:  20px;" alt=""></a>
                        <!--<a href="https://discord.gg/3JJMfCag8A" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/discordicon.png" style="width:  20px;height:  20px;" alt=""></a>
                        <a href="https://github.com/Satyug-life/Satyug-website" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/githubicon.png" style="width:  20px;height:  20px;" alt=""></a>
                        <a href="https://www.reddit.com/r/satyug/" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/reddit-solid.png" style="width:  20px;height:  20px;" alt=""></a>
                        <a href="https://t.me/+h5ablpKtH39mYzg1" style="display: inline-block;margin-right:  27px;" target="_blank"><img
                                src="https://dvf7opio6knc7.cloudfront.net/email/telegramicon.png" style="width:  20px;height:  20px;" alt=""></a> -->   

                                <h3 class="text"
                                style="margin:0; font-size: 12px; ; line-height: 1.8;margin-top: 20px; color: #7D7D7D;font-family: Arial, Helvetica, sans-serif;; font-weight: normal;">
                                All rights reserved. Copyright © Satyug</h3>
                        </td>
                    </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- </td>
  </tr>
  </tbody>
  </table> -->
</body>

</html>

`
}

