import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  carModel?: string;
  carYear?: string;
  comment?: string;
};

const requiredFields: Array<keyof ContactPayload> = ["name", "phone", "carModel", "carYear"];

function sanitize(value?: string) {
  return String(value ?? "").trim().slice(0, 700);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const missing = requiredFields.filter((field) => !sanitize(body[field]));

    if (missing.length > 0) {
      return NextResponse.json({ error: "Заповніть усі обов'язкові поля." }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: "Telegram integration is not configured." }, { status: 500 });
    }

    const message = [
      "New customer request:",
      "",
      `Name: ${sanitize(body.name)}`,
      `Phone: ${sanitize(body.phone)}`,
      `Car: ${sanitize(body.carModel)}`,
      `Year: ${sanitize(body.carYear)}`,
      `Comment: ${sanitize(body.comment) || "-"}`,
    ].join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!telegramResponse.ok) {
      return NextResponse.json({ error: "Не вдалося відправити заявку." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Некоректний запит." }, { status: 400 });
  }
}
