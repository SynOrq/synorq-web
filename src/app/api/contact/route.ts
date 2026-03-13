import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, topic } = await req.json();

    if (!name || !email || !topic) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Synorq team
    await transporter.sendMail({
      from: `"Synorq Web" <${process.env.SMTP_USER}>`,
      to: "hello@synorq.com",
      replyTo: email,
      subject: `[Synorq Lead] ${topic} — ${name}${company ? ` / ${company}` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Yeni Keşif Görüşmesi Talebi</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">synorq.com üzerinden geldi</p>
          </div>

          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 120px; font-weight: 600;">Ad Soyad</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600;">E-posta</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
              </tr>
              ${
                company
                  ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600;">Şirket</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${company}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Konu</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">
                  <span style="background: #eef2ff; color: #6366f1; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${topic}</span>
                </td>
              </tr>
            </table>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
            Bu e-posta synorq.com iletişim formu aracılığıyla gönderildi.
          </p>
        </div>
      `,
    });

    // Auto-reply to the user
    await transporter.sendMail({
      from: `"Synorq" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Mesajınızı aldık — Synorq",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
              <span style="color: white; font-weight: 900; font-size: 18px;">S</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Mesajınızı aldık!</h1>
          </div>

          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
              Merhaba <strong>${name}</strong>,
            </p>
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 16px;">
              <strong>${topic}</strong> konusundaki talebinizi aldık. Ekibimiz 24 saat içinde size geri dönecek ve 30 dakikalık ücretsiz keşif görüşmesi için uygun bir zaman belirleyeceğiz.
            </p>
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0;">
              Bu süreçte herhangi bir sorunuz olursa doğrudan bu e-postaya yanıt verebilirsiniz.
            </p>
          </div>

          <div style="background: #eef2ff; border: 1px solid #e0e7ff; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #4338ca; font-size: 13px; margin: 0; font-weight: 500;">
              ✓ 24 saat içinde dönüş &nbsp;·&nbsp; ✓ 30 dk ücretsiz görüşme &nbsp;·&nbsp; ✓ Satış baskısı yok
            </p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin: 0;">
            Synorq · <a href="https://synorq.com" style="color: #6366f1;">synorq.com</a> · <a href="mailto:hello@synorq.com" style="color: #6366f1;">hello@synorq.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Error:", err);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
