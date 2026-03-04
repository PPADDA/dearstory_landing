-- Add progress_status column to bookings table for tracking business workflow
ALTER TABLE bookings ADD COLUMN progress_status TEXT DEFAULT '예약확인중';
