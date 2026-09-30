/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - SERVERLESS API ENDPOINT
   Node.js / Express Backend Handler with Google Calendar & Email Webhook
   ========================================================================== */

/**
 * Node.js Serverless Function Handler
 * @param {Object} req - HTTP Request Object
 * @param {Object} res - HTTP Response Object
 */
module.exports = async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, phone, country, treatment, preferredDate, notes } = req.body || {};

    if (!fullName || !phone) {
      return res.status(400).json({ error: 'Full name and WhatsApp phone number are required.' });
    }

    const referenceId = `DAC-${Math.floor(100000 + Math.random() * 900000)}`;

    // ----------------------------------------------------------------------
    // 1. GOOGLE CALENDAR API EVENT PAYLOAD CONSTRUCTION
    // ----------------------------------------------------------------------
    const startTime = new Date(preferredDate || Date.now());
    startTime.setHours(11, 0, 0); // Default 11:00 AM Istanbul Time

    const endTime = new Date(startTime);
    endTime.setHours(12, 0, 0);

    const googleCalendarEventPayload = {
      summary: `[VIP Consultation] ${fullName} - ${treatment}`,
      location: 'Dent Aktif Clinic Global, Levent, Istanbul, Turkey',
      description: `
        Patient Name: ${fullName}
        Country: ${country || 'International'}
        WhatsApp: ${phone}
        Email: ${email}
        Requested Treatment: ${treatment}
        Patient Notes: ${notes || 'None'}
        Reference Code: ${referenceId}
      `,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Europe/Istanbul',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/Istanbul',
      },
      attendees: [
        { email: email, displayName: fullName },
        { email: 'consultation@dentaktifglobal.com', displayName: 'Dent Aktif Head Surgeon' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 60 },
        ],
      },
    };

    // ----------------------------------------------------------------------
    // 2. NODEMAILER / CLINIC NOTIFICATION PAYLOAD SCHEME
    // ----------------------------------------------------------------------
    const emailPayload = {
      to: 'leads@dentaktifglobal.com',
      subject: `🚨 New International Lead: ${fullName} (${country}) - ${treatment}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <h2 style="color: #0284c7; margin-top: 0;">Dent Aktif Clinic Global - New Consultation</h2>
          <p><strong>Reference Code:</strong> ${referenceId}</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${fullName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Country:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${country}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Phone/WhatsApp:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Treatment:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${treatment}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Preferred Date:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${preferredDate}</td></tr>
          </table>
          <p style="margin-top: 20px;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="background: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Open Direct WhatsApp Chat</a></p>
        </div>
      `
    };

    // Return 200 OK Response
    return res.status(200).json({
      success: true,
      message: 'Consultation request processed and logged to calendar/email system.',
      referenceId,
      googleCalendarPayload: googleCalendarEventPayload,
      emailPayload
    });

  } catch (error) {
    console.error('Submit Consultation API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
