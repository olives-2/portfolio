<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import { blur } from "svelte/transition";

  let { data } = $props();
</script>

<div
  class="text-white flex flex-col bg-gradient-to-br from-slate-800 to-blue-900"
>
  <Nav></Nav>
  <div class="divider"></div>
  {#key data.url}
    <div
      in:blur={{ duration: 300 }}
      out:blur={{ duration: 300 }}
    >
    <slot></slot>
  </div>
  {/key}
  <footer class="bg-gray-800 text-white bg-opacity-50 backdrop-blur-20 p-2">
    <p class="text-center">Fait avec SvelteKit et Tailwind</p>
  </footer>
</div>

<style lang="postcss">
  .divider {
    margin-bottom: 4rem;
  }
</style>
