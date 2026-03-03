import authRoutes
    from "./authRoutes.js";

import newsRoutes
    from "./newsRoutes.js";

import eventRoutes
    from "./eventRoutes.js";

import programRoutes
    from "./programRoutes.js";

import teacherRoutes
    from "./teacherRoutes.js";

import vacancyRoutes
    from "./vacancyRoutes.js";

import galleryRoutes
    from "./galleryRoutes.js";

import settingsRoutes
    from "./settingsRoutes.js";

import contactRoutes
    from "./contactRoutes.js";

import contentRoutes from "../routes/contentRoutes.js";

const registerRoutes = (app) => {

    app.use("/api/auth", authRoutes);
    app.use("/api/news", newsRoutes);
    app.use("/api/events", eventRoutes);
    app.use("/api/programs", programRoutes);
    app.use("/api/teachers", teacherRoutes);
    app.use("/api/vacancies", vacancyRoutes);
    app.use("/api/gallery", galleryRoutes);
    app.use("/api/settings", settingsRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/content", contactRoutes);

};

export default registerRoutes;