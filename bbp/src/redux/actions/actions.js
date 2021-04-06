export const ADD_TARGET = "ADD_TARGET" ;


export const addTarget = (targetCnt, name, color, activitiesCnt=1, activities=[]) => {
    return {
        type: ADD_TARGET,
        payload: {
            id: `T${targetCnt}`, // target.id 형식은 T1, T2, T3, ...
            name: name,
            color: color,
            activitiesCnt: activitiesCnt,
            activities: activities
        }
    }
}




// 현재 자료 구조가 객체 => 배열 -> 객체 식이기 때문에  deepcopy를 위한 함수 입니다.
// 현재는 지금의 dummy data에만 해당됩니다.
const deepCopy = (arr) => {

    return  arr.target.reduce((acc, cur)=>{

        let new_act = cur.activities.reduce((acc,cur)=> {   
            return [...acc,Object.assign({},cur)]
        },[])

        return [...acc, Object.assign({}, cur, {activities: new_act})]
    },[])
}

