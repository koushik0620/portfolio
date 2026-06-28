import { NextResponse } from "next/server";

import EmailTemplate from "@/components/sections/Contact/EmailTemplate";
import { resend } from "@/lib/resend";
import { ContactSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const { error } = await resend.emails.send({
      from: "Koushik Portfolio <contact@vkoushik.com>",

      to: process.env.CONTACT_EMAIL!,

      replyTo: email,

      subject: `New Portfolio Contact — ${subject}`,

      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }),

      text: `
New Portfolio Contact

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:

${message}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
