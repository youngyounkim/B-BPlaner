export const ADD_TARGET = "ADD_TARGET" ;
export const ADD_ACTIVITY = "ADD_ACTIVITY";


export const addTarget = (targetCnt, name, color, activitiesCnt=1, activities=[]) => {
    return {
        type: ADD_TARGET,
        payload: {
            id: targetCnt, // target.id 형식도 1, 2 ,3, ... 그대로 따름.
            name: name,
            color: color,
            activitiesCnt: activitiesCnt,
            activities: activities
        }
    }
}

export const addActivity = (id, name) => {
    return {
        type : ADD_ACTIVITY,
        payload : {
            id: id,
            name: name
        }
    }
}