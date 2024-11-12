import React from 'react'

export const DEMO_COMPONENTS = {
  component: {
    button: {
      component: React.lazy(
        () => import('@/registry/demo/components/button-demo'),
      ),
    },
    ruler: {
      component: React.lazy(
        () => import('@/registry/demo/components/ruler-demo'),
      ),
    },
  },
  hook: {
    'use-clipboard': {
      component: React.lazy(
        () => import('@/registry/demo/hooks/use-clipboard'),
      ),
    },
  },
}
