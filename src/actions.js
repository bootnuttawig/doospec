export const addCar = (selectedCar) => ({
    type: 'ADD_CAR',
    selectedCar
})

export const removeCar = (selectedCar) => ({
    type: 'REMOVE_CAR',
    selectedCar
})

export const decrement = (score = -1) => ({
    type: 'DECREMENT',
    score
})

export const increment = (score = 1) => ({
    type: 'INCREMENT',
    score
})