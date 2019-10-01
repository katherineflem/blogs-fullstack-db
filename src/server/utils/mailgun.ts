import * as mailgunLoader from 'mailgun-js'

export const mailgun = mailgunLoader({
    apiKey: '43c7a9870b5e981e7f80abdb9697977d-c27bf672-8ac0b44c',
    domain: 'sandbox7b633b863706438482b67e2aa0eaf409.mailgun.org'
});

export const sendEmail = (to:string, from:string, subject:string, content:string)=>{
    let data={
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data)//sends a promise;
};
