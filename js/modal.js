// modal.js

document.addEventListener('DOMContentLoaded', function () {
  const modals = {
    sizeChart: document.getElementById('size-chart-modal'),
    colorCompare: document.getElementById('color-compare-modal')
  };
  const overlay = document.querySelector('.modal-overlay');

  // Open modal utility
  function openModal(modal) {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.querySelector('.modal-content').focus(), 100);
  }

  // Close modal utility
  function closeModal() {
    Object.values(modals).forEach(modal => modal.style.display = 'none');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Size chart modal
  document.getElementById('size-chart').addEventListener('click', () => openModal(modals.sizeChart));

  // Color compare modal
  document.getElementById('compare-colors').addEventListener('click', () => openModal(modals.colorCompare));

  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on overlay click
  overlay.addEventListener('click', closeModal);

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Close modal on click outside content
  Object.values(modals).forEach(modal => {
    modal.addEventListener('mousedown', function (e) {
      if (e.target === modal) closeModal();
    });
  });

  // Color compare logic
  const compareCheckboxes = document.querySelectorAll('.color-compare-item input[type="checkbox"]');
  const comparisonDisplay = document.querySelector('.color-comparison-display');

  // Placeholder color data
  const colorData = {
    "Navy Blue": {
      color: "#1D3461",
      desc: "A deep, rich blue that pairs well with most colors. Versatile for both casual and formal occasions."
    },
    "Heather Gray": {
      color: "#9EA3B0",
      desc: "A soft, neutral gray that works with everything."
    },
    "Forest Green": {
      color: "#2A4C36",
      desc: "A dark, earthy green for a natural look."
    },
    "Burgundy": {
      color: "#6E2C2C",
      desc: "A bold, wine-red for standout style."
    },
    "Camel": {
      color: "#C19A6B",
      desc: "A warm, classic tan for timeless appeal."
    }
  };

  function updateColorComparison() {
    comparisonDisplay.innerHTML = '';
    compareCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const label = checkbox.nextElementSibling.textContent.trim();
        const color = colorData[label];
        if (color) {
          const div = document.createElement('div');
          div.className = 'color-comparison-item active';
          div.innerHTML = `
            <div class="comparison-swatch" style="background-color: ${color.color};"></div>
            <div class="comparison-info">
              <h4>${label}</h4>
              <p>${color.desc}</p>
            </div>
          `;
          comparisonDisplay.appendChild(div);
        }
      }
    });
    if (comparisonDisplay.innerHTML === '') {
      comparisonDisplay.innerHTML = '<p style="color:#999;">Select colors to compare.</p>';
    }
  }

  compareCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateColorComparison);
  });

  // Initialize with current selection
  updateColorComparison();
});
