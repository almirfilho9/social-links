import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialIcon from '../SocialIcon.vue'

describe('SocialIcon.vue', () => {
  const mockSocial = {
    id: 'github',
    url: 'https://github.com/user',
    icon: 'Github',
  }

  it('renders link with correct href', () => {
    const wrapper = mount(SocialIcon, {
      props: { social: mockSocial },
    })
    expect(wrapper.find('a').attributes('href')).toBe('https://github.com/user')
  })

  it('has correct aria-label', () => {
    const wrapper = mount(SocialIcon, {
      props: { social: mockSocial },
    })
    expect(wrapper.find('a').attributes('aria-label')).toBe('github')
  })

  it('has correct target and rel attributes', () => {
    const wrapper = mount(SocialIcon, {
      props: { social: mockSocial },
    })
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
