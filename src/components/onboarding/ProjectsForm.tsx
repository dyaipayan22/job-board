'use client';
import { useFormContext, useFieldArray } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UserOnboardingSchemaType } from '@/lib/validators/user.profile.validator';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const ProjectsForm = () => {
  const form = useFormContext<UserOnboardingSchemaType>();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'projects',
  });

  return (
    <div className="flex flex-col gap-4 items-start">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="w-full space-y-6 bg-secondary/40 p-4 rounded-md"
        >
          <FormField
            name={`projects.${index}.name`}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={`projects.${index}.description`}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={`projects.${index}.githubLink`}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github Link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={`projects.${index}.liveLink`}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live Link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            {fields.length > 1 && (
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="destructive"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      ))}
      <Button
        className="text-base"
        variant={'link'}
        type="button"
        onClick={() =>
          append(
            {
              name: '',
              description: '',
              githubLink: '',
              liveLink: '',
            },
            {
              shouldFocus: false,
            }
          )
        }
      >
        Add project
      </Button>
    </div>
  );
};

export default ProjectsForm;
