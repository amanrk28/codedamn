import { XTerm } from 'xterm-for-react';
import { BsTerminal, BsChevronDown } from 'react-icons/bs'

export const XTerminal = () => {
    return (
        <div className="terminal-area flex h-full flex-col min-w-[512px] overflow-x-auto overflow-y-clip">
            <div className="grid">


                <div className="top-0 z-30 flex h-9 flex-row items-center overflow-hidden bg-neutral-900 text-xs">
                    <div className="flex h-full cursor-pointer flex-row items-center justify-between overflow-hidden overflow-ellipsis whitespace-nowrap border-t-2 bg-neutral-900 py-2 px-2 font-bold text-white transition duration-300 ease-in-out border-[#FA8072] bg-neutral-900">
                        <div className="overflow-hidden overflow-ellipsis">Terminal</div>
                        <div className="pl-2">
                            <div className="codicon codicon-close ml-1 rounded p-0.5 text-white opacity-60 hover:bg-neutral-600 hover:bg-opacity-30 " />
                        </div>
                    </div>
                    <div className="flex-grow" />
                    <div className="flex items-center">
                        <button className="mx-2 block disabled:opacity-40 disabled:cursor-progress">
                            <div className="flex shrink-0 items-center text-white rounded-sm p-1 hover:bg-neutral-600 hover:bg-opacity-30">
                                <BsTerminal size={14} />
                            </div>
                        </button>
                        <button className="flex mr-2 items-center text-white rounded-sm p-1 hover:bg-neutral-600 hover:bg-opacity-30 disabled:opacity-40 disabled:cursor-not-allowed">
                            <BsChevronDown />
                        </button>
                    </div>
                </div>

            </div>
            <div className="relative flex flex-grow flex-row bg-neutral-900" />
            <XTerm />
        </div>
    )
};
