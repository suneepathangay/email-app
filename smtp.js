
const nodemailer = require('nodemailer');

// create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'suneetpathangay@gmail.com',
        pass: 'cqixcctjaupfmewm'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"suneet pathangay👻" <suneetpathangay@gmail.com>', // sender address
    to: 'sumershinde22@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello', // plain text body
    html: '<b>Hello ' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});




