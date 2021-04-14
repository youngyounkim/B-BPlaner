export const ADD_TARGET = "ADD_TARGET" ;
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const CHANGE_TARGET_COLOR = "CHANGE_TARGET_COLOR"; // ReadTargetEntry 에서 목표색 바꿈기능 - 제천


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
// 목표색 바꿈 액션
export const changeTargetColor = (id, color) => {
    return {
        type : CHANGE_TARGET_COLOR,
        payload : {
            id: id,
            color: color
        }
    }
}