import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'newsletter' | 'contact';
  name?: string;
  email: string;
  business_name?: string;
}

const getEmailContent = (type: string, name?: string, business_name?: string) => {
  if (type === 'newsletter') {
    return {
      subject: "Welcome to Cloud Nine Solutions Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">Welcome to Cloud Nine Solutions!</h2>
          <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with the latest insights in AI and technology.</p>
          <p>You'll receive our latest articles, industry news, and exclusive updates directly in your inbox.</p>
          <p>Best regards,<br>The Cloud Nine Solutions Team</p>
        </div>
      `
    };
  } else {
    return {
      subject: "Thank You for Contacting Cloud Nine Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your interest in Cloud Nine Solutions. We've received your inquiry regarding ${business_name}.</p>
          <p>Our team will review your message and get back to you shortly with personalized insights for your business needs.</p>
          <p>Best regards,<br>The Cloud Nine Solutions Team</p>
        </div>
      `
    };
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailRequest: EmailRequest = await req.json();
    const emailContent = getEmailContent(
      emailRequest.type, 
      emailRequest.name, 
      emailRequest.business_name
    );

    console.log(`Sending ${emailRequest.type} thank you email to: ${emailRequest.email}`);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cloud Nine Solutions <onboarding@resend.dev>",
        to: [emailRequest.email],
        subject: emailContent.subject,
        html: emailContent.html,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(`Email sent successfully to ${emailRequest.email}`);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error(`Failed to send email: ${error}`);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    console.error("Error in send-thank-you-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);