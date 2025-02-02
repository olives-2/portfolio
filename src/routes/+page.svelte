<script>
    import { base } from "$app/paths";
    import RetexBanner from "$lib/components/RetexBanner.svelte";
    import RetexesSort from "$lib/components/Retexes.svelte";
    import Retexes from "$lib/components/Retexes.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Title from "$lib/components/Title.svelte";
    import { icons, iconsClasses } from "$lib/Icons.js";
</script>

<div class="flex justify-center">
    <div
        id="presentation"
        class="flex justify-between flex-col md:flex-row items-center border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 md:w-8/12"
    >
        <article class="md:w-2/4">
            <h1 class="text-6xl p-2 text-center drop-shadow-2xl font-bold">
                Matis Olives
            </h1>
            <h2 class="text-2xl p-2 text-center drop-shadow-xl font-semibold">
                Spécialisé dans le développement web et d'applications en POO
            </h2>
            <p class="text-lg p-2">
                Je suis un étudiant d'informatique à l'IUT de
                Bordeaux-Gradignan. Dans cette formation, je réalise des
                missions me formant à des situations réelles du domaine de
                l'informatique.
            </p>
        </article>
        <img
            src={`${base}/img/me.webp`}
            alt="Portrait"
            class="rounded-full m-2 relative drop-shadow-2xl border-slate-400 border-2 w-64 h-64"
        />
    </div>
</div>

<Title text="Compétences"></Title>

<div id="skills">
    <div class="flex flex-wrap gap-4 justify-center">
        <Skills
            title="Web"
            description="Création de sites web pour développement fullstack"
            icons={icons.webIcons}
        ></Skills>
        <Skills
            title="Bases de données"
            description="Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données"
            icons={icons.dbIcons}
        ></Skills>
        <Skills
            title="Java et Android"
            description="Développement de logiciels en Java et d'applications Android"
            icons={icons.javaIcons}
        ></Skills>
        <Skills
            title="Python"
            description=" Utilisation de Python pour analyse de données statistiques"
            icons={icons.pythonIcons}
        ></Skills>
        <Skills
            title="Système"
            description="Développement d'outils système et de scripts Bash"
            icons={icons.sysIcons}
        ></Skills>
        <Skills
            title="CI/CD"
            description="Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus"
            icons={icons.deploymentIcons}
        ></Skills>
    </div>
</div>

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
