export const LocalStorageSet =(name , value)=>{
    const Set = localStorage.setItem(name , value) 
    return [Set && Set]
}

export const LocalStorageGet =(value)=>{
    const get = localStorage.getItem(value);
    return [get && get]
}

export const LocalStorageRemove =(value)=>{
    localStorage.removeItem(value);
}


export const LocalStorageAll =()=>{
    const Set = (name , value) =>{
        const set =localStorage.setItem(name , value)
        return set && set
    } 

    const Get = (name) =>{
        const get = localStorage.getItem(name);
        return get && get
    }

    const Remove = (name) =>{
        const remove = localStorage.removeItem(name);
        return remove && remove
    }
return [Set, Get , Remove ]

}