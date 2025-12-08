// app/composables/useTheme.ts
export const useTheme = () => {
    const isDark = useState('theme', () => false)

    const applyTheme = (dark: boolean) => {
        if (import.meta.client) {
            const root = document.documentElement
            if (dark) {
                root.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                root.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
        }
    }

    const toggleDark = () => {
        isDark.value = !isDark.value
        applyTheme(isDark.value)
    }

    const initTheme = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem('theme')
            if (saved === 'dark') {
                isDark.value = true
            } else if (saved === 'light') {
                isDark.value = false
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDark.value = true
            }
            applyTheme(isDark.value)
        }
    }

    return {
        isDark,
        toggleDark,
        initTheme
    }
}
