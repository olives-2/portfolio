<script>
  let { title, description, img, link, children } = $props();
</script>

<a
  href={link}
  class="flex flex-col justify-center items-center rounded-2xl p-4 relative z-10 overflow-hidden drop-shadow-xl md:w-1/4 h-4/12 border-2 border-slate-400 hover:border-white transition-all text-slate-100"
>
  <span
    id="color-layer"
    class="absolute opacity-0 bg-gradient-to-br from-orange-600 to-purple-600 w-full h-full z-30"
  ></span>
  <img src={img} alt={title} class="absolute object-cover brightness-50 w-full h-full" />
  <div id="text" class="z-20">
    <h1 class="text-2xl text-center">{title}</h1>
    <h2 class="text-lg max-w-xl text-center">{description}</h2>
  </div>
  <div class="flex justify-center items-center gap-1">
      {@render children?.()}
  </div>
</a>

<style>
  a img,
  a span {
    transition: all 0.3s;
    mix-blend-mode: color;
  }


  a:hover #color-layer,
  a:focus #color-layer {
    opacity: 100%;
  }

  a::after img {
    scale: 100%;
  }

</style>
