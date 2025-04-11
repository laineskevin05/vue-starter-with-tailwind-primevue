<script setup lang="ts">
// import Button from 'primevue/button'

import Listbox from 'primevue/listbox'

import MultiSelect from 'primevue/multiselect'

defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
const selectedCity = ref()
// const cities = ref([
//   { name: 'New York', code: 'NY' },
//   { name: 'Rome', code: 'RM' },
//   { name: 'London', code: 'LDN' },
//   { name: 'Istanbul', code: 'IST' },
//   { name: 'Paris', code: 'PRS' },
// ])

const { t } = useI18n()
useHead({
  title: () => t('button.home'),
})

const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<template>
  <div>
    <div class="p-card p-flex p-justify-center">
      <MultiSelect
        v-model="selectedCities" :options="cities" option-label="name" filter placeholder="Select Cities"
        :max-selected-labels="3" class="p-w-full p-md:w-80"
      />
    </div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />
    <div>
      <div class="p-card p-flex p-justify-center">
        <Listbox v-model="selectedCity" :options="cities" option-label="name" w-full md:w-56 class="" />
      </div>
    </div>

    <!-- <TheInput v-model="name" :placeholder="t('intro.whats-your-name')" autocomplete="false" @keydown.enter="go" />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button m-3 text-sm btn :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
