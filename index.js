function clicked(){
    let parms = {
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_8vhhq7w","template_2wo2dlz",parms).then(alert("Email Sent !"))
}