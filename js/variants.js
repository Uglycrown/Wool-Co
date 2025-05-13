// variants.js

document.addEventListener('DOMContentLoaded', function () {
  // --- COLOR VARIANT SELECTION ---
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const selectedColorLabel = document.getElementById('selected-color');
  const colorStorageKey = 'selectedColor';

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function () {
      // Remove 'active' from all, add to clicked
      colorSwatches.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      selectedColorLabel.textContent = this.dataset.color;
      // Persist selection
      localStorage.setItem(colorStorageKey, this.dataset.color);
    });
  });

  // Restore color from localStorage on page load
  const savedColor = localStorage.getItem(colorStorageKey);
  if (savedColor) {
    colorSwatches.forEach(swatch => {
      if (swatch.dataset.color === savedColor) {
        swatch.classList.add('active');
        selectedColorLabel.textContent = savedColor;
      } else {
        swatch.classList.remove('active');
      }
    });
  }

  // --- SIZE VARIANT SELECTION ---
  const sizeButtons = document.querySelectorAll('.size-button');
  const selectedSizeLabel = document.getElementById('selected-size');
  const sizeStorageKey = 'selectedSize';

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      sizeButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedSizeLabel.textContent = this.dataset.size;
      // Persist selection
      localStorage.setItem(sizeStorageKey, this.dataset.size);
    });
  });

  // Restore size from localStorage on page load
  const savedSize = localStorage.getItem(sizeStorageKey);
  if (savedSize) {
    sizeButtons.forEach(btn => {
      if (btn.dataset.size === savedSize) {
        btn.classList.add('active');
        selectedSizeLabel.textContent = savedSize;
      } else {
        btn.classList.remove('active');
      }
    });
  }
});
