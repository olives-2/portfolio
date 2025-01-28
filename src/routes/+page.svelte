<script>
  import { base } from "$app/paths";
  import RetexBanner from "$lib/components/RetexBanner.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Title from "$lib/components/Title.svelte";
  import icons from "$lib/Icons.js";
</script>

<div class="flex justify-center">
  <div
    id="presentation"
    class="flex justify-around items-center backdrop-blur-sm border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 w-11/12"
  >
    <article class="w-2/4">
      <h1 class="text-6xl my-5">Matis Olives</h1>
      <h2 class="text-3xl my-5">
        Spécialisé dans le développement web et d'applications en POO
      </h2>
      <p class="text-xl">
        Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
        cette formation, je réalise des missions me formant à des situations
        réelles du domaine de l'informatique.
      </p>
    </article>
    <img
      src={`${base}/img/me.webp`}
      alt="Portrait"
      class="rounded-full w-64 relative drop-shadow-lg"
    />
  </div>
</div>

<Title text="Compétences"></Title>

<div id="skills">
  <div class="flex flex-wrap gap-4 justify-center">
    <Skills
      description="Création de sites web pour développement fullstack"
      icons={icons.webIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
    <Skills
      description="Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données"
      icons={icons.dbIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
    <Skills
      description="Développement de logiciels en Java et d'applications Android"
      icons={icons.javaIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
    <Skills
      description=" Utilisation de Python pour analyse de données statistiques"
      icons={icons.pythonIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
    <Skills
      description="Développement d'outils système et de scripts Bash"
      icons={icons.sysIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
    <Skills
      description="Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus"
      icons={icons.deploymentIcons}
      bgColor="bg-slate-800"
      borderColor="bg-slate-700"
    ></Skills>
  </div>
</div>

<Title text="Retours d'expérience"></Title>

<div id="retexes" class="flex flex-col p-2">
  <div class="flex justify-center flex-wrap gap-2">
    <RetexBanner
      title="Application d'administration"
      description="Développement d'une application d'administration de réseaux virtuels"
      link={`${base}/retex/cape`}
      img={"/img/retexes/cape/screen1.webp"}
    ></RetexBanner>
    <RetexBanner
      title="Application web"
      description="Répertoire de séries TV"
      link="/retex/serizz"
      img={"/img/retexes/serizz/serizz.webp"}
    ></RetexBanner>
    <RetexBanner
      title="Application Python"
      description="Portage d'un jeu de plateau en Python"
      link="/retex/pandemic"
      img={"/img/retexes/serizz/serizz.webp"}
    ></RetexBanner>
    <RetexBanner
      title="Application C#"
      description="Portage d'un jeu de plateau en C#"
      link="/retex/csharp"
      img={"/img/retexes/serizz/serizz.webp"}
    ></RetexBanner>
  </div>
</div>

<Title text="Contact et liens"></Title>

<div id="contact" class="flex m-5 justify-center items-center gap-10">
  <a href="https://www.linkedin.com/in/matis-olives-4b845629a/" aria-label="Lien vers mon LinkedIn" class="w-10"><i class="nf nf-dev-linkedin text-4xl inline-block"></i></a>
  <a href="mailto:matisolives@gmail.com" aria-label="M'envoyer un mail" class="w-10"><i class="nf nf-cod-mail text-4xl inline-block"></i></a>
</div>

