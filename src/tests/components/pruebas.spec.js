import { shallowMount } from '@vue/test-utils'
import contador from '@/components/Contador.vue'
import { describe, expect, test } from 'vitest'
import App from '@/App.vue'
import Child from '@/components/Child.vue'

describe('Componente Contador.vue', () => {
  test('Validación valor inicial cero, con el snapshot', () => {
    const wrapper = shallowMount(contador)
    expect(wrapper.html()).toMatchSnapshot(0)
  })
})

describe('Componente Contador.vue', () => {
  test('Incrementar en 1 el valor del contador', async () => {
    const wrapper = shallowMount(contador)
    const botonIncrementar = wrapper.find('button')
    botonIncrementar.trigger('click')
    const valor = wrapper.find('.incrementar').text()
    expect(valor).toBe('Incrementar')
  })
})

describe('Componente Contador.vue', () => {
  test('Disminuir en 1 el valor del contador', async () => {
    const wrapper = shallowMount(contador)
    const botonDisminuir = wrapper.find('button')
    botonDisminuir.trigger('click')
    const valor = wrapper.find('.disminuir').text()
    expect(valor).toBe('Disminuir')
  })
})

describe('Validar vistas', () => {
  test('Validar vista home', async () => {
    const wrapper = shallowMount(App)
    const botonRuta = wrapper.find('.home')
    botonRuta.trigger('click')
    const valor = wrapper.find('.home').text()
    expect(valor).toBe('')
  })
})

describe('Validar vistas', () => {
  test('Validar vista about', async () => {
    const wrapper = shallowMount(App)
    const botonRuta = wrapper.find('.about')
    botonRuta.trigger('click')
    const valor = wrapper.find('.about').text()
    expect(valor).toBe('')
  })
})

describe('Validar mensaje de hijo al padre', () => {
  test('Validar mensaje', () => {
    const wrapper = shallowMount(Child)
    const valor = wrapper.find('button').text()
    expect(valor).toBe('texto')
  })
})
