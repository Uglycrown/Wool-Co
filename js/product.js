// product.js

document.addEventListener('DOMContentLoaded', function () {
  // Quantity selector
  const qtyInput = document.getElementById('quantity');
  document.querySelector('.quantity-btn.decrease').addEventListener('click', () => {
    let val = parseInt(qtyInput.value, 10);
    if (val > 1) qtyInput.value = val - 1;
  });
  document.querySelector('.quantity-btn.increase').addEventListener('click', () => {
    let val = parseInt(qtyInput.value, 10);
    if (val < 99) qtyInput.value = val + 1;
  });

  // Complementary products scroll
  const compScroll = document.querySelector('.complementary-scroll');
  document.querySelector('.scroll-btn.prev').addEventListener('click', () => {
    compScroll.scrollBy({ left: -220, behavior: 'smooth' });
  });
  document.querySelector('.scroll-btn.next').addEventListener('click', () => {
    compScroll.scrollBy({ left: 220, behavior: 'smooth' });
  });

  // Add to cart/wishlist/bundle (placeholder, replace with real logic)
  document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    alert('Added to cart!');
  });
  document.querySelector('.buy-now-btn').addEventListener('click', () => {
    alert('Proceed to checkout!');
  });
  document.querySelector('.wishlist-btn').addEventListener('click', () => {
    alert('Added to wishlist!');
  });
  document.querySelector('.bundle-add-btn').addEventListener('click', () => {
    alert('Bundle added to cart!');
  });

  // Quick add for complementary products
  document.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Complementary product added to cart!');
    });
  });
});
