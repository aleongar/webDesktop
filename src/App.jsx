import { useState } from "react"
import { DesktopEnviroment } from "./desktop-components/DesktopEnviroment"
import { DragableItem } from "./desktop-components/DragableItem"
import { WindowComponent } from "./window-components/WindowComponent"
import { DragableItem as DragableItemObj } from "./models/DragableItem.js";
export function App() {
  const [nextId, setNextId] = useState(1)
  const [openedWindows, setOpenedWindows] = useState([]);

  const handleDoubleClick = (e) => {
    e.preventDefault()
    const programName = e.currentTarget.getAttribute('name')
    openWindow(programName)
  };

  const [currentFiles, setCurrentFiles] = useState([
    new DragableItemObj('Bloc de Notas', 'https://www.systemuicons.com/images/icons/document_justified.svg', handleDoubleClick)
  ]);


  const openWindow = (name) => {
    setNextId(nextId + 1)
    if (name === null) {
      name = 'Ventana desconocida'
    }
    const newWindow = {
      id: `window${nextId}`,
      name: name,
      icon: "https://www.systemuicons.com/images/icons/document_justified.svg", // Puedes cambiar el ícono si es necesario
      size: { x: 500, y: 100 },
      initialPos: { x: 10, y: 10 }
    }

    setOpenedWindows((prevWindows) => [...prevWindows, newWindow])
  };

  return (
    <DesktopEnviroment openedWindows={openedWindows}>
      {currentFiles.map((file) => (
        <DragableItem key={file.id} dragItem={file} />
      ))}
      {openedWindows.map((window) => (
        <WindowComponent
          key={window.id}
          id={window.id}
          name={window.name}
          icon={window.icon}
          size={window.size}
          initialPos={window.initialPos}
          onClose={() => setOpenedWindows((prevWindows) => prevWindows.filter(item => item.id != window.id))}
        />
      ))}
    </DesktopEnviroment>
  )
}
