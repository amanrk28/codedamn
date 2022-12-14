import { ReflexContainer, ReflexElement } from 'react-reflex';
import { VscTrash } from 'react-icons/vsc';
import { FilesFooter } from './footer';
import { FilesHeader } from './header';
import './files.css';

export const FileSection = () => {
    return (
        <div className="content-area">
            <ReflexContainer>
                <ReflexElement>
                    <div className="flex h-full flex-grow select-none flex-col ">
                        <FilesHeader />
                        <div className="flex grow flex-col">
                            <div>
                                <div className="h-fit">
                                    <div className="react-contextmenu-wrapper">
                                        <div className="file selected  " data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                            <div className="material-icon material-theme-explorer unknown-file html" />
                                            <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                            <button className="icon-sidebar text-base">
                                                <VscTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="react-contextmenu-wrapper">
                                        <div className="file" data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                            <div className="material-icon material-theme-explorer unknown-file html" />
                                            <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                            <button className="icon-sidebar text-base">
                                                <VscTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="react-contextmenu-wrapper">
                                        <div className="file" data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                            <div className="material-icon material-theme-explorer unknown-file html" />
                                            <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                            <button className="icon-sidebar text-base">
                                                <VscTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="react-contextmenu-wrapper">
                                        <div className="file " data-waiting-for-rename="false" style={{ paddingLeft: '10.2px' }}>
                                            <div className="material-icon material-theme-explorer unknown-file html" />
                                            <p className="text root !cursor-pointer !select-none !border-none !opacity-75 !outline-none" data-testid="exp_index.html" data-fullid="index.html">index.html</p>
                                            <button className="icon-sidebar text-base">
                                                <VscTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grow" />
                        </div>
                        <FilesFooter />
                    </div>
                </ReflexElement>
            </ReflexContainer>
        </div>
    )
}
