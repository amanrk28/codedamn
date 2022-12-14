import { useState } from 'react';
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
  const [size, setSize] = useState(25);
  // const getSize = () => {
  //   const domElement = ReactDOM.findDOMNode(this)
  //   switch (this.props.orientation) {
  //     case 'horizontal':
  //       return domElement.offsetHeight
  //     case 'vertical':
  //       return domElement.offsetWidth
  //     default:
  //       return 0
  //   }
  // }


  // const onMinimizeClicked = () => {
  //   const currentSize = getSize()
  //   // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
  //   const update = (size: number) => {
  //     return new Promise<void>(resolve => {
  //       setSize(() => {
  //         () => resolve();
  //         return size < 25 ? 25 : size;
  //       })
  //     })
  //   }

  //   const done = (from: number, to: number) => {
  //     return from < to;
  //   };
  //   animate(currentSize, 25, -8, done, update);
  // }

  // const onMaximizeClicked = () => {
  //   const currentSize = getSize()
  //   // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
  //   const update = (size: number) => {
  //     return new Promise<void>(resolve => {
  //       setSize(() => {
  //         () => resolve();
  //         return size
  //       })
  //     })
  //   }
  //   const done = (from: number, to: number) => {
  //     return from < to;
  //   };

  //   animate(currentSize, 400, 8, done, update)
  // }

  // const animate = (start: number, end: number, step: number, done: (from: number, to: number) => boolean, fn: (size: number) => Promise<unknown>) => {
  //   const stepFn = () => {
  //     if (!done(start, end)) {
  //       fn(start += step).then(() => {
  //         window.requestAnimationFrame(stepFn)
  //       })
  //     }
  //   }
  //   stepFn();
  // }

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
                  <ReflexElement size={size} flex={0.2}>
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
