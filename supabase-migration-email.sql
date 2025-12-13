-- ============================================
-- Email Feature Migration
-- ============================================
-- Run this in Supabase SQL Editor to add email fields to existing tables

-- Add organizer_email to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS organizer_email TEXT;

-- Add email and email_sent columns to participants table
ALTER TABLE participants ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE participants ADD COLUMN IF NOT EXISTS email_sent BOOLEAN DEFAULT FALSE;

-- ============================================
-- Migration Complete! 🎉
-- ============================================
