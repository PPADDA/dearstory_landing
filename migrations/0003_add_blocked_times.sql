CREATE TABLE blocked_times (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  blocked_date TEXT NOT NULL,
  blocked_time TEXT NOT NULL,
  reason TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_blocked_times_date ON blocked_times(blocked_date);
