import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LinkButton from '../LinkButton.vue'

describe('LinkButton.vue', () => {
  const mockLink = {
    id: 'github',
    title: 'GitHub',
    url: 'https://github.com/user',
    icon: 'Github',
  }

  it('renders link with correct href', () => {
    const wrapper = mount(LinkButton, {
      props: { link: mockLink },
    })
    expect(wrapper.find('a').attributes('href')).toBe('https://github.com/user')
  })

  it('renders link title correctly', () => {
    const wrapper = mount(LinkButton, {
      props: { link: mockLink },
    })
    expect(wrapper.find('.title').text()).toBe('GitHub')
  })

  it('has correct target and rel attributes', () => {
    const wrapper = mount(LinkButton, {
      props: { link: mockLink },
    })
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
