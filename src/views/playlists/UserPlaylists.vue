<template>
  <div class="user-playlists">
      <h2>My Playlists</h2>
      <div v-if="playlists">
          <ListView :playlists="playlists" />
      </div>
      <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a new Playlist</router-link>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'

export default {
    components: { ListView },
    setup() {
        const { user } = getUser();
        const { documents: playlists } = getCollection(
            'playlists', 
            ['userId', '==', user.value.uid]
        );

        return { playlists };
    }
}
</script>

<style>

</style>