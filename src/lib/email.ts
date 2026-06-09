import nodemailer from "nodemailer";
import { adminClient } from "./supabase";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export async function sendDownloadEmail(
  to: string,
  buyerName: string,
  downloadUrl: string
) {
  const title = process.env.EBOOK_TITLE ?? "Your Ebook";
  const from = process.env.BREVO_FROM_EMAIL ?? process.env.BREVO_SMTP_LOGIN;

  // Fetch the PDF from Supabase and attach it directly to the email
  const supabase = adminClient();
  const { data: fileBlob, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME!)
    .download(process.env.SUPABASE_PDF_PATH!);

  if (error || !fileBlob) {
    console.error("Email attachment download error:", error);
  }

  const attachments = fileBlob
    ? [
        {
          filename: `${title}.pdf`,
          content: Buffer.from(await fileBlob.arrayBuffer()),
          contentType: "application/pdf",
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"SSEMT" <${from}>`,
    to,
    subject: `🎉 Your ebook is here — ${title}`,
    attachments,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">

        <!-- Header -->
        <div style="background:#1e293b;padding:36px 32px;text-align:center;border-radius:12px 12px 0 0">
          <p style="color:#f59e0b;margin:0 0 8px;font-size:12px;letter-spacing:2px;text-transform:uppercase">SSEMT</p>
          <h1 style="color:#f8fafc;margin:0;font-size:26px;font-weight:700">Thank you, ${buyerName}!</h1>
          <p style="color:#94a3b8;margin:10px 0 0;font-size:15px">Your purchase was successful.</p>
        </div>

        <!-- Body -->
        <div style="background:#ffffff;padding:36px 32px">

          <p style="font-size:16px;line-height:1.7;margin:0 0 20px">
            We're so excited for you to start reading
            <strong style="color:#1e293b">${title}</strong>.
            Your ebook is attached to this email as a PDF — just open the
            attachment and you're good to go!
          </p>

          <div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 28px">
            <p style="margin:0;font-size:14px;color:#92400e;line-height:1.6">
              <strong>📎 Your ebook is attached above.</strong><br/>
              Can't see the attachment? Use the download button below instead.
            </p>
          </div>

          <!-- Fallback download button -->
          <div style="text-align:center;margin:32px 0">
            <a href="${downloadUrl}"
              style="background:#f59e0b;color:#1e293b;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:700;display:inline-block">
              Download Ebook
            </a>
            <p style="font-size:12px;color:#94a3b8;margin:10px 0 0">
              Link valid for 7 days · up to 5 downloads
            </p>
          </div>

          <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0"/>

          <p style="font-size:15px;line-height:1.7;color:#475569;margin:0 0 8px">
            Remember the SSEMT philosophy:
          </p>
          <p style="font-size:15px;line-height:1.7;color:#1e293b;font-weight:600;margin:0">
            Start Small. Earn More. Today.
          </p>
          <p style="font-size:14px;line-height:1.7;color:#64748b;margin:12px 0 0">
            Don't wait for the perfect moment — take your first step this week.
            We're rooting for you!
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#f8fafc;padding:20px 32px;border-radius:0 0 12px 12px;text-align:center">
          <p style="font-size:12px;color:#94a3b8;margin:0">
            © ${new Date().getFullYear()} SSEMT. All rights reserved.<br/>
            Questions? Reply to this email.
          </p>
        </div>

      </div>
    `,
  });
}
