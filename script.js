
window.onload = function() {
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
  }, 5000);

  document.querySelector('.close-btn').addEventListener('click', closePopup);
  document.querySelector('.close-popup').addEventListener('click', closePopup);
  document.querySelector('.contact-btn').addEventListener('click', function() {
    window.location.href = 'cv.html';
  });
};

var closePopup = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=918816053075&text=i%20am%20a%20student';
  }
