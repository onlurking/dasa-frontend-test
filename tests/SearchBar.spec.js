import { mount } from '@vue/test-utils'
import Search from '@/components/SearchBar'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Search)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
