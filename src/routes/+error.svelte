<script>
  import { base } from "$app/paths";
  import { page } from "$app/state";
</script>

<div class="p-5 m-5">
  <h1 class="text-6xl m-4">Erreur {page.status}</h1>
  <h2 class="text-4xl m-4">{page.error?.message}</h2>
  <a href="{base}/" class="bg-blue-800 p-2 m-4 rounded-lg text-white hover:bg-blue-600 transition-colors"
    >Retourner à l'accueil</a
  >
</div>
