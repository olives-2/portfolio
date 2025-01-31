<script>
  import Tooltip from "sv-tooltip";
  let { description, icons } = $props();
</script>

<div class="rounded-xl border border-slate-600 bg-slate-800 p-4 flex justify-around flex-col items-center gap-4 max-w-96 bg-opacity-50 backdrop-blur-sm">
  <div class="grid grid-cols-4 flex-wrap w-1/8 max-w-64 gap-4 p-2">
    {#each icons as icon}
      <Tooltip tip={icon.name} top>
        <a href={icon.link} target="_blank" aria-label="Lien vers {icon.name}" class="block text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 border-2 border-slate-700 hover:border-slate-400 duration-150 text-slate-100">
          <i
            class="{icon.class} m-0 p-0 block"
          ></i>

        </a>
      </Tooltip>
    {/each}
  </div>

  <h2>{description}</h2>
</div>
