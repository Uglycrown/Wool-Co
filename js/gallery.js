// gallery.js

document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const thumbnailsScroll = document.querySelector('.thumbnails-scroll');
  const prevBtn = document.querySelector('.thumbnail-nav.prev');
  const nextBtn = document.querySelector('.thumbnail-nav.next');

  // Thumbnail click: update main image
 

document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImage.src = this.dataset.image;
      mainImage.alt = this.alt;
    });
  });
});

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const mainImage = document.getElementById('main-product-image');
            mainImage.src = this.getAttribute('data-image');
            
            // Remove 'active' class from all thumbnails
            document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active'));

            // Add 'active' class to the clicked thumbnail
            this.classList.add('active');
        });
    });


  // Thumbnail scroll navigation
 document.querySelector('.thumbnail-nav.prev').addEventListener('click', () => {
    document.querySelector('.thumbnails-scroll').scrollBy({ left: -100, behavior: 'smooth' });
    console.log("hello world")
});

document.querySelector('.thumbnail-nav.next').addEventListener('click', () => {
    document.querySelector('.thumbnails-scroll').scrollBy({ left: 100, behavior: 'smooth' });
});


  // Image zoom on hover (desktop only)
  mainImage.addEventListener('mousemove', function (e) {
    if (window.innerWidth < 992) return;
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    this.style.transformOrigin = `${x}% ${y}%`;
    this.style.transform = 'scale(1.2)';
    document.querySelector('.image-zoom-overlay').style.background = 'rgba(255,255,255,0.05)';
  });
  mainImage.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
    document.querySelector('.image-zoom-overlay').style.background = 'rgba(255,255,255,0)';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const thumbnailsScroll = document.querySelector('.thumbnails-scroll');

  // Thumbnail click functionality
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImage.src = this.dataset.image;
      mainImage.alt = this.alt;
    });
  });

  // Navigation buttons functionality
  document.querySelector('.thumbnail-nav.prev').addEventListener('click', () => {
    thumbnailsScroll.scrollBy({ left: -100, behavior: 'smooth' });
    const activeIndex = [...thumbnails].findIndex(t => t.classList.contains('active'));
    if (activeIndex > 0) {
      thumbnails[activeIndex - 1].click();
    } else {
      thumbnails[thumbnails.length - 1].click();
    }
  });

  document.querySelector('.thumbnail-nav.next').addEventListener('click', () => {
    thumbnailsScroll.scrollBy({ left: 100, behavior: 'smooth' });
    const activeIndex = [...thumbnails].findIndex(t => t.classList.contains('active'));
    if (activeIndex < thumbnails.length - 1) {
      thumbnails[activeIndex + 1].click();
    } else {
      thumbnails[0].click();
    }
  });
});
