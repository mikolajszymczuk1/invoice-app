<template>
  <button
    class="btn py-0 h-[48px] min-h-[auto] gap-x-[8px] rounded-full
      hover:opacity-70 border-none normal-case font-spartan text-[.75rem]
      md:py-[8px] md:gap-x-[16px]"
    :class="[
      withIcon ? 'pl-[6px] pr-[14px] md:pl-[8px] md:pr-[15px]' : 'px-[24px]',
      btnColors,
    ]"
    @click="emitClickAction()"
  >
    <PlusCircleIcon v-if="withIcon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';

const props = defineProps({
  withIcon: {
    type: Boolean,
    default: false,
  },
  btnColor: {
    type: String,
    default: 'purple',
    validator(value: string) {
      return ['light', 'red', 'purple'].includes(value);
    }
  }
});

const emit = defineEmits<{
  /** Emit click action that can be handled */
  (e: 'clickAction'): void
}>();


/** Returns buttons colors classes based on `btnColor` prop */
const btnColors = computed<string>(() => {
  const lightColors = 'bg-blue-itemsPrev hover:bg-blue-itemsPrev/60 text-blue-light';
  const redColors = 'bg-red-medium hover:bg-red-medium/60 text-trueWhite';
  const purpleColors = 'bg-purple-medium hover:bg-purple-medium text-trueWhite';

  switch (props.btnColor) {
    case 'light': return lightColors;
    case 'red': return redColors;
    case 'purple': return purpleColors;
    default: return purpleColors;
  }
});

/** Emit click action */
const emitClickAction = () => emit('clickAction');
</script>
