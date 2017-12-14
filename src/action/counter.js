export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SAGA_INCREMENT = 'SAGA_INCREMENT';

export function incrementCount(number) {
  return {
    type: INCREMENT,
    index: number
  }
}
export function decrementCount(number) {
  return {
    type: DECREMENT,
    index: number
  }
}
export function saga_incrementCount(number) {
  return {
    type: SAGA_INCREMENT,
    index: number
  }
}