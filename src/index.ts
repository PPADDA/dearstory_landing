import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DB: D1Database;
  TOSS_SECRET_KEY: string;
  DISCORD_WEBHOOK_URL: string;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// ========== HELPER FUNCTIONS ==========

const layout = (title: string, content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      background: #ffffff;
      color: #1a1a1a;
      overflow-x: hidden;
    }
    h1, h2, h3, h4 { 
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
    
    /* Hero Section */
    .hero-section {
      position: relative;
      height: 60vh;
      overflow: hidden;
    }
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.85);
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(26, 26, 26, 0.5), rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .hero-content {
      color: white;
      max-width: 800px;
      padding: 2rem;
    }
    .hero-title {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 300;
      margin-bottom: 1.5rem;
      letter-spacing: 3px;
    }
    .hero-subtitle {
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      font-weight: 200;
      letter-spacing: 2px;
      opacity: 0.95;
    }
    
    /* Modern Card */
    .modern-card {
      background: #ffffff;
      border-radius: 0;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid #f0f0f0;
    }
    .modern-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    }
    
    /* Button Styles */
    .btn-modern {
      background: #1a1a1a;
      color: white;
      border: none;
      padding: 1rem 3rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 0;
    }
    .btn-modern:hover {
      background: #333333;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    .btn-outline {
      background: transparent;
      color: white;
      border: 2px solid white;
      padding: 1rem 3rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
    }
    .btn-outline:hover {
      background: white;
      color: #1a1a1a;
    }
    
    /* Navigation */
    .nav-link {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #1a1a1a;
      transition: all 0.3s;
      position: relative;
    }
    .nav-link:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background: #1a1a1a;
      transition: width 0.3s;
    }
    .nav-link:hover:after {
      width: 100%;
    }
    
    /* Section Title */
    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 3rem;
      text-align: center;
    }
    .section-subtitle {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
      color: #888;
    }
    
    /* Grid Layout */
    .grid-modern {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 4rem 0;
    }
    
    /* Image Overlay */
    .image-overlay {
      position: relative;
      overflow: hidden;
      height: 400px;
    }
    .image-overlay img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .image-overlay:hover img {
      transform: scale(1.05);
    }
    .overlay-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      transform: translateY(100%);
      transition: transform 0.4s;
    }
    .image-overlay:hover .overlay-content {
      transform: translateY(0);
    }
    
    /* Floating Button */
    .floating-book-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      background: #1a1a1a;
      color: white;
      padding: 1rem 2.5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .floating-book-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    }
    
    /* Spacing */
    .section-padding {
      padding: 6rem 2rem;
    }
    
    @media (max-width: 768px) {
      .section-padding {
        padding: 3rem 1.5rem;
      }
      .floating-book-btn {
        bottom: 1rem;
        right: 1rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.8rem;
      }
      .hero-title {
        letter-spacing: 2px;
      }
    }
  </style>
</head>
<body>
  <nav class="fixed w-full top-0 z-50 border-b border-gray-200" style="background: #f1f0ed;">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex justify-between items-center h-48">
        <a href="/" class="flex items-center py-2">
          <img src="/logo.png" alt="Dear Story" class="h-44 md:h-44 w-auto opacity-95 hover:opacity-100 transition" />
        </a>
        <div class="hidden md:flex space-x-10">
          <a href="/" class="nav-link">Home</a>
          <a href="/experiences" class="nav-link">Experiences</a>
          <a href="/gallery" class="nav-link">Gallery</a>
          <a href="/booking" class="nav-link">Book</a>
        </div>
        <div class="md:hidden">
          <button id="mobile-menu-btn" class="text-xl">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200" style="background: #f1f0ed;">
      <div class="px-6 py-6 space-y-4">
        <a href="/" class="block nav-link">Home</a>
        <a href="/experiences" class="block nav-link">Experiences</a>
        <a href="/gallery" class="block nav-link">Gallery</a>
        <a href="/booking" class="block nav-link">Book</a>
      </div>
    </div>
  </nav>
  
  <!-- Floating Book Now Button -->
  <a href="/booking" class="floating-book-btn">
    <i class="fas fa-calendar-check"></i>
    <span>Book Now</span>
  </a>
  
  <main class="mt-48">
    ${content}
  </main>
  
  <footer class="bg-black text-white py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div class="flex flex-col items-center text-center md:items-start md:text-left">
          <!-- White Logo Image -->
          <img src="/logo-white.png" alt="Dear Story Logo" class="h-32 md:h-36 w-auto mb-4 opacity-90 transition hover:opacity-100" />
          <p class="text-gray-400 text-sm leading-relaxed italic">Your Letter, Our Melody</p>
        </div>
        <div>
          <h4 class="text-sm uppercase tracking-wider mb-6 font-medium">Quick Links</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="/" class="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/experiences" class="text-gray-400 hover:text-white transition">Experiences</a></li>
            <li><a href="/gallery" class="text-gray-400 hover:text-white transition">Gallery</a></li>
            <li><a href="/booking" class="text-gray-400 hover:text-white transition">Book Now</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm uppercase tracking-wider mb-6 font-medium">Contact</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li>dearmusicstudio@gmail.com</li>
            <li>Seoul, South Korea</li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm uppercase tracking-wider mb-6 font-medium">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/dearstory_studio" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@dearstudio_music" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-500 text-sm">© 2026 Dear Story. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu?.classList.toggle('hidden');
    });
  </script>
</body>
</html>
`


// Send a paid-booking notification to the private Discord booking-alerts channel.
// The webhook URL lives only in Cloudflare as DISCORD_WEBHOOK_URL.
async function sendBookingNotification(env: Bindings, booking: any, provider: string) {
  if (!env.DISCORD_WEBHOOK_URL) {
    console.warn('DISCORD_WEBHOOK_URL is not configured')
    return
  }

  const amount = provider === 'PayPal' && booking.price_usd
    ? `$${Number(booking.price_usd).toFixed(2)} USD`
    : `₩${Number(booking.total_price || 0).toLocaleString()} KRW`

  const payload = {
    username: 'DearStory Booking',
    embeds: [{
      title: '🎵 New DearStory Booking',
      color: 0x111111,
      fields: [
        { name: 'Booking', value: `#${booking.id}`, inline: true },
        { name: 'Payment', value: booking.payment_method || provider, inline: true },
        { name: 'Amount', value: amount, inline: true },
        { name: 'Customer', value: booking.name || '-', inline: true },
        { name: 'Package', value: String(booking.package_type || '-').toUpperCase(), inline: true },
        { name: 'Guests', value: String(booking.num_people || '-'), inline: true },
        { name: 'Date', value: booking.booking_date || '-', inline: true },
        { name: 'Time', value: booking.booking_time || '-', inline: true },
        { name: 'Email', value: booking.email || '-', inline: false }
      ],
      footer: { text: 'DearStory · Paid booking confirmed' },
      timestamp: new Date().toISOString()
    }]
  }

  try {
    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      console.error('Discord notification failed:', response.status, await response.text())
    }
  } catch (error) {
    // A Discord outage must never turn a successful payment into a failed payment.
    console.error('Discord notification error:', error)
  }
}

// ========== API ROUTES ==========

// Get all bookings (admin)
app.get('/api/bookings', async (c) => {
  const { env } = c
  const result = await env.DB.prepare(`
    SELECT * FROM bookings ORDER BY created_at DESC
  `).all()
  return c.json(result.results)
})

// Create booking
app.post('/api/bookings', async (c) => {
  const { env } = c
  const data = await c.req.json()

  // Calculate price based on package and number of people
  const pricesKRW: Record<string, { base: number, additional: number }> = {
    basic: { base: 400000, additional: 100000 },
    signature: { base: 600000, additional: 150000 },
    premium: { base: 700000, additional: 150000 }
  }
  const pricesUSD: Record<string, { base: number, additional: number }> = {
    basic: { base: 310, additional: 80 },
    signature: { base: 470, additional: 120 },
    premium: { base: 540, additional: 120 }
  }

  const krw = pricesKRW[data.package_type]
  const usd = pricesUSD[data.package_type]
  if (!krw || !usd) {
    return c.json({ error: 'Invalid package type' }, 400)
  }

  const totalPrice = krw.base + (krw.additional * (data.num_people - 1))
  const totalPriceUSD = usd.base + (usd.additional * (data.num_people - 1))

  // Check if booking date is at least 3 days from now
  const now = new Date()
  const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3)
  const bookingDate = new Date(data.booking_date + 'T00:00:00')
  if (bookingDate < minDate) {
    return c.json({ error: 'Bookings must be made at least 3 days in advance' }, 400)
  }

  // Validate the requested start time (10:00-21:00, on the hour)
  const allowedTimes = Array.from({ length: 12 }, (_, i) => `${String(i + 10).padStart(2, '0')}:00`)
  if (!allowedTimes.includes(data.booking_time)) {
    return c.json({ error: 'Invalid booking time' }, 400)
  }


  // Every booking / external block occupies a 3-hour window.
  // Reject any requested session whose 3-hour window overlaps an existing one.
  const timeToMinutes = (time: string) => {
    const [h, m] = time.split(':').map(Number)
    return h * 60 + m
  }
  const requestedStart = timeToMinutes(data.booking_time)
  const requestedEnd = requestedStart + 180

  const bookingRows = await env.DB.prepare(`
    SELECT booking_time FROM bookings WHERE booking_date = ? AND status != 'cancelled'
  `).bind(data.booking_date).all()
  const blockedRows = await env.DB.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(data.booking_date).all()

  const occupiedStarts = [
    ...bookingRows.results.map((r: any) => r.booking_time),
    ...blockedRows.results.map((r: any) => r.blocked_time)
  ]

  const hasOverlap = occupiedStarts.some((time: string) => {
    const occupiedStart = timeToMinutes(time)
    const occupiedEnd = occupiedStart + 180
    return requestedStart < occupiedEnd && requestedEnd > occupiedStart
  })

  if (hasOverlap) {
    return c.json({ error: 'This time overlaps another 3-hour session' }, 400)
  }

  const messengerData = data.customer_messengers || '[]'

  const result = await env.DB.prepare(`
    INSERT INTO bookings (name, email, phone, country, preferred_language, package_type, num_people, booking_date, booking_time, total_price, price_usd, payment_status, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)
  `).bind(
    data.customer_name,
    data.customer_email,
    messengerData,
    data.customer_country,
    data.preferred_language,
    data.package_type,
    data.num_people,
    data.booking_date,
    data.booking_time,
    totalPrice,
    totalPriceUSD,
    data.additional_notes || null
  ).run()

  return c.json({ success: true, id: result.meta.last_row_id, totalPrice, totalPriceUSD })
})

// Complete payment for a booking
app.patch('/api/bookings/:id/payment', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const { payment_id } = await c.req.json()

  if (!payment_id) {
    return c.json({ error: 'Payment ID is required' }, 400)
  }

  // Get booking details
  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) {
    return c.json({ error: 'Booking not found' }, 404)
  }
  if (booking.payment_status === 'paid') {
    return c.json({ error: 'Booking is already paid' }, 400)
  }

  // Update payment status
  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'paid', payment_id = ?, payment_provider = 'PayPal', payment_method = 'PayPal', status = 'confirmed'
    WHERE id = ?
  `).bind(payment_id, id).run()

  const paidBooking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (paidBooking) {
    await sendBookingNotification(env, paidBooking, 'PayPal')
  }

  return c.json({ success: true })
})

// Confirm Toss Payments payment (server-side)
app.post('/api/bookings/:id/toss/confirm', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  let body: { paymentKey?: string; orderId?: string; amount?: number }
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid request body' }, 400)
  }

  const { paymentKey, orderId, amount } = body
  if (!paymentKey || !orderId || !Number.isFinite(Number(amount))) {
    return c.json({ error: 'paymentKey, orderId and amount are required' }, 400)
  }

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.payment_status === 'paid') return c.json({ error: 'Booking is already paid' }, 400)

  const expectedAmount = Number(booking.total_price)
  if (Number(amount) !== expectedAmount) {
    return c.json({ error: 'Payment amount does not match booking amount' }, 400)
  }

  const expectedOrderPrefix = `dearstory-${id}-`
  if (!orderId.startsWith(expectedOrderPrefix)) {
    return c.json({ error: 'Invalid order ID' }, 400)
  }

  if (!env.TOSS_SECRET_KEY) {
    console.error('TOSS_SECRET_KEY is not configured')
    return c.json({ error: 'Payment service is not configured' }, 500)
  }

  const auth = btoa(`${env.TOSS_SECRET_KEY}:`)
  const tossResponse = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ paymentKey, orderId, amount: expectedAmount })
  })

  const tossResult = await tossResponse.json() as any

  // TEMP DEBUG: logs only easy-pay provider metadata, never paymentKey/card data.
  console.log('TOSS_EASYPAY_DEBUG', {
    method: tossResult?.method ?? null,
    easyPayProvider: tossResult?.easyPay?.provider ?? null,
    easyPayAmount: tossResult?.easyPay?.amount ?? null,
    easyPayDiscountAmount: tossResult?.easyPay?.discountAmount ?? null
  })
  if (!tossResponse.ok) {
    console.error('Toss confirm error:', tossResult)
    return c.json({
      error: tossResult?.message || 'Toss payment confirmation failed',
      code: tossResult?.code || 'TOSS_CONFIRM_FAILED'
    }, tossResponse.status as any)
  }

  if (tossResult.status !== 'DONE' || Number(tossResult.totalAmount) !== expectedAmount) {
    console.error('Unexpected Toss payment result:', tossResult)
    return c.json({ error: 'Payment verification failed' }, 400)
  }

  const card = tossResult.card || null
  const receiptUrl = tossResult.receipt?.url || null

  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'paid',
        payment_id = ?,
        payment_provider = 'Toss Payments',
        payment_method = ?,
        card_number = ?,
        card_issuer = ?,
        card_type = ?,
        installment_months = ?,
        approval_number = ?,
        receipt_url = ?,
        paid_at = ?,
        status = 'confirmed'
    WHERE id = ? AND payment_status != 'paid'
  `).bind(
    `TOSS:${paymentKey}`,
    tossResult.easyPay?.provider
      ? `${tossResult.easyPay.provider} · ${tossResult.method || '간편결제'}`
      : (tossResult.method || 'Toss Payments'),
    card?.number || null,
    card?.issuerCode || null,
    card?.cardType || null,
    card?.installmentPlanMonths ?? null,
    card?.approveNo || null,
    receiptUrl,
    tossResult.approvedAt || new Date().toISOString(),
    id
  ).run()

  const paidBooking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (paidBooking) {
    await sendBookingNotification(env, paidBooking, 'Toss Payments')
  }

  return c.json({ success: true, paymentKey, orderId })
})

// Get booking details for payment page
app.get('/api/bookings/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first()
  if (!booking) {
    return c.json({ error: 'Booking not found' }, 404)
  }
  return c.json(booking)
})

// Cancel a Toss payment in full, then cancel the booking.
// The booking is only marked refunded/cancelled after Toss confirms the cancellation.
app.post('/api/bookings/:id/toss/refund', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.payment_status === 'refunded') {
    return c.json({ success: true, alreadyRefunded: true })
  }
  if (booking.payment_status !== 'paid') {
    return c.json({ error: 'This booking is not marked as paid' }, 400)
  }
  if (!booking.payment_id || !String(booking.payment_id).startsWith('TOSS:')) {
    return c.json({ error: 'Automatic refund is currently available for Toss Payments only' }, 400)
  }
  if (!env.TOSS_SECRET_KEY) {
    return c.json({ error: 'Toss payment service is not configured' }, 500)
  }

  let body: { reason?: string } = {}
  try {
    body = await c.req.json()
  } catch {}

  const paymentKey = String(booking.payment_id).slice(5)
  const cancelReason = (body.reason || 'Customer requested cancellation').slice(0, 200)
  const auth = btoa(`${env.TOSS_SECRET_KEY}:`)

  const tossResponse = await fetch(
    `https://api.tosspayments.com/v1/payments/${encodeURIComponent(paymentKey)}/cancel`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `dearstory-refund-${id}`
      },
      body: JSON.stringify({ cancelReason })
    }
  )

  const tossResult = await tossResponse.json() as any
  if (!tossResponse.ok) {
    console.error('Toss refund error:', tossResult)
    return c.json({
      error: tossResult?.message || 'Toss refund failed',
      code: tossResult?.code || 'TOSS_REFUND_FAILED'
    }, tossResponse.status as any)
  }

  const latestCancel = Array.isArray(tossResult.cancels) && tossResult.cancels.length
    ? tossResult.cancels[tossResult.cancels.length - 1]
    : null

  await env.DB.prepare(`
    UPDATE bookings
    SET payment_status = 'refunded',
        status = 'cancelled',
        refund_amount = ?,
        refund_reason = ?,
        refunded_at = ?
    WHERE id = ?
  `).bind(
    latestCancel?.cancelAmount ?? booking.total_price,
    latestCancel?.cancelReason ?? cancelReason,
    latestCancel?.canceledAt ?? new Date().toISOString(),
    id
  ).run()

  return c.json({
    success: true,
    refundAmount: latestCancel?.cancelAmount ?? booking.total_price,
    refundedAt: latestCancel?.canceledAt ?? null
  })
})

// Cancel a booking without refunding the payment.
// Availability automatically re-opens because cancelled bookings are excluded from conflict checks.
app.patch('/api/bookings/:id/cancel', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  const booking = await env.DB.prepare(`SELECT * FROM bookings WHERE id = ?`).bind(id).first() as any
  if (!booking) return c.json({ error: 'Booking not found' }, 404)
  if (booking.status === 'cancelled') return c.json({ success: true, alreadyCancelled: true })

  await env.DB.prepare(`
    UPDATE bookings
    SET status = 'cancelled'
    WHERE id = ?
  `).bind(id).run()

  return c.json({
    success: true,
    paymentStillPaid: booking.payment_status === 'paid'
  })
})

// Update booking progress status
app.patch('/api/bookings/:id/status', async (c) => {
  const { env } = c
  const id = c.req.param('id')
  const { progress_status } = await c.req.json()

  const validStatuses = ['예약확인중', '체험전', '체험완료', '후보정파일전송']
  if (!validStatuses.includes(progress_status)) {
    return c.json({ success: false, error: 'Invalid progress status' }, 400)
  }

  await env.DB.prepare(`UPDATE bookings SET progress_status = ? WHERE id = ?`).bind(progress_status, id).run()
  return c.json({ success: true })
})

// Get gallery items
app.get('/api/gallery', async (c) => {
  const { env } = c
  const type = c.req.query('type')

  let stmt
  if (type) {
    stmt = env.DB.prepare(`SELECT * FROM gallery_items WHERE type = ? ORDER BY display_order ASC, created_at DESC`).bind(type)
  } else {
    stmt = env.DB.prepare(`SELECT * FROM gallery_items ORDER BY display_order ASC, created_at DESC`)
  }

  const result = await stmt.all()
  return c.json(result.results)
})

// Add gallery item (admin)
app.post('/api/gallery', async (c) => {
  const { env } = c
  const data = await c.req.json()

  // Determine type based on which URL is provided
  const type = data.audio_url ? 'audio' : 'image'
  const fileUrl = data.audio_url || data.image_url || ''
  const thumbnailUrl = data.audio_url ? (data.image_url || null) : null

  const result = await env.DB.prepare(`
    INSERT INTO gallery_items (type, title, description, file_url, thumbnail_url, display_order)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    type,
    data.title,
    data.description || null,
    fileUrl,
    thumbnailUrl,
    data.display_order || 0
  ).run()

  return c.json({ success: true, id: result.meta.last_row_id })
})

// Delete gallery item (admin)
app.delete('/api/gallery/:id', async (c) => {
  const { env } = c
  const id = c.req.param('id')

  await env.DB.prepare(`DELETE FROM gallery_items WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

// ========== AVAILABILITY & BLOCKED TIMES API ==========

// DearStory is open by default every day from 10:00 AM to 9:00 PM.
// Every DearStory booking and every external/manual block occupies 3 hours.
const BOOKING_START_TIMES = Array.from({ length: 12 }, (_, i) => `${String(i + 10).padStart(2, '0')}:00`)
const SESSION_MINUTES = 180

const timeToMinutes = (time: string) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

const overlapsThreeHourWindow = (candidate: string, occupied: string) => {
  const candidateStart = timeToMinutes(candidate)
  const occupiedStart = timeToMinutes(occupied)
  return candidateStart < occupiedStart + SESSION_MINUTES && candidateStart + SESSION_MINUTES > occupiedStart
}

// Get all manually/external blocked starts
app.get('/api/blocked-times', async (c) => {
  const db = c.env.DB
  const result = await db.prepare(`
    SELECT * FROM blocked_times ORDER BY blocked_date ASC, blocked_time ASC
  `).all()
  return c.json(result.results)
})

// Add an external booking/manual block. It occupies 3 hours from its start time.
app.post('/api/blocked-times', async (c) => {
  const db = c.env.DB
  const { date, time, reason } = await c.req.json()

  if (!date || !BOOKING_START_TIMES.includes(time)) {
    return c.json({ error: 'Please select a valid date and time (10:00-21:00)' }, 400)
  }

  const bookingRows = await db.prepare(`
    SELECT booking_time FROM bookings WHERE booking_date = ? AND status != 'cancelled'
  `).bind(date).all()

  const blockedRows = await db.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(date).all()

  const occupiedStarts = [
    ...bookingRows.results.map((r: any) => r.booking_time),
    ...blockedRows.results.map((r: any) => r.blocked_time)
  ]

  const hasConflict = occupiedStarts.some((occupied: string) =>
    overlapsThreeHourWindow(time, occupied)
  )

  if (hasConflict) {
    return c.json({ error: 'This 3-hour block overlaps an existing booking or blocked session' }, 400)
  }

  const result = await db.prepare(`
    INSERT INTO blocked_times (blocked_date, blocked_time, reason) VALUES (?, ?, ?)
  `).bind(date, time, reason || 'Manual block').run()

  return c.json({ success: true, id: result.meta.last_row_id })
})

app.delete('/api/blocked-times/:id', async (c) => {
  await c.env.DB.prepare(`DELETE FROM blocked_times WHERE id = ?`).bind(c.req.param('id')).run()
  return c.json({ success: true })
})

// Public booking availability:
// all 10:00-21:00 start times are open by default,
// except starts whose 3-hour session overlaps a DearStory booking or manual/external block.
app.get('/api/available-times', async (c) => {
  const db = c.env.DB
  const date = c.req.query('date')
  if (!date) return c.json({ error: 'date parameter is required' }, 400)

  const bookedResult = await db.prepare(`
    SELECT booking_time FROM bookings WHERE booking_date = ? AND status != 'cancelled'
  `).bind(date).all()
  const bookedStarts = bookedResult.results.map((r: any) => r.booking_time)

  const blockedResult = await db.prepare(`
    SELECT blocked_time FROM blocked_times WHERE blocked_date = ?
  `).bind(date).all()
  const blockedStarts = blockedResult.results.map((r: any) => r.blocked_time)

  const occupiedStarts = [...bookedStarts, ...blockedStarts]

  const unavailable = BOOKING_START_TIMES.filter((candidate: string) =>
    occupiedStarts.some((occupied: string) => overlapsThreeHourWindow(candidate, occupied))
  )
  const available = BOOKING_START_TIMES.filter((time: string) => !unavailable.includes(time))

  return c.json({
    available,
    unavailable,
    booked: bookedStarts,
    blocked: blockedStarts
  })
})

// ========== FRONTEND ROUTES ==========

// Home page
app.get('/', (c) => {
  const content = `
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=80" alt="Music Studio" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">DEAR STORY</h1>
          <p class="hero-subtitle">CREATE YOUR K-POP EXPERIENCE</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding" style="background: #ffffff;">
      <div class="max-w-7xl mx-auto">
        <p class="section-subtitle">EXPERIENCE</p>
        <h2 class="section-title">Become a K-pop Artist</h2>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg leading-relaxed text-gray-600 mb-8">
            Dear Story is an exclusive K-pop experience studio for international visitors. 
            Record your favorite songs, create original tracks, and release your music on major platforms.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding" style="background: #f1f0ed;">
      <div class="max-w-7xl mx-auto">
        <p class="section-subtitle">OUR SERVICES</p>
        <h2 class="section-title">Three Unique Experiences</h2>
        
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <!-- Basic -->
          <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/basic'">
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-microphone text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">BASIC</h3>
                <p class="text-lg">₩400,000</p>
              </div>
              <p class="text-gray-600 mb-6">Professional vocal coaching and studio recording of your favorite K-pop songs.</p>
              <a href="/experience/basic" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>

          <!-- Signature -->
          <div class="modern-card group cursor-pointer border-2 border-black relative" onclick="window.location.href='/experience/signature'">
            <span class="absolute top-4 left-4 text-xs uppercase tracking-wider bg-black text-white px-3 py-1 z-10">Most Popular</span>
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-music text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">SIGNATURE</h3>
                <p class="text-lg">₩600,000</p>
              </div>
              <p class="text-gray-600 mb-6">Compose an original K-pop song tailored to your story and style.</p>
              <a href="/experience/signature" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>

          <!-- Premium -->
          <div class="modern-card group cursor-pointer" onclick="window.location.href='/experience/premium'">
            <div class="bg-white p-12 flex items-center justify-center" style="min-height: 200px;">
              <i class="fas fa-compact-disc text-8xl text-gray-800"></i>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-light">PREMIUM</h3>
                <p class="text-lg">₩700,000</p>
              </div>
              <p class="text-gray-600 mb-6">Everything in Signature plus official release on Spotify, Apple Music, and more.</p>
              <a href="/experience/premium" class="text-sm uppercase tracking-wider hover:opacity-70 transition">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding" style="background: #ffffff;">
      <div class="max-w-7xl mx-auto">
        <p class="section-subtitle">HOW IT WORKS</p>
        <h2 class="section-title">Simple Process</h2>
        
        <div class="grid md:grid-cols-4 gap-8 mt-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">1</div>
            <h3 class="text-xl mb-3" style="font-family: 'Cormorant Garamond', serif;">Choose Package</h3>
            <p class="text-gray-600">Select your perfect experience from three options</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">2</div>
            <h3 class="text-xl mb-3" style="font-family: 'Cormorant Garamond', serif;">Book Session</h3>
            <p class="text-gray-600">Reserve your preferred date and time</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">3</div>
            <h3 class="text-xl mb-3" style="font-family: 'Cormorant Garamond', serif;">Record</h3>
            <p class="text-gray-600">Professional coaching and studio recording</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">4</div>
            <h3 class="text-xl mb-3" style="font-family: 'Cormorant Garamond', serif;">Receive</h3>
            <p class="text-gray-600">Get your professionally produced track</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="/experiences" class="btn-modern bg-black text-white hover:bg-gray-800">
            VIEW ALL EXPERIENCES
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-black text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-light mb-6" style="font-family: 'Cormorant Garamond', serif;">
          Ready to Begin?
        </h2>
        <p class="text-xl mb-12 opacity-90">
          Start your K-pop journey today
        </p>
        <a href="/booking" class="btn-modern bg-white text-black hover:bg-gray-100">
          BOOK YOUR EXPERIENCE
        </a>
      </div>
    </section>
  `

  return c.html(layout('Dear Story - Your Letter, Our Melody', content))
})

// Import page content
import { experiencesPage, galleryPage, bookingPage, paymentPage, adminPage, basicDetailPage, signatureDetailPage, premiumDetailPage } from './pages'

// Experiences page
app.get('/experiences', (c) => {
  return c.html(layout('Experiences - Dear Story', experiencesPage()))
})

// Experience detail pages
app.get('/experience/basic', (c) => {
  return c.html(layout('Basic Experience - Dear Story', basicDetailPage()))
})

app.get('/experience/signature', (c) => {
  return c.html(layout('Signature Experience - Dear Story', signatureDetailPage()))
})

app.get('/experience/premium', (c) => {
  return c.html(layout('Premium Experience - Dear Story', premiumDetailPage()))
})

// Gallery page
app.get('/gallery', (c) => {
  return c.html(layout('Gallery - Dear Story', galleryPage()))
})

// Booking page
app.get('/booking', (c) => {
  const packageParam = c.req.query('package') || 'basic'
  return c.html(layout('Book Now - Dear Story', bookingPage(packageParam)))
})

// Payment page
app.get('/payment/:id', (c) => {
  const id = c.req.param('id')
  return c.html(layout('Payment - Dear Story', paymentPage(id)))
})

// Admin page
// Admin login page
app.get('/admin/login', (c) => {
  const content = `
    <section class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full mx-4">
        <div class="bg-white p-12 border border-gray-200">
          <h1 class="text-3xl font-light text-center mb-8" style="font-family: 'Cormorant Garamond', serif;">
            Admin Login
          </h1>
          
          <form id="login-form" class="space-y-6">
            <div>
              <label class="block text-sm uppercase tracking-wider mb-2">Password</label>
              <input 
                type="password" 
                id="admin-password" 
                required 
                class="w-full p-4 border border-gray-300 focus:border-black focus:outline-none"
                placeholder="Enter admin password"
              >
            </div>
            
            <button type="submit" class="w-full btn-modern py-4">
              LOGIN
            </button>
            
            <div id="error-message" class="hidden text-red-600 text-sm text-center"></div>
          </form>
          
          <div class="mt-8 text-center">
            <a href="/" class="text-sm text-gray-500 hover:text-black">← Back to Home</a>
          </div>
        </div>
      </div>
    </section>
    
    <script>
      document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('admin-password').value;
        const errorDiv = document.getElementById('error-message');
        
        try {
          const response = await axios.post('/api/admin/login', { password });
          
          if (response.data.success) {
            // Store token in sessionStorage
            sessionStorage.setItem('admin_token', response.data.token);
            window.location.href = '/admin';
          }
        } catch (error) {
          errorDiv.textContent = 'Invalid password';
          errorDiv.classList.remove('hidden');
        }
      });
    </script>
  `;

  return c.html(layout('Admin Login - Dear Story', content));
});

// Admin login API
app.post('/api/admin/login', async (c) => {
  const { password } = await c.req.json();

  // Simple password check (in production, use proper authentication)
  const ADMIN_PASSWORD = 'dkdldb0!!!'; // Change this to your secure password

  if (password === ADMIN_PASSWORD) {
    // Generate simple token (in production, use JWT or proper session)
    const token = Buffer.from(password + ':' + Date.now()).toString('base64');
    return c.json({ success: true, token });
  }

  return c.json({ success: false }, 401);
});

// Protected admin page
app.get('/admin', (c) => {
  const adminContent = adminPage();
  const content = `
    <script>
      // Check authentication
      const token = sessionStorage.getItem('admin_token');
      if (!token) {
        window.location.href = '/admin/login';
      }
    </script>
    ${adminContent}
  `;

  return c.html(layout('Admin Dashboard - Dear Story', content));
});

// NOTE: Static files in dist/ folder are automatically served by Cloudflare Pages
// serveStatic is not needed for production deployment
// For local development, static files are served directly from dist/ folder by wrangler

export default app
