// i18n Translations
const translations = {
    "nav_home": { en: "Home", ur: "ہوم" },
    "nav_services": { en: "Services", ur: "خدمات" },
    "nav_about": { en: "About Us", ur: "ہمارے بارے میں" },
    "nav_contact": { en: "Contact", ur: "رابطہ کریں" },
    "btn_book": { en: "Book Consultation", ur: "مشاورت بک کریں" },
    "hero_tagline": { en: "Comprehensive legal support", ur: "جامع قانونی معاونت" },
    "hero_title": { en: "The Guarantor of Your Success", ur: "آپ کی کامیابی کا ضامن" },
    "btn_explore": { en: "Explore Services", ur: "خدمات دریافت کریں" },
    "btn_get_in_touch": { en: "Get in Touch →", ur: "رابطہ کریں ←" },
    "stat_cases": { en: "Companies in service", ur: "زیرِ خدمت کمپنیاں" },
    "stat_years": { en: "Received licenses", ur: "حاصل کردہ لائسنس" },
    "stat_lawyers": { en: "Professional lawyers", ur: "پیشہ ور وکلاء" },
    "free_title": { en: "Free Services", ur: "مفت خدمات" },
    "free_subtitle": { en: "Complimentary Offerings", ur: "مفت پیشکشیں" },
    "fs_btn": { en: "Get Free Advice", ur: "مفت مشورہ حاصل کریں" },
    "fs1_title": { en: "Initial Business & Legal Consultation", ur: "ابتدائی کاروباری اور قانونی مشاورت" },
    "fs1_desc": { en: "Free guidance and strategic planning on how to legally register and structure your new startup or business in Pakistan.", ur: "پاکستان میں اپنے نئے اسٹارٹ اپ یا کاروبار کو قانونی طور پر رجسٹر اور منظم کرنے کے لیے مفت رہنمائی۔" },
    "fs2_title": { en: "FBR Tax Filer Status Verification", ur: "FBR ٹیکس فائلر اسٹیٹس کی تصدیق" },
    "fs2_desc": { en: "Instant online check and confirmation of Active Taxpayer List (ATL) status for individuals or corporate entities.", ur: "افراد یا کارپوریٹ اداروں کے لیے ایکٹو ٹیکس پیئر لسٹ (ATL) اسٹیٹس کی فوری آن لائن تصدیق۔" },
    "fs3_title": { en: "Tax Document Vetting & Review", ur: "ٹیکس دستاویزات کی جانچ اور جائزہ" },
    "fs3_desc": { en: "Basic inspection of your existing legal or tax documents to detect missing compliance requirements before filing.", ur: "فائلنگ سے پہلے کسی بھی قسم کی قانونی تعمیل کی کمی کو جانچنے کے لیے آپ کے موجودہ ٹیکس دستاویزات کا بنیادی معائنہ۔" },
    "fs4_title": { en: "Name Availability Check", ur: "نام کی دستیابی چیک" },
    "fs4_desc": { en: "Free initial screening to check if your desired business or company name is available for registration at SECP and IPO.", ur: "SECP اور IPO میں آپ کے مطلوبہ کاروباری یا کمپنی کے نام کی دستیابی کو جانچنے کے لیے ابتدائی اسکریننگ۔" },
    "services_title": { en: "Our Specialized Services", ur: "ہماری خصوصی خدمات" },
    "services_subtitle": { en: "Core Corporate & Taxation Services", ur: "بنیادی کارپوریٹ اور ٹیکسیشن خدمات" },
    "srv1_title": { en: "FBR Enrollment", ur: "FBR رجسٹریشن اور فائلنگ" },
    "srv1_desc": { en: "Quick registration for National Tax Number (NTN) and Sales Tax Registration Number (STRN) for individuals, AOPs, and companies.", ur: "افراد، ایسوسی ایشنز (AOP) اور کمپنیوں کے لیے این ٹی این (NTN) اور سیلز ٹیکس (STRN) کی فوری رجسٹریشن۔" },
    "srv2_title": { en: "Provincial Revenue Boards (SRB / PRA)", ur: "صوبائی ریونیو بورڈز (SRB / PRA)" },
    "srv2_desc": { en: "Complete registration and compliance with Sindh Revenue Board and Punjab Revenue Authority for service-based industries.", ur: "سروس سیکٹر کے کاروبار کے لیے سندھ ریونیو بورڈ اور پنجاب ریونیو اتھارٹی میں رجسٹریشن اور تعمیل۔" },
    "srv3_title": { en: "Chamber of Commerce Membership", ur: "چیمبر آف کامرس ممبرشپ" },
    "srv3_desc": { en: "Official registration and documentation with the local Chamber of Commerce to authenticate your business trade.", ur: "آپ کے کاروبار کی توثیق کے لیے مقامی چیمبر آف کامرس کے ساتھ باضابطہ رجسٹریشن اور دستاویزات۔" },
    "srv4_title": { en: "SECP Company Registration", ur: "SECP کمپنی رجسٹریشن" },
    "srv4_desc": { en: "End-to-end setup of Private Limited, Single Member, or Public Limited companies with the Securities and Exchange Commission of Pakistan.", ur: "سیکیورٹیز اینڈ ایکسچینج کمیشن (SECP) کے ساتھ پرائیویٹ لمیٹڈ، سنگل ممبر، یا پبلک لمیٹڈ کمپنیوں کی مکمل تشکیل۔" },
    "srv5_title": { en: "PSW & WEBOC Import/Export Setup", ur: "PSW اور WEBOC امپورٹ/ایکسپورٹ" },
    "srv5_desc": { en: "Complete profile creation and digital license acquisition through the Pakistan Single Window for international trade operations.", ur: "بین الاقوامی تجارتی سرگرمیوں کے لیے پاکستان سنگل ونڈو (PSW) کے ذریعے مکمل پروفائل بنانا اور ڈیجیٹل لائسنس کا حصول۔" },
    "srv6_title": { en: "PEC Contractor License", ur: "PEC کنٹریکٹر لائسنس" },
    "srv6_desc": { en: "Specialized registration and license upgrades with the Pakistan Engineering Council for construction firms and engineers.", ur: "تعمیراتی فرموں اور انجینئرز کے لیے پاکستان انجینئرنگ کونسل (PEC) سے خصوصی رجسٹریشن اور لائسنس اپ گریڈ۔" },
    "srv7_title": { en: "IPO Brand Protection", ur: "IPO برانڈ پروٹیکشن" },
    "srv7_desc": { en: "Secure your business identity with quick registration of Logos, Trademarks, Copyrights, and Patents through the Intellectual Property Organization.", ur: "انٹلیکچوئل پراپرٹی آرگنائزیشن (IPO) کے ذریعے لوگو، ٹریڈ مارک، کاپی رائٹ اور پیٹنٹ کی رجسٹریشن سے اپنے برانڈ کو محفوظ کریں۔" },
    "srv8_title": { en: "NGO & Trust Registration", ur: "NGO اور ٹرسٹ رجسٹریشن" },
    "srv8_desc": { en: "Authorized legal drafting and registration for non-profit organizations, welfare societies, and charitable trusts.", ur: "غیر منافع بخش تنظیموں، فلاحی سوسائٹیوں اور خیراتی ٹرسٹ کی قانونی ڈرافٹنگ اور باضابطہ رجسٹریشن۔" },
    "about_title": { en: "Why People Choose Our Company and Not Others?", ur: "لوگ ہماری کمپنی کا انتخاب کیوں کرتے ہیں اور دوسروں کا کیوں نہیں؟" },
    "about_subtitle": { en: "Advocate High Court & Corporate Consultant", ur: "ایڈووکیٹ ہائی کورٹ اور کارپوریٹ کنسلٹنٹ" },
    "about_desc": { en: "At the office of Vertex, we believe in a client-first approach. Our commitment to transparency, speed, and expert advisory has made us a trusted partner for businesses across Pakistan.", ur: "ورٹیکس کے دفتر میں، ہم کلائنٹ کے فرسٹ نقطہ نظر پر یقین رکھتے ہیں۔ شفافیت، رفتار، اور ماہرانہ مشاورتی کے لیے ہماری وابستگی نے ہمیں پورے پاکستان میں کاروباروں کے لیے ایک قابل اعتماد ساتھی بنا دیا ہے۔" },
    "ms1_label": { en: "Successful Clients", ur: "کامیاب کلائنٹس" },
    "ms2_label": { en: "Proven Excellence", ur: "ثابت شدہ کارکردگی" },
    "contact_title": { en: "Book a Consultation", ur: "مشاورت بک کریں" },
    "contact_subtitle": { en: "Take the first step towards securing your corporate future.", ur: "اپنے کارپوریٹ مستقبل کو محفوظ بنانے کی جانب پہلا قدم اٹھائیں۔" },
    "btn_send": { en: "Send Message", ur: "پیغام بھیجیں" },
    "info_office_karachi": { en: "📍 Karachi Office", ur: "📍 کراچی آفس" },
    "info_city_karachi": { en: "Suit No.710, 7th Floor, Insaf Chamber, Light House, Karachi, Sindh", ur: "سوٹ نمبر 710، ساتویں منزل، انصاف چیمبر، لائٹ ہاؤس، کراچی، سندھ" },
    "info_office_tando": { en: "📍 Tando Allahyar Office", ur: "📍 ٹنڈو الہ یار آفس" },
    "info_city_tando": { en: "Near Session Court Tando Allahyar", ur: "سیشن کورٹ کے قریب، ٹنڈو الہ یار" },
    "info_email": { en: "📧 Email", ur: "📧 ای میل" },
    "info_person1": { en: "👨‍⚖️ Noman Ramzan Meo", ur: "👨‍⚖️ نعمان رمضان میو" },
    "info_title1": { en: "Advocate High Court/Founder", ur: "ایڈووکیٹ ہائی کورٹ / بانی" },
    "info_person2": { en: "👨‍💼 M. Imran Meo", ur: "👨‍💼 محمد عمران میو" },
    "info_title2": { en: "Tax Consultant", ur: "ٹیکس کنسلٹنٹ" },
    "footer_copy": { en: "© 2024 Vertex - Advocate & Consultant. All rights reserved.", ur: "© 2024 ورٹیکس - ایڈووکیٹ اور کنسلٹنٹ۔ جملہ حقوق محفوظ ہیں۔" },
    "chat_title": { en: "Legal Assistant ⚖️", ur: "قانونی معاون ⚖️" },
    "chat_welcome": { en: "Hello! I am your legal assistant. How can I help you today with Pakistani law or corporate matters? (You can ask in English or Urdu)", ur: "ہیلو! میں آپ کا قانونی معاون ہوں۔ میں آج پاکستانی قانون یا کارپوریٹ امور میں آپ کی کیا مدد کر سکتا ہوں؟" },
    "chat_send": { en: "Send", ur: "بھیجیں" }
};

let currentLang = 'en';

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').innerText = currentLang === 'en' ? 'اردو' : 'English';
    
    // Update placeholders manually
    document.getElementById('form_name').placeholder = currentLang === 'ur' ? 'آپ کا نام' : 'Your Name';
    document.getElementById('form_email').placeholder = currentLang === 'ur' ? 'ای میل ایڈریس' : 'Email Address';
    document.getElementById('form_subject').placeholder = currentLang === 'ur' ? 'موضوع' : 'Subject';
    document.getElementById('form_msg').placeholder = currentLang === 'ur' ? 'ہم آپ کی کیا مدد کر سکتے ہیں؟' : 'How can we help you?';
    document.getElementById('chatbotInput').placeholder = currentLang === 'ur' ? 'اپنا سوال لکھیں...' : 'Type your question...';

    // Explicitly update Chatbot Header and Initial Greeting
    const chatTitle = document.querySelector('[data-i18n="chat_title"]');
    if (chatTitle && translations['chat_title']) {
        chatTitle.innerText = translations['chat_title'][currentLang];
    }
    const chatWelcome = document.querySelector('[data-i18n="chat_welcome"]');
    if (chatWelcome && translations['chat_welcome']) {
        chatWelcome.innerText = translations['chat_welcome'][currentLang];
    }

    // Update i18n elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[key] && translations[key][currentLang]) {
            elem.innerText = translations[key][currentLang];
        }
    });

    // Update dynamically generated chat history messages seamlessly without mixed-language states
    document.querySelectorAll('[data-chat-en]').forEach(elem => {
        elem.innerText = currentLang === 'ur' ? elem.getAttribute('data-chat-ur') : elem.getAttribute('data-chat-en');
    });
});

// Chatbot Logic
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWrapper = document.getElementById('chatbotWrapper');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

if (chatbotToggle && chatbotWrapper && chatbotClose) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWrapper.classList.add('active');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWrapper.classList.remove('active');
    });
}

// Simple Keyword-Based Legal Chatbot Logic
const botResponses = [
    {
        keywords: ['fbr', 'tax', 'income tax', 'ٹیکس', 'ایف بی آر'],
        en: "For FBR and taxation matters, we provide complete filing, NTN registration, and tax planning services. According to Pakistani law, every citizen earning above a certain threshold must file taxes.",
        ur: "ایف بی آر اور ٹیکس کے معاملات کے لیے، ہم مکمل فائلنگ، این ٹی این رجسٹریشن، اور ٹیکس پلاننگ کی خدمات فراہم کرتے ہیں۔ پاکستانی قانون کے مطابق، ایک خاص حد سے زیادہ کمانے والے ہر شہری کو ٹیکس فائل کرنا ضروری ہے۔"
    },
    {
        keywords: ['secp', 'company', 'register', 'کمپنی', 'رجسٹریشن'],
        en: "To register a company with SECP, you need to reserve a name, draft the Memorandum and Articles of Association, and submit the incorporation forms. We can handle this entire process for you.",
        ur: "ایس ای سی پی (SECP) کے ساتھ کمپنی رجسٹر کرنے کے لیے، آپ کو نام محفوظ کرنا ہوگا، اور ضروری دستاویزات جمع کرانی ہوں گی۔ ہم آپ کے لیے یہ سارا عمل مکمل کر سکتے ہیں۔"
    },
    {
        keywords: ['srb', 'sindh', 'provincial', 'سندھ'],
        en: "Sindh Revenue Board (SRB) handles sales tax on services in Sindh. Businesses providing services must register with SRB and file monthly returns.",
        ur: "سندھ ریونیو بورڈ (SRB) سندھ میں خدمات پر سیلز ٹیکس کا انتظام کرتا ہے۔ خدمات فراہم کرنے والے کاروباری اداروں کو SRB کے ساتھ رجسٹر ہونا اور ماہانہ ریٹرن فائل کرنا ضروری ہے۔"
    },
    {
        keywords: ['trademark', 'copyright', 'ip', 'ٹریڈ مارک', 'کاپی رائٹ'],
        en: "Intellectual Property Office (IPO) in Pakistan registers trademarks and copyrights to protect your brand identity and creative work. The process takes several months.",
        ur: "پاکستان میں انٹلیکچوئل پراپرٹی آفس (IPO) آپ کے برانڈ کی شناخت اور تخلیقی کام کی حفاظت کے لیے ٹریڈ مارک اور کاپی رائٹ رجسٹر کرتا ہے۔"
    },
    {
        keywords: ['divorce', 'marriage', 'family', 'khula', 'talaq', 'طلاق', 'شادی', 'خاندانی', 'خلع'],
        en: "Family law in Pakistan covers marriage, divorce (talaq/khula), child custody, and maintenance. The process for Khula involves filing a suit in the family court. We advise consulting our lawyers for personalized guidance.",
        ur: "پاکستان میں خاندانی قانون شادی، طلاق (خلع)، بچوں کی تحویل اور نفقہ کا احاطہ کرتا ہے۔ خلع کے عمل کے لیے فیملی کورٹ میں مقدمہ دائر کرنا ہوتا ہے۔ ہم تجویز کرتے ہیں کہ تفصیلی رہنمائی کے لیے ہمارے وکلاء سے مشورہ کریں۔"
    },
    {
        keywords: ['property', 'land', 'real estate', 'زمین', 'جائیداد', 'پراپرٹی'],
        en: "Property transfer in Pakistan requires a valid title, payment of stamp duties and taxes, and registration with the sub-registrar. We provide legal vetting of property documents.",
        ur: "پاکستان میں جائیداد کی منتقلی کے لیے درست ٹائٹل، اسٹامپ ڈیوٹی اور ٹیکس کی ادائیگی ضروری ہے۔ ہم جائیداد کی دستاویزات کی قانونی جانچ پڑتال فراہم کرتے ہیں۔"
    },
    {
        keywords: ['fee', 'cost', 'price', 'فیس', 'قیمت', 'خرچہ'],
        en: "Our consultation and service fees depend on the complexity of your case. Please book a consultation using the form below for a quote.",
        ur: "ہماری مشاورتی اور سروس کی فیس آپ کے کیس کی نوعیت پر منحصر ہے۔ براہ کرم قیمت کے لیے فارم استعمال کر کے مشاورت بک کریں۔"
    },
    {
        keywords: ['hello', 'hi', 'salam', 'السلام علیکم', 'ہیلو'],
        en: "Hello! Welcome to Vertex Law. How can I assist you with your legal needs today?",
        ur: "السلام علیکم! ورٹیکس لاء میں خوش آمدید۔ آج میں آپ کی قانونی ضروریات میں کیسے مدد کر سکتا ہوں؟"
    }
];

function getBotResponse(userText) {
    userText = userText.toLowerCase();
    
    for (let rule of botResponses) {
        if (rule.keywords.some(kw => userText.includes(kw))) {
            return { en: rule.en, ur: rule.ur };
        }
    }
    
    // Default response
    return {
        en: "I couldn't quite understand that. However, our expert lawyers can guide you through any legal issue in Pakistan. Please use the 'Book Consultation' form for detailed advice.",
        ur: "میں سمجھ نہیں پایا۔ تاہم، ہمارے ماہر وکلاء آپ کے کسی بھی قانونی مسئلے میں رہنمائی کر سکتے ہیں۔ براہ کرم مزید تفصیلات کے لیے 'مشاورت بک کریں' کا آپشن استعمال کریں۔"
    };
}

function addMessage(text, isUser = false, enText = null, urText = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser ? 'user-msg' : 'bot-msg';
    
    const span = document.createElement('span');
    span.innerText = text;
    
    if (!isUser && enText && urText) {
        span.setAttribute('data-chat-en', enText);
        span.setAttribute('data-chat-ur', urText);
    }
    
    msgDiv.appendChild(span);
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

if (chatbotSend && chatbotInput) {
    chatbotSend.addEventListener('click', () => {
        const text = chatbotInput.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        chatbotInput.value = '';
        
        // Simulate thinking delay
        setTimeout(() => {
            const replyObj = getBotResponse(text);
            const activeText = currentLang === 'ur' ? replyObj.ur : replyObj.en;
            addMessage(activeText, false, replyObj.en, replyObj.ur);
        }, 600);
    });

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatbotSend.click();
        }
    });
}

// Contact Form Handler via Local Secure PHP Backend (AJAX/Fetch)
const contactForm = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response-msg');

if (contactForm && responseMsg) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        // Reset message container
        responseMsg.style.display = 'none';
        responseMsg.className = 'form-response-msg';
        responseMsg.innerText = '';
        
        // Show loading state
        btn.innerText = currentLang === 'ur' ? 'بھیجا جا رہا ہے...' : 'Sending...';
        btn.disabled = true;
        
        const formData = new FormData(contactForm);
        
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if(data.status === 'success') {
                responseMsg.classList.add('success');
                responseMsg.innerText = currentLang === 'ur' ? data.message_ur : data.message;
                contactForm.reset();
            } else {
                responseMsg.classList.add('error');
                responseMsg.innerText = currentLang === 'ur' ? (data.message_ur || 'کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔') : (data.message || 'Something went wrong. Please try again.');
            }
            btn.innerText = originalText;
            btn.disabled = false;
        })
        .catch(error => {
            responseMsg.classList.add('error');
            responseMsg.innerText = currentLang === 'ur' ? 'نیٹ ورک کا مسئلہ۔ براہ کرم دوبارہ کوشش کریں۔' : 'Network error. Please try again.';
            btn.innerText = originalText;
            btn.disabled = false;
        });
    });
}

// Mobile Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a, .nav-cta a, .nav-cta button').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}
