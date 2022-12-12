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
                                    <div className="h-fit" />
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
