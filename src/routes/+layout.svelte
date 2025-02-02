<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import { slide } from "svelte/transition";
  import Footer from "$lib/components/Footer.svelte";
  import { cubicInOut } from "svelte/easing";
  import { base } from "$app/paths";
  let { data, children } = $props();
</script>


<div
class="gradient text-white flex flex-col min-h-full bg-gradient-to-br from-blue-700 to-blue-900 animate-gradient relative overflow-hidden"
>
<Nav></Nav>
<div class="mb-16"></div>
{#key data.url}
<div in:slide={{ duration: 200, easing: cubicInOut }} out:slide={{ duration: 200, easing: cubicInOut }} class="z-10">
  {@render children?.()}
</div>
{/key}
<img src={`${base}/img/planet.webp`} class="absolute blur-md scale-150 left-16" alt="planet">
<Footer />
</div>

<style lang="postcss">
  @theme {
    --animate-gradient: wiggle 1s ease-in-out infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

</style>
