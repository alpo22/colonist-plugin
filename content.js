// Remove ad elements from colonist.io
function removeAdElements() {
  const adSelectors = [
    '.in_game_ab_right',
    '.in_game_ab_left',
    '.in_game_ab_bottom',
    '.in_game_ab_bottom_small',
    '#endgame-item-box'
  ];

  adSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
    });
  });
}

// Run immediately
removeAdElements();

// Also observe for dynamically added elements
const observer = new MutationObserver(() => {
  removeAdElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
