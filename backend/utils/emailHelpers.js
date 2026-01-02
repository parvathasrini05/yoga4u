const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// 🔐 Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify once
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email config error:", error.message);
  } else {
    console.log("✅ Email server is ready");
  }
});

// 📄 Load HTML Template
const loadTemplate = (templateName, variables = {}) => {
  let html = fs.readFileSync(
    path.join(__dirname, `../templates/${templateName}.html`),
    "utf-8"
  );

  Object.keys(variables).forEach((key) => {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), variables[key]);
  });

  return html;
};

// 📧 Bulk Email (Optimized for 1000+ users)
const sendBulkEmail = async (users, subject, templateName, variables) => {
  const html = loadTemplate(templateName, variables);
  const BATCH_SIZE = 50;

  for (let i = 0; i < users.length; i += BATCH_SIZE) {
    const batch = users.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map((user) =>
        transporter.sendMail({
          from: `"Yoga4U 🧘‍♂️" <${process.env.EMAIL_USER}>`,
          to: user.email,
          subject,
          html,
        })
      )
    );
  }

  console.log(`📧 Emails sent to ${users.length} users`);
};

module.exports = { sendBulkEmail };
