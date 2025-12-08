import { ref } from 'vue'

export const useNav = () => {
  
  const activeSection = ref('#home');

  return {
    activeSection,
    navLinks: [
      { label: 'Home', to: '#home' },
      { label: 'Problem', to: '#problem' },
      { label: 'Resources', to: '#resources' },
      { label: 'Best Practices', to: '#best-practices' },
    ]
  }
}