export const ADD_TARGET = "ADD_TARGET" ;
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const CHANGE_ACTIVITY_NAME = "CHANGE_ACTIVITY_NAME"
export const CHANGE_TARGET_COLOR = "CHANGE_TARGET_COLOR"; // ReadTargetEntry 에서 목표색 바꿈기능 - 제천
export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
export const CHANGE_TARGET_NAME = "CHANGE_TARGET_NAME"; // ReadTargetEntry 에서 목표 이름 변경 - 제천

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

export const changeActivityName = (targetId, activityId, inputValue) => {
    return {
        type : CHANGE_ACTIVITY_NAME,
        payload : {
            targetId,
            activityId,
            inputValue
        }
    }
}

export const changeTargetName = (targetId, inputValue) => {
    return {
        type : CHANGE_TARGET_NAME,
        payload : {
            targetId,
            inputValue
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

export const deleteActivity = (targetId, id) =>{
    return {
        type : DELETE_ACTIVITY,
        payload : {
            targetId : targetId,
            id : id
        }
    }
}