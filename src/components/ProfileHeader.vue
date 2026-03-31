<template>
  <div class="profile-header">
    <div class="avatar-container">
      <img :src="profile.avatarUrl" :alt="profile.name" class="avatar" />
      <div class="avatar-glow"></div>
    </div>
    <h1 class="name">{{ profile.name }}</h1>
    <h2 class="title">{{ profile.title }}</h2>
    <p class="bio">{{ profile.bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
}

.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background-clip: padding-box;
  position: relative;
  z-index: 2;
  box-shadow: var(--shadow-md);
}

.avatar-glow {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(45deg, var(--primary-color), #ec4899);
  border-radius: 50%;
  z-index: 1;
  filter: blur(10px);
  opacity: 0.6;
  animation: pulse 3s infinite alternate;
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: -0.025em;
}

.title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.bio {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 480px;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
</style>
