import { DragEvent, FC, RefObject, useEffect, useRef, useState } from "react";
import { IFileUploadProps } from "./interface";
import { FileUploadContainer } from "./style";
import { ReactComponent as UploadIcon } from "./../../assets/icons/upload.svg";
import { UploadedFiles } from "./uploadedFiles";

export const FileUpload: FC<IFileUploadProps> = ({
    label,
    document,
    setDocument,
    maxSize,
    acceptableFiles,
    multiple,
    setPresenceOfUnsupportedFiles,
    presenceOfUnsupportedFiles,
    error,
}) => {
    const dragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const dragEnter = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const dragLeave = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const [errorMessage, setErrorMessage] = useState("");

    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState<any[]>([]);

    const fileDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const files: any = e.dataTransfer.files;
        handleFiles(files);

        // setSelectedFiles(e.dataTransfer.files);
    };
    // Function to handle files uploaded.
    const handleFiles = (files: any) => {
        // Checks if files have been uploaded
        if (files.length) {
            // If component accepts multiple files
            if (multiple) {
                let currentlyUploadedFiles: any[] = [];
                for (let i = 0; i < files.length; i++) {
                    if (!validateFile(files[i])) {
                        // add a new property called invalid
                        files[i].invalid = true;
                        setUnsupportedFiles((prevArray) => [
                            ...prevArray,
                            files[i],
                        ]);
                    }
                    if (Number(files[i]?.size) > Number(maxSize)) {
                        // File is larger than file size
                        files[i].larger = true;
                        setUnsupportedFiles((prevArray) => [
                            ...prevArray,
                            files[i],
                        ]);
                    }
                    currentlyUploadedFiles.push(files[i]);
                }
                // Appends the selectedFiles(s) to list of selectedFiless in state
                setSelectedFiles([...selectedFiles, ...currentlyUploadedFiles]);
            } else {
                if (!validateFile(files[0])) {
                    // add to an array so we can display the name of file
                    files[0].invalid = true;
                    setUnsupportedFiles((prevArray) => [
                        ...prevArray,
                        files[0],
                    ]);
                }
                if (Number(files[0]?.size) > Number(maxSize)) {
                    // File is larger than file size
                    files[0].larger = true;
                    setUnsupportedFiles((prevArray) => [
                        ...prevArray,
                        files[0],
                    ]);
                }
                // adds just the selectedFiles to state
                setSelectedFiles([files[0]]);
            }
        }
    };

    const validateFile = (file: File) => {
        const validTypes = acceptableFiles;

        // If the file is not an acceptable type
        if (validTypes?.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    };

    // Remove file from list
    const removeFile = (name: string) => {
        // find the index of the item
        // remove the item from array
        const validFileIndex = validFiles.findIndex(
            (e: { name: string }) => e.name === name
        );
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(
            (e) => e.name === name
        );
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);

        const unsupportedFileIndex = unsupportedFiles.findIndex(
            (e) => e.name === name
        );
        if (unsupportedFileIndex !== -1) {
            unsupportedFiles.splice(unsupportedFileIndex, 1);
            // update unsupportedFiles array
            setUnsupportedFiles([...unsupportedFiles]);
        }
    };

    //
    useEffect(() => {
        // Remove duplicates from selected files
        let filteredArray = selectedFiles.reduce((file, current) => {
            const x = file.find((item: any) => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setDocument([...filteredArray]);

        setPresenceOfUnsupportedFiles(unsupportedFiles.length > 0);
    }, [selectedFiles]);

    // Click to upload
    const fileInputRef = useRef<HTMLInputElement>(null);
    const fileInputClicked = () => {
        fileInputRef?.current?.click();
    };
    const filesSelected = () => {
        if (fileInputRef?.current?.files?.length) {
            handleFiles(fileInputRef.current.files);
        }
    };

    return (
        <>
            <FileUploadContainer
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    onClick={fileInputClicked}
                    accept={acceptableFiles?.join(", ")}
                />
                <small>{label}</small>
                <div className="file-upload">
                    <UploadIcon />
                    <p>Drag & Drop your files here or click to browse</p>
                </div>
                {error && <small className="error">{error}</small>}
            </FileUploadContainer>
            {selectedFiles.length > 0 && (
                <UploadedFiles
                    documents={document}
                    removeFile={(name: string) => {
                        removeFile(name);
                    }}
                />
            )}
        </>
    );
};
