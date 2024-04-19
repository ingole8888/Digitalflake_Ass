function loadData(key){
    try{
        let data=localStorage.getItem(key)
        //let sessionData= sessionStorage.getItem(key)
        return data
    }
    catch(error){
        return undefined

    }
}

function saveData(key,data){
    localStorage.setItem(key,data)
    sessionStorage.setItem(key,data)
}

export {loadData,saveData}