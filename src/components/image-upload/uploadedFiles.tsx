import React, { FC } from "react";
import { UploadedFilesContainer } from "./style";
import { fileSize, fileType } from "./utils";
import { ReactComponent as Delete } from "./../../assets/icons/delete.svg";

export const UploadedFiles: FC<{
    documents: any[];
    removeFile: any;
}> = ({ documents, removeFile }) => {
    return (
        <UploadedFilesContainer>
            {documents.map((data, i) => (
                <div className="file-status-bar" key={i}>
                    {" "}
                    <div className="file-type-logo">
                        <div className="file-type">{fileType(data.name)}</div>
                    </div>
                    <div className="flex">
                        <span
                            className={`file-name ${
                                data.invalid || data.larger ? "file-error" : ""
                            }`}
                        >
                            {data.name.length > 10
                                ? data.name.slice(0, 10) +
                                  "..." +
                                  fileType(data.name)
                                : data.name}
                        </span>
                        <span className="file-size">
                            ({fileSize(data.size)})
                        </span>{" "}
                        {data.invalid && (
                            <span className="file-error-message">
                                File is of invalid type.
                            </span>
                        )}
                        {data.larger && (
                            <span className="file-error-message">
                                File is larger than 2MB
                            </span>
                        )}
                    </div>
                    <div
                        className="file-remove"
                        onClick={() => removeFile(data.name)}
                    >
                        <Delete />
                    </div>
                </div>
            ))}
        </UploadedFilesContainer>
    );
};
