import { VscNewFile, VscNewFolder, VscCollapseAll, VscEllipsis, VscFeedback, VscCloudDownload } from 'react-icons/vsc';
import { Menu } from '@headlessui/react';

export const TopNav = () => {
    return (
        <div className="sticky top-0 left-0 z-50 flex items-center bg-[#252525] px-2 py-2 text-xs shadow">
            <div className="flex-grow font-bold uppercase">Code</div>
            <div className="ml-2 flex cursor-pointer items-center justify-center">
                <button className="text-base">
                    <VscNewFile />
                </button>
                <button className="ml-2 text-base">
                    <VscNewFolder />
                </button>
                <button className="ml-2 -mt-0.5 text-lg">
                    <VscCollapseAll />
                </button>
                <Menu>
                    <Menu.Button className="ml-2.5 text-base">
                        <VscEllipsis />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-[6.5rem] max-w-none origin-top-right divide-y divide-neutral-500 overflow-hidden rounded-sm border border-neutral-900/60 bg-neutral-800 shadow-md ring-opacity-5 focus:outline-none transform opacity-100 scale-100">
                        <div>
                            <Menu.Item>
                                <button className="group flex w-full cursor-pointer items-center px-4 py-2 text-sm text-neutral-100 opacity-80 hover:bg-neutral-700 hover:text-neutral-200 hover:opacity-100">
                                    <span className="mr-2 flex-shrink-0 text-xl"><VscCloudDownload /></span>
                                    <span>Download Playground</span>
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="group flex w-full cursor-pointer items-center px-4 py-2 text-sm text-neutral-100 opacity-80 hover:bg-neutral-700 hover:text-neutral-200 hover:opacity-100">
                                    <span className="mr-2 flex-shrink-0 text-xl"><VscFeedback /></span>
                                    <span>Send Feeback</span>
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Menu>
            </div>
        </div>
    )
}
