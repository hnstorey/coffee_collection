import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        coffeename: 'coffee name',
        country: 'country',
        varietal: 'varietal',
        roaster: 'roaster',
        state: 'state',
        flavor_notes: 'flavor notes',
    },
    reducers: {
        chooseCoffeename: (state, action) => {state.coffeename = action.payload},
        chooseCountry: (state, action) => {state.country = action.payload},
        chooseVarietal: (state, action) => {state.varietal = action.payload},
        chooseRoaster: (state, action) => {state.roaster = action.payload},
        chooseState: (state, action) => {state.state = action.payload },
        chooseFlavornotes: (state, action) => {state.flavor_notes = action.payload},
    }
})

export const reducer = rootSlice.reducer
export const { chooseCoffeename, chooseCountry, chooseVarietal, 
    chooseRoaster, chooseState, chooseFlavornotes } = rootSlice.actions