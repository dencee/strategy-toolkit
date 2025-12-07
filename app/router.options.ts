// app/router.options.ts
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      // If there's a hash, scroll to the element with that ID
      return { el: to.hash, behavior: 'smooth', top: 5 * 16 }
    }
    // Otherwise, scroll to the top of the page
    return { top: 0, behavior: 'smooth' }
  },
}