<template>
    <v-container fluid grid-list-xl>
        <v-layout row>
            <v-flex xs6>
                <panel title="View Song Details">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{ song.title}}
                            </div>
                            <div class="song-artist">
                                {{ song.artist}}
                            </div>
                            <div class="song-genre">
                                {{ song.genre}}
                            </div>

                            <v-btn 
                                color="indigo" 
                                dark
                                @click="navigateTo({
                                    name: 'songs-edit',
                                    params: {
                                        songId: song.id
                                    }
                                })"
                                >Edit</v-btn>
                            <v-btn color="indigo" dark
                                @click="delteSong(song.id)">Delete</v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <img class="al-img" :src="song.albumImage" />
                            <br />
                            {{ song.album }}
                        </v-flex>
                    </v-layout>
                </panel>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <panel title="lyrics">
                    {{ song.lyrics }}
                </panel>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12 class="ml-2">
                <panel title="Youtube Video">
                    <div class="you-youtube">
                        <youtube :video-id="song.youtubeId" ref="youtube" @playing="playing"></youtube>
                    </div>
                </panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
    data () {
        return {
            song: null,
            playing: false
        }
    },
    async mounted() {
        const songId = this.$route.params.songId
        this.song = ( await SongsService.ShowSong(songId)).data
    },
    components: {
        Panel
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async delteSong(songId) {
            await SongsService.DeleteSong(songId)
            this.$router.push('/songs')
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
    .you-youtube {
        text-align: center;
    }
</style>
