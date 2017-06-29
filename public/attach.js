console.log('hello');

// const c = "Hello";
// c = "world";
// console.log(c);


const textarea = document.getElementsByTagName('textarea'),
attachInput = document.getElementById('attachment'),
msg = "Did you mean to attach a file to this message?",
sendButtons = document.getElementsByClassName('send');


for (var i = 0; i < sendButtons.length; i++) {
  // console.log(sendButtons[i]);
  sendButtons[i].addEventListener('click', function() {

    var body = textarea.body.value;

    var saysAttach = (body.toLowerCase().indexOf('attach') !== -1)

    var hasAttachment = (attachInput.value.length > 0);
// console.log(saysAttach, hasAttachment);
    if (saysAttach && !hasAttachment) {
      alert(msg);
    }
  });
}
