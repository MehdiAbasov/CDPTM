import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
import Programs from "../pages/Programs";
import Events from "../pages/Events";
// import Teachers from "../pages/Teachers";
import Vacancies from "../pages/Vacancies";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                {/* ADMIN */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/events" element={<Events />} />
                    {/* <Route path="/teachers" element={<Teachers />} /> */}
                    <Route path="/vacancies" element={<Vacancies />} />
                </Route>

                {/* Default redirect */}
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />

            </Routes>

        </BrowserRouter>

    );

}
