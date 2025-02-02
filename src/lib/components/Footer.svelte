<script>
  import { base } from "$app/paths";

</script>
<footer class="bg-gray-800 text-white bg-opacity-50 p-2 mt-auto relative bottom-0 drop-shadow-lg">
    <p class="text-center">Fait avec SvelteKit et Tailwind</p>
    <div class="flex justify-center gap-4">
      <a href="https://github.com/olives-2/portfolio"
        ><i class="iconify icon-[octicon--mark-github]"></i> Voir le dépôt</a
      >
      <a href={`${base}/legal`}>Mentions légales</a>
    </div>
  </footer>