<template>
  <div>
    <CNav />
    <nuxt />

    <footer>
      <CContributors />
    </footer>
  </div>
</template>

<script>
import CNav from '../components/CNav'
import CContributors from '../components/CContributors'

export default {
  name: 'DefaultLayout',
  components: { CNav, CContributors }
}
</script>

<style lang="scss">
@import '../assets/normalize.scss';
@import '../assets/general.scss';
</style>
