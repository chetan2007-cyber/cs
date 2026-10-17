import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { Work } from '../pages/Work';
import { CaseStudyDetail } from '../pages/CaseStudyDetail';
import { Process } from '../pages/Process';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedPageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Main Routes */}
        <Route
          path="/"
          element={
            <AnimatedPageWrapper>
              <Home />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPageWrapper>
              <Services />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/work"
          element={
            <AnimatedPageWrapper>
              <Work />
            </AnimatedPageWrapper>
          }
        />

        {/* Specific Case Study Direct Routes */}
        <Route
          path="/work/kami"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail overrideSlug="kami" />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/work/nova"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail overrideSlug="nova" />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/work/flow"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail overrideSlug="flow" />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/work/orbit"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail overrideSlug="orbit" />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/work/vertex"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail overrideSlug="vertex" />
            </AnimatedPageWrapper>
          }
        />

        {/* Dynamic slug route fallback for /work/:slug */}
        <Route
          path="/work/:slug"
          element={
            <AnimatedPageWrapper>
              <CaseStudyDetail />
            </AnimatedPageWrapper>
          }
        />

        {/* Process, About, Contact */}
        <Route
          path="/process"
          element={
            <AnimatedPageWrapper>
              <Process />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPageWrapper>
              <About />
            </AnimatedPageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPageWrapper>
              <Contact />
            </AnimatedPageWrapper>
          }
        />

        {/* 404 Catch-All Route */}
        <Route
          path="*"
          element={
            <AnimatedPageWrapper>
              <NotFound />
            </AnimatedPageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
