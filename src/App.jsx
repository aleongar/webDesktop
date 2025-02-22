import { useState } from "react"
import { DesktopEnviroment } from "./desktop-components/DesktopEnviroment"
import { DragableItem } from "./desktop-components/DragableItem"
import { WindowComponent } from "./window-components/WindowComponent"
export function App(){
  const [nextId, setNextId] = useState(1)
  const [openedWindows, setOpenedWindows] = useState([
    {
      id: `window${nextId}`,
      name: "Bloc de notas",
      icon: "https://www.systemuicons.com/images/icons/document_justified.svg",
      size: { x: 500, y: 100 },
      initialPos: { x: 10, y: 10 }
    }
  ]);

  const openWindow = (name) => {
    setNextId(nextId+1)
    const newWindow = {
      id: `window${nextId}`,
      name: name,
      icon: "https://www.systemuicons.com/images/icons/document_justified.svg", // Puedes cambiar el ícono si es necesario
      size: { x: 500, y: 100 },
      initialPos: { x: 10, y: 10 }
    };

    setOpenedWindows((prevWindows) => [...prevWindows, newWindow]);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    const programName = e.target.getAttribute('name');
    openWindow(programName);
  };
  
  return (
    <DesktopEnviroment>
        <DragableItem colorInvert name={'Terminal'} icon={'https://www.systemuicons.com/images/icons/terminal.svg'}/>
        <DragableItem  onDoubleClick={handleDoubleClick} colorInvert name={'Bloc de Notas'} icon={'https://www.systemuicons.com/images/icons/document_justified.svg'}/>
        {openedWindows.map((window) => (
        <WindowComponent
          id={window.id}
          name={window.name}
          icon={window.icon}
          size={window.size}
          initialPos={window.initialPos}
        />
      ))}
    </DesktopEnviroment>
  )
}
  