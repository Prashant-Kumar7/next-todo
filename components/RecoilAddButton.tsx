"use client"

import { RecoilRoot } from "recoil";
import { AddButton, InputField } from "./AddButton";

export function RecoilAddButton(){
    return <RecoilRoot>
        <AddButton/>
    </RecoilRoot>
}

export function RecoilInputField(){
    return <RecoilRoot>
        <InputField/>
    </RecoilRoot>
}