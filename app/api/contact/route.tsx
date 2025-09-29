import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would integrate with Brevo Mail API
    // For now, we'll simulate the email sending
    const emailData = {
      sender: { email: "transactionalerts@yahoo.com", name: "Ayesha's Atelier" },
      to: [{ email: "ateliar.ayesha@gmail.com", name: "Ayesha" }],
      subject: `New Contact Form Submission - ${service}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // In a real implementation, you would send this to Brevo API
    // const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'api-key': process.env.BREVO_API_KEY
    //   },
    //   body: JSON.stringify(emailData)
    // })

    console.log("Contact form submission:", emailData)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
