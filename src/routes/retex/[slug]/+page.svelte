<script>
    import { base } from "$app/paths";
    import { marked } from "marked";
    import Loader from "$lib/components/Loader.svelte";
    export let data;
    let mdSource = data.mdSource;

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
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        padding: theme("padding.2");
        gap: theme("gap.8");
    }

    .markdown-wrapper :global(p) {
        display: inline;
        box-sizing: content-box;
    }

    .markdown-wrapper :global(.content) {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    .markdown-wrapper :global(.screenshots) {
        display: flex;
        gap: 1rem;
    }

    .markdown-wrapper :global(.screenshot) {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .markdown-wrapper :global(.screenshot p) {
        display: inline;
        width: 50%;
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
        .markdown-wrapper :global(.content) {
            grid-template-columns: 1fr;
        }
        .markdown-wrapper :global(.screenshots) {
            flex-flow: row wrap;
        }
    }
</style>
