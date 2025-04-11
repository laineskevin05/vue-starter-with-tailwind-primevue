import type { UserModule } from '~/types'
import { definePreset } from '@primeuix/themes'
import Nora from '@primeuix/themes/nora'
// import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const stylePreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },

  },

})

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue, {
    theme: {
      preset: stylePreset,
      options: {
        prefix: 'p',
        darkModeSelector: 'ssystem',
        cssLayer: false,

      },
    },
  })
}
