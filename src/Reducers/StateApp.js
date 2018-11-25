
var StateApp = (state = {name : ''}, action) => {
    switch (action.type) {
        case 'ADD_INFO_APP':
            if (state === null)
                state = {};
            return [...state, action.item];
        default:
            return state;

    }

}

module.exports = StateApp;