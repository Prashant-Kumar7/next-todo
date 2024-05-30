import { atom, atomFamily } from "recoil"


export const atomFamilyItemId = atomFamily({
    key: "atomFamilyItemId",
    default: ""
})

export const clickAtom = atom({
    key : "clickAtom",
    default : false
})


export const editClickAtom = atom({
    key : "editClickAtom",
    default : false
})