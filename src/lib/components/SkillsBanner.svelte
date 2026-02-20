<script>
    import Tooltip from "sv-tooltip";
    import { iconsClasses } from "$lib/Icons";
    let { title, description, icons } = $props();
</script>

<div
    class="w-full h-full rounded-xl flex items-center flex-col border border-slate-400 bg-slate-800 p-4 gap-4 min-h-12 bg-opacity-50"
>
    <h1 class="text-3xl font-bold p-4">{title}</h1>
    <div class="flex flex-col h-full justify-between items-center gap-4">
        <div
            class="grid grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 justify-center items-center"
        >
            {#each icons as icon}
                <a
                    href={icon.link}
                    target="_blank"
                    aria-label="Lien vers {icon.name}"
                    class="{iconsClasses} w-24 h-24 flex justify-center items-center flex-col text-lg gap-2"
                >
                    <i class="{icon.class}"></i>
                    {icon.name}
                </a>
            {/each}
        </div>

        <h2 class="text-xl">{description}</h2>
    </div>
</div>
