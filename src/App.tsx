import SimVisualization from "./components/SimVisualization.tsx";

function App() {
  return (
    <div className="flex flex-col h-full w-full gap-1 bg-gray-950 text-gray-500 p-7">
      <div>
        <h1 className="text-gray-400 text-lg">
          EconoMimic v1.0
        </h1>
        <hr className="border border-transparent my-5" />
      </div>
      <div className="grow border rounded-lg border-gray-800 overflow-hidden">
        <SimVisualization/>
      </div>
    </div>
  )
}

export default App
