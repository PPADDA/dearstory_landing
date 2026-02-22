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
  <!-- Hero Section -->
  <section class="relative h-[60vh] flex items-center justify-center bg-black">
    <div class="relative z-10 text-center text-white px-4">
      <p class="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">PORTFOLIO</p>
      <h1 class="text-5xl md:text-7xl font-light" style="font-family: 'Cormorant Garamond', serif;">
        Our Work
      </h1>
    </div>
  </section>

  <!-- Audio Samples Section -->
  <section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <p class="text-sm uppercase tracking-wider mb-4 text-gray-500">LISTEN</p>
        <h2 class="text-4xl md:text-5xl font-light" style="font-family: 'Cormorant Garamond', serif;">
          Audio Samples
        </h2>
      </div>

      <div id="gallery-container" class="grid md:grid-cols-3 gap-8">
        <!-- Gallery items will be loaded here -->
        <div class="text-center py-20 col-span-full">
          <p class="text-gray-400 text-sm uppercase tracking-wider">Loading...</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
  <section class="section-padding" style="background: #f1f0ed;">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <p class="text-sm uppercase tracking-wider mb-4 text-gray-500">TESTIMONIALS</p>
        <h2 class="text-4xl md:text-5xl font-light" style="font-family: 'Cormorant Garamond', serif;">
          What Our Clients Say
        </h2>
      </div>

      <div id="reviews-container" class="grid md:grid-cols-2 gap-8">
        <!-- Reviews will be loaded here -->
        <div class="text-center py-20 col-span-full">
          <p class="text-gray-400 text-sm uppercase tracking-wider">Loading...</p>
        </div>
      </div>
    </div>
  </section>

  <script>
    async function loadGalleryItems() {
      try {
        const response = await axios.get('/api/gallery');
        const container = document.getElementById('gallery-container');
        
        if (response.data.length === 0) {
          container.innerHTML = \`
            <div class="col-span-full text-center py-20">
              <p class="text-gray-400 text-sm uppercase tracking-wider">No audio samples yet</p>
            </div>
          \`;
          return;
        }

        container.innerHTML = response.data.map(item => \`
          <div class="modern-card">
            \${item.thumbnail_url ? \`
              <div class="h-64 overflow-hidden">
                <img src="\${item.thumbnail_url}" alt="\${item.title}" class="w-full h-full object-cover">
              </div>
            \` : ''}
            <div class="p-6">
              <h3 class="text-xl font-light mb-3">\${item.title}</h3>
              <p class="text-sm text-gray-600 mb-4">\${item.description || ''}</p>
              \${item.type === 'audio' ? \`
                <audio controls class="w-full">
                  <source src="\${item.file_url}" type="audio/mpeg">
                </audio>
              \` : (item.type === 'image' && !item.thumbnail_url ? \`
                <div class="h-64 overflow-hidden">
                  <img src="\${item.file_url}" alt="\${item.title}" class="w-full h-full object-cover">
                </div>
              \` : '')}
            </div>
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error loading gallery:', error);
      }
    }

    async function loadReviews() {
      try {
        const response = await axios.get('/api/reviews');
        const container = document.getElementById('reviews-container');
        
        if (response.data.length === 0) {
          container.innerHTML = \`
            <div class="col-span-full text-center py-20">
              <p class="text-gray-400 text-sm uppercase tracking-wider">No reviews yet</p>
            </div>
          \`;
          return;
        }

        container.innerHTML = response.data.map(review => \`
          <div class="bg-white p-8 border border-gray-200">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-lg">\${review.customer_name.charAt(0)}</span>
              </div>
              <div>
                <h3 class="font-medium">\${review.customer_name}</h3>
                <div class="text-sm text-gray-400">
                  \${'\u2605'.repeat(review.rating)}\${'\u2606'.repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed italic">"\${review.review_text}"</p>
            <p class="text-xs text-gray-400 mt-4">\${new Date(review.created_at).toLocaleDateString()}</p>
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    }

    loadGalleryItems();
    loadReviews();
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
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
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

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Email *</label>
            <input type="email" id="customer_email" name="customer_email" required 
                   placeholder="john@example.com"
                   class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
          </div>
          <div>
            <label class="block text-sm uppercase tracking-wider mb-3">Phone *</label>
            <input type="tel" id="customer_phone" name="customer_phone" required 
                   placeholder="+1 234 567 8900"
                   class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none text-sm">
          </div>
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
    // Set minimum date
    document.getElementById('booking_date').min = new Date().toISOString().split('T')[0];

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

    // Form submission
    document.getElementById('booking-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        package_type: document.getElementById('package').value,
        num_people: parseInt(document.getElementById('num_people').value),
        booking_date: document.getElementById('booking_date').value,
        booking_time: document.getElementById('booking_time').value,
        customer_name: document.getElementById('customer_name').value,
        customer_email: document.getElementById('customer_email').value,
        customer_phone: document.getElementById('customer_phone').value,
        customer_country: document.getElementById('customer_country').value,
        preferred_language: document.getElementById('preferred_language').value,
        additional_notes: document.getElementById('additional_notes').value || ''
      };

      try {
        const response = await axios.post('/api/bookings', formData);
        
        if (response.data.success) {
          alert('Booking submitted successfully! We will contact you soon.');
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Booking error:', error);
        alert('Error submitting booking. Please try again.');
      }
    });

    updatePrice();
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
          <button onclick="showTab('bookings')" id="tab-bookings" class="py-4 text-sm uppercase tracking-wider border-b-2 border-black">
            Bookings
          </button>
          <button onclick="showTab('gallery')" id="tab-gallery" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Gallery
          </button>
          <button onclick="showTab('reviews')" id="tab-reviews" class="py-4 text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-gray-300">
            Reviews
          </button>
        </div>
      </div>

      <!-- Bookings Tab -->
      <div id="content-bookings" class="tab-content">
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

      <!-- Gallery Tab -->
      <div id="content-gallery" class="tab-content hidden">
        <div class="bg-white p-8 border border-gray-200 mb-8">
          <h2 class="text-2xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Add Gallery Item</h2>
          <form id="gallery-form" class="space-y-4">
            <input type="text" id="gallery-title" placeholder="Title" required class="w-full p-3 border border-gray-300 text-sm">
            <textarea id="gallery-description" placeholder="Description" class="w-full p-3 border border-gray-300 text-sm"></textarea>
            <input type="url" id="gallery-audio" placeholder="Audio URL" class="w-full p-3 border border-gray-300 text-sm">
            <input type="url" id="gallery-image" placeholder="Image URL" class="w-full p-3 border border-gray-300 text-sm">
            <button type="submit" class="btn-modern">Add Item</button>
          </form>
        </div>
        <div class="bg-white p-8 border border-gray-200">
          <h2 class="text-2xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Gallery Items</h2>
          <div id="admin-gallery-container" class="space-y-4"></div>
        </div>
      </div>

      <!-- Reviews Tab -->
      <div id="content-reviews" class="tab-content hidden">
        <div class="bg-white p-8 border border-gray-200 mb-8">
          <h2 class="text-2xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Add Review</h2>
          <form id="review-form" class="space-y-4">
            <input type="text" id="review-name" placeholder="Customer Name" required class="w-full p-3 border border-gray-300 text-sm">
            <input type="text" id="review-country" placeholder="Country" required class="w-full p-3 border border-gray-300 text-sm">
            <select id="review-package" required class="w-full p-3 border border-gray-300 text-sm">
              <option value="">Select Package</option>
              <option value="basic">Basic</option>
              <option value="signature">Signature</option>
              <option value="premium">Premium</option>
            </select>
            <select id="review-rating" required class="w-full p-3 border border-gray-300 text-sm">
              <option value="">Select Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <textarea id="review-text" placeholder="Review Text" required class="w-full p-3 border border-gray-300 text-sm"></textarea>
            <button type="submit" class="btn-modern">Add Review</button>
          </form>
        </div>
        <div class="bg-white p-8 border border-gray-200">
          <h2 class="text-2xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">Reviews</h2>
          <div id="admin-reviews-container" class="space-y-4"></div>
        </div>
      </div>
    </div>
  </section>

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
              <div class="text-xs p-1 mb-1 bg-black text-white rounded cursor-pointer" 
                   title="\${b.name} - \${b.package_type} at \${b.booking_time}">
                \${b.booking_time} - \${b.name}
              </div>
            \`).join('')}
          </div>
        \`;
      }
      
      html += '</div>';
      document.getElementById('calendar-container').innerHTML = html;
    }

    async function loadBookings() {
      try {
        const response = await axios.get('/api/bookings');
        allBookings = response.data; // Store for calendar view
        const container = document.getElementById('bookings-container');
        
        if (response.data.length === 0) {
          container.innerHTML = '<p class="text-gray-400 text-sm">No bookings yet</p>';
          return;
        }

        container.innerHTML = response.data.map(booking => \`
          <div class="border border-gray-200 p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-medium">\${booking.name}</h3>
                <p class="text-sm text-gray-500">\${booking.email} | \${booking.phone}</p>
                <p class="text-sm text-gray-500">\${booking.country} | \${booking.preferred_language}</p>
              </div>
              <span class="px-3 py-1 text-xs uppercase tracking-wider \${booking.status === 'confirmed' ? 'bg-black text-white' : 'bg-gray-200'}">
                \${booking.status}
              </span>
            </div>
            <div class="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div><strong>Package:</strong> \${booking.package_type}</div>
              <div><strong>People:</strong> \${booking.num_people}</div>
              <div><strong>Date:</strong> \${booking.booking_date}</div>
              <div><strong>Time:</strong> \${booking.booking_time}</div>
              <div><strong>Price:</strong> ₩\${booking.total_price.toLocaleString()}</div>
              <div><strong>Booked:</strong> \${new Date(booking.created_at).toLocaleDateString()}</div>
            </div>
            \${booking.notes ? \`<p class="mt-4 text-sm text-gray-600"><strong>Notes:</strong> \${booking.notes}</p>\` : ''}
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function loadAdminGallery() {
      try {
        const response = await axios.get('/api/gallery');
        const container = document.getElementById('admin-gallery-container');
        
        if (response.data.length === 0) {
          container.innerHTML = '<p class="text-gray-400 text-sm">No items yet</p>';
          return;
        }

        container.innerHTML = response.data.map(item => \`
          <div class="flex justify-between items-center border border-gray-200 p-4">
            <div>
              <h3 class="font-medium">\${item.title}</h3>
              <p class="text-sm text-gray-500">\${item.description || 'No description'}</p>
            </div>
            <button onclick="deleteGalleryItem(\${item.id})" class="px-4 py-2 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-800">
              Delete
            </button>
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function loadAdminReviews() {
      try {
        const response = await axios.get('/api/reviews');
        const container = document.getElementById('admin-reviews-container');
        
        if (response.data.length === 0) {
          container.innerHTML = '<p class="text-gray-400 text-sm">No reviews yet</p>';
          return;
        }

        container.innerHTML = response.data.map(review => \`
          <div class="flex justify-between items-center border border-gray-200 p-4">
            <div>
              <h3 class="font-medium">\${review.customer_name} - \${'\u2605'.repeat(review.rating)}</h3>
              <p class="text-sm text-gray-500">\${review.review_text}</p>
            </div>
            <button onclick="deleteReview(\${review.id})" class="px-4 py-2 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-800">
              Delete
            </button>
          </div>
        \`).join('');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    document.getElementById('gallery-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/gallery', {
          title: document.getElementById('gallery-title').value,
          description: document.getElementById('gallery-description').value,
          audio_url: document.getElementById('gallery-audio').value,
          image_url: document.getElementById('gallery-image').value
        });
        alert('Item added!');
        e.target.reset();
        loadAdminGallery();
      } catch (error) {
        alert('Error adding item');
      }
    });

    document.getElementById('review-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/reviews', {
          customer_name: document.getElementById('review-name').value,
          country: document.getElementById('review-country').value,
          package_type: document.getElementById('review-package').value,
          rating: parseInt(document.getElementById('review-rating').value),
          review_text: document.getElementById('review-text').value
        });
        alert('Review added!');
        e.target.reset();
        loadAdminReviews();
      } catch (error) {
        alert('Error adding review');
      }
    });

    async function deleteGalleryItem(id) {
      if (!confirm('Delete this item?')) return;
      try {
        await axios.delete('/api/gallery/' + id);
        alert('Deleted!');
        loadAdminGallery();
      } catch (error) {
        alert('Error deleting');
      }
    }

    async function deleteReview(id) {
      if (!confirm('Delete this review?')) return;
      try {
        await axios.delete('/api/reviews/' + id);
        alert('Deleted!');
        loadAdminReviews();
      } catch (error) {
        alert('Error deleting');
      }
    }

    loadBookings();
    loadAdminGallery();
    loadAdminReviews();
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
