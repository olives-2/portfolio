<script>
  import Tooltip from "sv-tooltip";
  let { description, icons, bgColor, borderColor } = $props();
</script>

<div class="{bgColor} rounded-xl border {borderColor} p-4 flex justify-center flex-col items-center gap-2 max-w-96 bg-opacity-50 backdrop-blur-sm">
  <div class="flex justify-around flex-wrap w-1/8 max-w-64 gap-4">
    {#each icons as icon}
      <Tooltip tip={icon.name} top>
        <a href={icon.link} target="_blank" aria-label="Lien vers {icon.name}">
          <i
            class="{icon.class} tech-icon text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 overflow-hidden border-2 border-slate-700 hover:border-slate-400 duration-150"
          ></i>
        </a>
      </Tooltip>
    {/each}
  </div>

  <h2>{description}</h2>
</div>
