// JavaScript para AtyServicio
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling para los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Solo aplicar smooth scroll si es un ancla (#)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Animación al hacer scroll (fade-in effect)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar las secciones para animarlas (excepto el hero)
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Carrusel de imágenes
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Event listeners para los botones
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopSlideShow();
      startSlideShow();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopSlideShow();
      startSlideShow();
    });
  }

  // Event listeners para los dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      stopSlideShow();
      startSlideShow();
    });
  });

  // Iniciar el slideshow automático
  startSlideShow();

  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Obtener los datos del formulario
      const formData = new FormData(contactForm);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };
      
      // Aquí puedes agregar la lógica para enviar el formulario
      // Por ejemplo, enviar a un servicio de email o API
      console.log('Datos del formulario:', data);
      
      // Mostrar mensaje de confirmación
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      
      // Limpiar el formulario
      contactForm.reset();
    });
  }

  console.log('AtyServicio cargado correctamente');
});

