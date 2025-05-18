"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { PlayerPosition } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Player positions
const playerPositions: { value: PlayerPosition; label: string }[] = [
  { value: "goalkeeper", label: "Goalkeeper" },
  { value: "right-back", label: "Right Back" },
  { value: "left-back", label: "Left Back" },
  { value: "center-back", label: "Center Back" },
  { value: "defensive-midfielder", label: "Defensive Midfielder" },
  { value: "central-midfielder", label: "Central Midfielder" },
  { value: "attacking-midfielder", label: "Attacking Midfielder" },
  { value: "right-winger", label: "Right Winger" },
  { value: "left-winger", label: "Left Winger" },
  { value: "striker", label: "Striker" },
];

// Schema for player profile creation
const playerProfileSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality is required.",
  }),
  position: z.string({
    required_error: "Position is required.",
  }),
  secondaryPosition: z.string().default("none"),
  preferredFoot: z.enum(["left", "right", "both"], {
    required_error: "Preferred foot is required.",
  }),
  height: z.coerce.number().min(100, {
    message: "Height must be at least 100 cm.",
  }).max(250, {
    message: "Height must be less than 250 cm.",
  }),
  weight: z.coerce.number().min(30, {
    message: "Weight must be at least 30 kg.",
  }).max(150, {
    message: "Weight must be less than 150 kg.",
  }),
  currentTeam: z.string().optional(),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }).max(500, {
    message: "Bio must be less than 500 characters.",
  }),
  availableForTrials: z.boolean().default(false),
  willingToRelocate: z.boolean().default(false),
});

type PlayerProfileFormValues = z.infer<typeof playerProfileSchema>;

export default function PlayerOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PlayerProfileFormValues>({
    resolver: zodResolver(playerProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      nationality: "",
      position: "",
      secondaryPosition: "none",
      preferredFoot: "right",
      height: 175,
      weight: 70,
      currentTeam: "",
      bio: "",
      availableForTrials: true,
      willingToRelocate: false,
    },
  });

  function onSubmit(data: PlayerProfileFormValues) {
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);

      toast({
        title: "Profile created!",
        description: "Your player profile has been created successfully.",
      });

      router.push("/dashboard");
    }, 1500);
  }

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  return (
    <div className="container max-w-2xl mx-auto py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Create Your Player Profile</h1>
        <p className="text-muted-foreground mt-2">
          Let's set up your profile to showcase your football talents
        </p>
      </div>

      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium",
                step === stepNumber
                  ? "bg-primary text-primary-foreground"
                  : step > stepNumber
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
              )}
            >
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div
                className={cn(
                  "h-1 w-16 sm:w-24 md:w-32",
                  step > stepNumber ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-xl font-semibold">Personal Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1950-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. English, Spanish, Brazilian" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-end">
                <Button type="button" onClick={nextStep}>
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-xl font-semibold">Football Details</h2>

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Position</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {playerPositions.map((position) => (
                          <SelectItem key={position.value} value={position.value}>
                            {position.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secondaryPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary Position (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your secondary position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        {playerPositions.map((position) => (
                          <SelectItem key={position.value} value={position.value}>
                            {position.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredFoot"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred Foot</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="left" />
                          </FormControl>
                          <FormLabel className="font-normal">Left</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="right" />
                          </FormControl>
                          <FormLabel className="font-normal">Right</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="both" />
                          </FormControl>
                          <FormLabel className="font-normal">Both</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="currentTeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Team (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Local club, school team" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous Step
                </Button>
                <Button type="button" onClick={nextStep}>
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-xl font-semibold">Bio & Availability</h2>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell scouts about yourself, your playing style, achievements, and goals..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availableForTrials"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I am available for trials
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="willingToRelocate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I am willing to relocate for the right opportunity
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous Step
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Profile..." : "Complete Profile"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}