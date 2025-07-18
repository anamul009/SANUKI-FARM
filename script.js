
  document.addEventListener('DOMContentLoaded', () => {

    // --- PRODUCT SLIDER LOGIC ---
    const products = [
      {
        pretitle: '贅沢な一粒をどうぞ。',
        name: 'シャインマスカット',
        description: '果汁たっぷりで濃厚な甘さが特徴です。 一粒食べれば口いっぱいに広がる芳醇な香りとジューシーな味わい。',
        image: 'img/img (2).png'
      },
      {
        pretitle: 'とろけるような甘さと香り。',
        name: '贅沢な桃',
        description: 'ひと口食べれば、上品な香りとジューシーな味わいが口いっぱいに広がります。その美しさと繊細な風味は、まさに夏のごちそう',
        image: 'img/img (4).png'
      },
    ];
    let currentProductIndex = 0;
    const pretitleEl = document.getElementById('product-pretitle');
    const nameEl = document.getElementById('product-name');
    const descriptionEl = document.getElementById('product-description');
    const imageEl = document.getElementById('product-image');
    const textContainer = document.getElementById('product-text-container');
    const imageContainer = document.getElementById('product-image-container');
    const prevBtn = document.getElementById('prev-product');
    const nextBtn = document.getElementById('next-product');
    const dotsContainer = document.getElementById('pagination-dots');
    function displayProduct(index) {
      const product = products[index];
      textContainer.style.opacity = 0;
      imageContainer.style.opacity = 0;
      setTimeout(() => {
        pretitleEl.textContent = product.pretitle;
        nameEl.textContent = product.name;
        descriptionEl.textContent = product.description;
        imageEl.src = product.image;
        imageEl.alt = product.name;
        textContainer.style.opacity = 1;
        imageContainer.style.opacity = 1;
      }, 300); 
      updateDots(index);
    }
    function updateDots(activeIndex) {
        dotsContainer.innerHTML = ''; 
        products.forEach((_, index) => {
            const dot = document.createElement('a');
            dot.href = '#';
            dot.classList.add('block', 'h-2', 'w-2', 'rounded-full', 'transition-colors');
            if (index === activeIndex) {
                dot.classList.add('bg-white');
            } else {
                dot.classList.add('bg-white/40');
            }
            dot.addEventListener('click', (e) => {
              e.preventDefault();
              currentProductIndex = index;
              displayProduct(currentProductIndex);
            });
            dotsContainer.appendChild(dot);
        });
    }
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentProductIndex = (currentProductIndex + 1) % products.length;
      displayProduct(currentProductIndex);
    });
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
      displayProduct(currentProductIndex);
    });
    displayProduct(currentProductIndex);

    // --- Auto-close mobile menu on link click ---
    const mobileMenuLinks = document.querySelectorAll('.fullscreen-menu a');
    const menuToggleCheckbox = document.getElementById('menu-toggle');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggleCheckbox.checked = false;
      });
    });

  });
