import { FC, useState } from "react";
import { IInputGroup } from "./interface";
import { InputGroupContainer } from "./style";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const InputGroup: FC<IInputGroup> = ({
    label,
    placeholder,
    type,
    name,
    width,
    handleChange,
    error,
}) => {
    // Manages state of opening and closing eye icon in password inputs
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <InputGroupContainer
            password={type === "password" ? true : false}
            width={width}
            error={error ? true : false}
        >
            <small>{label}</small>

            <div>
                <input
                    type={
                        type !== "password"
                            ? type || "text"
                            : showPassword
                            ? "text"
                            : "password"
                    }
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    id={name}
                />
                {type === "password" &&
                    (!showPassword ? (
                        <FiEyeOff
                            onClick={() => {
                                setShowPassword(true);
                            }}
                        />
                    ) : (
                        <FiEye
                            onClick={() => {
                                setShowPassword(false);
                            }}
                        />
                    ))}
            </div>

            {error && <small className="error">{error}</small>}
        </InputGroupContainer>
    );
};
