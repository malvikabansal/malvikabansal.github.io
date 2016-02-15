$(document).ready(function() {
$("#submit").click(function(e) 
{
    e.preventDefault();
    var name = $("#name2").val();
    var email = $("#email2").val();
    var message = $("#message2").val();

    //var contact = $("#contact").val();
    //$("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == '' || email == '' || message == '') 
    {
        alert("Please Fill Required Fields");
    } 
    else 
    {
        // Returns successful data submission message when the entered information is stored in database.
        $.post("contact_form.php", 
        {
            name2: name,
            email2: email,
            message2: message,
        }, function(data) {
        //$("#returnmessage").append(data); // Append returned message to message paragraph.
        if (data == "Your message has been sent successfully!") 
        {
            $("#footer-form")[0].reset(); // To reset form fields on success.
        }
        });
    }
});
});