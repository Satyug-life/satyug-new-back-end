import { BAGICHA_BODY, BHOJNALAYA_BODY, CERTIFICATE_BODY, COLLECTIVE_BODY, DONATION_BODY, KARMAPOINTS_BODY, MURTI_BODY, ORDER_BODY, OTP_BODY, PHYSICAL_BODY, POOJA_INITIATED_BODY, PRASAD_DELIVERED_BODY, PRASAD_OUT_FOR_DELIVERY_BODY, VIRTUAL_BODY } from "./message.constant";


export const OTP = (otp, lang) => {
    const res: any = OTP_BODY(otp, lang)
    return `<tr>
        <td style=" width: 100%;text-align: center;padding: 18px 0 25px 0;margin: 0;   ">
            <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">${otp}</h3>
        </td>
    </tr>
    <tr>
        <td
            style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
            <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.txt}</p>
        </td>
        </tr>`
}

export const CONTACT = (data, lang) => `
<tr>
    <td
        style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
        <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">Name: ${data?.firstName} ${data?.lastName}</p>
        <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">Email: ${data?.email}</p>
        <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">Message: ${data?.message}</p>
    </td>
</tr>`;

export const ORDER = (data, lang) => {
    const res: any = ORDER_BODY(data, lang)
    return `<tr>
        <td style=" width: 100%;text-align: center;padding: 18px 0 25px 0;margin: 0;   ">
            <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">${res?.t1}</h3>
        </td>
    </tr>
    <tr>
        <td
            style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
            <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t2}</p>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: center;padding:31px 0 13px 0;margin: 0;   ">
            <h3 style="font-size: 16px; font-weight: 700;color: #FFF;margin: 0;">${res?.t3}</h3>
        </td>
    </tr>


    <tr>
        <td style="width: 100%;padding: 0 ;">
            <table
                style="width: 100%;background: #2E2E2E;text-align: center; max-width:560px;padding: 5px; ">
                <thead>
                    <tr style="font-size: 14px;color: rgba(255, 255, 255, 0.50);">
                        <th>S. No.</th>
                        <th>Asset_Image</th>
                        ${data.type == "t-shirt"
            ? `<th>Size</th>`
            : ""
        } 
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="font-size: 14px;color: #FFF;padding-top: 12px;">
                        <td>1</td>
                        <td>
                            <img class="table_img" src="${data?.img
        }" alt="" style="height:70px">
                        </td>
                        ${data.type == "t-shirt"
            ? "<td>" +
            data?.size +
            "</td>"
            : ""
        }
                        <td>${data?.qty}</td>
                        <td>₹${data?.price}</td>
                    </tr>
                </tbody>
            </table>
        </td>

    </tr>
    <tr>
        <td style=" width: 100%;text-align: right;padding-top:36px ;margin: 0;   ">
            <h3 style="font-size: 14px; font-weight: 500;color: #FFF;margin: 0;">Subtotal : ₹
            ${data?.qty * data?.price}.00</h3>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: right;padding-top:1px ;margin: 0;   ">
            <h3 style="font-size: 14px; font-weight: 500;color: #FFF;margin: 0;">Shipping and
                handling : FREE</h3>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: right;padding:1px 0 32px 0;margin: 0;   ">
            <h3 style="font-size: 14px; font-weight: 500;color: #FFF;margin: 0;">Discount : ₹
                0.00</h3>
        </td>
    </tr>
    <tr>
        <td class="stats-heading"
            style="text-align: right;padding: 3px 0; border-bottom: 1px solid #FFD08B ; border-top: 1px solid #FFD08B ;max-width: 560px;width: 100%;">
            <h6 style="font-size: 16px; font-weight: 700;color: #FEC045;margin: 0;">Grand Total
                : ₹ ${data?.qty * data?.price}.00</h6>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: right;padding:10px 0 57px 0;margin: 0;   ">
            <h3 style="font-size: 14px; font-weight: 500;color: #FFF;margin: 0;">Amount Due : ₹
                0.00</h3>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: center;padding-bottom: 20px;margin: 0;   ">
            <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">Payment
                information</h3>
        </td>
    </tr>
    <tr>
        <td>
            <table>
                <tbody>
                    <tr>
                        <td
                            style=" width: 100%;padding-bottom: 34px;border-bottom: 1px solid #FFD08B ;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
                            <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">
                                Prepaid: Credit
                                card/UPI/Debit card</p>
                        </td>
                        <td
                            style=" width: 100%; text-align:right;padding-bottom: 34px;border-bottom: 1px solid #FFD08B ;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
                            <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">
                                ₹${data?.qty *
        data?.price
        }.00</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td style=" width: 100%;text-align: center;padding:28px 0 20px 0;margin: 0;   ">
            <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">Shipping
                address</h3>
        </td>
    </tr>
    <tr>
        <td
            style=" width: 100%;max-width: 530px; text-align: center;padding-bottom: 40px;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
            <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${data?.address
        }</p>
        </td>
    </tr>
        <tr>
        <td style="width: 100%; text-align: center;padding-bottom:15px">
            <a class="get_img" href="${data?.invoice
        }" style="color:#000000;">
        ${res?.invoiceText}
             
            </a>
        </td>
    </tr>
    <tr>
        <td class="stats-heading" style="text-align: center;width: 100%;padding-top: 15px;">
            <h5 style="font-size: 16px; font-weight: 700;color: #FFF;margin: 0;">
            ${res?.assistance}
            </h5>
        </td>
    </tr>
    <tr>
        <td style="width: 100%; text-align: center;">
            <p class="content"
                style="font-size: 16px; line-height: 1.3; color: #FFFFFF;width: 100%;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; ">
                ${res?.Contact} <a href="tel:+918787868387" style="color:#FEC045; text-decoration: underline; display: inlin
            ">+91 8787 8683 87</a> ${res?.or}
        </td>
    </tr>
    <tr>
        <td style="width: 100%; text-align: center;">
            <p class="content"
                style="font-size: 16px; line-height: 1.3; color: #FFFFFF;width: 100%;margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; ">
                ${res?.WriteUs} <a href="mailto:support@satyug.life" style="color:#FEC045; text-decoration: underline; display: inline">support@satyug.life</a>
        </td>
    </tr>
`;
}

export const DONATION = (data, lang) => {
    const res: any = DONATION_BODY(data, lang)
    return `<tr>
<td style=" width: 100%;text-align: center;padding: 18px 0 25px 0;margin: 0;   ">
    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">${res?.t1}</h3>
</td>
</tr>
<tr>
<td
    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0; border-bottom: 1px solid #FFD08B ;  ">
    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t2}</p>
</td>
</tr>
<tr>
<td style="padding-top: 30px;">
    <table
        style="width: 100%;background: #2E2E2E;text-align: center; max-width:560px;padding:10px; ">
        <tbody>
            <tr>
                <td
                    style=" width: 100%;margin: 0; ;  ">
                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;text-align:left;">
                        Your donation amount :</p>
                </td>
                <td
                    style=" width: 100%; text-align:right;margin: 0; ">
                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">
                        ₹ ${data}.00</p>
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>
<tr>
<td
    style=" text-align: center;padding-top: 18px;margin: 0;">
    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0; width: 100%;max-width: 490px;margin: auto; text-align: center;">${res?.t3}</p>
</td>
</tr>`
};

export const COLLECTIVE = (data, lang) => {
    const res: any = COLLECTIVE_BODY(data, lang)
    return `<tr>
<td style=" width: 100%;text-align: center;padding: 18px 0 25px 0;margin: 0;   ">
    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">
   ${res?.t1} </h3>
</td>
</tr>
<br>
<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">
                                       ${res?.t2}</p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.asset}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td style=" width: 100%;text-align: center;padding: 11px 0 40px 0;  ">
                                    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">ASSET_ID
                                        #${data?.accetId}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t3} <a href="${data?.link}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           ${data.appPath}/collectibles</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.4; color:#FFF;width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif;  font-weight: 400;">
                                        ${res?.t4} </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <a class="get_img" href="${data?.linkBrickProduct}" style="color:#000000;"> ${res?.t5}</a>


                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.merchandise} <a href="${data?.linkProduct}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           ${data?.linkProduct}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 24px; color: #FFF;width: 100%;max-width: 492px;padding: 44px 0 0 0; margin: 0 ; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; padding-bottom: 33px;text-align:center">
                                         ${res?.t6}<br/>
                                         ${res?.t7}<br/>
                                         ${res?.t8}<br/>
                                         ${res?.t9}
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const MURTI = (data, lang) => {
    const res: any = MURTI_BODY(data, lang)
    return ` <tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.asset}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style=" width: 100%;text-align: center;padding: 11px 0 40px 0;  ">
                                    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">ASSET_ID
                                        #${data?.accetId}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t2}
                                        </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t3}<a href="${data?.link}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                            ${data.appPath}/collectibles</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.4; color:#FFF;width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif;  font-weight: 400;">
                                        ${res?.t4} </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <a class="get_img" href="${data?.linkBrickProduct}" style="color:#000000;"> ${res?.t5}</a>


                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.merchandise} <a href="${data?.linkProduct}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           ${data?.linkProduct}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 24px; color: #FFF;width: 100%;max-width: 492px;padding: 44px 0 0 0; margin: 0 ; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; padding-bottom: 33px;text-align:center">
                                       ${res?.t6}<br/>
                                        ${res?.t7}<br/>
                                        ${res?.t8}<br/>
                                        ${res?.t9}</p>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const BAGICHA = (data, lang) => {
    const res: any = BAGICHA_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.asset}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td style=" width: 100%;text-align: center;padding: 11px 0 40px 0;  ">
                                    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">ASSET_ID
                                        #${data?.accetId}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                       ${res?.t2}
                                        </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t3} <a href="${data?.link}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                            ${data.appPath}/collectibles</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.4; color:#FFF;width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif;  font-weight: 400;">
                                        ${res?.t4} </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <a class="get_img" href="${data?.linkBrickProduct}" style="color:#000000;"> ${res?.t5}</a>


                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.merchandise} <a href="${data?.linkProduct}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           ${data?.linkProduct}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 24px; color: #FFF;width: 100%;max-width: 492px;padding: 44px 0 0 0; margin: 0 ; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; padding-bottom: 33px;text-align:center">
                                        ${res?.t6}<br/>
                                        ${res?.t7}<br/>
                                        ${res?.t8}<br/>
                                        ${res?.t9}
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const BHOJNALAYA = (data, lang) => {
    const res: any = BHOJNALAYA_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.asset}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td style=" width: 100%;text-align: center;padding: 11px 0 40px 0;  ">
                                    <h3 style="font-size: 24px; font-weight: 700;color: #FFF;margin: 0;">ASSET_ID
                                        #${data?.accetId}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t2}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.t3} <a href="${data?.link}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                            ${data.appPath}/collectibles</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.4; color:#FFF;width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif;  font-weight: 400;">
                                        ${res?.t4} </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <a class="get_img" href="${data?.linkBrickProduct}" style="color:#000000;"> ${res?.t5}</a>


                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-top: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                        ${res?.merchandise} <a href="${data?.linkProduct}"
                                            style="color:#D3AA0F; text-decoration: underline; display: inline;">
                                           ${data?.linkProduct}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 24px; color: #FFF;width: 100%;max-width: 492px;padding: 44px 0 0 0; margin: 0 ; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; padding-bottom: 33px;text-align:center">
                                        ${res?.t6}<br/>
                                        ${res?.t7}<br/>
                                        ${res?.t8}<br/>
                                        ${res?.t9}
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}


export const VIRTUAL_THALI = (data, lang) => {
    const res: any = VIRTUAL_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1} </p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.logo}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                       ${res?.t2}
                                    </p>
                                </td>
                            </tr>
                               <tr>
                                <td style="width: 100%; text-align: center;padding-bottom:15px">
                                    <a class="get_img" href="${data?.invoice}" style="color:#000000;">
                                    ${res?.t3}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const PHYSICAL_THALI = (data, lang) => {
    const res: any = PHYSICAL_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.logo}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td>
                            <table
                                        style="width: 100%;/* background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; max-width:560px; */ padding-bottom: 21px;">
                                        <tbody>
                            <tr>
                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;/* border-bottom: 1px solid #FFD08B ; */">
                                    <p style="color: #FFF;font-size: 16px;">Name : <span style="color: #D3AA0F;">${data?.name}</span></p>
                                    <p style="color: #FFF;font-size: 16px;">Email : <a style="color: #D3AA0F;">${data?.email}</a></p>
                                    <p style="color: #FFF;font-size: 16px;">Mobile no. : <span style="color: #D3AA0F;">${data?.phone}</span></p>
                                    <p style="color: #FFF;font-size: 16px;">Address : <span style="color: #D3AA0F;">${data?.address}</span></p>


                                </td>
                            </tr>
                            </tbody>
                            </table>
                            </td>
                            </tr>
                             <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                      ${res?.t2} <a style="color:#D3AA0F; text-decoration: underline; display: inline-block;" href="${data.appPath}/ram-mandir/prasad-status"> ${data.appPath}/ram-mandir/prasad-status </a> ${res?.t3}
                                    </p>
                                </td>
                            </tr>
                             </tr>
                               <tr>
                                <td style="width: 100%; text-align: center;padding-bottom:15px">
                                    <a class="get_img" href="${data?.invoice}" style="color:#000000;">
                                    ${res?.t4}
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const POOJA_INITIATED = (data, lang) => {
    const res: any = POOJA_INITIATED_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.logo}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                             <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                      ${res?.t2} <a style="color:#D3AA0F; text-decoration: underline; display: inline-block;" href="${data.appPath}/ram-mandir/prasad-status"> ${data.appPath}/ram-mandir/prasad-status </a> ${res?.t3}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                     ${res?.t4}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const PRASAD_OUT_FOR_DELIVERY = (data, lang) => {
    const res: any = PRASAD_OUT_FOR_DELIVERY_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.logo}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                            <td>
                             <table
                                        style="width: 100%;/* background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; max-width:560px; */ padding-bottom: 21px;">
                                        <tbody>
                            <tr>
                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;/* border-bottom: 1px solid #FFD08B ; */">
                                    <p style="color: #FFF;font-size: 16px;">Name : <span style="color: #D3AA0F;">${data?.name}</span></p>
                                    <p style="color: #FFF;font-size: 16px;">Email : <a style="color: #D3AA0F;">${data?.email}</a></p>
                                    <p style="color: #FFF;font-size: 16px;">Mobile no. : <span style="color: #D3AA0F;">${data?.phone}</span></p>
                                    <p style="color: #FFF;font-size: 16px;">Address : <span style="color: #D3AA0F;">${data?.address}</span></p>


                                </td>
                            </tr>
                            </tbody>
                            </table>
                            </td>
                            </tr>
                             <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                      ${res?.t2}<a style="color:#D3AA0F; text-decoration: underline; display: inline-block;" href="${data.appPath}/ram-mandir/prasad-status"> ${data.appPath}/ram-mandir/prasad-status </a> ${res?.t3}
                                    </p>
                                </td>
                            </tr>
                             <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                     ${res?.t4}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const PRASAD_DELIVERED = (data, lang) => {
    const res: any = PRASAD_DELIVERED_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data?.logo}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                    ${res?.t2}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}

export const CERTIFICATE = (data, lang) => {
    const res: any = CERTIFICATE_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;padding-top: 10px ;">
                                    <table
                                        style="width: 100%;background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat; border-radius: 16px; max-width:560px; ">
                                        <tbody>
                                            <tr>
                                                <td class="logo-outer"
                                                    style="width: 100%; background-color: transparent; text-align: center;">
                                                    <img class="logo" src="${data}"
                                                        style="vertical-align: bottom;  width: 100%;"
                                                        alt="Logo">
                                                </td>
                                            </tr>
                                            </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;">
                                    <p class="content"
                                        style="font-size: 16px; line-height: 2.2; color: #FFF; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400;margin: 0; ">
                                    ${res?.t2}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr>`
}



export const KARMAPOINTS = (data, lang) => {
    const res: any = KARMAPOINTS_BODY(data, lang)
    return `<tr>
                             <td
                                    style=" width: 100%;max-width: 560px; text-align: center;padding-bottom: 23px;margin: 0;border-bottom: 1px solid #FFD08B ;   ">
                                    <p style="font-size: 16px; font-weight: 400;color: #FFF;margin: 0;">${res?.t1} <a style="color:#fec045; display: inline-block;" href="${data.appPath}/collectibles">${data.appPath}/collectibles.</a> </p>
                                </td>
                            </tr>
                            
                            <tr>
                                <!-- style="width: 100%; text-align: center;"> -->

                                <td
                                    style="width: 100%; text-align: center; font-size: 16px; line-height: 1.4; color: #989898; width: 100%;max-width: 560px;padding-bottom: 21px; margin: 0 auto; display: block;display: inline-block;font-family: Arial, Helvetica, sans-serif; font-weight: 400; color:#D3AA0F; text-decoration: underline; display: inline;">
                                    <a href="https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US"
                                        style="color:#D3AA0F;padding-top: 21px; text-decoration: underline; display: inline-block;">https://play.google.com/store/apps/details?id=com.artivive&hl=en_IN&gl=US</a>
                                </td>
                            </tr> `
}