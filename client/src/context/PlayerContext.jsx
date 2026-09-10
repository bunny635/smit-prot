import React, { createContext, useContext, useState, useEffect } from 'react';

const PlayerContext = createContext(null);

export const INITIAL_PLAYER_STATE = {
  level: 5,
  currentXP: 2450,
  maxXP: 3000,
  title: "FULL STACK DEVELOPER",
  name: "ARCHIVIST_01",
  visitedPages: [],
  unlockedAchievements: [],
  isVoidUnlocked: false,
  equippedArtifacts: ['crys-react'],
};

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState(INITIAL_PLAYER_STATE);

  const gainXP = (amount) => {
    setPlayer((prev) => {
      let newXP = prev.currentXP + amount;
      let newLevel = prev.level;
      let newMaxXP = prev.maxXP;

      while (newXP >= newMaxXP) {
        newXP -= newMaxXP;
        newLevel += 1;
        newMaxXP = Math.round(newMaxXP * 1.25);
      }

      return {
        ...prev,
        level: newLevel,
        currentXP: newXP,
        maxXP: newMaxXP,
      };
    });
  };

  const visitPage = (path) => {
    setPlayer((prev) => {
      if (prev.visitedPages.includes(path)) return prev;
      return {
        ...prev,
        visitedPages: [...prev.visitedPages, path],
      };
    });
  };

  const unlockAchievement = (id) => {
    setPlayer((prev) => {
      if (prev.unlockedAchievements.includes(id)) return prev;
      return {
        ...prev,
        unlockedAchievements: [...prev.unlockedAchievements, id],
      };
    });
  };

  const toggleVoid = () => {
    setPlayer((prev) => ({
      ...prev,
      isVoidUnlocked: !prev.isVoidUnlocked,
    }));
  };

  const toggleEquipArtifact = (id) => {
    setPlayer((prev) => {
      const current = prev.equippedArtifacts || [];
      const exists = current.includes(id);
      const updated = exists ? current.filter((item) => item !== id) : [...current, id];
      return {
        ...prev,
        equippedArtifacts: updated,
      };
    });
  };

  const value = {
    player,
    gainXP,
    visitPage,
    unlockAchievement,
    toggleVoid,
    toggleEquipArtifact,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
