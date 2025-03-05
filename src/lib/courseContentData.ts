
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
  'public-provident-fund': {
    english: `
      <h2>Public Provident Fund (PPF) – Explained with a Simple Analogy</h2>
      
      <p><strong>Analogy:</strong> Imagine a garden where you plant a tree (your savings). Every year, you water it (add money), and over time, the tree grows taller and stronger, producing more fruits (interest). The Public Provident Fund (PPF) works the same way. You plant your savings, and over the years, the government waters it by adding interest. When the tree (your PPF) matures after 15 years, you can enjoy all the fruits it has produced (your savings + interest).</p>
      
      <hr/>
      
      <h3>1️⃣ English Explanation</h3>
      <h4>What is PPF?</h4>
      <p>The Public Provident Fund (PPF) is a government-backed savings scheme in India that helps you save money for the long term and grow it with a fixed interest rate.</p>
      
      <h4>How PPF Works:</h4>
      <ul>
        <li>You deposit money into a PPF account at a post office or bank.</li>
        <li>The government gives you interest on this amount, and the interest is tax-free.</li>
        <li>Your savings grow over time with interest, and you cannot withdraw it for 15 years (except under certain conditions).</li>
      </ul>
      
      <h4>Benefits of PPF:</h4>
      <ul>
        <li><strong>Tax Benefits:</strong> The money you invest is tax-deductible under Section 80C of the Income Tax Act.</li>
        <li><strong>Safe Investment:</strong> The government guarantees the returns, so it's a risk-free investment.</li>
        <li><strong>Compound Interest:</strong> The interest you earn is compounded annually, meaning you earn interest on both your initial deposit and the interest you've already accumulated.</li>
      </ul>
      
      <h4>How Much to Invest?</h4>
      <ul>
        <li>Minimum: ₹500</li>
        <li>Maximum: ₹1.5 lakh per year</li>
      </ul>
      
      <h4>Maturity Period:</h4>
      <ul>
        <li>15 years, but you can extend it in blocks of 5 years after the initial period.</li>
      </ul>
      
      <h3 class="mt-8">🌱 Key Takeaway:</h3>
      <p>PPF is like planting a tree that grows over time. The government waters it by adding tax-free interest, and after 15 years, you can enjoy the fruits of your savings. It's a safe, government-backed investment that provides long-term growth.</p>
    `,
    hindi: `
      <h2>लोक सामान्य निधि (PPF) – एक सरल उदाहरण के साथ समझें</h2>
      
      <p><strong>कल्पना करें कि आपके पास एक बगीचा है, जहाँ आप एक पेड़ लगाते हैं (आपकी बचत)।</strong> हर साल आप उस पेड़ को पानी देते हैं (पैसा जमा करते हैं), और समय के साथ वह पेड़ और मजबूत होता जाता है, फल (ब्याज) देने लगता है। <strong>लोक सामान्य निधि (PPF) भी इसी तरह काम करती है।</strong> आप अपनी बचत जमा करते हैं, और सरकार उस पर ब्याज देती है। जब पेड़ (आपका PPF) 15 साल में पककर तैयार हो जाता है, तो आप सारे फल (बचत + ब्याज) ले सकते हैं।</p>
      
      <hr/>
      
      <h3>2️⃣ हिंदी (Hindi) में समझें</h3>
      
      <h4>PPF क्या है?</h4>
      <p>यह एक सरकारी बचत योजना है, जो आपको लंबी अवधि के लिए पैसा बचाने और उस पर ब्याज कमाने में मदद करती है।</p>
      
      <h4>PPF कैसे काम करता है?</h4>
      <ul>
        <li>आप पोस्ट ऑफिस या बैंक में PPF खाता खोलते हैं।</li>
        <li>सरकार आपके पैसे पर ब्याज देती है, और यह ब्याज कर-मुक्त होता है।</li>
        <li>आपका पैसा बढ़ता है और 15 साल तक आप इसे निकाल नहीं सकते (कुछ शर्तों के तहत निकासी हो सकती है)।</li>
      </ul>
      
      <h4>PPF के फायदे:</h4>
      <ul>
        <li><strong>कर लाभ:</strong> आप जितना पैसा निवेश करते हैं, उस पर आपको आयकर में छूट मिलती है।</li>
        <li><strong>सुरक्षित निवेश:</strong> सरकार इस पर गारंटी देती है, जिससे यह एक जोखिम-मुक्त निवेश है।</li>
        <li><strong>चक्रवृद्धि ब्याज:</strong> आपको ब्याज हर साल मिलती है, जिसका मतलब है कि आप केवल अपनी जमा पूंजी पर नहीं, बल्कि पहले से जमा ब्याज पर भी ब्याज कमाते हैं।</li>
      </ul>
      
      <h4>निवेश की सीमा:</h4>
      <ul>
        <li>न्यूनतम: ₹500</li>
        <li>अधिकतम: ₹1.5 लाख प्रति वर्ष</li>
      </ul>
      
      <h4>परिपक्वता अवधि:</h4>
      <ul>
        <li>15 वर्ष, लेकिन इसके बाद आप इसे 5 वर्षों के ब्लॉक्स में बढ़ा सकते हैं।</li>
      </ul>
      
      <h3 class="mt-8">🌱 मुख्य सीख:</h3>
      <p>PPF एक ऐसे पेड़ के रोपण की तरह है जो समय के साथ बढ़ता है। सरकार कर-मुक्त ब्याज जोड़कर इसे पानी देती है, और 15 साल बाद, आप अपनी बचत के फलों का आनंद ले सकते हैं। यह एक सुरक्षित, सरकारी गारंटी वाला निवेश है जो दीर्घकालिक विकास प्रदान करता है।</p>
    `,
    gujarati: `
      <h2>પબ્લિક પ્રોવિડન્ટ ફંડ (PPF) – એક સરળ ઉદાહરણ સાથે સમજાવો</h2>
      
      <p><strong>કલ્પના કરો કે તમારી પાસે એક બગીચો છે, જ્યાં તમે એક ઝાડ નમાવ છો (તમારી બચત).</strong> દરેક વર્ષ તમે તે ઝાડને પાણી આપો છો (પૈસા જમા કરો છો), અને સમય જતાં તે ઝાડ વધુ મજબૂત અને ઊંચું થાય છે, ફળ (બ્યાજ) આપે છે। <strong>PPF પણ એ રીતે કાર્ય કરે છે.</strong> તમે તમારી બચત સંગ્રહો છો, અને સરકાર તેના પર બ્યાજ આપે છે। 15 વર્ષ પછી જ્યારે તે ઝાડ પકડી જાય છે (તમારો PPF), તમે બધા ફળો (તમારી બચત + બ્યાજ) મેળવી શકો છો।</p>
      
      <hr/>
      
      <h3>3️⃣ ગુજરાતી (Gujarati) માં સમજાવો</h3>
      
      <h4>PPF શું છે?</h4>
      <p>પબ્લિક પ્રોવિડન્ટ ફંડ (PPF) એ ભારત સરકાર દ્વારા પોષણ કરવામાં આવતી એક લાંબી અવધિની બચત યોજના છે, જે તમને સુરક્ષિત અને મફત બ્યાજ આપે છે।</p>
      
      <h4>PPF કેવી રીતે કાર્ય કરે છે?</h4>
      <ul>
        <li>તમે પોસ્ટ ઓફિસ અથવા બેંકમાં PPF ખાતું ખોલો છો।</li>
        <li>સરકાર તમારા પૈસા પર બ્યાજ આપે છે, અને આ બ્યાજ ટેક્સ ફ્રી હોય છે।</li>
        <li>તમારી બચત સમય સાથે વધે છે, પરંતુ 15 વર્ષ સુધી તે નિકાળી શકતા નથી (કોણકેટલાં નિયમો હેઠળ બહાર કાઢી શકાય છે)।</li>
      </ul>
      
      <h4>PPFના ફાયદા:</h4>
      <ul>
        <li><strong>ટેક્સ ફાયદો:</strong> તમે જે રકમ નમાવશો, તે 80C હેઠળ ટેક્સ ડિસ્કાઉન્ટ આપે છે।</li>
        <li><strong>સુરક્ષિત રોકાણ:</strong> આ પર સરકારનો ગેરંટી છે, તેથી એનો કોઈ જોખમ નથી।</li>
        <li><strong>કંપની બ્યાજ:</strong> તમે બ્યાજ પર બ્યાજ કમાવ છો (હવે બ્યાજ પર પણ બ્યાજ લાગે છે!)</li>
      </ul>
      
      <h4>કેટલા પૈસા રોકાય?</h4>
      <ul>
        <li>મિનિમમ: ₹500</li>
        <li>મેક્સિમમ: ₹1.5 લાખ વાર્ષિક</li>
      </ul>
      
      <h4>પ્રાપ્તિ અવધિ:</h4>
      <ul>
        <li>15 વર્ષ, અને આ પછી તમે તેને 5 વર્ષના બ્લોક્સમાં વિસ્તારી શકો છો।</li>
      </ul>
      
      <h3 class="mt-8">🌱 મુખ્ય શીખ:</h3>
      <p>PPF એ એક ઝાડ વાવવા જેવું છે જે સમય સાથે વધે છે. સરકાર ટેક્સ-ફ્રી વ્યાજ ઉમેરીને તેને પાણી આપે છે, અને 15 વર્ષ પછી, તમે તમારી બચતના ફળોનો આનંદ માણી શકો છો. તે એક સુરક્ષિત, સરકાર સમર્થિત રોકાણ છે જે લાંબા ગાળાની વૃદ્ધિ પ્રદાન કરે છે.</p>
    `,
    marathi: `
      <h2>पब्लिक प्रोविडंट फंड (PPF) – एक सोप्या उदाहरणासह समजावून घ्या</h2>
      
      <p><strong>कल्पना करा की तुमच्याकडे एक बाग आहे, जिथे तुम्ही एक झाड लावता (तुमची बचत).</strong> प्रत्येक वर्षी तुम्ही त्या झाडाला पाणी देता (पैसा जमा करता), आणि वेळोवेळी ते झाड अधिक मजबूत आणि मोठे होऊ लागते, फळं (ब्याज) देऊ लागते। <strong>PPF देखील तसंच काम करतं.</strong> तुम्ही तुमची बचत जमा करता, आणि सरकार त्यावर ब्याज देते. 15 वर्षांनंतर, जेव्हा झाड (तुमचं PPF) परिपक्व होतं, तुम्ही सर्व फळं (तुमची बचत + ब्याज) घेऊ शकता।</p>
      
      <hr/>
      
      <h3>4️⃣ मराठी (Marathi) मध्ये समजून घ्या</h3>
      
      <h4>PPF काय आहे?</h4>
      <p>पब्लिक प्रोविडंट फंड (PPF) ही एक सरकारी बचत योजना आहे, जी तुम्हाला दीर्घकालीन बचत करण्यास आणि त्यावर निश्चित ब्याज मिळविण्यास मदत करते।</p>
      
      <h4>PPF कसे कार्य करते?</h4>
      <ul>
        <li>तुम्ही पोस्ट ऑफिस किंवा बँकेत PPF खाती उघडता।</li>
        <li>सरकार तुमच्या पैशावर ब्याज देते, आणि हे ब्याज कर-मुक्त असते।</li>
        <li>तुमची बचत वेळोवेळी वाढते, पण तुम्ही 15 वर्षे ती काढू शकत नाही (काही अटींच्या अधीन काढता येईल)।</li>
      </ul>
      
      <h4>PPF चे फायदे:</h4>
      <ul>
        <li><strong>कर लाभ:</strong> तुम्ही ज्या रकमेची गुंतवणूक करता, त्यावर तुम्हाला आयकरात सूट मिळते।</li>
        <li><strong>सुरक्षित गुंतवणूक:</strong> सरकार या गुंतवणुकीवर हमी देते, म्हणून यामध्ये कोणताही धोका नाही।</li>
        <li><strong>चक्रवाढ व्याज:</strong> तुम्हाला वर्षांदर वर्षे व्याज मिळते, ज्यावर तुमचं व्याजही अधिक होतं।</li>
      </ul>
      
      <h4>किती पैसे गुंतवता येतात?</h4>
      <ul>
        <li>किमान: ₹500</li>
        <li>जास्तीत जास्त: ₹1.5 लाख प्रतिवर्षी</li>
      </ul>
      
      <h4>परिपक्वता कालावधी:</h4>
      <ul>
        <li>15 वर्षे, पण त्यानंतर तुम्ही ते 5 वर्षांच्या ब्लॉक्समध्ये वाढवू शकता।</li>
      </ul>
      
      <h3 class="mt-8">🌱 महत्त्वाचा संदेश:</h3>
      <p>PPF एक झाड लावण्यासारखं आहे जे वेळोवेळी वाढतं. सरकार कर-मुक्त व्याज देऊन त्याला पाणी देतं, आणि 15 वर्षांनंतर, तुम्ही तुमच्या बचतीच्या फळांचा आनंद घेऊ शकता. हे एक सुरक्षित, सरकारी हमी असलेली गुंतवणूक आहे जी दीर्घकालीन वाढ प्रदान करते.</p>
    `,
  },
};
