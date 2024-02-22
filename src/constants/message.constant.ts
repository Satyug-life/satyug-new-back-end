import { LANGUAGE } from "./enums";
export const httpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
};
export const CONNECTION_NOT_FOUND =
  'Connection provider not found in application context';
export const TIMEOUT_EXCEEDED = (timeout: number) =>
  `timeout of ${timeout.toString()}ms exceeded`;
export const STORAGE_EXCEEDED = (keyword: string) =>
  `Used ${keyword} exceeded the set threshold`;
export const UNHEALTHY_RESPONSE_CODE = (responseCode: string | number) =>
  `The service returned an unhealthy response code: ${responseCode}`;

// Messages create here
export const USER_CREATED = (title: string): string =>
  `User ${title} created successfully.`;
export const USER_NOT_CREATED = 'User not create Please try again.';
export const USER_NOT_FOUND = 'User record not found.';
export const RECORD_NOT_FOUND = 'Record not found.';
export const NOT_FOUND = (id: number): string => `User  ${id}  not found.`;
export const USER_FOUND = (records: number): string =>
  `User  ${records}  records found successfully.`;
export const USER_UPDATED = (id: number): string =>
  `User  ${id}  updated successfully.`;
export const USER_DELETED = (records: number): string =>
  `User  ${records}  deleted successfully.`;
export const SOMETHING_WRONG = "Something went wrong.";
export const THALI_NOT_CREATED = "Thali not created.";
export const COLLECTIONTYPE_CREATED = "Collection type created successfully.";
export const COLLCETIONTYPE_EXIST = "Collection type already exist."
export const COLLECTABLE_ID_NOT_EXISTS = "Categeory id does not exist."
export const COLLECTIONTYPE_NOT_FOUND = "Collection Type not found.";
export const COLLECTION_FOUND = 'Collection found successfully.'
export const CATEGORY_ID_NOT_EXIST = 'Category id does not exists.'
export const CATEGORY_FOUND = 'Category found successfully.'
export const CATEGORY_NOT_FOUND = 'Category not found.'
export const CATEGORY_UPDATED = 'Category updated successfully.'
export const CATEGORY_REMOVED = 'Category removed successfully.'
export const COLLECTION_NOT_FOUND = "Collection not found."
export const COLLECTION_EXIST = 'Collection already exist.'
export const PLAYER_EXIST = "Player already exist."
export const REFERRALCOUNT = "Referral count get successfully."
export const USER_ID_REQUIRED = "User id is required."
export const COMPLETE_FIRST_GAME = "Please complete your game's first level."


// common template frame
export const comnTemp = (lang) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.heading = "Welcome to Ram Mandir!"
      returnData.donation = 'To make a donation, please click below'
      break;
    case 'Hindi':
      returnData.heading = `राम मंदिर में आप का स्वागत है!`
      returnData.donation = 'दान करने के लिए, कृपया नीचे क्लिक करें'
      break;
    case 'Tamil':
      returnData.heading = `ராம் கோவிலில் உங்களை வரவேற்கிறேன்!`
      returnData.donation = 'நன்கொடை செய்வதற்கு, தயவுசெய்து கீழே கிளிக் செய்யவும்'
      break;
    case 'Telugu':
      returnData.heading = `రామమందిరానికి స్వాగతం!`
      returnData.donation = 'దానాన్ని చేయడానికి, దయచేసి క్రింద క్లిక్ చేయండి'
      break;
    case 'Marathi':
      returnData.heading = `राम मंदिरात तुमचे स्वागत आहे!`
      returnData.donation = 'दान करण्यासाठी, कृपया खाली क्लिक करा'
      break;
    case 'Kanada':
      returnData.heading = `ರಾಮ ದೇವಾಲಯದಲ್ಲಿ ನೀವು ಸ್ವಾಗತಿ!`
      returnData.donation = 'ದಾನ ಮಾಡಲು, ದಯವಿಟ್ಟು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ'
      break;
    case 'Gujrati':
      returnData.heading = `રામ મંદિરમાં તમારો સ્વાગત છે!`
      returnData.donation = 'દાન કરવા માટે, કૃપા કરીને નીચે ક્લિક કરો'
      break;
    case 'Bangla':
      returnData.heading = `রাম মন্দিরে আপনাকে স্বাগতম!`
      returnData.donation = 'দান করতে, অনুগ্রহ করে নীচে ক্লিক করুন'
      break;
    default:
      returnData.heading = `राम मंदिर में आप का स्वागत है!`
      returnData.donation = 'To make a donation, please click below'
      break;
  }
  return returnData;
}

// template Body
export const OTP_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.txt = "Please don't share your OTP anyone."
      break;
    case 'Hindi':
      returnData.txt = `कृपया अपना ओटीपी किसी को साझा न करें।`
      break;
    case 'Tamil':
      returnData.txt = `உங்கள் OTP-ஐ யாருக்கும் பகிரவேண்டாம்.`
      break;
    case 'Telugu':
      returnData.txt = `దయచేసి మీ OTP ని ఎవరికైనా షేర్ చేయడం లేదు.`
      break;
    case 'Marathi':
      returnData.txt = `कृपया आपले OTP केवळ कोणाला ही सांगू नका.`
      break;
    case 'Kanada':
      returnData.txt = `ದಯವಿಟ್ಟು ನಿಮ್ಮ OTP ಯನ್ನು ಯಾರಾದರೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.`
      break;
    case 'Gujrati':
      returnData.txt = `કૃપયા તમારો OTP કેટલાક સાથે શેર ન કરો.`
      break;
    case 'Bangla':
      returnData.txt = `দয়া করে আপনার OTP কেউ সাঝা করবেন না।`
      break;
    default:
      returnData.txt = `Please don't share your OTP anyone.`
      break;
  }
  return returnData;
}

export const ORDER_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `Thanks for placing your order!`;
      returnData.t2 = `We are happy to
                let you know that your order is confirmed. Your order will be delivered within
                7-8 working days.`;
      returnData.t3 = `Meanwhile,
                kindly check the below order details`;
      returnData.invoiceText = `Click here to check your invoice`
      returnData.assistance = `For any assistance required related to your order`
      returnData.Contact = `Contact`
      returnData.or = `or`
      returnData.WriteUs = `Write us on`
      break;
    case 'Hindi':
      returnData.t1 = `अपना ऑर्डर देने के लिए धन्यवाद!`;
      returnData.t2 = `हम खुश हैं के लिए
                आपको बता दें कि आपका ऑर्डर कन्फर्म हो गया है। आपका ऑर्डर भीतर डिलीवर कर दिया जाएगा
                7-8 कार्य दिवस.`;
      returnData.t3 = `इस दौरान,
                कृपया नीचे दिए गए ऑर्डर विवरण की जांच करें`;
      returnData.invoiceText = `अपना चालान जांचने के लिए यहां क्लिक करें`
      returnData.assistance = `आपके ऑर्डर से संबंधित किसी भी आवश्यक सहायता के लिए`
      returnData.Contact = `संपर्क`
      returnData.or = `या`
      returnData.WriteUs = `हमें लिखें`
      break;
    case 'Tamil':
      returnData.t1 = `உங்கள் ஆர்டருக்கு நன்றி!`;
      returnData.t2 = `உங்கள் ஆர்டர் உறுதி செய்யப்பட்டுள்ளது என்று எங்கள் இருப்பிடத்தில் புரிந்துள்ளது. உங்கள் ஆர்டர் 7-8 வெளியிடப்படும்.`;
      returnData.t3 = `இதுவொருவருள், தயவுசெய்து கீழே உள்ள ஆர்டர் விவரங்களைச் சரிபார்க்கவும்`;
      returnData.invoiceText = `உங்கள் விலைப்பட்டியலை சரிபார்க்க இங்கே கிளிக் செய்க`
      returnData.assistance = `உங்கள் ஆர்டருக்கு தொடர்பு உள்ள ஏதாவது உதவி தேவையானபடி`
      returnData.Contact = `என்று தொடர்பு`
      returnData.or = `அல்லது`
      returnData.WriteUs = `என்ற மின்னஞ்சல் எழுதுக`
      break;
    case 'Telugu':
      returnData.t1 = `Tమీ ఆర్డర్ చేసినందుకు ధన్యవాదాలు!`;
      returnData.t2 = `మా సంతోషం చేస్తున్నాము మీ ఆర్డర్ ఖచ్చితంగా సమర్పించబడింది. మీ ఆర్డర్ 7-8 పనికిరాకు మీరి మీ కిందివిడిని ప్రాప్తిస్థితిలో చూస్తుంది.`;
      returnData.t3 = `ఇప్పుడు, దయచేసి క్రింది ఆర్డర్ వివరాలను తనిఖీ చేయండి`;
      returnData.invoiceText = `మీ ఇన్వాయిస్ ని తనిఖీ చేయడానికి ఇక్కడ క్లిక్ చేయండి`
      returnData.assistance = `మీ ఆర్డర్ సంబంధిత ఏదో సహాయానికి`
      returnData.Contact = `సంప్రదించండి`
      returnData.or = `లేదా`
      returnData.WriteUs = `మాకు ఇమెయిల్ చేయండి`
      break;
    case 'Marathi':
      returnData.t1 = `तुमच्या ऑर्डरसाठी धन्यवाद!`;
      returnData.t2 = `आपले ऑर्डर कन्फर्म झाले आहे आणि तो 7-8 कामगार दिवसांत तुमच्याकडून पहोचवला जाईल.`;
      returnData.t3 = `तब्बल, कृपया खालील ऑर्डर तपशीलांची तपासणी करा`;
      returnData.invoiceText = `तुमच्या चालनाची तपशील तपासण्यासाठी येथे क्लिक करा`
      returnData.assistance = `तुमच्या आर्डरसंगत किंवा संबंधित कोणत्याही मदतीसाठी`
      returnData.Contact = `संपर्क करा:`
      returnData.or = `किंवा`
      returnData.WriteUs = `आमच्यासाठी संदेश लिहा:`
      break;
    case 'Kanada':
      returnData.t1 = `ನಿಮ್ಮ ಆದೇಶವನ್ನು ಇರಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!`;
      returnData.t2 = `ನಿಮ್ಮ ಆರ್ಡರ್ ಸ್ಥಿತಿ ಸರಿಹೊಂದಿದೆಯೆಂದು ತಿಳಿಸಲು ನಾವು ಸಂತೋಷಪಡುತ್ತಿದ್ದೇವೆ. ನಿಮ್ಮ ಆರ್ಡರ್ 7-8 ಕಾರ್ಯದಿನಗಳ ನಡುವೆ ನಿಮ್ಮ ಬಳಿಗೆ ತಲುಪುವುದು.`;
      returnData.t3 = `ಆಗಾಗ, ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಆರ್ಡರ್ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ`;
      returnData.invoiceText = `ನಿಮ್ಮ ಚಲಾನ್ ಅನ್ನು ನೋಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ`
      returnData.assistance = `ನಿಮ್ಮ ಆರ್ಡರ್ ಸಂಬಂಧಿತ ಸಹಾಯ ಬೇಕಾದಾಗ`
      returnData.Contact = `ಗೆ ಸಂಪರ್ಕಿಸಿ`
      returnData.or = `ಅಥವಾ`
      returnData.WriteUs = `ಗೆ ನಮೂದಿಸಿ ನಮೂನೆ.`
      break;
    case 'Gujrati':
      returnData.t1 = `તમારા ઓર્ડર માટે આભાર!`;
      returnData.t2 = `અમે તમને માહિત કરવામાં આવે છે કે તમારું ઓર્ડર ખાતર લંબરી છે. તમારું ઓર્ડર 7-8 કામગીરદિનોમાં તમારા સમક્ષ પહોચાડવામાં આવશે.`;
      returnData.t3 = `તાવજો, હવેનીંથી નીચેની ઓર્ડર વિગતોને તપાસો`;
      returnData.invoiceText = `તમારા ચલનને તપાસવા માટે અહીં ક્લિક કરો`
      returnData.assistance = `તમારા ઓર્ડર સંબંધિત કોઈપણ મદદ આવશ્યક હોય`
      returnData.Contact = `સંપર્ક કરો`
      returnData.or = `અથવા`
      returnData.WriteUs = `આમાણે લખો`
      break;
    case 'Bangla':
      returnData.t1 = `আপনার অর্ডার করার জন্য ধন্যবাদ!`;
      returnData.t2 = `আমরা আপনাকে জানাতে খুশি যে আপনার অর্ডার কনফার্ম হয়েছে। আপনার অর্ডারটি 7-8 কর্মদিনের মধ্যে পৌঁছানো হবে।`;
      returnData.t3 = `এবারও, দয়া করে নীচের অর্ডার বিশদগুলি চেক করুন`;
      returnData.invoiceText = `আপনার চালান চেক করতে এখানে ক্লিক করুন`
      returnData.assistance = `আপনার অর্ডার সম্পর্কিত যেকোনো সাহায্য প্রয়োজন হলে`
      returnData.Contact = `যোগাযোগ করুন`
      returnData.or = `বা`
      returnData.WriteUs = `আমাদের লেখুন`
      break;
    default:
      returnData.t1 = `Thanks for placing your order!`;
      returnData.t2 = `We are happy to
                let you know that your order is confirmed. Your order will be delivered within
                7-8 working days.`;
      returnData.t3 = `Meanwhile,
                kindly check the below order details`;
      returnData.invoiceText = `Click here to check your invoice`
      returnData.assistance = `For any assistance required related to your order`
      returnData.Contact = `Contact`
      returnData.or = `or`
      returnData.WriteUs = `Write us on`
      break;
  }
  return returnData;
}

export const DONATION_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `Thank you for your contribution!`;
      returnData.t2 = `We would like to share our heartiest thanks for contributing towards the Satyug Life.`;
      returnData.t3 = `You are a true devotee of Lord Ram, your contribution is very important and I thank you from the bottom of my heart and I will send 80% of this contribution to the Gaushala for the care of mother cows, this is my promise. from you and I will give the remaining part to the team making this game, so that they can make more games and together we can spread the prestige and glory of Ram ji to the people of the world.`;
      break;
    case 'Hindi':
      returnData.t1 = `आपके योगदान हेतु धन्यवाद!`;
      returnData.t2 = `हम सतयुग जीवन में योगदान देने के लिए हार्दिक धन्यवाद देना चाहते हैं।`;
      returnData.t3 = `आप राम जी के सच्चे भक्त हैं, आप का योगदान बहुत महत्वपूर्ण हैं और में अपने ह्रदय की गहराई  से आप का धन्यवाद करता हूँ और इस योगदान का 80% निर्धारित हिस्सा में गौ माता की देख रेख के लिए गौशाला तक पंहुचा दूंगा, ये मेरा वचन है आपसे और शेष भाग में इस गेम को बनाने वाली टीम  को दूँगा, ताकि वो और भी गेम  बना सके और हम सब मिल कर राम जी की प्रतिष्ठा व गौरव को जगवासियो तक पंहुचा सकें.`;
      break;
    case 'Tamil':
      returnData.t1 = `உங்கள் பங்களிப்பிற்கு நன்றி!`;
      returnData.t2 = `சத்யுக் வாழ்க்கைக்கு பங்களித்தமைக்கு எங்களது மனமார்ந்த நன்றிகளை பகிர்ந்து கொள்ள விரும்புகிறோம்.`;
      returnData.t3 = `நீங்கள் ராமரின் உண்மையான பக்தர், உங்கள் பங்களிப்பு மிகவும் முக்கியமானது, எனது இதயத்தின் அடிப்பகுதியில் இருந்து நன்றி தெரிவித்துக் கொள்கிறேன், இந்த பங்களிப்பில் 80% தாய் பசுக்களைப் பராமரிப்பதற்காக கௌசாலாவுக்கு அனுப்புவேன், இது எனது வாக்குறுதி. உங்களிடமிருந்தும் நானும் இந்த விளையாட்டை உருவாக்கும் அணிக்கு மீதமுள்ள பகுதியை வழங்குவோம், இதனால் அவர்கள் அதிக விளையாட்டுகளை உருவாக்க முடியும், மேலும் நாம் ஒன்றாக இணைந்து ராம்ஜியின் புகழையும் மகிமையையும் உலக மக்களுக்கு பரப்ப முடியும்.`;
      break;
    case 'Telugu':
      returnData.t1 = `మీ సహకారానికి ధన్యవాదాలు!`;
      returnData.t2 = `సత్యుగ్ లైఫ్‌కి సహకరించినందుకు మా హృదయపూర్వక ధన్యవాదాలు తెలియజేయాలనుకుంటున్నాము.`;
      returnData.t3 = `మీరు రాముడి యొక్క నిజమైన భక్తుడు, మీ సహకారం చాలా ముఖ్యమైనది మరియు నా హృదయపూర్వక ధన్యవాదాలు మరియు నేను ఈ సహకారంలో 80% తల్లి గోవుల సంరక్షణ కోసం గౌశాలకు పంపుతాను, ఇది నా వాగ్దానం. మీ నుండి మరియు నేను ఈ గేమ్‌ను తయారు చేస్తున్న జట్టుకు మిగిలిన భాగాన్ని ఇస్తాను, తద్వారా వారు మరిన్ని ఆటలు ఆడగలరు మరియు కలిసి మనం రామ్ జీ ప్రతిష్టను మరియు కీర్తిని ప్రపంచ ప్రజలకు చాటగలము.`;
      break;
    case 'Marathi':
      returnData.t1 = `आपल्या योगदानासाठी हार्दिक आभार!`;
      returnData.t2 = `आपल्याकरता सतयुग लाइफवर योगदान करण्याबद्दल आम्ही आपले मनापासून आभारी आहोत.`;
      returnData.t3 = `आप राम जीचे सच्चे भक्त आहात, आपले योगदान महत्त्वाचे आहे. माझ्या हृदयातून माझं आभार मानून मी आपला स्वागत करतो आणि याचे 80% हिस्से गौ माताच्या देखरेखासाठी गौशालेत पंहुचवू, असं माझं वचन आहे, आणि शेष भागात माझं टीमला द्यायचं, ताकी त्यांनी आणि अधिक गेम तयार करुन राम जीची महिमा आणि गौरव सर्व जगवासियांकडे पोहोचवू शकाय.`;
      break;
    case 'Kanada':
      returnData.t1 = `ನಿಮ್ಮ ಕೊಡುಗೆಗೆ ಧನ್ಯವಾದಗಳು!`;
      returnData.t2 = `ಸತ್ಯುಗ್ ಜೀವನಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಿದ್ದಕ್ಕಾಗಿ ನಾವು ನಮ್ಮ ಹೃತ್ಪೂರ್ವಕ ಧನ್ಯವಾದಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸುತ್ತೇವೆ.`;
      returnData.t3 = `ನೀವು ಭಗವಾನ್ ರಾಮನ ನಿಜವಾದ ಭಕ್ತ, ನಿಮ್ಮ ಕೊಡುಗೆ ಬಹಳ ಮುಖ್ಯ ಮತ್ತು ನನ್ನ ಹೃದಯದ ಕೆಳಗಿನಿಂದ ನಾನು ನಿಮಗೆ ಧನ್ಯವಾದ ಹೇಳುತ್ತೇನೆ ಮತ್ತು ನಾನು ಈ ಕೊಡುಗೆಯ 80% ಅನ್ನು ತಾಯಿ ಹಸುಗಳ ಆರೈಕೆಗಾಗಿ ಗೌಶಾಲೆಗೆ ಕಳುಹಿಸುತ್ತೇನೆ, ಇದು ನನ್ನ ಭರವಸೆ. ಮತ್ತು ನಾನು ಉಳಿದ ಭಾಗವನ್ನು ಈ ಆಟವನ್ನು ಮಾಡುವ ತಂಡಕ್ಕೆ ನೀಡುತ್ತೇನೆ, ಇದರಿಂದ ಅವರು ಹೆಚ್ಚಿನ ಆಟಗಳನ್ನು ಮಾಡಬಹುದು ಮತ್ತು ನಾವು ಒಟ್ಟಾಗಿ ರಾಮ್ ಜಿ ಅವರ ಪ್ರತಿಷ್ಠೆ ಮತ್ತು ವೈಭವವನ್ನು ಪ್ರಪಂಚದ ಜನರಿಗೆ ಹರಡಬಹುದು.`;
      break;
    case 'Gujrati':
      returnData.t1 = `તમારા યોગદાન બદલ આભાર!`;
      returnData.t2 = `સતયુગ જીવનમાં યોગદાન આપવા બદલ અમે અમારો હૃદયપૂર્વકનો આભાર શેર કરવા માંગીએ છીએ.`;
      returnData.t3 = `તમે રામ જીના વાસ્તવિક ભક્ત છો, તમારો યોગદાન ઘણો મહત્વપૂર્ણ છે અને હું તમારા હૃદયથી આભારી છું અને આ યોગદાનનો 80% હિસ્સો ગોમાતાની સંરક્ષણ માટે ગોશાલામાં પહોંચાડવામાટે છું, આ મારો વચન છે, અને શેષ ભાગમાં આ ખેલ બનાવવાના ટીમને પણ આપવાનું, તાકી તેમના સાથે અને અનેક વધુ ખેલ બનાવી શકે અને અમે સર્વને મિલી રામ જીના પૂજો અને ગૌરવને જગતે પહોંચાવવા માટે શકીએ.`;
      break;
    case 'Bangla':
      returnData.t1 = `আপনার অবদানের জন্য ধন্যবাদ!`;
      returnData.t2 = `সত্যযুগ জীবনের প্রতি অবদান রাখার জন্য আমরা আমাদের আন্তরিক ধন্যবাদ জানাতে চাই।`;
      returnData.t3 = `আপনি একজন সত্যিকার রাম ভক্ত, আপনার অবদান গুরুত্বপূর্ণ এবং আমি আপনার হৃদয় থেকে ধন্যবাদ জানাচ্ছি এবং এই অবদানের 80% অংশই গৌ মাতার যত্নের জন্য গৌশালায় পৌঁছাতে হবে, এটি আমার একটি প্রতিশ্বাস এবং বাকি অংশটি খেলার তৈরি করতে টীমকে দেব, তাতে তারা আরও খেলা তৈরি করতে পারে এবং আমরা সবাই মিলে রাম জির পুজো ও গৌরবকে জগতে পৌঁছাতে পারি।`;
      break;
    default:
      returnData.t1 = `Thank you for your contribution!`;
      returnData.t2 = `We would like to share our heartiest thanks for contributing towards the Satyug Life.`;
      returnData.t3 = `आप राम जी के सच्चे भक्त हैं, आप का योगदान बहुत महत्वपूर्ण हैं और में अपने ह्रदय की गहराई  से आप का धन्यवाद करता हूँ और इस योगदान का 80% निर्धारित हिस्सा में गौ माता की देख रेख के लिए गौशाला तक पंहुचा दूंगा, ये मेरा वचन है आपसे और शेष भाग में इस गेम को बनाने वाली टीम  को दूँगा, ताकि वो और भी गेम  बना सके और हम सब मिल कर राम जी की प्रतिष्ठा व गौरव को जगवासियो तक पंहुचा सकें.`;
      break;
  }
  return returnData;
}

export const COLLECTIVE_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `Thank you for Filling out the Form.`;
      returnData.t2 = `As a token of Reward, here is your collectible - Ram Ji k mandir nirmaan mein diya gya apka yogdan`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `Are you a true devotee of Ram ji?`;
      returnData.t7 = `Do you want Ram Ji to appear before you in his fierce form?`;
      returnData.t8 = `If yes, then download Artivive app and experience the fierce form of Ram ji firsthand.`;
      returnData.t9 = `Scan the above photo with Artivive app and see the magic.`;
      returnData.merchandise = `Buy our merchandise :`
      break;
    case 'Hindi':
      returnData.t1 = `फॉर्म भरने के लिए धन्यवाद.`;
      returnData.t2 = `पुरस्कार के प्रतीक के रूप में, यह आपकी संग्रहणीय वस्तु है - राम जी के मंदिर निर्माण में दिया गया आपका योगदान`;
      returnData.t3 = `आप अपनी संग्रहणीय वस्तुएं यहां देख सकते हैं:`;
      returnData.t4 = `नीचे क्लिक करके अपने योगदान के बदले एक भौतिक ईंट (प्रबलित फाइबरग्लास से बनी जो 100 साल तक चलेगी) प्राप्त करें।`;
      returnData.t5 = `अपनी संपत्ति अपने दरवाजे पर प्राप्त करें`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `हमारा माल खरीदें:`
      break;
    case 'Tamil':
      returnData.t1 = `படிக்காதவர் நிலைக்கு நன்றி.`;
      returnData.t2 = `கொடுக்கப்பட்ட விருதுக்கு, இதே உங்கள் கலெக்டிபிள் - இராம் ஜி கோயில் உருண்டையில் உங்கள் பங்காளி.`;
      returnData.t3 = `நீங்கள் உங்கள் கலெக்டிபிள்ஸ் இங்கே காணலாம்: `;
      returnData.t4 = `உங்கள் பங்குக்கு உண்டாக்கப்படும் கட்டமினை (100 ஆண்டுகள் நீளாக இருக்கும் புளப்பான் ஃபைபர்கிளாஸ் செய்யப்பட்டுள்ளது) பெற கீழே கிளிக் செய்யவும்.`;
      returnData.t5 = `உங்கள் சொத்துக்களை உங்கள் வீட்டு வாசலில் டெலிவரி செய்யுங்கள்`;
      returnData.t6 = `நீங்கள் இராம் ஜி உண்மையான பக்தர் ஆகின்றீர்களா?`;
      returnData.t7 = `நீங்கள் விரைவில் ராம் ஜி உங்களுக்கு அவரது பிரசாந்தியான ரூபத்தில் பரிதாபம் செய்து கொள்ள விரும்புகிறீர்களா?`;
      returnData.t8 = `ஆம், ஆனால், இங்கு டவுன்லோட் செய்யவும் Artivive ஆப் மற்றும் ராம் ஜி அவரது பிரசாந்த ரூபம் அனுபவிக்கவும்.`;
      returnData.t9 = `உருவான படத்தை கிளிக் செய்து உங்கள் தலைப்பு முகவரியில் பெறுங்கள்`;
      returnData.merchandise = `எங்கள் பொருட்களை வாங்கவும்:`
      break;
    case 'Telugu':
      returnData.t1 = `ఫారంను పూర్తి చేయడానికి ధన్యవాదాలు.`;
      returnData.t2 = `పురస్కారంగా, ఇక్కడ మీరు మీ కలెక్టిబుల్ - రామ్ జి కు మందిర నిర్మాణంలో ఇచ్చిన మీ యోగదానం.`;
      returnData.t3 = `మీరు మీ కలెక్టిబుల్‌ను ఇక్కడ చూడగలరు:`;
      returnData.t4 = `మీ యోగదానాన్ని మార్పురాలు చేసి (అది 100 సంవత్సరాలు ఉండగాని నేరుగా ఫైబర్‌గ్లాస్‌లో తయారాయి) నీడాన్ని పొందండి.`;
      returnData.t5 = `మీ ఆస్తులను మీ ఇంటి వద్దకే అందజేయండి`;
      returnData.t6 = `మీరు రామ్ జికి నిజమైన భక్తులా ఉన్నారా?`;
      returnData.t7 = `మీరు కన్నా రామ్ జి తమ్మీని తమ్మనాగా దర్శనం చూడాలా?`;
      returnData.t8 = `హా, అప్లోడ్ చేయడానికి Artivive యాప్ డౌన్‌లోడ్ చేసి మీరు రామ్ జి కు అనుభవం చేయగలరు.`;
      returnData.t9 = `పైన కలిగిన చిత్రాన్ని Artivive యాప్ ద్వారా స్క్యాన్ చేసి ఆంకోండి`;
      returnData.merchandise = `మా వస్తువులను కొనండి:`
      break;
    case 'Marathi':
      returnData.t1 = `फॉर्म भरण्याबद्दल आपले आभार.`;
      returnData.t2 = `पुरस्काराच्या चिन्हामाध्ये, येथे आहे आपले कलेक्टेबल - राम जी के मंदिर निर्माणात आपलं योगदान.`;
      returnData.t3 = `आप आपले कलेक्टेबल्स येथे पहा:`;
      returnData.t4 = `तुमच्या योगदानाच्या बदलात तुमच्याकडून क्लिक करून एक भौतिक इंज प्राप्त करा (जो 100 वर्षांसाठी टिकेल फायबरग्लासमध्ये बनलेली आहे)।`;
      returnData.t5 = `तुमची मालमत्ता तुमच्या दारात पोहोचवा`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त आहात?`;
      returnData.t7 = `क्या आप इच्छिता की राम जी आपल्याला त्याच्या प्रचंड रूपात दर्शन देऊ?`;
      returnData.t8 = `हो, तर डाउनलोड करा Artivive ऍप आणि अपने लग्न करा राम जीच्या प्रचंड रूपाचा अनुभव.`;
      returnData.t9 = `वरील चित्राची Artivive ऍपवर स्कॅन करा आणि जादू पहा.`;
      returnData.merchandise = `आमचा माल खरेदी करा:`

      break;
    case 'Kanada':
      returnData.t1 = `ಫಾರಂ ನು ಬೀಗರು ಹಾಕಿದ ಕೃತಜ್ಞತಾ`;
      returnData.t2 = `ಚಿನ್ಹವಾಗಿ, ಇಲ್ಲಿದೆ ನಿಮ್ಮ ಕಲೆಕ್ಟಿಬುಲ್ - ರಾಮ ಜಿ ಕು ಮಂದಿರ ನಿರ್ಮಾಣದಲ್ಲಿ ನೀಡಿದ ನಿಮ್ಮ ಯೋಗದಾನ.`;
      returnData.t3 = `ನೀವು ನಿಮ್ಮ ಕಲೆಕ್ಟಿಬುಲ್‌ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು:`;
      returnData.t4 = `ನಿಮ್ಮ ಕೊಡುಗೆಗೆ ಪ್ರತಿಯಾಗಿ ರಿಯಾಲ್ಡ್‌ಫೋರ್ಸ್ಡ್ ಫೈಬರ್ಗ್ಲಾಸ್ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಭೌತಿಕ ಇಂಟ್‌ಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ.`;
      returnData.t5 = `ನಿಮ್ಮ ಸ್ವತ್ತುಗಳನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತಲುಪಿಸಿ`;
      returnData.t6 = `ನೀವು ರಾಮ ಜಿಗೆ ನಿಜವಾದ ಭಕ್ತರಾಗಿದ್ದೀರಾ?`;
      returnData.t7 = `ನೀವು ರಾಮ ಜಿ ತಮ್ಮ ಪ್ರಚಂಡ ರೂಪದಲ್ಲಿ ನಿಮಗೆ ದರ್ಶನ ನೀಡಬಯಸು ತ್ತಾರಾ?`;
      returnData.t8 = `ಹೌದು, ಇಲ್ಲಿದೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ Artivive ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ರಾಮ ಜಿಯ ಪ್ರಚಂಡ ರೂಪವನ್ನು`;
      returnData.t9 = `ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ. ಮೇಲಿನ ಚಿತ್ರವನ್ನು Artivive ಅಪ್ಲಿಕೇಶನ್ ದ್ವಾರಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಕಣ್ಣಾರೆ ನೋಡಿ.`;
      returnData.merchandise = `ನಮ್ಮ ಸರಕುಗಳನ್ನು ಖರೀದಿಸಿ:`
      break;
    case 'Gujrati':
      returnData.t1 = `ફોર્મ ભરવા માટે આભાર.`;
      returnData.t2 = `પુરસ્કારનો ચિહ્નસ્વરૂપ, અહીં છે તમારું કોલેક્ટેબલ - રામ જી ના મંદિર નિર્માણમાં આપનું યોગદાન.`;
      returnData.t3 = `તમે તમારા સંગ્રહને અહીં જોઈ શકો છો`;
      returnData.t4 = `તમારા યોગદાનની વિનંતિથી પ્રાપ્ત કરવા માટે નીચે ક્લિક કરો: એક ભૌતિક ઈંટ (જે 100 વર્ષ સુધી ટિકાવશે, રીઇનફોર્સ ફાઇબરગ્લાસમાં બનાવવામાં આવી છે)।`;
      returnData.t5 = `તમારી સંપત્તિ તમારા ઘરના દ્વારે પહોંચાડો`;
      returnData.t6 = `શ્રીરામ જી તમારા સાચા ભક્ત છે કે નહીં?`;
      returnData.t7 = `શ્રીરામ જી કે પ્રચંડ રૂપમાં તમારા દર્શન આપવા તમને ચાહે છે?`;
      returnData.t8 = `હા, તો Artivive એપ ડાઉનલોડ કરો અને શ્રીરામ જીનો પ્રચંડ રૂપ અનુભવ કરો.`;
      returnData.t9 = `ઉપર આપેલ ચિત્રને Artivive એપ દ્વારા સ્કેન કરો અને જાદુ જોવામાટે।`;
      returnData.merchandise = `અમારો માલ ખરીદો:`
      break;
    case 'Bangla':
      returnData.t1 = `ফর্ম পূরণের জন্য আপনাকে ধন্যবাদ। `;
      returnData.t2 = `একটি পুরস্কার হিসেবে, এখানে আপনার কলেক্টিবল রয়েছে - রাম জি এর মন্দির নির্মাণে যোগদান দেওয়া হয়েছে।`;
      returnData.t3 = `আপনি আপনার কলেক্টিবলগুলি এখানে দেখতে পারেন:`;
      returnData.t4 = `আপনার অবদানের বদলে একটি শারীরিক ইন্ট প্রাপ্ত করতে নীচে ক্লিক করুন (যা 100 বছর ধরে থাকতে সাহায্য করতে রিইনফোর্স ফাইবারগ্লাসে তৈরি)।`;
      returnData.t5 = `আপনার সম্পদ আপনার দরজায় বিতরণ করুন`;
      returnData.t6 = `আপনি কি রাম জি এর সত্য ভক্ত?`;
      returnData.t7 = `আপনি কি চান যে রাম জি তার প্রচণ্ড রূপে আপনার দর্শন দেবেন?`;
      returnData.t8 = `হ্যাঁ, তাহলে Artivive অ্যাপটি ডাউনলোড করুন এবং রাম জি এর প্রচণ্ড রূপটি অনুভব করুন।`;
      returnData.t9 = `উপরে দেওয়া চিত্রটি স্ক্যান করতে এবং জাদু দেখতে Artivive অ্যাপটি ব্যবহার করুন।`;
      returnData.merchandise = `আমাদের পণ্যদ্রব্য কিনুন:`
      break;
    default:
      returnData.t1 = `Thank you for Filling out the Form.`;
      returnData.t2 = `As a token of Reward, here is your collectible - Ram Ji k mandir nirmaan mein diya gya apka yogdan`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `Buy our merchandise :`
      break;
  }
  return returnData;
}

export const MURTI_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - Thank you very much for your contribution in the adornment of Lord Shri Ram. May God always fulfill your wishes.`;
      returnData.t2 = `We express our gratitude warm-heartedly for making Ram Ji murti beautiful with the shringaar. Your devotion and artistry have truly elevated its divine presence. Thank you from the depths of our hearts.`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `Are you a true devotee of Ram ji?`;
      returnData.t7 = `Do you want Ram Ji to appear before you in his fierce form?`;
      returnData.t8 = `If yes, then download Artivive app and experience the fierce form of Ram ji firsthand.`;
      returnData.t9 = `Scan the above photo with Artivive app and see the magic.`;
      returnData.merchandise = `Buy our merchandise :`

      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार स्वरूप आपकी संग्रहणीय वस्तु यहाँ है - भगवान श्री राम के श्रृंगार में आपके योगदान के लिए बहुत-बहुत धन्यवाद। भगवान आपकी मनोकामनाएं सदैव पूर्ण करें।`;
      returnData.t2 = `राम जी की मूर्ति को शृंगार से सुंदर बनाने के लिए हम हृदय से आभार व्यक्त करते हैं। आपकी भक्ति और कलात्मकता ने वास्तव में इसकी दिव्य उपस्थिति को उन्नत किया है। हमारे दिल की गहराइयों से धन्यवाद।`;
      returnData.t3 = `आप अपनी संग्रहणीय वस्तुएं यहां देख सकते हैं:`;
      returnData.t4 = `नीचे क्लिक करके अपने योगदान के बदले एक भौतिक ईंट (प्रबलित फाइबरग्लास से बनी जो 100 साल तक चलेगी) प्राप्त करें।`;
      returnData.t5 = `अपनी संपत्ति अपने दरवाजे पर प्राप्त करें`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `हमारा माल खरीदें:`

      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்களது சேகரிப்பு - பகவான் ஸ்ரீ ராமரின் அலங்காரத்தில் உங்கள் பங்களிப்புக்கு மிக்க நன்றி. கடவுள் எப்போதும் உங்கள் விருப்பங்களை நிறைவேற்றட்டும்.`;
      returnData.t2 = `ராம் ஜி மூர்த்தியை சிருங்காரத்தால் அழகுபடுத்தியதற்கு எங்கள் நன்றியை மனதாரத் தெரிவித்துக் கொள்கிறோம். உங்கள் பக்தியும் கலைத்திறனும் உண்மையிலேயே அதன் தெய்வீக இருப்பை உயர்த்தியுள்ளன. எங்கள் இதயத்தின் ஆழத்திலிருந்து நன்றி.`;
      returnData.t3 = `நீங்கள் உங்கள் கலெக்டிபிள்ஸ் இங்கே காணலாம்: `;
      returnData.t4 = `உங்கள் பங்குக்கு உண்டாக்கப்படும் கட்டமினை (100 ஆண்டுகள் நீளாக இருக்கும் புளப்பான் ஃபைபர்கிளாஸ் செய்யப்பட்டுள்ளது) பெற கீழே கிளிக் செய்யவும்.`;
      returnData.t5 = `உங்கள் சொத்துக்களை உங்கள் வீட்டு வாசலில் டெலிவரி செய்யுங்கள்`;
      returnData.t6 = `நீங்கள் இராம் ஜி உண்மையான பக்தர் ஆகின்றீர்களா?`;
      returnData.t7 = `நீங்கள் விரைவில் ராம் ஜி உங்களுக்கு அவரது பிரசாந்தியான ரூபத்தில் பரிதாபம் செய்து கொள்ள விரும்புகிறீர்களா?`;
      returnData.t8 = `ஆம், ஆனால், இங்கு டவுன்லோட் செய்யவும் Artivive ஆப் மற்றும் ராம் ஜி அவரது பிரசாந்த ரூபம் அனுபவிக்கவும்.`;
      returnData.t9 = `உருவான படத்தை கிளிக் செய்து உங்கள் தலைப்பு முகவரியில் பெறுங்கள்`;
      returnData.merchandise = `எங்கள் பொருட்களை வாங்கவும்:`

      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కి టోకెన్‌గా, ఇక్కడ మీ సేకరణ ఉంది - శ్రీరాముని అలంకారంలో మీరు చేసిన సహకారానికి చాలా ధన్యవాదాలు. భగవంతుడు మీ కోరికలను ఎల్లప్పుడూ నెరవేరుస్తాడు.`;
      returnData.t2 = `రామ్ జీ మూర్తిని శృంగార్‌తో అందంగా తీర్చిదిద్దినందుకు మేము హృదయపూర్వకంగా మా కృతజ్ఞతలు తెలియజేస్తున్నాము. మీ భక్తి మరియు కళాత్మకత నిజంగా దాని దైవిక ఉనికిని పెంచాయి. మా హృదయ లోతుల్లోంచి ధన్యవాదాలు.`;
      returnData.t3 = `మీరు మీ కలెక్టిబుల్‌ను ఇక్కడ చూడగలరు:`;
      returnData.t4 = `మీ యోగదానాన్ని మార్పురాలు చేసి (అది 100 సంవత్సరాలు ఉండగాని నేరుగా ఫైబర్‌గ్లాస్‌లో తయారాయి) నీడాన్ని పొందండి.`;
      returnData.t5 = `మీ ఆస్తులను మీ ఇంటి వద్దకే అందజేయండి`;
      returnData.t6 = `మీరు రామ్ జికి నిజమైన భక్తులా ఉన్నారా?`;
      returnData.t7 = `మీరు కన్నా రామ్ జి తమ్మీని తమ్మనాగా దర్శనం చూడాలా?`;
      returnData.t8 = `హా, అప్లోడ్ చేయడానికి Artivive యాప్ డౌన్‌లోడ్ చేసి మీరు రామ్ జి కు అనుభవం చేయగలరు.`;
      returnData.t9 = `పైన కలిగిన చిత్రాన్ని Artivive యాప్ ద్వారా స్క్యాన్ చేసి ఆంకోండి`;
      returnData.merchandise = `మా వస్తువులను కొనండి:`

      break;
    case 'Marathi':
      returnData.t1 = `पुरस्काराचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - प्रभू श्री रामाच्या अलंकारात तुम्ही दिलेल्या योगदानाबद्दल तुमचे खूप खूप आभार. देव तुमच्या मनोकामना नेहमी पूर्ण करो.`;
      returnData.t2 = `शृंगाराने रामजी मूर्ती सुंदर केल्याबद्दल आम्ही मनापासून कृतज्ञता व्यक्त करतो. तुमची भक्ती आणि कलात्मकतेने खरोखरच दैवी अस्तित्व उंचावले आहे. आमच्या अंतःकरणाच्या खोलपासून धन्यवाद.`;
      returnData.t3 = `आप आपले कलेक्टेबल्स येथे पहा:`;
      returnData.t4 = `तुमच्या योगदानाच्या बदलात तुमच्याकडून क्लिक करून एक भौतिक इंज प्राप्त करा (जो 100 वर्षांसाठी टिकेल फायबरग्लासमध्ये बनलेली आहे)।`;
      returnData.t5 = `तुमची मालमत्ता तुमच्या दारात पोहोचवा`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त आहात?`;
      returnData.t7 = `क्या आप इच्छिता की राम जी आपल्याला त्याच्या प्रचंड रूपात दर्शन देऊ?`;
      returnData.t8 = `हो, तर डाउनलोड करा Artivive ऍप आणि अपने लग्न करा राम जीच्या प्रचंड रूपाचा अनुभव.`;
      returnData.t9 = `वरील चित्राची Artivive ऍपवर स्कॅन करा आणि जादू पहा.`;
      returnData.merchandise = `आमचा माल खरेदी करा:`


      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ಭಗವಾನ್ ಶ್ರೀರಾಮನ ಅಲಂಕಾರದಲ್ಲಿ ನಿಮ್ಮ ಕೊಡುಗೆಗಾಗಿ ತುಂಬಾ ಧನ್ಯವಾದಗಳು. ದೇವರು ಯಾವಾಗಲೂ ನಿಮ್ಮ ಆಸೆಗಳನ್ನು ಪೂರೈಸಲಿ.`;
      returnData.t2 = `ರಾಮ್ ಜಿ ಮೂರ್ತಿಯನ್ನು ಶೃಂಗಾರದಿಂದ ಸುಂದರವಾಗಿಸಿದ್ದಕ್ಕಾಗಿ ನಾವು ಹೃತ್ಪೂರ್ವಕವಾಗಿ ನಮ್ಮ ಕೃತಜ್ಞತೆಯನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತೇವೆ. ನಿಮ್ಮ ಭಕ್ತಿ ಮತ್ತು ಕಲಾತ್ಮಕತೆ ನಿಜವಾಗಿಯೂ ಅದರ ದೈವಿಕ ಉಪಸ್ಥಿತಿಯನ್ನು ಹೆಚ್ಚಿಸಿದೆ. ನಮ್ಮ ಹೃದಯದ ಆಳದಿಂದ ಧನ್ಯವಾದಗಳು.`;
      returnData.t3 = `ನೀವು ನಿಮ್ಮ ಕಲೆಕ್ಟಿಬುಲ್‌ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು:`;
      returnData.t4 = `ನಿಮ್ಮ ಕೊಡುಗೆಗೆ ಪ್ರತಿಯಾಗಿ ರಿಯಾಲ್ಡ್‌ಫೋರ್ಸ್ಡ್ ಫೈಬರ್ಗ್ಲಾಸ್ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಭೌತಿಕ ಇಂಟ್‌ಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ.`;
      returnData.t5 = `ನಿಮ್ಮ ಸ್ವತ್ತುಗಳನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತಲುಪಿಸಿ`;
      returnData.t6 = `ನೀವು ರಾಮ ಜಿಗೆ ನಿಜವಾದ ಭಕ್ತರಾಗಿದ್ದೀರಾ?`;
      returnData.t7 = `ನೀವು ರಾಮ ಜಿ ತಮ್ಮ ಪ್ರಚಂಡ ರೂಪದಲ್ಲಿ ನಿಮಗೆ ದರ್ಶನ ನೀಡಬಯಸು ತ್ತಾರಾ?`;
      returnData.t8 = `ಹೌದು, ಇಲ್ಲಿದೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ Artivive ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ರಾಮ ಜಿಯ ಪ್ರಚಂಡ ರೂಪವನ್ನು`;
      returnData.t9 = `ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ. ಮೇಲಿನ ಚಿತ್ರವನ್ನು Artivive ಅಪ್ಲಿಕೇಶನ್ ದ್ವಾರಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಕಣ್ಣಾರೆ ನೋಡಿ.`;
      returnData.merchandise = `ನಮ್ಮ ಸರಕುಗಳನ್ನು ಖರೀದಿಸಿ:`

      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારની નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - ભગવાન શ્રી રામના શણગારમાં તમારા યોગદાન માટે ખૂબ ખૂબ આભાર. ભગવાન હંમેશા તમારી મનોકામના પૂર્ણ કરે.`;
      returnData.t2 = `શ્રૃંગાર વડે રામજી મૂર્તિને સુંદર બનાવવા બદલ અમે હૃદયપૂર્વક કૃતજ્ઞતા વ્યક્ત કરીએ છીએ. તમારી ભક્તિ અને કલાત્મકતાએ ખરેખર તેની દૈવી હાજરીને ઉન્નત કરી છે. અમારા હૃદયના ઊંડાણમાંથી તમારો આભાર.`;
      returnData.t3 = `તમે તમારા સંગ્રહને અહીં જોઈ શકો છો`;
      returnData.t4 = `તમારા યોગદાનની વિનંતિથી પ્રાપ્ત કરવા માટે નીચે ક્લિક કરો: એક ભૌતિક ઈંટ (જે 100 વર્ષ સુધી ટિકાવશે, રીઇનફોર્સ ફાઇબરગ્લાસમાં બનાવવામાં આવી છે)।`;
      returnData.t5 = `તમારી સંપત્તિ તમારા ઘરના દ્વારે પહોંચાડો`;
      returnData.t6 = `શ્રીરામ જી તમારા સાચા ભક્ત છે કે નહીં?`;
      returnData.t7 = `શ્રીરામ જી કે પ્રચંડ રૂપમાં તમારા દર્શન આપવા તમને ચાહે છે?`;
      returnData.t8 = `હા, તો Artivive એપ ડાઉનલોડ કરો અને શ્રીરામ જીનો પ્રચંડ રૂપ અનુભવ કરો.`;
      returnData.t9 = `ઉપર આપેલ ચિત્રને Artivive એપ દ્વારા સ્કેન કરો અને જાદુ જોવામાટે।`;
      returnData.merchandise = `અમારો માલ ખરીદો:`

      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - ভগবান শ্রী রামের অলঙ্করণে আপনার অবদানের জন্য আপনাকে অনেক ধন্যবাদ। ঈশ্বর সবসময় আপনার ইচ্ছা পূরণ করুন.`;
      returnData.t2 = `শ্রিংগার দিয়ে রাম জি মূর্তি সুন্দর করার জন্য আমরা আন্তরিকভাবে কৃতজ্ঞতা প্রকাশ করছি। আপনার ভক্তি এবং শৈল্পিকতা সত্যিই এর ঐশ্বরিক উপস্থিতি উন্নত করেছে। আমাদের হৃদয়ের গভীর থেকে আপনাকে ধন্যবাদ.`;
      returnData.t3 = `আপনি আপনার কলেক্টিবলগুলি এখানে দেখতে পারেন:`;
      returnData.t4 = `আপনার অবদানের বদলে একটি শারীরিক ইন্ট প্রাপ্ত করতে নীচে ক্লিক করুন (যা 100 বছর ধরে থাকতে সাহায্য করতে রিইনফোর্স ফাইবারগ্লাসে তৈরি)।`;
      returnData.t5 = `আপনার সম্পদ আপনার দরজায় বিতরণ করুন`;
      returnData.t6 = `আপনি কি রাম জি এর সত্য ভক্ত?`;
      returnData.t7 = `আপনি কি চান যে রাম জি তার প্রচণ্ড রূপে আপনার দর্শন দেবেন?`;
      returnData.t8 = `হ্যাঁ, তাহলে Artivive অ্যাপটি ডাউনলোড করুন এবং রাম জি এর প্রচণ্ড রূপটি অনুভব করুন।`;
      returnData.t9 = `উপরে দেওয়া চিত্রটি স্ক্যান করতে এবং জাদু দেখতে Artivive অ্যাপটি ব্যবহার করুন।`;
      returnData.merchandise = `আমাদের পণ্যদ্রব্য কিনুন:`

      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - प्रभु श्री राम के श्रृंगार में आप के योगदान के लिए बहुत बहुत धन्यवाद भगवान हमेशा आप की मनोकामनाएं पूरी करें.`;
      returnData.t2 = `We express our gratitude warm-heartedly for making Ram Ji murti beautiful with the shringaar. Your devotion and artistry have truly elevated its divine presence. Thank you from the depths of our hearts.`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `Buy our merchandise :`

      break;
  }
  return returnData;
}

export const BAGICHA_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - 'Satyug Life' heartily congratulates you for your contribution in building the garden for the resting place of Lord Shri Ram.`;
      returnData.t2 = `We are delighted that the garden enhancements have brought joy to Ram Ji. Creating a beautiful garden is a wonderful way to show appreciation and create a peaceful and welcoming environment.`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `Are you a true devotee of Ram ji?`;
      returnData.t7 = `Do you want Ram Ji to appear before you in his fierce form?`;
      returnData.t8 = `If yes, then download Artivive app and experience the fierce form of Ram ji firsthand.`;
      returnData.t9 = `Scan the above photo with Artivive app and see the magic.`;
      returnData.merchandise = `Buy our merchandise :`

      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है - प्रभु श्री राम के विश्राम के लिए आश्रम के निर्माण में आपके योगदान के लिए 'सतयुग जीवन' की ओर से आपको हार्दिक शुभकामनाएं।`;
      returnData.t2 = `हमें खुशी है कि बगीचे के सुधार से राम जी को खुशी मिली है। एक सुंदर बगीचा बनाना प्रशंसा दिखाने और एक शांतिपूर्ण और स्वागत योग्य वातावरण बनाने का एक शानदार तरीका है।`;
      returnData.t3 = `आप अपनी संग्रहणीय वस्तुएं यहां देख सकते हैं:`;
      returnData.t4 = `नीचे क्लिक करके अपने योगदान के बदले एक भौतिक ईंट (प्रबलित फाइबरग्लास से बनी जो 100 साल तक चलेगी) प्राप्त करें।`;
      returnData.t5 = `अपनी संपत्ति अपने दरवाजे पर प्राप्त करें`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `हमारा माल खरीदें:`

      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்களது சேகரிப்பு - பிரபு ஸ்ரீ ராம் கே விஸ்ராம் பற்றிய தயாரிப்பு கி ஓர் சே ஆபகோ ஹார்திக் வாழ்த்து.`;
      returnData.t2 = `தோட்ட மேம்பாடுகள் ராம் ஜிக்கு மகிழ்ச்சியைத் தந்ததில் நாங்கள் மகிழ்ச்சி அடைகிறோம். ஒரு அழகான தோட்டத்தை உருவாக்குவது பாராட்டுக்களைக் காட்டுவதற்கும் அமைதியான மற்றும் வரவேற்கத்தக்க சூழலை உருவாக்குவதற்கும் ஒரு அற்புதமான வழியாகும்.`;
      returnData.t3 = `நீங்கள் உங்கள் கலெக்டிபிள்ஸ் இங்கே காணலாம்: `;
      returnData.t4 = `உங்கள் பங்குக்கு உண்டாக்கப்படும் கட்டமினை (100 ஆண்டுகள் நீளாக இருக்கும் புளப்பான் ஃபைபர்கிளாஸ் செய்யப்பட்டுள்ளது) பெற கீழே கிளிக் செய்யவும்.`;
      returnData.t5 = `உங்கள் சொத்துக்களை உங்கள் வீட்டு வாசலில் டெலிவரி செய்யுங்கள்`;
      returnData.t6 = `நீங்கள் இராம் ஜி உண்மையான பக்தர் ஆகின்றீர்களா?`;
      returnData.t7 = `நீங்கள் விரைவில் ராம் ஜி உங்களுக்கு அவரது பிரசாந்தியான ரூபத்தில் பரிதாபம் செய்து கொள்ள விரும்புகிறீர்களா?`;
      returnData.t8 = `ஆம், ஆனால், இங்கு டவுன்லோட் செய்யவும் Artivive ஆப் மற்றும் ராம் ஜி அவரது பிரசாந்த ரூபம் அனுபவிக்கவும்.`;
      returnData.t9 = `உருவான படத்தை கிளிக் செய்து உங்கள் தலைப்பு முகவரியில் பெறுங்கள்`;
      returnData.merchandise = `எங்கள் பொருட்களை வாங்கவும்:`

      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కు టోకెన్‌గా, ఇదిగోండి మీ సేకరణ కి ఓర్ సే ఆపకో హార్దిక్ శుభకామనాఏం.`;
      returnData.t2 = `ఉద్యానవన మెరుగుదలలు రామ్ జీకి ఆనందాన్ని కలిగించినందుకు మేము సంతోషిస్తున్నాము. ఒక అందమైన ఉద్యానవనాన్ని సృష్టించడం అనేది ప్రశంసలను చూపించడానికి మరియు శాంతియుత మరియు స్వాగతించే వాతావరణాన్ని సృష్టించడానికి ఒక అద్భుతమైన మార్గం.`;
      returnData.t3 = `మీరు మీ కలెక్టిబుల్‌ను ఇక్కడ చూడగలరు:`;
      returnData.t4 = `మీ యోగదానాన్ని మార్పురాలు చేసి (అది 100 సంవత్సరాలు ఉండగాని నేరుగా ఫైబర్‌గ్లాస్‌లో తయారాయి) నీడాన్ని పొందండి.`;
      returnData.t5 = `మీ ఆస్తులను మీ ఇంటి వద్దకే అందజేయండి`;
      returnData.t6 = `మీరు రామ్ జికి నిజమైన భక్తులా ఉన్నారా?`;
      returnData.t7 = `మీరు కన్నా రామ్ జి తమ్మీని తమ్మనాగా దర్శనం చూడాలా?`;
      returnData.t8 = `హా, అప్లోడ్ చేయడానికి Artivive యాప్ డౌన్‌లోడ్ చేసి మీరు రామ్ జి కు అనుభవం చేయగలరు.`;
      returnData.t9 = `పైన కలిగిన చిత్రాన్ని Artivive యాప్ ద్వారా స్క్యాన్ చేసి ఆంకోండి`;
      returnData.merchandise = `మా వస్తువులను కొనండి:`

      break;
    case 'Marathi':
      returnData.t1 = `रिवॉर्डचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - प्रभु श्री राम के आराम के लिए बगीर निर्माण मध्ये तुमच्या योगदानासाठी 'सतयुग लाइफ' कडून तुम्हाला हार्दिक शुभेच्छा.`;
      returnData.t2 = `बागेतील सुधारणांमुळे रामजींना आनंद झाला आहे याचा आम्हाला आनंद आहे. एक सुंदर बाग तयार करणे हा कौतुक दाखवण्याचा आणि शांततापूर्ण आणि स्वागतार्ह वातावरण निर्माण करण्याचा एक उत्तम मार्ग आहे.`;
      returnData.t3 = `आप आपले कलेक्टेबल्स येथे पहा:`;
      returnData.t4 = `तुमच्या योगदानाच्या बदलात तुमच्याकडून क्लिक करून एक भौतिक इंज प्राप्त करा (जो 100 वर्षांसाठी टिकेल फायबरग्लासमध्ये बनलेली आहे)।`;
      returnData.t5 = `तुमची मालमत्ता तुमच्या दारात पोहोचवा`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त आहात?`;
      returnData.t7 = `क्या आप इच्छिता की राम जी आपल्याला त्याच्या प्रचंड रूपात दर्शन देऊ?`;
      returnData.t8 = `हो, तर डाउनलोड करा Artivive ऍप आणि अपने लग्न करा राम जीच्या प्रचंड रूपाचा अनुभव.`;
      returnData.t9 = `वरील चित्राची Artivive ऍपवर स्कॅन करा आणि जादू पहा.`;
      returnData.merchandise = `आमचा माल खरेदी करा:`

      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ಪ್ರಭು ಶ್ರೀ ರಾಮ್‌ಗೆ ವಿಶ್ರಮಕ್ಕಾಗಿ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ಕಿ ಓರ್ ಸೆ ಆಪಕೋ ಹಾರ್ದಿಕ್ ಶುಭಕಾಮನಾಯೇಂ.`;
      returnData.t2 = `ಉದ್ಯಾನದ ವರ್ಧನೆಗಳು ರಾಮ್ ಜಿ ಅವರಿಗೆ ಸಂತೋಷ ತಂದಿದೆ ಎಂದು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ. ಸುಂದರವಾದ ಉದ್ಯಾನವನ್ನು ರಚಿಸುವುದು ಮೆಚ್ಚುಗೆಯನ್ನು ತೋರಿಸಲು ಮತ್ತು ಶಾಂತಿಯುತ ಮತ್ತು ಸ್ವಾಗತಾರ್ಹ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸಲು ಅದ್ಭುತ ಮಾರ್ಗವಾಗಿದೆ.`;
      returnData.t3 = `ನೀವು ನಿಮ್ಮ ಕಲೆಕ್ಟಿಬುಲ್‌ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು:`;
      returnData.t4 = `ನಿಮ್ಮ ಕೊಡುಗೆಗೆ ಪ್ರತಿಯಾಗಿ ರಿಯಾಲ್ಡ್‌ಫೋರ್ಸ್ಡ್ ಫೈಬರ್ಗ್ಲಾಸ್ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಭೌತಿಕ ಇಂಟ್‌ಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ.`;
      returnData.t5 = `ನಿಮ್ಮ ಸ್ವತ್ತುಗಳನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತಲುಪಿಸಿ`;
      returnData.t6 = `ನೀವು ರಾಮ ಜಿಗೆ ನಿಜವಾದ ಭಕ್ತರಾಗಿದ್ದೀರಾ?`;
      returnData.t7 = `ನೀವು ರಾಮ ಜಿ ತಮ್ಮ ಪ್ರಚಂಡ ರೂಪದಲ್ಲಿ ನಿಮಗೆ ದರ್ಶನ ನೀಡಬಯಸು ತ್ತಾರಾ?`;
      returnData.t8 = `ಹೌದು, ಇಲ್ಲಿದೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ Artivive ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ರಾಮ ಜಿಯ ಪ್ರಚಂಡ ರೂಪವನ್ನು`;
      returnData.t9 = `ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ. ಮೇಲಿನ ಚಿತ್ರವನ್ನು Artivive ಅಪ್ಲಿಕೇಶನ್ ದ್ವಾರಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಕಣ್ಣಾರೆ ನೋಡಿ.`;
      returnData.merchandise = `ನಮ್ಮ ಸರಕುಗಳನ್ನು ಖರೀದಿಸಿ:`

      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારના ટોકન તરીકે, અહીં તમારું એકત્રીકરણ છે - પ્રભુ શ્રી રામના આરામ માટે બગીચો બનાવવા માટે તમારા યોગદાન માટે 'સતયુગ લાઇફ' તરફથી તમને ધન્યવાદ.`;
      returnData.t2 = `અમને આનંદ છે કે બગીચાના વિકાસથી રામજીને આનંદ થયો છે. સુંદર બગીચો બનાવવો એ પ્રશંસા બતાવવા અને શાંતિપૂર્ણ અને સ્વાગત વાતાવરણ બનાવવાની એક અદ્ભુત રીત છે.`;
      returnData.t3 = `તમે તમારા સંગ્રહને અહીં જોઈ શકો છો`;
      returnData.t4 = `તમારા યોગદાનની વિનંતિથી પ્રાપ્ત કરવા માટે નીચે ક્લિક કરો: એક ભૌતિક ઈંટ (જે 100 વર્ષ સુધી ટિકાવશે, રીઇનફોર્સ ફાઇબરગ્લાસમાં બનાવવામાં આવી છે)।`;
      returnData.t5 = `તમારી સંપત્તિ તમારા ઘરના દ્વારે પહોંચાડો`;
      returnData.t6 = `શ્રીરામ જી તમારા સાચા ભક્ત છે કે નહીં?`;
      returnData.t7 = `શ્રીરામ જી કે પ્રચંડ રૂપમાં તમારા દર્શન આપવા તમને ચાહે છે?`;
      returnData.t8 = `હા, તો Artivive એપ ડાઉનલોડ કરો અને શ્રીરામ જીનો પ્રચંડ રૂપ અનુભવ કરો.`;
      returnData.t9 = `ઉપર આપેલ ચિત્રને Artivive એપ દ્વારા સ્કેન કરો અને જાદુ જોવામાટે।`;
      returnData.merchandise = `અમારો માલ ખરીદો:`

      break;
    case 'Bangla':
      returnData.t1 = `পুরষ্কারের টোকেন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - প্রভু শ্রীরামের সন্তুষ্টির জন্য বাগান সৃষ্টিতে আপনার অবদানের জন্য 'সতযুগ লাইফ'-এর পক্ষ থেকে আপনাকে ধন্যবাদ।`;
      returnData.t2 = `আমরা আনন্দিত যে বাগানের উন্নতি রাম জির জন্য আনন্দ এনেছে। একটি সুন্দর বাগান তৈরি করা প্রশংসা দেখানোর এবং একটি শান্তিপূর্ণ এবং স্বাগত পরিবেশ তৈরি করার একটি চমৎকার উপায়।`;
      returnData.t3 = `আপনি আপনার কলেক্টিবলগুলি এখানে দেখতে পারেন:`;
      returnData.t4 = `আপনার অবদানের বদলে একটি শারীরিক ইন্ট প্রাপ্ত করতে নীচে ক্লিক করুন (যা 100 বছর ধরে থাকতে সাহায্য করতে রিইনফোর্স ফাইবারগ্লাসে তৈরি)।`;
      returnData.t5 = `আপনার সম্পদ আপনার দরজায় বিতরণ করুন`;
      returnData.t6 = `আপনি কি রাম জি এর সত্য ভক্ত?`;
      returnData.t7 = `আপনি কি চান যে রাম জি তার প্রচণ্ড রূপে আপনার দর্শন দেবেন?`;
      returnData.t8 = `হ্যাঁ, তাহলে Artivive অ্যাপটি ডাউনলোড করুন এবং রাম জি এর প্রচণ্ড রূপটি অনুভব করুন।`;
      returnData.t9 = `উপরে দেওয়া চিত্রটি স্ক্যান করতে এবং জাদু দেখতে Artivive অ্যাপটি ব্যবহার করুন।`;
      returnData.merchandise = `আমাদের পণ্যদ্রব্য কিনুন:`

      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - प्रभु श्री राम के विश्राम के लिए बगीचे के निर्माण में आपके योगदान के लिए 'सतयुग लाइफ' की ओर से आपको हार्दिक शुभकामनाएँ।`;
      returnData.t2 = `We are delighted that the garden enhancements have brought joy to Ram Ji. Creating a beautiful garden is a wonderful way to show appreciation and create a peaceful and welcoming environment.`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `Buy our merchandise :`

      break;
  }
  return returnData;
}

export const BHOJNALAYA_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - We heartily thank you for your contribution in making Prasad along with everyone in the restaurant.`;
      returnData.t2 = `We extend our heartfelt thanks for your invaluable contribution in preparing prasad for Ram Ji. Your dedication and devotion have truly enriched our spiritual experience`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `Are you a true devotee of Ram ji?`;
      returnData.t7 = `Do you want Ram Ji to appear before you in his fierce form?`;
      returnData.t8 = `If yes, then download Artivive app and experience the fierce form of Ram ji firsthand.`;
      returnData.t9 = `Scan the above photo with Artivive app and see the magic.`;
      returnData.merchandise = `Buy our merchandise :`

      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, यहां आपका संग्रहणीय है - भोजनालय में सभी के साथ सामूहिक प्रसाद बनाने में आप के योगदान के लिए हम आपके हृदय से धन्यवाद करते हैं।`;
      returnData.t2 = `हमें खुशी है कि बगीचे के सुधार से राम जी को खुशी मिली है। एक सुंदर बगीचा बनाना प्रशंसा दिखाने और एक शांतिपूर्ण और स्वागत योग्य वातावरण बनाने का एक शानदार तरीका है।`;
      returnData.t3 = `आप अपनी संग्रहणीय वस्तुएं यहां देख सकते हैं:`;
      returnData.t4 = `नीचे क्लिक करके अपने योगदान के बदले एक भौतिक ईंट (प्रबलित फाइबरग्लास से बनी जो 100 साल तक चलेगी) प्राप्त करें।`;
      returnData.t5 = `अपनी संपत्ति अपने दरवाजे पर प्राप्त करें`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `हमारा माल खरीदें:`

      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்களது சேகரிப்பு - உணவகத்தில் உள்ள அனைவருடனும் சேர்ந்து பிரசாதம் தயாரிப்பதில் உங்கள் பங்களிப்பிற்கு நாங்கள் மனதார நன்றி கூறுகிறோம்.`;
      returnData.t2 = `ராம் ஜிக்கு பிரசாதம் தயாரிப்பதில் உங்கள் விலைமதிப்பற்ற பங்களிப்பிற்கு எங்கள் மனமார்ந்த நன்றிகளைத் தெரிவித்துக் கொள்கிறோம். உங்களின் அர்ப்பணிப்பும் பக்தியும் எங்களின் ஆன்மீக அனுபவத்தை உண்மையிலேயே வளப்படுத்தியுள்ளன`;
      returnData.t3 = `நீங்கள் உங்கள் கலெக்டிபிள்ஸ் இங்கே காணலாம்: `;
      returnData.t4 = `உங்கள் பங்குக்கு உண்டாக்கப்படும் கட்டமினை (100 ஆண்டுகள் நீளாக இருக்கும் புளப்பான் ஃபைபர்கிளாஸ் செய்யப்பட்டுள்ளது) பெற கீழே கிளிக் செய்யவும்.`;
      returnData.t5 = `உங்கள் சொத்துக்களை உங்கள் வீட்டு வாசலில் டெலிவரி செய்யுங்கள்`;
      returnData.t6 = `நீங்கள் இராம் ஜி உண்மையான பக்தர் ஆகின்றீர்களா?`;
      returnData.t7 = `நீங்கள் விரைவில் ராம் ஜி உங்களுக்கு அவரது பிரசாந்தியான ரூபத்தில் பரிதாபம் செய்து கொள்ள விரும்புகிறீர்களா?`;
      returnData.t8 = `ஆம், ஆனால், இங்கு டவுன்லோட் செய்யவும் Artivive ஆப் மற்றும் ராம் ஜி அவரது பிரசாந்த ரூபம் அனுபவிக்கவும்.`;
      returnData.t9 = `உருவான படத்தை கிளிக் செய்து உங்கள் தலைப்பு முகவரியில் பெறுங்கள்`;
      returnData.merchandise = `எங்கள் பொருட்களை வாங்கவும்:`

      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కు టోకెన్‌గా, మీ సేకరణ ఇదిగోండి - రెస్టారెంట్‌లోని ప్రతి ఒక్కరితో పాటు ప్రసాద్‌ను తయారు చేయడంలో మీ సహకారానికి మేము హృదయపూర్వకంగా ధన్యవాదాలు తెలియజేస్తున్నాము.`;
      returnData.t2 = `రామ్ జీ కోసం ప్రసాదాన్ని సిద్ధం చేయడంలో మీ అమూల్యమైన సహకారానికి మా హృదయపూర్వక ధన్యవాదాలు తెలియజేస్తున్నాము. మీ అంకితభావం మరియు భక్తి నిజంగా మా ఆధ్యాత్మిక అనుభవాన్ని సుసంపన్నం చేశాయి`;
      returnData.t3 = `మీరు మీ కలెక్టిబుల్‌ను ఇక్కడ చూడగలరు:`;
      returnData.t4 = `మీ యోగదానాన్ని మార్పురాలు చేసి (అది 100 సంవత్సరాలు ఉండగాని నేరుగా ఫైబర్‌గ్లాస్‌లో తయారాయి) నీడాన్ని పొందండి.`;
      returnData.t5 = `మీ ఆస్తులను మీ ఇంటి వద్దకే అందజేయండి`;
      returnData.t6 = `మీరు రామ్ జికి నిజమైన భక్తులా ఉన్నారా?`;
      returnData.t7 = `మీరు కన్నా రామ్ జి తమ్మీని తమ్మనాగా దర్శనం చూడాలా?`;
      returnData.t8 = `హా, అప్లోడ్ చేయడానికి Artivive యాప్ డౌన్‌లోడ్ చేసి మీరు రామ్ జి కు అనుభవం చేయగలరు.`;
      returnData.t9 = `పైన కలిగిన చిత్రాన్ని Artivive యాప్ ద్వారా స్క్యాన్ చేసి ఆంకోండి`;
      returnData.merchandise = `మా వస్తువులను కొనండి:`

      break;
    case 'Marathi':
      returnData.t1 = `रिवॉर्डचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - रेस्टॉरंटमधील सर्वांसह प्रसाद बनवण्यात तुम्ही दिलेल्या योगदानाबद्दल आम्ही तुमचे मनापासून आभार मानतो.`;
      returnData.t2 = `रामजींचा प्रसाद तयार करण्यात तुम्ही दिलेल्या अमूल्य योगदानाबद्दल आम्ही मनापासून धन्यवाद देतो. तुमचे समर्पण आणि भक्तीने आमचा आध्यात्मिक अनुभव खरोखर समृद्ध झाला आहे`;
      returnData.t3 = `आप आपले कलेक्टेबल्स येथे पहा:`;
      returnData.t4 = `तुमच्या योगदानाच्या बदलात तुमच्याकडून क्लिक करून एक भौतिक इंज प्राप्त करा (जो 100 वर्षांसाठी टिकेल फायबरग्लासमध्ये बनलेली आहे)।`;
      returnData.t5 = `तुमची मालमत्ता तुमच्या दारात पोहोचवा`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त आहात?`;
      returnData.t7 = `क्या आप इच्छिता की राम जी आपल्याला त्याच्या प्रचंड रूपात दर्शन देऊ?`;
      returnData.t8 = `हो, तर डाउनलोड करा Artivive ऍप आणि अपने लग्न करा राम जीच्या प्रचंड रूपाचा अनुभव.`;
      returnData.t9 = `वरील चित्राची Artivive ऍपवर स्कॅन करा आणि जादू पहा.`;
      returnData.merchandise = `आमचा माल खरेदी करा:`

      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ರೆಸ್ಟೋರೆಂಟ್‌ನಲ್ಲಿರುವ ಪ್ರತಿಯೊಬ್ಬರ ಜೊತೆಗೆ ಪ್ರಸಾದವನ್ನು ಮಾಡುವಲ್ಲಿ ನಿಮ್ಮ ಕೊಡುಗೆಗಾಗಿ ನಾವು ಹೃತ್ಪೂರ್ವಕವಾಗಿ ಧನ್ಯವಾದಗಳು.`;
      returnData.t2 = `ರಾಮ್ ಜಿಗಾಗಿ ಪ್ರಸಾದವನ್ನು ತಯಾರಿಸುವಲ್ಲಿ ನಿಮ್ಮ ಅಮೂಲ್ಯ ಕೊಡುಗೆಗಾಗಿ ನಾವು ನಮ್ಮ ಹೃತ್ಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಸಮರ್ಪಣೆ ಮತ್ತು ಭಕ್ತಿ ನಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವವನ್ನು ನಿಜವಾಗಿಯೂ ಶ್ರೀಮಂತಗೊಳಿಸಿದೆ`;
      returnData.t3 = `ನೀವು ನಿಮ್ಮ ಕಲೆಕ್ಟಿಬುಲ್‌ನು ಇಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು:`;
      returnData.t4 = `ನಿಮ್ಮ ಕೊಡುಗೆಗೆ ಪ್ರತಿಯಾಗಿ ರಿಯಾಲ್ಡ್‌ಫೋರ್ಸ್ಡ್ ಫೈಬರ್ಗ್ಲಾಸ್ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಭೌತಿಕ ಇಂಟ್‌ಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ.`;
      returnData.t5 = `ನಿಮ್ಮ ಸ್ವತ್ತುಗಳನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತಲುಪಿಸಿ`;
      returnData.t6 = `ನೀವು ರಾಮ ಜಿಗೆ ನಿಜವಾದ ಭಕ್ತರಾಗಿದ್ದೀರಾ?`;
      returnData.t7 = `ನೀವು ರಾಮ ಜಿ ತಮ್ಮ ಪ್ರಚಂಡ ರೂಪದಲ್ಲಿ ನಿಮಗೆ ದರ್ಶನ ನೀಡಬಯಸು ತ್ತಾರಾ?`;
      returnData.t8 = `ಹೌದು, ಇಲ್ಲಿದೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ Artivive ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ರಾಮ ಜಿಯ ಪ್ರಚಂಡ ರೂಪವನ್ನು`;
      returnData.t9 = `ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ. ಮೇಲಿನ ಚಿತ್ರವನ್ನು Artivive ಅಪ್ಲಿಕೇಶನ್ ದ್ವಾರಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಕಣ್ಣಾರೆ ನೋಡಿ.`;
      returnData.merchandise = `ನಮ್ಮ ಸರಕುಗಳನ್ನು ಖರೀದಿಸಿ:`

      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારની નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - અમે રેસ્ટોરન્ટમાં દરેક સાથે પ્રસાદ બનાવવામાં તમારા યોગદાન બદલ હૃદયપૂર્વક આભાર માનીએ છીએ.`;
      returnData.t2 = `રામ જી માટે પ્રસાદ તૈયાર કરવામાં તમારા અમૂલ્ય યોગદાન બદલ અમે હૃદયપૂર્વક આભાર વ્યક્ત કરીએ છીએ. તમારા સમર્પણ અને ભક્તિએ અમારા આધ્યાત્મિક અનુભવને ખરેખર સમૃદ્ધ બનાવ્યો છે`;
      returnData.t3 = `તમે તમારા સંગ્રહને અહીં જોઈ શકો છો`;
      returnData.t4 = `તમારા યોગદાનની વિનંતિથી પ્રાપ્ત કરવા માટે નીચે ક્લિક કરો: એક ભૌતિક ઈંટ (જે 100 વર્ષ સુધી ટિકાવશે, રીઇનફોર્સ ફાઇબરગ્લાસમાં બનાવવામાં આવી છે)।`;
      returnData.t5 = `તમારી સંપત્તિ તમારા ઘરના દ્વારે પહોંચાડો`;
      returnData.t6 = `શ્રીરામ જી તમારા સાચા ભક્ત છે કે નહીં?`;
      returnData.t7 = `શ્રીરામ જી કે પ્રચંડ રૂપમાં તમારા દર્શન આપવા તમને ચાહે છે?`;
      returnData.t8 = `હા, તો Artivive એપ ડાઉનલોડ કરો અને શ્રીરામ જીનો પ્રચંડ રૂપ અનુભવ કરો.`;
      returnData.t9 = `ઉપર આપેલ ચિત્રને Artivive એપ દ્વારા સ્કેન કરો અને જાદુ જોવામાટે।`;
      returnData.merchandise = `અમારો માલ ખરીદો:`

      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের টোকেন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - রেস্টুরেন্টের সকলের সাথে প্রসাদ তৈরিতে আপনার অবদানের জন্য আমরা আপনাকে আন্তরিকভাবে ধন্যবাদ জানাই।`;
      returnData.t2 = `রাম জির জন্য প্রসাদ তৈরিতে আপনার অমূল্য অবদানের জন্য আমরা আন্তরিকভাবে ধন্যবাদ জানাই। আপনার উত্সর্গ এবং ভক্তি সত্যিই আমাদের আধ্যাত্মিক অভিজ্ঞতা সমৃদ্ধ করেছে`;
      returnData.t3 = `আপনি আপনার কলেক্টিবলগুলি এখানে দেখতে পারেন:`;
      returnData.t4 = `আপনার অবদানের বদলে একটি শারীরিক ইন্ট প্রাপ্ত করতে নীচে ক্লিক করুন (যা 100 বছর ধরে থাকতে সাহায্য করতে রিইনফোর্স ফাইবারগ্লাসে তৈরি)।`;
      returnData.t5 = `আপনার সম্পদ আপনার দরজায় বিতরণ করুন`;
      returnData.t6 = `আপনি কি রাম জি এর সত্য ভক্ত?`;
      returnData.t7 = `আপনি কি চান যে রাম জি তার প্রচণ্ড রূপে আপনার দর্শন দেবেন?`;
      returnData.t8 = `হ্যাঁ, তাহলে Artivive অ্যাপটি ডাউনলোড করুন এবং রাম জি এর প্রচণ্ড রূপটি অনুভব করুন।`;
      returnData.t9 = `উপরে দেওয়া চিত্রটি স্ক্যান করতে এবং জাদু দেখতে Artivive অ্যাপটি ব্যবহার করুন।`;
      returnData.merchandise = `আমাদের পণ্যদ্রব্য কিনুন:`

      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - भोजनालय में सब के साथ मिलकर प्रसाद बनाने में आप क़े योगदान क़े लिए हम आप का ह्रदय से धन्यवाद करते हैं `;
      returnData.t2 = `We extend our heartfelt thanks for your invaluable contribution in preparing prasad for Ram Ji. Your dedication and devotion have truly enriched our spiritual experience`;
      returnData.t3 = `You can view your collectibles here:`;
      returnData.t4 = `Receive a Physical Brick (made in Reinforced fiberglass that will last a 100 years) against your contribution by clicking below.`;
      returnData.t5 = `GET YOUR ASSET DELIVERED AT YOUR DOORSTEP`;
      returnData.t6 = `क्या आप राम जी के सच्चे भक्त हैं?`;
      returnData.t7 = `क्या आप चाहते हैं कि राम जी अपने प्रचंड रूप में आपको दर्शन दे?`;
      returnData.t8 = `अगर हां, तो डाउनलोड किजिये Artivive ऐप और अपने प्रत्यक्ष अनुभव करें राम जी का प्रचंड रूप।`;
      returnData.t9 = `ऊपर दी गई तस्वीर को Artivive ऐप द्वारा स्कैन करें और देखें जादू।`;
      returnData.merchandise = `Buy our merchandise :`

      break;
  }
  return returnData;
}

export const VIRTUAL_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - Thank you for contributing to Ram Ji's Aarti and Prasad. We hope that Ram Ji's blessings always remain with you and your entire family.`;
      returnData.t2 = `We appreciate your sentiment and dedication to making Lord Rama happy by performing his Aarti and offering Prasad. This is a beautiful way to express your devotion and faith. May your prayers and offerings bring you peace, blessings, and a sense of spiritual fulfilment.`;
      returnData.t3 = `Click here to check your invoice`;
      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है - राम जी की आरती एवं प्रसाद में अपना योगदान देने के लिए धन्यवाद हम आशा करते हैं कि राम जी का आशीर्वाद आप पर एवं आपके पूरे परिवार पर सदा बना रहे`;
      returnData.t2 = `हम भगवान राम की आरती करके और प्रसाद चढ़ाकर उन्हें प्रसन्न करने के लिए आपकी भावना और समर्पण की सराहना करते हैं। यह अपनी भक्ति और आस्था व्यक्त करने का एक सुंदर तरीका है। आपकी प्रार्थनाएं और प्रसाद आपको शांति, आशीर्वाद और आध्यात्मिक संतुष्टि की भावना प्रदान करें।`;
      returnData.t3 = `अपना चालान जांचने के लिए यहां क्लिक करें`;
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்கள் சேகரிப்பு - ராம் ஜி கி ஆரத்தி ஏவன் பிரசாதம் ஆம் ஜி கா ஆசீர்வாத் நீங்கள் ஏவங் உங்களுக்குப் பூரே பரிவார் பர் சதா பனா ரஹே`;
      returnData.t2 = `ஆரத்தி செய்து பிரசாதம் வழங்கி ராமரை மகிழ்விக்கும் உங்கள் உணர்வையும் அர்ப்பணிப்பையும் நாங்கள் பாராட்டுகிறோம். உங்கள் பக்தி மற்றும் நம்பிக்கையை வெளிப்படுத்த இது ஒரு அழகான வழியாகும். உங்கள் பிரார்த்தனைகள் மற்றும் பிரசாதங்கள் உங்களுக்கு அமைதியையும், ஆசீர்வாதங்களையும், ஆன்மீக நிறைவு உணர்வையும் தரட்டும்.`;
      returnData.t3 = `உங்கள் விலைப்பட்டியல் சரிபார்க்க இங்கே கிளிக் செய்யவும்`;
      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కి టోకెన్‌గా, మీ సేకరణ ఇదిగోండి - రామ్ జీ కి ఆరతి ఏవం ప్రసాద్ ఆమ్ జీ కా ఆశీర్వాదం ఆప్ పర్ ఏవం ఆపకే పూరే పరివార్ పర్ సదా బనా రహే`;
      returnData.t2 = `ఆరతి చేసి, ప్రసాదం అందించి రాముడిని సంతోషపెట్టాలనే మీ సెంటిమెంట్ మరియు అంకితభావాన్ని మేము అభినందిస్తున్నాము. మీ భక్తి మరియు విశ్వాసాన్ని వ్యక్తీకరించడానికి ఇది ఒక అందమైన మార్గం. మీ ప్రార్థనలు మరియు సమర్పణలు మీకు శాంతి, ఆశీర్వాదాలు మరియు ఆధ్యాత్మిక పరిపూర్ణత యొక్క భావాన్ని తీసుకురావాలి.`;
      returnData.t3 = `మీ ఇన్‌వాయిస్‌ని తనిఖీ చేయడానికి ఇక్కడ క్లిక్ చేయండి`;
      break;
    case 'Marathi':
      returnData.t1 = `बक्षीसाचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - राम जी की आरती आणि प्रसादात तुमचे दान द्यायला धन्यवाद, आम्ही आशा करतो की रामजी का आशीर्वाद तुम्हाला आणि तुमच्या सर्व परिवारासाठी सदा बनवा.`;
      returnData.t2 = `भगवान रामाची आरती करून आणि प्रसाद अर्पण करून त्यांना प्रसन्न करण्यासाठी तुमच्या भावनेची आणि समर्पणाची आम्ही कदर करतो. तुमची भक्ती आणि श्रद्धा व्यक्त करण्याचा हा एक सुंदर मार्ग आहे. तुमच्या प्रार्थना आणि अर्पणांमुळे तुम्हाला शांती, आशीर्वाद आणि आध्यात्मिक तृप्तीची अनुभूती मिळो.`;
      returnData.t3 = `तुमचे बीजक तपासण्यासाठी येथे क्लिक करा`;

      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ರಾಮ್ ಜೀ ಕಿ ಆರತಿ ಏವಂ ಪ್ರಸಾದ್ ಆಮ್ ಜೀ ಕಾ ಆಶೀರ್ವಾದ ಆಪ ಪರ ಏವಂ ಆಪಕೇ ಪೂರೇ ಪರಿವಾರ ಪರ ಸದಾ ಬನಾ ರಹೇ`;
      returnData.t2 = `ಆರತಿ ಮತ್ತು ಪ್ರಸಾದವನ್ನು ಅರ್ಪಿಸುವ ಮೂಲಕ ಭಗವಾನ್ ರಾಮನನ್ನು ಸಂತೋಷಪಡಿಸುವ ನಿಮ್ಮ ಭಾವನೆ ಮತ್ತು ಸಮರ್ಪಣೆಯನ್ನು ನಾವು ಪ್ರಶಂಸಿಸುತ್ತೇವೆ. ನಿಮ್ಮ ಭಕ್ತಿ ಮತ್ತು ನಂಬಿಕೆಯನ್ನು ವ್ಯಕ್ತಪಡಿಸಲು ಇದು ಒಂದು ಸುಂದರ ಮಾರ್ಗವಾಗಿದೆ. ನಿಮ್ಮ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ಕೊಡುಗೆಗಳು ನಿಮಗೆ ಶಾಂತಿ, ಆಶೀರ್ವಾದ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ನೆರವೇರಿಕೆಯ ಭಾವವನ್ನು ತರಲಿ.`;
      returnData.t3 = `ನಿಮ್ಮ ಸರಕುಪಟ್ಟಿ ಪರಿಶೀಲಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ`;
      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારના સંકેત તરીકે, અહીં તમારું એકત્રીકરણ છે - રામજીની આરતી અને પ્રસાદમાં તમારું દાન આપવા માટે આભાર અમને આશા છે કે રામજીનો આશીર્વાદ તમે અને તમારા બધા પર પરિવાર સદા બનાવો`;
      returnData.t2 = `ભગવાન રામને તેમની આરતી કરીને અને પ્રસાદ આપીને ખુશ કરવા માટે અમે તમારી ભાવના અને સમર્પણની કદર કરીએ છીએ. તમારી ભક્તિ અને વિશ્વાસ વ્યક્ત કરવાની આ એક સુંદર રીત છે. તમારી પ્રાર્થનાઓ અને અર્પણો તમને શાંતિ, આશીર્વાદ અને આધ્યાત્મિક પરિપૂર્ણતાની ભાવના આપે.`;
      returnData.t3 = `તમારું ભરતિયું તપાસવા માટે અહીં ક્લિક કરો`;
      break;
    case 'Bangla':
      returnData.t1 = `পুরষ্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - রামজির আরতি ও চর্চায় আপনার দান করার জন্য ধন্যবাদ আমাদের আশা করছি, রামজি কা আশীর্বাদ আপনি এবং আপনার সমস্ত পরিবারে সদা তৈরি করুন`;
      returnData.t2 = `আমরা ভগবান রামকে তাঁর আরতি এবং প্রসাদ প্রদানের মাধ্যমে খুশি করার জন্য আপনার অনুভূতি এবং উত্সর্গের প্রশংসা করি। এটি আপনার ভক্তি এবং বিশ্বাস প্রকাশ করার একটি সুন্দর উপায়। আপনার প্রার্থনা এবং প্রস্তাবগুলি আপনাকে শান্তি, আশীর্বাদ এবং আধ্যাত্মিক পরিপূর্ণতার অনুভূতি নিয়ে আসুক।`;
      returnData.t3 = `আপনার চালান চেক করতে এখানে ক্লিক করুন`;
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - राम जी की आरती एवं प्रसाद में अपना योगदान देने के लिए धन्यवाद हम आशा करते हैं राम जी का आशीर्वाद आप पर एवं आपके पूरे परिवार पर सदा बना रहे`;
      returnData.t2 = `We appreciate your sentiment and dedication to making Lord Rama happy by performing his Aarti and offering Prasad. This is a beautiful way to express your devotion and faith. May your prayers and offerings bring you peace, blessings, and a sense of spiritual fulfilment.`;
      returnData.t3 = `Click here to check your invoice`;
      break;
  }
  return returnData;
}

export const PHYSICAL_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - On behalf of Satyug Life, thank you for choosing the option of Vatsa Physical Puja, we have received your request and we have also informed the priest about it. As soon as the puja is over, the prasad will be sent to the address given below.`;
      returnData.t2 = `Status of your puja and prasad`;
      returnData.t3 = `You can also check on`;
      returnData.t4 = `Click here to check your invoice`
      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, यहां आपका संग्रहणीय है - वत्स भौतिक पूजा के विकल्प के लिए सतयुग लाइफ की ओर से आपका धन्यवाद, आपका अनुरोध हमें प्राप्त हो गया है और हमने इसकी जानकारी पुजारी जी को भी दी है| पूजा-अर्चना होती ही प्रसाद नीचे दिए गए पते पर भेजा जाएगा`;
      returnData.t2 = `आपकी पूजा और प्रसाद की स्थिति`;
      returnData.t3 = `पर भी चेक कर सकते हैं |`;
      returnData.t4 = `अपना चालान जांचने के लिए यहां क्लिक करें`
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்கள் சேகரிப்பு - வத்ஸ் பௌதிக் பூஜைக்காக जी हमें ப்ராப்த் ஹோ சுகி மற்றும் ஹமனே இசகி ஜானகரி புஜாரி ஜி கோ பீ தேஹதி| பூஜை சம்பன்ன ஹோதே ஹீ பிரசாத் கோ நீச்சே தியே கே முகவரி மே பேஜ் தியா ஜாயேகா`;
      returnData.t2 = `உங்கள் பூஜை மற்றும் பிரசாதத்தின் நிலை`;
      returnData.t3 = `நீங்கள் சரிபார்க்கலாம்`;
      returnData.t4 = `உங்கள் விலைப்பட்டியல் சரிபார்க்க இங்கே கிளிக் செய்யவும்`
      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కు టోకెన్‌గా, మీ సేకరణ ఇదిగోండి - వత్స్ భౌతిక పూజ కోసం జీ హమేం ప్రాప్త హో చుకీ మరియు హమనే ఇసకీ జానకారీ పూజారీ జీ కో భీ దేహదీ| పూజ సంపన్న హోతే హీ ప్రసాద్ కో నీచే దియే గాయే చిరునామా నా భేజ్ దియా జాయేగా`;
      returnData.t2 = `మీ పూజ మరియు ప్రసాదం యొక్క స్థితి`;
      returnData.t3 = `మీరు కూడా తనిఖీ చేయవచ్చు`;
      returnData.t4 = `మీ ఇన్‌వాయిస్‌ని తనిఖీ చేయడానికి ఇక్కడ క్లిక్ చేయండి`
      break;
    case 'Marathi':
      returnData.t1 = `रिवॉर्डचे चिन्ह म्हणून, येथे तुमचा संग्रह आहे - वत्स भौतिक पूजा के विक्लप को चुननेसाठी सतयुग लाइफ की ओर से तुमचा धन्यवाद, तुमचा अर्जी आम्हाला प्राप्त करा आणि आम्ही त्याची माहिती पुजारी जी को देदी| पूजा पूर्ण होते ही प्रसाद खाली दिलेला पत्ता मे भी जायेगा`;
      returnData.t2 = `तुमची पूजा आणि प्रसादाची स्थिती`;
      returnData.t3 = `तुम्ही देखील तपासू शकता`;
      returnData.t4 = `तुमचे बीजक तपासण्यासाठी येथे क्लिक करा`
      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ವತ್ಸ್ ಭೌತಿಕ ಪೂಜೆಗಾಗಿ ಜೀ ಹಮೇಂ ಪ್ರಾಪ್ತ ಹೋ ಚುಕಿ ಮತ್ತು ಹಮನೇ ಇಸಕಿ ಜಾನಪದ ಪೂಜಾರಿ ಜೀ ಕೋ ಭೀ ದೇಹದಿ| ಪೂಜಾ ಸಂಪನ್ನ ಹೋತೆ ಹೀ ಪ್ರಸಾದ ಕೋ ನೀಚೆ ದಿಯೇ ಗಯೇ ವಿಳಾಸ ನನ್ನ ಭೇಜ ದಿಯಾ ಜಾಯೇಗಾ`;
      returnData.t2 = `ನಿಮ್ಮ ಪೂಜೆ ಮತ್ತು ಪ್ರಸಾದದ ಸ್ಥಿತಿ`;
      returnData.t3 = `ನೀವು ಸಹ ಪರಿಶೀಲಿಸಬಹುದು`;
      returnData.t4 = `ನಿಮ್ಮ ಸರಕುಪಟ್ಟಿ ಪರಿಶೀಲಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ`
      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારની નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - સતયુગ લાઇફ વતી, વત્સ ભૌતિક પૂજાનો વિકલ્પ પસંદ કરવા બદલ તમારો આભાર, અમને તમારી વિનંતી મળી છે અને અમે તેના વિશે પૂજારીને પણ જાણ કરી છે. પૂજા પૂરી થતાની સાથે જ નીચે આપેલા સરનામે પ્રસાદ મોકલવામાં આવશે.`;
      returnData.t2 = `તમારી પૂજા અને પ્રસાદની સ્થિતિ`;
      returnData.t3 = `તમે પણ તપાસી શકો છો`;
      returnData.t4 = `તમારું ભરતિયું તપાસવા માટે અહીં ક્લિક કરો`
      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের টোকেন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - সত্যযুগ লাইফের পক্ষ থেকে, বৎস শারীরিক পূজার বিকল্পটি বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ, আমরা আপনার অনুরোধ পেয়েছি এবং আমরা পুরোহিতকেও এটি সম্পর্কে জানিয়েছি। পূজা শেষ হলেই প্রসাদ পাঠানো হবে নিচের ঠিকানায়।`;
      returnData.t2 = `তোমার পূজা ও প্রসাদের অবস্থা`;
      returnData.t3 = `এছাড়াও আপনি চেক করতে পারেন`;
      returnData.t4 = `আপনার চালান চেক করতে এখানে ক্লিক করুন`
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - वत्स भौतिक पूजा के विक्लप को चुनने के लिए सतयुग लाइफ की ओर से आपका धन्यवाद, आपकी अर्जी हमें प्राप्त हो चुकी और हमने इसकी जानकारी पुजारी जी को भी देदी हैं| पूजा संपन्न होते ही प्रसाद को नीचे दिए गए Address मे भेज दिया जायेगा`;
      returnData.t2 = `आप अपनी पूजा तथा प्रसाद का Status`;
      returnData.t3 = `पर भी check कर सकते हैं |`;
      returnData.t4 = `Click here to check your invoice`
      break;
  }
  return returnData;
}

export const POOJA_INITIATED_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - The worship of Lord Shri Ram has started. As soon as it is completed, I will deliver the Prasad of Lord Ram's blessings to your home.`;
      returnData.t2 = `You can learn more about it`;
      returnData.t3 = `You can also take it by going to`;
      returnData.t4 = `Thank you for choosing the option of physical worship of Ram Temple.`
      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है - वत्स प्रभु श्री राम की पूजा प्रारम्भ हो चुकी हैं जैसे ही ये संपन्न होती हैं तो मैं राम जी के आशीर्वाद रूपी प्रसाद को आपके घर तक पंहुचा दूंगा|`;
      returnData.t2 = `आप इसकी अधिक जानकारी`;
      returnData.t3 = `पर जाकर भी ले सकते हैं`;
      returnData.t4 = `राम मंदिर की भौतिक पूजा के विकल्प को चुनने के लिए आप का धन्यवाद्`
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்களது சேகரிப்பு - பகவான் ஸ்ரீராமரின் வழிபாடு தொடங்கிவிட்டது, அது முடிந்தவுடன், ராமரின் ஆசீர்வாதத்தின் பிரசாதத்தை உங்கள் வீட்டிற்கு வழங்குகிறேன்.`;
      returnData.t2 = `நீங்கள் அதைப் பற்றி மேலும் அறியலாம்`;
      returnData.t3 = `சென்றும் எடுத்துக் கொள்ளலாம்`;
      returnData.t4 = `ராமர் கோயிலின் உடல் வழிபாட்டைத் தேர்ந்தெடுத்ததற்கு நன்றி.`
      break;
    case 'Telugu':
      returnData.t1 = `ప్రతిఫలంగా, ఇదిగో మీ సేకరణ - శ్రీరాముని ఆరాధన ప్రారంభమైంది. అది పూర్తయిన వెంటనే, నేను మీ ఇంటికి శ్రీరాముని ఆశీస్సుల ప్రసాదాన్ని అందజేస్తాను.`;
      returnData.t2 = `మీరు దాని గురించి మరింత తెలుసుకోవచ్చు`;
      returnData.t3 = `మీరు వెళ్లి కూడా తీసుకోవచ్చు`;
      returnData.t4 = `రామ మందిరం భౌతిక పూజ ఎంపికను ఎంచుకున్నందుకు ధన్యవాదాలు.`
      break;
    case 'Marathi':
      returnData.t1 = `पुरस्काराचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - भगवान श्री रामाची पूजा सुरू झाली आहे. ती पूर्ण होताच, मी तुमच्या घरी प्रभू रामाच्या आशीर्वादाचा प्रसाद पोहोचवीन.`;
      returnData.t2 = `आपण याबद्दल अधिक जाणून घेऊ शकता`;
      returnData.t3 = `वर जाऊनही घेऊ शकता`;
      returnData.t4 = `राम मंदिराच्या भौतिक पूजेचा पर्याय निवडल्याबद्दल धन्यवाद.`
      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ಭಗವಾನ್ ಶ್ರೀರಾಮನ ಆರಾಧನೆಯು ಪ್ರಾರಂಭವಾಗಿದೆ. ಅದು ಪೂರ್ಣಗೊಂಡ ತಕ್ಷಣ, ನಾನು ನಿಮ್ಮ ಮನೆಗೆ ಭಗವಾನ್ ರಾಮನ ಆಶೀರ್ವಾದದ ಪ್ರಸಾದವನ್ನು ತಲುಪಿಸುತ್ತೇನೆ.`;
      returnData.t2 = `ನೀವು ಅದರ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಬಹುದು`;
      returnData.t3 = `ಗೆ ಹೋಗುವ ಮೂಲಕವೂ ನೀವು ತೆಗೆದುಕೊಳ್ಳಬಹುದು`;
      returnData.t4 = `ರಾಮ ಮಂದಿರದ ಭೌತಿಕ ಪೂಜೆಯ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.`
      break;
    case 'Gujrati':
      returnData.t1 = `ઈનામની નિશાની તરીકે, અહીં તમારું સંગ્રહિત છે - ભગવાન શ્રી રામની પૂજા શરૂ થઈ ગઈ છે. તે પૂર્ણ થતાં જ હું ભગવાન રામના આશીર્વાદનો પ્રસાદ તમારા ઘરે પહોંચાડીશ.`;
      returnData.t2 = `તમે તેના વિશે વધુ જાણી શકો છો`;
      returnData.t3 = `પર જઈને પણ લઈ શકો છો`;
      returnData.t4 = `રામ મંદિરની ભૌતિક પૂજાનો વિકલ્પ પસંદ કરવા બદલ આભાર.`
      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - ভগবান শ্রী রামের উপাসনা শুরু হয়েছে। এটি সম্পন্ন হওয়ার সাথে সাথে আমি আপনার বাড়িতে ভগবান রামের আশীর্বাদের প্রসাদ পৌঁছে দেব।`;
      returnData.t2 = `আপনি এটি সম্পর্কে আরও জানতে পারেন`;
      returnData.t3 = `গিয়েও নিতে পারেন`;
      returnData.t4 = `রাম মন্দিরের শারীরিক পূজার বিকল্প বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ।`
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - वत्स प्रभु श्री राम की पूजा प्रारम्भ हो चुकी हैं जैसे ही ये संपन्न होती हैं तो मैं राम जी के आशीर्वाद रूपी प्रसाद को आपके घर तक पंहुचा दूंगा|`;
      returnData.t2 = `आप इसकी अधिक जानकारी`;
      returnData.t3 = `पर जाकर भी ले सकते हैं`;
      returnData.t4 = `राम मंदिर की भौतिक पूजा के विकल्प को चुनने के लिए आप का धन्यवाद्`
      break;
  }
  return returnData;
}

export const PRASAD_OUT_FOR_DELIVERY_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - Vatsa Puja has been completed, I will deliver the Prasad in the form of blessings of the Lord to the address given below.`;
      returnData.t2 = `You can learn more about it`;
      returnData.t3 = `You can also take it by going to`;
      returnData.t4 = `Thank you for choosing the option of physical worship of Ram Temple.`
      break;
    case 'Hindi':
      returnData.t1 = `इनाम के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है - वत्स पूजा सम्पन्न हो चुकी हैं, मैं प्रभु के आशीर्वाद रूपी प्रसाद को नीचे दिए गए पते पर पहुंचा दूंगा |`;
      returnData.t2 = `आप इसकी अधिक जानकारी`;
      returnData.t3 = `पर जाकर भी ले सकते हैं`;
      returnData.t4 = `राम मंदिर की भौतिक पूजा के विकल्प को चुनने के लिए आप का धन्यवाद्`
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்கள் சேகரிப்பு - வத்ச பூஜை முடிந்தது, கீழே கொடுக்கப்பட்டுள்ள முகவரிக்கு இறைவனின் ஆசீர்வாத வடிவில் பிரசாதத்தை வழங்குகிறேன்.`;
      returnData.t2 = `நீங்கள் அதைப் பற்றி மேலும் அறியலாம்`;
      returnData.t3 = `சென்றும் எடுத்துக் கொள்ளலாம்`;
      returnData.t4 = `ராமர் கோயிலின் உடல் வழிபாட்டைத் தேர்ந்தெடுத்ததற்கு நன்றி.`
      break;
    case 'Telugu':
      returnData.t1 = `బహుమతికి చిహ్నంగా, ఇదిగో మీ సేకరణ - వత్స పూజ పూర్తయింది, భగవంతుని ఆశీర్వాద రూపంలోని ప్రసాదాన్ని క్రింద ఇవ్వబడిన చిరునామాకు అందజేస్తాను.`;
      returnData.t2 = `మీరు దాని గురించి మరింత తెలుసుకోవచ్చు`;
      returnData.t3 = `మీరు వెళ్లి కూడా తీసుకోవచ్చు`;
      returnData.t4 = `రామ మందిరం భౌతిక పూజ ఎంపికను ఎంచుకున్నందుకు ధన్యవాదాలు.`
      break;
    case 'Marathi':
      returnData.t1 = `पुरस्काराचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - वत्सपूजा पूर्ण झाली आहे, मी खाली दिलेल्या पत्त्यावर परमेश्वराच्या आशीर्वादाच्या रूपात प्रसाद देईन.`;
      returnData.t2 = `आपण याबद्दल अधिक जाणून घेऊ शकता`;
      returnData.t3 = `वर जाऊनही घेऊ शकता`;
      returnData.t4 = `राम मंदिराच्या भौतिक पूजेचा पर्याय निवडल्याबद्दल धन्यवाद.`
      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ವತ್ಸ ಪೂಜೆ ಪೂರ್ಣಗೊಂಡಿದೆ, ನಾನು ಈ ಕೆಳಗಿನ ವಿಳಾಸಕ್ಕೆ ಭಗವಂತನ ಆಶೀರ್ವಾದ ರೂಪದಲ್ಲಿ ಪ್ರಸಾದವನ್ನು ತಲುಪಿಸುತ್ತೇನೆ.`;
      returnData.t2 = `ನೀವು ಅದರ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಬಹುದು`;
      returnData.t3 = `ಗೆ ಹೋಗುವ ಮೂಲಕವೂ ನೀವು ತೆಗೆದುಕೊಳ್ಳಬಹುದು`;
      returnData.t4 = `ರಾಮ ಮಂದಿರದ ಭೌತಿಕ ಪೂಜೆಯ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.`
      break;
    case 'Gujrati':
      returnData.t1 = `ઈનામની નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - વત્સ પૂજા પૂર્ણ થઈ ગઈ છે, હું ભગવાનના આશીર્વાદ સ્વરૂપે પ્રસાદ નીચે આપેલા સરનામે પહોંચાડીશ.`;
      returnData.t2 = `તમે તેના વિશે વધુ જાણી શકો છો`;
      returnData.t3 = `પર જઈને પણ લઈ શકો છો`;
      returnData.t4 = `રામ મંદિરની ભૌતિક પૂજાનો વિકલ્પ પસંદ કરવા બદલ આભાર.`
      break;
    case 'Bangla':
      returnData.t1 = `পুরষ্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - বৎস পূজা সম্পন্ন হয়েছে, আমি নীচে দেওয়া ঠিকানায় প্রভুর আশীর্বাদ আকারে প্রসাদ পৌঁছে দেব।`;
      returnData.t2 = `আপনি এটি সম্পর্কে আরও জানতে পারেন`;
      returnData.t3 = `গিয়েও নিতে পারেন`;
      returnData.t4 = `রাম মন্দিরের শারীরিক পূজার বিকল্প বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ।`
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - वत्स पूजा सम्पन्न हो चुकी हैं, मैं प्रभु के आशीर्वाद रूपी प्रसाद को नीचे दिए गए address पर पहुंचा दूंगा |`;
      returnData.t2 = `आप इसकी अधिक जानकारी`;
      returnData.t3 = `पर जाकर भी ले सकते हैं`;
      returnData.t4 = `राम मंदिर की भौतिक पूजा के विकल्प को चुनने के लिए आप का धन्यवाद्`
      break;
  }
  return returnData;
}

export const PRASAD_DELIVERED_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible - Vats I hope you have received the Prasad of Lord's worship. May God fulfill all your wishes.`;
      returnData.t2 = `Thank you for worshiping Lord Shri Ram through Satyayug Life.`;
      break;
    case 'Hindi':
      returnData.t1 = `इनाम के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है -वत्स आशा करता हूँ आपको प्रभु की पूजा का प्रसाद प्राप्त हो गया होगा भगवान् आपकी सभी मनोकामनाएं पूर्ण करें`;
      returnData.t2 = `प्रभु श्री राम की पूजा को सतयुग लाइफ के माध्यम से कराने के लिए आप का धन्यवाद`;
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்களது சேகரிப்பு - வாட்ஸ் நீங்கள் இறைவனின் வழிபாட்டின் பிரசாதத்தைப் பெற்றிருப்பீர்கள் என்று நம்புகிறேன். கடவுள் உங்கள் எல்லா விருப்பங்களையும் நிறைவேற்றட்டும்.`;
      returnData.t2 = `சத்யயுக் வாழ்க்கையின் மூலம் பகவான் ஸ்ரீ ராமரை வணங்கியதற்கு நன்றி.`;
      break;
    case 'Telugu':
      returnData.t1 = `బహుమతికి చిహ్నంగా, ఇదిగో మీ సేకరణ - వాట్స్ మీరు భగవంతుని ఆరాధన యొక్క ప్రసాదాన్ని స్వీకరించారని నేను ఆశిస్తున్నాను. దేవుడు మీ కోరికలన్నిటినీ నెరవేరుస్తాడు.`;
      returnData.t2 = `సత్యయుగ్ లైఫ్ ద్వారా శ్రీరాముడిని పూజించినందుకు ధన్యవాదాలు.`;
      break;
    case 'Marathi':
      returnData.t1 = `पुरस्काराचे प्रतीक म्हणून, येथे तुमचा संग्रह आहे - वत्स मला आशा आहे की तुम्हाला परमेश्वराच्या पूजेचा प्रसाद मिळाला असेल. देव तुमच्या सर्व इच्छा पूर्ण करो.`;
      returnData.t2 = `सत्ययुग जीवनाद्वारे भगवान श्री रामाची पूजा केल्याबद्दल धन्यवाद.`;
      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ವಟ್ಸ್ ನೀವು ಭಗವಂತನ ಆರಾಧನೆಯ ಪ್ರಸಾದವನ್ನು ಸ್ವೀಕರಿಸಿದ್ದೀರಿ ಎಂದು ನಾನು ಭಾವಿಸುತ್ತೇನೆ. ದೇವರು ನಿಮ್ಮ ಎಲ್ಲಾ ಆಸೆಗಳನ್ನು ಪೂರೈಸಲಿ.`;
      returnData.t2 = `ಸತ್ಯಯುಗ್ ಲೈಫ್ ಮೂಲಕ ಭಗವಾನ್ ಶ್ರೀರಾಮನನ್ನು ಆರಾಧಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.`;
      break;
    case 'Gujrati':
      returnData.t1 = `ઈનામની નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - વત્સ હું આશા રાખું છું કે તમને ભગવાનની પૂજાનો પ્રસાદ મળ્યો હશે. ભગવાન તમારી બધી ઇચ્છાઓ પૂર્ણ કરે.`;
      returnData.t2 = `સત્યયુગ જીવન દ્વારા ભગવાન શ્રી રામની પૂજા કરવા બદલ આભાર.`;
      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - ভ্যাটস আমি আশা করি আপনি প্রভুর উপাসনার প্রসাদ পেয়েছেন। ঈশ্বর আপনার সমস্ত ইচ্ছা পূরণ করুন।`;
      returnData.t2 = `সত্যযুগ জীবনের মাধ্যমে ভগবান শ্রী রামের উপাসনা করার জন্য আপনাকে ধন্যবাদ।`;
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible -वत्स आशा करता हूँ आपको प्रभु की पूजा का प्रसाद प्राप्त हो गया होगा भगवान् आपकी सभी मनोकामनाएं पूर्ण करें`;
      returnData.t2 = `प्रभु श्री राम की पूजा को सतयुग लाइफ के माध्यम से कराने के लिए आप का धन्यवाद`;
      break;
  }
  return returnData;
}

export const CERTIFICATE_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of Reward, here is your collectible -May God fulfill all your wishes`;
      returnData.t2 = `Thank you for worshiping Lord Shri Ram through Satyayug Life.`;
      break;
    case 'Hindi':
      returnData.t1 = `इनाम के प्रतीक के रूप में, यहां आपकी संग्रहणीय वस्तु है -वत्स भगवान् आपकी सभी मनोकामनाएं पूर्ण करें`;
      returnData.t2 = `प्रभु श्री राम की पूजा को सतयुग लाइफ के माध्यम से कराने के लिए आप का धन्यवाद`;
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதியின் அடையாளமாக, இதோ உங்கள் சேகரிப்பு - கடவுள் உங்கள் எல்லா விருப்பங்களையும் நிறைவேற்றட்டும்`;
      returnData.t2 = `சத்யயுக் வாழ்க்கையின் மூலம் பகவான் ஸ்ரீ ராமரை வணங்கியதற்கு நன்றி.`;
      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌కు చిహ్నంగా, ఇక్కడ మీ సేకరణ ఉంది - దేవుడు మీ కోరికలన్నింటినీ తీర్చగలడు`;
      returnData.t2 = `సత్యయుగ్ లైఫ్ ద్వారా శ్రీరాముడిని పూజించినందుకు ధన్యవాదాలు.`;
      break;
    case 'Marathi':
      returnData.t1 = `बक्षीस म्हणून, येथे तुमचा संग्रह आहे - देव तुमच्या सर्व इच्छा पूर्ण करो`;
      returnData.t2 = `सत्ययुग जीवनाद्वारे भगवान श्री रामाची पूजा केल्याबद्दल धन्यवाद.`;
      break;
    case 'Kanada':
      returnData.t1 = `ಬಹುಮಾನದ ಸಂಕೇತವಾಗಿ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆ ಇಲ್ಲಿದೆ - ದೇವರು ನಿಮ್ಮ ಎಲ್ಲಾ ಆಸೆಗಳನ್ನು ಪೂರೈಸಲಿ`;
      returnData.t2 = `ಸತ್ಯಯುಗ್ ಲೈಫ್ ಮೂಲಕ ಭಗವಾನ್ ಶ್ರೀರಾಮನನ್ನು ಆರಾಧಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.`;
      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારના નિશાની તરીકે, અહીં તમારું એકત્રીકરણ છે - ભગવાન તમારી બધી ઇચ્છાઓ પૂર્ણ કરે`;
      returnData.t2 = `સત્યયુગ જીવન દ્વારા ભગવાન શ્રી રામની પૂજા કરવા બદલ આભાર.`;
      break;
    case 'Bangla':
      returnData.t1 = `পুরস্কারের চিহ্ন হিসাবে, এখানে আপনার সংগ্রহযোগ্য - ঈশ্বর আপনার সমস্ত ইচ্ছা পূরণ করুন`;
      returnData.t2 = `সত্যযুগ জীবনের মাধ্যমে ভগবান শ্রী রামের উপাসনা করার জন্য আপনাকে ধন্যবাদ।`;
      break;
    default:
      returnData.t1 = `As a token of Reward, here is your collectible - वत्स भगवान् आपकी सभी मनोकामनाएं पूर्ण करें `;
      returnData.t2 = `प्रभु श्री राम की पूजा को सतयुग लाइफ के माध्यम से कराने के लिए आप का धन्यवाद`;
      break;
  }
  return returnData;
}

export const KARMAPOINTS_BODY = (data: any, lang: any) => {
  let returnData: any = {};
  switch (LANGUAGE[lang]) {
    case 'English':
      returnData.t1 = `As a token of rewards, you have earned Karma Points which can be redeemed in near future. You can check the status on`;
      break;
    case 'Hindi':
      returnData.t1 = `पुरस्कार के प्रतीक के रूप में, आपने कर्म अंक अर्जित किए हैं जिन्हें निकट भविष्य में भुनाया जा सकता है। आप स्टेटस चेक कर सकते हैं`;
      break;
    case 'Tamil':
      returnData.t1 = `வெகுமதிகளின் அடையாளமாக, நீங்கள் கர்மா புள்ளிகளைப் பெற்றுள்ளீர்கள், அவை எதிர்காலத்தில் ரிடீம் செய்யப்படலாம். நீங்கள் நிலையை சரிபார்க்கலாம்`;
      break;
    case 'Telugu':
      returnData.t1 = `రివార్డ్‌ల టోకెన్‌గా, మీరు సమీప భవిష్యత్తులో రీడీమ్ చేయగల కర్మ పాయింట్‌లను సంపాదించారు. మీరు స్థితిని తనిఖీ చేయవచ్చు`;
      break;
    case 'Marathi':
      returnData.t1 = `रिवॉर्ड्सचे टोकन म्हणून, तुम्ही कर्मा पॉइंट्स मिळवले आहेत जे नजीकच्या भविष्यात रिडीम केले जाऊ शकतात. वर स्थिती तपासू शकता`;
      break;
    case 'Kanada':
      returnData.t1 = `ರಿವಾರ್ಡ್‌ಗಳ ಟೋಕನ್‌ನಂತೆ, ನೀವು ಕರ್ಮ ಪಾಯಿಂಟ್‌ಗಳನ್ನು ಗಳಿಸಿರುವಿರಿ ಅದನ್ನು ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ರಿಡೀಮ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು. ನೀವು ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಬಹುದು`;
      break;
    case 'Gujrati':
      returnData.t1 = `પુરસ્કારોના ટોકન તરીકે, તમે કર્મ પોઈન્ટ્સ મેળવ્યા છે જે નજીકના ભવિષ્યમાં રિડીમ કરી શકાય છે. પર તમે સ્ટેટસ ચેક કરી શકો છો`;
      break;
    case 'Bangla':
      returnData.t1 = `পুরষ্কারের টোকেন হিসাবে, আপনি কারমা পয়েন্ট অর্জন করেছেন যা অদূর ভবিষ্যতে রিডিম করা যেতে পারে। আপনি স্থিতি পরীক্ষা করতে পারেন`;
      break;
    default:
      returnData.t1 = `As a token of rewards, you have earned Karma Points which can be redeemed in near future. You can check the status on`;
      break;
  }
  return returnData;
}