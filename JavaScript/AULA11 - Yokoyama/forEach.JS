let email = ['email01@gmail.com', 'email02@gmail.com',
'email03@gmail.com','email04@gmail.com']
email.forEach((email,cadastro,arrayCompleta) => {
    console.log(`Email enviado para ${email}`);
    console.log(`ID do e-mail:${cadastro}`);
    console.log(`Lista: ${arrayCompleta}`);
    console.log('-------------------------');
})