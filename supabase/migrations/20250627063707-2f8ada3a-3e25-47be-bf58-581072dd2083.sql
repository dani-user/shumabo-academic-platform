
-- Add password field to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS password TEXT;

-- Update existing users with default passwords for testing
UPDATE users SET password = crypt('password123', gen_salt('bf')) WHERE password IS NULL;

-- Create a function to authenticate users by unique_id and password
CREATE OR REPLACE FUNCTION authenticate_user(user_unique_id TEXT, user_password TEXT)
RETURNS TABLE(
  id UUID,
  unique_id TEXT,
  fname TEXT,
  mname TEXT,
  lname TEXT,
  email TEXT,
  phone TEXT,
  role TEXT,
  gender TEXT,
  disabled BOOLEAN
) 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    u.id,
    u.unique_id,
    u.fname,
    u.mname,
    u.lname,
    u.email,
    u.phone,
    u.role::TEXT,
    u.gender,
    u.disabled
  FROM users u
  WHERE u.unique_id = user_unique_id 
    AND u.password = crypt(user_password, u.password)
    AND u.disabled = false;
END;
$$;

-- Insert some test users with passwords
INSERT INTO users (id, unique_id, fname, mname, lname, email, role, password, disabled)
VALUES 
  (
    '550e8400-e29b-41d4-a716-446655440001',
    'LSSA1701001',
    'Michael',
    'James',
    'Johnson',
    'admin@school.edu',
    'admin',
    crypt('password123', gen_salt('bf')),
    false
  ),
  (
    '550e8400-e29b-41d4-a716-446655440002',
    'LSSS1701001',
    'John',
    'David',
    'Doe',
    'john.doe@student.edu',
    'student',
    crypt('password123', gen_salt('bf')),
    false
  ),
  (
    '550e8400-e29b-41d4-a716-446655440003',
    'LSST1701001',
    'Sarah',
    'Marie',
    'Smith',
    'sarah.smith@teacher.edu',
    'teacher',
    crypt('password123', gen_salt('bf')),
    false
  ),
  (
    '550e8400-e29b-41d4-a716-446655440004',
    'LSSF1701001',
    'Jane',
    'Elizabeth',
    'Doe',
    'jane.doe@family.edu',
    'family',
    crypt('password123', gen_salt('bf')),
    false
  )
ON CONFLICT (unique_id) DO UPDATE SET
  password = EXCLUDED.password,
  disabled = EXCLUDED.disabled;
