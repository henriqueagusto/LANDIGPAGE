document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      // Troca botão ativo
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
  
      // Mostra o conteúdo certo
      const target = btn.getAttribute('data-target');
      document.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });
    document.addEventListener('DOMContentLoaded', function() {
      // Animação das colunas ao aparecer na tela
      const footerCols = document.querySelectorAll('.footer-col');
      
      const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { threshold: 0.1 });
      
      footerCols.forEach(col => {
        footerObserver.observe(col);
      });
    
      // Criar partículas
      createParticles();
      
      // Efeito hover nos links
      const links = document.querySelectorAll('.link-hover');
      links.forEach(link => {
        link.addEventListener('mouseenter', function() {
          this.style.transform = 'translateX(5px)';
        });
        link.addEventListener('mouseleave', function() {
          this.style.transform = 'translateX(0)';
        });
      });
    });
    
    function createParticles() {
      const particlesContainer = document.querySelector('.footer-particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        
        // Duração da animação
        const duration = Math.random() * 15 + 10;
        
        // Atraso aleatório
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
          position: absolute;
          top: ${posY}%;
          left: ${posX}%;
          width: ${size}px;
          height: ${size}px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.3;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Animação
        animateParticle(particle, duration, delay);
      }
    }
    
    function animateParticle(particle, duration, delay) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = startX + (Math.random() * 40 - 20);
      const endY = startY + (Math.random() * 40 - 20);
      
      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;
      
      const animation = particle.animate([
        { 
          transform: 'translate(0, 0)',
          opacity: 0.3 
        },
        { 
          transform: `translate(${endX - startX}%, ${endY - startY}%)`,
          opacity: 0.8 
        },
        { 
          transform: 'translate(0, 0)',
          opacity: 0.3 
        }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity
      });
    }
    