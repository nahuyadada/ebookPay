import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDownloadEmail(
  to: string,
  buyerName: string,
  downloadUrl: string
) {
  const title = process.env.EBOOK_TITLE ?? "Your Ebook";
  const from = process.env.RESEND_FROM_EMAIL ?? "noreply@yourdomain.com";

  await resend.emails.send({
    from,
    to,
    subject: `Your download link — ${title}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#1e293b;padding:32px;text-align:center;border-radius:12px 12px 0 0">
          <h1 style="color:#f8fafc;margin:0;font-size:24px">Thank you, ${buyerName}!</h1>
        </div>
        <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px">
          <p style="font-size:16px;line-height:1.6">
            Your payment was successful. Here is your personal download link for
            <strong>${title}</strong>:
          </p>
          <div style="text-align:center;margin:32px 0">
            <a href="${downloadUrl}"
              style="background:#2563eb;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block">
              Download Your Ebook
            </a>
          </div>
          <p style="font-size:14px;color:#64748b;line-height:1.6">
            This link is valid for <strong>7 days</strong>. Please download your ebook before it
            expires. If you have any issues, reply to this email.
          </p>
        </div>
      </div>
    `,
  });
}
