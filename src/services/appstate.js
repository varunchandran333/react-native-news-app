import {selectQuery,insertQuery} from './db_manager'
const state_id = 'APP_RUN_STATE'

export function changeAppState(){
  return insertQuery(state_id,true)
}

export function getAppState(){
    return selectQuery(state_id).then((state)=>{
        return (state && state.data ) ? true : false 
    })
}