import { create } from "zustand";
import { getCartItems, saveCartItems } from "../lib/storage";

export const useCartStore = create((set, get) => ({
  // State
  items: getCartItems(),
  isOpen: false,

  // Computed values
  get itemCount() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  get subtotal() {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // Actions
  addItem: (product, quantity = 1, options = {}) => {
    set((state) => {
      const { items } = state;
      const { color, size } = options;

      // Check if item already exists with the same options
      const existingItemIndex = items.findIndex(
        (item) =>
          item.id === product.id && item.color === color && item.size === size
      );

      let newItems;

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        newItems = [...items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        newItems = [
          ...items,
          {
            ...product,
            quantity,
            color,
            size,
          },
        ];
      }

      // Save to localStorage
      saveCartItems(newItems);

      return { items: newItems };
    });
  },

  updateQuantity: (itemIndex, quantity) => {
    set((state) => {
      const newItems = [...state.items];

      if (quantity > 0) {
        newItems[itemIndex].quantity = quantity;
      } else {
        newItems.splice(itemIndex, 1);
      }

      // Save to localStorage
      saveCartItems(newItems);

      return { items: newItems };
    });
  },

  removeItem: (itemIndex) => {
    set((state) => {
      const newItems = [...state.items];
      newItems.splice(itemIndex, 1);

      // Save to localStorage
      saveCartItems(newItems);

      return { items: newItems };
    });
  },

  clearCart: () => {
    set({ items: [] });
    saveCartItems([]);
  },

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));
