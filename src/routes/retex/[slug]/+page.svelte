<script>
    import { base } from "$app/paths";
    import { marked } from "marked";
    import Loader from "$lib/components/Loader.svelte";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    // The 404 page doesn't display if it is called from the server
    let mdSource = "";

    onMount(async () => {
        const res = await fetch(`${base}/retexes/${data.slug}/${data.slug}.md`);
        if (!res.ok) {
            goto(`${base}/404`);
        }
        mdSource = await res.text();
    });

    const renderer = new marked.Renderer();
    const imagePrefix = `${base}/retexes/${data.slug}/`;

    renderer.image = (tokens) => {
        const href = tokens.href || "";
        const title = tokens.title ? `title="${tokens.title}"` : "";
        const alt = tokens.text ? `alt="${tokens.text}"` : 'alt=""';

        const prefixedHref = href.startsWith("http")
            ? href
            : `${imagePrefix}${href}`;

        return `<img src="${prefixedHref}" ${alt} ${title} />`;
    };
</script>

{#if mdSource === ""}
    <Loader />
{:else}
    <div class="flex gap-4 flex-col">
        <div class="markdown-wrapper h-full" id="markdown">
            {@html marked(mdSource, { renderer })}
        </div>
        <div class="flex justify-center">
            <a
                href={`${base}/retexes/${data.slug}/${data.slug}.pdf`}
                target="_blank"
                class="text-white text-xl p-2 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-xl hover:bg-slate-600 hover:border-slate-400 transition-colors flex items-center"
                ><span class="icon-[mingcute--pdf-fill] w-6 h-6 bg-white"
                ></span>Télécharger le PDF</a
            >
        </div>
    </div>
{/if}

<style lang="postcss">
    .markdown-wrapper :global(h1) {
        font-size: 2.5rem;
        margin: 0%;
        text-align: center;
        font-weight: bolder;
        filter: drop-shadow(theme("dropShadow.2xl"));
    }

    .markdown-wrapper :global(h2) {
        font-size: 2rem;
        text-align: center;
        filter: drop-shadow(theme("dropShadow.2xl"));
    }

    .markdown-wrapper :global(.screenshots) {
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .markdown-wrapper :global(.screenshots .screenshot) {
        width: 24rem;
    }

    .markdown-wrapper :global(.content) {
        @apply grid grid-flow-row grid-cols-2 gap-2;
    }

    .markdown-wrapper :global(.content .text) {
        @apply bg-slate-800 p-2 bg-opacity-70 border-slate-600 border-2 rounded-xl;
    }

    .markdown-wrapper :global(.content .text ul) {
        list-style-type: circle;
        padding: 1rem;
    }

    .markdown-wrapper :global(.content .text h3) {
        font-size: x-large;
    }

    .markdown-wrapper :global(.company) {
        text-align: center;
        font-size: x-large;
        font-weight: bold;
        text-decoration: underline;
    }

    @media (max-width: 1152px) {
        .markdown-wrapper :global(.content) {
            display: flex;
            flex-flow: column;
        }
    }
</style>
