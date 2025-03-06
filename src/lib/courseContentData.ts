
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
  'stock-market-basics': {
    english: `
      <h2>Stock Market Basics Explained</h2>
      
      <p>The <strong>stock market</strong> is a place where people buy and sell shares of companies.</p>
      <ul>
        <li>When you buy a <strong>stock</strong>, you own a small part of that company.</li>
        <li>The price of a stock changes based on <strong>demand & supply, company performance, and market conditions</strong>.</li>
        <li>You need a <strong>Demat & Trading Account</strong> to start investing.</li>
      </ul>
      
      <hr/>
      
      <h3>1️⃣ Types of Markets</h3>
      <ul>
        <li><strong>Primary Market</strong> – New shares are sold by companies (IPO).</li>
        <li><strong>Secondary Market</strong> – Shares are bought & sold among investors.</li>
      </ul>
      
      <h3>2️⃣ Types of Stocks</h3>
      <ul>
        <li><strong>Large-Cap</strong> – Big, stable companies (TCS, Reliance).</li>
        <li><strong>Mid-Cap</strong> – Medium-sized companies (MRF, Tata Power).</li>
        <li><strong>Small-Cap</strong> – Small, risky companies with high growth potential.</li>
      </ul>
      
      <h3>3️⃣ Trading Strategies</h3>
      <ul>
        <li><strong>Long-Term Investing</strong> – Buy and hold for years.</li>
        <li><strong>Swing Trading</strong> – Buy and sell in weeks/months.</li>
        <li><strong>Intraday Trading</strong> – Buy and sell within a day.</li>
        <li><strong>Futures & Options</strong> – Advanced trading for experts.</li>
      </ul>
      
      <h3>4️⃣ How Stock Prices Move?</h3>
      <ul>
        <li><strong>High demand = Price increases</strong></li>
        <li><strong>Bad news = Price decreases</strong></li>
        <li><strong>Economic changes affect stock values</strong></li>
      </ul>
      
      <h3>5️⃣ Stock Market in India</h3>
      <ul>
        <li><strong>NSE (National Stock Exchange) – Nifty50</strong></li>
        <li><strong>BSE (Bombay Stock Exchange) – Sensex</strong></li>
      </ul>
      
      <h3>6️⃣ Common Myths</h3>
      <ul>
        <li>❌ <strong>Stock market is gambling</strong> → <strong>Truth:</strong> It is based on research.</li>
        <li>❌ <strong>Only rich people can invest</strong> → <strong>Truth:</strong> You can start with ₹100.</li>
        <li>❌ <strong>It is very risky</strong> → <strong>Truth:</strong> Long-term investment reduces risk.</li>
      </ul>
      
      <h3 class="mt-8">🌱 Key Takeaway:</h3>
      <p>Invest wisely, diversify, and stay patient! 🚀</p>
    `,
    hindi: `
      <h2>स्टॉक मार्केट की बेसिक्स</h2>
      
      <p><strong>स्टॉक मार्केट</strong> वह जगह है जहाँ लोग कंपनियों के शेयर खरीदते और बेचते हैं।</p>
      <ul>
        <li>जब आप <strong>शेयर खरीदते हैं</strong>, तो आप उस कंपनी का एक छोटा हिस्सा मालिक बनते हैं।</li>
        <li>शेयर की कीमत <strong>मांग और आपूर्ति, कंपनी की परफॉर्मेंस, और बाज़ार की स्थिति</strong> पर निर्भर करती है।</li>
        <li>निवेश शुरू करने के लिए आपको एक <strong>डीमैट और ट्रेडिंग अकाउंट</strong> की जरूरत होती है।</li>
      </ul>
      
      <hr/>
      
      <h3>1️⃣ बाज़ार के प्रकार</h3>
      <ul>
        <li><strong>प्राइमरी मार्केट</strong> – कंपनी द्वारा नए शेयर बेचे जाते हैं (IPO)।</li>
        <li><strong>सेकेंडरी मार्केट</strong> – निवेशकों के बीच शेयर खरीदे और बेचे जाते हैं।</li>
      </ul>
      
      <h3>2️⃣ शेयरों के प्रकार</h3>
      <ul>
        <li><strong>लार्ज-कैप</strong> – बड़ी कंपनियाँ (TCS, रिलायंस)।</li>
        <li><strong>मिड-कैप</strong> – मध्यम आकार की कंपनियाँ (MRF, टाटा पावर)।</li>
        <li><strong>स्मॉल-कैप</strong> – छोटी, जोखिम वाली कंपनियाँ।</li>
      </ul>
      
      <h3>3️⃣ ट्रेडिंग स्ट्रेटेजी</h3>
      <ul>
        <li><strong>लॉन्ग-टर्म इन्वेस्टिंग</strong> – सालों तक शेयर होल्ड करें।</li>
        <li><strong>स्विंग ट्रेडिंग</strong> – कुछ हफ्तों या महीनों के लिए।</li>
        <li><strong>इंट्राडे ट्रेडिंग</strong> – एक ही दिन में खरीदो और बेचो।</li>
        <li><strong>फ्यूचर्स और ऑप्शंस</strong> – एडवांस्ड ट्रेडिंग।</li>
      </ul>
      
      <h3>4️⃣ शेयर की कीमतें कैसे बदलती हैं?</h3>
      <ul>
        <li><strong>ज्यादा डिमांड = कीमत बढ़ेगी</strong></li>
        <li><strong>बुरी खबर = कीमत घटेगी</strong></li>
        <li><strong>आर्थिक बदलावों का प्रभाव पड़ता है</strong></li>
      </ul>
      
      <h3>5️⃣ भारत में स्टॉक मार्केट</h3>
      <ul>
        <li><strong>NSE (नेशनल स्टॉक एक्सचेंज) – निफ्टी 50</strong></li>
        <li><strong>BSE (बॉम्बे स्टॉक एक्सचेंज) – सेंसेक्स</strong></li>
      </ul>
      
      <h3>6️⃣ सामान्य गलतफहमियाँ</h3>
      <ul>
        <li>❌ <strong>स्टॉक मार्केट जुआ है</strong> → <strong>सच:</strong> यह रिसर्च पर आधारित है।</li>
        <li>❌ <strong>सिर्फ अमीर लोग निवेश कर सकते हैं</strong> → <strong>सच:</strong> आप ₹100 से भी शुरू कर सकते हैं।</li>
        <li>❌ <strong>यह बहुत जोखिम भरा है</strong> → <strong>सच:</strong> लंबी अवधि का निवेश सुरक्षित होता है।</li>
      </ul>
      
      <h3 class="mt-8">🌱 मुख्य सीख:</h3>
      <p>समझदारी से निवेश करें, विविधता बनाए रखें, और धैर्य रखें! 🚀</p>
    `,
    gujarati: `
      <h2>સ્ટોક માર્કેટનાં મૂળભૂત જાણકારીઓ</h2>
      
      <p><strong>સ્ટોક માર્કેટ</strong> એ એક એવી જગ્યા છે જ્યાં લોકો કંપનીઓના શેર ખરીદે અને વેચે છે.</p>
      <ul>
        <li>જો તમે <strong>શેર ખરીદો</strong>, તો તમે તે કંપનીનો એક નાનો ભાગ માલિક બની જાઓ.</li>
        <li>શેરની કિંમત <strong>મांग અને પુરવઠા, કંપનીનું પ્રદર્શન, અને બજારની પરિસ્થિતિઓ</strong> પર આધાર રાખે છે.</li>
        <li>રોકાણ શરૂ કરવા માટે તમારે <strong>ડીમેટ અને ટ્રેડિંગ એકાઉન્ટ</strong> ની જરૂર પડે.</li>
      </ul>
      
      <hr/>
      
      <h3>1️⃣ બજારના પ્રકાર</h3>
      <ul>
        <li><strong>પ્રાઇમરી માર્કેટ</strong> – કંપનીઓ IPO મારફતે નવા શેર વેચે છે.</li>
        <li><strong>સેકન્ડરી માર્કેટ</strong> – રોકાણકારો એકબીચમાં શેર ખરીદે અને વેચે છે.</li>
      </ul>
      
      <h3>2️⃣ શેરના પ્રકાર</h3>
      <ul>
        <li><strong>લાર્જ-કૅપ</strong> – મોટી, સ્થિર કંપનીઓ (TCS, રિલાયન્સ).</li>
        <li><strong>મિડ-કૅપ</strong> – મધ્યમ કદની કંપનીઓ (MRF, ટાટા પાવર).</li>
        <li><strong>સ્મોલ-કૅપ</strong> – નાની, ઊંચા જોખમવાળી કંપનીઓ.</li>
      </ul>
      
      <h3>3️⃣ ટ્રેડિંગ કૌશલ્યો</h3>
      <ul>
        <li><strong>લાંબા ગાળાનું રોકાણ</strong> – વર્ષો સુધી શેર રાખો.</li>
        <li><strong>સ્વિંગ ટ્રેડિંગ</strong> – હફ્તા/મહિના માટે ખરીદ વેચાણ.</li>
        <li><strong>ઇન્ટ્રાડે ટ્રેડિંગ</strong> – એક જ દિવસે ખરીદ વેચાણ.</li>
        <li><strong>ફ્યુચર્સ અને ઓપ્શન</strong> – અદ્યતન ટ્રેડિંગ.</li>
      </ul>
      
      <h3>4️⃣ શેરની કિંમતો કેમ બદલાય?</h3>
      <ul>
        <li><strong>ઉચ્ચ માંગ = કિંમતો વધશે</strong></li>
        <li><strong>ખરાબ સમાચાર = કિંમતો ઘટશે</strong></li>
        <li><strong>આર્થિક ઘટનાઓનો પ્રભાવ પડે છે</strong></li>
      </ul>
      
      <h3>5️⃣ ભારતનું સ્ટોક માર્કેટ</h3>
      <ul>
        <li><strong>NSE (નેશનલ સ્ટોક એક્સચેન્જ) – નિફ્ટી 50</strong></li>
        <li><strong>BSE (બોમ્બે સ્ટોક એક્સચેન્જ) – સેન્સેક્સ</strong></li>
      </ul>
      
      <h3>6️⃣ સામાન્ય ભૂલભૂલૈયા</h3>
      <ul>
        <li>❌ <strong>સ્ટોક માર્કેટ જુગાર છે</strong> → <strong>સત્ય:</strong> સંશોધન આધારિત છે.</li>
        <li>❌ <strong>ફક્ત અમીરો રોકાણ કરી શકે</strong> → <strong>સત્ય:</strong> ₹100 થી પણ શરૂઆત કરી શકાય.</li>
        <li>❌ <strong>તે ખૂબ જોખમ ભર્યું છે</strong> → <strong>સત્ય:</strong> લાંબા ગાળાના રોકાણ માટે સુરક્ષિત છે.</li>
      </ul>
      
      <h3 class="mt-8">🌱 મુખ્ય શીખ:</h3>
      <p>બુદ્ધિપૂર્વક રોકાણ કરો, વિવિધતા રાખો, અને ધીરજ રાખો! 🚀</p>
    `,
    marathi: `
      <h2>स्टॉक मार्केट मूलभूत माहिती</h2>
      
      <p><strong>स्टॉक मार्केट</strong> म्हणजे कंपन्यांचे शेअर्स खरेदी-विक्री करण्याचे ठिकाण.</p>
      <ul>
        <li>जेव्हा तुम्ही <strong>शेअर खरेदी करता</strong>, तेव्हा तुम्ही त्या कंपनीचा एक लहान हिस्सा मालक होता.</li>
        <li>शेअर्सच्या किंमती <strong>मागणी आणि पुरवठा, कंपनीची कामगिरी, आणि बाजाराच्या स्थितीवर</strong> अवलंबून असतात.</li>
      </ul>
      
      <hr/>
      
      <h3>1️⃣ बाजाराचे प्रकार</h3>
      <ul>
        <li><strong>प्रायमरी मार्केट</strong> – नवीन शेअर्स कंपन्या IPO द्वारे विकतात.</li>
        <li><strong>सेकंडरी मार्केट</strong> – गुंतवणूकदारांमध्ये शेअर्सची खरेदी-विक्री होते.</li>
      </ul>
      
      <h3>2️⃣ शेअर्सचे प्रकार</h3>
      <ul>
        <li><strong>लार्ज-कॅप</strong> – मोठ्या, स्थिर कंपन्या (TCS, रिलायन्स).</li>
        <li><strong>मिड-कॅप</strong> – मध्यम आकाराच्या कंपन्या (MRF, टाटा पॉवर).</li>
        <li><strong>स्मॉल-कॅप</strong> – लहान, जोखीमपूर्ण कंपन्या.</li>
      </ul>
      
      <h3>3️⃣ ट्रेडिंग स्ट्रॅटेजीज</h3>
      <ul>
        <li><strong>दीर्घकालीन गुंतवणूक</strong> – वर्षांपर्यंत शेअर्स ठेवणे.</li>
        <li><strong>स्विंग ट्रेडिंग</strong> – काही आठवडे/महिन्यांसाठी.</li>
        <li><strong>इंट्राडे ट्रेडिंग</strong> – एकाच दिवसात खरेदी-विक्री.</li>
        <li><strong>फ्युचर्स आणि ऑप्शन्स</strong> – प्रगत ट्रेडिंग.</li>
      </ul>
      
      <h3>4️⃣ शेअर्सच्या किंमती कशा बदलतात?</h3>
      <ul>
        <li><strong>जास्त मागणी = किंमती वाढतात</strong></li>
        <li><strong>वाईट बातम्या = किंमती घटतात</strong></li>
        <li><strong>आर्थिक बदलांचा प्रभाव पडतो</strong></li>
      </ul>
      
      <h3>5️⃣ भारतातील स्टॉक मार्केट</h3>
      <ul>
        <li><strong>NSE (नॅशनल स्टॉक एक्स्चेंज) – निफ्टी 50</strong></li>
        <li><strong>BSE (बॉम्बे स्टॉक एक्स्चेंज) – सेन्सेक्स</strong></li>
      </ul>
      
      <h3>6️⃣ चुकीच्या समजुती</h3>
      <ul>
        <li>❌ <strong>स्टॉक मार्केट म्हणजे जुगार</strong> → <strong>सत्य:</strong> अभ्यासावर आधारित आहे.</li>
        <li>❌ <strong>फक्त श्रीमंत लोक गुंतवणूक करू शकतात</strong> → <strong>सत्य:</strong> ₹100 पासून सुरू करू शकता.</li>
        <li>❌ <strong>खूप जोखीम असते</strong> → <strong>सत्य:</strong> दीर्घकालीन गुंतवणूक जोखीम कमी करते.</li>
      </ul>
      
      <h3 class="mt-8">🌱 महत्त्वाचा संदेश:</h3>
      <p>स्मार्ट गुंतवणूक करा आणि संयम ठेवा! 🚀</p>
    `,
  },
  'tax-planning': {
    english: `
      <h2>Tax Planning & Saving Money</h2>
      
      <h3>1️⃣ What is Tax Planning?</h3>
      <p>Tax planning helps reduce tax liability legally by using tax-saving schemes and deductions.</p>
      
      <h3>2️⃣ Types of Taxes in India</h3>
      <p>Income Tax, GST, Capital Gains Tax, Property Tax.</p>
      
      <h3>3️⃣ Tax Slabs (FY 2023-24)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Income Range</th>
              <th class="border border-gray-300 px-4 py-2">Old Regime</th>
              <th class="border border-gray-300 px-4 py-2">New Regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹0 – ₹2.5L</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹2.5L – ₹5L</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹5L – ₹7.5L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">10%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹7.5L – ₹10L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">15%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹10L – ₹12.5L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹12.5L – ₹15L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">25%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹15L+</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ Choose a regime based on your deductions.</p>
      
      <h3>4️⃣ Tax-Saving Investment Options (Section 80C ₹1.5L Limit)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Investment</th>
              <th class="border border-gray-300 px-4 py-2">Lock-in</th>
              <th class="border border-gray-300 px-4 py-2">Returns</th>
              <th class="border border-gray-300 px-4 py-2">Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">PPF</td>
              <td class="border border-gray-300 px-4 py-2">15 yrs</td>
              <td class="border border-gray-300 px-4 py-2">7.1%</td>
              <td class="border border-gray-300 px-4 py-2">Low</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">ELSS</td>
              <td class="border border-gray-300 px-4 py-2">3 yrs</td>
              <td class="border border-gray-300 px-4 py-2">10-15%</td>
              <td class="border border-gray-300 px-4 py-2">High</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">EPF</td>
              <td class="border border-gray-300 px-4 py-2">Till retirement</td>
              <td class="border border-gray-300 px-4 py-2">8.1%</td>
              <td class="border border-gray-300 px-4 py-2">Low</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">NSC</td>
              <td class="border border-gray-300 px-4 py-2">5 yrs</td>
              <td class="border border-gray-300 px-4 py-2">7.7%</td>
              <td class="border border-gray-300 px-4 py-2">Low</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">FD</td>
              <td class="border border-gray-300 px-4 py-2">5 yrs</td>
              <td class="border border-gray-300 px-4 py-2">6-7%</td>
              <td class="border border-gray-300 px-4 py-2">Low</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">NPS</td>
              <td class="border border-gray-300 px-4 py-2">Till retirement</td>
              <td class="border border-gray-300 px-4 py-2">10-12%</td>
              <td class="border border-gray-300 px-4 py-2">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ PPF for safe investment, ELSS for high returns.</p>
      
      <h3>5️⃣ Additional Tax Deductions</h3>
      <ul>
        <li>Section 80D (Health Insurance)</li>
        <li>Section 80E (Education Loan)</li>
        <li>Section 80G (Donations)</li>
      </ul>
      
      <h3>6️⃣ How to Save Money on Taxes?</h3>
      <p>Invest in tax-saving schemes & claim deductions.</p>
      
      <h3>7️⃣ Common Tax-Saving Mistakes</h3>
      <ul>
        <li>❌ Not using 80C fully</li>
        <li>❌ Ignoring HRA benefits</li>
        <li>❌ Last-minute tax planning</li>
      </ul>
      
      <h3 class="mt-8">🌱 Key Takeaway:</h3>
      <p>Plan taxes early to maximize savings!</p>
    `,
    hindi: `
      <h2>कर योजना और पैसा बचाना</h2>
      
      <h3>1️⃣ कर योजना क्या है?</h3>
      <p>कर योजना कानूनी रूप से कर देयता को कम करने में मदद करती है, जिससे बचत और निवेश संभव होता है।</p>
      
      <h3>2️⃣ भारत में करों के प्रकार</h3>
      <p>आयकर, जीएसटी, पूंजीगत लाभ कर, संपत्ति कर।</p>
      
      <h3>3️⃣ कर स्लैब (वित्त वर्ष 2023-24)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">आय सीमा</th>
              <th class="border border-gray-300 px-4 py-2">पुराना कर व्यवस्था</th>
              <th class="border border-gray-300 px-4 py-2">नया कर व्यवस्था</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹0 – ₹2.5L</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹2.5L – ₹5L</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹5L – ₹7.5L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">10%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹7.5L – ₹10L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">15%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹10L – ₹12.5L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹12.5L – ₹15L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">25%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹15L+</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ कटौती के आधार पर कर प्रणाली चुनें।</p>
      
      <h3>4️⃣ कर-बचत निवेश विकल्प (धारा 80C ₹1.5L सीमा)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">निवेश</th>
              <th class="border border-gray-300 px-4 py-2">लॉक-इन</th>
              <th class="border border-gray-300 px-4 py-2">रिटर्न</th>
              <th class="border border-gray-300 px-4 py-2">जोखिम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">PPF</td>
              <td class="border border-gray-300 px-4 py-2">15 वर्ष</td>
              <td class="border border-gray-300 px-4 py-2">7.1%</td>
              <td class="border border-gray-300 px-4 py-2">कम</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">ELSS</td>
              <td class="border border-gray-300 px-4 py-2">3 वर्ष</td>
              <td class="border border-gray-300 px-4 py-2">10-15%</td>
              <td class="border border-gray-300 px-4 py-2">उच्च</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ सुरक्षित निवेश के लिए PPF, उच्च लाभ के लिए ELSS।</p>
      
      <h3>5️⃣ अतिरिक्त कर कटौती</h3>
      <p>धारा 80D (स्वास्थ्य बीमा), 80E (शिक्षा ऋण), 80G (दान)।</p>
      
      <h3>6️⃣ करों पर पैसे कैसे बचाएं?</h3>
      <p>कर-बचत योजनाओं में निवेश करें और कटौती का लाभ लें।</p>
      
      <h3>7️⃣ सामान्य कर-बचत गलतियां</h3>
      <p>80C का पूरा उपयोग नहीं करना, HRA लाभ को नजरअंदाज करना।</p>
      
      <h3 class="mt-8">🌱 मुख्य सीख:</h3>
      <p>कर योजना पहले से करें, बचत बढ़ाएं!</p>
    `,
    gujarati: `
      <h2>કર આયોજન અને નાણાં બચાવવા</h2>
      
      <h3>1️⃣ કર આયોજન શું છે?</h3>
      <p>કર આયોજન કાયદેસર રીતે કર ભરપાઈ ઓછી કરવામાં મદદ કરે છે, જેનાથી બચત અને રોકાણ શક્ય બને છે.</p>
      
      <h3>2️⃣ ભારતમાં કરના પ્રકારો</h3>
      <p>આવકવેરો, જીએસટી, મૂડી લાભ કર, મિલ્કત કર.</p>
      
      <h3>3️⃣ ટેક્સ સ્લેબ્સ (FY 2023-24)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">આવક રેન્જ</th>
              <th class="border border-gray-300 px-4 py-2">જૂની પદ્ધતિ</th>
              <th class="border border-gray-300 px-4 py-2">નવી પદ્ધતિ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹0 – ₹2.5L</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹2.5L – ₹5L</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹5L – ₹7.5L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">10%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹7.5L – ₹10L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">15%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹10L – ₹12.5L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹12.5L – ₹15L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">25%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹15L+</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ કપાતના આધાર પર ટેક્સ રેજીમ પસંદ કરો.</p>
      
      <h3>4️⃣ ટેક્સ-બચત રોકાણ વિકલ્પો (કલમ 80C ₹1.5L મર્યાદા)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">રોકાણ</th>
              <th class="border border-gray-300 px-4 py-2">લોક-ઇન</th>
              <th class="border border-gray-300 px-4 py-2">રિટર્ન</th>
              <th class="border border-gray-300 px-4 py-2">રિસ્ક</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">PPF</td>
              <td class="border border-gray-300 px-4 py-2">15 વર્ષ</td>
              <td class="border border-gray-300 px-4 py-2">7.1%</td>
              <td class="border border-gray-300 px-4 py-2">નીચું</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">ELSS</td>
              <td class="border border-gray-300 px-4 py-2">3 વર્ષ</td>
              <td class="border border-gray-300 px-4 py-2">10-15%</td>
              <td class="border border-gray-300 px-4 py-2">ઊંચુ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ સલામત રોકાણ માટે PPF, વધુ વળતર માટે ELSS.</p>
      
      <h3>5️⃣ વધારાની ટેક્સ કપાતો</h3>
      <p>કલમ 80D (આરોગ્ય વીમો), 80E (અભ્યાસ લોન), 80G (દાન).</p>
      
      <h3>6️⃣ ટેક્સ પર નાણાં કેવી રીતે બચાવવા?</h3>
      <p>ટેક્સ બચાવ યોજનાઓમાં રોકાણ કરો અને કપાતનો લાભ લો.</p>
      
      <h3>7️⃣ સામાન્ય ટેક્સ-બચત ભૂલો</h3>
      <p>80C નો સંપૂર્ણ ઉપયોગ ન કરવો, HRA લાભ અવગણવો.</p>
      
      <h3 class="mt-8">🌱 મુખ્ય શીખ:</h3>
      <p>કર આયોજન વહેલું કરો, વધુ બચત કરો!</p>
    `,
    marathi: `
      <h2>कर नियोजन आणि पैसे वाचवणे</h2>
      
      <h3>1️⃣ कर नियोजन म्हणजे काय?</h3>
      <p>कर नियोजन कर देयता कायदेशीर मार्गाने कमी करण्यास मदत करते, ज्यामुळे बचत आणि गुंतवणूक शक्य होते.</p>
      
      <h3>2️⃣ भारतातील कराचे प्रकार</h3>
      <p>उत्पन्न कर, जीएसटी, भांडवली नफा कर, मालमत्ता कर.</p>
      
      <h3>3️⃣ कर स्लॅब्स (FY 2023-24)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">उत्पन्न श्रेणी</th>
              <th class="border border-gray-300 px-4 py-2">जुनी प्रणाली</th>
              <th class="border border-gray-300 px-4 py-2">नवीन प्रणाली</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹0 – ₹2.5L</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹2.5L – ₹5L</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
              <td class="border border-gray-300 px-4 py-2">5%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹5L – ₹7.5L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">10%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹7.5L – ₹10L</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
              <td class="border border-gray-300 px-4 py-2">15%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹10L – ₹12.5L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹12.5L – ₹15L</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">25%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">₹15L+</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
              <td class="border border-gray-300 px-4 py-2">30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ वजावटीनुसार कर प्रणाली निवडा.</p>
      
      <h3>4️⃣ कर-बचत गुंतवणूक पर्याय (कलम 80C ₹1.5L मर्यादा)</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">गुंतवणूक</th>
              <th class="border border-gray-300 px-4 py-2">लॉक-इन</th>
              <th class="border border-gray-300 px-4 py-2">रिटर्न</th>
              <th class="border border-gray-300 px-4 py-2">रिस्क</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">PPF</td>
              <td class="border border-gray-300 px-4 py-2">15 वर्षे</td>
              <td class="border border-gray-300 px-4 py-2">7.1%</td>
              <td class="border border-gray-300 px-4 py-2">कमी</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">ELSS</td>
              <td class="border border-gray-300 px-4 py-2">3 वर्षे</td>
              <td class="border border-gray-300 px-4 py-2">10-15%</td>
              <td class="border border-gray-300 px-4 py-2">जास्त</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>✅ सुरक्षित गुंतवणुकीसाठी PPF, उच्च परताव्यासाठी ELSS.</p>
      
      <h3>5️⃣ अतिरिक्त कर वजावटी</h3>
      <p>कलम 80D (आरोग्य विमा), 80E (शिक्षण कर्ज), 80G (दान).</p>
      
      <h3>6️⃣ करांवर पैसे कसे वाचवावे?</h3>
      <p>कर बचत योजनांमध्ये गुंतवणूक करा आणि वजावट मिळवा.</p>
      
      <h3>7️⃣ सामान्य कर-बचत चुका</h3>
      <p>80C चा पूर्ण उपयोग न करणे, HRA लाभ दुर्लक्षित करणे.</p>
      
      <h3 class="mt-8">🌱 महत्त्वाचा संदेश:</h3>
      <p>कर नियोजन लवकर करा, जास्त बचत करा!</p>
    `,
  }
};
