import React from 'react'

export const DEMO_COMPONENTS = {
  component: {
    button: {
      component: React.lazy(
        () => import('@/registry/demo/components/button-demo'),
      ),
      description: 'Button component',
    },
  },
  hook: {
    'use-clipboard': {
      component: React.lazy(
        () => import('@/registry/demo/hooks/use-clipboard'),
      ),
      description: 'useClipboard hook',
    },
  },
}
