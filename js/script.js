const form = document.querySelector('form');
const btn = document.querySelector('#login-btn');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  form.classList.add('loading');
  setTimeout(function() {
    form.submit();
  }, 2000);
});

const form2 = document.querySelector('form');
const btn2 = document.querySelector('#register-btn');

btn2.addEventListener('click', function(e) {
  e.preventDefault();
  form2.classList.add('loading');
  setTimeout(function() {
    form2.submit();
  }, 2000);
});
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});