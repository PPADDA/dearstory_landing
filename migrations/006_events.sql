-- Public event pages; booking product settings remain the source of truth for dates and prices.
CREATE TABLE IF NOT EXISTS events (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 slug TEXT NOT NULL UNIQUE,
 product_slug TEXT NOT NULL UNIQUE REFERENCES booking_products(slug),
 title TEXT NOT NULL,
 subtitle TEXT NOT NULL DEFAULT '',
 description TEXT NOT NULL DEFAULT '',
 details TEXT NOT NULL DEFAULT '',
 cover_url TEXT NOT NULL DEFAULT '',
 is_published INTEGER NOT NULL DEFAULT 0,
 sort_order INTEGER NOT NULL DEFAULT 10,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT OR IGNORE INTO booking_products (slug,name,price_krw,extra_krw,price_usd,extra_usd,is_visible,sort_order,start_date,end_date) VALUES ('christmas-special','Christmas Song Special',450000,0,0,0,1,5,'2026-11-23','2026-12-20');
INSERT OR IGNORE INTO events (slug,product_slug,title,subtitle,description,details,is_published,sort_order) VALUES ('christmas-special','christmas-special','Christmas Song Special','Create your own Christmas song together.','Celebrate the season by creating and recording an original Christmas song with your favorite people.','One original song per group. Flat KRW 450,000 for 1–4 participants. Experience available through December 20, 2026. Book at least 3 days in advance. Includes a personalized NFC music photocard and holder.',1,5);
