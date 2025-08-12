import { Link } from "react-aria-components";
import { getTodoListPage } from "./routes";

export function Home() {
    return <main>
        <h2>Home</h2>

        <nav>
            <Link href={getTodoListPage()}>Todo lista</Link>
        </nav>
    </main>
}
