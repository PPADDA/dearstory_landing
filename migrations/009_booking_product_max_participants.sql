ALTER TABLE booking_products ADD COLUMN max_participants INTEGER NOT NULL DEFAULT 4 CHECK (max_participants BETWEEN 1 AND 4);
