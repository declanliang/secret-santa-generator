-- ============================================
-- Secret Santa Generator - Database Setup
-- ============================================
-- Copy and paste this entire script into Supabase SQL Editor
-- Then click "Run" to create all tables

-- 1. Events table (stores Secret Santa events)
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  group_name TEXT NOT NULL,
  organizer_name TEXT NOT NULL,
  organizer_email TEXT,
  event_type TEXT NOT NULL,
  exchange_date DATE NOT NULL,
  budget_amount NUMERIC NOT NULL,
  budget_currency TEXT NOT NULL,
  custom_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Participants table (stores people in each event)
CREATE TABLE IF NOT EXISTS participants (
  id TEXT PRIMARY KEY,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  email_sent BOOLEAN DEFAULT FALSE,
  order_index INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Restrictions table (who cannot draw whom)
CREATE TABLE IF NOT EXISTS restrictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  participant_id TEXT NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  cannot_draw_participant_id TEXT NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(participant_id, cannot_draw_participant_id)
);

-- 4. Assignments table (who gives to whom)
CREATE TABLE IF NOT EXISTS assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  giver_id TEXT NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  receiver_id TEXT NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(event_id, giver_id)
);

-- 5. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_participants_event_id ON participants(event_id);
CREATE INDEX IF NOT EXISTS idx_restrictions_event_id ON restrictions(event_id);
CREATE INDEX IF NOT EXISTS idx_assignments_event_id ON assignments(event_id);
CREATE INDEX IF NOT EXISTS idx_assignments_giver_id ON assignments(giver_id);

-- 6. Disable Row Level Security (RLS) for public access
-- This allows anyone to create and view Secret Santa events
ALTER TABLE events DISABLE ROW LEVEL SECURITY;
ALTER TABLE participants DISABLE ROW LEVEL SECURITY;
ALTER TABLE restrictions DISABLE ROW LEVEL SECURITY;
ALTER TABLE assignments DISABLE ROW LEVEL SECURITY;

-- Optional: If you want to enable RLS with permissive policies instead,
-- comment out the above lines and uncomment the following:

/*
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE restrictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

-- Allow all operations for anonymous users
CREATE POLICY "Allow public access" ON events FOR ALL USING (true);
CREATE POLICY "Allow public access" ON participants FOR ALL USING (true);
CREATE POLICY "Allow public access" ON restrictions FOR ALL USING (true);
CREATE POLICY "Allow public access" ON assignments FOR ALL USING (true);
*/

-- ============================================
-- Setup Complete! 🎉
-- Next: Get your API credentials and configure .env.local
-- ============================================
