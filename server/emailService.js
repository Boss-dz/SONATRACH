const nodemailer = require("nodemailer");
const mysql = require("mysql");

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form-eval",
  port: 3306,
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

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "rayanmelzi0@gmail.com",
//   },
// });

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
          user: "rayanmelzi0@gmail.com",
          pass: "emtlfndwouyhlgwf",
        },
      });

      const mailOptions = {
        from: "rayanmelzi0@gmail.com",
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

// const sendEmail = (to, subject, text) => {
//   fetchMailingConfig((err, config) => {
//     if (err) {
//       console.error("Error fetching LDAP config:", err);
//       return callback(err, null);
//     }
//     let transporter = nodemailer.createTransport({
//       host: config.Serveur_msgr,
//       port: config.PORT,
//       secure: false,
//       auth: {
//         user: "rayanmelzi0@gmail.com",
//         pass: "emtlfndwouyhlgwf",
//       },
//     });
//     const mailOptions = {
//       from: "rayanmelzi0@gmail.com",
//       to,
//       subject,
//       text,
//     };

//     return transporter.sendMail(mailOptions);
//   });
// };
//
// module.exports = { sendEmail };