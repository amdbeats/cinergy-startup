
$(document).ready(function() {
  $('.submit').click(function() {
    event.preventDefault();
    console.log("Clicked");

    let email = $('.email').val();
    let subject = $('.subject').val();
    let message = $('.message').val();
    let statusElm = $('.status');
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append("<div>Email is valid</div>")
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>")
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid</div>")
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid</div>")
    }

    if (message.length >= 10) {
      statusElm.append("<div>Message is valid</div>")
    } else {
      event.preventDefault();
      statusElm.append(alert("Message is not valid"))
    }

  });
});


app.listen(3000, function() {
  console.log("You successfully entered port 3000!");
});
