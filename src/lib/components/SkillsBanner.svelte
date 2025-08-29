<script>
  import Tooltip from "sv-tooltip";
  import { iconsClasses } from "$lib/Icons";
  let { title, description, icons } = $props();
</script>

<div class="rounded-xl border border-slate-400 bg-slate-800 p-4 flex justify-between flex-col items-center gap-4 max-w-96 bg-opacity-50">
  <h1 class="text-3xl font-bold">{title}</h1>
  <div class="flex justify-center flex-wrap gap-4 place-items-center">
    {#each icons as icon}
      <Tooltip tip={icon.name} top>
        <a href={icon.link} target="_blank" aria-label="Lien vers {icon.name}" class={iconsClasses}>
          <i
            class="{icon.class} m-0 p-0 block"
          ></i>
        </a>
      </Tooltip>
    {/each}
  </div>

  <h2>{description}</h2>
</div>
