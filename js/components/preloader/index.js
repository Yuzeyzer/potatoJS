const overlay = document.createElement('div');
const dotOverlay = document.createElement('div');

overlay.className = 'preloader';
dotOverlay.className = 'preloader__dot';
overlay.innerHTML = `
<h1>
<span class="o-1">O</span>
<span class="c">C</span>
<span class="o-2">O</span>
<span class="l">L</span>
<span class="u">U</span>
<span class="s">S</span>
<span class="dot">.</span>
</h1>`;
overlay.append(dotOverlay);

export default overlay;
