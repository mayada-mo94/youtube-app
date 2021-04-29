// @ts-ignore 
import App from './../../src/App.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.name).toBe('string')
  })
})


describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  })
})
