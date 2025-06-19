export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      academic_calendars: {
        Row: {
          created_at: string | null
          exam_end: string | null
          exam_start: string | null
          id: string
          reg_end: string | null
          reg_start: string | null
          year: number
        }
        Insert: {
          created_at?: string | null
          exam_end?: string | null
          exam_start?: string | null
          id?: string
          reg_end?: string | null
          reg_start?: string | null
          year: number
        }
        Update: {
          created_at?: string | null
          exam_end?: string | null
          exam_start?: string | null
          id?: string
          reg_end?: string | null
          reg_start?: string | null
          year?: number
        }
        Relationships: []
      }
      advisor_assignments: {
        Row: {
          created_at: string | null
          grade: number | null
          id: string
          is_advisor: boolean | null
          section: string | null
          teacher_id: string | null
        }
        Insert: {
          created_at?: string | null
          grade?: number | null
          id?: string
          is_advisor?: boolean | null
          section?: string | null
          teacher_id?: string | null
        }
        Update: {
          created_at?: string | null
          grade?: number | null
          id?: string
          is_advisor?: boolean | null
          section?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advisor_assignments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          body: string
          created_at: string | null
          id: string
          sender_id: string | null
          target: string | null
          title: string
        }
        Insert: {
          body: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          target?: string | null
          title: string
        }
        Update: {
          body?: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          target?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcements_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          attachments: string[] | null
          course_code: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          teacher_id: string | null
          title: string
          type: string | null
        }
        Insert: {
          attachments?: string[] | null
          course_code?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          teacher_id?: string | null
          title: string
          type?: string | null
        }
        Update: {
          attachments?: string[] | null
          course_code?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          teacher_id?: string | null
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessments_course_code_fkey"
            columns: ["course_code"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_code"]
          },
          {
            foreignKeyName: "assessments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance: {
        Row: {
          created_at: string | null
          date: string
          grade: number | null
          id: string
          recorded_by: string | null
          section: string | null
          status: string | null
          student_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          grade?: number | null
          id?: string
          recorded_by?: string | null
          section?: string | null
          status?: string | null
          student_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          grade?: number | null
          id?: string
          recorded_by?: string | null
          section?: string | null
          status?: string | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          course_code: string
          course_name: string
          created_at: string | null
          grade: number | null
          id: string
          is_core: boolean | null
        }
        Insert: {
          course_code: string
          course_name: string
          created_at?: string | null
          grade?: number | null
          id?: string
          is_core?: boolean | null
        }
        Update: {
          course_code?: string
          course_name?: string
          created_at?: string | null
          grade?: number | null
          id?: string
          is_core?: boolean | null
        }
        Relationships: []
      }
      grades: {
        Row: {
          approved_by: string | null
          assignment: number | null
          course_code: string | null
          created_at: string | null
          final_exam: number | null
          id: string
          letter_grade: string | null
          midterm: number | null
          quiz: number | null
          semester: number | null
          student_id: string | null
          teacher_id: string | null
          total_mark: number | null
        }
        Insert: {
          approved_by?: string | null
          assignment?: number | null
          course_code?: string | null
          created_at?: string | null
          final_exam?: number | null
          id?: string
          letter_grade?: string | null
          midterm?: number | null
          quiz?: number | null
          semester?: number | null
          student_id?: string | null
          teacher_id?: string | null
          total_mark?: number | null
        }
        Update: {
          approved_by?: string | null
          assignment?: number | null
          course_code?: string | null
          created_at?: string | null
          final_exam?: number | null
          id?: string
          letter_grade?: string | null
          midterm?: number | null
          quiz?: number | null
          semester?: number | null
          student_id?: string | null
          teacher_id?: string | null
          total_mark?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "grades_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grades_course_code_fkey"
            columns: ["course_code"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_code"]
          },
          {
            foreignKeyName: "grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grades_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      id_cards: {
        Row: {
          barcode: string | null
          created_at: string | null
          id: string
          issue_date: string | null
          photo: string | null
          role: Database["public"]["Enums"]["user_role"]
          unique_id: string
          user_id: string | null
        }
        Insert: {
          barcode?: string | null
          created_at?: string | null
          id?: string
          issue_date?: string | null
          photo?: string | null
          role: Database["public"]["Enums"]["user_role"]
          unique_id: string
          user_id?: string | null
        }
        Update: {
          barcode?: string | null
          created_at?: string | null
          id?: string
          issue_date?: string | null
          photo?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          unique_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "id_cards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_plans: {
        Row: {
          created_at: string | null
          grade: number | null
          id: string
          plan: Json | null
          section: string | null
          teacher_id: string | null
          week_start: string | null
        }
        Insert: {
          created_at?: string | null
          grade?: number | null
          id?: string
          plan?: Json | null
          section?: string | null
          teacher_id?: string | null
          week_start?: string | null
        }
        Update: {
          created_at?: string | null
          grade?: number | null
          id?: string
          plan?: Json | null
          section?: string | null
          teacher_id?: string | null
          week_start?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_grades: {
        Row: {
          assignment: number | null
          course_code: string | null
          created_at: string | null
          final_exam: number | null
          id: string
          midterm: number | null
          quiz: number | null
          semester: number | null
          status: string | null
          student_id: string | null
          teacher_id: string | null
          total_mark: number | null
        }
        Insert: {
          assignment?: number | null
          course_code?: string | null
          created_at?: string | null
          final_exam?: number | null
          id?: string
          midterm?: number | null
          quiz?: number | null
          semester?: number | null
          status?: string | null
          student_id?: string | null
          teacher_id?: string | null
          total_mark?: number | null
        }
        Update: {
          assignment?: number | null
          course_code?: string | null
          created_at?: string | null
          final_exam?: number | null
          id?: string
          midterm?: number | null
          quiz?: number | null
          semester?: number | null
          status?: string | null
          student_id?: string | null
          teacher_id?: string | null
          total_mark?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pending_grades_course_code_fkey"
            columns: ["course_code"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_code"]
          },
          {
            foreignKeyName: "pending_grades_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_grades_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_registrations: {
        Row: {
          created_at: string | null
          form_data: Json
          id: string
          status: string | null
          student_id: string | null
          submitted_by: string | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          form_data: Json
          id?: string
          status?: string | null
          student_id?: string | null
          submitted_by?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          form_data?: Json
          id?: string
          status?: string | null
          student_id?: string | null
          submitted_by?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pending_registrations_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_registrations_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      registrations: {
        Row: {
          academic_year: string
          created_at: string | null
          gpa_cum: number | null
          gpa_sem: number | null
          grade: number | null
          id: string
          reg_date: string | null
          result: string | null
          section: string | null
          semester: number | null
          student_id: string | null
        }
        Insert: {
          academic_year: string
          created_at?: string | null
          gpa_cum?: number | null
          gpa_sem?: number | null
          grade?: number | null
          id?: string
          reg_date?: string | null
          result?: string | null
          section?: string | null
          semester?: number | null
          student_id?: string | null
        }
        Update: {
          academic_year?: string
          created_at?: string | null
          gpa_cum?: number | null
          gpa_sem?: number | null
          grade?: number | null
          id?: string
          reg_date?: string | null
          result?: string | null
          section?: string | null
          semester?: number | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registrations_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          birth_date_ec: string | null
          birth_woreda: string | null
          contact: Json | null
          created_at: string | null
          current_grade: number | null
          current_section: string | null
          enrollment_date_ec: string | null
          ethnic: string | null
          family_id: string | null
          father_occupation: string | null
          fname_am: string | null
          high_school_stream: string | null
          id: string
          last_modified_by: string | null
          last_modified_date: string | null
          lname_am: string | null
          marital_status: string | null
          mname_am: string | null
          mother_fname: string | null
          mother_lname: string | null
          mother_occupation: string | null
          nationality: string | null
          photo: string | null
          recorded_by: string | null
          recorded_date: string | null
          religion: string | null
          special_birth_place: string | null
          stream: string | null
          student_id: string | null
          user_id: string | null
        }
        Insert: {
          birth_date_ec?: string | null
          birth_woreda?: string | null
          contact?: Json | null
          created_at?: string | null
          current_grade?: number | null
          current_section?: string | null
          enrollment_date_ec?: string | null
          ethnic?: string | null
          family_id?: string | null
          father_occupation?: string | null
          fname_am?: string | null
          high_school_stream?: string | null
          id?: string
          last_modified_by?: string | null
          last_modified_date?: string | null
          lname_am?: string | null
          marital_status?: string | null
          mname_am?: string | null
          mother_fname?: string | null
          mother_lname?: string | null
          mother_occupation?: string | null
          nationality?: string | null
          photo?: string | null
          recorded_by?: string | null
          recorded_date?: string | null
          religion?: string | null
          special_birth_place?: string | null
          stream?: string | null
          student_id?: string | null
          user_id?: string | null
        }
        Update: {
          birth_date_ec?: string | null
          birth_woreda?: string | null
          contact?: Json | null
          created_at?: string | null
          current_grade?: number | null
          current_section?: string | null
          enrollment_date_ec?: string | null
          ethnic?: string | null
          family_id?: string | null
          father_occupation?: string | null
          fname_am?: string | null
          high_school_stream?: string | null
          id?: string
          last_modified_by?: string | null
          last_modified_date?: string | null
          lname_am?: string | null
          marital_status?: string | null
          mname_am?: string | null
          mother_fname?: string | null
          mother_lname?: string | null
          mother_occupation?: string | null
          nationality?: string | null
          photo?: string | null
          recorded_by?: string | null
          recorded_date?: string | null
          religion?: string | null
          special_birth_place?: string | null
          stream?: string | null
          student_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "students_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teaching_assignments: {
        Row: {
          course_code: string | null
          created_at: string | null
          grade: number | null
          id: string
          section: string | null
          teacher_id: string | null
        }
        Insert: {
          course_code?: string | null
          created_at?: string | null
          grade?: number | null
          id?: string
          section?: string | null
          teacher_id?: string | null
        }
        Update: {
          course_code?: string | null
          created_at?: string | null
          grade?: number | null
          id?: string
          section?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teaching_assignments_course_code_fkey"
            columns: ["course_code"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_code"]
          },
          {
            foreignKeyName: "teaching_assignments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          disabled: boolean | null
          email: string
          fname: string
          gender: string | null
          id: string
          lname: string
          mname: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          unique_id: string
        }
        Insert: {
          created_at?: string | null
          disabled?: boolean | null
          email: string
          fname: string
          gender?: string | null
          id: string
          lname: string
          mname?: string | null
          phone?: string | null
          role: Database["public"]["Enums"]["user_role"]
          unique_id: string
        }
        Update: {
          created_at?: string | null
          disabled?: boolean | null
          email?: string
          fname?: string
          gender?: string | null
          id?: string
          lname?: string
          mname?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          unique_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role:
        | "student"
        | "family"
        | "teacher"
        | "registrar"
        | "admin"
        | "director"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: [
        "student",
        "family",
        "teacher",
        "registrar",
        "admin",
        "director",
      ],
    },
  },
} as const
