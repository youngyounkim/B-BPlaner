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