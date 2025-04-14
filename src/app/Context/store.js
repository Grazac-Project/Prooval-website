'use client'

import { createContext, useContext, useState } from "react"

const GlobalContext = createContext({isActive: '', setIsActive: ''})

export const GlobalContextProvider = ({children}) => {
    const [isActive, setIsActive] = useState('Dashboard')
    const [user, setUser] = useState({})
    const [profilePicture, setProfilePicture] = useState(user?.profilePic);
    const [prefMentList, setPrefMentList] = useState([])

    return (
        <GlobalContext.Provider value={{isActive, setIsActive, user, setUser, profilePicture, setProfilePicture, prefMentList, setPrefMentList}} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)