<template>
  <main class="app-container">
    <ProfileHeader v-if="data.profile" :profile="data.profile" />

    <div class="links-container" v-if="data.links && data.links.length > 0">
      <LinkButton
        v-for="(link, index) in data.links"
        :key="link.id"
        :link="link"
        :style="{ '--stagger-index': index }"
      />
    </div>

    <div class="socials-container" v-if="data.socials && data.socials.length > 0">
      <SocialIcon
        v-for="(social, index) in data.socials"
        :key="social.id"
        :social="social"
        :style="{ '--stagger-index': index }"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import profileData from './data/profile.json'
import ProfileHeader from './components/ProfileHeader.vue'
import LinkButton from './components/LinkButton.vue'
import SocialIcon from './components/SocialIcon.vue'
import { validateProfile } from './utils/validateProfile'

const data = ref({})

onMounted(() => {
  const { valid, errors } = validateProfile(profileData)

  if (!valid) {
    console.warn('Profile data validation warnings:', errors)
  }

  data.value = profileData

  if (data.value.theme && data.value.theme.colors) {
    const { primary, background, text, cardBg } = data.value.theme.colors
    const root = document.documentElement

    if (primary) root.style.setProperty('--primary-color', primary)
    if (text) root.style.setProperty('--text-main', text)
    if (cardBg) {
      root.style.setProperty('--card-bg', cardBg)
      root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.15)')
    }
    if (background) {
      root.style.setProperty('--bg-color-from', background)
      root.style.setProperty('--bg-color-to', background)
    }
  }
})
</script>

<style scoped>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.links-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.socials-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--card-border);
}
</style>
