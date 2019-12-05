import { combineReducers } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux"
import { pageReducer } from "./page"
import { userReducer } from "./user"

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
})