import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
  try {
    const { name, email, company, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const TO_EMAIL = Deno.env.get("TO_EMAIL"); // ایمیل دریافت‌کننده

    if (!RESEND_API_KEY || !TO_EMAIL) {
      throw new Error("Missing RESEND_API_KEY or TO_EMAIL secret");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "no-reply@novamediagency.com", // ایمیل فرستنده با دامین تایید شده
        to: TO_EMAIL, // ایمیل گیرنده
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
      }),
    });

    const data = await res.json();
    console.log("Resend response:", data);

    if (!res.ok) throw new Error(data.error || data.message || "Email send failed");

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: any) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
