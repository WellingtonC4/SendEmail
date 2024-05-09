const sendgrid = require ("@sendgrid/mail");
sendgrid.setApiKey('apikey')

async function sendEmail(){
  const messageData ={
    to: "wellington.lh19@gmail.com",
    from: "wellington_silva_18@carrefour.com",
    subject: "Test Gig",
    text: "Teste realizado com sucesso",
    html: "<p> Esse é o Teste</p>",
  };
  try{
    await sendgrid.send(messageData);
    console.log("message sent");
  }catch (error){
    console.log(error);
  }
  }
sendEmail();
