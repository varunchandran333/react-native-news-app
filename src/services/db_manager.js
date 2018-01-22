import { AsyncStorage } from 'react-native';

export const insertQuery = (id,data)=>{
    let QueryData = JSON.stringify({createdAt:Date.now(),data})
   return AsyncStorage.setItem(id,QueryData).catch(error=>{
        throw new Error(error.toString())
    })
}

export function selectQuery (id){
    return AsyncStorage.getItem(id).then((results)=>{
        return JSON.parse(results)
    },(error)=>{
        throw error
    })
}