<script>
    let {
        title,
        description,
        img,
        link,
        children,
        typeIcon = "iconify icon-[simple-icons--css3]",
    } = $props();
    import { iconsClasses } from "$lib/Icons";
</script>

<a
    href={link}
    class="rounded-2xl max-h-64 relative z-10 overflow-hidden drop-shadow-xl border-2 border-slate-400 hover:border-white transition-all text-slate-100"
>
    <span class="{iconsClasses} absolute m-1 z-10">
        <i class="{typeIcon} block"></i>
    </span>
    <span
        id="color-layer"
        class="absolute opacity-0 bg-gradient-to-br from-red-600 to-blue-600 w-full h-full z-10 blur-3xl scale-150"
    ></span>
    <div class="h-2/5">
        <img src={img} alt={title} class="object-cover h-full w-full drop-shadow-2xl" />
    </div>
    <div class="flex flex-col justify-around p-2 gap-4 bg-slate-800  h-3/5">
        <div class="flex justify-between">
            <div>
                <h1 class="text-xl font-bold">{title}</h1>
                <h2 class="text-md">{description}</h2>
            </div>
            <div class="flex justify-center items-center gap-1">
                {@render children?.()}
            </div>
        </div>
    </div>
</a>

<style>
    #color-layer {
        transition: all 0.3s;
        mix-blend-mode: lighten;
    }

    a:hover #color-layer,
    a:focus #color-layer {
        opacity: 50%;
    }
</style>
