<template>
  <a
    :href="social.url"
    target="_blank"
    rel="noopener noreferrer"
    class="social-icon"
    :aria-label="social.id"
  >
    <component :is="iconComponent" class="icon" />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { Link, Twitter, Linkedin, Instagram, Github } from 'lucide-vue-next'

const props = defineProps({
  social: {
    type: Object,
    required: true,
  },
})

const iconMap = { Link, Twitter, Linkedin, Instagram, Github }

const iconComponent = computed(() => {
  return iconMap[props.social.icon] || Link
})
</script>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: var(--text-main);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-icon:hover {
  background: var(--primary-color);
  color: #ffffff;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.4);
  border-color: transparent;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
