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

const SocialProfilesForm = () => {
  const form = useFormContext<UserOnboardingSchemaType>();

  return (
    <div className="space-y-6">
      <FormField
        name="socialProfiles.website"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="socialProfiles.linkedIn"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="socialProfiles.github"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Github</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="socialProfiles.x"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>X</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SocialProfilesForm;
