import express, { Request, Response } from 'express';
import { BrevoClient } from '@getbrevo/brevo';
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001;
const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'themustaphatijani@gmail.com';
const OWNER_NAME = process.env.OWNER_NAME || 'Mustapha Tijani';

// Initialise Brevo API client
const brevoApi = new BrevoClient({ apiKey: BREVO_API_KEY });

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function buildOwnerEmail(payload: ContactPayload) {
  return {
    sender: { name: payload.name + ' (Portfolio)', email: OWNER_EMAIL },
    to: [{ email: OWNER_EMAIL, name: OWNER_NAME }],
    replyTo: { email: payload.email, name: payload.name },
    subject: `[Portfolio] ${payload.subject}`,
    htmlContent: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <style>
          body { background-color: #edf2f6; color: #718096; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.4; padding: 0; -webkit-text-size-adjust: none; }
          .wrapper { background-color: #edf2f6; width: 100%; padding: 32px 0; text-align: center; }
          .header { padding: 25px 0; text-align: center; }
          .header h1 { color: #3d4852; font-size: 19px; font-weight: bold; margin: 0; text-decoration: none; }
          .content { background-color: #ffffff; border: 1px solid #edf2f6; border-radius: 4px; box-shadow: 0 2px 0 rgba(0,0,150,0.025), 2px 4px 0 rgba(0,0,150,0.015); margin: 0 auto; max-width: 570px; padding: 32px; text-align: left; }
          .content h1 { color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; }
          .content p { color: #718096; font-size: 16px; line-height: 1.5em; margin-top: 0; margin-bottom: 24px; }
          .panel { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 16px; margin: 24px 0; }
          .panel p { margin: 0; color: #718096; margin-bottom: 8px; }
          .panel p:last-child { margin-bottom: 0; }
          .footer { text-align: center; padding: 32px 0; max-width: 570px; margin: 0 auto; }
          .footer p { color: #b0adc5; font-size: 12px; margin: 0; line-height: 1.5em; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>Mustapha Tijani</h1>
          </div>
          <div class="content">
            <h1>New Contact Message</h1>
            <p>You have received a new message from your portfolio website.</p>
            
            <div class="panel">
              <p><strong>From:</strong> ${payload.name}</p>
              <p><strong>Email:</strong> ${payload.email}</p>
              <p><strong>Subject:</strong> ${payload.subject}</p>
            </div>

            <p><strong>Message:</strong><br/>
            ${payload.message}</p>

            <p>Regards,<br/>Mustapha Tijani</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Mustapha Tijani. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `};
}

function buildSenderConfirmationEmail(payload: ContactPayload) {
  return {
    sender: { name: OWNER_NAME, email: OWNER_EMAIL },
    to: [{ email: payload.email, name: payload.name }],
    subject: `Thanks for reaching out, ${payload.name.split(' ')[0]}!`,
    htmlContent: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <style>
          body { background-color: #edf2f6; color: #718096; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.4; padding: 0; -webkit-text-size-adjust: none; }
          .wrapper { background-color: #edf2f6; width: 100%; padding: 32px 0; text-align: center; }
          .header { padding: 25px 0; text-align: center; }
          .header h1 { color: #3d4852; font-size: 19px; font-weight: bold; margin: 0; text-decoration: none; }
          .content { background-color: #ffffff; border: 1px solid #edf2f6; border-radius: 4px; box-shadow: 0 2px 0 rgba(0,0,150,0.025), 2px 4px 0 rgba(0,0,150,0.015); margin: 0 auto; max-width: 570px; padding: 32px; text-align: left; }
          .content h1 { color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; }
          .content p { color: #718096; font-size: 16px; line-height: 1.5em; margin-top: 0; margin-bottom: 24px; }
          .panel { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 16px; margin: 24px 0; }
          .panel p { margin: 0; color: #718096; font-style: italic; }
          .footer { text-align: center; padding: 32px 0; max-width: 570px; margin: 0 auto; }
          .footer p { color: #b0adc5; font-size: 12px; margin: 0; line-height: 1.5em; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>${OWNER_NAME}</h1>
          </div>
          <div class="content">
            <h1>Hello ${payload.name.split(' ')[0]}!</h1>
            <p>Thanks for taking the time to get in touch! I've received your message about "${payload.subject}".</p>
            <p>I respond within that day. If your matter is urgent, feel free to reach out directly at ${OWNER_EMAIL}.</p>

            <p>Regards,<br/>${OWNER_NAME}</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} ${OWNER_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `};
}

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body as ContactPayload;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set.');
    res.status(500).json({ error: 'Email service is not configured.' });
    return;
  }

  try {
    const payload: ContactPayload = { name, email, subject, message };

    await Promise.all([
      brevoApi.transactionalEmails.sendTransacEmail(buildOwnerEmail(payload)),
      brevoApi.transactionalEmails.sendTransacEmail(buildSenderConfirmationEmail(payload)),
    ]);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err: unknown) {
    console.error('Brevo send error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
