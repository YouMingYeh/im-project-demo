"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const machineSchema = z.object({
  name: z.string().min(1, "Machine name is required"),
  production: z.number().min(0, "Production must be a positive number"),
});

const stageSchema = z.object({
  machines: z.array(machineSchema).nonempty("At least one machine is required"),
  startup_cost: z.number().min(0, "Startup cost must be a positive number"),
  storage_capacity: z
    .number()
    .min(0, "Storage capacity must be a positive number"),
  stage_num: z.number().min(1).max(5),
});

const formSchema = z.object({
  version: z.literal("latest"),
  stages: z.array(stageSchema).length(5, "Exactly 5 stages are required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ConfigurationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      version: "latest",
      stages: Array(5)
        .fill(null)
        .map((_, index) => ({
          machines: [{ name: `工作站 ${index + 1}`, production: 28800 }],
          startup_cost: 10,
          storage_capacity: 9999,
          stage_num: index + 1,
        })),
    },
  });

  async function onSubmit(data: FormValues) {
    console.log(data);
    // Here you would typically send the data to your backend
    // await for 1000ms to simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="version"
          render={({ field }) => (
            <FormItem>
              <FormLabel>版本</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormDescription>
                管理參數配置的版本，目前只支持最新版本
              </FormDescription>
            </FormItem>
          )}
        />

        {form.watch("stages").map((stage, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle>工作站 {index + 1}</CardTitle>
              <CardDescription>設定工作站 {index + 1}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name={`stages.${index}.machines.0.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>工作站名稱</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`stages.${index}.machines.0.production`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>產能</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`stages.${index}.startup_cost`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>啟動成本</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`stages.${index}.storage_capacity`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>工作站儲存容量</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button type="submit" loading={form.formState.isSubmitting}>
          儲存
        </Button>
      </form>
    </Form>
  );
}
