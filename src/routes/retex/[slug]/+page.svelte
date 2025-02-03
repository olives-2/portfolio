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
    })

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
    <div class="markdown-wrapper h-full">
        {@html marked(mdSource, { renderer })}
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

    .markdown-wrapper :global(h3) {
        font-size: 2rem;
        text-align: center;
    }

    .markdown-wrapper :global(li) {
        list-style: disc;
    }

    .markdown-wrapper :global(.retex-wrapper) {
        display: flex;
        flex-flow: row ;
        justify-content: center;
        align-items: center;
        gap: theme("gap.8");
    }

    .markdown-wrapper :global(.content) {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    .markdown-wrapper :global(.screenshots) {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        width: 45%;
        gap: theme("gap.4");
    }

    .markdown-wrapper :global(.screenshot) {
        width: 60%;
        text-align: center;
    }

    .markdown-wrapper :global(.screenshot p) {
        display: inline;
    }

    .markdown-wrapper :global(img) {
        border-radius: theme("borderRadius.xl");
        border: solid 2px theme("colors.slate.400");
        filter: drop-shadow(theme("dropShadow.2xl"));
    }

    .markdown-wrapper :global(.text) {
        background-color: theme("colors.slate.800");
        border-radius: theme("borderRadius.3xl");
        padding: 2rem;
        border: solid 2px theme("colors.slate.600");
    }

    @media (max-width: 895px) {

        .markdown-wrapper :global(.retex-wrapper){
            flex-flow: row wrap;
        }
        .markdown-wrapper :global(.content) {
            grid-template-columns: 1fr;
        }
        .markdown-wrapper :global(.screenshots) {
            flex-flow: column wrap;
        }
    }
</style>
