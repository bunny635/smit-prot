import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import IntroPage from './pages/IntroPage';
import WorldHubPage from './pages/WorldHubPage';
import OriginTower from './pages/OriginTower';
import ProjectArena from './pages/ProjectArena';
import SkillMountain from './pages/SkillMountain';
import QuestJournal from './pages/QuestJournal';
import ForbiddenLab from './pages/ForbiddenLab';
import MemoryValley from './pages/MemoryValley';
import EducationConstellation from './pages/EducationConstellation';
import AchievementGallery from './pages/AchievementGallery';
import RoutePlaceholder from './pages/RoutePlaceholder';
import { usePlayer } from './context/PlayerContext';

/**
 * RouteTracker — Synchronizes current route with PlayerContext visitedPages
 */
function RouteTracker() {
  const location = useLocation();
  const { visitPage } = usePlayer();

  useEffect(() => {
    visitPage(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export function App() {
  return (
    <AppLayout>
      <RouteTracker />
      <Routes>
        {/* Intro Odyssey Screen */}
        <Route path="/" element={<IntroPage />} />

        {/* World Sectors & Archives */}
        <Route path="/hub" element={<WorldHubPage />} />
        <Route path="/origin" element={<OriginTower />} />
        <Route path="/quests" element={<ProjectArena />} />
        <Route path="/quests/:id" element={<RoutePlaceholder />} />
        <Route path="/journal" element={<QuestJournal />} />
        <Route path="/skills" element={<SkillMountain />} />
        <Route path="/lab" element={<ForbiddenLab />} />
        <Route path="/memory" element={<MemoryValley />} />
        <Route path="/education" element={<EducationConstellation />} />
        <Route path="/achievements" element={<AchievementGallery />} />
        <Route path="/console" element={<RoutePlaceholder />} />
        <Route path="/void" element={<RoutePlaceholder />} />
        <Route path="/portal" element={<RoutePlaceholder />} />

        {/* Fallback */}
        <Route path="*" element={<RoutePlaceholder />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
