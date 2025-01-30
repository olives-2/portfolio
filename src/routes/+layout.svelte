<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import { slide } from "svelte/transition";

  let { data, children } = $props();
</script>

<div
  class="text-white flex flex-col h-full "
>
  
  <Nav></Nav>
  <div class="divider"></div>
  {#key data.url}
    <div
      in:slide={{ duration: 200 }}
      out:slide={{ duration: 200 }}
    >
    {@render children?.()}
  </div>
  {/key}  
  <footer class="bg-gray-800 text-white bg-opacity-50 backdrop-blur-20 p-2 relative bottom-0 mt-auto">
    <p class="text-center">Fait avec SvelteKit et Tailwind</p>
    <div class="flex justify-center">
      <a href="https://github.com/olives-2/portfolio"><i class="nf nf-cod-github"></i>Voir le dépôt</a>
    </div>
  </footer>
</div>

<style lang="postcss">
  .divider {
    margin-bottom: 4rem;
  }
</style>
