
<script>
    import SkillsBanner from "./SkillsBanner.svelte";
    import { icons } from "$lib/Icons";
</script>
<div id="skills">
    <div class="flex flex-wrap gap-4 justify-center">
        <SkillsBanner
            title="Web"
            description="Création de sites web pour développement fullstack"
            icons={icons.webIcons}
        ></SkillsBanner>
        <SkillsBanner
            title="Bases de données"
            description="Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données"
            icons={icons.dbIcons}
        ></SkillsBanner>
        <SkillsBanner
            title="Java et Android"
            description="Développement de logiciels en Java et d'applications Android"
            icons={icons.javaIcons}
        ></SkillsBanner>
        <SkillsBanner
            title="Python"
            description=" Utilisation de Python pour analyse de données statistiques"
            icons={icons.pythonIcons}
        ></SkillsBanner>
        <SkillsBanner
            title="Système"
            description="Développement d'outils système et de scripts Bash"
            icons={icons.sysIcons}
        ></SkillsBanner>
        <SkillsBanner
            title="CI/CD"
            description="Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus"
            icons={icons.deploymentIcons}
        ></SkillsBanner>
    </div>
</div>
