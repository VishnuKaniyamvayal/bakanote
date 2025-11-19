"use client"
import { Excalidraw } from "@excalidraw/excalidraw";
import '@excalidraw/excalidraw/index.css';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div style={{ height: '100vh', width: '100vw' }}>
            <Excalidraw
                initialData={{
                    appState: { 
                        viewBackgroundColor: '#ffffff',
                    },
                }}
            />
        </div>
    </div>
  );
}
