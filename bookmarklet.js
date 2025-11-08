// Bookmarklet code for colonist.io - Ad Remover & Fullscreen
// To use: Create a bookmark with this code as the URL (prefixed with javascript:)

javascript:(function(){
  // Add CSS to hide ads and make canvas fullscreen
  const style = document.createElement('style');
  style.textContent = `
    .in_game_ab_right,
    .in_game_ab_left,
    .in_game_ab_bottom,
    .in_game_ab_bottom_small {
      display: none !important;
    }
    canvas {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 1000 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Remove ad elements from DOM
  function removeAds() {
    const selectors = ['.in_game_ab_right', '.in_game_ab_left', '.in_game_ab_bottom', '.in_game_ab_bottom_small'];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  }
  
  removeAds();
  
  // Watch for dynamically added ads
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
})();
