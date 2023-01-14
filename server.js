const express=require("express")
const sqlite=require("sqlite3")
const cors=require("cors")
const nodemailer = require('nodemailer');

const app=express()
app.use(cors())

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'suneetpathangay@gmail.com',
        pass: 'cqixcctjaupfmewm'
    }
});

var currentEmailAddress="";

const database = new sqlite.Database('formdata.db')
app.use(express.json())

app.post('/formdatas',(req,res)=>{
    const {name,email_address,grade,phone_number}=req.body
    currentEmailAddress=email_address

    database.run(
        `INSERT into SUNEETDATA (name,email_address,grade,phone_number) VALUES(?,?,?,?)`,[name,email_address,grade,phone_number],(err)=>{
            if(err){
                console.log(err)
            }else{

                    
            }
        }
    )
    res.send(currentEmailAddress)

   
    
})

var list_of_emails=[]

app.get('/formread',(req,res)=>{
    
    const data=database.all('SELECT email_address from SUNEETDATA WHERE(grade is NULL or name is "" or phone_number is "")',(err,row)=>{
        if(err){
            console.log(err)
        }
            
        row.forEach((email=>{
            list_of_emails.push(email["email_address"])
            
        }))
        console.log(list_of_emails)
        
        var sendEmailAdress=""

        list_of_emails.forEach((email)=>{
            if (email=currentEmailAddress){
                sendEmailAdress=currentEmailAddress
            }
        })
        
        
        
        let mailOptions = {
            from: '"suneet pathangay👻" <suneetpathangay@gmail.com>', // sender address
            to: `${sendEmailAdress}`, // list of receivers
            subject: 'Form', // Subject line
            text: 'Hello you missed one of the bodies on the form', // plain text body
            html: '<h1>Hello you missed one of the bodies on the form</h1>' // html body
        };

        
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
        
        res.send(sendEmailAdress)
        
        
})
})







    
    
    
    
        



app.listen(3001)










