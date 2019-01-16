<template>
    <div class="white elecation-2">
        <v-toolbar flat dense class="indigo" dark>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <slot name="action" />
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No slot content defined.
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'title'
    ]
}
</script>
<style scoped>

</style>
