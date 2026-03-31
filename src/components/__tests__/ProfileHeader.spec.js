import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileHeader from '../ProfileHeader.vue'

describe('ProfileHeader.vue', () => {
  const mockProfile = {
    name: 'José Almir',
    avatarUrl: 'https://example.com/avatar.jpg',
    title: 'Creative Developer',
    bio: 'Building beautiful web experiences.',
  }

  it('renders profile name correctly', () => {
    const wrapper = mount(ProfileHeader, {
      props: { profile: mockProfile },
    })
    expect(wrapper.find('.name').text()).toBe('José Almir')
  })

  it('renders profile title correctly', () => {
    const wrapper = mount(ProfileHeader, {
      props: { profile: mockProfile },
    })
    expect(wrapper.find('.title').text()).toBe('Creative Developer')
  })

  it('renders profile bio correctly', () => {
    const wrapper = mount(ProfileHeader, {
      props: { profile: mockProfile },
    })
    expect(wrapper.find('.bio').text()).toBe('Building beautiful web experiences.')
  })

  it('renders avatar with correct src and alt', () => {
    const wrapper = mount(ProfileHeader, {
      props: { profile: mockProfile },
    })
    const avatar = wrapper.find('.avatar')
    expect(avatar.attributes('src')).toBe('https://example.com/avatar.jpg')
    expect(avatar.attributes('alt')).toBe('José Almir')
  })
})
