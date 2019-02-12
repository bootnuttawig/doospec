export default (state = [], action) => {

    let selectedCars = state
    let selectedCar = action.selectedCar

    switch (action.type) {
        case 'ADD_CAR':

            selectedCars = selectedCars.concat(selectedCar)

            return selectedCars

        case 'REMOVE_CAR':

            return selectedCars.filter((c) => { 
                return c.id !== selectedCar.id 
            })

        default:
            return state
    }
}