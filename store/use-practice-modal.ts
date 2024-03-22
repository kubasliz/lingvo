import { create } from 'zustand';

interface usePracticeModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const usePracticeModal = create<usePracticeModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}));
