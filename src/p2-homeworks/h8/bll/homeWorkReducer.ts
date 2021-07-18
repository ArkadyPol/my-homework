import {UserType} from '../HW8';

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': {
      switch (action.payload) {
        case 'up':
          return [...state].sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1)
        case 'down':
          return [...state].sort((a, b) => a.name > b.name ? -1 : a.name === b.name ? 0 : 1)
        default:
          return state
      }
    }
    case 'check': {
      // need to fix
      return state.filter(u => u.age >= action.payload)
    }
    default:
      return state
  }
}