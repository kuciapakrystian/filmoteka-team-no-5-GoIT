'use strict';

// Refresh rendered movie cards
export function refreshRendering() {
  const elementToRemove = document.querySelectorAll('.movie-card');
  if (elementToRemove.length > 0) {
    for (let i = 0; i < elementToRemove.length; i++) {
      elementToRemove[i].remove();
    }
  }
}
export function refreshRenderingPagination() {
  const elementToRemove = document.querySelector('#pagination-numbers');
  elementToRemove.innerHTML = '';
}