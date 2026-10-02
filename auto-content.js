// ═══════════════════════════════════════════════════════
// AURA VIP CONTENT ENGINE v6.0 — HOOKS INTO openTool()
// Works with Single Page Applications — 100% Guaranteed
// ═══════════════════════════════════════════════════════

(function () {
    "use strict";

    // ─── UNIQUE CONTENT FOR TOP TOOLS ───
    const UNIQUE = {
        zakat: {
            title: "Zakat Calculator",
            category: "islamic",
            intro: "Zakat is the third pillar of Islam and one of the most important obligations upon every financially able Muslim. It represents a fixed portion (2.5%) of a Muslim's accumulated wealth that must be given annually to those in need. This free Zakat Calculator simplifies this sacred obligation by computing your Zakat instantly and accurately — whether your wealth is in cash, gold, silver, business assets, or investments.",
            about: "This calculator follows the traditional Islamic ruling that Zakat becomes obligatory when wealth exceeds the Nisab threshold (87.48g of gold or 612.36g of silver) and remains above it for one complete lunar year (Hawl). Our tool provides results based on the Hanafi, Shafi'i, Maliki, and Hanbali schools of jurisprudence. It is used by thousands of Muslims in Saudi Arabia, the UAE, Pakistan, India, the UK, and around the world.",
            steps: [
                "Enter the total value of cash in your bank accounts and at home.",
                "Enter the current market value of gold you own.",
                "Enter the current market value of silver you own.",
                "Add the value of business inventory, stock, or trade goods.",
                "The calculator automatically computes 2.5% of your total Zakatable wealth."
            ],
            faqs: [
                { q: "What is the Nisab threshold for Zakat?", a: "Nisab is the minimum wealth a Muslim must possess before Zakat becomes obligatory. It equals 87.48 grams of gold or 612.36 grams of silver. Most scholars recommend the silver Nisab as it benefits more people." },
                { q: "Is Zakat calculated on gross or net wealth?", a: "Zakat is calculated on net Zakatable wealth — after deducting immediate debts and liabilities from your total assets." },
                { q: "Do I need to pay Zakat on my house and car?", a: "No, Zakat is not payable on your primary residence, personal car, or household furniture." },
                { q: "When should I pay Zakat?", a: "Zakat is due once a complete lunar year (Hawl) has passed. Many Muslims choose Ramadan for greater reward, but it can be paid any time." }
            ]
        },
        bmi: {
            title: "BMI Calculator",
            category: "health",
            intro: "The Body Mass Index (BMI) Calculator helps you determine whether your weight is in a healthy range for your height. BMI is used worldwide by doctors, nutritionists, and health organizations as a quick screening tool for weight-related health risks.",
            about: "BMI is calculated by dividing weight in kilograms by the square of height in meters. According to the World Health Organization (WHO), a BMI below 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30+ is obese. Our calculator supports both metric and imperial units.",
            steps: [
                "Select your preferred unit system (Metric or Imperial).",
                "Enter your height and weight in the input fields.",
                "The tool displays your BMI and weight category instantly.",
                "Use the result to track your health progress over time."
            ],
            faqs: [
                { q: "Is BMI accurate for everyone?", a: "BMI is a general screening tool. It may not be accurate for athletes, pregnant women, children, or elderly people. Consult a doctor for personalized advice." },
                { q: "What is a healthy BMI?", a: "A BMI between 18.5 and 24.9 is considered healthy by WHO standards." },
                { q: "How can I lower my BMI?", a: "Regular exercise, a balanced diet, adequate sleep, and reduced sugar intake can help you achieve a healthy BMI." }
            ]
        },
        prayer: {
            title: "Prayer Times",
            category: "islamic",
            intro: "Salah (prayer) is the second pillar of Islam and the daily spiritual connection between a Muslim and Allah. Knowing the exact prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha is essential for every Muslim. This tool provides accurate daily timings based on your location using internationally recognized astronomical methods.",
            about: "Our Prayer Times calculator supports Umm al-Qura (Makkah), ISNA (North America), MWL (Muslim World League), Egyptian General Authority, and Karachi University calculation methods. It also supports both Hanafi and Shafi'i Asr calculation methods.",
            steps: [
                "Select your city from the dropdown list.",
                "The tool displays accurate prayer times for the entire day.",
                "Use the times to plan your daily prayers."
            ],
            faqs: [
                { q: "How accurate are these prayer times?", a: "Calculated using internationally accepted astronomical formulas. Accurate to within 1-2 minutes." },
                { q: "Which calculation method should I use?", a: "Umm al-Qura for Saudi Arabia, Egyptian for Africa, ISNA for North America, MWL for Europe, Karachi for South Asia." }
            ]
        },
        qibla: {
            title: "Qibla Direction",
            category: "islamic",
            intro: "The Qibla is the sacred direction every Muslim faces during Salah — towards the Holy Kaaba in Makkah al-Mukarramah. Knowing the correct direction is essential for valid prayer, whether you are in Riyadh, Karachi, London, or Sydney.",
            about: "This tool uses the great-circle formula to determine the shortest path from your GPS coordinates to the Kaaba (21.4225°N, 39.8262°E), providing the bearing in degrees from true north.",
            steps: [
                "Allow location access or enter your city.",
                "The tool calculates the exact bearing to the Kaaba.",
                "Rotate your phone until the compass points to that degree.",
                "You are now facing the Qibla."
            ],
            faqs: [
                { q: "How accurate is this?", a: "Accurate to within 0.1 degrees using the great-circle formula — more accurate than most physical compasses." },
                { q: "Does my phone compass work correctly?", a: "Move away from metal, magnets, or electronics for best accuracy." }
            ]
        },
        loan: {
            title: "Loan EMI Calculator",
            category: "finance",
            intro: "The Loan EMI Calculator helps you calculate your Equated Monthly Installment (EMI) for any type of loan — home, car, personal, business, or education. It also provides a complete amortization breakdown.",
            about: "Understanding your EMI before taking a loan is essential for smart financial planning. Our calculator uses the standard formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly rate, and N is number of installments.",
            steps: [
                "Enter your loan amount.",
                "Enter the annual interest rate.",
                "Enter the loan tenure.",
                "View your monthly EMI instantly."
            ],
            faqs: [
                { q: "What is EMI?", a: "Equated Monthly Installment — the fixed amount you pay your lender every month until the loan is fully repaid." },
                { q: "How can I reduce my EMI?", a: "Make a larger down payment, choose a longer tenure, negotiate a lower rate, or improve your credit score." }
            ]
        },
        hijri: {
            title: "Hijri Converter",
            category: "islamic",
            intro: "The Hijri (Islamic) calendar is a lunar calendar used by Muslims worldwide to determine Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, and Ashura. This converter lets you switch between Gregorian and Hijri dates accurately.",
            about: "The Islamic calendar begins with the Hijra — the migration of Prophet Muhammad (PBUH) from Makkah to Madinah in 622 CE. Our converter uses the Umm al-Qura and tabular Islamic calendars for reliable results.",
            steps: [
                "Choose the conversion type.",
                "Enter your date.",
                "View the equivalent date instantly."
            ],
            faqs: [
                { q: "Why does the Hijri date differ between countries?", a: "Dates depend on the actual sighting of the new moon, which can vary by 1-2 days." },
                { q: "Which calendar is used in Saudi Arabia?", a: "The Umm al-Qura calendar." }
            ]
        },
        currency: {
            title: "Currency Converter",
            category: "finance",
            intro: "The AURA Currency Converter provides fast, accurate conversion between all major world currencies — SAR, AED, USD, EUR, GBP, PKR, INR, and 30+ more.",
            about: "Whether you're traveling, doing international business, sending money abroad, or shopping from a foreign website, this tool helps you understand the real value of your money in another currency.",
            steps: [
                "Enter the amount you want to convert.",
                "Select the source and target currencies.",
                "View the converted amount instantly."
            ],
            faqs: [
                { q: "How often are rates updated?", a: "Rates update regularly using live market data. For critical transactions, confirm with your bank." },
                { q: "Which currencies are supported?", a: "SAR, AED, USD, EUR, GBP, PKR, INR, JPY, CNY, and 30+ more." }
            ]
        },
        eos: {
            title: "End of Service Gratuity",
            category: "finance",
            intro: "The End of Service Gratuity Calculator is designed for employees working in GCC countries — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. It computes your end-of-service benefits per local labor law.",
            about: "In Saudi Arabia, gratuity is half a month's salary for the first 5 years and one full month's salary for each additional year. In the UAE, similar rules apply. Our calculator handles both countries automatically.",
            steps: [
                "Enter your basic monthly salary.",
                "Enter the number of years you have worked.",
                "Select your country.",
                "View your gratuity amount."
            ],
            faqs: [
                { q: "Is gratuity on basic or total salary?", a: "In most GCC countries, gratuity is calculated on basic salary only (excluding allowances)." },
                { q: "What if I resign before 5 years?", a: "In Saudi Arabia: 1/3 gratuity after 2-5 years, 2/3 after 5-10 years, full gratuity after 10 years." }
            ]
        },
        tasbih: {
            title: "Tasbih Counter",
            category: "islamic",
            intro: "The Digital Tasbih Counter is a modern replacement for traditional prayer beads. It helps you track Dhikr — SubhanAllah, Alhamdulillah, Allahu Akbar, or any other form of remembrance.",
            about: "Dhikr is one of the most beloved acts of worship in Islam. The Prophet (PBUH) said: \"The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, and Allahu Akbar.\"",
            steps: [
                "Tap the counter button each time you recite.",
                "The counter tracks your progress.",
                "Reset when you reach your goal."
            ],
            faqs: [
                { q: "What is the best Dhikr?", a: "SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 34x after each prayer." },
                { q: "Can I use it for other purposes?", a: "Yes, for any counting task." }
            ]
        },
        age: {
            title: "Age Calculator",
            category: "utility",
            intro: "The Age Calculator computes your exact age in years, months, and days from any given date. Whether you need your age for a form, a milestone, or just out of curiosity, this tool provides an instant and accurate answer.",
            about: "Age calculation accounts for leap years and varying month lengths, ensuring your result is precise. The tool also shows your total days lived and can calculate the age difference between any two dates.",
            steps: [
                "Enter your date of birth.",
                "The tool calculates your exact age.",
                "View your age in years, months, and days."
            ],
            faqs: [
                { q: "Is this age calculator accurate?", a: "Yes, it accounts for leap years and different month lengths." },
                { q: "Can I calculate age for any date?", a: "Yes, you can enter any date of birth." }
            ]
        }
    };

    // ─── CATEGORY TEMPLATES ───
    const TEMPLATES = {
        islamic: {
            intro: "The {TOOL} is a free, accurate, and easy-to-use Islamic tool designed to help Muslims around the world fulfill their religious obligations with confidence. It follows authentic Islamic principles derived from the Quran and Sunnah, and is trusted by Muslims in Saudi Arabia, UAE, Pakistan, India, UK, USA, and worldwide.",
            about: "This tool has been carefully developed by the AURA Global Tools team to provide reliable results aligned with Islamic Shariah. Whether you are at home, at work, or traveling, this tool is available 24/7 at no cost. No registration, no fees, no data collection — just pure utility for the Ummah.",
            steps: [
                "Open the tool on any device — mobile, tablet, or computer.",
                "Enter your information in the input fields.",
                "The tool instantly provides an accurate result.",
                "Use the result for your personal religious decisions."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free with no hidden charges, no subscription, and no sign-up required." },
                { q: "Is the result accurate?", a: "Yes, based on standard Islamic formulas accepted by scholars. For complex cases, consult a qualified Mufti." },
                { q: "Can I use it on mobile?", a: "Absolutely — fully responsive on all devices." },
                { q: "Is my data safe?", a: "Yes, all calculations happen in your browser. Nothing is stored or shared." }
            ]
        },
        finance: {
            intro: "The {TOOL} is a free, precise, and professionally designed financial calculator that helps you make informed decisions about loans, investments, taxes, salaries, and money management. It uses the same formulas used by banks and financial institutions worldwide.",
            about: "This financial tool is part of the AURA Global Tools collection, serving thousands of users daily across the Middle East, South Asia, Europe, and North America. All results are based on standard financial mathematics and are suitable for personal, business, and academic use.",
            steps: [
                "Enter the required values in the input fields.",
                "Choose your currency if the option is available.",
                "View your result instantly.",
                "Adjust values to explore different scenarios."
            ],
            faqs: [
                { q: "Is {TOOL} accurate?", a: "Yes, it uses standard financial formulas used by banks and accountants worldwide." },
                { q: "Is it free?", a: "Yes, completely free with no sign-up." },
                { q: "Can I use it for business?", a: "Yes, for personal or commercial decisions." },
                { q: "Which currencies are supported?", a: "SAR, AED, USD, EUR, GBP, PKR, INR, and more." }
            ]
        },
        health: {
            intro: "The {TOOL} is a free online health and wellness tool designed to help you track, monitor, and improve your health using scientifically validated formulas and WHO guidelines.",
            about: "Built on internationally recognized health standards used by doctors, nutritionists, and fitness professionals, this tool is for informational purposes only and should not replace professional medical advice.",
            steps: [
                "Select your measurement unit.",
                "Enter your personal measurements.",
                "View your health metric instantly.",
                "Use the result to track progress over time."
            ],
            faqs: [
                { q: "Is {TOOL} medically accurate?", a: "Based on standard health formulas and WHO guidelines. Please consult a doctor for medical advice." },
                { q: "Is it free?", a: "Yes, 100% free with no sign-up required." },
                { q: "Does it store my data?", a: "No, all calculations happen in your browser." },
                { q: "Can I use it daily?", a: "Yes, use it as often as you like." }
            ]
        },
        career: {
            intro: "The {TOOL} is a free career tool designed to help job seekers, students, and professionals advance in their careers — from resume building to interview preparation and salary negotiation.",
            about: "Part of AURA Global Tools, this tool is optimized for the Gulf job market, South Asia, Europe, and North America. It follows modern Applicant Tracking System (ATS) best practices and is used by professionals worldwide.",
            steps: [
                "Fill in the required fields with your career information.",
                "The tool generates your result instantly.",
                "Copy, download, or print as needed."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free with no hidden charges." },
                { q: "Is it ATS-friendly?", a: "Yes, follows modern Applicant Tracking System best practices." },
                { q: "Can I use it for Gulf jobs?", a: "Yes, optimized for KSA, UAE, Qatar, Kuwait, and the GCC region." },
                { q: "Does it save my data?", a: "No, all processing happens in your browser." }
            ]
        },
        education: {
            intro: "The {TOOL} is a free educational tool that helps students, teachers, and parents calculate grades, GPA, percentages, and academic metrics accurately. It follows standard academic formulas used by schools, colleges, and universities worldwide.",
            about: "This tool is part of AURA Global Tools — a collection of 300+ free online utilities trusted by users in the Gulf, South Asia, and Western education systems. Whether you're in high school, college, or university, this tool makes academic calculations easy.",
            steps: [
                "Enter your marks, grades, or values.",
                "The tool instantly calculates your result.",
                "Use the result for academic planning."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free." },
                { q: "Does it work for university students?", a: "Yes, for high school, college, and university." },
                { q: "Is the formula standard?", a: "Yes, it uses internationally accepted academic formulas." }
            ]
        },
        travel: {
            intro: "The {TOOL} is a free travel utility that helps travelers plan better trips, calculate distances, convert time zones, and manage travel logistics easily. It works from anywhere in the world.",
            about: "Designed for global travelers, this tool is especially useful between the Gulf, South Asia, Europe, and North America. It supports multiple currencies and countries.",
            steps: [
                "Enter your travel information.",
                "View the result instantly.",
                "Use it for your travel planning."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free with no sign-up required." },
                { q: "Does it work worldwide?", a: "Yes, globally for all countries." },
                { q: "Is it accurate?", a: "Yes, based on international standards." }
            ]
        },
        utility: {
            intro: "The {TOOL} is a free, fast, and reliable online utility designed to help you complete everyday tasks quickly. It works on any device — no download, no registration, no fees.",
            about: "Part of AURA Global Tools, a collection of 300+ free online utilities trusted by users worldwide. Our tools are regularly updated to ensure accuracy and reliability.",
            steps: [
                "Open the tool on your device.",
                "Enter the required information.",
                "Get your instant result."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free with no hidden charges." },
                { q: "Does it work on mobile?", a: "Yes, fully responsive on all devices." },
                { q: "Is my data safe?", a: "Yes, nothing is stored — all processing happens in your browser." },
                { q: "Can I share it?", a: "Yes, feel free to share the link with friends and family." }
            ]
        },
        life: {
            intro: "The {TOOL} is a free lifestyle tool designed to help you improve your daily life, track habits, and find inspiration. It's simple, fast, and works on any device.",
            about: "Part of AURA Global Tools, this tool is used by thousands of people worldwide to build better habits and live more intentionally.",
            steps: [
                "Open the tool on your device.",
                "Follow the on-screen instructions.",
                "Use the result to improve your daily routine."
            ],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free." },
                { q: "Can I use it daily?", a: "Yes, it's designed for daily use." },
                { q: "Does it store my data?", a: "No, everything stays in your browser." }
            ]
        }
    };

    // ─── DETECT CATEGORY ───
    function detectCategory(fn, name) {
        const k = (fn + " " + name).toLowerCase();
        if (/(zakat|nisab|fidya|fitra|qurbani|inheritance|prayer|qibla|hijri|ramadan|tasbih|dua|hadith|quran|islamic|names|hajj|sadaqah|99)/.test(k)) return "islamic";
        if (/(loan|emi|mortgage|interest|gst|vat|compound|currency|gold|gratuity|eos|salary|tax|investment|crypto|profit|roi|sip|fd|retirement|networth|savings|budget|debt|credit|discount|margin|break|emergency|stock|rental|wage)/.test(k)) return "finance";
        if (/(bmi|bmr|calorie|health|water|bodyfat|idealweight|pregnancy|ovulation|bp|diabetes|heart|sleep|protein|macro|steps|calburn|waisthip|carb|fat|vitamin|iron|sugar|chol|memory|medicine|stress|anxiety|depression|keto|fasting|vegan)/.test(k)) return "health";
        if (/(resume|cv|cover|interview|job|career|salaryneg|annualLeave|workdays|overtime|hourly|freelance|notice|service|payslip|careerPath|jd|resignation|recLetter|offer|expLetter|appraisal|promotion|skills|working)/.test(k)) return "career";
        if (/(gpa|cgpa|grade|percentage|pomodoro|reading|typing|mathSolver|physics|chemistry|statistics|geometry|trigonometry|quadratic|word|charCount|case|textReverse|palindrome|anagram|spell|citation|binary|hex|roman|numWords|unit|abc|numbers|coloring|kidsMath|shapes|kidsStory|animalSounds|calendar|rhymes|memoryGame)/.test(k)) return "education";
        if (/(weather|visa|flight|fuel|distance|toll|hotel|timezone|packing|travel|trip|jetlag|insurance|baggage|emergency|sunrise|moon|airport|worldClock|money)/.test(k)) return "travel";
        if (/(affirmation|quote|mood|habit|goal|gratitude|breathing|meditation|journal|morning|evening|readingList|movie|music|recipe|workout|skincare|gift|dateIdeas|fact|joke|wouldYou)/.test(k)) return "life";
        return "utility";
    }

    // ─── BUILD FAQ HTML ───
    function buildFAQs(faqs, tool) {
        return faqs.map(f => `
            <details style="margin-bottom:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 16px;">
                <summary style="color:#d4af37;font-weight:600;font-size:14px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:10px;">
                    <span>Q: ${f.q.replace(/\{TOOL\}/g, tool)}</span>
                    <span style="color:#d4af37;font-size:18px;">+</span>
                </summary>
                <p style="color:#cbd5e1;font-size:13px;line-height:1.8;margin-top:10px;margin-bottom:0;">${f.a.replace(/\{TOOL\}/g, tool)}</p>
            </details>`).join("");
    }

    function buildSteps(steps) {
        return steps.map((s, i) => `
            <li style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
                <span style="background:linear-gradient(135deg,#d4af37,#f4d03f);color:#080b14;min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;flex-shrink:0;">${i + 1}</span>
                <span style="color:#cbd5e1;font-size:14px;line-height:1.7;padding-top:3px;">${s}</span>
            </li>`).join("");
    }

    // ─── BUILD FULL CONTENT ───
    function buildContent(toolName, fn) {
        let data = UNIQUE[fn];
        if (!data) {
            const cat = detectCategory(fn, toolName);
            const tpl = TEMPLATES[cat] || TEMPLATES.utility;
            data = {
                intro: tpl.intro.replace(/\{TOOL\}/g, toolName),
                about: tpl.about.replace(/\{TOOL\}/g, toolName),
                steps: tpl.steps.map(s => s.replace(/\{TOOL\}/g, toolName)),
                faqs: tpl.faqs
            };
        } else {
            // Use unique content
            data = {
                intro: data.intro,
                about: data.about,
                steps: data.steps,
                faqs: data.faqs
            };
        }

        const faqHtml = buildFAQs(data.faqs, toolName);
        const stepsHtml = buildSteps(data.steps);

        return `
        <div id="aura-tool-content" style="max-width:900px;margin:40px auto 0;padding:0 4px;font-family:'Inter',-apple-system,sans-serif;color:#e2e8f0;">

            <div style="background:linear-gradient(135deg,rgba(212,175,55,0.08),rgba(212,175,55,0.02));border:1px solid rgba(212,175,55,0.25);border-radius:18px;padding:28px 24px;margin-bottom:20px;">
                <h2 style="color:#d4af37;font-size:20px;margin:0 0 16px 0;display:flex;align-items:center;gap:10px;font-weight:800;">
                    <span style="font-size:24px;">📘</span> About ${toolName}
                </h2>
                <p style="font-size:14.5px;line-height:1.85;color:#d1d5db;margin:0 0 14px 0;">${data.intro}</p>
                <p style="font-size:14.5px;line-height:1.85;color:#d1d5db;margin:0;">${data.about}</p>
            </div>

            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:20px;">
                <h2 style="color:#d4af37;font-size:20px;margin:0 0 20px 0;display:flex;align-items:center;gap:10px;font-weight:800;">
                    <span style="font-size:24px;">🛠️</span> How to Use ${toolName}
                </h2>
                <ol style="list-style:none;padding:0;margin:0;">${stepsHtml}</ol>
            </div>

            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:20px;">
                <h2 style="color:#d4af37;font-size:20px;margin:0 0 20px 0;display:flex;align-items:center;gap:10px;font-weight:800;">
                    <span style="font-size:24px;">❓</span> Frequently Asked Questions
                </h2>
                ${faqHtml}
            </div>

            <div style="background:rgba(0,229,255,0.06);border:1px solid rgba(0,229,255,0.2);border-radius:14px;padding:16px 20px;font-size:13px;color:#94a3b8;line-height:1.7;">
                <strong style="color:#00e5ff;">📌 Note:</strong> ${toolName} is provided free by AURA Global Tools. Results are for informational purposes. For critical decisions, consult a qualified professional.
            </div>

        </div>`;
    }

    // ─── HOOK INTO openTool ───
    function injectContent(toolName, fn) {
        const box = document.getElementById("calcBox");
        if (!box) return;

        // Remove old content
        const old = document.getElementById("aura-tool-content");
        if (old) old.remove();

        // Build and insert new content
        const html = buildContent(toolName, fn);
        box.insertAdjacentHTML("beforeend", html);
    }

    function init() {
        if (typeof window.openTool !== "function") {
            // Retry in case scripts are still loading
            setTimeout(init, 300);
            return;
        }

        const originalOpenTool = window.openTool;

        window.openTool = function (fn, name, icon) {
            // Call original
            originalOpenTool.call(this, fn, name, icon);

            // Inject content after a short delay (after SPA has rendered)
            setTimeout(function () {
                injectContent(name, fn);
            }, 300);
        };
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
