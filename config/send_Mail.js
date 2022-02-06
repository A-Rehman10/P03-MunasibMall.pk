const nodemailer = require("nodemailer");

// send account verification email

const sendVerificationMail = async (email, otpCode) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "no_reply@munasibmall.com",
    to: email,
    subject: "Email Account Verification",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: orange;text-decoration:none;font-weight:600">Munasib Mall</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Munasib Mall. Use the following OTP to verify your account.</p>
      <h2 style="background: #fff;margin: 0 auto;width: max-content;padding: 0 10px;color: gray;border-radius: 4px;">${otpCode}</h2>
      <p style="font-size:0.9em;">Regards,<br />Munasib Mall</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Munasib Deals</p>
        <p></p>
      </div>
    </div>
  </div>`,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    }
    console.log("Email for account verification sent successfully");
  });
};
module.exports = { sendVerificationMail };
