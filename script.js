document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const generateBtn = document.getElementById('generateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const resultsDiv = document.getElementById('results');
    const providerCategories = document.getElementById('providerCategories');
    const resultsCount = document.getElementById('resultsCount');
    const toast = document.getElementById('toast');
    
    // Region checkboxes
    const allRegionsCheckbox = document.getElementById('allRegions');
    const europeCheckbox = document.getElementById('europe');
    const indiaCheckbox = document.getElementById('india');
    const southKoreaCheckbox = document.getElementById('southKorea');
    const russiaCheckbox = document.getElementById('russia');
    const chinaCheckbox = document.getElementById('china');

    const emailProviders = {
        free: {
            title: 'Free Email Providers',
            description: 'Popular free email services with generous storage and features',
            icon: '✓',
            providers: [
                // Worldwide
                { domain: 'gmail.com', name: 'Gmail', signupUrl: 'https://accounts.google.com/signup', regions: ['worldwide'] },
                { domain: 'yahoo.com', name: 'Yahoo Mail', signupUrl: 'https://login.yahoo.com/account/create', regions: ['worldwide'] },
                { domain: 'outlook.com', name: 'Outlook', signupUrl: 'https://signup.live.com', regions: ['worldwide'] },
                { domain: 'aol.com', name: 'AOL Mail', signupUrl: 'https://login.aol.com/account/create', regions: ['worldwide'] },
                { domain: 'icloud.com', name: 'iCloud Mail', signupUrl: 'https://appleid.apple.com', regions: ['worldwide'] },
                { domain: 'protonmail.com', name: 'ProtonMail', signupUrl: 'https://proton.me/mail/signup', regions: ['worldwide'] },
                { domain: 'zoho.com', name: 'Zoho Mail', signupUrl: 'https://www.zoho.com/mail/zohomail-signup.html', regions: ['worldwide'] },
                
                // India
                { domain: 'outlook.in', name: 'Outlook India', signupUrl: 'https://signup.live.com', regions: ['india'] },
                { domain: 'rediffmail.com', name: 'Rediffmail', signupUrl: 'https://register.rediff.com/register/register.php', regions: ['india'] },
                { domain: 'zoho.in', name: 'Zoho India', signupUrl: 'https://www.zoho.in/mail/', regions: ['india'] },
                { domain: 'rajasthan.in', name: 'Rajasthan Mail', signupUrl: 'https://rajasthan.in/', regions: ['india'] },
                { domain: 'datamail.in', name: 'DataMail', signupUrl: 'https://datamail.in/', regions: ['india'] },
                
                // South Korea
                { domain: 'kakao.com', name: 'Kakao Mail', signupUrl: 'https://accounts.kakao.com/signup', regions: ['southKorea'] },
                { domain: 'daum.net', name: 'Daum Mail', signupUrl: 'https://member.daum.net/join/join.daum', regions: ['southKorea'] },
                { domain: 'nate.com', name: 'Nate Mail', signupUrl: 'https://member.nate.com/join/join_agree.html', regions: ['southKorea'] },
                
                // Russia
                { domain: 'yandex.ru', name: 'Yandex Russia', signupUrl: 'https://passport.yandex.com/registration', regions: ['russia'] },
                { domain: 'mail.ru', name: 'Mail.ru', signupUrl: 'https://account.mail.ru/signup', regions: ['russia'] },
                { domain: 'rambler.ru', name: 'Rambler Mail', signupUrl: 'https://id.rambler.ru/account/registration', regions: ['russia'] },
                
                // China
                { domain: 'qq.com', name: 'QQ Mail', signupUrl: 'https://mail.qq.com/cgi-bin/frame_html?sid=register', regions: ['china'] },
                { domain: '163.com', name: 'NetEase Mail', signupUrl: 'https://reg.163.com/RegRegister.jsp', regions: ['china'] },
                { domain: '126.com', name: '126 Mail', signupUrl: 'https://reg.163.com/RegRegister.jsp', regions: ['china'] },
                { domain: 'sina.com', name: 'Sina Mail', signupUrl: 'https://mail.sina.com.cn/register/', regions: ['china'] },
                { domain: 'sohu.com', name: 'Sohu Mail', signupUrl: 'https://passport.sohu.com/web/signup', regions: ['china'] },
                { domain: 'aliyun.com', name: 'Aliyun Mail', signupUrl: 'https://account.aliyun.com/register/register.htm', regions: ['china'] },
                { domain: 'foxmail.com', name: 'Foxmail', signupUrl: 'https://wx.mail.qq.com/', regions: ['china'] },
                
                // Europe
                { domain: 'gmx.com', name: 'GMX', signupUrl: 'https://www.gmx.com/', regions: ['europe'] },
                { domain: 'web.de', name: 'WEB.DE', signupUrl: 'https://registrierung.web.de/', regions: ['europe'] },
                { domain: 't-online.de', name: 'T-Online', signupUrl: 'https://www.telekom.de/', regions: ['europe'] },
                { domain: 'orange.fr', name: 'Orange Mail', signupUrl: 'https://www.orange.fr/', regions: ['europe'] },
                { domain: 'sfr.fr', name: 'SFR Mail', signupUrl: 'https://www.sfr.fr/', regions: ['europe'] },
                { domain: 'libero.it', name: 'Libero Mail', signupUrl: 'https://www.libero.it/', regions: ['europe'] },
                { domain: 'virgilio.it', name: 'Virgilio Mail', signupUrl: 'https://www.virgilio.it/', regions: ['europe'] },
                { domain: 'wp.pl', name: 'Wirtualna Polska', signupUrl: 'https://poczta.wp.pl/rejestracja', regions: ['europe'] },
                { domain: 'o2.pl', name: 'O2 Mail', signupUrl: 'https://poczta.o2.pl/', regions: ['europe'] },
                { domain: 'interia.pl', name: 'Interia Mail', signupUrl: 'https://konto.interia.pl/', regions: ['europe'] },
                { domain: 'azet.sk', name: 'Azet Mail', signupUrl: 'https://www.azet.sk/', regions: ['europe'] },
                { domain: 'centrum.cz', name: 'Centrum Mail', signupUrl: 'https://www.centrum.cz/', regions: ['europe'] },
                { domain: 'seznam.cz', name: 'Seznam Mail', signupUrl: 'https://seznam.cz/', regions: ['europe'] },
                { domain: 'volny.cz', name: 'Volny Mail', signupUrl: 'https://www.volny.cz/', regions: ['europe'] },
                { domain: 'post.sk', name: 'Post Mail', signupUrl: 'https://www.post.sk/', regions: ['europe'] },
                { domain: 'zoznam.sk', name: 'Zoznam Mail', signupUrl: 'https://www.zoznam.sk/', regions: ['europe'] }
            ]
        }
    };

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function formatUsername(input) {
        return input.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/[^a-z0-9_.-]/g, '');
    }

    function getSelectedRegions() {
        const regions = [];
        
        if (allRegionsCheckbox.checked) {
            // If "All" is selected, include all regions
            return ['worldwide', 'europe', 'india', 'southKorea', 'russia', 'china'];
        }
        
        if (europeCheckbox.checked) regions.push('europe');
        if (indiaCheckbox.checked) regions.push('india');
        if (southKoreaCheckbox.checked) regions.push('southKorea');
        if (russiaCheckbox.checked) regions.push('russia');
        if (chinaCheckbox.checked) regions.push('china');
        
        // If no specific regions are selected, default to worldwide
        if (regions.length === 0) {
            regions.push('worldwide');
        }
        
        return regions;
    }

    function generateEmails(username) {
        const formattedUsername = formatUsername(username);
        if (!formattedUsername) {
            showToast('Please enter a valid name or username');
            return;
        }

        const selectedRegions = getSelectedRegions();
        
        providerCategories.innerHTML = '';
        let totalEmails = 0;

        const freeCategory = createProviderCategory('free', formattedUsername, selectedRegions);
        providerCategories.appendChild(freeCategory);
        totalEmails += freeCategory.emailCount;

        resultsCount.textContent = `${totalEmails} email${totalEmails !== 1 ? 's' : ''}`;
        resultsDiv.style.display = 'block';
        copyAllBtn.style.display = 'block';
    }

    function createProviderCategory(type, username, selectedRegions) {
        const category = emailProviders[type];
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'provider-category';
        
        // Track how many emails we're adding
        let emailCount = 0;

        const headerDiv = document.createElement('div');
        headerDiv.className = 'category-header';

        const iconDiv = document.createElement('div');
        iconDiv.className = `category-icon ${type}`;
        iconDiv.textContent = category.icon;

        const titleH3 = document.createElement('h3');
        titleH3.className = 'category-title';
        titleH3.textContent = category.title;

        headerDiv.appendChild(iconDiv);
        headerDiv.appendChild(titleH3);

        const descriptionP = document.createElement('p');
        descriptionP.className = 'category-description';
        descriptionP.textContent = category.description;

        const gridDiv = document.createElement('div');
        gridDiv.className = 'email-grid';

        // Filter providers by selected regions
        const filteredProviders = category.providers.filter(provider => {
            return provider.regions.some(region => selectedRegions.includes(region));
        });

        filteredProviders.forEach(provider => {
            const emailItem = createEmailItem(username, provider);
            gridDiv.appendChild(emailItem);
            emailCount++;
        });

        // Store the count on the category element
        categoryDiv.emailCount = emailCount;

        categoryDiv.appendChild(headerDiv);
        categoryDiv.appendChild(descriptionP);
        categoryDiv.appendChild(gridDiv);

        return categoryDiv;
    }

    function createEmailItem(username, provider) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'email-item';

        const emailLink = document.createElement('a');
        emailLink.className = 'email-address';
        emailLink.textContent = `${username}@${provider.domain}`;
        emailLink.href = provider.signupUrl;
        emailLink.target = '_blank';
        emailLink.rel = 'noopener noreferrer';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';

        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the parent link click
            navigator.clipboard.writeText(`${username}@${provider.domain}`)
                .then(() => {
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    showToast('Failed to copy email address');
                });
        });

        itemDiv.appendChild(emailLink);
        itemDiv.appendChild(copyBtn);

        return itemDiv;
    }

    function copyAllEmails() {
        const emails = Array.from(document.querySelectorAll('.email-address'))
            .map(span => span.textContent)
            .join('\n');
        
        navigator.clipboard.writeText(emails)
            .then(() => {
                showToast('All email addresses copied to clipboard!');
            })
            .catch(err => {
                showToast('Failed to copy email addresses');
            });
    }

    function resetForm() {
        usernameInput.value = '';
        resultsDiv.style.display = 'none';
        copyAllBtn.style.display = 'none';
        usernameInput.focus();
    }

    // Handle "All" region checkbox behavior
    allRegionsCheckbox.addEventListener('change', function() {
        if (allRegionsCheckbox.checked) {
            // Uncheck all other region checkboxes when "All" is checked
            europeCheckbox.checked = false;
            indiaCheckbox.checked = false;
            southKoreaCheckbox.checked = false;
            russiaCheckbox.checked = false;
            chinaCheckbox.checked = false;
        }
        
        // Auto-refresh results if username is entered
        if (usernameInput.value && resultsDiv.style.display === 'block') {
            generateEmails(usernameInput.value);
        }
    });

    // Handle individual region checkboxes
    const individualRegionCheckboxes = [
        europeCheckbox, indiaCheckbox, 
        southKoreaCheckbox, russiaCheckbox, chinaCheckbox
    ];
    
    individualRegionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // If any individual region is checked, uncheck "All"
            if (checkbox.checked) {
                allRegionsCheckbox.checked = false;
            }
            
            // Auto-refresh results if username is entered
            if (usernameInput.value && resultsDiv.style.display === 'block') {
                generateEmails(usernameInput.value);
            }
        });
    });

    generateBtn.addEventListener('click', function() {
        generateEmails(usernameInput.value);
    });

    resetBtn.addEventListener('click', resetForm);

    copyAllBtn.addEventListener('click', copyAllEmails);

    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateEmails(usernameInput.value);
        }
    });

    usernameInput.focus();
});
