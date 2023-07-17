import { combineReducers } from "redux";
import Access from './AccessKeyReducer'
import Content from './ContentReducer'
import Learn from './LearnDataReducer'

const reducers = combineReducers(
    {
        access : Access,
        content: Content,
        learn : Learn
    }
)

export default reducers