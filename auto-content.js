// ═══════════════════════════════════════════════════════
// AURA VIP CONTENT ENGINE v5.0 — ULTRA ROBUST
// Handles SPA, Hash Change, DOM Mutation, and Re-injection
// ═══════════════════════════════════════════════════════

(function () {
    "use strict";

    const CONTENT_ID = "aura-vip-content";

    // ─── Get current tool key ───
    function getKey() {
        let hash = window.location.hash || "";
        let path = window.location.pathname || "";
        let key = hash.length > 1 ? hash.replace("#", "").toLowerCase() : path.split("/").pop().replace(".html", "").toLowerCase();
        const ignore = ["index", "universe", "about", "contact", "privacy", "terms", "disclaimer", "guide", "blog1", "tools-guide", "en-tools-guide", "ar-tools-guide", ""];
        if (ignore.includes(key)) return null;
        return key;
    }

    function fmt(key) {
        return key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }

    // ─── Category detection ───
    function cat(key) {
        const k = key.toLowerCase();
        if (/(zakat|nisab|fidya|fitra|qurbani|inheritance|prayer|qibla|hijri|ramadan|tasbih|dua|hadith|quran|islamic|names-of-allah)/.test(k)) return "islamic";
        if (/(loan|emi|mortgage|interest|gst|vat|compound|currency|gold|gratuity|salary|tax|investment|crypto|profit|zakat)/.test(k)) return "finance";
        if (/(bmi|calorie|health|water|body-fat|ideal-weight|fitness)/.test(k)) return "health";
        if (/(resume|cv|cover-letter|interview|job|career)/.test(k)) return "career";
        if (/(travel|flight|hotel|distance|time-zone|visa)/.test(k)) return "travel";
        if (/(gpa|percentage|marks|grade|student|exam)/.test(k)) return "education";
        return "general";
    }

    // ─── Unique content for top 10 tools ───
    const U = {
        "zakat-calculator": {
            c: "islamic",
            intro: "Zakat is the third pillar of Islam and one of the most important obligations upon every financially able Muslim. It represents a fixed portion (2.5%) of a Muslim's accumulated wealth that must be given annually to those in need. The AURA Zakat Calculator is designed to simplify this sacred obligation by computing your Zakat instantly and accurately — whether your wealth is in cash, gold, silver, business assets, or investments.",
            about: "This calculator follows the traditional Islamic ruling that Zakat becomes obligatory when a Muslim's wealth exceeds the Nisab threshold (equivalent to 87.48 grams of gold or 612.36 grams of silver) and remains above it for one complete lunar year (Hawl). Our tool respects these principles and provides results based on the Hanafi, Shafi'i, Maliki, and Hanbali schools of jurisprudence. It is used by thousands of Muslims in Saudi Arabia, the UAE, Pakistan, India, the UK, and around the world.",
            steps: ["Enter the total value of cash in your bank accounts and at home.", "Enter the current market value of gold you own.", "Enter the current market value of silver you own.", "Add the value of business inventory, stock, or trade goods.", "The calculator will automatically compute 2.5% of your total Zakatable wealth."],
            faqs: [
                { q: "What is the Nisab threshold for Zakat?", a: "Nisab is the minimum amount of wealth a Muslim must possess before Zakat becomes obligatory. It equals 87.48 grams of gold or 612.36 grams of silver. Most scholars recommend the silver Nisab as it benefits more people." },
                { q: "Is Zakat calculated on gross or net wealth?", a: "Zakat is calculated on net Zakatable wealth — after deducting your immediate debts and liabilities from your total assets." },
                { q: "Do I need to pay Zakat on my house and car?", a: "No, Zakat is not payable on your primary residence, personal car, or household furniture." },
                { q: "When should I pay Zakat?", a: "Zakat is due once a complete lunar year (Hawl) has passed. Many Muslims choose Ramadan for greater reward." }
            ]
        },
        "prayer-times": {
            c: "islamic",
            intro: "Salah (prayer) is the second pillar of Islam and the daily spiritual connection between a Muslim and Allah. Knowing exact prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha is essential for every Muslim. The AURA Prayer Times tool provides accurate daily timings based on your geographic location using internationally recognized astronomical methods.",
            about: "Our tool supports Umm al-Qura (Makkah), ISNA (North America), MWL (Muslim World League), Egyptian General Authority, and Karachi University calculation methods. It also supports both Hanafi and Shafi'i Asr calculation methods.",
            steps: ["Allow location access or enter your city manually.", "Select your preferred calculation method.", "Choose your Asr method (Hanafi or Shafi'i).", "View accurate prayer times for the entire day."],
            faqs: [
                { q: "How accurate are these prayer times?", a: "Calculated using internationally accepted astronomical formulas. Accurate to within 1-2 minutes." },
                { q: "Which method should I use?", a: "Umm al-Qura for Saudi Arabia, Egyptian for Africa, ISNA for North America, MWL for Europe, Karachi for South Asia." },
                { q: "Does it work offline?", a: "Yes, once loaded, calculations run entirely in your browser." }
            ]
        },
        "qibla-direction": {
            c: "islamic",
            intro: "The Qibla is the sacred direction every Muslim faces during Salah — towards the Holy Kaaba in Makkah. Knowing the correct direction is essential for valid prayer, whether you are in Riyadh, Karachi, London, or Sydney.",
            about: "This tool uses the great-circle formula to determine the shortest path from your GPS coordinates to the Kaaba (21.4225°N, 39.8262°E), providing the bearing in degrees from true north.",
            steps: ["Allow location access or enter your city.", "The tool calculates the exact bearing to the Kaaba.", "Rotate your phone until the compass points to that degree.", "You are now facing the Qibla."],
            faqs: [
                { q: "How accurate is this?", a: "Accurate to within 0.1 degrees using the great-circle formula — more accurate than most physical compasses." },
                { q: "Does my phone compass work correctly?", a: "Move away from metal, magnets, or electronics for best accuracy." }
            ]
        },
        "loan-emi-calculator": {
            c: "finance",
            intro: "The Loan EMI Calculator is a powerful financial tool that helps you calculate your Equated Monthly Installment (EMI) for any type of loan — home, car, personal, business, or education. It also provides a complete amortization breakdown.",
            about: "Understanding your EMI before taking a loan is essential for smart financial planning. Our calculator uses the standard formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly rate, and N is number of installments.",
            steps: ["Enter your loan amount.", "Enter the annual interest rate.", "Enter the loan tenure.", "View your monthly EMI, total interest, and total payment instantly."],
            faqs: [
                { q: "What is EMI?", a: "Equated Monthly Installment — the fixed amount you pay your lender every month until the loan is fully repaid." },
                { q: "How can I reduce my EMI?", a: "Make a larger down payment, choose a longer tenure, negotiate a lower rate, or improve your credit score." },
                { q: "What is an amortization schedule?", a: "A table showing how each EMI splits between principal and interest over the loan tenure." }
            ]
        },
        "hijri-converter": {
            c: "islamic",
            intro: "The Hijri (Islamic) calendar is a lunar calendar used by Muslims worldwide to determine Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, and Ashura. The AURA Hijri Converter converts Gregorian to Hijri and vice versa with high accuracy.",
            about: "The Islamic calendar begins with the Hijra — the migration of Prophet Muhammad (PBUH) from Makkah to Madinah in 622 CE. Our converter uses the Umm al-Qura and tabular Islamic calendars for reliable results.",
            steps: ["Choose conversion type: Gregorian→Hijri or Hijri→Gregorian.", "Enter your date.", "View the equivalent date instantly."],
            faqs: [
                { q: "Why does the Hijri date differ between countries?", a: "Dates depend on the actual sighting of the new moon, which can vary by 1-2 days." },
                { q: "Which calendar is used in Saudi Arabia?", a: "The Umm al-Qura calendar." }
            ]
        },
        "currency-converter": {
            c: "finance",
            intro: "The AURA Currency Converter provides fast, accurate conversion between all major world currencies — SAR, AED, USD, EUR, GBP, PKR, INR, and 150+ more.",
            about: "Whether you're traveling, doing international business, sending money abroad, or shopping from a foreign website, this tool helps you understand the real value of your money.",
            steps: ["Enter the amount.", "Select source and target currencies.", "View the converted amount instantly."],
            faqs: [
                { q: "How often are rates updated?", a: "Rates update regularly using live market data." },
                { q: "Which currencies are supported?", a: "All majors plus 150+ more." }
            ]
        },
        "gratuity-calculator": {
            c: "finance",
            intro: "The End of Service Gratuity Calculator is designed for employees in the GCC — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. It computes your end-of-service benefits per local labor law.",
            about: "In Saudi Arabia, gratuity is half a month's salary for the first 5 years and one full month's salary for each additional year.",
            steps: ["Enter your basic monthly salary.", "Enter years and months worked.", "Select your country.", "View your gratuity."],
            faqs: [
                { q: "Is gratuity on basic or total salary?", a: "In most GCC countries, gratuity is calculated on basic salary only." },
                { q: "What if I resign before 5 years?", a: "In Saudi Arabia: 1/3 gratuity after 2-5 years, 2/3 after 5-10 years, full after 10 years." }
            ]
        },
        "bmi-calculator": {
            c: "health",
            intro: "The Body Mass Index (BMI) Calculator helps you determine whether your weight is in a healthy range for your height. BMI is used worldwide as a screening tool for weight-related health risks.",
            about: "BMI is calculated by dividing weight in kilograms by height in meters squared. WHO: below 18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, 30+ obese.",
            steps: ["Select Metric or Imperial.", "Enter your height and weight.", "View your BMI and category."],
            faqs: [
                { q: "Is BMI accurate for everyone?", a: "It's a general screening tool. May not be accurate for athletes, pregnant women, children, or elderly." },
                { q: "What is a healthy BMI?", a: "18.5 to 24.9 is healthy by WHO standards." }
            ]
        },
        "tasbih-counter": {
            c: "islamic",
            intro: "The Digital Tasbih Counter is a modern replacement for traditional prayer beads. It helps you track Dhikr — SubhanAllah, Alhamdulillah, Allahu Akbar, or any other form.",
            about: "The Prophet (PBUH) said: \"The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, and Allahu Akbar.\"",
            steps: ["Choose a Dhikr phrase or set a custom target.", "Tap each time you recite.", "Track progress and reset at your goal."],
            faqs: [
                { q: "What is the best Dhikr?", a: "SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 34x after each prayer." },
                { q: "Can I use it for other purposes?", a: "Yes, for any counting task." }
            ]
        }
    };

    // ─── Category templates ───
    const T = {
        islamic: {
            intro: "The {TOOL} is a free, accurate, and easy-to-use Islamic tool designed to help Muslims worldwide fulfill their religious obligations with confidence. It follows authentic Islamic principles derived from the Quran and Sunnah.",
            about: "This tool has been carefully developed by the AURA Global Tools team to provide reliable results aligned with Islamic Shariah. Whether you are at home, at work, or traveling, this tool is available 24/7 at no cost.",
            steps: ["Open the tool on any device — mobile, tablet, or computer.", "Enter your information in the input fields.", "The tool instantly provides an accurate result."],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free with no hidden charges, no subscription, no sign-up required." },
                { q: "Is the result accurate?", a: "Yes, based on standard Islamic formulas accepted by scholars. For complex cases, consult a qualified Mufti." },
                { q: "Can I use it on mobile?", a: "Absolutely — fully responsive on all devices." },
                { q: "Is my data safe?", a: "Yes, all calculations happen in your browser. Nothing is stored or shared." }
            ]
        },
        finance: {
            intro: "The {TOOL} is a free, precise, professionally designed financial calculator that helps you make informed decisions about loans, investments, taxes, salaries, and money management. It uses the same formulas as banks and financial institutions.",
            about: "This financial tool is part of the AURA Global Tools collection, serving thousands of users daily across the Middle East, South Asia, Europe, and North America.",
            steps: ["Enter the required values in the input fields.", "Choose your currency if the option is available.", "View your result instantly.", "Adjust values to explore different scenarios."],
            faqs: [
                { q: "Is {TOOL} accurate?", a: "Yes, it uses standard financial formulas used by banks and accountants worldwide." },
                { q: "Is it free?", a: "Yes, completely free with no sign-up." },
                { q: "Can I use it for business?", a: "Yes, for personal or commercial decisions." },
                { q: "Which currencies are supported?", a: "SAR, AED, USD, EUR, GBP, PKR, INR, and more." }
            ]
        },
        health: {
            intro: "The {TOOL} is a free online health and wellness tool designed to help you track, monitor, and improve your health using scientifically validated formulas and WHO guidelines.",
            about: "Built on internationally recognized health standards, this tool is for informational purposes only and should not replace professional medical advice.",
            steps: ["Select your measurement unit.", "Enter your measurements.", "View your health metric instantly."],
            faqs: [
                { q: "Is {TOOL} medically accurate?", a: "Based on standard health formulas. Please consult a doctor for medical advice." },
                { q: "Is it free?", a: "Yes, 100% free." },
                { q: "Does it store my data?", a: "No, all calculations happen in your browser." }
            ]
        },
        career: {
            intro: "The {TOOL} is a free career tool designed to help job seekers, students, and professionals advance their careers — from resume building to interview preparation.",
            about: "Part of AURA Global Tools, this tool is optimized for the Gulf job market, South Asia, Europe, and North America.",
            steps: ["Fill in the required fields with your career information.", "The tool generates your result instantly.", "Copy, download, or print as needed."],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free." },
                { q: "Is it ATS-friendly?", a: "Yes, follows modern Applicant Tracking System best practices." },
                { q: "Can I use it for Gulf jobs?", a: "Yes, optimized for KSA, UAE, Qatar, Kuwait, and GCC." }
            ]
        },
        travel: {
            intro: "The {TOOL} is a free travel utility that helps travelers plan better trips, calculate distances, convert time zones, and manage travel logistics easily.",
            about: "Designed for global travelers, this tool works from anywhere — especially useful between the Gulf, South Asia, Europe, and North America.",
            steps: ["Enter your travel information.", "View the result instantly.", "Use it for your travel planning."],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free." },
                { q: "Does it work worldwide?", a: "Yes, globally." }
            ]
        },
        education: {
            intro: "The {TOOL} is a free educational tool that helps students, teachers, and parents calculate grades, GPA, percentages, and academic metrics accurately.",
            about: "Follows standard academic formulas used by schools, colleges, and universities worldwide.",
            steps: ["Enter your marks or grades.", "View your result instantly."],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, completely free." },
                { q: "Does it work for university students?", a: "Yes, for high school, college, and university." }
            ]
        },
        general: {
            intro: "The {TOOL} is a free, fast, and reliable online tool designed to help you get instant results for everyday tasks. It works on any device — no download, no registration, no fees.",
            about: "Part of AURA Global Tools, a collection of 300+ free online utilities trusted by users worldwide.",
            steps: ["Open the tool on your device.", "Enter the required information.", "Get your instant result."],
            faqs: [
                { q: "Is {TOOL} free?", a: "Yes, 100% free with no hidden charges." },
                { q: "How do I use it?", a: "Enter your values in the input fields — result appears instantly." },
                { q: "Does it work on mobile?", a: "Yes, fully responsive on all devices." },
                { q: "Is my data safe?", a: "Yes, nothing is stored — all processing happens in your browser." }
            ]
        }
    };

    // ─── Build HTML ───
    function buildFAQs(faqs, tool) {
        return faqs.map(f => `
            <details style="margin-bottom:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 16px;">
                <summary style="color:#fbbf24;font-weight:600;font-size:14px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;">
                    <span>Q: ${f.q.replace(/\{TOOL\}/g, tool)}</span>
                    <span style="color:#fbbf24;font-size:18px;">+</span>
                </summary>
                <p style="color:#cbd5e1;font-size:13px;line-height:1.8;margin-top:10px;margin-bottom:0;">${f.a.replace(/\{TOOL\}/g, tool)}</p>
            </details>`).join("");
    }

    function buildSteps(steps) {
        return steps.map((s, i) => `
            <li style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
                <span style="background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#000;min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;">${i + 1}</span>
                <span style="color:#cbd5e1;font-size:14px;line-height:1.7;padding-top:3px;">${s}</span>
            </li>`).join("");
    }

    function buildHTML(key) {
        const tool = fmt(key);
        let data = U[key];
        if (!data) {
            const c = cat(key);
            const tpl = T[c] || T.general;
            data = {
                intro: tpl.intro.replace(/\{TOOL\}/g, tool),
                about: tpl.about.replace(/\{TOOL\}/g, tool),
                steps: tpl.steps.map(s => s.replace(/\{TOOL\}/g, tool)),
                faqs: tpl.faqs
            };
        }
        const faqHTML = buildFAQs(data.faqs, tool);
        const stepHTML = buildSteps(data.steps);

        return `
        <section id="${CONTENT_ID}" style="max-width:900px;margin:40px auto 40px;padding:0 18px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;color:#e2e8f0;">
            <div style="background:linear-gradient(135deg,rgba(251,191,36,0.08),rgba(251,191,36,0.02));border:1px solid rgba(251,191,36,0.25);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 16px 0;">📘 About ${tool}</h2>
                <p style="font-size:15px;line-height:1.85;color:#d1d5db;margin:0 0 16px 0;">${data.intro}</p>
                <p style="font-size:15px;line-height:1.85;color:#d1d5db;margin:0;">${data.about}</p>
            </div>
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 20px 0;">🛠️ How to Use ${tool}</h2>
                <ol style="list-style:none;padding:0;margin:0;">${stepHTML}</ol>
            </div>
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px 24px;margin-bottom:24px;">
                <h2 style="color:#fbbf24;font-size:22px;margin:0 0 20px 0;">❓ Frequently Asked Questions</h2>
                ${faqHTML}
            </div>
            <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.2);border-radius:14px;padding:16px 20px;font-size:13px;color:#94a3b8;line-height:1.7;">
                <strong style="color:#60a5fa;">📌 Note:</strong> ${tool} is provided free by AURA Global Tools. Results are for informational purposes. For critical decisions, consult a qualified professional.
            </div>
        </section>`;
    }

    // ─── INJECTION LOGIC ───
    function inject() {
        const key = getKey();
        if (!key) {
            // If not on a tool page, remove content
            const old = document.getElementById(CONTENT_ID);
            if (old) old.remove();
            return;
        }

        // Remove old content first
        const old = document.getElementById(CONTENT_ID);
        if (old) old.remove();

        const html = buildHTML(key);

        // Try multiple injection points
        const selectors = ["#toolContainer", ".tool-container", "#tool-content", ".tool-content", "main", ".container", ".content", "#app", ".app"];
        let injected = false;
        for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el) {
                el.insertAdjacentHTML("beforeend", html);
                injected = true;
                break;
            }
        }

        // Fallback: before footer
        if (!injected) {
            const footer = document.querySelector("footer");
            if (footer && footer.parentNode) {
                footer.insertAdjacentHTML("beforebegin", html);
                injected = true;
            }
        }

        // Final fallback: body end
        if (!injected) {
            document.body.insertAdjacentHTML("beforeend", html);
        }
    }

    // ─── WATCHER: Re-inject if content gets wiped by SPA ───
    let lastKey = "";
    let lastInjectTime = 0;

    function watch() {
        const key = getKey();
        const contentExists = document.getElementById(CONTENT_ID);
        const now = Date.now();

        // Re-inject if:
        // 1. Key changed (user switched tools)
        // 2. Content was removed (SPA wiped it)
        // 3. It's been more than 2 seconds since last inject (safety)
        if (key && key !== lastKey) {
            lastKey = key;
            setTimeout(inject, 100);
            lastInjectTime = now;
        } else if (key && !contentExists && (now - lastInjectTime > 800)) {
            // Content disappeared — re-inject
            inject();
            lastInjectTime = now;
        }
    }

    // Run watcher every 600ms
    setInterval(watch, 600);

    // Also run on load
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(inject, 300));
    } else {
        setTimeout(inject, 300);
    }

    // And on hash change
    window.addEventListener("hashchange", () => setTimeout(inject, 200));

})();
