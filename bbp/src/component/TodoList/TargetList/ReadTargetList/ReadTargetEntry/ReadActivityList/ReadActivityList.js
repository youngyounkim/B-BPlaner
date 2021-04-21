import React  from "react"
import { useSelector } from "react-redux"
import ReadActivityEntry from './ReadActivityEntry'

// 상위 컴포넌트인 ReadTargetEntry에서 해당하는 target의 id를 내려 받는 것으로 가정하였습니다.

function ReadActivityList({ id }){
    const activities = useSelector( state => state.targetReducer )
        .target.filter( target => target.id === id)[0].activities
    
    return activities.map( activity => 
            <ReadActivityEntry 
                    key = { activity.id } 
                    targetId = { id }
                    activityId = { activity.id } 
                    name = {activity.name}
            />
    )
}

export default ReadActivityList