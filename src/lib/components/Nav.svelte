<script>
  import { base } from "$app/paths";
  const buttonStyle =
    "hover:bg-blue-700 p-2 rounded-lg h-full flex justify-center items-center w-48 nav-button text-slate-100";
</script>

<div class="flex justify-center">
  <div class="fixed flex justify-center z-20 w-full">
    <nav
      class="m-2 gap-2 rounded-xl w-11/12 hidden absolute opacity-0 flex justify-around items-center bg-slate-800 border-slate-300 border-2 bg-opacity-50 md:opacity-100 md:relative p-1 md:opacity-100 md:flex"
    >
      <a class={buttonStyle} href="{base}/#presentation">Accueil</a>
      <a class={buttonStyle} href="{base}/#skills">Compétences</a>
      <a class={buttonStyle} href="{base}/#retexes">Retours d'expérience</a>
      <a class={buttonStyle} href="{base}/#contact">Contacts</a>
    </nav>
    <nav
      class="m-2 gap-2 rounded-xl w-11/12 flex justify-around items-center bg-slate-800 border-slate-300 border-2 bg-opacity-50 p-1 md:absolute md:hidden "
    >
      <a class={buttonStyle} href="{base}/#presentation"><i class="iconify icon-[tabler--home-filled]"></i></a>
      <a class={buttonStyle} href="{base}/#skills"><i class="iconify icon-[lucide--wrench]"></i></a>
      <a class={buttonStyle} href="{base}/#retexes"><i class="iconify icon-[lucide--newspaper]"></i></a>
      <a class={buttonStyle} href="{base}/#contact"><i class="iconify icon-[lucide--phone]"></i></a>
    </nav>
  </div>
</div>

<style lang="postcss">
  .nav-button {
    transition: all 0.2s cubic-bezier(0.41, 0.22, 0.05, 0.93);
  }
</style>
