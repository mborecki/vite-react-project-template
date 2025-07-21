import { Link } from "react-aria-components";
import { getSubpageRoute } from "./routes";

export function Home() {
    return <main>
        <h2>Home</h2>

        <nav>
            <Link href={getSubpageRoute('1')}>Strona 1</Link>
        </nav>
    </main>
}
