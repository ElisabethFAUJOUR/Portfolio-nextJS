import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
import z from 'zod';

const FormSchema = z.object({
  lastname: z.string(),
  firstname: z.string(),
  email: z.string().email(),
  phone: z.string().nullable(),
  message: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lastname, firstname, email, phone, message } =
      FormSchema.parse(body);

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_PERSONAL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      subject: 'New Contact Form Submission',
      html: `
        <p>Name: ${firstname} ${lastname}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone || 'Non fourni'}</p>
        <p>Message: ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info);

    return NextResponse.json({ message: 'Email envoyé !' }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: 'Une erreure est survenue, veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
