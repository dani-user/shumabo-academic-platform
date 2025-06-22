
-- Insert authentication users into auth.users table
-- Note: For testing, all users will have password: "password123"

INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_user_meta_data
) VALUES 
  (
    '550e8400-e29b-41d4-a716-446655440001',
    'admin@school.edu',
    crypt('password123', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"fname": "Michael", "mname": "James", "lname": "Johnson", "role": "admin", "unique_id": "LSSA1701001"}'
  ),
  (
    '550e8400-e29b-41d4-a716-446655440002',
    'john.doe@student.edu',
    crypt('password123', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"fname": "John", "mname": "David", "lname": "Doe", "role": "student", "unique_id": "LSSS1701001"}'
  ),
  (
    '550e8400-e29b-41d4-a716-446655440003',
    'sarah.smith@teacher.edu',
    crypt('password123', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"fname": "Sarah", "mname": "Marie", "lname": "Smith", "role": "teacher", "unique_id": "LSST1701001"}'
  ),
  (
    '550e8400-e29b-41d4-a716-446655440004',
    'jane.doe@family.edu',
    crypt('password123', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"fname": "Jane", "mname": "Elizabeth", "lname": "Doe", "role": "family", "unique_id": "LSSF1701001"}'
  )
ON CONFLICT (id) DO NOTHING;

-- Insert sample courses (ignore if they already exist)
INSERT INTO courses (course_code, course_name, grade, is_core)
VALUES 
  ('MATH11', 'Mathematics Grade 11', 11, true),
  ('ENG11', 'English Grade 11', 11, true),
  ('PHY11', 'Physics Grade 11', 11, true),
  ('CHEM11', 'Chemistry Grade 11', 11, true),
  ('BIO11', 'Biology Grade 11', 11, true)
ON CONFLICT (course_code) DO NOTHING;
