import { AiOutlineShareAlt, AiOutlineFork } from 'react-icons/ai';

const codedamnLogo = 'https://wsrv.nl/?url=https://codedamn.com/assets/images/favicons/favicon-96x96.png&w=60&q=70&output=webp'

export const Navbar = () => {
    return (
        <div className="flex text-neutral-100 bg-[#141414] border-b border-neutral-800 w-full items-center px-3.5 py-0.5 text-sm">
            <div className="editor-logo h-14 overflow-y-clip hidden cursor-pointer md:block">
                <span className="mr-6 flex h-full w-40 items-center gap-3 overflow-hidden whitespace-nowrap">
                    <img height={30} width={30} src={codedamnLogo} alt="codedamn logo" />
                </span>
            </div>
            <div className="flex flex-1 items-center justify-center space-x-4">
                <form>
                    <input type="text" maxLength={100} className="m-0 h-full w-32 overflow-ellipsis border-0 bg-transparent text-center text-sm outline-none ring-0 hover:bg-neutral-700 focus:border-0 focus:outline-none focus:ring-0 lg:w-96" placeholder="Untitled Playground" />
                </form>
            </div>
            <div className="mr-4 flex items-center justify-end space-x-4">
                <div className="flex -space-x-2 overflow-hidden" />
            </div>
            <div className="ml-1 mr-2 flex items-center justify-end space-x-4">
                <button className="my-1 flex items-center gap-2 rounded-sm bg-neutral-700 bg-opacity-30 py-1 px-4 text-sm text-white ring-1 ring-neutral-600 hover:bg-opacity-70">
                    <AiOutlineShareAlt size={24} />
                    <span className="text-sm">Share</span>
                </button>
                <button className="my-1 flex items-center gap-2 rounded-sm bg-neutral-700 bg-opacity-30 py-1 px-4 text-sm text-white ring-1 ring-neutral-600 hover:bg-opacity-70">
                    <AiOutlineFork size={24} />
                    <span className="text-sm">Fork</span>
                </button>
            </div>
        </div>
    )
}
