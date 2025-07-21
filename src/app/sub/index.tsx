import { useParams } from "react-router";

export function SubPage() {
    const {id} = useParams();

    return <main>
        <h2>Strona {id}</h2>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed fuga hic velit facilis commodi ab odit in architecto accusamus, ad iure similique consequuntur labore aperiam, sit illo repudiandae. Voluptas?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed fuga hic velit facilis commodi ab odit in architecto accusamus, ad iure similique consequuntur labore aperiam, sit illo repudiandae. Voluptas?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed fuga hic velit facilis commodi ab odit in architecto accusamus, ad iure similique consequuntur labore aperiam, sit illo repudiandae. Voluptas?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed fuga hic velit facilis commodi ab odit in architecto accusamus, ad iure similique consequuntur labore aperiam, sit illo repudiandae. Voluptas?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed fuga hic velit facilis commodi ab odit in architecto accusamus, ad iure similique consequuntur labore aperiam, sit illo repudiandae. Voluptas?</p>
    </main>
}
