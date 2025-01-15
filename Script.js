function sendMail(event){
    event.preventDefault();
    var params ={
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("Message").value,
    };
    
    emailjs.send("service_v3gvz1d", "template_skwxs15",params).then(res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("Your Mail has been sent !!!"+ res.status);
    })
    .catch(err => {
        console.error("Error sending email: ", err);
        alert("Failed to send your email. Please try again later.");
    });

}