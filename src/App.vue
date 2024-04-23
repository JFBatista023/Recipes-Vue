<script lang="ts">
import Banner from './components/Banner.vue';
import Baseboard from './components/Baseboard.vue';
import PrincipalContent from './components/PrincipalContent.vue';

export default {
  components: { Banner, PrincipalContent, Baseboard }
}
</script>

<template>
  <Banner />
  <PrincipalContent />
  <Baseboard />
</template>