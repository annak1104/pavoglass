"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  carModel: string;
  carYear: string;
  comment: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  carModel: "",
  carYear: "",
  comment: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const required = [form.name, form.phone, form.carModel, form.carYear];

    if (required.some((value) => !value.trim())) {
      setError("Заповніть усі обов'язкові поля.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Не вдалося відправити заявку.");
      }

      setForm(initialState);
      setSuccess("Заявку відправлено. Ми скоро зв'яжемося з вами.");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Не вдалося відправити заявку.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="glass-surface overflow-hidden rounded-[32px] p-6 md:p-8">
      <div className="absolute -right-20 -top-20 size-52 rounded-full bg-accent/12 blur-3xl" />
      <div className="relative">
        <h2 className="text-2xl font-semibold text-foreground">Відправити заявку</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Поля з даними авто допоможуть швидше підібрати правильне скло.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Name
            <Input value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Ваше ім'я" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Phone number
            <Input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+380" autoComplete="tel" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Car model
            <Input value={form.carModel} onChange={(event) => updateField("carModel", event.target.value)} placeholder="BMW 5 Series" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Car year
            <Input value={form.carYear} onChange={(event) => updateField("carYear", event.target.value)} placeholder="2020" inputMode="numeric" required />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
            Comment
            <Textarea value={form.comment} onChange={(event) => updateField("comment", event.target.value)} placeholder="Коротко опишіть задачу" />
          </label>
        </div>
        {error ? <p className="glass-surface mt-4 rounded-full px-4 py-3 text-sm text-red-500 dark:text-red-100">{error}</p> : null}
        {success ? <p className="glass-surface mt-4 rounded-full px-4 py-3 text-sm text-foreground">{success}</p> : null}
        <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={loading}>
          <Send className="size-5" />
          {loading ? "Відправляємо..." : "Відправити заявку"}
        </Button>
      </div>
    </form>
  );
}
