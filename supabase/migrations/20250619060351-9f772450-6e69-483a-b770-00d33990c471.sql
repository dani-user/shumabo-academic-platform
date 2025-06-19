
-- Drop existing tables to recreate with proper structure
DROP TABLE IF EXISTS grades CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS announcements CASCADE;
DROP TABLE IF EXISTS timetable CASCADE;
DROP TABLE IF EXISTS classes CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS teachers CASCADE;
DROP TABLE IF EXISTS families CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- Drop existing types
DROP TYPE IF EXISTS user_role CASCADE;

-- Create user_role enum
CREATE TYPE user_role AS ENUM ('student', 'family', 'teacher', 'registrar', 'admin', 'director');

-- Create users table (main user table)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  unique_id TEXT UNIQUE NOT NULL, -- e.g., LSSS1701000, LSSF1701000
  fname TEXT NOT NULL,
  mname TEXT,
  lname TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role user_role NOT NULL,
  gender TEXT CHECK (gender IN ('male', 'female')),
  disabled BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create students table (one-to-one with users where role='student')
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  current_grade INTEGER CHECK (current_grade BETWEEN 9 AND 12),
  current_section TEXT,
  stream TEXT CHECK (stream IN ('Natural', 'Social') OR stream IS NULL),
  student_id TEXT UNIQUE, -- e.g., BDU1404474
  fname_am TEXT,
  mname_am TEXT,
  lname_am TEXT,
  birth_date_ec TEXT, -- Ethiopian Calendar
  marital_status TEXT,
  nationality TEXT,
  birth_woreda TEXT,
  special_birth_place TEXT,
  enrollment_date_ec TEXT,
  high_school_stream TEXT,
  mother_fname TEXT,
  mother_lname TEXT,
  father_occupation TEXT,
  mother_occupation TEXT,
  religion TEXT,
  ethnic TEXT,
  photo TEXT, -- URL or base64
  contact JSONB, -- Contact information object
  recorded_by TEXT,
  recorded_date TIMESTAMP WITH TIME ZONE,
  last_modified_by TEXT,
  last_modified_date TIMESTAMP WITH TIME ZONE,
  family_id UUID, -- Links to family user
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create pending_registrations table
CREATE TABLE pending_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id), -- Optional for new students
  form_data JSONB NOT NULL,
  type TEXT CHECK (type IN ('new', 'upgrade')),
  submitted_by UUID REFERENCES users(id),
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create registrations table (history)
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  academic_year TEXT NOT NULL, -- e.g., '2023/2024'
  semester INTEGER CHECK (semester IN (1, 2)),
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  section TEXT,
  reg_date TIMESTAMP WITH TIME ZONE,
  gpa_sem DECIMAL(3,2),
  gpa_cum DECIMAL(3,2),
  result TEXT CHECK (result IN ('Pass', 'Fail', 'In-Progress')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_code TEXT UNIQUE NOT NULL, -- e.g., 'AMH11'
  course_name TEXT NOT NULL, -- e.g., 'Amharic G11'
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  is_core BOOLEAN DEFAULT false, -- Core subject for promotion
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teaching_assignments table
CREATE TABLE teaching_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_code TEXT REFERENCES courses(course_code),
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  section TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create advisor_assignments table
CREATE TABLE advisor_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  section TEXT,
  is_advisor BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create assessments table
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_code TEXT REFERENCES courses(course_code),
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('quiz', 'test', 'assignment')),
  due_date TIMESTAMP WITH TIME ZONE,
  description TEXT,
  attachments TEXT[], -- Array of URLs or file paths
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lesson_plans table
CREATE TABLE lesson_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  section TEXT,
  week_start DATE,
  plan JSONB, -- e.g., { "Monday": [...], "Tuesday": [...] }
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create pending_grades table
CREATE TABLE pending_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  course_code TEXT REFERENCES courses(course_code),
  teacher_id UUID REFERENCES users(id),
  semester INTEGER CHECK (semester IN (1, 2)),
  quiz DECIMAL(5,2) DEFAULT 0,
  midterm DECIMAL(5,2) DEFAULT 0,
  assignment DECIMAL(5,2) DEFAULT 0,
  final_exam DECIMAL(5,2) DEFAULT 0,
  total_mark DECIMAL(5,2) GENERATED ALWAYS AS (quiz + midterm + assignment + final_exam) STORED,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create grades table
CREATE TABLE grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  course_code TEXT REFERENCES courses(course_code),
  teacher_id UUID REFERENCES users(id),
  semester INTEGER CHECK (semester IN (1, 2)),
  quiz DECIMAL(5,2) DEFAULT 0,
  midterm DECIMAL(5,2) DEFAULT 0,
  assignment DECIMAL(5,2) DEFAULT 0,
  final_exam DECIMAL(5,2) DEFAULT 0,
  total_mark DECIMAL(5,2) GENERATED ALWAYS AS (quiz + midterm + assignment + final_exam) STORED,
  letter_grade TEXT CHECK (letter_grade IN ('A', 'B', 'C', 'D', 'F')),
  approved_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create attendance table
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  grade INTEGER CHECK (grade BETWEEN 9 AND 12),
  section TEXT,
  status TEXT CHECK (status IN ('present', 'absent', 'excused')),
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create announcements table
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES users(id),
  target TEXT, -- 'all', 'students', 'staff', or JSON for specific grade/section
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create academic_calendars table
CREATE TABLE academic_calendars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year INTEGER NOT NULL,
  reg_start DATE,
  reg_end DATE,
  exam_start DATE,
  exam_end DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create id_cards table
CREATE TABLE id_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  unique_id TEXT NOT NULL,
  role user_role NOT NULL,
  issue_date DATE DEFAULT CURRENT_DATE,
  barcode TEXT, -- Base64 or URL for barcode
  photo TEXT, -- URL or base64 for photo
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisor_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_calendars ENABLE ROW LEVEL SECURITY;
ALTER TABLE id_cards ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for users table
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Staff can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('teacher', 'admin', 'director', 'registrar')
    )
  );

-- Create RLS policies for students
CREATE POLICY "Students can view own data" ON students
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Staff can view all students" ON students
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('teacher', 'admin', 'director', 'registrar')
    )
  );

-- Create RLS policies for grades
CREATE POLICY "Students can view own grades" ON grades
  FOR SELECT USING (
    student_id IN (SELECT id FROM students WHERE user_id = auth.uid())
  );

CREATE POLICY "Teachers can view grades for their courses" ON grades
  FOR SELECT USING (teacher_id = auth.uid());

CREATE POLICY "Staff can view all grades" ON grades
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'director', 'registrar')
    )
  );

-- Create RLS policies for announcements
CREATE POLICY "All authenticated users can view announcements" ON announcements
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Staff can create announcements" ON announcements
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('teacher', 'admin', 'director', 'registrar')
    )
  );

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO users (id, unique_id, fname, lname, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'unique_id', 'TEMP' || substr(NEW.id::text, 1, 8)),
    COALESCE(NEW.raw_user_meta_data->>'fname', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'lname', ''),
    NEW.email,
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Insert sample data
INSERT INTO courses (course_code, course_name, grade, is_core) VALUES
('AMH11', 'Amharic Grade 11', 11, true),
('ENG11', 'English Grade 11', 11, true),
('MATH11', 'Mathematics Grade 11', 11, true),
('PHY11', 'Physics Grade 11', 11, false),
('CHEM11', 'Chemistry Grade 11', 11, false),
('BIO11', 'Biology Grade 11', 11, false),
('HIST11', 'History Grade 11', 11, false),
('GEO11', 'Geography Grade 11', 11, false);

INSERT INTO academic_calendars (year, reg_start, reg_end, exam_start, exam_end) VALUES
(2024, '2024-09-01', '2024-09-14', '2024-12-15', '2024-12-30'),
(2025, '2025-09-01', '2025-09-14', '2025-12-15', '2025-12-30');

-- Insert sample announcements
INSERT INTO announcements (sender_id, target, title, body) VALUES
((SELECT id FROM users WHERE role = 'admin' LIMIT 1), 'all', 'Welcome to Academic Year 2024/2025', 'We are excited to begin the new academic year. Please check your schedules and prepare for the semester ahead.'),
((SELECT id FROM users WHERE role = 'admin' LIMIT 1), 'students', 'Midterm Examination Schedule', 'Midterm examinations will commence on December 15th, 2024. Please review your timetables and prepare accordingly.');
