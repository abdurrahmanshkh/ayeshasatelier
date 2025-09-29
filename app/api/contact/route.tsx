import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailData = {
      sender: { email: "transactionalerts@yahoo.com", name: "Ayesha's Atelier" },
      to: [{ email: "ateliar.ayesha@gmail.com", name: "Ayesha" }],
      subject: `New Contact Form Submission - ${service}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #fce7f3 0%, #a7f3d0 100%);">
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e3a8a; font-size: 24px; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">Phone:</strong> ${phone || "Not provided"}</p>
              <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">Service Interest:</strong> ${service}</p>
            </div>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 10px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e3a8a;">Message:</strong></p>
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #64748b; font-size: 14px;">This message was sent from the Ayesha's Atelier contact form</p>
            </div>
          </div>
        </div>
      `,
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Brevo API error:", errorData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
