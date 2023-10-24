import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Playground } from "./pages/playground";
import { NotFound } from "./pages/not-found";
import { About } from "./pages/about";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Playground />} />
                <Route path="what-the-fuck" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}