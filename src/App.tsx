import { LiveBrowser } from 'components/live-browser';
import { MEditor } from 'components/monaco-editor';
import { Navbar } from 'components/navbar';
import { Sidebar } from 'components/sidebar';
import { XTerminal } from 'components/xterm/xterm';
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
            <ReflexContainer orientation="vertical" windowResizeAware>

              {/* Add Sidebar */}
              <ReflexElement minSize={48} flex={0.2}>
                <Sidebar />
              </ReflexElement>

              <ReflexSplitter />

              {/* Code Editor + Terminal */}
              <ReflexElement flex={0.45}>
                <ReflexContainer windowResizeAware>
                  <ReflexElement flex={0.8} propagateDimensions>
                    <MEditor />
                  </ReflexElement>
                  <ReflexSplitter />
                  <ReflexElement flex={0.2}>
                    <XTerminal />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>

              <ReflexSplitter />

              {/* Browser Output */}
              <ReflexElement flex={0.35}>
                <LiveBrowser />
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </div>
  );
}

export default App;
