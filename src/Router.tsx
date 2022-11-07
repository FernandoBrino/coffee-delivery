import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { SuccessfullyRequest } from "./pages/SuccessfullyRequest";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home/>}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/success' element={<SuccessfullyRequest />} />
            </Route>
        </Routes>
    )
}