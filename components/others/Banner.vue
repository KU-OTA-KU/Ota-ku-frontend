<template>
  <section>
    <v-container style="max-width: var(--ota-ku-max-width); padding: 0 10px 10px 10px; align-items: center;">
      <div :id="this.renderTo"></div>
    </v-container>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  name: "ota-ku-advertising-banner",

  props: {
    blockId: String,
    renderTo: String,
  },
  mounted() {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        "blockId": this.blockId,
        "renderTo": this.renderTo,
      })
    })
  },
})
</script>

<style scoped lang="sass">

</style>