import nodemailer from "nodemailer";

export async function sendEmail(email, otp) {

  try {

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,

      },

    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "OTP Verification",

      html: `

        <h1>Your OTP: ${otp}</h1>

      `,

    });

    console.log("EMAIL SENT");

  } catch (error) {

    console.log("EMAIL ERROR:", error);

  }

}