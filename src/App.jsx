import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./assets/css/style.scss";
import ServicePage from "./pages/ServicesPage";
import ProjectPage from "./pages/Projects";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Login from "./components/backend/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/backend/Dashboard";
import RequireAuth from "./components/common/RequireAuth";
import { default as ShowServices } from "./components/backend/services/Show";
import { default as CreateService } from "./components/backend/services/create";
import { default as EditService } from "./components/backend/services/Edit";
import { default as ShowProjects } from "./components/backend/projects/Show";
import { default as CreateProject } from "./components/backend/projects/Create";
import { default as EditProject } from "./components/backend/projects/Edit";
import { default as ShowArticles } from "./components/backend/articles/show";
import { default as CreateArticles } from "./components/backend/articles/create";
import { default as EditArticles } from "./components/backend/articles/Edit";
import { default as ShowTestimonials } from "./components/backend/testimonials/Show";
import { default as CreateTestimonials } from "./components/backend/testimonials/create";
import { default as EditTestimonials } from "./components/backend/testimonials/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateService />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <EditService />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ShowProjects />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/create"
            element={
              <RequireAuth>
                <CreateProject />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequireAuth>
                <EditProject />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <RequireAuth>
                <ShowArticles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <RequireAuth>
                <CreateArticles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <RequireAuth>
                <EditArticles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials"
            element={
              <RequireAuth>
                <ShowTestimonials />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials/create"
            element={
              <RequireAuth>
                <CreateTestimonials />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials/edit/:id"
            element={
              <RequireAuth>
                <EditTestimonials />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
