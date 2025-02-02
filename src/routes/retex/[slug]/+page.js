import { base } from "$app/paths";
import { error } from "@sveltejs/kit";

export const load = async ({ fetch, params }) => {
    let mdSource = "";
    const res = await fetch(`${base}/retexes/${params.slug}/${params.slug}.md`);
        if (!res.ok) {
            error(404, {
                message: `Je n'ai pas encore participé au projet \"${params.slug}\"`
            });
        }
        mdSource = await res.text();
    return {
        slug: params.slug,
        mdSource: mdSource
    };
};
