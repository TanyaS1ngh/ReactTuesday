export function products(defStore=[],action){
    switch(action.type){
        case 'ADD_NEW_PRODUCT': console.log('Within Products Reducer'+action.type);
        return defStore;//return a new store
                case 'REMOVE_PRODUCT': 
                let newStore = defStore.filter(val => val.id!== action.id)
                console.log('Within products reducer about to remove..'+action.id);
        return newStore;
        default: return defStore;
    }
}