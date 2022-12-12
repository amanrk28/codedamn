import { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import { VscTools } from 'react-icons/vsc'


export const LiveBrowser = () => {
    const [browserUrl, setBrowserUrl] = useState('https://smoke-cool.codedamn.app:1337');
    return (
        <div className="flex h-full w-full flex-col bg-white">
            <div className="relative z-10 flex bg-neutral-800 p-1 shadow-sm text-white" id="preview-omnibar">
                <button type="button" className="cursor-pointer rounded-full p-1 hover:bg-neutral-600 hover:bg-opacity-30 flex-shrink-0">
                    <BiRefresh size={20} />
                </button>
                <div className="border-1 mx-2 flex flex-grow select-all items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-sm border-neutral-100 bg-neutral-900 text-sm text-neutral-200" data-testid="browser-url">
                    <input id="iframe-input-box" className="mr-1 w-full rounded border-none bg-inherit px-2 py-1 text-sm text-inherit" type="text" value={browserUrl} onChange={e => setBrowserUrl(e.target.value)} />
                </div>
                <button type="button" className="cursor-pointer rounded-full p-1 hover:bg-neutral-600 hover:bg-opacity-30 flex-shrink-0">
                    <RiShareBoxFill />
                </button>
            </div>

            <div className="relative flex-grow" data-testid="html-iframe" id="browser-preview" />

            <div id="footer-controls" className="relative z-10 h-9 border-t border-neutral-700 flex justify-end bg-neutral-900 p-1 text-white shadow-sm">
                <div className="cursor-pointer flex items-center text-white gap-1.5 rounded-sm py-1 px-2 hover:bg-neutral-600 hover:bg-opacity-30">
                    <VscTools />
                    <span className="text-xs select-none">Toggle Devtools</span>
                </div>
            </div>
        </div>
    )
}
