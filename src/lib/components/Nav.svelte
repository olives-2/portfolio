<script>
  import { base } from "$app/paths";
  const buttonStyle =
    "hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button text-slate-100";
</script>

<div class="flex justify-center">
  <div class="fixed flex justify-center z-20">
    <nav
      id="top-nav"
      class="m-2 gap-2 rounded-xl w-11/12 static flex justify-around items-center bg-black border-slate-300 border-2 bg-opacity-30 backdrop-blur-sm p-1"
    >
      <a class={buttonStyle} href="{base}/#presentation">Accueil</a>
      <a class={buttonStyle} href="{base}/#skills">Compétences</a>
      <a class={buttonStyle} href="{base}/#retexes">Retours d'expérience</a>
      <a class={buttonStyle} href="{base}/#contact">Contacts</a>
    </nav>
  </div>
</div>

<style lang="postcss">
  .nav-button {
    transition: all 0.2s cubic-bezier(0.41, 0.22, 0.05, 0.93);
  }
</style>
