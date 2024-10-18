'use client';
import { useFieldArray, useFormContext } from 'react-hook-form';
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
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChevronDown, X } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useState } from 'react';
import { Label } from '../ui/label';

const skillSuggestions = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
];
const PersonalInfoForm = () => {
  const form = useFormContext<UserOnboardingSchemaType>();
  const [open, setOpen] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'personalInfo.skills',
  });

  const addSkill = (skill: string) => {
    if (!fields.some((field) => field.skill === skill)) {
      append({ skill });
    }
    setOpen(false);
  };

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
      <div className="flex flex-col gap-2">
        <Label>Add your skills</Label>
        <div className="flex items-center gap-4 flex-wrap">
          {fields.map((item, index) => (
            <Badge
              key={item.id}
              variant="secondary"
              className="text-sm max-w-max py-1 px-2"
            >
              {item.skill}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="ml-1 h-auto p-0 text-muted-foreground hover:text-foreground"
                onClick={() => remove(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className="w-full justify-between text-muted-foreground"
            >
              eg: Next, React, Node, Express
              <ChevronDown className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-2">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {skillSuggestions.map((skill) => (
                  <CommandItem key={skill} onSelect={() => addSkill(skill)}>
                    {skill}
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
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
