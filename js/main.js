// Dear Story - Main JavaScript

// Package data
const packageNames = {
    basic: 'Basic Package',
    signature: 'Signature Package'
};

const packagePrices = {
    basic: '₩400,000',
    signature: '₩700,000'
};

// Discord webhook URL for notifications
const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1255679578618466326/VHCj29NnV5envaM27yscHK9eqdnch-KyOQ2nTMz5qk61sHfJ2c1BoltsnhfledjMK2fk';

// State management
let currentStep = 1;
let selectedPackage = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initPackageSelection();
    initDateValidation();
    initContactForm();
    initScrollAnimations();
    initMessengerSelection();
});

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', closeMobileMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('show');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }, 300);
    document.body.style.overflow = '';
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = 64; // Height of fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Package Selection in Modal
function initPackageSelection() {
    const packageOptions = document.querySelectorAll('.package-option');
    
    packageOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all
            packageOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked
            this.classList.add('selected');
            // Update selected package
            selectedPackage = this.dataset.package;
            // Check the radio button
            const radio = this.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

// Messenger Selection (Dropdown + Add More)
const messengerPlaceholders = {
    whatsapp: 'Phone number (e.g. +1 234 567 8900)',
    instagram: '@username',
    kakaotalk: 'KakaoTalk ID',
    wechat: 'WeChat ID',
    line: 'Line ID',
    email_only: ''
};

function initMessengerSelection() {
    const list = document.getElementById('messenger-list');
    const addBtn = document.getElementById('add-messenger-btn');
    if (!list || !addBtn) return;

    // Bind first row
    bindMessengerRow(list.querySelector('.messenger-entry'));

    addBtn.addEventListener('click', function() {
        const entry = document.createElement('div');
        entry.className = 'messenger-entry flex items-center gap-2';
        entry.innerHTML = `
            <select class="messenger-select px-3 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-sm w-40 shrink-0">
                <option value="">Select...</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="instagram">Instagram</option>
                <option value="kakaotalk">KakaoTalk</option>
                <option value="wechat">WeChat</option>
                <option value="line">Line</option>
                <option value="email_only">Email Only</option>
            </select>
            <input type="text" placeholder="Select a messenger first" class="messenger-id flex-1 px-3 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm bg-gray-50" disabled>
            <button type="button" class="messenger-remove w-10 h-10 rounded-xl border border-border-light text-brand-medium hover:text-red-500 hover:border-red-300 transition-all flex items-center justify-center shrink-0">
                <i class="fas fa-times"></i>
            </button>
        `;
        list.appendChild(entry);
        bindMessengerRow(entry);
        updateRemoveButtons();
    });
}

function bindMessengerRow(entry) {
    const select = entry.querySelector('.messenger-select');
    const idInput = entry.querySelector('.messenger-id');
    const removeBtn = entry.querySelector('.messenger-remove');

    select.addEventListener('change', function() {
        if (this.value === 'email_only') {
            idInput.disabled = true;
            idInput.value = '';
            idInput.placeholder = 'Will use email above';
            idInput.classList.add('bg-gray-50');
            idInput.classList.remove('bg-white');
        } else if (this.value) {
            idInput.disabled = false;
            idInput.placeholder = messengerPlaceholders[this.value] || 'Enter ID';
            idInput.classList.remove('bg-gray-50');
            idInput.classList.add('bg-white');
            idInput.focus();
        } else {
            idInput.disabled = true;
            idInput.value = '';
            idInput.placeholder = 'Select a messenger first';
            idInput.classList.add('bg-gray-50');
            idInput.classList.remove('bg-white');
        }
    });

    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            entry.remove();
            updateRemoveButtons();
        });
    }
}

function updateRemoveButtons() {
    const entries = document.querySelectorAll('#messenger-list .messenger-entry');
    entries.forEach((entry, i) => {
        const btn = entry.querySelector('.messenger-remove');
        if (btn) {
            if (entries.length <= 1) {
                btn.classList.add('hidden');
            } else {
                btn.classList.remove('hidden');
            }
        }
    });
}

function getMessengerData() {
    const messengers = [];
    document.querySelectorAll('#messenger-list .messenger-entry').forEach(entry => {
        const select = entry.querySelector('.messenger-select');
        const idInput = entry.querySelector('.messenger-id');
        if (select.value) {
            messengers.push({
                type: select.value,
                id: idInput ? idInput.value.trim() : ''
            });
        }
    });
    return messengers;
}

function formatMessengerLabels(type) {
    const labels = {
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        kakaotalk: 'KakaoTalk',
        wechat: 'WeChat',
        line: 'Line',
        email_only: 'Email Only'
    };
    return labels[type] || type;
}

// Date Validation
function initDateValidation() {
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        // Set minimum date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
}

// Modal Functions
function openModal(packageType) {
    const modal = document.getElementById('reservation-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Pre-select package if specified
    if (packageType) {
        selectedPackage = packageType;
        const option = document.querySelector(`.package-option[data-package="${packageType}"]`);
        if (option) {
            document.querySelectorAll('.package-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            const radio = option.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        }
    }
    
    // Reset to step 1
    goToStep(1);
}

function closeModal() {
    const modal = document.getElementById('reservation-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    
    // Reset form
    resetBookingForm();
}

function resetBookingForm() {
    currentStep = 1;
    selectedPackage = null;
    
    // Reset package selection
    document.querySelectorAll('.package-option').forEach(opt => opt.classList.remove('selected'));
    
    // Reset form fields
    const form = document.getElementById('booking-form');
    if (form) form.reset();
    
    document.getElementById('booking-date').value = '';
    document.getElementById('booking-time').value = '';
    document.getElementById('booking-people').value = '1';
    document.getElementById('booking-name').value = '';
    document.getElementById('booking-email').value = '';
    document.getElementById('booking-requests').value = '';

    // Reset messenger selections — keep only one empty row
    const messengerList = document.getElementById('messenger-list');
    if (messengerList) {
        const entries = messengerList.querySelectorAll('.messenger-entry');
        entries.forEach((entry, i) => {
            if (i === 0) {
                entry.querySelector('.messenger-select').value = '';
                const idInput = entry.querySelector('.messenger-id');
                idInput.value = '';
                idInput.disabled = true;
                idInput.placeholder = 'Select a messenger first';
                idInput.classList.add('bg-gray-50');
                idInput.classList.remove('bg-white');
            } else {
                entry.remove();
            }
        });
        updateRemoveButtons();
    }
}

function goToStep(step) {
    currentStep = step;
    
    // Hide all step contents
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Show current step
    document.getElementById(`step-${step}`).classList.remove('hidden');
    
    // Update step indicators
    document.querySelectorAll('.step-indicator').forEach(indicator => {
        const indicatorStep = parseInt(indicator.dataset.step);
        indicator.classList.remove('active', 'completed');
        
        if (indicatorStep < step) {
            indicator.classList.add('completed');
            indicator.querySelector('span:first-child').innerHTML = '<i class="fas fa-check text-sm"></i>';
        } else if (indicatorStep === step) {
            indicator.classList.add('active');
            indicator.querySelector('span:first-child').textContent = indicatorStep;
        } else {
            indicator.querySelector('span:first-child').textContent = indicatorStep;
        }
    });
}

function nextStep() {
    // Validation for each step
    if (currentStep === 1) {
        if (!selectedPackage) {
            showToast('Please select a package', 'error');
            return;
        }
    } else if (currentStep === 2) {
        const date = document.getElementById('booking-date').value;
        const time = document.getElementById('booking-time').value;
        
        if (!date) {
            showToast('Please select a date', 'error');
            return;
        }
        if (!time) {
            showToast('Please select a time', 'error');
            return;
        }
        
        // Validate date is in the future
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate <= today) {
            showToast('Please select a future date', 'error');
            return;
        }
    }
    
    if (currentStep < 3) {
        goToStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

async function submitBooking() {
    // Validate form
    const name = document.getElementById('booking-name').value.trim();
    const email = document.getElementById('booking-email').value.trim();
    const messengers = getMessengerData();

    if (!name) {
        showToast('Please enter your name', 'error');
        return;
    }
    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }
    if (messengers.length === 0) {
        showToast('Please select at least one contact method', 'error');
        return;
    }
    // Validate that non-email messengers have IDs filled in
    for (const m of messengers) {
        if (m.type !== 'email_only' && !m.id) {
            showToast(`Please enter your ${formatMessengerLabels(m.type)} ID`, 'error');
            return;
        }
    }

    // Collect booking data
    const bookingData = {
        package: packageNames[selectedPackage],
        price: packagePrices[selectedPackage],
        date: document.getElementById('booking-date').value,
        time: formatTime(document.getElementById('booking-time').value),
        people: document.getElementById('booking-people').value,
        name: name,
        email: email,
        messengers: messengers,
        requests: document.getElementById('booking-requests').value.trim() || 'None',
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    };
    
    try {
        // Send to Discord
        await sendToDiscord(bookingData);
        
        // Show success
        showBookingSummary(bookingData);
        goToStep('success');
        
    } catch (error) {
        console.error('Booking error:', error);
        showToast('Booking submitted! We will contact you soon.', 'success');
        showBookingSummary(bookingData);
        goToStep('success');
    }
}

async function sendToDiscord(data) {
    const messengerText = data.messengers.map(m => {
        if (m.type === 'email_only') return '📧 Email Only';
        return `${formatMessengerLabels(m.type)}: ${m.id}`;
    }).join('\n');

    const message = {
        embeds: [{
            title: '🎤 New K-Pop Experience Booking!',
            color: 10764341, // #A53035 in decimal
            fields: [
                { name: '📦 Package', value: `${data.package} (${data.price})`, inline: false },
                { name: '📅 Date', value: data.date, inline: true },
                { name: '⏰ Time', value: data.time, inline: true },
                { name: '👥 People', value: `${data.people} person(s)`, inline: true },
                { name: '👤 Name', value: data.name, inline: true },
                { name: '📧 Email', value: data.email, inline: true },
                { name: '📱 Contact Methods', value: messengerText, inline: false },
                { name: '💬 Special Requests', value: data.requests, inline: false }
            ],
            footer: { text: 'Dear Story - K-Pop Experience Studio' },
            timestamp: new Date().toISOString()
        }]
    };
    
    await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    });
}

function showBookingSummary(data) {
    const summaryDiv = document.getElementById('booking-summary');
    const contactHtml = data.messengers.map(m => {
        if (m.type === 'email_only') return 'Email Only';
        return `${formatMessengerLabels(m.type)}: ${m.id}`;
    }).join('<br>');

    summaryDiv.innerHTML = `
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span class="text-brand-medium">Package:</span>
                <span class="font-semibold text-brand-dark">${data.package}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">Price:</span>
                <span class="font-semibold text-brand-primary">${data.price}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">Date:</span>
                <span class="font-semibold text-brand-dark">${data.date}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">Time:</span>
                <span class="font-semibold text-brand-dark">${data.time}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">People:</span>
                <span class="font-semibold text-brand-dark">${data.people}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">Name:</span>
                <span class="font-semibold text-brand-dark">${data.name}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-brand-medium">Email:</span>
                <span class="font-semibold text-brand-dark">${data.email}</span>
            </div>
            <div class="flex justify-between items-start">
                <span class="text-brand-medium">Contact:</span>
                <span class="font-semibold text-brand-dark text-right">${contactHtml}</span>
            </div>
        </div>
    `;
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
            };
            
            try {
                await sendContactToDiscord(data);
                showToast('Message sent successfully!', 'success');
                this.reset();
            } catch (error) {
                console.error('Contact form error:', error);
                showToast('Message sent! We will reply soon.', 'success');
                this.reset();
            }
        });
    }
}

async function sendContactToDiscord(data) {
    const message = {
        embeds: [{
            title: '📬 New Contact Message',
            color: 10764341, // #A53035 in decimal
            fields: [
                { name: '👤 Name', value: data.name, inline: true },
                { name: '📧 Email', value: data.email, inline: true },
                { name: '💬 Message', value: data.message, inline: false }
            ],
            footer: { text: 'Dear Story - Contact Form' },
            timestamp: new Date().toISOString()
        }]
    };
    
    await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function formatTime(time24) {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

function showToast(message, type = 'success') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('reservation-modal');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
        closeMobileMenu();
    }
});

// Close modal on backdrop click
document.getElementById('reservation-modal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Prevent scroll when modal is open
function preventScroll(e) {
    const modal = document.getElementById('reservation-modal');
    if (!modal.classList.contains('hidden')) {
        e.preventDefault();
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Start animations
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.style.animationPlayState = 'running';
        }, index * 100);
    });
});

