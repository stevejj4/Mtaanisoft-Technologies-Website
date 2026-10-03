create table if not exists public.project_briefs (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  organization text not null,
  work_email text not null,
  phone text not null default '',
  project_type text not null,
  business_problem text not null,
  desired_outcome text not null,
  existing_systems text not null default '',
  expected_timeline text not null default '',
  budget_range text not null default '',
  additional_information text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.talent_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  area_of_expertise text not null,
  years_of_experience text not null,
  github_url text not null default '',
  portfolio_url text not null default '',
  linkedin_url text not null default '',
  technologies text not null,
  availability text not null,
  profile_summary text not null,
  resume_storage_path text not null,
  created_at timestamptz not null default now()
);

-- CREATE TABLE IF NOT EXISTS does not add newly introduced columns to a table
-- that already exists, so keep the API's profile insert columns in sync.
alter table public.talent_profiles
  add column if not exists full_name text not null default '',
  add column if not exists email text not null default '',
  add column if not exists area_of_expertise text not null default '',
  add column if not exists years_of_experience text not null default '',
  add column if not exists github_url text not null default '',
  add column if not exists portfolio_url text not null default '',
  add column if not exists linkedin_url text not null default '',
  add column if not exists technologies text not null default '',
  add column if not exists availability text not null default '',
  add column if not exists profile_summary text not null default '',
  add column if not exists resume_storage_path text not null default '',
  add column if not exists created_at timestamptz not null default now();

alter table public.project_briefs enable row level security;
alter table public.talent_profiles enable row level security;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'resumes',
  'resumes',
  false,
  5242880,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

notify pgrst, 'reload schema';
