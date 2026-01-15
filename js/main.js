// ==========================================
// 1. عداد العد التنازلي (Countdown Timer)
// ==========================================
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    if (document.querySelector(".days")) document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    if (document.querySelector(".hours")) document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    if (document.querySelector(".minutes")) document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    if (document.querySelector(".seconds")) document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// ==========================================
// 2. تحريك أشرطة المهارات (Skills Progress)
// ==========================================
let progressSpans = document.querySelectorAll(".the-progress span");
let skillsSection = document.querySelector(".our-skills");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressSpans.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        } else {
            progressSpans.forEach((span) => {
                span.style.width = "0";
            });
        }
    });
}, { threshold: 0.2 });

if (skillsSection) skillsObserver.observe(skillsSection);

// ==========================================
// 3. أنميشن ضم العناوين (Main Title Observer)
// ==========================================
// الكود ده بيخلي النقطتين يضموا على بعض أول ما توصل للعنوان
const mainTitles = document.querySelectorAll(".main-title");
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.5 });

mainTitles.forEach(title => titleObserver.observe(title));

// ==========================================
// 4. عداد الأرقام الإحصائية (Stats Increase)
// ==========================================
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
    // تشغيل عداد الأرقام عند الوصول لقسم الإحصائيات
    if (statsSection && window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}



// بدايه غلاف الفيديو 
/* تأثير الآلة الكاتبة لموقع عطر الشرق */

const titleText = "مرحبا بكم فى عطر الشـرق";
const descText = '"عطر الشرق.. نفحات تأخذك في رحلة عبر الزمن، لتبقى ذكراك خالدة في كل مكان. بصمة عطرية تتحدث عنك قبل أن تتكلم، وتترك أثراً لا يمحوه الغياب."';

function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    // تأكد إن العنصر موجود في الصفحة قبل ما تبدأ
    if (element) {
        element.innerHTML = ""; // تصفير المحتوى قبل البدء
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }
}

// تشغيل الكود بمجرد تحميل الصفحة
window.addEventListener("load", () => {
    // سرعة كتابة العنوان 100 ملي ثانية
    typeWriter(titleText, "typewriter-h1", 100, () => {
        // سرعة كتابة الوصف 50 ملي ثانية (أسرع شوية عشان طويل)
        typeWriter(descText, "typewriter-p", 50);
    });
});

// نهايه الغلاف 

// ============================================================
// 1. مصفوفة العطور الشاملة (290 عطر)
// ============================================================
// ============================================================
// المخزن الشامل والنهائي لكافة أنواع عطور "عطر الشرق" 🌙
// ============================================================
window.allPerfumes = [
    // --- مجموعة عطور شرقية فاخرة ---
    "أربابورا", "ارمانى بلاك وود", "تراب الذهب", "العربية للعود", "بلاك أفغانو", "القمر الأزرق", "الحجر الإسود", "رسالة (العربية للعود)", "360 (العربية للعود)", "سلطان العطور", "السويداء", "المدينة المنورة", "مخلط الحجاز", "مخلط الفجر", "خلطه القرشي", "حراء", "دعاء الجنة", "شهرة", "شيخ الشباب", "وصال", "عنبر ملوكى", "زهرة الخليج", "ناكسوس زرجوف", "عطر الجمعة", "فواكه سعودى", "مضاوي", "مسك ابيض", "مسك ابيض متسلق", "مسك الكعبة", "مسك انجليزى", "مسك روز", "مسك شيخه", "مسك عربى", "مسك الذهب", "مسك الصحراء", "مسك كارميل", "عود ابيض", "عود روز", "عود بوكية", "عود مود", "عروق العود", "عود عمانى", "عود كشخه", "عود ليالى الشموع", "عود فورجريتنس", "عود كمبودى", "عود راكان", "جوتشي عود", "عود السلطان", "جولدن عود", "بلاك عود", "عود الحرمين", "عود مبخر",

    // --- مجموعة عطور رجالي ---
    "اكوا دي جو", "اكزريوس روج", "انجلز ذا شير", "امريكانا سبورت", "اسكلبشر", "اسكيب", "انجل", "اماريج", "اترنتى", "اكوا دي ارمانى", "اوبن", "التراميل", "انا والشوق", "اسمياكى", "انفكتوس", "ازارو ونتيد", "اربابورا", "اسنشيال سبورت", "ايكون جولد", "ايكون دنهل", "بلاك اوركيد", "بوص انموشن", "بوص وايت", "بلاى فور هوم", "بلو سبورت", "بلاك اكس اس", "بوما سبورت", "بلاك ليجزس", "بيانكو لاتيه", "باى جفينشى", "بيور اكس اس", "باد بوى", "بلاك افغانو", "بوص ذا سنت", "براوندا", "بومب شيل", "بى ام دبليو B.M.W", "تومى هيل", "تومى فريدوم", "توى بوى", "جوب", "جاجوار جرين", "جورج قرداحى", "جوب جامب", "جان بول", "جولد", "جاجوار بلاك", "جيمى شو", "دنهل ديزاير", "دنهل", "دنهل لندن", "دنهل برسويت", "دنهل فريش", "ديزاير بلو", "ديزل بلاك", "دراكار", "دبل سيجار", "درهم", "ديور هوم", "روشاز", "ريد توباكو", "روبيرتو كافلى", "سلفر سنت", "سلفر شادو", "سلفر بلو", "سوفاج", "سوفاج الكسير", "سيجار", "سيكسى سول", "شاليز", "شامبيون دافى دوف", "شوكولاته وايت", "شوكولاته بلاك", "شبسيدو ذن مان", "شروتى", "شانيل بلاتنيوم", "شغف", "فندى", "فوياج", "فنكراتش", "فولد كالت", "فوديكا", "فهرنهايت", "فرى سكس ناو", "فياجرا", "فانتوم", "فرزاتشي ايروس", "فلانتينو بورن ان روما", "كريد ايفنتوس", "كريد بلاك", "كول وتر بلو", "كاريزما", "كروم ليجاند", "كوستا ازارو", "كيركي", "كريد سلفر", "كول وتر مان", "كى", "لابيدوس", "لاكوست اسنشيال", "لاكوست وايت", "لاكوست جرين", "لاكوست يلو", "لومال ان بورن", "ليبرا", "ماربرت مان", "مرسيدس", "مضاوى", "مون بلو ليجاند", "مالديف", "ميجا مار", "هوجو بوص 51", "هوجو ريد", "هوجو انيرجى", "هوجو اكس واى", "هوجو بلاك", "هوجو بوص سنت", "هريرا 212", "هريرا برلمنتى", "هريرا اولد", "هامر", "هيروس 212", "وان مليون", "وان مان شو", "وان مليون برايف", "وايت ليجزس", "وايت سلفر", "نيو سلفر", "نيو سبايس بوم اكسترينم", "نيو بوص", "نينا ريتش", "نيشان", "C.k", "212 vip", "C.H", "212 Sexy", "X.L", "3G",

    // --- مجموعة عطور حريمي راقية ---
    "اسكادا سبشيال", "اسكادا جرافيك", "اسكادا ماجناتزيوم", "اسكادا كوليكشن", "اسكادا شيرى", "اوشن لونج", "ايفوريا سى كى", "ايفوريا جولد", "اورجانزا", "ارامس", "اسنشوال", "اكلير لطافه", "امواج", "ايلى صعب", "ازارو جيرل", "اوليمبيا", "الف ليله وليله", "باد جيرل", "بيور بيوتى", "بيبى دول", "باريس هيلتون", "بينك شوجر", "بيوتى ومان", "بربراى", "باربريز", "بلاك اوبميوم", "بريتنى سبيرز", "بكرات روج", "بون بون", "توسكا", "تاتش لاكوست", "تندر", "توباكو فانيليا", "جوتشي رش", "جوتشي جوتشي", "جادور", "جود جيرل", "جوتشي بلوم", "دولسى جابانا", "رويال", "رومبا", "راش فيكتوريا", "ريتشي ريتشي", "رومانس", "روز ذا وان", "سباركل نايت", "سيكسى لوف", "سكاندل", "سيكسى ليتل", "سو سكاندل", "سيكسي دي جى 5", "شمس الامارات", "شاليز", "شوكولاته", "فلاور جوتشي", "فاراواى", "فرست هاواى", "فانيليا", "فانتاستيك", "فانيليا روبى", "فيكتوريا انجل", "فيكتوريا سيكريت", "فيكتوريا سيكرت شارم", "قصه حب", "كنزو", "كنزو فلاور", "كوبرا", "كابوتين بنادورا", "كاسيليا", "كوكو نات", "كوكو شانيل", "كريزى لوف", "مون سباركل", "ميد نايت", "مونتانا", "ماى واى", "مانسيرا روز فانيليا", "لافى اي بيل", "لاف اذ هيففينلى", "لافى بيل روز", "لاف ان باريس", "لايف لاكوست", "لابيل جان بول", "ليالى الحلمية", "ليدى مليون", "نيشاني", "نرسيكو", "هوت كوتيور", "هوجو ومان", "يك إند", "يارا",

    // --- مجموعة عالم المسك والزهور الطبيعية ---
    "ورد بلدى", "ورد تركى", "فل", "ياسمين", "ميس ديور", "زهرة اللافندر", "الورد الطائفى", "لوتس", "زهور الريف", "البنفسج", "نرسيسو فلاور", "زهرة الأوركيد", "مسك رومان", "مسك بطيخ", "مسك توت", "مسك بودر", "مسك الجسم", "مسك لافندر", "مسك لافندر ياسمين", "مسك بودر لافندر ياسمين", "مسك هاتون", "مسك الطهاره", "مسك الورد"
];

// ============================================================
// 2. بوب آب أقسام العطور - وظائف المودال وعرض الأنواع
// ============================================================
let currentPerfumes = [];

function openModal(title, namesString) {
    const modalTitle = document.getElementById('modalTitle');
    const modal = document.getElementById('perfumeModal');
    if (modalTitle) modalTitle.innerText = title;
    currentPerfumes = namesString.split('،').map(item => item.trim());
    const searchInput = document.getElementById('perfumeSearch');
    if (searchInput) searchInput.value = "";
    displayPerfumes(currentPerfumes);
    if (modal) modal.style.display = "block";
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) { modalBody.scrollTop = 0; }
}

function displayPerfumes(list) {
    const container = document.getElementById('perfumeListContainer');
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:gray; padding:20px;'>لا يوجد نتائج مطابقة للبحث</p>";
        return;
    }
    container.innerHTML = list.map(name => `<span class="perfume-item">${name}</span>`).join('');
}

function filterPerfumes() {
    const query = document.getElementById('perfumeSearch').value.toLowerCase();
    const filtered = currentPerfumes.filter(name => name.toLowerCase().includes(query));
    displayPerfumes(filtered);
}

// ============================================================
// 1. تعريف قائمة العطور (منع الأرور وتفعيل الاقتراحات)
// ============================================================
if (typeof allPerfumes === 'undefined') {
    window.allPerfumes = [
        "ورد طائفي", "عطر الفخامة", "مسك الشرق", "عود ملكي",
        "بصمة عطر", "صندل شرقي", "عنبر وجلود", "ليالي الشرق"
    ];
}

// ============================================================
// 2. نظام الاقتراحات أثناء الكتابة (Search Suggestions)
// ============================================================
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('perfume-input')) {
        const input = e.target;
        const container = input.parentElement.querySelector('.suggestions-container');
        const query = input.value.toLowerCase().trim();
        
        if (query.length < 1) {
            if (container) container.style.display = 'none';
            return;
        }

        const matches = allPerfumes
            .filter(p => p.toLowerCase().includes(query))
            .sort()
            .slice(0, 10);

        if (container) {
            if (matches.length > 0) {
                container.innerHTML = matches.map(m => `<div class="suggestion-item" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">${m}</div>`).join('');
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('suggestion-item')) {
        const input = e.target.parentElement.parentElement.querySelector('.perfume-input');
        input.value = e.target.innerText;
        e.target.parentElement.style.display = 'none';
    } else {
        document.querySelectorAll('.suggestions-container').forEach(c => c.style.display = 'none');
    }
});

// ============================================================
// 3. وظيفة إضافة عطر آخر (دي اللي كانت ناقصة وموقفة الزرار)
// ============================================================
function addAnotherPerfume() {
    const container = document.getElementById('perfumeItems');
    if (!container) return;
    
    const newItem = document.createElement('div');
    newItem.className = 'perfume-item';
    newItem.style.cssText = "border-bottom: 1px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px; margin-top: 10px; position: relative;";
    
    newItem.innerHTML = `
        <input class="input perfume-input" type="text" placeholder="إسم العطر" name="perfume_name[]" autocomplete="off" required />
        <div class="suggestions-container" style="position: absolute; background: white; z-index: 1000; width: 100%; border: 1px solid #ddd; display:none;"></div>
        <select class="input" name="size[]" required style="cursor: pointer; margin-top: 5px;">
            <option value="" disabled selected>إختر حجم العطر</option>
            <option value="بلية صغيرة">بلية صغيرة</option>
            <option value="بلية وسط">بلية وسط</option>
            <option value="بلية كبيرة">بلية كبيرة</option>
            <option value="20 مللى">20 مللى</option>
            <option value="30 مللى">30 مللى</option>
            <option value="50 مللى">50 مللى</option>
            <option value="100 مللى">100 مللى</option>
        </select>
        <button type="button" onclick="this.parentElement.remove()" style="color: red; border: none; background: none; cursor: pointer; font-size: 13px; display: block; margin-top: 5px;"> حذف الصنف × </button>
    `;
    container.appendChild(newItem);
}

// ============================================================
// 4. بوب آب عمل طلب شراء وإرسال البيانات
// ============================================================
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.onsubmit = function (e) {
        e.preventDefault();

        const submitBtn = orderForm.querySelector('input[type="submit"]');
        const originalValue = submitBtn.value;

        submitBtn.value = "جاري إرسال طلبك...";
        submitBtn.disabled = true;

        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                const successModal = document.getElementById("successModal");
                if (successModal) successModal.style.display = "flex"; 
                this.reset();
                const items = document.getElementById('perfumeItems');
                if (items) {
                    while (items.children.length > 1) { 
                        items.removeChild(items.lastChild); 
                    }
                }
            } else {
                alert("حدث خطأ، حاول مرة أخرى.");
            }
        })
        .catch(() => alert("تأكد من اتصالك بالإنترنت."))
        .finally(() => {
            submitBtn.value = originalValue;
            submitBtn.disabled = false;
        });
    };
}
// ============================================================
// 5. وظائف عامة وقفل المودالات
// ============================================================
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function closeSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) modal.style.display = "none";
}

window.onclick = function (event) {
    const perfumeModal = document.getElementById('perfumeModal');
    const offerModal = document.getElementById('offerModal');
    const successModal = document.getElementById('successModal');
    const featureModal = document.getElementById('featureModal');
    if (event.target == perfumeModal) perfumeModal.style.display = "none";
    if (event.target == offerModal) offerModal.style.display = "none";
    if (event.target == successModal) successModal.style.display = "none";
    if (event.target == featureModal) featureModal.style.display = "none";
}

function openFeatureModal(title, description) {
    document.getElementById("featureTitle").innerText = title;
    document.getElementById("featureDescription").innerText = description;
    document.getElementById("featureModal").style.display = "block";
}


// بوباب العرض وعمل شراء عرض
// ============================================================
// كود العروض الخاصة لموقع عطر الشرق 🌙
// ============================================================

// 1. وظيفة فتح نافذة العرض وكتابة نوعه تلقائياً
function openOfferModal(offerName) {
    const modal = document.getElementById('offerModal');
    const offerInput = document.getElementById('offerNameInput');
    
    if (modal && offerInput) {
        offerInput.value = offerName; // وضع اسم العرض (مثلاً: الثنائي المميز) في الخانة المخفية
        modal.style.display = 'flex'; // إظهار النافذة في نص الشاشة
    }
}

// 2. وظيفة إغلاق المودال
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// 3. إرسال فورم العروض (Fetch) لضمان بقاء العميل في الصفحة
document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.onsubmit = function (e) {
            e.preventDefault(); // منع المتصفح من الخروج من الموقع
            
            const btn = document.getElementById('offerSubmitBtn');
            const originalText = btn.innerText;
            
            // تغيير حالة الزرار أثناء الإرسال
            btn.disabled = true;
            btn.innerText = "جاري الإرسال...";
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    closeModal('offerModal'); // قفل نافذة العرض
                    // إظهار رسالة النجاح اللي إنت صممتها (successModal)
                    const successModal = document.getElementById('successModal');
                    if (successModal) successModal.style.display = 'flex';
                    
                    this.reset(); // تفريغ الخانات للطلب الجاي
                } else {
                    alert("حدث خطأ، حاول مرة أخرى.");
                }
            })
            .catch(() => alert("تأكد من اتصالك بالإنترنت."))
            .finally(() => {
                btn.disabled = false;
                btn.innerText = originalText;
            });
        };
    }
});

// 1. وظيفة فتح المودال وسحب اسم العرض
function openOfferModal(offerName) {
    const modal = document.getElementById('offerModal');
    const offerInput = document.getElementById('offerNameInput');
    if (modal && offerInput) {
        offerInput.value = offerName;
        modal.style.display = 'flex'; // لضمان التوسيط
    }
}

// 2. وظيفة إغلاق المودال
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// 3. كود الإرسال الاحترافي (Fetch)
document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.onsubmit = function (e) {
            e.preventDefault(); // العميل هيفضل في نفس مكانه في الموقع
            
            const btn = document.getElementById('offerSubmitBtn');
            btn.disabled = true;
            btn.innerText = "جاري الإرسال...";
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    closeModal('offerModal');
                    // إظهار رسالة النجاح (successModal)
                    const successModal = document.getElementById('successModal');
                    if (successModal) successModal.style.display = 'flex';
                    this.reset();
                } else {
                    alert("حدث خطأ، حاول مرة أخرى.");
                }
            })
            .catch(() => alert("تأكد من اتصالك بالإنترنت."))
            .finally(() => {
                btn.disabled = false;
                btn.innerText = "تأكيد طلب العرض";
            });
        };
    }
});

// نهايه العروض

