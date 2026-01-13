// ==========================================
// 1. عداد العد التنازلي (Countdown Timer)
// ==========================================

// تحديد تاريخ النهاية (تم تحديثه لعام 2026 لضمان العمل)
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

let counter = setInterval(() => {
    // جلب وقت اللحظة الحالية
    let dateNow = new Date().getTime();

    // حساب الفرق بين وقت النهاية والوقت الحالي
    let dateDiff = countDownDate - dateNow;

    // حساب الأيام والساعات والدقائق والثواني
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    // عرض الأرقام في الصفحة مع إضافة 0 لو الرقم أقل من 10
    if (document.querySelector(".days")) document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    if (document.querySelector(".hours")) document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    if (document.querySelector(".minutes")) document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    if (document.querySelector(".seconds")) document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // وقف العداد لو التاريخ انتهى
    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);




// ==========================================
// 2. تحريك أشرطة المهارات (Skills Progress)
// ==========================================
// تم التعديل لنظام Observer ليعمل "رايح جاي" عند الصعود والنزول

let progressSpans = document.querySelectorAll(".the-progress span");
let skillsSection = document.querySelector(".our-skills");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // عند الوصول للسيكشن: املأ الأشرطة
            progressSpans.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        } else {
            // عند الخروج من السيكشن: صفر الأشرطة لتكرار الحركة
            progressSpans.forEach((span) => {
                span.style.width = "0";
            });
        }
    });
}, { threshold: 0.2 }); // يبدأ العمل عند ظهور 20% من القسم

if (skillsSection) skillsObserver.observe(skillsSection);




// ==========================================
// 3. عداد الأرقام الإحصائية (Stats Increase)
// ==========================================

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // متغير للتأكد أن العداد لم يبدأ بعد

window.onscroll = function () {
    // تشغيل عداد الأرقام عند الوصول لقسم الإحصائيات
    if (statsSection && window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

// دالة زيادة الرقم تدريجياً
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal); // توزيع الوقت بناءً على الرقم المطلوب الوصول إليه
}




// ============================================================
// 1. مصفوفة العطور الشاملة (290 عطر) - تستخدم في الاقتراحات الذكية
// ============================================================

const allPerfumes = [
    // حرف الألف
    "أربابورا", "ارمانى بلاك وورد", "اكوا دي جو", "اكزريوس روج", "انجلز ذا شير", "امريكانا سبورت", "اسكلبشر", "اسكيب", "انجل", "اماريج", "اترنتى", "اكوا دي ارمانى", "ازارو ونتيد", "اربابورا", "اسنشيال سبورت", "ايكون جولد", "ايكون دنهل", "اسمياكى", "انفكتوس", "ايفوريا سى كى", "ايفوريا جولد", "اورجانزا", "ارامس", "اسنشوال", "اكلير لطافه", "امواج", "ايلى صعب", "ازارو جيرل", "اوليمبيا", "الف ليله وليله", "اوشن لونج", "اسكادا سبشيال", "اسكادا جرافيك", "اسكادا ماجناتزيوم", "اسكادا كوليكشن", "اسكادا شيرى",
    // حرف الباء
    "بلاك أفغانو", "بلاك اوركيد", "بوص انموشن", "بوص وايت", "بلاى فور هوم", "بلو سبورت", "بلاك اكس اس", "بوما سبورت", "بلاك ليجزس", "بيانكو لاتيه", "باى جفينشى", "بيور اكس اس", "باد بوى", "بوص ذا سنت", "براوندا", "بومب شيل", "بى ام دبليو B.M.W", "باد جيرل", "بيور بيوتى", "بيبى دول", "باريس هيلتون", "بينك شوجر", "بيوتى ومان", "بربراى", "باربريز", "بلاك اوبميوم", "بريتنى سبيرز", "بكرات روج", "بون بون", "البنفسج",
    // حرف التاء والجيم
    "تراب الذهب", "تومى هيل", "تومى فريدوم", "توى بوى", "توسكا", "تاتش لاكوست", "تندر", "توباكو فانيليا", "جوب", "جاجوار جرين", "جورج قرداحى", "جوب جامب", "جان بول", "جولد", "جاجوار بلاك", "جيمى شو", "جادور", "جود جيرل", "جوتشي رش", "جوتشي جوتشي", "جوتشي بلوم", "جوتشي عود", "جولدن عود",
    // حرف الدال والراء والسين
    "درهم", "دنهل ديزاير", "دنهل", "دنهل دنهل لندن", "دنهل برسويت", "دنهل فريش", "ديزاير بلو", "ديزل بلاك", "دراكار", "دبل سيجار", "ديور هوم", "دولسى جابانا", "دعاء الجنة", "رسالة (العربية للعود)", "رويال", "رومبا", "راش فيكتوريا", "ريتشي ريتشي", "رومانس", "روز ذا وان", "روشاز", "ريد توباكو", "روبيرتو كافلى", "سلطان العطور", "السويداء", "سلفر سنت", "سلفر شادو", "سلفر بلو", "سوفاج", "سوفاج الكسير", "سيجار", "سيكسى سول", "سباركل نايت", "سيكسى لوف", "سكاندل", "سيكسى ليتل", "سو سكاندل", "سيكسي دي جى 5",
    // حرف الشين والعين والفاء
    "شهره", "شيخ الشباب", "شاليز", "شامبيون دافى دوف", "شوكولاته وايت", "شوكولاته بلاك", "شبسيدو ذن مان", "شروتى", "شانيل بلاتنيوم", "شغف", "شمس الامارات", "العربية للعود", "عنبر ملوكى", "عطر الجمعه", "عروق العود", "عود ابيض", "عود روز", "عود بوكية", "عود مود", "عروق العود", "عود عمانى", "عود كشخه", "عود ليالى الشموع", "عود فورجريتنس", "عود كمبودى", "عود راكان", "عود السلطان", "عود الحرمين", "عود مبخر", "فواكه سعودى", "فندى", "فوياج", "فنكراتش", "فولد كالت", "فوديكا", "فهرنهايت", "فرى سكس ناو", "فياجرا", "فانتوم", "فرزاتشي ايروس", "فلانتينو بورن ان روما", "فلاور جوتشي", "فاراواى", "فرست هاواى", "فانيليا", "فانتاستيك", "فانيليا روبى", "فيكتوريا انجل", "فيكتوريا سيكريت", "فيكتوريا سيكرت شارم", "فل",
    // حرف القاف والكاف واللام
    "القمر الأزرق", "قصه حب", "كريد ايفنتوس", "كريد بلاك", "كول وتر بلو", "كاريزما", "كروم ليجاند", "كوستا ازارو", "كيركي", "كريد سلفر", "كول وتر مان", "كى", "كنزو", "كنزو فلاور", "كريزى لوف", "كوبرا", "كابوتين بنادورا", "كاسيليا", "كوكو نات", "كوكو شانيل", "لابيدوس", "لاكوست اسنشيال", "لاكوست وايت", "لاكوست جرين", "لاكوست يلو", "لومال ان بورن", "ليبرا", "لافى اي بيل", "لاف اذ هيففينلى", "لافى بيل روز", "لاف ان باريس", "لايف لاكوست", "لابيل جان بول", "ليالى الحلمية", "ليدى مليون", "لوتس",
    // حرف الميم والنون والهو والياء
    "المدينة المنورة", "مخلط الحجاز", "مخلط الفجر", "خلطه القرشي", "مضاوي", "مسك ابيض", "مسك ابيض متسلق", "مسك الكعبة", "مسك انجليزى", "مسك روز", "مسك شيخه", "مسك عربى", "مسك الذهب", "مسك الصحراء", "مسك كارميل", "مسك رمان", "مسك بطيخ", "مسك توت", "مسك بودر", "مسك الجسم", "مسك لافندر", "مسك لافندر ياسمين", "مسك بودر لافندر ياسمين", "مسك هاتون", "مسك الطهاره", "مسك الورد", "ماربرت مان", "مرسيدس", "مون بلو ليجاند", "مالديف", "ميجا مار", "مون سباركل", "ميد نايت", "مونتانا", "ماى واى", "مانسيرا روز فانيليا", "ناكسوس زرجوف", "نيو سلفر", "حراء", "هوجو بوص 51", "هوجو ريد", "وان مليون", "وان مان شو", "يارا", "ياسمين", "360 (العربية للعود)"
];




// ============================================================
// 2. بوب آب أقسام العطور - وظائف المودال وعرض الأنواع
// ============================================================

let currentPerfumes = []; // وعاء لحفظ العطور عند الفتح

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

// قفل المودال عند الضغط خارجه
window.onclick = function (event) {
    const modal = document.getElementById('perfumeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// ============================================================
// 3. بوب آب عمل طلب شراء - الاقتراحات وإضافة الأصناف والإرسال
// ============================================================

// وظيفة إظهار الاقتراحات الشيك أثناء الكتابة في الفورم
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('perfume-input')) {
        const input = e.target;
        const container = input.parentElement.querySelector('.suggestions-container');
        const query = input.value.toLowerCase().trim();

        if (query.length < 1) {
            if (container) container.style.display = 'none';
            return;
        }

        const matches = [...new Set(allPerfumes)]
            .filter(p => p.toLowerCase().includes(query))
            .sort()
            .slice(0, 15);

        if (container) {
            if (matches.length > 0) {
                container.innerHTML = matches.map(m => `<div class="suggestion-item">${m}</div>`).join('');
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    }
});

// وظيفة اختيار العطر من الاقتراحات
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('suggestion-item')) {
        const suggestionItem = e.target;
        const container = suggestionItem.parentElement;
        const input = container.parentElement.querySelector('.perfume-input');

        input.value = suggestionItem.innerText;
        container.style.display = 'none';
    } else {
        document.querySelectorAll('.suggestions-container').forEach(c => c.style.display = 'none');
    }
});

// وظيفة إضافة عطر آخر للطلب
function addAnotherPerfume() {
    const container = document.getElementById('perfumeItems');
    if (!container) return;

    const newItem = document.createElement('div');
    newItem.className = 'perfume-item';
    newItem.style.cssText = "border-bottom: 1px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px; margin-top: 10px; position: relative;";

    newItem.innerHTML = `
        <input class="input perfume-input" type="text" placeholder="إسم العطر" name="perfume_name[]" autocomplete="off" required />
        <div class="suggestions-container"></div>
        <select class="input" name="size[]" required style="cursor: pointer;">
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

// كود إرسال طلب الشراء (FormSubmit)
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
                document.getElementById("successModal").style.display = "block";
                this.reset();
                const items = document.getElementById('perfumeItems');
                while (items.children.length > 1) { items.removeChild(items.lastChild); }
            } else { alert("حدث خطأ، حاول مرة أخرى."); }
        })
        .finally(() => {
            submitBtn.value = originalValue;
            submitBtn.disabled = false;
        });
    };
}




// ============================================================
// 4. بوب آب العروض الخاصة - وظائف طلب العروض المميزة
// ============================================================

function openOfferModal(offerName) {
    const form = document.getElementById('offerForm');
    if (form) form.reset();

    const offerInput = document.getElementById('offerNameInput');
    if (offerInput) offerInput.value = offerName;

    document.getElementById('offerModal').style.display = 'block';
}

// المحرك الرئيسي للعروض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.addEventListener('submit', function (e) {
            e.preventDefault();
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
                    document.getElementById('successModal').style.display = 'block';
                    this.reset();
                }
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerText = "تأكيد طلب العرض";
            });
        });
    }
});




// ============================================================
// 5. وظائف عامة - إغلاق المودالات والمميزات
// ============================================================

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function closeSuccessModal() {
    document.getElementById("successModal").style.display = "none";
}

// دالة فتح بوب آب المميزات (لماذا تختارنا)
function openFeatureModal(title, description) {
    document.getElementById("featureTitle").innerText = title;
    document.getElementById("featureDescription").innerText = description;
    document.getElementById("featureModal").style.display = "block";
}
