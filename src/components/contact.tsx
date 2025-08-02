"use client";
import { FormAsyncValidateOrFn, FormValidateOrFn } from "@tanstack/react-form";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { twMerge } from "tailwind-merge";
import z, { email } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z
    .email("Invalid email address")
    .min(1, { error: "Email is required" }),
  message: z.string().min(1, { error: "Message is required" }),
});

type FormData = z.infer<typeof formSchema>;

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const { fieldContext, formContext } = createFormHookContexts();

  const { useAppForm } = createFormHook({
    fieldContext,
    formContext,
    fieldComponents: {},
    formComponents: {},
  });

  const form = useAppForm<
    FormData,
    FormValidateOrFn<FormData> | undefined,
    FormValidateOrFn<FormData> | undefined,
    FormAsyncValidateOrFn<FormData> | undefined,
    FormValidateOrFn<FormData> | undefined,
    FormAsyncValidateOrFn<FormData> | undefined,
    FormValidateOrFn<FormData> | undefined,
    FormAsyncValidateOrFn<FormData> | undefined,
    FormAsyncValidateOrFn<FormData> | undefined,
    FormAsyncValidateOrFn<FormData> | undefined
  >({
    defaultValues,
    onSubmit: async ({ value }) => {
      try {
        const res = await fetch("https://formspree.io/f/mrblapkd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(value),
        });

        const data = await res.json();
        if (data.ok) {
          alert("Message sent!");
          form.reset(); // optional
        } else {
          alert("Something went wrong.");
        }
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    },
  });

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Have a project in mind? Let’s talk.
      </p>

      <form
        className="mt-8 space-y-4"
        onKeyDown={async (e) => {
          const isFocusedOnTextArea: boolean =
            document.activeElement?.tagName === "TEXTAREA";
          if (e.key === "Enter" && !isFocusedOnTextArea) {
            e.preventDefault();
            e.stopPropagation();
            await form.handleSubmit();
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          try {
            form.handleSubmit();
          } catch (error) {
            console.log("Form submission error:", error);
          }
        }}
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <form.Field
            name="name"
            validators={{
              onMount: ({ value }) => {
                const result = formSchema.shape.name.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onChange: ({ value }) => {
                const result = formSchema.shape.name.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onSubmit: ({ value }) => {
                const result = formSchema.shape.name.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <>
                <input
                  type="text"
                  name={field.name}
                  placeholder="Enter your name"
                  required
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  className="mt-1 w-full rounded-md border text-gray-900 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {!field.state.meta.isValid && (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                )}
              </>
            )}
          </form.Field>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <form.Field
            name="email"
            validators={{
              onMount: ({ value }) => {
                const result = formSchema.shape.email.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onChange: ({ value }) => {
                const result = formSchema.shape.email.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onSubmit: ({ value }) => {
                const result = formSchema.shape.name.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <>
                <input
                  type="email"
                  name={field.name}
                  placeholder="Enter your email address"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  required
                  className="mt-1 w-full text-gray-900 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {!field.state.meta.isValid && (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                )}
              </>
            )}
          </form.Field>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <form.Field
            name="message"
            validators={{
              onMount: ({ value }) => {
                const result = formSchema.shape.message.safeParse(value);

                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onChange: ({ value }) => {
                const result = formSchema.shape.message.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
              onSubmit: ({ value }) => {
                const result = formSchema.shape.name.safeParse(value);
                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <>
                <textarea
                  name={field.name}
                  rows={5}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  required
                  placeholder="Type your message here"
                  className="mt-1 w-full text-gray-900 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {!field.state.meta.isValid && (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                )}
              </>
            )}
          </form.Field>
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isValid, state.isDirty]}
        >
          {([canSubmit, isValid, isDirty]) => (
            <button
              type="submit"
              className={twMerge(
                "rounded-md bg-indigo-600 px-5 py-3 cursor-pointer text-white font-medium hover:bg-indigo-700",
                (!canSubmit || !isValid || !isDirty) &&
                  "cursor-not-allowed opacity-75"
              )}
              disabled={!canSubmit || !isValid || !isDirty}
            >
              Send
            </button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
}
