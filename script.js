document.getElementById('signup-btn').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });
  
  document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  