import { combineReducers } from "redux";
import Access from './AccessKeyReducer'
import Content from './ContentReducer'
import Learn from './LearnDataReducer'
import VideoId from './VideoId'
import LinkTrail from './LinkTrail'

const reducers = combineReducers(
    {
        access : Access,
        content: Content,
        learn : Learn,
        re_video_id: VideoId,
        link : LinkTrail
    }
)

export default reducers