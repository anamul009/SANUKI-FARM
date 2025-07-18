  document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DEFINE YOUR PRODUCTS HERE ---
    const products = [
      {
        pretitle: '贅沢な一粒をどうぞ。',
        name: 'シャインマスカット',
        description: '果汁たっぷりで濃厚な甘さが特徴です。 一粒食べれば口いっぱいに広がる芳醇な香りとジューシーな味わい。',
        image: 'img/img (2).png' // Image for Shine Muscat
      },
      {
        pretitle: 'とろけるような甘さと香り。',
        name: '贅沢な桃',
        description: 'ひと口食べれば、上品な香りとジューシーな味わいが口いっぱいに広がります。その美しさと繊細な風味は、まさに夏のごちそう',
        image: 'img/img (4).png' // Image for Shine Muscat
      },

    ];

    // --- 2. SCRIPT LOGIC (No need to edit below here) ---
    let currentProductIndex = 0;

    // Get elements from the page
    const pretitleEl = document.getElementById('product-pretitle');
    const nameEl = document.getElementById('product-name');
    const descriptionEl = document.getElementById('product-description');
    const imageEl = document.getElementById('product-image');
    const textContainer = document.getElementById('product-text-container');
    const imageContainer = document.getElementById('product-image-container');
    
    const prevBtn = document.getElementById('prev-product');
    const nextBtn = document.getElementById('next-product');
    const dotsContainer = document.getElementById('pagination-dots');

    // Function to update the content on the page
    function displayProduct(index) {
      const product = products[index];

      // Fade out content
      textContainer.style.opacity = 0;
      imageContainer.style.opacity = 0;

      // Wait for the fade out, then change content and fade back in
      setTimeout(() => {
        pretitleEl.textContent = product.pretitle;
        nameEl.textContent = product.name;
        descriptionEl.textContent = product.description;
        imageEl.src = product.image;
        imageEl.alt = product.name;

        // Fade in content
        textContainer.style.opacity = 1;
        imageContainer.style.opacity = 1;
      }, 300); // Should be slightly less than the CSS transition duration

      // Update pagination dots
      updateDots(index);
    }

    // Function to update the active dot
    function updateDots(activeIndex) {
        dotsContainer.innerHTML = ''; // Clear existing dots
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

    // Event listeners for Prev/Next buttons
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

    // Initial display
    displayProduct(currentProductIndex);
  });
