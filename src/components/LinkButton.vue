<template>
  <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-button glass-panel">
    <div class="icon-wrapper">
      <component :is="iconComponent" v-if="iconComponent" class="icon" />
    </div>
    <span class="title">{{ link.title }}</span>
    <div class="icon-wrapper chevron">
      <ChevronRight class="icon-small" />
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronRight, Globe } from 'lucide-vue-next'

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
})

const iconComponent = computed(() => {
  const iconMap = { Globe }
  if (!props.link.icon) return Globe
  return iconMap[props.link.icon] || Globe
})
</script>

<style scoped>
.link-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  text-decoration: none;
  background: var(--card-bg);
  border-radius: 12px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  animation: slideIn 0.5s ease forwards;
  animation-delay: calc(var(--stagger-index, 0) * 0.1s);
  opacity: 0;
}

.link-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.link-button:hover::before {
  transform: translateX(100%);
}

.link-button:hover {
  background: var(--hover-bg);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.icon {
  width: 20px;
  height: 20px;
  color: var(--text-main);
}

.icon-small {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.title {
  flex: 1;
  text-align: center;
  font-weight: 500;
  font-size: 1.05rem;
  letter-spacing: 0.01em;
  padding: 0 1rem;
}

.link-button:hover .chevron .icon-small {
  transform: translateX(4px);
  color: var(--text-main);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
