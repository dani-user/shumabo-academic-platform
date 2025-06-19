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
          target: Json | null
          title: string
        }
        Insert: {
          body: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          target?: Json | null
          title: string
        }
        Update: {
          body?: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          target?: Json | null
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
          biography: Json | null
          created_at: string | null
          current_grade: number | null
          current_section: string | null
          family_id: string | null
          id: string
          stream: string | null
          user_id: string | null
        }
        Insert: {
          biography?: Json | null
          created_at?: string | null
          current_grade?: number | null
          current_section?: string | null
          family_id?: string | null
          id?: string
          stream?: string | null
          user_id?: string | null
        }
        Update: {
          biography?: Json | null
          created_at?: string | null
          current_grade?: number | null
          current_section?: string | null
          family_id?: string | null
          id?: string
          stream?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "students_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
          role: string
          unique_id: string
        }
        Insert: {
          created_at?: string | null
          disabled?: boolean | null
          email: string
          fname: string
          gender?: string | null
          id?: string
          lname: string
          mname?: string | null
          phone?: string | null
          role: string
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
          role?: string
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
      [_ in never]: never
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
    Enums: {},
  },
} as const
