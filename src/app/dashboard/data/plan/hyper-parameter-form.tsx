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
import MultipleSelector from "@/components/ui/multiple-selector";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "名稱至少需要 2 個字元。",
  }),
  stage_version: z.literal("latest"),
  hyper_version: z.literal("latest"),
  orders: z.array(
    z.object({
      order_id: z.string().min(1, "Order ID is required"),
    }),
  ),
});

type FormValues = z.infer<typeof formSchema>;

export default function HyperParameterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stage_version: "latest",
      hyper_version: "latest",
      orders: [],
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Here you would typically send the data to your backend
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>規劃</CardTitle>
            <CardDescription>
              請選擇此次規畫的工作站配置、參數、以及製造需求單
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名稱</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>用來識別此次規劃的名稱</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stage_version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>工作站配置版本</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormDescription>
                    管理工作站配置的版本，目前只支持最新版本
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hyper_version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>參數版本</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormDescription>
                    管理參數配置的版本，目前只支持最新版本
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>製造需求單</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      defaultOptions={[
                        { label: "Order 1", value: "order-1" },
                        { label: "Order 2", value: "order-2" },
                        { label: "Order 3", value: "order-3" },
                      ]}
                      value={field.value.map((item) => ({
                        label: item.order_id,
                        value: item.order_id,
                      }))}
                      onChange={(value) => {
                        form.setValue(
                          "orders",
                          value.map((item) => ({
                            order_id: item.value,
                          })),
                        );
                      }}
                      placeholder="選擇製造需求單"
                      emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                          no results found.
                        </p>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Button type="submit">儲存</Button>
      </form>
    </Form>
  );
}
