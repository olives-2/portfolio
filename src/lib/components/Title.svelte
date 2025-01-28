<script>
  let { text } = $props();
  /**
   * @type {any[]}
   */
  let circles = [];
  const NUM_CIRCLES = 30;

  // Generate random circles
  const generateRandomCircles = (num_circles = NUM_CIRCLES) => {
    for (let i = 0; i < num_circles; i++) {
      const cx = Math.random() * 100 + "%"; // Random x position (0% to 100%)
      const cy = Math.random() * 100 + "%"; // Random y position (0% to 100%)
      const r = Math.random() * 50 + 50; // Random radius (50 to 150)

      // Random opacity between 0.2 and 0.65
      const opacity = Math.random() * (0.65 - 0.2) + 0.2;

      circles.push({ cx, cy, r, opacity });
    }
  };

  generateRandomCircles();
</script>

<section class="flex my-8 justify-center items-center bg-slate-800 bg-opacity-50 p-2">
  <!-- <svg class="bokeh -z-50" xmlns="http://www.w3.org/2000/svg">
    {#each circles as { cx, cy, r, opacity }}
      <circle class="rotate-circle" {cx} {cy} {r} {opacity} />
    {/each}
  </svg> -->
  <h1 class="w-1/1 drop-shadow-lg text-5xl p-2">{text}</h1>
</section>

<!-- Adapted from https://codepen.io/andyfitz/pen/RJwqbZ -->
<style lang="postcss">
  .bokeh {
    @apply blur-2xl;
    position: absolute;
    width: 100%;
  }

  .bokeh circle:nth-child(2n) {
    @apply fill-slate-800 opacity-50;
    transform-origin: 20% 110%;
    animation-delay: calc(-6s / 2);
    animation-duration: calc(6s * 0.6886);
  }

  .bokeh circle:nth-child(3n) {
    @apply fill-gray-500 opacity-65;
    transform-origin: 70% 30%;
    animation-delay: calc(-6s / 4);
    animation-duration: calc(6s * 1.3333);
  }

  .bokeh circle:nth-child(4n) {
    @apply fill-amber-300 opacity-65;
    transform-origin: 70% 30%;
    animation-delay: calc(-6s / 4);
    animation-duration: calc(6s * 1.3333);
  }

  .rotate-circle {
    transform-origin: center;
    animation: rotate 6s linear infinite;
    transform-box: fill-box;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
