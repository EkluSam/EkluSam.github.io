document.addEventListener('DOMContentLoaded', function() {
    var linkElements = document.querySelectorAll('.navbar-nav .nav-link');
    for (var i = 0; i < linkElements.length; i++) {
      linkElements[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var startPosition = window.pageYOffset;
      var targetPosition = targetElement.offsetTop - 35;
      var distance = targetPosition - startPosition;
      var duration = 800;
      var startTimestamp = null;
  
      function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        var progress = timestamp - startTimestamp;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
  
      window.requestAnimationFrame(step);
  
      
      if (this.innerText !== "Samuel Eklu") {
        var activeLink = document.querySelector('.navbar-nav .nav-link.active');
        if (activeLink) {
          activeLink.classList.remove('active');
        }
        this.classList.add('active');
      }
    }
  
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 555) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  // Scroll doux vers le héros lors du clic sur "Home" dans la barre de navigation
  document.querySelector('.navbar-brand').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    var heroSection = document.getElementById('hero');
    smoothScrollToSection(heroSection);
  });
  
 
  function smoothScrollToSection(section) {
    var startPosition = window.pageYOffset;
    var targetPosition = section.offsetTop - 35;
    var distance = targetPosition - startPosition;
    var duration = 800;
    var startTimestamp = null;
  
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      var progress = timestamp - startTimestamp;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  
    window.requestAnimationFrame(step);
  
    // Mettre à jour la classe 'active' pour le lien "Home"
    var activeLink = document.querySelector('.navbar-nav .nav-link.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }
    document.querySelector('.navbar-brand').classList.add('active');
  }
  

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
  
