<template>
  <section class="mb-loader">
    <div class="mb-loader__chevron">
      <chevron-loader-icon />
    </div>
  </section>
</template>

<script>
import ChevronLoaderIcon from '@/components/icons/ChevronLoaderIcon'
export default {
  name: 'MbLoader',
  components: {
    ChevronLoaderIcon,
  },
}
</script>
