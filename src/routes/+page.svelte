<script>
    import { base } from "$app/paths";
    import RetexBanner from "$lib/components/RetexBanner.svelte";
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <RetexBanner
            title="Application d'administration"
            description="Développement d'une application d'administration de réseaux virtuels"
            link={`${base}/retex/cape`}
            img={`${base}/retexes/cape/cape_admin.webp`}
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
        <RetexBanner
            title="Projet innovant"
            description="Portage d'un jeu de plateau en application web"
            link={`${base}/retex/living_forest`}
            img={`${base}/retexes/living_forest/living_forest.webp`}
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
        </RetexBanner>
    </div>
</div>

<Title text="Contacts et liens"></Title>

<div id="contact" class="flex p-2 justify-center items-center gap-10">
    <a
        href="https://www.linkedin.com/in/matis-olives-4b845629a/"
        aria-label="Lien vers mon LinkedIn"
        class={iconsClasses}
    >
        <i class="iconify icon-[simple-icons--linkedin] block"></i>
    </a>
    <a
        href="mailto:matisolives@gmail.com"
        aria-label="M'envoyer un mail"
        class={iconsClasses}
        ><i class="iconify icon-[material-symbols--mail-rounded] block"></i></a
    >
</div>
