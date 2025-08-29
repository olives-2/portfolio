<script>
    import RetexBanner from "./RetexBanner.svelte";
    import { base } from "$app/paths";
    import { iconsClasses } from "$lib/Icons";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <RetexBanner
        title="Bibliothèques d'interrogation MongoDB"
        description="Développement de bibliothèques TypeScript pour interrogation MongoDB"
        link={`${base}/retex/mongo-query-builder`}
        img={`${base}/retexes/mongo-query-builder/assetmanagerfront_listing.webp`}
        typeIcon="iconify icon-[tabler--briefcase-filled]"
    >
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--mongodb] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--bun] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--typescript] block"></i>
        </div>
    </RetexBanner>
    <!-- <RetexBanner
        title="Projet innovant"
        description="Portage d'un jeu de plateau en application web"
        link={`${base}/retex/living_forest`}
        img={`${base}/retexes/living_forest/living_forest.webp`}
        typeIcon="iconify icon-[tabler--school]"
    >
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--react] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--typescript] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[devicon-plain--nodejs] block"></i>
        </div>
    </RetexBanner> -->
    <RetexBanner
        title="Plugin Godot"
        description="Développement d'un plugin Godot pour des tutoriels"
        link={`${base}/retex/godot-tutorials`}
        img={`${base}/retexes/godot-tutorials/godot-tutorials.png`}
        typeIcon="iconify icon-[tabler--school]"
    >
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--godotengine] block"></i>
        </div>
    </RetexBanner>
    <RetexBanner
        title="Administration de réseaux virtuels"
        description="Développement d'une application d'administration de réseaux virtuels"
        link={`${base}/retex/cape`}
        img={`${base}/retexes/cape/cape_admin.webp`}
        typeIcon="iconify icon-[tabler--briefcase-filled]"
    >
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--svelte] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--javascript] block"></i>
        </div>
    </RetexBanner>
    <RetexBanner
        title="Application web"
        description="Répertoire de séries TV"
        link={`${base}/retex/serizz`}
        img={`${base}/retexes/serizz/serizz.webp`}
        typeIcon="iconify icon-[tabler--school]"
    >
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--symfony] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--mysql] block"></i>
        </div>
        <div class={iconsClasses}>
            <i class="iconify icon-[simple-icons--tailwindcss] block"></i>
        </div>
    </RetexBanner>
</div>
