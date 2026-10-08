interface TriagePayload {
  treatment: string;
  urgency: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  locale: string;
  files?: Array<{ name: string; sizeBytes: number; dataUrl?: string }>;
}

export async function POST(req: Request) {
  try {
    const body: TriagePayload = await req.json();

    // 1. Validation
    if (!body.fullName || !body.phone) {
      return Response.json(
        { success: false, error: 'Full name and phone number are required.' },
        { status: 400 }
      );
    }

    // 2. Generate Unique Case Reference ID
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const referenceId = `DA-${randomDigits}`;

    // 3. Mock Webhook to CRM (HubSpot / Salesforce / Custom Medical CRM)
    const crmPayload = {
      event: 'dental_triage_lead_created',
      referenceId,
      timestamp: new Date().toISOString(),
      patient: {
        name: body.fullName,
        email: body.email || 'not-provided@portal.com',
        phone: body.phone,
        country: body.country,
        language: body.locale,
      },
      medical: {
        treatmentInterest: body.treatment,
        urgency: body.urgency,
        recordsAttachedCount: body.files?.length || 0,
        licenseVerification: 'TR-34-DH-4892',
      },
    };

    console.log('[CRM WEBHOOK DISPATCH]', JSON.stringify(crmPayload, null, 2));

    // 4. Return success response
    return Response.json(
      {
        success: true,
        referenceId,
        message: 'Triage assessment queued successfully for chief surgeon review.',
        crmDispatched: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Triage Route Error:', error);
    return Response.json(
      { success: false, error: 'Internal server error while processing consultation.' },
      { status: 500 }
    );
  }
}
