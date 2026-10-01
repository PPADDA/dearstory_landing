// ==================== EXPERIENCES PAGE ====================
export const experiencesPage = () => `
  <!-- Hero Section -->
  <section class="relative h-[60vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <p class="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">OUR SERVICES</p>
      <h1 class="text-5xl md:text-7xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Choose Your Experience
      </h1>
    </div>
  </section>

  <!-- Experiences Grid -->
  <section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Basic -->
        <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/basic'">
          <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
            <i class="fas fa-microphone text-8xl text-gray-800"></i>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <h3 class="text-2xl font-light">BASIC</h3>
              <p class="text-lg">₩400,000</p>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>1:1 Vocal Coaching</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Professional Studio Recording</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>High-Quality Audio Production</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Interpretation Support</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Lyrics in Your Preferred Language</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Photos & Videos Included</span>
              </li>
            </ul>
            <a href="/experience/basic" class="text-sm uppercase tracking-wider hover:opacity-70 transition">
              Learn More →
            </a>
          </div>
        </div>

        <!-- Signature (Most Popular) -->
        <div class="modern-card group cursor-pointer border-2 border-black relative" onclick="window.location.href='/experience/signature'">
          <span class="absolute top-4 left-4 text-xs uppercase tracking-wider bg-black text-white px-3 py-1 z-10">
            Most Popular
          </span>
          <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
            <i class="fas fa-music text-8xl text-gray-800"></i>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-light">SIGNATURE</h3>
              <p class="text-lg">₩600,000</p>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Original Song Composition</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Personalized Lyrics & Melody</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>All Basic Package Features</span>
              </li>
            </ul>
            <a href="/experience/signature" class="text-sm uppercase tracking-wider hover:opacity-70 transition">
              Learn More →
            </a>
          </div>
        </div>

        <!-- Premium -->
        <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/premium'">
          <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
            <i class="fas fa-compact-disc text-8xl text-gray-800"></i>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <h3 class="text-2xl font-light">PREMIUM</h3>
              <p class="text-lg">₩700,000</p>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Official Album Release</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>Spotify, Apple Music & More</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3">—</span>
                <span>All Signature Package Features</span>
              </li>
            </ul>
            <a href="/experience/premium" class="text-sm uppercase tracking-wider hover:opacity-70 transition">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-padding bg-black text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
        Ready to Begin?
      </h2>
      <p class="text-lg mb-10 opacity-90">
        Book your session and start your K-pop journey today
      </p>
      <a href="/booking" class="btn-modern bg-white text-black hover:bg-gray-100">
        BOOK NOW
      </a>
    </div>
  </section>
`;

// ==================== GALLERY PAGE ====================
export const galleryPage = () => `
  <section class="relative h-[48vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <p class="text-sm uppercase tracking-[0.3em] mb-4 opacity-70">DEARSTORY MUSIC</p>
      <h1 class="text-5xl md:text-7xl font-light" style="font-family: 'Cormorant Garamond', serif;">Our Work</h1>
    </div>
  </section>

  <section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div id="gallery-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <div class="text-center py-20 col-span-full"><p class="text-gray-400 text-sm uppercase tracking-wider">Loading...</p></div>
      </div>
    </div>
  </section>

  <style>
    .gallery-progress { -webkit-appearance: none; appearance: none; height: 2px; background: linear-gradient(to right, #111 0%, #111 var(--progress, 0%), #d1d5db var(--progress, 0%), #d1d5db 100%); cursor: pointer; }
    .gallery-progress::-webkit-slider-thumb { -webkit-appearance: none; width: 10px; height: 10px; border-radius: 9999px; background: #111; cursor: grab; }
    .gallery-progress::-moz-range-thumb { width: 10px; height: 10px; border: 0; border-radius: 9999px; background: #111; cursor: grab; }
  </style>

  <script>
    function galleryEscape(value) {
      return String(value ?? '').replace(/[&<>\"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;'
      })[ch]);
    }

    function formatGalleryTime(seconds) {
      if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
      return mins + ':' + secs;
    }

    function toggleGalleryAudio(id) {
      const selected = document.getElementById('gallery-audio-' + id);
      if (!selected) return;
      document.querySelectorAll('.gallery-audio').forEach(audio => {
        if (audio !== selected && !audio.paused) audio.pause();
      });
      if (selected.paused) selected.play(); else selected.pause();
    }

    function setGalleryButton(id, playing) {
      const button = document.getElementById('gallery-play-' + id);
      if (!button) return;
      button.innerHTML = playing
        ? '<span class="text-2xl leading-none">Ⅱ</span>'
        : '<span class="text-2xl leading-none ml-1">▶</span>';
      button.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    }

    function updateGalleryProgress(id) {
      const audio = document.getElementById('gallery-audio-' + id);
      const range = document.getElementById('gallery-progress-' + id);
      const current = document.getElementById('gallery-current-' + id);
      const duration = document.getElementById('gallery-duration-' + id);
      if (!audio || !range || !current || !duration) return;
      const total = Number.isFinite(audio.duration) ? audio.duration : 0;
      range.max = total || 0;
      if (!range.matches(':active')) range.value = audio.currentTime || 0;
      current.textContent = formatGalleryTime(audio.currentTime || 0);
      duration.textContent = formatGalleryTime(total);
      const pct = total > 0 ? ((audio.currentTime || 0) / total) * 100 : 0;
      range.style.setProperty('--progress', pct + '%');
    }

    function seekGalleryAudio(id, value) {
      const audio = document.getElementById('gallery-audio-' + id);
      if (!audio) return;
      audio.currentTime = Number(value) || 0;
      updateGalleryProgress(id);
    }

    async function loadGalleryItems() {
      const container = document.getElementById('gallery-container');
      try {
        const response = await axios.get('/api/gallery');
        const items = response.data || [];
        if (!items.length) {
          container.innerHTML = '<div class="col-span-full text-center py-20"><p class="text-gray-400 text-sm uppercase tracking-wider">Music coming soon</p></div>';
          return;
        }

        container.innerHTML = items.map(item =>
          '<article class="group">' +
            '<div class="aspect-square bg-gray-100 overflow-hidden mb-5 relative">' +
              '<img src="' + galleryEscape(item.thumbnail_url) + '" alt="' + galleryEscape(item.title) + '" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]">' +
              '<div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition">' +
                '<button id="gallery-play-' + item.id + '" onclick="toggleGalleryAudio(' + item.id + ')" aria-label="Play" class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg backdrop-blur-sm transition hover:scale-105"><span class="text-2xl leading-none ml-1">▶</span></button>' +
              '</div>' +
              '<audio id="gallery-audio-' + item.id + '" class="gallery-audio hidden" preload="metadata" src="' + galleryEscape(item.file_url) + '" onloadedmetadata="updateGalleryProgress(' + item.id + ')" ontimeupdate="updateGalleryProgress(' + item.id + ')" onplay="setGalleryButton(' + item.id + ', true)" onpause="setGalleryButton(' + item.id + ', false)" onended="setGalleryButton(' + item.id + ', false); updateGalleryProgress(' + item.id + ')"></audio>' +
            '</div>' +
            '<h3 class="text-2xl font-light mb-3" style="font-family: Cormorant Garamond, serif;">' + galleryEscape(item.title) + '</h3>' +
            '<div class="flex items-center gap-3 text-[11px] tracking-wide text-gray-500">' +
              '<span id="gallery-current-' + item.id + '" class="w-8 tabular-nums">0:00</span>' +
              '<input id="gallery-progress-' + item.id + '" type="range" min="0" max="0" value="0" step="0.01" oninput="seekGalleryAudio(' + item.id + ', this.value)" aria-label="Audio progress" class="gallery-progress flex-1">' +
              '<span id="gallery-duration-' + item.id + '" class="w-8 text-right tabular-nums">0:00</span>' +
            '</div>' +
          '</article>'
        ).join('');
      } catch (error) {
        console.error('Error loading gallery:', error);
        container.innerHTML = '<div class="col-span-full text-center py-20"><p class="text-gray-400 text-sm">Unable to load music right now.</p></div>';
      }
    }

    loadGalleryItems();
  </script>
`;

// ==================== BOOKING PAGE ====================
export const bookingPage = (packageParam?: string) => `
  <!-- Hero Section -->
  <section class="relative h-[50vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <p class="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">RESERVATION</p>
      <h1 class="text-5xl md:text-7xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Book Your Session
      </h1>
    </div>
  </section>

  <!-- Booking Form -->
  <section class="section-padding bg-white">
    <div class="max-w-3xl mx-auto">
      <form id="booking-form" class="space-y-8">
        <!-- Package Selection -->
        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">Package *</label>
          <select id="package" name="package" required class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
            <option value="basic" ${packageParam === 'basic' ? 'selected' : ''}>Basic - Cover Song Recording</option>
            <option value="signature" ${packageParam === 'signature' ? 'selected' : ''}>Signature - Create Your Own K-pop Song</option>
            <option value="premium" ${packageParam === 'premium' ? 'selected' : ''}>Premium - Your Song + Album Release</option>
          </select>
        </div>

        <!-- Number of People -->
        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">Number of People *</label>
          <select id="num_people" name="num_people" required class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
        </div>

        <!-- Price Display -->
        <div class="bg-gray-50 p-8 text-center border border-gray-200">
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Total Price</p>
          <p class="text-4xl font-light">₩<span id="total-price">400,000</span></p>
        </div>

        <!-- Date & Time -->
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Preferred Date *</label>
            <input type="date" id="booking_date" name="booking_date" required 
                   class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
          </div>
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Preferred Time *</label>
            <select id="booking_time" name="booking_time" required class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
              <option value="">Select a date first</option>
            </select>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8"></div>

        <!-- Contact Information -->
        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">Full Name *</label>
          <input type="text" id="customer_name" name="customer_name" required 
                 placeholder="John Doe"
                 class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
        </div>

        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">Email *</label>
          <input type="email" id="customer_email" name="customer_email" required
                 placeholder="john@example.com"
                 class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
        </div>

        <!-- Messenger Contact Methods -->
        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">How Can We Contact You? *</label>
          <div id="messenger-list" class="space-y-3">
            <div class="messenger-entry flex items-center gap-3">
              <select class="messenger-select p-4 border border-gray-300 focus:border-black focus:outline-none text-sm w-44 shrink-0">
                <option value="">Select...</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="instagram">Instagram</option>
                <option value="kakaotalk">KakaoTalk</option>
                <option value="wechat">WeChat</option>
                <option value="line">Line</option>
                <option value="email_only">Email Only</option>
              </select>
              <input type="text" placeholder="Select a messenger first" class="messenger-id flex-1 p-4 border border-gray-300 focus:border-black focus:outline-none text-sm bg-gray-50" disabled>
              <button type="button" class="messenger-remove hidden w-12 h-12 border border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-300 transition flex items-center justify-center shrink-0">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <button type="button" id="add-messenger-btn" class="mt-3 text-sm uppercase tracking-wider hover:opacity-70 transition">
            + Add another contact method
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Country *</label>
            <input type="text" id="customer_country" name="customer_country" required 
                   placeholder="United States"
                   class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
          </div>
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Preferred Language *</label>
            <select id="preferred_language" name="preferred_language" required class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
              <option value="">Select language</option>
              <option value="English">English</option>
              <option value="한국어">한국어 (Korean)</option>
              <option value="中文">中文 (Chinese)</option>
              <option value="日本語">日本語 (Japanese)</option>
              <option value="Español">Español (Spanish)</option>
              <option value="Français">Français (French)</option>
              <option value="Deutsch">Deutsch (German)</option>
              <option value="Português">Português</option>
              <option value="Русский">Русский (Russian)</option>
              <option value="العربية">العربية (Arabic)</option>
              <option value="हिन्दी">हिन्दी (Hindi)</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
              <option value="ไทย">ไทย (Thai)</option>
              <option value="Tiếng Việt">Tiếng Việt (Vietnamese)</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <!-- Additional Notes -->
        <div>
          <label class="block text-sm uppercase tracking-wider mb-3">Additional Notes</label>
          <textarea id="additional_notes" name="additional_notes" rows="4" 
                    placeholder="Any special requests or information..."
                    class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm"></textarea>
        </div>

        <!-- Submit -->
        <button type="submit" class="w-full btn-modern py-5">
          SUBMIT BOOKING REQUEST
        </button>

        <p class="text-center text-sm text-gray-500">
          We'll confirm your booking within 24 hours via email
        </p>
      </form>
    </div>
  </section>

  <script>
    // Set minimum date (3 days from now)
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    document.getElementById('booking_date').min = minDate.toISOString().split('T')[0];

    // Time labels
    const timeLabels = {
      '10:00': '10:00 AM', '11:00': '11:00 AM', '12:00': '12:00 PM',
      '13:00': '1:00 PM', '14:00': '2:00 PM', '15:00': '3:00 PM',
      '16:00': '4:00 PM', '17:00': '5:00 PM', '18:00': '6:00 PM',
      '19:00': '7:00 PM', '20:00': '8:00 PM', '21:00': '9:00 PM'
    };

    // Load available times when date changes
    document.getElementById('booking_date').addEventListener('change', async function() {
      const date = this.value;
      const timeSelect = document.getElementById('booking_time');

      if (!date) {
        timeSelect.innerHTML = '<option value="">Select a date first</option>';
        return;
      }

      timeSelect.innerHTML = '<option value="">Loading...</option>';
      timeSelect.disabled = true;

      try {
        const response = await axios.get('/api/available-times?date=' + date);
        const { available } = response.data;

        if (!available || available.length === 0) {
          timeSelect.innerHTML = '<option value="">No available times for this date</option>';
          return;
        }

        timeSelect.innerHTML = '<option value="">Select time</option>';
        available.forEach(time => {
          const option = document.createElement('option');
          option.value = time;
          option.textContent = timeLabels[time] || time;
          timeSelect.appendChild(option);
        });
      } catch (error) {
        timeSelect.innerHTML = '<option value="">Error loading times</option>';
        console.error('Error loading available times:', error);
      } finally {
        timeSelect.disabled = false;
      }
    });

    // Price calculation
    const prices = {
      basic: { 1: 400000, 2: 500000, 3: 600000, 4: 700000 },
      signature: { 1: 600000, 2: 750000, 3: 900000, 4: 1050000 },
      premium: { 1: 700000, 2: 850000, 3: 1000000, 4: 1150000 }
    };

    function updatePrice() {
      const packageType = document.getElementById('package').value;
      const numPeople = parseInt(document.getElementById('num_people').value);
      const price = prices[packageType][numPeople];
      document.getElementById('total-price').textContent = price.toLocaleString();
    }

    document.getElementById('package').addEventListener('change', updatePrice);
    document.getElementById('num_people').addEventListener('change', updatePrice);

    // Messenger dropdown logic
    const messengerPlaceholders = {
      whatsapp: 'Phone number (e.g. +1 234 567 8900)',
      instagram: '@username',
      kakaotalk: 'KakaoTalk ID',
      wechat: 'WeChat ID',
      line: 'Line ID',
      email_only: ''
    };

    const messengerLabels = {
      whatsapp: 'WhatsApp', instagram: 'Instagram', kakaotalk: 'KakaoTalk',
      wechat: 'WeChat', line: 'Line', email_only: 'Email Only'
    };

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
        } else if (this.value) {
          idInput.disabled = false;
          idInput.placeholder = messengerPlaceholders[this.value] || 'Enter ID';
          idInput.classList.remove('bg-gray-50');
          idInput.focus();
        } else {
          idInput.disabled = true;
          idInput.value = '';
          idInput.placeholder = 'Select a messenger first';
          idInput.classList.add('bg-gray-50');
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
      entries.forEach(entry => {
        const btn = entry.querySelector('.messenger-remove');
        if (btn) {
          btn.classList.toggle('hidden', entries.length <= 1);
        }
      });
    }

    // Bind first row
    bindMessengerRow(document.querySelector('.messenger-entry'));

    document.getElementById('add-messenger-btn').addEventListener('click', function() {
      const entry = document.createElement('div');
      entry.className = 'messenger-entry flex items-center gap-3';
      entry.innerHTML = \`
        <select class="messenger-select p-4 border border-gray-300 focus:border-black focus:outline-none text-sm w-44 shrink-0">
          <option value="">Select...</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="instagram">Instagram</option>
          <option value="kakaotalk">KakaoTalk</option>
          <option value="wechat">WeChat</option>
          <option value="line">Line</option>
          <option value="email_only">Email Only</option>
        </select>
        <input type="text" placeholder="Select a messenger first" class="messenger-id flex-1 p-4 border border-gray-300 focus:border-black focus:outline-none text-sm bg-gray-50" disabled>
        <button type="button" class="messenger-remove w-12 h-12 border border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-300 transition flex items-center justify-center shrink-0">
          <i class="fas fa-times"></i>
        </button>
      \`;
      document.getElementById('messenger-list').appendChild(entry);
      bindMessengerRow(entry);
      updateRemoveButtons();
    });

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

    // Form submission
    document.getElementById('booking-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const messengers = getMessengerData();
      if (messengers.length === 0) {
        alert('Please select at least one contact method.');
        return;
      }
      for (const m of messengers) {
        if (m.type !== 'email_only' && !m.id) {
          alert('Please enter your ' + (messengerLabels[m.type] || m.type) + ' ID.');
          return;
        }
      }

      const formData = {
        package_type: document.getElementById('package').value,
        num_people: parseInt(document.getElementById('num_people').value),
        booking_date: document.getElementById('booking_date').value,
        booking_time: document.getElementById('booking_time').value,
        customer_name: document.getElementById('customer_name').value,
        customer_email: document.getElementById('customer_email').value,
        customer_messengers: JSON.stringify(messengers),
        customer_country: document.getElementById('customer_country').value,
        preferred_language: document.getElementById('preferred_language').value,
        additional_notes: document.getElementById('additional_notes').value || ''
      };

      try {
        const response = await axios.post('/api/bookings', formData);

        if (response.data.success) {
          window.location.href = '/payment/' + response.data.id;
        }
      } catch (error) {
        console.error('Booking error:', error);
        alert(error.response?.data?.error || 'Error submitting booking. Please try again.');
      }
    });

    updatePrice();
  </script>
`;

// ==================== PAYMENT PAGE ====================
export const paymentPage = (bookingId: string) => `
  <section class="section-padding" style="background: #f9f9f9; min-height: 80vh;">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-10">
        <p class="section-subtitle">COMPLETE YOUR BOOKING</p>
        <h2 class="section-title" style="font-size: clamp(1.8rem, 3vw, 2.5rem);">Payment</h2>
      </div>

      <div id="loading-state" class="text-center py-12">
        <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
        <p class="mt-4 text-gray-500">Loading booking details...</p>
      </div>

      <div id="payment-content" class="hidden">
        <div class="bg-white border border-gray-200 p-8 mb-8">
          <h3 class="text-lg uppercase tracking-wider mb-6 pb-4 border-b border-gray-200">Booking Summary</h3>
          <div class="space-y-4">
            <div class="flex justify-between"><span class="text-gray-600">Package</span><span id="summary-package" class="font-medium uppercase"></span></div>
            <div class="flex justify-between"><span class="text-gray-600">Date & Time</span><span id="summary-datetime" class="font-medium"></span></div>
            <div class="flex justify-between"><span class="text-gray-600">Number of People</span><span id="summary-people" class="font-medium"></span></div>
            <div class="flex justify-between"><span class="text-gray-600">Customer</span><span id="summary-name" class="font-medium"></span></div>
            <div class="border-t border-gray-200 pt-4 mt-4">
              <div id="promo-breakdown" class="hidden space-y-2 mb-3 text-sm">
                <div class="flex justify-between text-gray-500"><span>Subtotal</span><span id="summary-subtotal"></span></div>
                <div class="flex justify-between text-green-700"><span id="summary-discount-label">Promo discount</span><span id="summary-discount"></span></div>
              </div>
              <div class="flex justify-between text-lg"><span class="font-medium">Total</span><span id="summary-price" class="font-semibold"></span></div>
              <div class="flex justify-end"><span id="summary-price-krw" class="text-sm text-gray-500"></span></div>
            </div>
            <div class="border-t border-gray-200 pt-5 mt-5">
              <label class="block text-xs uppercase tracking-wider mb-2">Promo Code</label>
              <div class="flex gap-2">
                <input id="promo-code-input" type="text" placeholder="Enter code" class="flex-1 p-3 border border-gray-300 focus:border-black focus:outline-none text-sm uppercase">
                <button id="promo-apply-button" type="button" class="px-5 border border-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition">Apply</button>
              </div>
              <p id="promo-message" class="text-xs mt-2 hidden"></p>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 p-8 mb-6">
          <h3 class="text-lg uppercase tracking-wider mb-2">Choose Payment Method</h3>
          <p class="text-sm text-gray-500 mb-6">Choose the option that matches your card or payment method.</p>

          <button id="toss-toggle" class="w-full border border-black px-6 py-4 mb-3 hover:bg-black hover:text-white transition text-left">
            <span class="block font-medium">Korean Payment</span>
            <span class="block text-xs opacity-60 mt-1">Korean cards & local payment methods · KRW</span>
          </button>

          <div id="toss-section" class="hidden mb-6 border border-gray-200 p-4">
            <button id="toss-pay-button" class="w-full btn-modern py-4 mt-4" disabled>
              PAY WITH TOSS PAYMENTS
            </button>
            <p id="toss-loading-message" class="text-xs text-gray-400 text-center mt-3">Preparing Toss Payments...</p>
            <p class="text-xs text-gray-400 text-center mt-2">Test mode — no real charge will be made.</p>
          </div>

          <button id="paypal-toggle" class="w-full border border-gray-300 px-6 py-4 hover:border-black transition text-left">
            <span class="block font-medium">International Payment</span>
            <span class="block text-xs opacity-60 mt-1">International cards & PayPal · USD</span>
          </button>

          <div id="paypal-section" class="hidden mt-6 pt-6 border-t border-gray-200">
            <div id="paypal-button-container"></div>
            <p class="text-xs text-gray-400 text-center mt-4">Secure payment powered by PayPal</p>
          </div>
        </div>

        <div class="text-center mt-6"><a href="/booking" class="text-sm text-gray-500 hover:text-black transition">← Cancel and return to booking</a></div>
      </div>

      <div id="error-state" class="hidden text-center py-12">
        <i class="fas fa-exclamation-circle text-3xl text-red-400"></i>
        <p id="error-message" class="mt-4 text-gray-600">Could not load booking details. Please try again.</p>
        <a href="/booking" class="inline-block mt-4 btn-modern px-8 py-3">Back to Booking</a>
      </div>

      <div id="success-state" class="hidden text-center py-12">
        <div class="bg-white border border-gray-200 p-12">
          <i class="fas fa-check-circle text-5xl text-green-500 mb-6"></i>
          <h3 class="text-2xl font-light mb-4" style="font-family: 'Cormorant Garamond', serif;">Payment Successful!</h3>
          <p class="text-gray-600 mb-2">Your booking has been confirmed.</p>
          <p class="text-gray-600 mb-8">We will contact you shortly with further details.</p>
          <p id="success-booking-id" class="text-sm text-gray-400 mb-8"></p>
          <a href="/" class="btn-modern px-8 py-3 inline-block">Return to Home</a>
        </div>
      </div>
    </div>
  </section>

  <script src="https://js.tosspayments.com/v2/standard"></script>
  <script src="https://www.paypal.com/sdk/js?client-id=BAA1pPgZ9MocU387qFjGhDvDSWRcJ8tmMhNUACphk9gx8snOoSaeU9Zbo_s3ANNsuUqg46qNINoHYsvGVg&currency=USD&components=buttons"></script>
  <script>
    const bookingId = '${bookingId}';
    const tossClientKey = 'test_ck_ma60RZblrqj70jRdxXQW8wzYWBn1';
    let bookingData = null;
    let paypalRendered = false;
    let tossPayment = null;
    let tossReady = false;

    function showSuccess(detail) {
      document.getElementById('loading-state').classList.add('hidden');
      document.getElementById('payment-content').classList.add('hidden');
      document.getElementById('error-state').classList.add('hidden');
      document.getElementById('success-state').classList.remove('hidden');
      document.getElementById('success-booking-id').textContent = 'Booking ID: #' + bookingId + (detail ? ' | ' + detail : '');
    }

    function showError(message) {
      document.getElementById('loading-state').classList.add('hidden');
      document.getElementById('payment-content').classList.add('hidden');
      document.getElementById('error-state').classList.remove('hidden');
      document.getElementById('error-message').textContent = message || 'There was an error processing your payment.';
    }

    async function confirmTossPaymentFromRedirect() {
      const params = new URLSearchParams(window.location.search);
      if (params.get('provider') !== 'toss') return false;

      if (params.get('code')) {
        showError(params.get('message') || 'Toss payment was cancelled or failed.');
        return true;
      }

      const paymentKey = params.get('paymentKey');
      const orderId = params.get('orderId');
      const amount = Number(params.get('amount'));
      if (!paymentKey || !orderId || !amount) {
        showError('Invalid Toss payment response. Please try again.');
        return true;
      }

      try {
        const response = await axios.post('/api/bookings/' + bookingId + '/toss/confirm', { paymentKey, orderId, amount });
        if (!response.data.success) throw new Error('Payment confirmation failed');
        window.history.replaceState({}, document.title, '/payment/' + bookingId);
        showSuccess('Toss Payments');
      } catch (error) {
        console.error('Toss confirmation error:', error);
        const message = error?.response?.data?.error || 'Payment confirmation failed. Please contact us with Booking ID #' + bookingId + '.';
        showError(message);
      }
      return true;
    }

    function renderBookingPrice() {
      if (!bookingData) return;
      const hasPromo = bookingData.promo_code && Number(bookingData.discount_amount || 0) > 0;
      const originalUsd = Number(bookingData.original_price_usd || bookingData.price_usd);
      const originalKrw = Number(bookingData.original_total_price || bookingData.total_price);
      document.getElementById('summary-price').textContent = '$' + Number(bookingData.price_usd).toFixed(2) + ' USD';
      document.getElementById('summary-price-krw').textContent = '(₩' + Number(bookingData.total_price).toLocaleString() + ')';
      const breakdown = document.getElementById('promo-breakdown');
      if (hasPromo) {
        breakdown.classList.remove('hidden');
        document.getElementById('summary-subtotal').textContent = '$' + originalUsd.toFixed(2) + ' / ₩' + originalKrw.toLocaleString();
        const promoLabel = bookingData.promo_discount_type === 'fixed' ? ('₩' + Number(bookingData.promo_discount_value || bookingData.discount_amount).toLocaleString() + ' off') : (Number(bookingData.promo_discount_value || bookingData.promo_discount_percent) + '% off');
        document.getElementById('summary-discount-label').textContent = bookingData.promo_code + ' (' + promoLabel + ')';
        document.getElementById('summary-discount').textContent = '-₩' + Number(bookingData.discount_amount || 0).toLocaleString();
        document.getElementById('promo-code-input').value = bookingData.promo_code;
      } else {
        breakdown.classList.add('hidden');
      }
    }

    async function applyPromoCode() {
      if (!bookingData) return;
      const input = document.getElementById('promo-code-input');
      const button = document.getElementById('promo-apply-button');
      const message = document.getElementById('promo-message');
      const code = input.value.trim().toUpperCase();
      if (!code) return;
      button.disabled = true;
      button.textContent = 'APPLYING...';
      message.classList.remove('hidden', 'text-red-600', 'text-green-700');
      try {
        const response = await axios.post('/api/bookings/' + bookingId + '/promo', { code });
        bookingData = { ...bookingData, ...response.data, promo_code: response.data.code, promo_discount_percent: response.data.discount_percent, promo_discount_type: response.data.discount_type, promo_discount_value: response.data.discount_value };
        renderBookingPrice();
        const appliedText = response.data.discount_type === 'fixed' ? ('₩' + Number(response.data.discount_value).toLocaleString() + ' off') : (Number(response.data.discount_value) + '% off');
        message.textContent = response.data.code + ' applied — ' + appliedText + '.';
        message.classList.add('text-green-700');
        // Re-render PayPal later so its order uses the discounted USD total.
        document.getElementById('paypal-button-container').innerHTML = '';
        paypalRendered = false;
      } catch (error) {
        message.textContent = error?.response?.data?.error || 'Could not apply this promo code.';
        message.classList.add('text-red-600');
      } finally {
        button.disabled = false;
        button.textContent = 'APPLY';
      }
    }

    document.getElementById('promo-apply-button').addEventListener('click', applyPromoCode);
    document.getElementById('promo-code-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { e.preventDefault(); applyPromoCode(); }
    });

    async function loadBooking() {
      if (await confirmTossPaymentFromRedirect()) return;
      try {
        const response = await axios.get('/api/bookings/' + bookingId);
        bookingData = response.data;

        if (bookingData.payment_status === 'paid') {
          showSuccess('Already paid');
          return;
        }

        document.getElementById('summary-package').textContent = bookingData.package_type;
        document.getElementById('summary-datetime').textContent = bookingData.booking_date + ' at ' + bookingData.booking_time;
        document.getElementById('summary-people').textContent = bookingData.num_people + (bookingData.num_people > 1 ? ' people' : ' person');
        document.getElementById('summary-name').textContent = bookingData.name;
        renderBookingPrice();

        document.getElementById('loading-state').classList.add('hidden');
        document.getElementById('payment-content').classList.remove('hidden');
      } catch (error) {
        console.error('Error loading booking:', error);
        showError('Could not load booking details. Please try again.');
      }
    }

    async function prepareTossPayment() {
      if (tossReady || !bookingData) return;
      const loadingMessage = document.getElementById('toss-loading-message');
      const payButton = document.getElementById('toss-pay-button');
      try {
        const tossPayments = TossPayments(tossClientKey);
        tossPayment = tossPayments.payment({ customerKey: TossPayments.ANONYMOUS });
        tossReady = true;
        payButton.disabled = false;
        loadingMessage.classList.add('hidden');
      } catch (error) {
        console.error('Toss initialization error:', error);
        loadingMessage.textContent = error?.message || 'Could not load Toss Payments.';
        payButton.disabled = true;
      }
    }

    document.getElementById('toss-toggle').addEventListener('click', async function() {
      const section = document.getElementById('toss-section');
      const opening = section.classList.contains('hidden');
      section.classList.toggle('hidden');
      if (opening) {
        document.getElementById('paypal-section').classList.add('hidden');
        await prepareTossPayment();
      }
    });

    document.getElementById('toss-pay-button').addEventListener('click', async function() {
      if (!bookingData || !tossPayment || !tossReady) return;
      const button = this;
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'OPENING PAYMENT...';
      try {
        const orderId = 'dearstory-' + bookingId + '-' + Date.now();
        const baseUrl = window.location.origin + '/payment/' + bookingId;
        await tossPayment.requestPayment({
          method: 'CARD',
          amount: { currency: 'KRW', value: Number(bookingData.total_price) },
          orderId,
          orderName: 'Dear Story ' + bookingData.package_type.toUpperCase() + ' Package',
          customerEmail: bookingData.email,
          customerName: bookingData.name,
          successUrl: baseUrl + '?provider=toss',
          failUrl: baseUrl + '?provider=toss',
          card: { useEscrow: false, flowMode: 'DEFAULT', useCardPoint: false, useAppCardOnly: false }
        });
      } catch (error) {
        console.error('Toss payment error:', error);
        if (error?.code !== 'USER_CANCEL' && error?.code !== 'PAY_PROCESS_CANCELED') {
          alert(error?.message || 'Could not open Toss Payments. Please try again.');
        }
        button.disabled = false;
        button.textContent = originalText;
      }
    });

    document.getElementById('paypal-toggle').addEventListener('click', function() {
      const section = document.getElementById('paypal-section');
      const opening = section.classList.contains('hidden');
      section.classList.toggle('hidden');

      if (opening) {
        document.getElementById('toss-section').classList.add('hidden');
      }

      if (!paypalRendered) {
        renderPayPalButton();
        paypalRendered = true;
      }
    });

    function renderPayPalButton() {
      paypal.Buttons({
        style: { layout: 'vertical', color: 'black', shape: 'rect', label: 'pay' },
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              description: 'Dear Story ' + bookingData.package_type.toUpperCase() + ' Package - Booking #' + bookingId,
              amount: { value: Number(bookingData.price_usd).toFixed(2), currency_code: 'USD' }
            }]
          });
        },
        onApprove: async function(data, actions) {
          const order = await actions.order.capture();
          const paymentId = order.id;
          try {
            await axios.patch('/api/bookings/' + bookingId + '/payment', { payment_id: paymentId });
            showSuccess('PayPal: ' + paymentId);
          } catch (error) {
            console.error('Payment confirmation error:', error);
            alert('Payment was received but there was an error confirming your booking. Please contact us with PayPal ID: ' + paymentId);
          }
        },
        onError: function(err) {
          console.error('PayPal error:', err);
          alert('There was an error processing your payment. Please try again.');
        },
        onCancel: function() { alert('Payment was cancelled. You can try again when ready.'); }
      }).render('#paypal-button-container');
    }

    loadBooking();
  </script>
`;

// ==================== ADMIN PAGE ====================
export const adminPage = () => `
  <!-- Hero Section -->
  <section class="relative h-[40vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Admin Dashboard
      </h1>
      <button onclick="logout()" class="mt-6 text-sm uppercase tracking-wider border border-white px-6 py-2 hover:bg-white hover:text-black transition">
        Logout
      </button>
    </div>
  </section>

  <script>
    function logout() {
      sessionStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
  </script>

  <!-- Admin Content -->
  <section class="section-padding" style="background: #f1f0ed;">
    <div class="max-w-7xl mx-auto">
      <!-- Tab Navigation -->
      <div class="bg-white border-b border-gray-200 mb-8">
        <div class="flex space-x-8 px-8">
          <button onclick="showTab('dashboard')" id="tab-dashboard" class="py-4 text-sm uppercase tracking-wider border-b-2 border-black">
            Dashboard
          </button>
          <button onclick="showTab('bookings')" id="tab-bookings" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Bookings
          </button>
          <button onclick="showTab('calendar')" id="tab-calendar" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Calendar
          </button>
          <button onclick="showTab('gallery')" id="tab-gallery" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Gallery
          </button>
          <button onclick="showTab('promos')" id="tab-promos" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Promo Codes
          </button>

        </div>
      </div>

      <!-- Dashboard Tab -->
      <div id="content-dashboard" class="tab-content">
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <div class="bg-white p-6 border border-gray-200">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Today's Sessions</p>
            <p id="dash-today" class="text-4xl font-light" style="font-family: 'Cormorant Garamond', serif;">0</p>
          </div>
          <div class="bg-white p-6 border border-gray-200">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Upcoming</p>
            <p id="dash-upcoming" class="text-4xl font-light" style="font-family: 'Cormorant Garamond', serif;">0</p>
          </div>
          <div class="bg-white p-6 border border-gray-200">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Paid Bookings</p>
            <p id="dash-paid" class="text-4xl font-light" style="font-family: 'Cormorant Garamond', serif;">0</p>
          </div>
          <div class="bg-white p-6 border border-gray-200">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Net Revenue</p>
            <p id="dash-revenue" class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">₩0</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 bg-white p-8 border border-gray-200">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Schedule</p>
                <h2 class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">Upcoming Sessions</h2>
              </div>
              <button onclick="showTab('bookings')" class="text-xs uppercase tracking-wider border-b border-black">View All</button>
            </div>
            <div id="dash-upcoming-list" class="space-y-3"></div>
          </div>

          <div class="bg-white p-8 border border-gray-200">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Overview</p>
            <h2 class="text-3xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Packages</h2>
            <div id="dash-packages" class="space-y-5"></div>
          </div>
        </div>

        <div class="bg-white p-8 border border-gray-200 mt-8">
          <div class="flex items-center justify-between mb-6">
            <div>
              <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Payments</p>
              <h2 class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">Recent Paid Bookings</h2>
            </div>
          </div>
          <div id="dash-recent-payments" class="space-y-3"></div>
        </div>
      </div>

      <!-- Bookings Tab -->
      <div id="content-bookings" class="tab-content hidden">
        <!-- View Toggle -->
        <div class="bg-white p-4 border border-gray-200 mb-4 flex justify-between items-center">
          <h2 class="text-2xl font-light" style="font-family: 'Cormorant Garamond', serif;">All Bookings</h2>
          <div class="flex space-x-2">
            <button onclick="showBookingView('list')" id="view-list" class="px-4 py-2 text-sm uppercase tracking-wider bg-black text-white">
              List View
            </button>
            <button onclick="showBookingView('calendar')" id="view-calendar" class="px-4 py-2 text-sm uppercase tracking-wider border border-gray-300 hover:bg-gray-50">
              Calendar View
            </button>
          </div>
        </div>
        
        <!-- List View -->
        <div id="bookings-list-view" class="bg-white p-8 border border-gray-200">
          <div id="bookings-container" class="space-y-4"></div>
        </div>
        
        <!-- Calendar View -->
        <div id="bookings-calendar-view" class="bg-white p-8 border border-gray-200 hidden">
          <div class="mb-6 flex justify-between items-center">
            <button onclick="changeMonth(-1)" class="px-4 py-2 border border-gray-300 hover:bg-gray-50">
              ← Previous
            </button>
            <h3 id="calendar-month" class="text-xl font-light" style="font-family: 'Cormorant Garamond', serif;"></h3>
            <button onclick="changeMonth(1)" class="px-4 py-2 border border-gray-300 hover:bg-gray-50">
              Next →
            </button>
          </div>
          <div id="calendar-container"></div>
        </div>

      </div>

      <!-- Calendar / Availability Tab -->
      <div id="content-calendar" class="tab-content hidden">
        <div class="bg-white p-8 border border-gray-200 mb-8">
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Default Availability</p>
          <h2 class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">Open Every Day · 10:00 AM – 9:00 PM</h2>
          <p class="text-sm text-gray-500 mt-3">
            All dates are automatically open for booking. Each reservation occupies 3 hours, and overlapping start times are automatically unavailable.
          </p>
        </div>

        <div class="bg-white p-8 border border-gray-200">
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">External / Manual</p>
          <h2 class="text-3xl font-light mb-2" style="font-family: 'Cormorant Garamond', serif;">Block a 3-Hour Session</h2>
          <p class="text-sm text-gray-500 mb-8">Use this when a booking comes from Airbnb, Trazy, KKday, or another source.</p>
          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div>
              <label class="block text-sm uppercase tracking-wider mb-2">Date</label>
              <input type="date" id="block-date" class="w-full p-3 border border-gray-300 text-sm focus:border-black focus:outline-none">
            </div>
            <div>
              <label class="block text-sm uppercase tracking-wider mb-2">Start Time</label>
              <select id="block-time" class="w-full p-3 border border-gray-300 text-sm focus:border-black focus:outline-none">
                ${Array.from({length:12}, (_,i) => { const h=i+10; const label=h<12?h+':00 AM':h===12?'12:00 PM':(h-12)+':00 PM'; return `<option value="${String(h).padStart(2,'0')}:00">${label}</option>` }).join('')}
              </select>
            </div>
            <div>
              <label class="block text-sm uppercase tracking-wider mb-2">Source / Note</label>
              <select id="block-source" class="w-full p-3 border border-gray-300 text-sm focus:border-black focus:outline-none mb-2">
                <option value="Airbnb">Airbnb</option><option value="Trazy">Trazy</option><option value="KKday">KKday</option><option value="Personal">Personal</option><option value="Other">Other</option>
              </select>
              <input type="text" id="block-reason" placeholder="Optional note" class="w-full p-3 border border-gray-300 text-sm focus:border-black focus:outline-none">
            </div>
            <div class="flex items-end">
              <button onclick="addBlockedTime()" class="w-full px-4 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white">Block 3 Hours</button>
            </div>
          </div>
          <div id="blocked-times-container" class="space-y-2"></div>
        </div>
      </div>

      <!-- Gallery Tab -->
      <div id="content-gallery" class="tab-content hidden">
        <div class="bg-white p-8 border border-gray-200 mb-8">
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Music Gallery</p>
          <h2 class="text-3xl font-light mb-2" style="font-family: 'Cormorant Garamond', serif;">Upload a Track</h2>
          <p class="text-sm text-gray-500 mb-8">Add a title, square album artwork and audio file. Published tracks appear on the website immediately.</p>
          <form id="gallery-form" class="space-y-5">
            <div>
              <label class="block text-xs uppercase tracking-wider mb-2">Title *</label>
              <input type="text" id="gallery-title" placeholder="Song title" required class="w-full p-3 border border-gray-300 text-sm">
            </div>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs uppercase tracking-wider mb-2">Album Art *</label>
                <input type="file" id="gallery-image" accept="image/*" required class="w-full p-3 border border-gray-300 text-sm bg-white">
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider mb-2">Audio File *</label>
                <input type="file" id="gallery-audio" accept="audio/*" required class="w-full p-3 border border-gray-300 text-sm bg-white">
              </div>
            </div>
            <div id="gallery-upload-status" class="text-sm text-gray-500 hidden"></div>
            <button type="submit" id="gallery-submit" class="btn-modern">Upload & Publish</button>
          </form>
        </div>
        <div id="gallery-edit-panel" class="bg-white p-8 border border-black mb-8 hidden">
          <div class="flex items-start justify-between gap-4 mb-6">
            <div>
              <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Edit Track</p>
              <h2 class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">Update Gallery Item</h2>
            </div>
            <button type="button" onclick="cancelGalleryEdit()" class="text-2xl leading-none">×</button>
          </div>
          <form id="gallery-edit-form" class="space-y-5">
            <input type="hidden" id="gallery-edit-id">
            <div>
              <label class="block text-xs uppercase tracking-wider mb-2">Title *</label>
              <input type="text" id="gallery-edit-title" required class="w-full p-3 border border-gray-300 text-sm">
            </div>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs uppercase tracking-wider mb-2">Replace Album Art <span class="normal-case text-gray-400">(optional)</span></label>
                <input type="file" id="gallery-edit-image" accept="image/*" class="w-full p-3 border border-gray-300 text-sm bg-white">
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider mb-2">Replace Audio <span class="normal-case text-gray-400">(optional)</span></label>
                <input type="file" id="gallery-edit-audio" accept="audio/*" class="w-full p-3 border border-gray-300 text-sm bg-white">
              </div>
            </div>
            <p class="text-xs text-gray-400">Leave a file empty to keep the current upload.</p>
            <div id="gallery-edit-status" class="text-sm text-gray-500 hidden"></div>
            <div class="flex gap-3">
              <button type="submit" id="gallery-edit-submit" class="btn-modern">Save Changes</button>
              <button type="button" onclick="cancelGalleryEdit()" class="px-5 py-3 border border-gray-300 text-xs uppercase tracking-wider">Cancel</button>
            </div>
          </form>
        </div>

        <div class="bg-white p-8 border border-gray-200">
          <div class="flex items-end justify-between gap-4 mb-6">
            <div>
              <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Published Music</p>
              <h2 class="text-3xl font-light" style="font-family: 'Cormorant Garamond', serif;">Gallery Items</h2>
            </div>
            <p class="text-xs text-gray-400">Use arrows to change display order</p>
          </div>
          <div id="admin-gallery-container" class="space-y-3"></div>
        </div>
      </div>


      <!-- Promo Codes Tab -->
      <div id="content-promos" class="tab-content hidden">
        <div class="bg-white p-8 border border-gray-200 mb-8">
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">Discounts</p>
          <h2 class="text-3xl font-light mb-2" style="font-family: 'Cormorant Garamond', serif;">Create Promo Code</h2>
          <p class="text-sm text-gray-500 mb-8">Create percentage or fixed KRW discounts for the payment page.</p>
          <form id="promo-form" class="grid md:grid-cols-5 gap-4 items-end">
            <div><label class="block text-xs uppercase tracking-wider mb-2">Code *</label><input id="promo-admin-code" required placeholder="WELCOME10" class="w-full p-3 border border-gray-300 text-sm uppercase"></div>
            <div><label class="block text-xs uppercase tracking-wider mb-2">Discount Type *</label><select id="promo-admin-type" class="w-full p-3 border border-gray-300 text-sm"><option value="percent">Percent (%)</option><option value="fixed">Fixed (KRW)</option></select></div><div><label id="promo-admin-value-label" class="block text-xs uppercase tracking-wider mb-2">Discount % *</label><input id="promo-admin-value" type="number" min="1" required placeholder="10" class="w-full p-3 border border-gray-300 text-sm"></div>
            <div><label class="block text-xs uppercase tracking-wider mb-2">Expires</label><input id="promo-admin-expiry" type="date" class="w-full p-3 border border-gray-300 text-sm"></div>
            <div><label class="block text-xs uppercase tracking-wider mb-2">Max Uses</label><input id="promo-admin-max" type="number" min="1" placeholder="Unlimited" class="w-full p-3 border border-gray-300 text-sm"></div>
            <div class="md:col-span-5"><button type="submit" class="btn-modern">Create Promo Code</button><span id="promo-admin-status" class="ml-4 text-sm text-gray-500"></span></div>
          </form>
        </div>
        <div class="bg-white p-8 border border-gray-200">
          <h2 class="text-3xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Promo Codes</h2>
          <div id="promo-admin-list" class="space-y-3"></div>
        </div>
      </div>

    </div>
  </section>

  <!-- Booking Detail Modal -->
  <div id="booking-modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-[9999] hidden items-center justify-center p-4" style="display:none;">
    <div id="booking-modal" class="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto relative" style="animation: modalFadeIn 0.2s ease-out;">
      <!-- Modal Header -->
      <div class="sticky top-0 bg-black text-white px-8 py-5 flex justify-between items-center z-10">
        <div>
          <h2 class="text-xl font-light" style="font-family: 'Cormorant Garamond', serif;">Booking Details</h2>
          <span id="modal-booking-id" class="text-xs text-gray-400"></span>
        </div>
        <button onclick="closeBookingModal()" class="text-white hover:text-gray-300 text-2xl leading-none">&times;</button>
      </div>

      <!-- Modal Body -->
      <div class="p-8 space-y-6">
        <!-- Status Badges Row -->
        <div class="flex flex-wrap gap-3 items-center">
          <span id="modal-package-badge" class="px-4 py-1.5 text-xs uppercase tracking-wider font-medium"></span>
          <span id="modal-status-badge" class="px-4 py-1.5 text-xs uppercase tracking-wider"></span>
          <select id="modal-progress-select" onchange="updateProgressFromModal()"
            class="text-xs px-3 py-1.5 border-0 rounded-full font-medium cursor-pointer appearance-none text-center"
            style="padding-right: 1.5rem; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22%23666%22 d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center;">
            <option value="예약확인중">예약확인중</option>
            <option value="체험전">체험전</option>
            <option value="체험완료">체험완료</option>
            <option value="후보정파일전송">후보정파일전송</option>
          </select>
        </div>

        <!-- Customer Info -->
        <div class="border border-gray-200 p-6">
          <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Customer Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Name</p>
              <p id="modal-name" class="text-sm font-medium"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
              <p id="modal-email" class="text-sm"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Country</p>
              <p id="modal-country" class="text-sm"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Preferred Language</p>
              <p id="modal-language" class="text-sm"></p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-2">Contact Methods</p>
            <div id="modal-messengers" class="space-y-1"></div>
          </div>
        </div>

        <!-- Booking Info -->
        <div class="border border-gray-200 p-6">
          <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Booking Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Package</p>
              <p id="modal-package" class="text-sm font-medium uppercase"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Number of People</p>
              <p id="modal-people" class="text-sm"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Date</p>
              <p id="modal-date" class="text-sm"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Time</p>
              <p id="modal-time" class="text-sm"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Price</p>
              <p id="modal-price" class="text-sm font-medium"></p>
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Created</p>
              <p id="modal-created" class="text-sm"></p>
            </div>
          </div>
        </div>

        <!-- Payment Info -->
        <div class="border border-gray-200 p-6">
          <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Payment</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Payment Status</p><p id="modal-payment-status" class="text-sm font-medium"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Provider</p><p id="modal-payment-provider" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Method</p><p id="modal-payment-method" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Card</p><p id="modal-card" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Card Type / Installment</p><p id="modal-card-type" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Approval No.</p><p id="modal-approval-number" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Paid At</p><p id="modal-paid-at" class="text-sm"></p></div>
            <div><p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Payment ID</p><p id="modal-payment-id" class="text-xs break-all"></p></div>
          </div>
          <a id="modal-receipt-link" href="#" target="_blank" rel="noopener noreferrer"
             class="hidden inline-block mt-5 px-4 py-2 border border-gray-300 text-xs uppercase tracking-wider hover:bg-gray-50">
            View Receipt
          </a>
        </div>

        <!-- Admin Actions -->
        <div class="border border-red-200 p-6">
          <h3 class="text-sm uppercase tracking-wider text-red-600 mb-2">Admin Actions</h3>
          <p id="modal-cancel-help" class="text-xs text-gray-500 mb-4">
            Cancelling here releases the reserved time. It does not refund a completed payment.
          </p>
          <div class="flex flex-wrap gap-3">
            <button id="modal-cancel-button" onclick="cancelBookingFromModal()"
                    class="px-5 py-3 border border-red-500 text-red-600 text-xs uppercase tracking-wider hover:bg-red-600 hover:text-white">
              Cancel Booking
            </button>
            <button id="modal-refund-button" onclick="refundBookingFromModal()"
                    class="hidden px-5 py-3 bg-red-600 text-white text-xs uppercase tracking-wider hover:bg-red-700">
              Cancel & Refund
            </button>
          </div>
          <div id="modal-refund-info" class="hidden mt-4 text-xs text-gray-500"></div>
        </div>

        <!-- Notes -->
        <div id="modal-notes-section" class="border border-gray-200 p-6 hidden">
          <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Notes / Special Requests</h3>
          <p id="modal-notes" class="text-sm text-gray-700 whitespace-pre-wrap"></p>
        </div>
      </div>
    </div>
  </div>

  <style>
    @keyframes modalFadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>

  <script>
    function showTab(tab) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('[id^="tab-"]').forEach(el => {
        el.classList.remove('border-black');
        el.classList.add('border-transparent');
      });
      document.getElementById('content-' + tab).classList.remove('hidden');
      document.getElementById('tab-' + tab).classList.remove('border-transparent');
      document.getElementById('tab-' + tab).classList.add('border-black');
    }

    let currentMonth = new Date();
    let allBookings = [];

    function showBookingView(view) {
      if (view === 'list') {
        document.getElementById('bookings-list-view').classList.remove('hidden');
        document.getElementById('bookings-calendar-view').classList.add('hidden');
        document.getElementById('view-list').classList.add('bg-black', 'text-white');
        document.getElementById('view-list').classList.remove('border', 'border-gray-300');
        document.getElementById('view-calendar').classList.remove('bg-black', 'text-white');
        document.getElementById('view-calendar').classList.add('border', 'border-gray-300');
      } else {
        document.getElementById('bookings-list-view').classList.add('hidden');
        document.getElementById('bookings-calendar-view').classList.remove('hidden');
        document.getElementById('view-calendar').classList.add('bg-black', 'text-white');
        document.getElementById('view-calendar').classList.remove('border', 'border-gray-300');
        document.getElementById('view-list').classList.remove('bg-black', 'text-white');
        document.getElementById('view-list').classList.add('border', 'border-gray-300');
        renderCalendar();
      }
    }

    function changeMonth(delta) {
      currentMonth.setMonth(currentMonth.getMonth() + delta);
      renderCalendar();
    }

    function renderCalendar() {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      
      document.getElementById('calendar-month').textContent = 
        new Date(year, month).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      let html = '<div class="grid grid-cols-7 gap-2">';
      
      // Day headers
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
        html += \`<div class="text-center text-sm font-medium p-2 border-b">\${day}</div>\`;
      });
      
      // Empty cells before first day
      for (let i = 0; i < firstDay; i++) {
        html += '<div class="p-2 border border-gray-100 bg-gray-50"></div>';
      }
      
      // Days
      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = \`\${year}-\${String(month + 1).padStart(2, '0')}-\${String(day).padStart(2, '0')}\`;
        const dayBookings = allBookings.filter(b => b.booking_date === dateStr);
        
        html += \`
          <div class="p-2 border border-gray-200 min-h-[100px] \${dayBookings.length > 0 ? 'bg-blue-50' : ''}">
            <div class="font-medium text-sm mb-1">\${day}</div>
            \${dayBookings.map(b => \`
              <div class="text-xs p-1 mb-1 rounded cursor-pointer flex items-center gap-1"
                   style="background-color: #1a1a1a; color: white;"
                   onclick="openBookingModal(\${b.id})"
                   title="\${b.name} - \${b.package_type} at \${b.booking_time}">
                <span style="width:6px;height:6px;border-radius:50%;background:\${getProgressBadgeDot(b.progress_status || '예약확인중')};flex-shrink:0;"></span>
                \${b.booking_time} - \${b.name}
              </div>
            \`).join('')}
          </div>
        \`;
      }
      
      html += '</div>';
      document.getElementById('calendar-container').innerHTML = html;
    }

    function renderDashboard() {
      const today = new Date();
      const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
      const active = allBookings.filter(b => b.status !== 'cancelled');
      const confirmed = active.filter(b => b.payment_status === 'paid' || b.status === 'confirmed');
      const todayBookings = confirmed.filter(b => b.booking_date === todayStr);
      const upcoming = confirmed.filter(b => b.booking_date >= todayStr).sort((a,b) => (a.booking_date + ' ' + a.booking_time).localeCompare(b.booking_date + ' ' + b.booking_time));
      const paid = allBookings.filter(b => b.payment_status === 'paid');
      const gross = paid.reduce((sum, b) => sum + Number(b.total_price || 0), 0);
      const refunds = allBookings.reduce((sum, b) => sum + Number(b.refund_amount || 0), 0);
      const net = Math.max(0, gross - refunds);

      document.getElementById('dash-today').textContent = String(todayBookings.length);
      document.getElementById('dash-upcoming').textContent = String(upcoming.length);
      document.getElementById('dash-paid').textContent = String(paid.length);
      document.getElementById('dash-revenue').textContent = '₩' + net.toLocaleString();

      const upcomingList = document.getElementById('dash-upcoming-list');
      upcomingList.innerHTML = upcoming.length ? upcoming.slice(0, 6).map(b => `
        <button onclick="openBookingModal(\${b.id})" class="w-full text-left border border-gray-200 p-4 hover:border-black transition flex items-center justify-between gap-4">
          <div>
            <p class="font-medium">\${b.name}</p>
            <p class="text-xs text-gray-500 mt-1">\${String(b.package_type || '').toUpperCase()} · \${b.num_people} guest\${Number(b.num_people) === 1 ? '' : 's'}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <p class="text-sm">\${b.booking_date}</p>
            <p class="text-xs text-gray-500 mt-1">\${b.booking_time}</p>
          </div>
        </button>`).join('') : '<p class="text-sm text-gray-400 py-4">No upcoming sessions.</p>';

      const packageNames = ['basic', 'signature', 'premium'];
      const packageCounts = Object.fromEntries(packageNames.map(name => [name, confirmed.filter(b => b.package_type === name).length]));
      const maxCount = Math.max(1, ...Object.values(packageCounts));
      document.getElementById('dash-packages').innerHTML = packageNames.map(name => {
        const count = packageCounts[name];
        const width = Math.round((count / maxCount) * 100);
        return `<div><div class="flex justify-between text-sm mb-2"><span class="capitalize">\${name}</span><span>\${count}</span></div><div class="h-1.5 bg-gray-100"><div class="h-1.5 bg-black" style="width:\${width}%"></div></div></div>`;
      }).join('');

      const recentPaid = [...paid].sort((a,b) => new Date(b.paid_at || b.created_at).getTime() - new Date(a.paid_at || a.created_at).getTime()).slice(0, 5);
      document.getElementById('dash-recent-payments').innerHTML = recentPaid.length ? recentPaid.map(b => `
        <button onclick="openBookingModal(\${b.id})" class="w-full text-left border-b border-gray-100 pb-3 flex items-center justify-between gap-4">
          <div><p class="text-sm font-medium">\${b.name}</p><p class="text-xs text-gray-500 mt-1">\${b.booking_date} · \${String(b.package_type || '').toUpperCase()}\${b.promo_code ? ' · ' + b.promo_code : ''}</p></div>
          <div class="text-right"><p class="text-sm">₩\${Number(b.total_price || 0).toLocaleString()}</p><p class="text-xs text-gray-400 mt-1">\${b.payment_method || b.payment_provider || 'Paid'}</p></div>
        </button>`).join('') : '<p class="text-sm text-gray-400 py-4">No paid bookings yet.</p>';
    }

    async function loadBookings() {
      try {
        const response = await axios.get('/api/bookings');
        allBookings = response.data; // Store for calendar view
        const container = document.getElementById('bookings-container');
        
        if (response.data.length === 0) {
          container.innerHTML = '<p class="text-gray-400 text-sm">No bookings yet</p>';
          renderDashboard();
          return;
        }

        container.innerHTML = response.data.map(booking => \`
          <div class="border border-gray-200 p-6 cursor-pointer hover:border-gray-400 transition" onclick="openBookingModal(\${booking.id})">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-medium">\${booking.name}</h3>
                <p class="text-sm text-gray-500">\${booking.email}</p>
                <p class="text-sm text-gray-500">\${booking.country} | \${booking.preferred_language}</p>
                <p class="text-sm text-gray-500">\${(() => {
                  try {
                    const msgs = JSON.parse(booking.phone || '[]');
                    if (Array.isArray(msgs)) return msgs.map(m => m.type === 'email_only' ? 'Email Only' : m.type + ': ' + m.id).join(', ');
                  } catch {}
                  return booking.phone || '';
                })()}</p>
              </div>
              <div class="flex items-center gap-3 flex-shrink-0">
                <span class="px-3 py-1 text-xs uppercase tracking-wider \${booking.status === 'confirmed' ? 'bg-black text-white' : 'bg-gray-200'}">
                  \${booking.status}
                </span>
                <select onchange="updateProgressStatus(\${booking.id}, this.value)"
                  class="text-xs px-3 py-1.5 border-0 rounded-full font-medium cursor-pointer appearance-none text-center"
                  style="\${getProgressBadgeStyle(booking.progress_status || '예약확인중')}; padding-right: 1.5rem; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22%23666%22 d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center;">
                  <option value="예약확인중" \${(booking.progress_status || '예약확인중') === '예약확인중' ? 'selected' : ''}>예약확인중</option>
                  <option value="체험전" \${booking.progress_status === '체험전' ? 'selected' : ''}>체험전</option>
                  <option value="체험완료" \${booking.progress_status === '체험완료' ? 'selected' : ''}>체험완료</option>
                  <option value="후보정파일전송" \${booking.progress_status === '후보정파일전송' ? 'selected' : ''}>후보정파일전송</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div><strong>Package:</strong> \${booking.package_type}</div>
              <div><strong>People:</strong> \${booking.num_people}</div>
              <div><strong>Date:</strong> \${booking.booking_date}</div>
              <div><strong>Time:</strong> \${booking.booking_time}</div>
              <div><strong>Price:</strong> ₩\${booking.total_price.toLocaleString()}</div>
              <div><strong>Payment:</strong> \${(booking.payment_status || 'pending').toUpperCase()} · \${booking.payment_method || booking.payment_provider || (booking.payment_id && String(booking.payment_id).startsWith('TOSS:') ? 'Toss Payments' : (booking.payment_status === 'paid' ? 'PayPal' : '-'))}</div>
              <div><strong>Booked:</strong> \${new Date(booking.created_at).toLocaleDateString()}</div>
            </div>
            \${booking.notes ? \`<p class="mt-4 text-sm text-gray-600"><strong>Notes:</strong> \${booking.notes}</p>\` : ''}
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    let adminGalleryItems = [];

    async function loadAdminGallery() {
      try {
        const response = await axios.get('/api/gallery?admin=1');
        adminGalleryItems = response.data || [];
        const container = document.getElementById('admin-gallery-container');

        if (!adminGalleryItems.length) {
          container.innerHTML = '<p class="text-gray-400 text-sm py-8 text-center">No tracks yet</p>';
          return;
        }

        container.innerHTML = adminGalleryItems.map((item, index) =>
          '<div class="grid grid-cols-[72px_1fr_auto] gap-4 items-center border border-gray-200 p-3">' +
            '<img src="' + item.thumbnail_url + '" class="w-[72px] h-[72px] object-cover bg-gray-100" alt="">' +
            '<div class="min-w-0"><h3 class="font-medium truncate">' + item.title + '</h3>' +
              '<p class="text-xs text-gray-400 mt-1">' + (item.is_visible == 0 ? 'HIDDEN' : 'VISIBLE') + '</p></div>' +
            '<div class="flex items-center gap-2 flex-wrap justify-end">' +
              '<button onclick="moveGalleryItem(' + index + ', -1)" ' + (index === 0 ? 'disabled' : '') + ' class="w-9 h-9 border border-gray-300 disabled:opacity-25">↑</button>' +
              '<button onclick="moveGalleryItem(' + index + ', 1)" ' + (index === adminGalleryItems.length - 1 ? 'disabled' : '') + ' class="w-9 h-9 border border-gray-300 disabled:opacity-25">↓</button>' +
              '<button onclick="editGalleryItem(' + item.id + ')" class="px-3 py-2 border border-gray-300 text-xs uppercase tracking-wider">Edit</button>' +
              '<button onclick="toggleGalleryVisibility(' + item.id + ', ' + (item.is_visible == 0 ? 'true' : 'false') + ')" class="px-3 py-2 border border-gray-300 text-xs uppercase tracking-wider">' + (item.is_visible == 0 ? 'Show' : 'Hide') + '</button>' +
              '<button onclick="deleteGalleryItem(' + item.id + ')" class="px-3 py-2 bg-black text-white text-xs uppercase tracking-wider">Delete</button>' +
            '</div>' +
          '</div>'
        ).join('');
      } catch (error) {
        console.error('Gallery load error:', error);
      }
    }

    document.getElementById('gallery-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const button = document.getElementById('gallery-submit');
      const status = document.getElementById('gallery-upload-status');
      const image = document.getElementById('gallery-image').files[0];
      const audio = document.getElementById('gallery-audio').files[0];
      if (!image || !audio) return;

      const form = new FormData();
      form.append('title', document.getElementById('gallery-title').value.trim());
      form.append('image', image);
      form.append('audio', audio);

      button.disabled = true;
      button.textContent = 'UPLOADING...';
      status.classList.remove('hidden');
      status.textContent = 'Uploading album art and audio. Please keep this page open.';

      try {
        await axios.post('/api/gallery', form, { headers: { 'Content-Type': 'multipart/form-data' } });
        e.target.reset();
        status.textContent = 'Published successfully.';
        await loadAdminGallery();
      } catch (error) {
        status.textContent = error.response?.data?.error || 'Upload failed.';
      } finally {
        button.disabled = false;
        button.textContent = 'UPLOAD & PUBLISH';
      }
    });

    function editGalleryItem(id) {
      const item = adminGalleryItems.find(item => Number(item.id) === Number(id));
      if (!item) return;
      document.getElementById('gallery-edit-id').value = item.id;
      document.getElementById('gallery-edit-title').value = item.title || '';
      document.getElementById('gallery-edit-image').value = '';
      document.getElementById('gallery-edit-audio').value = '';
      document.getElementById('gallery-edit-status').classList.add('hidden');
      const panel = document.getElementById('gallery-edit-panel');
      panel.classList.remove('hidden');
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function cancelGalleryEdit() {
      document.getElementById('gallery-edit-form').reset();
      document.getElementById('gallery-edit-id').value = '';
      document.getElementById('gallery-edit-panel').classList.add('hidden');
    }

    document.getElementById('gallery-edit-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('gallery-edit-id').value;
      if (!id) return;
      const button = document.getElementById('gallery-edit-submit');
      const status = document.getElementById('gallery-edit-status');
      const form = new FormData();
      form.append('title', document.getElementById('gallery-edit-title').value.trim());
      const image = document.getElementById('gallery-edit-image').files[0];
      const audio = document.getElementById('gallery-edit-audio').files[0];
      if (image) form.append('image', image);
      if (audio) form.append('audio', audio);

      button.disabled = true;
      button.textContent = 'SAVING...';
      status.classList.remove('hidden');
      status.textContent = 'Saving changes...';
      try {
        await axios.patch('/api/gallery/' + id, form, { headers: { 'Content-Type': 'multipart/form-data' } });
        status.textContent = 'Updated successfully.';
        await loadAdminGallery();
        setTimeout(cancelGalleryEdit, 500);
      } catch (error) {
        status.textContent = error.response?.data?.error || 'Update failed.';
      } finally {
        button.disabled = false;
        button.textContent = 'SAVE CHANGES';
      }
    });

    async function toggleGalleryVisibility(id, isVisible) {
      try {
        await axios.patch('/api/gallery/' + id + '/visibility', { is_visible: isVisible });
        await loadAdminGallery();
      } catch (error) {
        alert('Could not update visibility.');
      }
    }

    async function moveGalleryItem(index, direction) {
      const target = index + direction;
      if (target < 0 || target >= adminGalleryItems.length) return;
      const reordered = [...adminGalleryItems];
      [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
      try {
        await axios.patch('/api/gallery/reorder', { ids: reordered.map(item => item.id) });
        await loadAdminGallery();
      } catch (error) {
        alert('Could not change display order.');
      }
    }

    async function deleteGalleryItem(id) {
      if (!confirm('Delete this track and its uploaded files?')) return;
      try {
        await axios.delete('/api/gallery/' + id);
        await loadAdminGallery();
      } catch (error) {
        alert(error.response?.data?.error || 'Error deleting track.');
      }
    }

    async function loadPromoCodes() {
      const container = document.getElementById('promo-admin-list');
      try {
        const response = await axios.get('/api/promo-codes');
        const items = response.data || [];
        if (!items.length) { container.innerHTML = '<p class="text-sm text-gray-400 py-6">No promo codes yet</p>'; return; }
        container.innerHTML = items.map(item =>
          '<div class="grid md:grid-cols-[1fr_auto] gap-4 items-center border border-gray-200 p-4">' +
            '<div><div class="flex items-center gap-3"><strong class="tracking-wider">' + item.code + '</strong><span class="text-xs px-2 py-1 ' + (item.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500') + '">' + (item.is_active ? 'ACTIVE' : 'INACTIVE') + '</span></div>' +
            '<p class="text-xs text-gray-500 mt-2">' + ((item.discount_type === 'fixed') ? ('₩' + Number(item.discount_value).toLocaleString() + ' off') : (Number(item.discount_value ?? item.discount_percent) + '% off')) + ' · ' + (item.expires_at ? 'Expires ' + item.expires_at : 'No expiry') + ' · Used ' + (item.used_count || 0) + (item.max_uses ? ' / ' + item.max_uses : ' / unlimited') + '</p></div>' +
            '<div class="flex gap-2"><button onclick="togglePromoCode(' + item.id + ',' + (item.is_active ? 'false' : 'true') + ')" class="px-3 py-2 border border-gray-300 text-xs uppercase tracking-wider">' + (item.is_active ? 'Disable' : 'Enable') + '</button>' +
            '<button onclick="deletePromoCode(' + item.id + ')" class="px-3 py-2 bg-black text-white text-xs uppercase tracking-wider">Delete</button></div>' +
          '</div>'
        ).join('');
      } catch (error) { container.innerHTML = '<p class="text-sm text-red-500">Could not load promo codes.</p>'; }
    }

    document.getElementById('promo-admin-type').addEventListener('change', function() {
      const label = document.getElementById('promo-admin-value-label');
      const input = document.getElementById('promo-admin-value');
      if (this.value === 'fixed') {
        label.textContent = 'Discount Amount (KRW) *';
        input.placeholder = '50000';
        input.removeAttribute('max');
      } else {
        label.textContent = 'Discount % *';
        input.placeholder = '10';
        input.max = '100';
      }
    });

    document.getElementById('promo-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('promo-admin-status');
      try {
        await axios.post('/api/promo-codes', {
          code: document.getElementById('promo-admin-code').value,
          discount_type: document.getElementById('promo-admin-type').value,
          discount_value: Number(document.getElementById('promo-admin-value').value),
          expires_at: document.getElementById('promo-admin-expiry').value || null,
          max_uses: document.getElementById('promo-admin-max').value || null
        });
        e.target.reset(); status.textContent = 'Created.'; await loadPromoCodes();
      } catch (error) { status.textContent = error.response?.data?.error || 'Could not create promo code.'; }
    });

    async function togglePromoCode(id, active) {
      await axios.patch('/api/promo-codes/' + id, { is_active: active });
      await loadPromoCodes();
    }
    async function deletePromoCode(id) {
      if (!confirm('Delete this promo code?')) return;
      await axios.delete('/api/promo-codes/' + id);
      await loadPromoCodes();
    }

    function getProgressBadgeStyle(status) {
      switch(status) {
        case '예약확인중': return 'background-color: #fef3c7; color: #92400e';
        case '체험전': return 'background-color: #dbeafe; color: #1e40af';
        case '체험완료': return 'background-color: #d1fae5; color: #065f46';
        case '후보정파일전송': return 'background-color: #ede9fe; color: #5b21b6';
        default: return 'background-color: #f3f4f6; color: #374151';
      }
    }

    function getProgressBadgeDot(status) {
      switch(status) {
        case '예약확인중': return '#f59e0b';
        case '체험전': return '#3b82f6';
        case '체험완료': return '#10b981';
        case '후보정파일전송': return '#8b5cf6';
        default: return '#9ca3af';
      }
    }

    async function updateProgressStatus(id, status) {
      try {
        await axios.patch('/api/bookings/' + id + '/status', { progress_status: status });
        loadBookings();
      } catch (error) {
        alert('Error updating progress status');
        console.error('Error:', error);
      }
    }

    // Blocked times management
    document.getElementById('block-date').min = new Date().toISOString().split('T')[0];

    async function addBlockedTime() {
      const date = document.getElementById('block-date').value;
      const time = document.getElementById('block-time').value;
      const source = document.getElementById('block-source').value;
      const note = document.getElementById('block-reason').value.trim();
      const reason = note ? source + ' - ' + note : source;

      if (!date) {
        alert('Please select a date');
        return;
      }

      try {
        await axios.post('/api/blocked-times', { date, time, reason });
        document.getElementById('block-reason').value = '';
        loadBlockedTimes();
      } catch (error) {
        alert(error.response?.data?.error || 'Error blocking time');
      }
    }

    async function removeBlockedTime(id) {
      if (!confirm('Unblock this time slot?')) return;
      try {
        await axios.delete('/api/blocked-times/' + id);
        loadBlockedTimes();
      } catch (error) {
        alert('Error unblocking time');
      }
    }

    async function loadBlockedTimes() {
      try {
        const response = await axios.get('/api/blocked-times');
        const container = document.getElementById('blocked-times-container');

        if (response.data.length === 0) {
          container.innerHTML = '<p class="text-gray-400 text-sm">No blocked time slots</p>';
          return;
        }

        container.innerHTML = response.data.map(item => \`
          <div class="flex justify-between items-center border border-gray-200 p-4">
            <div class="flex items-center gap-6">
              <span class="text-sm font-medium">\${item.blocked_date}</span>
              <span class="text-sm">\${item.blocked_time}</span>
              <span class="text-sm text-gray-500">\${item.reason || '-'}</span>
            </div>
            <button onclick="removeBlockedTime(\${item.id})" class="px-4 py-2 border border-gray-300 text-xs uppercase tracking-wider hover:bg-red-50 hover:border-red-300 hover:text-red-600">
              Unblock
            </button>
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // ========== BOOKING MODAL ==========
    let currentModalBookingId = null;

    function openBookingModal(bookingId) {
      const booking = allBookings.find(b => b.id === bookingId);
      if (!booking) return;

      currentModalBookingId = bookingId;

      // Booking ID
      document.getElementById('modal-booking-id').textContent = 'Booking #' + booking.id;

      // Package badge
      const pkgBadge = document.getElementById('modal-package-badge');
      const pkgColors = {
        basic: 'background-color: #1a1a1a; color: white;',
        signature: 'background-color: #374151; color: white;',
        premium: 'background-color: #b45309; color: white;'
      };
      pkgBadge.style.cssText = pkgColors[booking.package_type] || pkgColors.basic;
      pkgBadge.textContent = booking.package_type;

      // Status badge
      const statusBadge = document.getElementById('modal-status-badge');
      statusBadge.textContent = booking.status || 'pending';
      statusBadge.style.cssText = booking.status === 'confirmed'
        ? 'background-color: #1a1a1a; color: white;'
        : booking.status === 'cancelled'
          ? 'background-color: #fee2e2; color: #991b1b;'
          : 'background-color: #e5e7eb; color: #374151;';

      // Progress dropdown
      const progressSelect = document.getElementById('modal-progress-select');
      const ps = booking.progress_status || '예약확인중';
      progressSelect.value = ps;
      progressSelect.style.cssText = getProgressBadgeStyle(ps) + "; padding-right: 1.5rem; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22%23666%22 d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center;";

      // Customer info
      document.getElementById('modal-name').textContent = booking.name || '';
      document.getElementById('modal-email').textContent = booking.email || '';
      document.getElementById('modal-country').textContent = booking.country || '';
      document.getElementById('modal-language').textContent = booking.preferred_language || '';

      // Messenger info
      const messengerContainer = document.getElementById('modal-messengers');
      const messengerIcons = {
        whatsapp: 'fab fa-whatsapp',
        instagram: 'fab fa-instagram',
        kakaotalk: 'fas fa-comment',
        wechat: 'fab fa-weixin',
        line: 'fab fa-line',
        email_only: 'fas fa-envelope'
      };
      const messengerLabels = {
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        kakaotalk: 'KakaoTalk',
        wechat: 'WeChat',
        line: 'Line',
        email_only: 'Email Only'
      };
      try {
        const msgs = JSON.parse(booking.phone || '[]');
        if (Array.isArray(msgs) && msgs.length > 0) {
          messengerContainer.innerHTML = msgs.map(function(m) {
            const icon = messengerIcons[m.type] || 'fas fa-comment-dots';
            const label = messengerLabels[m.type] || m.type;
            const val = m.type === 'email_only' ? 'Email Only' : (m.id || '');
            return '<div class="flex items-center gap-2 text-sm"><i class="' + icon + ' text-gray-500 w-5 text-center"></i><span class="text-gray-500">' + label + ':</span><span class="font-medium">' + val + '</span></div>';
          }).join('');
        } else {
          messengerContainer.innerHTML = '<p class="text-sm text-gray-400">No contact methods</p>';
        }
      } catch(e) {
        messengerContainer.innerHTML = '<p class="text-sm">' + (booking.phone || 'No contact info') + '</p>';
      }

      // Booking info
      document.getElementById('modal-package').textContent = booking.package_type || '';
      document.getElementById('modal-people').textContent = booking.num_people || '1';
      document.getElementById('modal-date').textContent = booking.booking_date || '';
      document.getElementById('modal-time').textContent = booking.booking_time || '';
      document.getElementById('modal-price').textContent = '₩' + (booking.total_price || 0).toLocaleString();
      document.getElementById('modal-created').textContent = booking.created_at ? new Date(booking.created_at).toLocaleString() : '';

      // Payment info
      const inferredProvider = booking.payment_provider ||
        (booking.payment_id && String(booking.payment_id).startsWith('TOSS:') ? 'Toss Payments' :
          (booking.payment_status === 'paid' ? 'PayPal' : '-'));
      document.getElementById('modal-payment-status').textContent = (booking.payment_status || 'pending').toUpperCase();
      document.getElementById('modal-payment-provider').textContent = inferredProvider;
      document.getElementById('modal-payment-method').textContent = booking.payment_method || inferredProvider || '-';

      const cardParts = [];
      if (booking.card_issuer) cardParts.push('Issuer ' + booking.card_issuer);
      if (booking.card_number) cardParts.push(booking.card_number);
      document.getElementById('modal-card').textContent = cardParts.length ? cardParts.join(' · ') : '-';

      const typeParts = [];
      if (booking.card_type) typeParts.push(booking.card_type);
      if (booking.installment_months !== null && booking.installment_months !== undefined) {
        typeParts.push(Number(booking.installment_months) === 0 ? 'One-time' : booking.installment_months + ' months');
      }
      document.getElementById('modal-card-type').textContent = typeParts.length ? typeParts.join(' · ') : '-';
      document.getElementById('modal-approval-number').textContent = booking.approval_number || '-';
      document.getElementById('modal-paid-at').textContent = booking.paid_at ? new Date(booking.paid_at).toLocaleString() : '-';
      document.getElementById('modal-payment-id').textContent = booking.payment_id || '-';

      const receiptLink = document.getElementById('modal-receipt-link');
      if (booking.receipt_url) {
        receiptLink.href = booking.receipt_url;
        receiptLink.classList.remove('hidden');
      } else {
        receiptLink.classList.add('hidden');
        receiptLink.removeAttribute('href');
      }

      const cancelButton = document.getElementById('modal-cancel-button');
      const refundButton = document.getElementById('modal-refund-button');
      const refundInfo = document.getElementById('modal-refund-info');
      const cancelHelp = document.getElementById('modal-cancel-help');

      const isTossPaid = booking.payment_status === 'paid' &&
        booking.payment_id && String(booking.payment_id).startsWith('TOSS:');

      refundButton.classList.toggle('hidden', !isTossPaid);
      refundInfo.classList.add('hidden');
      refundInfo.textContent = '';

      if (booking.payment_status === 'refunded') {
        refundButton.classList.add('hidden');
        refundInfo.classList.remove('hidden');
        const amountText = booking.refund_amount ? '₩' + Number(booking.refund_amount).toLocaleString() : '';
        const dateText = booking.refunded_at ? new Date(booking.refunded_at).toLocaleString() : '';
        refundInfo.textContent = 'REFUNDED' + (amountText ? ' · ' + amountText : '') + (dateText ? ' · ' + dateText : '');
      }
      if (booking.status === 'cancelled') {
        cancelButton.disabled = true;
        cancelButton.textContent = 'Booking Cancelled';
        cancelButton.classList.add('opacity-40', 'cursor-not-allowed');
        cancelHelp.textContent = booking.payment_status === 'refunded'
          ? 'This booking is cancelled and the payment has been refunded.'
          : booking.payment_status === 'paid'
            ? 'This booking is cancelled. Payment is still marked as paid unless you refund it separately.'
            : 'This booking is cancelled and its time has been released.';
      } else {
        cancelButton.disabled = false;
        cancelButton.textContent = 'Cancel Booking';
        cancelButton.classList.remove('opacity-40', 'cursor-not-allowed');
        cancelHelp.textContent = booking.payment_status === 'paid'
          ? 'This booking is paid. Cancelling here releases the time but does NOT refund the payment.'
          : 'Cancelling here releases the reserved time.';
      }

      // Notes
      const notesSection = document.getElementById('modal-notes-section');
      if (booking.notes) {
        notesSection.classList.remove('hidden');
        document.getElementById('modal-notes').textContent = booking.notes;
      } else {
        notesSection.classList.add('hidden');
      }

      // Show modal
      const overlay = document.getElementById('booking-modal-overlay');
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeBookingModal() {
      const overlay = document.getElementById('booking-modal-overlay');
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      currentModalBookingId = null;
    }

    async function updateProgressFromModal() {
      if (!currentModalBookingId) return;
      const select = document.getElementById('modal-progress-select');
      const newStatus = select.value;
      try {
        await axios.patch('/api/bookings/' + currentModalBookingId + '/status', { progress_status: newStatus });
        select.style.cssText = getProgressBadgeStyle(newStatus) + "; padding-right: 1.5rem; background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22%23666%22 d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center;";
        // Update local data
        const booking = allBookings.find(b => b.id === currentModalBookingId);
        if (booking) booking.progress_status = newStatus;
        renderCalendar();
        loadBookings();
      } catch (error) {
        alert('Error updating progress status');
        console.error(error);
      }
    }

    async function refundBookingFromModal() {
      if (!currentModalBookingId) return;
      const booking = allBookings.find(b => b.id === currentModalBookingId);
      if (!booking) return;

      if (booking.payment_status !== 'paid' ||
          !booking.payment_id ||
          !String(booking.payment_id).startsWith('TOSS:')) {
        alert('Automatic refund is currently available for paid Toss Payments bookings only.');
        return;
      }

      const amount = Number(booking.total_price || 0).toLocaleString();

      if (!confirm('REFUND ₩' + amount + ' AND CANCEL BOOKING #' + booking.id + '?\\n\\nThis will send a real refund request to Toss Payments and release the reserved time.')) return;
      if (!confirm('FINAL CONFIRMATION\\n\\nRefund ₩' + amount + '? This action cannot be undone from DearStory Admin.')) return;

      const reason = prompt('Refund reason', 'Customer requested cancellation');
      if (reason === null) return;

      const button = document.getElementById('modal-refund-button');
      button.disabled = true;
      button.textContent = 'REFUNDING...';

      try {
        const response = await axios.post('/api/bookings/' + booking.id + '/toss/refund', {
          reason: reason || 'Customer requested cancellation'
        });

        alert('Refund completed. Booking cancelled and time released.');
        closeBookingModal();
        await loadBookings();
        renderCalendar();
      } catch (error) {
        alert(error.response?.data?.error || 'Refund failed. The booking was not changed.');
        console.error(error);
        button.disabled = false;
        button.textContent = 'Cancel & Refund';
      }
    }

    async function cancelBookingFromModal() {
      if (!currentModalBookingId) return;
      const booking = allBookings.find(b => b.id === currentModalBookingId);
      if (!booking || booking.status === 'cancelled') return;

      const paidWarning = booking.payment_status === 'paid'
        ? '\\n\\nIMPORTANT: This booking is PAID. This action does NOT refund the payment.'
        : '';

      if (!confirm('Cancel Booking #' + booking.id + '?' + paidWarning + '\\n\\nThe reserved time will become available again.')) return;

      try {
        const response = await axios.patch('/api/bookings/' + booking.id + '/cancel');
        if (response.data.paymentStillPaid) {
          alert('Booking cancelled and time released.\\n\\nPayment is still marked PAID. Refund must be processed separately.');
        } else {
          alert('Booking cancelled. The time is available again.');
        }
        closeBookingModal();
        await loadBookings();
        renderCalendar();
      } catch (error) {
        alert(error.response?.data?.error || 'Error cancelling booking');
        console.error(error);
      }
    }

    // Close modal on overlay click
    document.getElementById('booking-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) closeBookingModal();
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeBookingModal();
    });

    loadBookings();
    loadAdminGallery();
    loadBlockedTimes();
    loadPromoCodes();
  </script>
`;

// Placeholder functions for detail pages (keeping existing structure)
// ==================== BASIC DETAIL PAGE ====================
export const basicDetailPage = () => `
  <!-- Hero Section -->
  <section class="relative h-[40vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-6xl font-light mb-4" style="font-family: 'Cormorant Garamond', serif;">
        [BASIC]
      </h1>
      <div class="w-24 h-px bg-white mx-auto mb-6"></div>
      <h2 class="text-3xl md:text-5xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Cover Song<br>Recording
      </h2>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="section-padding bg-white">
    <div class="max-w-5xl mx-auto">
      
      <!-- Vertical Line -->
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>
        
        <!-- Step 01 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PREPARATION</h3>
              <p class="text-sm text-gray-600">Choose your favorite K-pop song and language.</p>
              <p class="text-sm text-gray-600">Lyrics can be in Korean pronunciation or translated.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-music text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">01</span>
            </div>
          </div>
        </div>

        <!-- Step 02 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">02</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-microphone text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">VOCAL COACHING</h3>
              <p class="text-sm text-gray-600">Practice pronunciation, emotion, and melody</p>
              <p class="text-sm text-gray-600">with professional K-Pop vocalists.</p>
            </div>
          </div>
        </div>

        <!-- Step 03 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">STUDIO RECORDING</h3>
              <p class="text-sm text-gray-600">Record like a real artist in a professional studio</p>
              <p class="text-sm text-gray-600">with 1:1 vocal directing.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-headphones text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">03</span>
            </div>
          </div>
        </div>

        <!-- Step 04 -->
        <div class="relative mb-16">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">04</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-compact-disc text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PRODUCTION</h3>
              <p class="text-sm text-gray-600">Your track is tuned, mixed and mastered,</p>
              <p class="text-sm text-gray-600">then delivered via email with photos and videos.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="section-padding bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-6xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
        Ready to Start Your Journey?
      </h2>
      <p class="text-xl mb-12 opacity-90">
        Book your Basic experience today
      </p>
      <a href="/booking?package=basic" class="btn-modern bg-white text-black hover:bg-gray-100">
        BOOK NOW
      </a>
    </div>
  </section>
`
// ==================== SIGNATURE DETAIL PAGE ====================
export const signatureDetailPage = () => `
  <!-- Hero Section -->
  <section class="relative h-[40vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-6xl font-light mb-4" style="font-family: 'Cormorant Garamond', serif;">
        [SIGNATURE]
      </h1>
      <div class="w-24 h-px bg-white mx-auto mb-6"></div>
      <h2 class="text-3xl md:text-5xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Create your Own<br>K-Pop Song
      </h2>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="section-padding bg-white">
    <div class="max-w-5xl mx-auto">
      
      <!-- Vertical Line -->
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>
        
        <!-- Step 01 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PREPARATION</h3>
              <p class="text-sm text-gray-600">Share your story, preferred mood, and song style</p>
              <p class="text-sm text-gray-600">to create your perfect custom track.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-clipboard-list text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">01</span>
            </div>
          </div>
        </div>

        <!-- Step 02 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">02</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-sliders-h text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">DEMO REVIEW</h3>
              <p class="text-sm text-gray-600">Listen to your demo and</p>
              <p class="text-sm text-gray-600">refine the key, lyrics, and melody together.</p>
            </div>
          </div>
        </div>

        <!-- Step 03 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">VOCAL COACHING</h3>
              <p class="text-sm text-gray-600">Practice pronunciation, emotion, and expression</p>
              <p class="text-sm text-gray-600">with professional K-Pop vocalists.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-microphone text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">03</span>
            </div>
          </div>
        </div>

        <!-- Step 04 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">04</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-headphones text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">STUDIO RECORDING</h3>
              <p class="text-sm text-gray-600">Record your K-Pop song with 1:1 professional directing.</p>
            </div>
          </div>
        </div>

        <!-- Step 05 -->
        <div class="relative mb-16">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PRODUCTION</h3>
              <p class="text-sm text-gray-600">Your track is tuned, mixed and mastered,</p>
              <p class="text-sm text-gray-600">then delivered via email with photos and videos.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-compact-disc text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">05</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="section-padding bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-6xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
        Ready to Create Your Song?
      </h2>
      <p class="text-xl mb-12 opacity-90">
        Book your Signature experience today
      </p>
      <a href="/booking?package=signature" class="btn-modern bg-white text-black hover:bg-gray-100">
        BOOK NOW
      </a>
    </div>
  </section>
`
// ==================== PREMIUM DETAIL PAGE ====================
export const premiumDetailPage = () => `
  <!-- Hero Section -->
  <section class="relative h-[40vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-6xl font-light mb-4" style="font-family: 'Cormorant Garamond', serif;">
        [PREMIUM]
      </h1>
      <div class="w-24 h-px bg-white mx-auto mb-6"></div>
      <h2 class="text-3xl md:text-5xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Your Song<br>+ Album Release
      </h2>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="section-padding bg-white">
    <div class="max-w-5xl mx-auto">
      
      <!-- Vertical Line -->
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>
        
        <!-- Step 01 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PREPARATION</h3>
              <p class="text-sm text-gray-600">Share your story, preferred mood, and song style</p>
              <p class="text-sm text-gray-600">to create your perfect custom track.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-clipboard-list text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">01</span>
            </div>
          </div>
        </div>

        <!-- Step 02 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">02</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-sliders-h text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">DEMO REVIEW</h3>
              <p class="text-sm text-gray-600">Listen to your demo and</p>
              <p class="text-sm text-gray-600">refine the key, lyrics, and melody together.</p>
            </div>
          </div>
        </div>

        <!-- Step 03 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">VOCAL COACHING</h3>
              <p class="text-sm text-gray-600">Practice pronunciation, emotion, and expression</p>
              <p class="text-sm text-gray-600">with professional K-Pop vocalists.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-microphone text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">03</span>
            </div>
          </div>
        </div>

        <!-- Step 04 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">04</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-headphones text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">STUDIO RECORDING</h3>
              <p class="text-sm text-gray-600">Record your K-Pop song with</p>
              <p class="text-sm text-gray-600">1:1 professional directing.</p>
            </div>
          </div>
        </div>

        <!-- Step 05 -->
        <div class="relative mb-32">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">PRODUCTION</h3>
              <p class="text-sm text-gray-600">Your track is tuned, mixed and mastered,</p>
              <p class="text-sm text-gray-600">then delivered via email with photos and videos.</p>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-compact-disc text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">05</span>
            </div>
          </div>
        </div>

        <!-- Step 06 -->
        <div class="relative mb-16">
          <div class="flex items-center justify-between">
            <div class="w-[45%] text-right pr-8">
              <span class="text-6xl font-light text-gray-300" style="font-family: 'Cormorant Garamond', serif;">06</span>
            </div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <i class="fas fa-globe text-2xl text-gray-800"></i>
              </div>
            </div>
            <div class="w-[45%] pl-8">
              <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">ALBUM RELEASE</h3>
              <p class="text-sm text-gray-600">Your song is officially released on major streaming platforms</p>
              <p class="text-sm text-gray-600">including Spotify, Apple Music, and YouTube Music.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="section-padding bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-6xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
        Ready to Release Your Music?
      </h2>
      <p class="text-xl mb-12 opacity-90">
        Book your Premium experience today
      </p>
      <a href="/booking?package=premium" class="btn-modern bg-white text-black hover:bg-gray-100">
        BOOK NOW
      </a>
    </div>
  </section>
`
