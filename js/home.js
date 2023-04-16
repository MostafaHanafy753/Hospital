
$(document).ready(() => {
  if (!localStorage.getItem('dir')) {
    localStorage.setItem('dir', 'true');
  }
  $(document.body).attr('dir', localStorage.getItem('dir') == 'true' ? 'rtl' : 'ltr');


  if (localStorage.getItem('dir') == 'true') {
    $('#lange span').text('EN')
  }
  else $('#lange span').text('AR')
  $('#lange').click(() => {


    if (localStorage.getItem('dir') == 'true') {
      localStorage.setItem('dir', false)
    }
    else {
      localStorage.setItem('dir', true)
    }
    location.reload()
  })
})
let bodyRtl = localStorage.getItem('dir')
$('.slider-container').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1, prevArrow: $('#doc-next'), nextArrow: $('#doc-perv'), rtl: bodyRtl,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
        , rtl: bodyRtl
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        , rtl: bodyRtl
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        , rtl: bodyRtl
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

function highlightButton(buttonId) {
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  if (buttonId === "button1") {
    button1.classList.add("highlight");
    button1.classList.add("selected");
    button2.classList.remove("highlight");
    button2.classList.remove("selected");
  } else if (buttonId === "button2") {
    button1.classList.remove("highlight");
    button1.classList.remove("selected");
    button2.classList.add("highlight");
    button2.classList.add("selected");
  }
}



$('.spec-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1, prevArrow: $('#spec-next'), nextArrow: $('#spec-perv'), rtl: bodyRtl,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        rtl: bodyRtl
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: bodyRtl
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: bodyRtl
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
gsap.registerPlugin(ScrollTrigger);
gsap.to('.Counting div', {
  scrollTrigger: {
    trigger: '.Counting div',
    toggleActions: 'restart none none none'

  }
  ,
  duration: 1,
  y: "-80%",
  delay: 0.5
})
$('.save-btn').click((E) => {

  $(E.currentTarget).toggleClass('saved')
})
const $otp_length = 6;

const element = document.getElementById('OTPInput');
for (let i = 0; i < $otp_length; i++) {
  let inputField = document.createElement('input'); // Creates a new input element
  inputField.className = "otb-elemnt";
  // Do individual OTP input styling here;
  inputField.style.cssText = "color: transparent; text-shadow: 0 0 0 gray;"; // Input field text styling. This css hides the text caret
  inputField.id = 'otp-field' + i; // Don't remove
  inputField.maxLength = 1; // Sets individual field length to 1 char
  element.appendChild(inputField); // Adds the input field to the parent div (OTPInput)
}

/*  This is for switching back and forth the input box for user experience */
const inputs = document.querySelectorAll('#OTPInput > *[id]');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function (event) {
    if (event.key === "Backspace") {

      if (inputs[i].value == '') {
        if (i != 0) {
          inputs[i - 1].focus();
        }
      } else {
        inputs[i].value = '';
      }

    } else if (event.key === "ArrowLeft" && i !== 0) {
      inputs[i - 1].focus();
    } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
      inputs[i + 1].focus();
    } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
      inputs[i].setAttribute("type", "text");
      inputs[i].value = ''; // Bug Fix: allow user to change a random otp digit after pressing it
      // Hides the text after 1 sec
    }
  });
  inputs[i].addEventListener('input', function () {
    inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
    if (i === inputs.length - 1 && inputs[i].value !== '') {
      return true;
    } else if (inputs[i].value !== '') {
      inputs[i + 1].focus();
    }
  });

}

/*  This is to get the value on pressing the submit button
  *   In this example, I used a hidden input box to store the otp after compiling data from each input fields
  *   This hidden input will have a name attribute and all other single character fields won't have a name attribute
  *   This is to ensure that only this hidden input field will be submitted when you submit the form */

document.getElementById('otpSubmit').addEventListener("click", function () {
  const inputs = document.querySelectorAll('#OTPInput > *[id]');
  let compiledOtp = '';
  for (let i = 0; i < inputs.length; i++) {
    compiledOtp += inputs[i].value;
  }
  document.getElementById('otp').value = compiledOtp;
  return true;
});
$('#to-otb').click((e) => {
  e.preventDefault();
})