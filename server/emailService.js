const nodemailer = require("nodemailer");
const mysql = require("mysql");

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form-eval-son",
  port: 3307,
});

// Function to fetch mailing configuration from the database
function fetchMailingConfig(callback) {
  const configQuery =
    'SELECT param_key, param_value FROM parametres_de_base WHERE param_key IN ("Serveur_msgr", "PORT")'; /* "SMTP_username", "SMTP_password" */
  db.query(configQuery, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return callback(err);
    }
    if (results.length === 0) {
      const error = new Error("Incomplete mailing configuration found");
      console.error(error);
      return callback(error);
    }
    const mailingConfig = results.reduce((config, row) => {
      config[row.param_key] = row.param_value;
      return config;
    }, {});
    callback(null, mailingConfig);
  });
}

const sendEmail = (to, subject, text) => {
  return new Promise((resolve, reject) => {
    fetchMailingConfig((err, config) => {
      if (err) {
        return reject(err);
      }

      const transporter = nodemailer.createTransport({
        host: config.Serveur_msgr,
        port: config.PORT,
        secure: false,
        auth: {
          user: "haouamoha33@gmail.com",
          pass: "17@savana123",
        },
      });

      const mailOptions = {
        from: "haouamoha33@gmail.com",
        to,
        subject,
        text,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });
  });
};

module.exports = { sendEmail };
