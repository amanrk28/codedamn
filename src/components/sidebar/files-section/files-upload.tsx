import { MdUploadFile } from 'react-icons/md';

export const FilesUpload = () => {
    return (
        <div className="flex h-9 w-full items-center justify-center gap-1.5 border-t border-gray-700 bg-gray-900 py-1 text-center text-xs font-medium">
            <MdUploadFile size={14} />
            <span>
                <span className="font-semibold underline cursor-pointer">Select</span> or drop files to upload
            </span>
        </div>
    );
};
