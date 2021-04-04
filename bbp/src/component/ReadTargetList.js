import ReadTargetEntry from './ReadTargetEntry'

function ReadTargetList ({target}) {
    return target.map((el) => {
        return <ReadTargetEntry key = {el.id} id = {el.id} color = {el.color} activities = {el.activities}/>
    })
}

export default ReadTargetList;