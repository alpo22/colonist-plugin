# colonist-plugin
Remove ads from colonist.io

## Features
- Removes in-game ad elements (.in_game_ab_right, .in_game_ab_left, .in_game_ab_bottom, .in_game_ab_bottom_small)

## Installation Methods

### Method 1: Bookmarklet (Easiest - No installation required!)

1. Create a new bookmark in your browser (Ctrl+D or Cmd+D)
2. Name it something like "Colonist Ad Remover"
3. Copy the code below and paste it as the URL:

```javascript
javascript:(function(){const style=document.createElement('style');style.textContent=`.in_game_ab_right,.in_game_ab_left,.in_game_ab_bottom,.in_game_ab_bottom_small{display:none!important}`;document.head.appendChild(style);function removeAds(){['.in_game_ab_right','.in_game_ab_left','.in_game_ab_bottom','.in_game_ab_bottom_small'].forEach(sel=>document.querySelectorAll(sel).forEach(el=>el.remove()))}removeAds();const observer=new MutationObserver(removeAds);observer.observe(document.body,{childList:true,subtree:true})})();
```

4. Go to colonist.io and click the bookmark to activate!

### Method 2: Chrome Extension (Auto-activates on every visit)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the directory containing this extension
6. Navigate to colonist.io and enjoy an ad-free experience!
