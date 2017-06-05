<template>
<div>
<a-player :music="songs" ref="player"></a-player>
</div>
</template>

<script>
import VueAplayer from 'vue-aplayer'

export default {
    components: {
        'a-player': VueAplayer
    },
    data () {
        return {
            songs: [{
                title: 'Preparation',
                author: 'Hans Zimmer/Richard Harvey',
                url: 'http://devtest.qiniudn.com/Preparation.mp3',
                pic: 'http://devtest.qiniudn.com/Preparation.jpg',
                lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
            }]
        }
    },
    mounted () {
        let aplayer = this.$refs.player.control
        aplayer.play()
    }
}
</script>

<style scoped>
</style>
