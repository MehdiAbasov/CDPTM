import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"

import Academic from "../pages/Academic"

import Career from "../pages/Career"
import Contact from "../pages/Contact"

import News from "../pages/news/News"
import NewsDetail from "../pages/news/NewsDetail"
import Campus from "../pages/Campus"

import Events from "../pages/events/Events"
import EventDetail from "../pages/events/EventDetail"
// import Programs from "../pages/programs/Programs"
// import ProgramDetail from "../pages/programs/ProgramDetail"
// import Vacancy from "../pages/vacancy/Vacancy"
// import VacancyDetail from "../pages/vacancy/VacancyDetail"


export default function AppRouter() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/campus" element={<Campus />} />

            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />

            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetail />} />

            {/* <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />

            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/vacancy/:slug" element={<VacancyDetail />} /> */}
        </Routes>

    )

}