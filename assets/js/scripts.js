// scripts.js - Escuela de Conducción Profesional - Modernizado

document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de componentes
    initMobileMenu();
    initContactForm();
    initSmoothScrolling();
    initPricingCards();
    initImageLightbox();
    initScrollAnimations();
    initLoadingStates();
    initPackageButtons();
    
    // Menú móvil
    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileToggle && mobileNav) {
            mobileToggle.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
            
            // Cerrar menú al hacer clic en enlaces
            const mobileLinks = mobileNav.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                });
            });
            
            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!mobileToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                    mobileNav.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        }
    }
    
    // Formulario de contacto mejorado
    function initContactForm() {
        const form = document.getElementById('form-contacto');
        const mensajeExito = document.getElementById('mensaje-exito');
        const submitBtn = form?.querySelector('button[type="submit"]');
        
        if (form) {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Mostrar estado de carga
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.innerHTML = '<span class="loading"></span> Verzenden...';
                    submitBtn.disabled = true;
                }
                
                try {
                    // Simular envío (reemplazar con lógica real de envío)
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Mostrar mensaje de éxito
                    if (mensajeExito) {
                        mensajeExito.style.display = 'block';
                        mensajeExito.classList.add('bounce-in');
                        form.reset();
                        
                        setTimeout(() => {
                            mensajeExito.style.display = 'none';
                            mensajeExito.classList.remove('bounce-in');
                        }, 5000);
                    }
                } catch (error) {
                    console.error('Error al enviar formulario:', error);
                    alert('Er is een fout opgetreden. Probeer het opnieuw.');
                } finally {
                    // Restaurar botón
                    if (submitBtn) {
                        submitBtn.innerHTML = 'Submit';
                        submitBtn.disabled = false;
                    }
                }
            });
            
            // Validación en tiempo real
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', validateField);
                input.addEventListener('input', clearValidationError);
            });
        }
    }
    
    // Validación de campos
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Limpiar errores previos
        clearValidationError(e);
        
        let isValid = true;
        let errorMessage = '';
        
        // Validaciones específicas
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Dit veld is verplicht';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Voer een geldig e-mailadres in';
            }
        }
        
        if (!isValid) {
            showValidationError(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showValidationError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.cssText = 'color: #e74c3c; font-size: 0.875rem; margin-top: 5px;';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    function clearValidationError(e) {
        const field = e.target;
        field.style.borderColor = '';
        
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // Scroll suave mejorado
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Tarjetas de precios mejoradas
    function initPricingCards() {
        document.querySelectorAll('.solicitar-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const card = this.closest('.flip-card');
                const paquete = card.querySelector('.flip-card-front h4').textContent;
                const precio = card.querySelector('.valor').textContent;
                
                const mensaje = `Hallo! Ik zou geïnteresseerd zijn in ${paquete} voor ${precio}. Kunt u mij meer informatie geven?`;
                const numero = '31651196657';
                
                // Efecto visual antes de redirigir
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
                }, 150);
            });
        });
        
        // Efecto hover mejorado para las tarjetas
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Lightbox para imágenes de galería
    function initImageLightbox() {
        const images = document.querySelectorAll('.galeria-imagenes img');
        
        images.forEach(img => {
            img.addEventListener('click', function() {
                createLightbox(this.src, this.alt);
            });
            
            // Indicador visual de que es clickeable
            img.style.cursor = 'pointer';
            img.title = 'Klik om te vergroten';
        });
    }
    
    function createLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            background: none;
            border: none;
            color: white;
            font-size: 40px;
            cursor: pointer;
            z-index: 10001;
        `;
        
        lightbox.appendChild(img);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        
        // Animación de entrada
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
        // Cerrar lightbox
        const closeLightbox = () => {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }
    
    // Animaciones al hacer scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observar elementos animables
        document.querySelectorAll('.servicio, .flip-card, .info-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Estados de carga
    function initLoadingStates() {
        // Lazy loading para imágenes
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    // Funciones utilitarias
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimización del scroll y barra de progreso
    let ticking = false;
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        // Actualizar barra de progreso
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            scrollProgress.style.transform = `scaleX(${scrollPercent})`;
        }
        
        // Efecto en el header
        const header = document.querySelector('header');
        if (header) {
            if (scrollTop > 100) {
                header.style.backdropFilter = 'blur(10px)';
                header.style.background = 'rgba(8, 79, 107, 0.95)';
            } else {
                header.style.backdropFilter = 'none';
                header.style.background = 'linear-gradient(135deg, var(--dark-color) 0%, var(--primary-color) 100%)';
            }
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    });
    
    // Funcionalidad de botones de solicitud de paquetes
    function initPackageButtons() {
        const packageButtons = document.querySelectorAll('.solicitar-btn');
        
        packageButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener el nombre del paquete
                const flipCard = this.closest('.flip-card');
                const packageName = flipCard.querySelector('h4').textContent;
                const packagePrice = flipCard.querySelector('.valor').textContent;
                
                // Llenar el formulario de contacto con información del paquete
                const contactForm = document.getElementById('form-contacto');
                const mensajeField = document.getElementById('mensaje');
                
                if (contactForm && mensajeField) {
                    // Texto predefinido para el mensaje
                    const predefinedMessage = `Hallo, ik ben geïnteresseerd in het ${packageName} (${packagePrice}). Graag zou ik meer informatie willen ontvangen over dit pakket en de beschikbaarheid voor rijlessen. Alvast bedankt!`;
                    
                    mensajeField.value = predefinedMessage;
                    
                    // Scroll suave hacia el formulario de contacto
                    contactForm.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Enfocar el campo de nombre después de un pequeño delay
                    setTimeout(() => {
                        const nombreField = document.getElementById('nombre');
                        if (nombreField) {
                            nombreField.focus();
                        }
                    }, 500);
                    
                    // Mostrar feedback visual
                    mensajeField.style.backgroundColor = '#e8f5e8';
                    setTimeout(() => {
                        mensajeField.style.backgroundColor = '';
                    }, 2000);
                }
            });
        });
    }
    
    // Funcionalidad adicional del botón WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    console.log('🚗 Riveros Autorijschool - Website loaded successfully!');
});
