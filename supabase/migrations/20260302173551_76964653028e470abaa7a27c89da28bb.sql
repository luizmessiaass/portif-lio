-- Migration: Create tasks table with RLS policies
-- Phase 1: Database Foundation (Plan 01-01)

-- 1. Create the tasks table
CREATE TABLE public.tasks (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text        NOT NULL,
  description  text,
  due_date     date        NOT NULL,
  task_type    text        NOT NULL CHECK (task_type IN ('Teoria', 'Pratica')),
  student_id   uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mentor_id    uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_completed boolean     NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies (all with TO authenticated)

-- Policy A: Mentors can view their own tasks (admins can view all)
CREATE POLICY "Mentors can view own tasks"
ON public.tasks FOR SELECT TO authenticated
USING (
  mentor_id = auth.uid()
  OR has_role(auth.uid(), 'admin'::app_role)
);

-- Policy B: Mentors can create tasks (INSERT uses WITH CHECK only)
CREATE POLICY "Mentors can create tasks"
ON public.tasks FOR INSERT TO authenticated
WITH CHECK (
  mentor_id = auth.uid()
  AND (has_role(auth.uid(), 'mentor'::app_role) OR has_role(auth.uid(), 'admin'::app_role))
);

-- Policy C: Mentors can delete their own tasks
CREATE POLICY "Mentors can delete own tasks"
ON public.tasks FOR DELETE TO authenticated
USING (
  mentor_id = auth.uid()
  AND (has_role(auth.uid(), 'mentor'::app_role) OR has_role(auth.uid(), 'admin'::app_role))
);

-- Policy D: Students can view their own tasks
CREATE POLICY "Students can view own tasks"
ON public.tasks FOR SELECT TO authenticated
USING (
  student_id = auth.uid()
  AND has_role(auth.uid(), 'aluno'::app_role)
);

-- Policy E: Students can update task completion only
-- USING: student can only see/update their own tasks
-- WITH CHECK: subquery ensures only is_completed and completed_at can change
CREATE POLICY "Students can update task completion"
ON public.tasks FOR UPDATE TO authenticated
USING (
  student_id = auth.uid()
  AND has_role(auth.uid(), 'aluno'::app_role)
)
WITH CHECK (
  student_id = auth.uid()
  AND has_role(auth.uid(), 'aluno'::app_role)
  AND title        = (SELECT t.title        FROM public.tasks t WHERE t.id = tasks.id)
  AND description  IS NOT DISTINCT FROM (SELECT t.description  FROM public.tasks t WHERE t.id = tasks.id)
  AND due_date     = (SELECT t.due_date     FROM public.tasks t WHERE t.id = tasks.id)
  AND task_type    = (SELECT t.task_type    FROM public.tasks t WHERE t.id = tasks.id)
  AND student_id   = (SELECT t.student_id   FROM public.tasks t WHERE t.id = tasks.id)
  AND mentor_id    = (SELECT t.mentor_id    FROM public.tasks t WHERE t.id = tasks.id)
  AND created_at   = (SELECT t.created_at   FROM public.tasks t WHERE t.id = tasks.id)
);

-- 4. Indexes for common query patterns
CREATE INDEX idx_tasks_student_id ON public.tasks(student_id);
CREATE INDEX idx_tasks_mentor_id  ON public.tasks(mentor_id);
CREATE INDEX idx_tasks_due_date   ON public.tasks(due_date);
