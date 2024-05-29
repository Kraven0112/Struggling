let nodemailer=require('nodemailer')
//ccatvgnhjxsbxyof
let middleGay=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'use-uour-paasword'
    },
    tls:{
        rejectUnauthorized:false
    }

})
let options={
    from:'waseemahmed116@gmail.com',
    to:'shalee1664@gmail.com',
    subject:'testing mail from coing',
    text:'hello how are u testing mail pls replay back'
}

middleGay.sendMail(options,(err:any,res:any)=>{
    if(err) throw err;
    console.log("mail sent")
})