import { ReflexContainer, ReflexElement } from 'react-reflex';
import { FilesUpload } from './files-upload';
import './files.css';
import { TopNav } from './top-nav';

export const FileSection = () => {
    return (
        <div className="flex h-full flex-row overflow-hidden">
            <div className="content-area">
                <ReflexContainer>
                    <ReflexElement>
                        <div className="flex h-full flex-grow select-none flex-col ">
                            <TopNav />
                            <div className="flex grow flex-col">
                                <div>
                                    <div className="h-fit">
                                        <div className="react-contextmenu-wrapper">
                                            <div className="file selected  " data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                                <div className="material-icon material-theme-explorer unknown-file html" />
                                                <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                                <button className="icon-sidebar text-base">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="react-contextmenu-wrapper">
                                            <div className="file" data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                                <div className="material-icon material-theme-explorer unknown-file html" />
                                                <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                                <button className="icon-sidebar text-base">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="react-contextmenu-wrapper">
                                            <div className="file" data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                                <div className="material-icon material-theme-explorer unknown-file html" />
                                                <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                                <button className="icon-sidebar text-base">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="react-contextmenu-wrapper">
                                            <div className="file " data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                                <div className="material-icon material-theme-explorer unknown-file html" />
                                                <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                                <button className="icon-sidebar text-base">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow" />
                            </div>
                            <FilesUpload />
                        </div>
                    </ReflexElement>
                </ReflexContainer>
            </div>
        </div>
    )
}
