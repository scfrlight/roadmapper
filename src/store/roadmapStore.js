import { create } from 'zustand';

export const useRoadmapStore = create((set) => ({
  roadmaps: [],
  loading: false,
  addRoadmap: (roadmap) => set((state) => ({ roadmaps: [...state.roadmaps, roadmap] })),
  setRoadmaps: (roadmaps) => set({ roadmaps }),
  setLoading: (loading) => set({ loading }),
}));
