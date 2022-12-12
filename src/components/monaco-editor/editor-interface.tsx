import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';
import { editorOptions } from './editor-options';
import './editor.interface.css';

export const MEditor = () => {
    const monaco = useMonaco();
    useEffect(() => {
        if (monaco) {
            console.log('here is the monaco instance:', monaco);
        }
    }, [monaco]);
    return (
        <div className="editor-parent relative" id="monaco-editor-interface" style={{ height: '100%' }}>
            <div className="tabs z-10" id="monaco-editor-tabs">
                <div className="react-contextmenu-wrapper">
                    <div className="tab  ">
                        <div className="material-icon material-theme-tab unknown-file " />
                        <div className="">script.js</div>
                        <div className="codicon codicon-close ml-1 rounded p-0.5 text-white hover:bg-neutral-600 hover:opacity-100 opacity-0" data-testid="close_ann" />
                    </div>
                </div>
                <div className="react-contextmenu-wrapper">
                    <div className="tab active ">
                        <div className="material-icon material-theme-tab unknown-file html" />
                        <div className="">index.html</div>
                        <div className="codicon codicon-close ml-1 rounded p-0.5 text-white hover:opacity-100 opacity-50 hover:bg-neutral-700" data-testid="close_index.html" />
                    </div>
                </div>
            </div>
            <div className="editor-interface">
                <div className="monaco-editor-inst">
                    <Editor
                        className="h-full w-full flex-grow"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        options={editorOptions}
                    />
                </div>
            </div>
        </div>
    )
}
