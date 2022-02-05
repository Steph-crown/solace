import { FC, useRef, useState } from "react";
import { ISelectProps } from "./interface";
import { SelectContainer } from "./style";
import { ReactComponent as Down } from "./../../assets/icons/down.svg";
import { ReactComponent as Up } from "./../../assets/icons/up.svg";
import { useOutsideAlerter } from "../../pages/hooks/outside-click";

export const Select: FC<ISelectProps> = ({
    options,
    label,
    placeholder,
    width,
    disabled,
    handleChange,
    selectedItem,
    className,
}) => {
    const [isListOpen, setIsListOpen] = useState(false);
    const toggleList = (): void => {
        setIsListOpen((prev) => !prev);
    };
    const selectItem = (item: { label: string; value: string | number }) => {
        handleChange(item);
        setIsListOpen(false);
    };

    const close = (): void => {
        setIsListOpen(false);
    };

    const wrapperRef = useRef(null);

    // Checks for outside clicks then closes dropdown
    useOutsideAlerter(wrapperRef, () => close());

    return (
        <SelectContainer ref={wrapperRef} width={width} className={className}>
            <small>{label}</small>

            <div className="dd-wrapper">
                <button
                    type="button"
                    className="dd-header"
                    onClick={toggleList}
                >
                    {!selectedItem?.value && (
                        <div className="dd-header-title">{placeholder}</div>
                    )}
                    {selectedItem?.label && (
                        <div className="dd-header-title">
                            {selectedItem.label}
                        </div>
                    )}
                    {isListOpen ? <Up /> : <Down />}
                </button>
                {isListOpen && (
                    <div role="list" className="dd-list">
                        {options.map((item) => (
                            <button
                                type="button"
                                className="dd-list-item"
                                key={item.value}
                                onClick={() => {
                                    selectItem(item);
                                }}
                                data-selected={
                                    item.value === selectedItem?.value
                                }
                            >
                                {item.label}{" "}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </SelectContainer>
    );
};
