
import { create } from 'zustand'


export const expand1Store =  create((set) => ( {
    expand1: true,
    expand2: false,
    expand3: false,
    toggleExpand1: () => set( state => ({expand1: !state.expand1})),
    toggleExpand2: () => set(state => ({expand2: !state.expand2})),
    toggleExpand3: () => set(state => ({expand3: !state.expand3})),
}))

export const useExpandStore = create((set) => ({
    expand: false,
    toggleExpand: () => set(state => ({expand: !state.expand})),
}))

export const useAmountStore = create((set) => ({
    amount: 0,
    addAmount: (amount2) => set(state => ({amount: state.amount = amount2 })),
}))