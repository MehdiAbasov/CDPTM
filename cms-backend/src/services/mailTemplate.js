export const contactTemplate =
    ({ name, email, message }) => `

  <h2>New Contact Message</h2>

  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Message:</b> ${message}</p>

`;