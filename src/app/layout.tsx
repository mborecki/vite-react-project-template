import { Outlet } from "react-router";

export function MainLayout() {
    return <div>
        <header>
            <h1>vite-react-template</h1>
        </header>
        <Outlet />
    </div>
}
