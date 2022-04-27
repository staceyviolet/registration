import React, {useEffect, useState} from "react";
import './phoneInput.scss'

import countryCodes from "../../utils/countryCodes.json";
import ReactInputMask from "react-input-mask";

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    value: string
}

export const PhoneInput: React.FC<Props> = ({
                                                onChange,
                                                value
                                            }) => {
    const [countryCode, setCountryCode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const codes = countryCodes.map((code: any) => {
        return (
            <option
                data-countrycode={code.code}
                value={code.dial_code}
                selected={countryCode === code.code}
            >
                {code.code} {code.dial_code}
            </option>
        );
    });

    useEffect(() => {
        onChange("phone", countryCode + " " + phoneNumber)
    }, [countryCode, phoneNumber])

    return (
        <div className={"phone-input"}>
            <label>Phone</label>
            <div className={"phone-input__field"}>
                <select id="countryCode"
                        name="countryCode"
                        value={value.substring(0, value.indexOf(" "))}
                        onChange={(e) => {
                            setCountryCode(e.target.value);
                        }}
                >
                    {codes}
                </select>

                <ReactInputMask type="tel"
                                mask="(999) 999 99 99"
                                placeholder="(555) 555-0199"
                                value={value.substring(value.indexOf(" "))}
                                onChange={(e: any) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                alwaysShowMask
                />
            </div>
        </div>
    );
};
