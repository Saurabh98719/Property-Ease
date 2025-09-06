
document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector('.star-content');
        let rightBtn = document.querySelector('#star-right');
        let leftBtn = document.querySelector('#star-left')
    
        rightBtn.addEventListener('click', () => {
            let scrollAmount = slider.querySelector('.star-box').offsetWidth + 15;
            slider.scrollLeft += scrollAmount;
        });
})

  const navbar = document.getElementById("nav-container");
  const studentSection = document.getElementById("student-section");

  window.addEventListener("scroll", () => {
    const sectionTop = studentSection.offsetTop;
    const sectionHeight = studentSection.offsetHeight;
    const scrollPos = window.scrollY;


    if (scrollPos + 100 >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navbar.style.display = "none";  // Hide navbar
    } else {
      navbar.style.display = "flex";  // Show navbar
    }
  });

  const filterInputs = document.querySelectorAll('.filter-select, .filter-input');
        
        // Add change event listeners to highlight active filters
        filterInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (this.value && this.value !== 'any' && this.value !== 'all' && this.value !== '0') {
                    this.classList.add('active');
                } else {
                    this.classList.remove('active');
                }
            });

            input.addEventListener('input', function() {
                if (this.value && this.value !== 'any' && this.value !== 'all' && this.value !== '0') {
                    this.classList.add('active');
                } else {
                    this.classList.remove('active');
                }
            });
        });

        function resetFilters() {
            // Reset all form elements
            document.getElementById('type-select').value = 'rent';
            document.getElementById('category-select').value = 'all';
            document.getElementById('min-price').value = '';
            document.getElementById('max-price').value = '';
            document.getElementById('bedrooms-select').value = 'any';
            document.getElementById('sort-select').value = 'newest';
            
            // Remove active classes
            filterInputs.forEach(input => {
                input.classList.remove('active');
            });
            
            console.log('Filters reset');
        }

        function applyFilters() {
            const filters = {
                type: document.getElementById('type-select').value,
                category: document.getElementById('category-select').value,
                minPrice: document.getElementById('min-price').value,
                maxPrice: document.getElementById('max-price').value,
                bedrooms: document.getElementById('bedrooms-select').value,
                sortBy: document.getElementById('sort-select').value
            };
            
            console.log('Applying filters:', filters);
            
            // Here you would typically send the filters to your backend or update the property listings
            alert('Filters applied! Check console for filter values.');
        }

        // Price validation
        document.getElementById('min-price').addEventListener('input', function() {
            const maxPrice = document.getElementById('max-price');
            if (this.value && maxPrice.value && parseInt(this.value) > parseInt(maxPrice.value)) {
                maxPrice.value = this.value;
            }
        });

        document.getElementById('max-price').addEventListener('input', function() {
            const minPrice = document.getElementById('min-price');
            if (this.value && minPrice.value && parseInt(this.value) < parseInt(minPrice.value)) {
                minPrice.value = this.value;
            }
        });

        function toggleMobileMenu() {
            // const searchSection = document.getElementById('searchSection');
            const navLinks = document.getElementById('sub-nav');
            
            // searchSection.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        // Active link switching
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.classList[1]; // Get second class name
                console.log(`${action} button clicked`);
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const navLinks = document.getElementById('sub-nav');
            
            
        });

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';