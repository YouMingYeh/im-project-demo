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

const formSchema = z.object({
  utilization: z.number().min(0, "Utilization must be a non-negative number"),
  early_hyper_parameter: z.number(),
  late_hyper_parameter: z.number(),
  version: z.literal("latest"),
});

type FormValues = z.infer<typeof formSchema>;

export default function HyperParameterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      utilization: 100,
      early_hyper_parameter: 0.1,
      late_hyper_parameter: 0.1,
      version: "latest",
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
        <Card>
          <CardHeader>
            <CardTitle>參數設定</CardTitle>
            <CardDescription>
              請輸入參數設定的數值，以進行不同的規劃。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
                    管理參數設定的版本，目前只支持最新版本
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="utilization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>產能利用率</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="any" />
                  </FormControl>
                  <FormDescription>
                    可以調整工廠的產能利用率
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="early_hyper_parameter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>提早交貨的懲罰權重</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="any" />
                  </FormControl>
                  <FormDescription>可以調整提早交貨的懲罰權重</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="late_hyper_parameter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>延遲交貨的懲罰權重</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="any" />
                  </FormControl>
                  <FormDescription>可以調整延遲交貨的懲罰權重</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Button type="submit" loading={form.formState.isSubmitting}>儲存</Button>
      </form>
    </Form>
  );
}
