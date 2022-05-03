import React           from "react";
import { Multiselect } from "./Multiselect";
import { Textarea }    from "./Textarea";

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

export const Step2: React.FC<Props> = ({
                                           onChange,
                                           inputValues,
                                       }) => {

    return (
        <div>
            <Multiselect onChange={onChange} value={inputValues.skills}/>
            <Textarea name={"about"}
                      label={"About "}
                      placeholder={"Give us some information about you"}
                      onChange={onChange}
                      value={inputValues.about}/>

        </div>
    );
};
