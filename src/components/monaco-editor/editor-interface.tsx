import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { editorOptions } from './editor-options';
import { editorTheme } from './editor-theme';
import './editor.interface.css';
import { langMap } from './lang-map';

const files = [
    {
        fileName: 'index.html',
    },
    {
        fileName: 'index.css',
    },
    {
        fileName: 'script.js',
    },
]

export const MEditor = (props: any) => {
    const monaco = useMonaco();
    const [activeTab, setActiveTab] = useState('index.html');
    const [activeLang, setLang] = useState('index.html');

    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('onedark', editorTheme);
            monaco.editor.setTheme('onedark');
        }
    }, [monaco]);

    const onChangeFile = (fileName: string) => {
        setActiveTab(fileName);
        const lang = langMap(fileName.split('.')[1])[0];
        setLang(lang);
    }

    return (
        <div className="editor-parent relative" id="monaco-editor-interface" style={{ height: '100%' }}>
            <div className="tabs z-10" id="monaco-editor-tabs">
                {files.map(file => (
                    <div className="react-contextmenu-wrapper" key={file.fileName} onClick={() => onChangeFile(file.fileName)}>
                        <div className={`tab ${activeTab === file.fileName ? 'active' : ''}`}>
                            <div className={`material-icon material-theme-tab unknown-file ${activeLang}`} />
                            <div className="">{file.fileName}</div>
                            <div className={`codicon codicon-close ml-1 rounded p-0.5 text-white hover:opacity-100 ${activeTab === file.fileName ? 'opacity-50' : 'opacity-0'} hover:bg-neutral-700`} data-testid="close_index.html" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="editor-interface">
                <div className="monaco-editor-inst">
                    <Editor
                        width={props.dimensions.width}
                        className="h-full w-full flex-grow"
                        defaultLanguage="html"
                        language={activeLang}
                        theme="vs-dark"
                        options={editorOptions}
                    />
                </div>
            </div>
        </div>
    )
}
