<template>
  <div class="home">
    <div v-if="error" class="error">Coluld not fetch the data</div>
    <div v-if="documents">
      <ListView :playlists="documents"></ListView>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('playlists');

    return { error, documents }
  }
}
</script>
