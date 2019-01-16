<template>
    <v-layout column>
        <v-flex xs8>
            <panel title="Songs">
                <v-btn route to="/songs/create" slot="action" class="indigo accent-2" light medium absolute right middle fab>
                    <v-icon>add</v-icon>
                </v-btn>
                <div class="song" v-for="song in songs" :key="song.id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{ song.title }}
                            </div>
                            <div class="song-artist">
                                {{ song.artist }}
                            </div>
                            <div class="song-genre">
                                {{ song.genre }}
                            </div>

                            <v-btn 
                                color="indigo" 
                                dark
                                @click="navigateTo({
                                    name : 'songs-view',
                                    params: {
                                        songId: song.id
                                    }
                                })"
                                >View</v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <img class="al-img" :src="song.albumImage" />
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import  SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
    components:{
        Panel
    },
    data(){
        return{
            songs: null
        }
    },
    async mounted(){
        //this.songs = (await SongsService.getAllSongs()).data
        this.$store.dispatch("getAllSongs").then(response => {
            console.log('Got some data')
        }, error => {
            console.log('Got nothing from server')
        })

        this.songs = this.$store.state.songs
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
    .song {
        padding: 20px;
        height: 400px;
        overflow: hidden;
        text-align: center;
    }
    .song-title {
        font-size: 30px;
    }
    .song-artist {
        font-size: 24px;
    }
    .song-genre {
        font-size: 18px;
    }
    .al-img {
        width: 70%;
        margin: 0 auto;
    }
</style>
