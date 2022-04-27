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
    const countryCodeValue = value.substring(0, value.indexOf(" "))
    const phoneNumberValue = value.substring(value.indexOf(" ") + 1)

    const [countryCode, setCountryCode] = useState(countryCodeValue)
    const [phoneNumber, setPhoneNumber] = useState(phoneNumberValue)

    const codes = countryCodes.map((code: any) => {
        return (
            <option key={code.code}
                    data-countrycode={code.code}
                    value={code.dial_code}
                    selected={countryCode === code.dial_code}
            >
                {code.code} {code.dial_code}
            </option>
        );
    });

    useEffect(() => {
        onChange("phone", countryCode + " " + phoneNumber)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode, phoneNumber])

    return (
        <div className={"phone-input"}>
            <label>Phone</label>
            <div className={"phone-input__field"}>
                <select id="countryCode"
                        name="countryCode"
                        value={countryCodeValue}
                        onChange={(e) => {
                            setCountryCode(e.target.value);
                        }}
                >
                    {codes}
                </select>

                <ReactInputMask type="tel"
                                mask="(999) 999 99 99"
                                placeholder="(555) 555-0199"
                                value={phoneNumberValue}
                                onChange={(e: any) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                alwaysShowMask
                />
            </div>
        </div>
    );
};
