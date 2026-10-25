/*
  # Create Contact Submissions Table

  ## Summary
  Creates a table to store contact form submissions from the NOVA website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text) - Contact's full name
    - `email` (text) - Contact's email address
    - `company` (text) - Contact's company name (optional)
    - `message` (text) - Message from the contact
    - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add policy to allow anonymous inserts (for public contact form)
  - Only authenticated admin users can read submissions

  ## Notes
  1. Contact form submissions are public-facing, so we allow anonymous inserts
  2. Reading submissions is restricted to authenticated users only
  3. All fields use appropriate data types for form data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
