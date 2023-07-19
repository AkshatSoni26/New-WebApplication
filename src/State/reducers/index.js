import { combineReducers } from "redux";
import Access from './AccessKeyReducer'
import Content from './ContentReducer'
import Learn from './LearnDataReducer'
import VideoId from './VideoId'

const reducers = combineReducers(
    {
        access : Access,
        content: Content,
        learn : Learn,
        re_video_id: VideoId
    }
)

export default reducers