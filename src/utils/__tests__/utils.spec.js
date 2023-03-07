import { expect, test, describe } from 'vitest'
import { reverseArray } from '../index'


describe('reverseArray Tests:', () => {
  
  test('reverseArray should reverse elements in the array', () => {
    const arr = ['a', 'b', 'c']
    const reversedArr = reverseArray(arr)
    expect(reversedArr.length).toBe(3) // Making sure no elements are lost
    expect(reversedArr[0]).toBe('c')
    expect(reversedArr[1]).toBe('b')
    expect(reversedArr[2]).toBe('a')
  })
  
  test('reverseArray reverses the order of an array', () => {
    const arr = ['a', 'b']
    expect(reverseArray(arr)[0]).toBe('b')
    expect(reverseArray(arr)[1]).toBe('a')
  })
  
  test('reverseArray returns a new array', () => {
    const arr = ['a', 'b']
    const reversedArr = reverseArray(arr)
    expect(reversedArr).not.toBe(arr)
    expect(reversedArr).toEqual(['b', 'a'])
  })
  
  test('reverseArray should handle empty arrays', () => {
    const arr = []
    const reversedArr = reverseArray(arr)
    expect(reversedArr).toEqual([])
  })
  
  test('reverseArray should handle single-element arrays', () => {
     const arr = ['a']
     const reversedArr = reverseArray(arr)
     expect(reversedArr).toEqual(['a'])
  })
  
  test('reverseArray should handle arrays with duplicates', () => {
    const arr = ['a', 'b', 'c', 'd', 'c']
    const reversedArr = reverseArray(arr)
    expect(reversedArr).toEqual(['c', 'd', 'c', 'b', 'a'])
  })
})
