import { sendEmail }
  from "../services/mailService.js";

import { asyncHandler }
  from "../utils/asyncHandler.js";

export const contactForm =
  asyncHandler(async (req, res) => {

    const {
      name,
      email,
      message
    } = req.body;

    await sendEmail({

      to: process.env.EMAIL_USER,

      subject: "New Contact Message",

      html: `
        <h3>${name}</h3>
        <p>${email}</p>
        <p>${message}</p>
      `

    });

    res.json({
      success: true,
      message: "Message sent"
    });

  });