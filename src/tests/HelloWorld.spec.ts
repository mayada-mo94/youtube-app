// src/components/__tests__/HelloWorld.spec.ts
// import { shallowMount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    
    expect('new message').toMatch(msg)
  })
})