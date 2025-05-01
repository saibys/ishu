
window.onload = function() {
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
  }, 5000);

  document.querySelector('.close-btn').addEventListener('click', closePopup);
  document.querySelector('.close-popup').addEventListener('click', closePopup);
  document.querySelector('.contact-btn').addEventListener('click', function() {
    window.location.href = 'mailto:iishu7170@gmail.com';
  });
};

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
