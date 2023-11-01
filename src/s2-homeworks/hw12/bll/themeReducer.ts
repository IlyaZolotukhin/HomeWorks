const initState = {
    themeId: 1,
}

export type ThemeType = {
    themeId: number
}

export const themeReducer = (state:ThemeType = initState, action: changeThemeIdType): ThemeType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}