<template>
  <dialog :id="popupId" class="modal">
    <div class="p-[32px] w-[88%] max-w-[480px] modal-box rounded-[8px] bg-trueWhite md:p-[48px]">
      <h3 class="mb-[8px] font-bold font-spartan text-[1.25rem] text-blue-dark md:mb-[13px] md:text-[1.5rem]">
        <slot name="popupTitle"></slot>
      </h3>

      <p class="font-spartan font-medium text-[.75rem] leading-[22px] text-gray-medium">
        <slot name="popupContent"></slot>
      </p>

      <div class="modal-action mt-[24px] md:mt-[16px]">
        <form method="dialog">
          <ActionButton btn-color="light">Cancel</ActionButton>

          <ActionButton
            :btn-color="actionButtonColor"
            @click-action="() => buttonFunction()"
          >
            {{ actionButtonText }}
          </ActionButton>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import ActionButton from '@/components/buttons/ActionButton.vue';

defineProps({
  popupId: {
    type: String,
    required: true,
  },
  actionButtonText: {
    type: String,
    default: 'Example',
  },
  buttonFunction: {
    type: Function,
    default: () => console.log('Popup action'),
  },
  actionButtonColor: {
    type: String,
    default: 'purple',
    validator(value: string) {
      return ['light', 'red', 'purple'].includes(value);
    }
  }
});
</script>
