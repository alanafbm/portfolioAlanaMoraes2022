(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    const langButtons = document.querySelectorAll(".lang-btn");
    let currentLang = localStorage.getItem("preferredLang") || "FR";

    function updateLanguage(lang) {
        lang = lang.toUpperCase();
        const langKey = lang.toLowerCase();

        const langObj = window.language || {};

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (langObj[key] && langObj[key][langKey]) {
                el.innerHTML = langObj[key][langKey];
            }
        });

        document.querySelectorAll("[data-i18n-title]").forEach(el => {
            const key = el.getAttribute("data-i18n-title");
            if (langObj[key] && langObj[key][langKey]) {
                el.setAttribute("title", langObj[key][langKey]);
            }
        });

        // Update active class on buttons
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add("active-lang");
            } else {
                btn.classList.remove("active-lang");
            }
        });

        localStorage.setItem("preferredLang", lang);
        currentLang = lang;
    }

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Initial load
    updateLanguage(currentLang);

    // Service Selection Logic
    const servicesSelection = document.getElementById("services-selection");
    const pilatesDetails = document.getElementById("pilates-details");
    const massageDetails = document.getElementById("massage-details");
    const selectPilates = document.getElementById("select-pilates");
    const selectMassage = document.getElementById("select-massage");

    if (selectPilates && servicesSelection && pilatesDetails) {
        selectPilates.addEventListener("click", () => {
            servicesSelection.style.display = "none";
            pilatesDetails.style.display = "block";
        });
    }

    if (selectMassage && servicesSelection && massageDetails) {
        selectMassage.addEventListener("click", () => {
            servicesSelection.style.display = "none";
            massageDetails.style.display = "block";
        });
    }

    document.querySelectorAll(".back-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            pilatesDetails.style.display = "none";
            massageDetails.style.display = "none";
            servicesSelection.style.display = "block";
            // Reset massage description when going back
            const descContainer = document.getElementById("massage-desc-container");
            if (descContainer) descContainer.style.display = "none";
            document.querySelectorAll(".massage-item").forEach(item => item.classList.remove("active-card"));
        });
    });

    // Massage Item Interaction
    const massageItems = document.querySelectorAll(".massage-item");
    const massageDescContainer = document.getElementById("massage-desc-container");
    const massageDescText = document.getElementById("massage-desc-text");

    massageItems.forEach(item => {
        item.addEventListener("click", () => {
            const descKey = item.getAttribute("data-desc");
            const langKey = currentLang.toLowerCase();
            const langObj = window.language || {};

            if (langObj[descKey] && langObj[descKey][langKey]) {
                massageItems.forEach(i => i.classList.remove("active-card"));
                item.classList.add("active-card");

                massageDescText.innerHTML = langObj[descKey][langKey];
                massageDescContainer.style.display = "block";

                // Smooth scroll to description
                massageDescContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // Initial load
    updateLanguage(currentLang);
})();