// Gets the file type
export const fileType = (fileName: string) => {
    return (
        fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
        fileName
    );
};

// Gets the standardized file size
export const fileSize = (size: number) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
