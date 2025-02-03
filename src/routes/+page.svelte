<script>
    import { base } from "$app/paths";
    import Presentation from "$lib/components/Presentation.svelte";
    import Retexes from "$lib/components/Retexes.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Title from "$lib/components/Title.svelte";
    import { icons, iconsClasses } from "$lib/Icons.js";
</script>

<Presentation></Presentation>

<Title text="Compétences"></Title>

<Skills></Skills>

<Title text="Projets"></Title>

<div id="retexes" class="p-2">
    <Retexes></Retexes>
</div>

<Title text="Contacts et liens"></Title>

<div class="p-4" id="contact">
    <div class="flex p-4 justify-center items-center gap-10">
        <a
            href="https://www.linkedin.com/in/matis-olives-4b845629a/"
            aria-label="Lien vers mon LinkedIn"
            class={iconsClasses}
            target="_blank"
        >
            <i class="iconify icon-[simple-icons--linkedin] block"></i>
        </a>
        <a
            href="mailto:matisolives@gmail.com"
            aria-label="M'envoyer un mail"
            class={iconsClasses}
            target="_blank"
            ><i class="iconify icon-[material-symbols--mail-rounded] block"
            ></i></a
        >
    </div>

    <div class="flex justify-center">
        <a
            href={`${base}/assets/CV_Matis_Olives.pdf`}
            target="_blank"
            class="text-white text-xl p-2 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-xl hover:bg-slate-600 hover:border-slate-400 transition-colors flex items-center"
        >
            <span class="icon-[pepicons-print--cv]"></span> Télécharger mon CV</a
        >
    </div>
</div>
