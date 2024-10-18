import { z } from 'zod';

export const UserProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Email is invalid').min(1, 'Email is required'),
});

export type UserProfileSchemaType = z.infer<typeof UserProfileSchema>;

export const UserPasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(6, 'Password must be at least of 6 characters.'),
  newPassword: z.string().min(6, 'Password must be at least of 6 characters.'),
  confirmNewPassword: z
    .string()
    .min(6, 'Password must be at least of 6 characters.'),
});

export type UserPasswordSchemaType = z.infer<typeof UserPasswordSchema>;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const PersonalInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  contactNo: z.string().regex(phoneRegex, 'Invalid contact number'),
  currentLocation: z.string().min(1, 'Location is required'),
  bio: z.string().max(255, 'Bio too long'),
  primaryRole: z.string().min(1, 'Primary role is required'),
  yearsOfExperience: z.coerce.number(),
  skills: z.array(
    z.object({
      skill: z.string(),
    })
  ),
});

export type PersonalInfoSchemaType = z.infer<typeof PersonalInfoSchema>;

export const SocialProfilesSchema = z.object({
  website: z.string().url('Invalid url').optional(),
  linkedIn: z.string().url('Invalid url').min(1, 'LinkedIn is required'),
  github: z.string().url('Invalid url').min(1, ' Github is required'),
  x: z.string().url('Invalid url').optional(),
});

export type SocialProfilesSchemaType = z.infer<typeof SocialProfilesSchema>;

export const WorkExperienceSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(255, 'Description too long'),
  employmentType: z
    .string()
    .min(1, 'Employment type is required')
    .refine(
      (val) =>
        ['Full Time', 'Part Time', 'Internship', 'Contract'].includes(val),
      'Select a valid employment type'
    ),
  workMode: z
    .string()
    .min(1, 'Work mode is required')
    .refine(
      (val) => ['In-office', 'Remote', 'Hybrid'].includes(val),
      'Select a valid work mode'
    ),
  currentWorkStatus: z.boolean(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
});

export type WorkExperienceSchemaType = z.infer<typeof WorkExperienceSchema>;

export const ProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().max(255, 'Description too long').optional(),
  githubLink: z.string().url(),
  liveLink: z.string().url(),
});

export type ProjectSchemaType = z.infer<typeof ProjectSchema>;

export const UserOnboardingSchema = z.object({
  personalInfo: PersonalInfoSchema,
  socialProfiles: SocialProfilesSchema,
  workExperience: z.array(WorkExperienceSchema),
  projects: z.array(ProjectSchema),
});

export type UserOnboardingSchemaType = z.infer<typeof UserOnboardingSchema>;
