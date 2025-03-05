
type CourseContent = {
  english: string;
  hindi: string;
  gujarati: string;
  marathi: string;
};

type CourseContentRecord = {
  [key: string]: CourseContent;
};

export const courseContentData: CourseContentRecord = {
  'basics-of-saving': {
    english: `
      <h2>Basics of Saving – Explained with a Simple Analogy</h2>
      
      <p><strong>Analogy:</strong> Imagine you have a mango tree in your backyard. Every summer, the tree gives you mangoes. If you eat all the mangoes right away, you will have none left for later. But if you save some, you can enjoy them later, share with others, or even plant new trees.</p>
      
      <p>Saving money works the same way. If you spend all your earnings, you'll have nothing for emergencies or future goals. But if you save a portion, you build financial security and opportunities.</p>
      
      <hr/>
      
      <h3>1️⃣ English Explanation</h3>
      <ul>
        <li><strong>What is Saving?</strong> Saving means keeping aside some money from your income instead of spending it all.</li>
        <li><strong>Why Save?</strong> To handle emergencies, achieve goals (like buying a home or education), and build a secure future.</li>
        <li><strong>How to Save?</strong> Follow the <strong>50-30-20 rule</strong>:
          <ul>
            <li>50% for needs (rent, food, bills)</li>
            <li>30% for wants (shopping, entertainment)</li>
            <li>20% for savings (bank account, investments)</li>
          </ul>
        </li>
      </ul>
      
      <h3 class="mt-8">🌱 Key Takeaway:</h3>
      <p>Saving is like keeping some mangoes for the future! Don't spend all your money—keep some aside so you have financial security and growth opportunities.</p>
    `,
    hindi: `
      <h2>बचत की मूल बातें – एक सरल उदाहरण के साथ समझें</h2>
      
      <p><strong>कल्पना करें कि आपके पास एक आम का पेड़ है।</strong> अगर आप सारे आम एक साथ खा लें, तो बाद में कुछ नहीं बचेगा। लेकिन अगर आप कुछ आम बचाकर रखें, तो आप उन्हें बाद में खा सकते हैं, दूसरों को दे सकते हैं या नए पेड़ लगा सकते हैं।</p>
      
      <p><strong>बचत (Saving) भी इसी तरह काम करती है।</strong> अगर आप अपनी पूरी कमाई खर्च कर देंगे, तो भविष्य के लिए कुछ नहीं बचेगा। लेकिन अगर आप थोड़ा पैसा बचाते हैं, तो मुश्किल समय में काम आएगा।</p>
      
      <hr/>
      
      <h3>2️⃣ हिंदी (Hindi) में समझें</h3>
      <ul>
        <li><strong>बचत क्या है?</strong> यह अपनी कमाई का एक हिस्सा खर्च न करके भविष्य के लिए अलग रखना है।</li>
        <li><strong>बचत क्यों जरूरी है?</strong>
          <ul>
            <li>आपातकालीन स्थिति में मदद के लिए</li>
            <li>बड़े लक्ष्यों को पाने के लिए (घर खरीदना, बच्चों की शिक्षा)</li>
            <li>आर्थिक सुरक्षा के लिए</li>
          </ul>
        </li>
        <li><strong>कैसे बचत करें?</strong>
          <ul>
            <li><strong>50-30-20 नियम अपनाएँ:</strong>
              <ul>
                <li>50% ज़रूरी खर्चों के लिए</li>
                <li>30% इच्छाओं के लिए</li>
                <li>20% बचत के लिए</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
      <h3 class="mt-8">🌱 मुख्य सीख:</h3>
      <p>बचत ऐसे है जैसे भविष्य के लिए कुछ आम बचा कर रखना! अपना सारा पैसा खर्च न करें – कुछ अलग रखें ताकि आपके पास आर्थिक सुरक्षा और विकास के अवसर हों।</p>
    `,
    gujarati: `
      <h2>બચતની મૂળભૂત વાતો – એક સરળ ઉદાહરણ સાથે સમજાવો</h2>
      
      <p><strong>કલ્પના કરો કે તમારી પાસે એક કેરીનું ઝાડ છે.</strong> જો તમે એકસાથે બધી કેરી ખાઈ નાખો, તો તમારે આગળ માટે કઈ નહિ બચે. પણ જો તમે થોડા સાચવીને રાખો, તો તમે પછી પણ તેનો આનંદ માણી શકો, અન્ય લોકો સાથે વહેંચી શકો અથવા નવું ઝાડ વાવી શકો.</p>
      
      <p><strong>સેવિંગ (Saving) પણ એ જ રીતે કામ કરે છે.</strong> જો તમે આખી કમાણી ખર્ચી નાખો, તો ભવિષ્ય માટે કશું નહિ બચી. પણ જો તમે થોડી બચત કરો, તો તમને મુશ્કેલ સમયમાં મદદ મળશે.</p>
      
      <hr/>
      
      <h3>3️⃣ ગુજરાતી (Gujarati) માં સમજાવો</h3>
      <ul>
        <li><strong>સેવિંગ એટલે શું?</strong> આવકનો એક ભાગ ખર્ચ કર્યા વિના ભવિષ્ય માટે બચાવી રાખવો.</li>
        <li><strong>સેવિંગ શા માટે જરૂરી છે?</strong>
          <ul>
            <li>ત્વરિત જરૂરિયાત માટે</li>
            <li>મોટા લક્ષ્યો માટે (ઘર ખરીદવું, ભણતર)</li>
            <li>નાણાકીય સુરક્ષા માટે</li>
          </ul>
        </li>
        <li><strong>કેમ બચત કરવી?</strong>
          <ul>
            <li><strong>50-30-20 નિયમ અજમાવો:</strong>
              <ul>
                <li>50% જરૂરી ખર્ચ માટે</li>
                <li>30% ઇચ્છાઓ માટે</li>
                <li>20% બચત માટે</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
      <h3 class="mt-8">🌱 મુખ્ય શીખ:</h3>
      <p>બચત એટલે ભવિષ્ય માટે કેટલીક કેરીઓ બચાવવા જેવું! તમારા બધા પૈસા ખર્ચ ન કરો – થોડા બાજુએ રાખો જેથી તમારી પાસે નાણાકીય સુરક્ષા અને વિકાસની તકો હોય.</p>
    `,
    marathi: `
      <h2>बचतीचे मूलभूत – एक सोप्या उदाहरणासह समजावून घ्या</h2>
      
      <p><strong>कल्पना करा की तुमच्या अंगणात आंब्याचे झाड आहे.</strong> जर तुम्ही सगळे आंबे एकदम खाल्ले, तर पुढच्या वेळी काहीच उरणार नाही. पण जर तुम्ही काही आंबे साठवून ठेवले, तर ते पुढेही खाता येतील, वाटता येतील, किंवा नवीन झाड लावता येईल.</p>
      
      <p><strong>बचत (Saving) हेसुद्धा तसंच आहे.</strong> जर तुम्ही पूर्ण पगार खर्च केला, तर भविष्यासाठी काहीच उरणार नाही. पण जर तुम्ही काही भाग वाचवला, तर अडचणीच्या वेळी उपयोगी पडेल.</p>
      
      <hr/>
      
      <h3>4️⃣ मराठी (Marathi) मध्ये समजून घ्या</h3>
      <ul>
        <li><strong>बचत म्हणजे काय?</strong> उत्पन्नातील काही भाग खर्च न करता भविष्यासाठी ठेवणे.</li>
        <li><strong>बचत का महत्त्वाची आहे?</strong>
          <ul>
            <li>आपत्कालीन परिस्थितीत मदतीसाठी</li>
            <li>मोठे उद्दिष्ट साध्य करण्यासाठी (घर, शिक्षण)</li>
            <li>आर्थिक स्थिरतेसाठी</li>
          </ul>
        </li>
        <li><strong>कशी बचत करावी?</strong>
          <ul>
            <li><strong>50-30-20 नियम वापरा:</strong>
              <ul>
                <li>50% आवश्यक खर्च</li>
                <li>30% इच्छित गोष्टी</li>
                <li>20% बचत</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
      <h3 class="mt-8">🌱 महत्त्वाचा संदेश:</h3>
      <p>बचत म्हणजे भविष्यासाठी काही आंबे साठवून ठेवण्यासारखे! तुमचे सर्व पैसे खर्च करू नका – काही राखून ठेवा जेणेकरून तुम्हाला आर्थिक सुरक्षा आणि वाढीच्या संधी मिळतील.</p>
    `,
  },
};
