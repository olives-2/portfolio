<script>
  import { base } from "$app/paths";
  import { marked } from "marked";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  export let data;
  let mdSource = "";

  onMount(async () => {
    try {
      const res = await fetch(`${base}/retexes/${data.slug}/${data.slug}.md`);
      if (!res.ok) {
        throw new Error(`Failed to load file: ${res.status} ${res.statusText}`);
      }
      mdSource = await res.text();
    } catch (err) {
      goto(`${base}/404`);
      console.error("Error loading Markdown:", err);
    }
  });
</script>

{#if mdSource === ""}
  <p>Chargement...</p>
{:else}
  <div class="markdown-wrapper">
    {@html marked(mdSource)}
  </div>
{/if}

<style lang="post-css">
  .markdown-wrapper :global(h1) {
    font-size: 2.5rem;
    text-align: center;
  }
  .markdown-wrapper :global(h2) {
    font-size: 2rem;
    text-align: center;
  }
  .markdown-wrapper :global(h3) {
    font-size: 2rem;
  }
  .markdown-wrapper :global(li) {
    list-style: circle;
  }
  .markdown-wrapper :global(img) {
    border-radius: 16px;
    width: 25%;
    margin: 2rem;
  }
  .markdown-wrapper :global(article) {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  
  .markdown-wrapper :global(.section) {
    font-size: larger;
    background-color: rgba(45, 55, 72, 0.8);
    backdrop-filter: theme("blur.md");
    border: solid 1px theme("colors.slate.400");
    width: 20%;
    margin: 1rem;
    border-radius: 1rem;
    padding: 1%;
  }
  .markdown-wrapper :global(.type) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    background-color: rgba(45, 55, 72, 0.8);
    backdrop-filter: theme("blur.md");
    border: solid 1px theme("colors.slate.400");
    width: fit-content;
    margin: 1rem;
    border-radius: 1rem;
    padding: 1%;
    position: absolute;
    top: 5rem;
  }
</style>
