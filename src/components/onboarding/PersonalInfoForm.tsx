'use client';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { UserOnboardingSchemaType } from '@/lib/validators/user.profile.validator';
import { Textarea } from '../ui/textarea';

const PersonalInfoForm = () => {
  const form = useFormContext<UserOnboardingSchemaType>();

  return (
    <div className="space-y-6">
      <FormField
        name="personalInfo.name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="personalInfo.email"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="personalInfo.contactNo"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your contact number</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="personalInfo.currentLocation"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Where are you based?</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="w-full flex items-center gap-4">
        <FormField
          name="personalInfo.primaryRole"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-2/3">
              <FormLabel>Select your primary role</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="personalInfo.yearsOfExperience"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Years of experience</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        name="personalInfo.skills"
        control={form.control}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Add your skills</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="personalInfo.bio"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your bio</FormLabel>
            <FormControl>
              <Textarea {...field} rows={5} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PersonalInfoForm;
