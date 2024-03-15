import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
import z from 'zod';

// Validation schema
const FormSchema = z.object({
  lastname: z.string(),
  firstname: z.string(),
  email: z.string().email(),
  phone: z.string().nullable(),
  message: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    // Get data from request payload
    const body = await req.json();
    // Checking schemas data
    const validationResult = FormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "User didn't respect the expected format.",
        },
        { status: 400 }
      );
    }

    // Config Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Config mail options
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: 'Nouveau Message Portfolio !',
      html: `
        <p>Nom: ${validationResult.data.firstname} ${validationResult.data.lastname}</p>
        <p>Email: ${validationResult.data.email}</p>
        <p>Tel: ${validationResult.data.phone || 'Non fourni'}</p>
        <p>Message: ${validationResult.data.message}</p>
      `,
    };

    // Send email and log infos
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return NextResponse.json({ message: 'Email sent !' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Oops, an error occurs, please try again later.',
      },
      { status: 500 }
    );
  }
}
