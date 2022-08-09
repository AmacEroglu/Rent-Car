const carReducer=(newState = initialState, action) => {
    switch(action.type){
        case 'kiralık':
        return (newState = initialState = action.payload);

        case 'parkta':
            return (newState=initialState = action.payload)
            default:
                return initialState;
    }
}

export default carReducer;