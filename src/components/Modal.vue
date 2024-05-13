<template>
  <div v-if="shown" class="wrapper">
    <div class="modal" ref="target">
      <div class="modal-header">
        <slot name="header"> Confirm your action </slot>
      </div>
      <div class="modal-body">
        <slot name="content"> </slot>
      </div>
      <div class="modal-footer">
        <slot name="controls">
          <button @click.stop="emit('modal-close')">Close</button>
          <button @click.stop="emit('submit'), emit('modal-close')">Submit</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/modal.css';
</style>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  shown: Boolean
})

const emit = defineEmits(['modal-close', 'submit'])
const target = ref(null)

onClickOutside(target, () => emit('modal-close'))
</script>
