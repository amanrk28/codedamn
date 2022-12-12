import Editor from '@monaco-editor/react';
import { MEditor } from 'components/monaco-editor';
import { Navbar } from 'components/navbar';
import { Sidebar } from 'components/sidebar';
import { XTerminal } from 'components/xterm';
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from 'react-reflex';

const App = () => {
  return (
    <div className="flex h-screen w-full flex-grow bg-neutral-900">
      <div className="flex max-h-screen w-full flex-col overflow-y-auto">
        <Navbar />
        <ReflexContainer className="border-y border-t-0 border-neutral-700" windowResizeAware>
          <ReflexElement>
            <ReflexContainer orientation="vertical">

              {/* Add Sidebar */}
              <ReflexElement>
                <Sidebar />
              </ReflexElement>

              <ReflexSplitter />

              {/* Code Editor + Terminal */}
              <ReflexElement>
                <ReflexContainer>
                  {/* Code Editor */}
                  <ReflexElement>
                    <MEditor />
                  </ReflexElement>
                  <ReflexSplitter />
                  {/* Terminal */}
                  <ReflexElement minSize={10} maxSize={190}>
                    <XTerminal />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>

              <ReflexSplitter />

              {/* Browser Output */}
              <ReflexElement minSize={200} maxSize={800}>
                {/* <MEditor /> */}
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </div>
  );
}

export default App;
