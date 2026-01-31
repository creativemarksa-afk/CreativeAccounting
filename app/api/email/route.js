import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req) {
  try {
    const { name, email, company, subject, budget, message } = await req.json();

    const data = await resend.emails.send({
      from: "Creative Accounting <onboarding@resend.dev>",
      to: "creativedigitalimad@gmail.com", // Replace with your actual contact email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
            .container { max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #00B7FF, #0099CC); color: white; padding: 30px 25px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .header p { margin: 5px 0 0; opacity: 0.9; font-size: 14px; }
            .content { padding: 30px 25px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 15px; display: flex; align-items: center; }
            .section-title::before { content: '✉️'; margin-right: 8px; }
            .info-grid { display: grid; gap: 12px; }
            .info-item { background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #00B7FF; }
            .info-label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .info-value { font-size: 15px; font-weight: 500; color: #1e293b; margin: 0; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 20px; }
            .message-box .section-title::before { content: '💬'; }
            .message-content { font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-line; margin: 0; }
            .footer { background: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0; }
            .reply-btn { display: inline-block; background: #00B7FF; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-bottom: 15px; transition: background 0.2s; }
            .reply-btn:hover { background: #0099CC; }
            .company { font-size: 16px; font-weight: 700; color: #00B7FF; margin-bottom: 4px; }
            .tagline { font-size: 13px; color: #64748b; margin: 0 0 15px; }
            .timestamp { font-size: 11px; color: #94a3b8; margin: 0; }
            @media (max-width: 480px) { .container { margin: 10px; } .header, .content, .footer { padding-left: 20px; padding-right: 20px; } }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
              <p>Fresh message from your website</p>
            </div>

            <div class="content">
              <div class="section">
                <h2 class="section-title">Contact Details</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Name</div>
                    <div class="info-value">${name}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${email}</div>
                  </div>
                  ${company ? `<div class="info-item">
                    <div class="info-label">Company</div>
                    <div class="info-value">${company}</div>
                  </div>` : ''}
                  <div class="info-item">
                    <div class="info-label">Subject</div>
                    <div class="info-value">${subject}</div>
                  </div>
                  ${budget ? `<div class="info-item">
                    <div class="info-label">Budget</div>
                    <div class="info-value">${budget}</div>
                  </div>` : ''}
                </div>
              </div>

              <div class="message-box">
                <h2 class="section-title">Message</h2>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>

            <div class="footer">
              <a href="mailto:${email}" class="reply-btn">💌 Reply to ${name}</a>
              <div class="company">Creative Accounting</div>
              <p class="tagline">Your trusted financial partner</p>
              <p class="timestamp">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
