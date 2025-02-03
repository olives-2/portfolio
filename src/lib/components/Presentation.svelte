<script>
    import { base } from "$app/paths";
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
