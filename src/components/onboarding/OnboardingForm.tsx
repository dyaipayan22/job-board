'use client';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  UserOnboardingSchema,
  UserOnboardingSchemaType,
} from '@/lib/validators/user.profile.validator';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import ProjectsForm from './ProjectsForm';
import { Briefcase, FolderGit2, User } from 'lucide-react';
import SocialProfilesForm from './SocialProfilesForm';

const steps = [
  {
    name: 'Personal Info',
    description: 'Tell us about yourself so companies know who you are',
    fields: ['personalInfo'],
    icon: <User size={20} />,
  },
  {
    name: 'Social Profiles',
    description: 'Where can people find you online?',
    fields: ['socialProfiles'],
    icon: <User size={20} />,
  },
  {
    name: 'Projects',
    description: 'What projects have you built?',
    fields: ['projects'],
    icon: <FolderGit2 size={20} />,
  },
  {
    name: 'Work Experience',
    description: 'What other positions have you held?',
    fields: ['workExperience'],
    icon: <Briefcase size={20} />,
  },
];

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<UserOnboardingSchemaType>({
    defaultValues: {
      personalInfo: {
        name: '',
        email: '',
        contactNo: '',
        currentLocation: '',
        bio: '',
        primaryRole: '',
        yearsOfExperience: 1,
        skills: ['asdasd'],
      },
      socialProfiles: {
        website: '',
        linkedIn: '',
        github: '',
        x: '',
      },
      projects: [
        {
          name: '',
          description: '',
          githubLink: '',
          liveLink: '',
        },
      ],
      workExperience: [
        {
          companyName: '',
          position: '',
          description: '',
          employmentType: '',
          workMode: '',
          currentWorkStatus: false,
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
    },
    resolver: zodResolver(UserOnboardingSchema),
    mode: 'onBlur',
  });

  type FieldName = keyof UserOnboardingSchemaType;

  const onSubmit = (data: UserOnboardingSchemaType) => {
    alert(data);
  };

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await form.trigger(fields as FieldName[]);
    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...form}>
      <Card className="w-full mx-auto max-w-5xl p-4">
        {/* <Stepper steps={steps} currentStep={currentStep} /> */}
        <div className="w-full flex">
          <CardHeader className="w-1/3">
            <CardTitle>{steps[currentStep].name}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <div className="flex-1 mt-6 mr-6">
            <CardContent className="flex flex-col px-2">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {currentStep === 0 && <PersonalInfoForm />}
                {currentStep === 1 && <SocialProfilesForm />}
                {currentStep === 2 && <ProjectsForm />}
                {currentStep === 3 && <WorkExperienceForm />}
              </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              {currentStep !== 0 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
              )}
              {currentStep !== steps.length - 1 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                  Submit
                </Button>
              )}
            </CardFooter>
          </div>
        </div>
      </Card>
    </FormProvider>
  );
};

export default OnboardingForm;
