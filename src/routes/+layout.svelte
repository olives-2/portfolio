<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    let { data, children } = $props();
</script>

<div
    class="gradient text-white flex flex-col min-h-full bg-linear-to-br from-blue-800 to-slate-900 relative overflow-hidden"
>
    <Nav></Nav>
    <div class="mb-16"></div>
    {#key data.url}
        <div class="z-10 p-2 min-h-full">
            {@render children?.()}
        </div>
    {/key}
    <Footer />
</div>
