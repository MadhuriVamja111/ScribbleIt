﻿<script setup lang="ts">
import GenerateDefault from '@src/components/Avtars/GenerateDefault.vue';
import GenerateByName from '@src/components/Avtars/GenerateByName.vue';
import ShowAvatarIcon from '@src/components/Avtars/ShowAvatarIcon.vue';
import { computed } from 'vue';
interface Props {
  user: any;
}
const props = defineProps<Props>();
const userData = computed(() => {
  return props.user;
});
</script>
<template>
  <div class="image">
    <generate-by-name
      v-if="userData.avatar?.type === 'name'"
      :name="userData.name"
    />
    <show-avatar-icon
      v-else-if="userData.avatar?.type === 'custom'"
      :data="userData.avatar?.data"
    />
    <generate-default
      v-else
      :user="userData"
      :is-icon="true"
    />
  </div>
</template>