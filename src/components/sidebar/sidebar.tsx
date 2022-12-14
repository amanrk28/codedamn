import { FileSection } from './files-section';

export const Sidebar = () => {
    return (
        <div className="bg-[#131313] text-white h-full w-full">
            <div className="flex h-full flex-row overflow-hidden">
                <FileSection />
            </div>
        </div>
    )
}
