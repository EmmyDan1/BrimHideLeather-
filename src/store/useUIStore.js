import { create } from 'zustand';

export const useUIStore = create((set) => ({
  // Mobile navigation state
  mobileNavOpen: false,
  openMobileNav: () => set({ mobileNavOpen: true }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  toggleMobileNav: () => set(state => ({ mobileNavOpen: !state.mobileNavOpen })),
  
  // Toast notification state
  toast: {
    message: '',
    type: 'success', // 'success', 'error', 'info'
    visible: false,
  },
  
  // Show a toast notification
  showToast: (message, type = 'success') => {
    set({ toast: { message, type, visible: true } });
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      set(state => {
        if (state.toast.message === message) {
          return { toast: { ...state.toast, visible: false } };
        }
        return state;
      });
    }, 3000);
  },
  
  // Hide the toast notification
  hideToast: () => set(state => ({ toast: { ...state.toast, visible: false } })),
  
  // Header transparency state (for home page)
  headerTransparent: true,
  setHeaderTransparent: (transparent) => set({ headerTransparent: transparent }),
}));