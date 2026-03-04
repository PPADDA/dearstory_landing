-- Add payment fields to bookings table
ALTER TABLE bookings ADD COLUMN payment_id TEXT;
ALTER TABLE bookings ADD COLUMN payment_status TEXT DEFAULT 'pending';
ALTER TABLE bookings ADD COLUMN price_usd REAL;
