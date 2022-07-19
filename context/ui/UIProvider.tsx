import { useReducer } from 'react';
import { UIContext, UIReducer } from './';

interface Props {
    children: React.ReactNode
}

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProvider: React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    return (
        <UIContext.Provider value={{
            ...state,
            //functions
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}