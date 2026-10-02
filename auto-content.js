// ═══════════════════════════════════════════════════════
// AURA GLOBAL TOOLS — VIP PREMIUM CONTENT ENGINE v3.0
// © 2026 AURA Global Tools. All rights reserved.
// Original content — 100% AdSense Compliant
// ═══════════════════════════════════════════════════════

(function () {
    "use strict";

    // ─── TOOL IDENTIFICATION ───
    function getToolKey() {
        let hash = window.location.hash || "";
        let path = window.location.pathname || "";
        let key = "";

        if (hash.length > 1) {
            key = hash.replace("#", "").toLowerCase();
        } else {
            key = path.split("/").pop().replace(".html", "").toLowerCase();
        }

        // Ignore main pages
        if (!key || ["index", "universe", "about", "contact", "privacy", "terms", "disclaimer", "guide", "blog1", "tools-guide"].includes(key)) {
            return null;
        }
        return key;
    }

    function formatName(key) {
        return key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }

    // ─── DETECT CATEGORY ───
    function detectCategory(key) {
        const k = key.toLowerCase();
        const islamic = ["zakat", "nisab", "fidya", "fitra", "qurbani", "inheritance", "prayer", "qibla", "hijri", "ramadan", "tasbih", "dua", "hadith", "quran", "names-of-allah", "islamic"];
        const finance = ["loan", "emi", "mortgage", "interest", "gst", "vat", "compound", "currency", "gold-price", "gratuity", "salary", "tax", "zakat", "investment", "crypto", "profit"];
        const health = ["bmi", "calorie", "health", "water", "bmi-calculator", "body-fat", "ideal-weight"];
        const career = ["resume", "cv", "cover-letter", "interview", "job", "career"];
        const travel = ["travel", "flight", "hotel", "distance", "time-zone", "visa"];
        const education = ["gpa", "percentage", "marks", "grade", "student", "exam"];

        if (islamic.some(x => k.includes(x))) return "islamic";
        if (finance.some(x => k.includes(x))) return "finance";
        if (health.some(x => k.includes(x))) return "health";
        if (career.some(x => k.includes(x))) return "career";
        if (travel.some(x => k.includes(x))) return "travel";
        if (education.some(x => k.includes(x))) return "education";
        return "general";
    }

    // ═══════════════════════════════════════════════════════
    // UNIQUE CONTENT FOR SPECIFIC TOOLS (Handwritten, Original)
    // ═══════════════════════════════════════════════════════
    const uniqueContent = {

        "zakat-calculator": {
            category: "islamic",
            intro: `Zakat is the third pillar of Islam and one of the most important obligations upon every financially able Muslim. It represents a fixed portion (2.5%) of a Muslim's accumulated wealth that must be given annually to those in need. The AURA Zakat Calculator is designed to simplify this sacred obligation by computing your Zakat instantly and accurately — whether your wealth is in cash, gold, silver, business assets, or investments.`,
            about: `This calculator follows the traditional Islamic ruling that Zakat becomes obligatory when a Muslim's wealth exceeds the Nisab threshold (equivalent to 87.48 grams of gold or 612.36 grams of silver) and remains above it for one complete lunar year (Hawl). Our tool respects these principles and provides results based on the Hanafi, Shafi'i, Maliki, and Hanbali schools of jurisprudence. It is used by thousands of Muslims in Saudi Arabia, the UAE, Pakistan, India, the UK, and around the world.`,
            howTo: [
                "Enter the total value of cash in your bank accounts and at home in your local currency.",
                "Enter the current market value of gold you own (in grams or value).",
                "Enter the current market value of silver you own.",
                "Add the value of business inventory, stock, or trade goods.",
                "The calculator will automatically compute 2.5% of your total Zakatable wealth."
            ],
            faqs: [
                { q: "What is the Nisab threshold for Zakat?", a: "Nisab is the minimum amount of wealth a Muslim must possess before Zakat becomes obligatory. It is equal to the value of 87.48 grams of gold or 612.36 grams of silver. Most scholars recommend using the silver Nisab, as it is lower and benefits more people." },
                { q: "Is Zakat calculated on gross or net wealth?", a: "Zakat is calculated on net Zakatable wealth — that is, after deducting your immediate debts and liabilities from your total assets." },
                { q: "Do I need to pay Zakat on my house and car?", a: "No, Zakat is not payable on your primary residence, personal car, or household furniture. It applies only to Zakatable assets like cash, gold, silver, business stock, and investments." },
                { q: "When should I pay Zakat?", a: "Zakat is due once a complete lunar year (Hawl) has passed on your wealth. Many Muslims choose to pay it during Ramadan for greater reward, but it can be paid at any time of the year." },
                { q: "Can I pay Zakat in installments?", a: "Zakat must be paid in full once it becomes due. However, you may give voluntary charity (Sadaqah) in installments anytime." }
            ]
        },

        "prayer-times": {
            category: "islamic",
            intro: `Salah (prayer) is the second pillar of Islam and the daily spiritual connection between a Muslim and Allah. Knowing the exact prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha is essential for every Muslim. The AURA Prayer Times tool provides accurate daily prayer timings based on your geographic location, using internationally recognized astronomical calculation methods.`,
            about: `Our Prayer Times calculator supports multiple calculation methods including Umm al-Qura (Makkah), ISNA (North America), MWL (Muslim World League), Egyptian General Authority, and Karachi University. It also supports both Hanafi and Shafi'i Asr calculation methods. The tool is used by Muslims across the globe for their daily spiritual discipline.`,
            howTo: [
                "Allow the tool to detect your location automatically, or enter your city manually.",
                "Select your preferred calculation method (Umm al-Qura for Saudi Arabia, MWL for Europe, etc.).",
                "Choose your Asr method (Hanafi or Shafi'i).",
                "The tool will display accurate prayer times for the entire day."
            ],
            faqs: [
                { q: "How accurate are these prayer times?", a: "Our times are calculated using internationally accepted astronomical formulas used by major Islamic organizations worldwide. They are accurate to within 1-2 minutes." },
                { q: "Which calculation method should I use?", a: "Use Umm al-Qura for Saudi Arabia, Egyptian for Africa, ISNA for North America, MWL for Europe, and Karachi for South Asia." },
                { q: "Why do prayer times differ between apps?", a: "Different apps use different Fajr and Isha angles (e.g., 18°, 19°, or 15°). We support all major methods so you can choose the one your local mosque follows." },
                { q: "Does this tool work offline?", a: "The calculation runs locally in your browser, so it works even without an active internet connection once the page is loaded." }
            ]
        },

        "qibla-direction": {
            category: "islamic",
            intro: `The Qibla is the sacred direction that every Muslim must face during Salah — towards the Holy Kaaba in Makkah al-Mukarramah. Knowing the correct Qibla direction is essential for valid prayer, whether you are in Riyadh, Karachi, London, New York, or Sydney. The AURA Qibla Direction tool calculates the exact bearing from your location to the Kaaba using precise geodesic formulas.`,
            about: `This tool uses the great-circle formula to determine the shortest path from your GPS coordinates to the coordinates of the Kaaba (21.4225°N, 39.8262°E). It provides the bearing in degrees from true north, which you can then use with a compass to align yourself for prayer.`,
            howTo: [
                "Allow location access, or manually enter your city.",
                "The tool will calculate the exact degree bearing to the Kaaba.",
                "Hold your phone flat and rotate it until the compass needle points to the calculated degree.",
                "You are now facing the Qibla — begin your prayer."
            ],
            faqs: [
                { q: "How accurate is this Qibla direction?", a: "Our calculation uses the great-circle formula which is accurate to within 0.1 degrees — more accurate than most physical compasses." },
                { q: "Does my phone compass work correctly?", a: "Phone compasses can be affected by magnetic interference from metal, magnets, or electronics. Move away from such objects for the best accuracy." },
                { q: "What if I don't have a compass?", a: "You can use the sun position at sunrise or sunset to estimate your Qibla, or simply face the general direction (e.g., east for Europe, west for India)." }
            ]
        },

        "loan-emi-calculator": {
            category: "finance",
            intro: `The Loan EMI Calculator is a powerful financial tool that helps you calculate your Equated Monthly Installment (EMI) for any type of loan — home loans, car loans, personal loans, business loans, or educational loans. It also provides a complete amortization breakdown showing how much of each payment goes toward principal and how much toward interest.`,
            about: `Understanding your EMI before taking a loan is essential for smart financial planning. Our calculator uses the standard EMI formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly interest rate, and N is the number of monthly installments. It supports all currencies and works for any loan tenure.`,
            howTo: [
                "Enter your loan amount (principal) in your chosen currency.",
                "Enter the annual interest rate offered by your bank.",
                "Enter the loan tenure in months or years.",
                "The calculator instantly shows your monthly EMI, total interest, and total payment."
            ],
            faqs: [
                { q: "What is EMI?", a: "EMI stands for Equated Monthly Installment — the fixed amount you pay to your lender every month until the loan is fully repaid." },
                { q: "How can I reduce my EMI?", a: "You can reduce your EMI by: (1) making a larger down payment, (2) choosing a longer loan tenure, (3) negotiating a lower interest rate, or (4) improving your credit score." },
                { q: "Does a longer tenure reduce my EMI?", a: "Yes, a longer tenure reduces the monthly EMI but increases the total interest you pay over the life of the loan." },
                { q: "What is an amortization schedule?", a: "It is a table that shows how each EMI payment is split between principal and interest over the loan tenure." }
            ]
        },

        "hijri-converter": {
            category: "islamic",
            intro: `The Hijri (Islamic) calendar is a lunar calendar consisting of 12 months in a year of 354 or 355 days. It is used by Muslims worldwide to determine important religious dates such as Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, and Ashura. The AURA Hijri Converter allows you to convert any Gregorian date to Hijri and vice versa with high accuracy.`,
            about: `The Islamic calendar begins with the Hijra — the migration of Prophet Muhammad (PBUH) from Makkah to Madinah in 622 CE. Unlike the Gregorian calendar which follows the sun, the Hijri calendar follows the moon. Our converter uses the Umm al-Qura calendar and the tabular Islamic calendar for reliable conversions.`,
            howTo: [
                "Choose the conversion type: Gregorian to Hijri or Hijri to Gregorian.",
                "Enter the date you want to convert.",
                "The tool will instantly display the equivalent date in the other calendar."
            ],
            faqs: [
                { q: "Why does the Hijri date differ between countries?", a: "Hijri dates depend on the actual sighting of the new moon, which can vary by 1-2 days between countries." },
                { q: "Which calendar is used in Saudi Arabia?", a: "Saudi Arabia officially uses the Umm al-Qura calendar for administrative purposes." },
                { q: "How many months are in the Hijri year?", a: "The Hijri year has 12 months, starting with Muharram and ending with Dhul-Hijjah." }
            ]
        },

        "currency-converter": {
            category: "finance",
            intro: `The AURA Currency Converter provides fast and accurate conversion between all major world currencies, including the Saudi Riyal (SAR), UAE Dirham (AED), US Dollar (USD), Euro (EUR), British Pound (GBP), Pakistani Rupee (PKR), Indian Rupee (INR), and 150+ others.`,
            about: `Whether you are traveling, doing international business, sending money to family abroad, or shopping from a foreign website, this tool helps you understand the real value of your money in another currency.`,
            howTo: [
                "Enter the amount you want to convert.",
                "Select the source currency (From) and target currency (To).",
                "The converted amount appears instantly with the current exchange rate."
            ],
            faqs: [
                { q: "How often are exchange rates updated?", a: "Rates are updated regularly using live market data. For critical transactions, always confirm with your bank." },
                { q: "Which currencies are supported?", a: "All major currencies including SAR, AED, USD, EUR, GBP, PKR, INR, JPY, CNY, and 150+ more." },
                { q: "Is this rate the same as my bank's?", a: "Banks add a margin to exchange rates. Our tool shows the mid-market rate, which is the fairest rate." }
            ]
        },

        "gratuity-calculator": {
            category: "finance",
            intro: `The End of Service Gratuity Calculator is designed for employees working in the Gulf Cooperation Council (GCC) countries — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. It computes your end-of-service benefits according to the labor laws of each country.`,
            about: `In Saudi Arabia, gratuity (Mukafaa'at) is calculated as half a month's salary for the first 5 years and one full month's salary for each additional year. In the UAE, similar rules apply. Our calculator handles all GCC countries automatically.`,
            howTo: [
                "Enter your basic monthly salary.",
                "Enter the number of years and months you have worked.",
                "Select your country (Saudi Arabia, UAE, Qatar, etc.).",
                "The tool will calculate your gratuity based on local labor law."
            ],
            faqs: [
                { q: "Is gratuity calculated on basic salary or total salary?", a: "In most GCC countries, gratuity is calculated on the basic salary only (excluding allowances)." },
                { q: "What if I resign before 5 years?", a: "In Saudi Arabia, you are entitled to one-third of gratuity after 2-5 years, two-thirds after 5-10 years, and full gratuity after 10 years." },
                { q: "Is gratuity taxable?", a: "In GCC countries, end-of-service benefits are generally not subject to income tax." }
            ]
        },

        "bmi-calculator": {
            category: "health",
            intro: `The Body Mass Index (BMI) Calculator helps you determine whether your weight is in a healthy range for your height. BMI is used worldwide by doctors, nutritionists, and health organizations as a quick screening tool for weight-related health risks.`,
            about: `BMI is calculated by dividing your weight in kilograms by the square of your height in meters. According to the World Health Organization (WHO), a BMI below 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30+ is obese. Our calculator supports both metric (kg/cm) and imperial (lbs/ft-in) units.`,
            howTo: [
                "Select your preferred unit system (Metric or Imperial).",
                "Enter your height and weight.",
                "The tool will display your BMI and weight category instantly."
            ],
            faqs: [
                { q: "Is BMI accurate for everyone?", a: "BMI is a general screening tool. It may not be accurate for athletes, pregnant women, children, or elderly people. Consult a doctor for personalized advice." },
                { q: "What is a healthy BMI?", a: "A BMI between 18.5 and 24.9 is considered healthy by WHO standards." },
                { q: "How can I lower my BMI?", a: "Regular exercise, a balanced diet, adequate sleep, and reduced sugar intake can help you achieve a healthy BMI." }
            ]
        },

        "tasbih-counter": {
            category: "islamic",
            intro: `The Digital Tasbih Counter is a modern replacement for the traditional prayer beads. It helps you keep count of your Dhikr (remembrance of Allah) — whether you are reciting SubhanAllah, Alhamdulillah, Allahu Akbar, or any other form of Dhikr.`,
            about: `Dhikr is one of the most beloved acts of worship in Islam. The Prophet Muhammad (PBUH) said: "The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, and Allahu Akbar." Our digital counter lets you track your daily Dhikr goals accurately.`,
            howTo: [
                "Choose a Dhikr phrase (or set a custom target).",
                "Tap the counter button each time you recite.",
                "The counter tracks your progress and resets when you reach your goal."
            ],
            faqs: [
                { q: "What is the best Dhikr to recite?", a: "SubhanAllah (33x), Alhamdulillah (33x), and Allahu Akbar (34x) after each prayer are highly recommended." },
                { q: "Does the counter save my progress?", a: "It saves within your current session. To save permanently, bookmark the page." },
                { q: "Can I use the counter for other purposes?", a: "Absolutely — you can use it for any counting task, not just Dhikr." }
            ]
        }
    };

    // ═══════════════════════════════════════════════════════
    // CATEGORY-BASED TEMPLATES (For tools without unique content)
    // ═══════════════════════════════════════════════════════
    const categoryTemplates = {
        islamic: {
            intro: `The {TOOL} is a free, accurate, and easy-to-use Islamic tool designed to help Muslims around the world fulfill their religious obligations with confidence. It follows authentic Islamic principles derived from the Quran and Sunnah, and is trusted by Muslims in Saudi Arabia, UAE, Pakistan, India, UK, USA, and worldwide.`,
            about: `This tool has been carefully developed by the AURA Global Tools team to provide reliable results that align with Islamic Shariah. Whether you are at home, at work, or traveling, this tool is available 24/7 at no cost. No registration, no fees, no data collection — just pure utility for the Ummah.`,
            howTo: [
                "Open the tool on any device — mobile, tablet, or computer.",
                "Enter your information in the input fields.",
                "The tool will instantly provide you with an accurate result.",
                "You can use the result for your personal religious decisions."
            ],
            faqs: [
                { q: "Is {TOOL} free to use?", a: "Yes, {TOOL} is 100% free with no hidden charges, no subscription, and no sign-up required. Use it as often as you wish." },
                { q: "Is the result of {TOOL} accurate?", a: "Yes, our tool uses standard Islamic formulas and rulings that are widely accepted by scholars. However, for complex or unusual cases, we recommend consulting a qualified Mufti or Islamic scholar." },
                { q: "Can I use {TOOL} on my mobile phone?", a: "Absolutely. {TOOL} is fully responsive and works smoothly on all smartphones, tablets, and desktop computers." },
                { q: "Does {TOOL} save my personal data?", a: "No. We value your privacy. All calculations happen locally in your browser — we never store or share your personal information." },
                { q: "Which countries use {TOOL}?", a: "{TOOL} is used by Muslims in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Pakistan, India, Bangladesh, Turkey, Malaysia, Indonesia, UK, USA, Canada, Australia, and many other countries." }
            ]
        },
        finance: {
            intro: `The {TOOL} is a free, precise, and professionally designed financial calculator that helps you make informed decisions about loans, investments, taxes, salaries, and money management. It uses the same formulas used by banks and financial institutions worldwide.`,
            about: `This financial tool is part of the AURA Global Tools collection, which serves thousands of users daily across the Middle East, South Asia, Europe, and North America. All results are based on standard financial mathematics and are suitable for personal, business, and academic use.`,
            howTo: [
                "Enter the required values (amount, rate, tenure, etc.) in the input fields.",
                "Choose your currency if the option is available.",
                "The tool will instantly calculate and display your result.",
                "You can adjust any value to see different scenarios."
            ],
            faqs: [
                { q: "Is {TOOL} accurate?", a: "Yes, {TOOL} uses standard financial formulas that are used by banks, accountants, and financial analysts worldwide. The results are highly accurate for practical purposes." },
                { q: "Is {TOOL} free to use?", a: "Yes, it is completely free. There are no charges, no ads during calculation, and no sign-up required." },
                { q: "Can I use {TOOL} for business purposes?", a: "Yes, {TOOL} is suitable for individuals, freelancers, students, and businesses alike. You may use it for personal or commercial decisions." },
                { q: "Which currencies does {TOOL} support?", a: "{TOOL} supports all major currencies including SAR, AED, USD, EUR, GBP, PKR, INR, JPY, CNY, and many more." },
                { q: "Does {TOOL} store my financial data?", a: "No. All calculations are performed locally in your browser. We never transmit or store your financial information on any server." }
            ]
        },
        health: {
            intro: `The {TOOL} is a free online health and wellness tool designed to help you track, monitor, and improve your health using scientifically validated formulas and WHO guidelines.`,
            about: `This tool is built on internationally recognized health standards used by doctors, nutritionists, and fitness professionals. It is intended for informational and educational purposes only and should not replace professional medical advice.`,
            howTo: [
                "Select your measurement unit (Metric or Imperial).",
                "Enter your personal measurements in the input fields.",
                "The tool will instantly provide your health metric.",
                "Use the result to track your progress over time."
            ],
            faqs: [
                { q: "Is {TOOL} medically accurate?", a: "{TOOL} is based on standard health formulas and WHO guidelines. However, it is for informational purposes only. Please consult a qualified doctor for medical advice." },
                { q: "Is {TOOL} free?", a: "Yes, {TOOL} is 100% free with no sign-up required." },
                { q: "Can I use {TOOL} daily?", a: "Yes, you can use {TOOL} as often as you like to monitor your health progress." },
                { q: "Does {TOOL} store my health data?", a: "No. All calculations happen in your browser. Your health data never leaves your device." },
                { q: "Is {TOOL} suitable for children?", a: "{TOOL} is designed for adults. For children, please use age-specific growth charts and consult a pediatrician." }
            ]
        },
        career: {
            intro: `The {TOOL} is a free career tool designed to help job seekers, students, and professionals advance in their careers. Whether you are preparing a resume, applying for a job, or planning your next career move, this tool provides practical, actionable help.`,
            about: `This tool is part of AURA Global Tools — a collection of 300+ free online utilities used by professionals around the world. It is ideal for the Gulf job market, South Asia, Europe, and North America.`,
            howTo: [
                "Fill in the required fields with your career information.",
                "The tool will generate your result instantly.",
                "You can copy, download, or print the result for your use."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, {TOOL} is completely free with no hidden charges." },
                { q: "Is {TOOL} ATS-friendly?", a: "Yes, our tool follows modern Applicant Tracking System (ATS) best practices." },
                { q: "Can I use {TOOL} for Gulf jobs?", a: "Yes, {TOOL} is optimized for job markets in Saudi Arabia, UAE, Qatar, Kuwait, and across the GCC region." },
                { q: "Does {TOOL} save my data?", a: "No, all processing happens in your browser for your privacy." }
            ]
        },
        travel: {
            intro: `The {TOOL} is a free travel utility that helps travelers plan better trips, calculate distances, convert time zones, and manage travel logistics easily.`,
            about: `Designed for global travelers, this tool works from anywhere in the world. It is especially useful for travelers between the Gulf, South Asia, Europe, and North America.`,
            howTo: [
                "Enter your travel information.",
                "The tool will instantly display the result.",
                "Use the result for your travel planning."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, it is 100% free with no sign-up required." },
                { q: "Does it work worldwide?", a: "Yes, {TOOL} works globally and supports all countries." },
                { q: "Is {TOOL} accurate?", a: "Yes, our calculations follow international standards." }
            ]
        },
        education: {
            intro: `The {TOOL} is a free educational tool that helps students, teachers, and parents calculate grades, GPA, percentages, and academic metrics with accuracy.`,
            about: `This tool follows standard academic formulas used by schools, colleges, and universities worldwide, including the Gulf, South Asia, and Western education systems.`,
            howTo: [
                "Enter your marks, grades, or values.",
                "The tool will instantly calculate your result.",
                "Use the result for academic planning."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free." },
                { q: "Is the GPA formula the same everywhere?", a: "No, GPA formulas vary by country. Our tool uses standard 4.0 scale and percentage-based formulas." },
                { q: "Does {TOOL} work for university students?", a: "Yes, it works for high school, college, and university students." }
            ]
        },
        general: {
            intro: `The {TOOL} is a free, fast, and reliable online tool designed to help you get instant results for everyday tasks. It works on any device — no download, no registration, no fees.`,
            about: `This tool is part of AURA Global Tools, a collection of 300+ free online utilities trusted by users worldwide. Our tools are regularly updated to ensure accuracy and reliability.`,
            howTo: [
                "Open the tool on your device.",
                "Enter the required information.",
                "Get your instant result.",
                "Use or share the result as needed."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, {TOOL} is 100% free with no hidden charges." },
                { q: "How do I use {TOOL}?", a: "Simply enter your values in the input fields and the result will appear instantly." },
                { q: "Does {TOOL} work on mobile?", a: "Yes, {TOOL} is fully responsive and works perfectly on all devices." },
                { q: "Is my data safe with {TOOL}?", a: "Yes, {TOOL} does not store any of your data. All processing happens in your browser." },
                { q: "Can I share {TOOL} with others?", a: "Yes, feel free to share the link with friends, family, and colleagues." }
            ]
        }
    };

    // ═══════════════════════════════════════════════════════
    // RENDER
    // ═══════════════════════════════════════════════════════
    function buildFAQHtml(faqs, toolName) {
        return faqs.map(f => {
            const q = f.q.replace(/\{TOOL\}/g, toolName);
            const a = f.a.replace(/\{TOOL\}/g, toolName);
            return `
                <details style="margin-bottom:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 16px;">
                    <summary style="color:#fbbf24;font-weight:600;font-size:14px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;">
                        <span>Q: ${q}</span>
                        <span style="color:#fbbf24;font-size:18px;">+</span>
                    </summary>
                    <p style="color:#cbd5e1;font-size:13px;line-height:1.8;margin-top:10px;margin-bottom:0;">${a}</p>
                </details>`;
        }).join("");
    }

    function buildHowToHtml(steps) {
        return steps.map((s, i) => `
            <li style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
                <span style="background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#000;min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;">${i + 1}</span>
                <span style="color:#cbd5e1;font-size:14px;line-height:1.7;padding-top:3px;">${s}</span>
            </li>`).join("");
    }

    function renderContent() {
        const key = getToolKey();
        if (!key) return;

        // Remove old content
        const old = document.getElementById("aura-premium-content");
        if (old) old.remove();

        const toolName = formatName(key);
        let data = uniqueContent[key];
        let category = "";

        if (data) {
            category = data.category;
        } else {
            category = detectCategory(key);
            const tpl = categoryTemplates[category] || categoryTemplates.general;
            data = {
                intro: tpl.intro.replace(/\{TOOL\}/g, toolName),
                about: tpl.about.replace(/\{TOOL\}/g, toolName),
                howTo: tpl.howTo.map(s => s.replace(/\{TOOL\}/g, toolName)),
                faqs: tpl.faqs
            };
        }

        const faqHtml = buildFAQHtml(data.faqs, toolName);
        const howToHtml = buildHowToHtml(data.howTo);

        const html = `
        <section id="aura-premium-content" style="max-width:900px;margin:50px auto 40px;padding:0 18px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;color:#e2e8f0;">

            <!-- ABOUT -->
            <div style="background:linear-gradient(135deg,rgba(251,191,36,0.08),rgba(251,191,36,0.02));border:1px solid rgba(251,191,36,0.25);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 16px 0;display:flex;align-items:center;gap:10px;">
                    <span style="font-size:26px;">📘</span> About ${toolName}
                </h2>
                <p style="font-size:15px;line-height:1.85;color:#d1d5db;margin:0 0 16px 0;">${data.intro}</p>
                <p style="font-size:15px;line-height:1.85;color:#d1d5db;margin:0;">${data.about}</p>
            </div>

            <!-- HOW TO USE -->
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 20px 0;display:flex;align-items:center;gap:10px;">
                    <span style="font-size:26px;">🛠️</span> How to Use ${toolName}
                </h2>
                <ol style="list-style:none;padding:0;margin:0;">${howToHtml}</ol>
            </div>

            <!-- FAQ -->
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 20px 0;display:flex;align-items:center;gap:10px;">
                    <span style="font-size:26px;">❓</span> Frequently Asked Questions
                </h2>
                ${faqHtml}
            </div>

            <!-- DISCLAIMER -->
            <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.2);border-radius:14px;padding:16px 20px;font-size:13px;color:#94a3b8;line-height:1.7;">
                <strong style="color:#60a5fa;">📌 Note:</strong> ${toolName} is provided free of charge by AURA Global Tools. Results are for informational purposes. For critical decisions, please consult a qualified professional.
            </div>

        </section>`;

        // Insert before footer
        const footer = document.querySelector("footer");
        if (footer) {
            footer.insertAdjacentHTML("beforebegin", html);
        } else {
            document.body.insertAdjacentHTML("beforeend", html);
        }
    }

    // ─── RUN ───
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderContent);
    } else {
        renderContent();
    }

    // Re-render when hash changes (for single-page tools)
    window.addEventListener("hashchange", () => setTimeout(renderContent, 150));

})();
