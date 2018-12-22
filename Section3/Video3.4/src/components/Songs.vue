<template>
    <v-layout column>
        <v-flex xs8>
            <panel title="Search for Songs">
                <v-text-field label="Song Name"></v-text-field>
            </panel>
            <panel title="Songs">
                <v-btn route to="/create" slot="action" class="indigo accent-2" light medium absolute right middle fab>
                    <v-icon>add</v-icon>
                </v-btn>
                <div v-for="song in songs" :key="song.title">
                    {{ song.title }}
                    {{ song.artist }}
                    {{ song.album }}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
export default {
    components:{
        Panel
    },
    data(){
        return{
            songs:[
                {
                    'title': 'Song 1',
                    'artist': 'Artist 1',
                    'album': 'Album 1'
                },
                {
                    'title': 'Song 2',
                    'artist': 'Artist 2',
                    'album': 'Album 2'
                },
                {
                    'title': 'Song 3',
                    'artist': 'Artist 3',
                    'album': 'Album 3'
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>
