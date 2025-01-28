<script>
  import { base } from "$app/paths";
</script>

<div class="flex justify-center">
  <div class="fixed flex justify-center m-auto top-0 z-10">
    <nav
      id="top-nav"
      class="m-2 gap-2 rounded-lg w-11/12 static flex justify-around items-center text-white bg-black border-2 bg-opacity-50 backdrop-blur-sm p-1"
    >
      <a
        class="hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button"
        href="{base}/#presentation">Accueil</a
      >
      <a
        class="hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button"
        href="{base}/#skills">Compétences</a
      >
      <a
        class="hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button"
        href="{base}/#retexes">Retours d'expérience</a
      >
      <a
        class="hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button"
        href="{base}/#contact">Contacts</a
      >
    </nav>
  </div>
</div>

<style lang="postcss">
  .nav-button {
    transition: all 0.2s cubic-bezier(0.41, 0.22, 0.05, 0.93);
  }
</style>
