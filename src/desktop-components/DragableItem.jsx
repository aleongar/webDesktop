import { useState, useEffect, useCallback } from "react";
import "./DragableItem.css";
import { DragableItem as DragableItemObj } from "../models/DragableItem";

/**
 * dragItem: DragableItemObj
 * */
export function DragableItem({ dragItem }) {
  console.log('a: ' + dragItem.name)
  const [position, setPosition] = useState(dragItem.coords);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  let filterName = dragItem.name;
  const moveCallback = useCallback((e) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [isDragging, offset]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", moveCallback);
      document.addEventListener("mouseup", stopDragging);
    } else {
      document.removeEventListener("mousemove", moveCallback);
      document.removeEventListener("mouseup", stopDragging);
    }
    return () => {
      document.removeEventListener("mousemove", moveCallback);
      document.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging, moveCallback]);

  function startDragging(e) {
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    setIsDragging(true);
  }

  function stopDragging() {
    setIsDragging(false);
  }

  if (dragItem.name.length > 8) {
    filterName = dragItem.name.substr(0, 5) + '...'
  }


  return (
    <div
      onMouseDown={startDragging}
      style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute" }}
      className="drag-container"
      onDoubleClick={dragItem.onDoubleClick}
      name={dragItem.name}
    >
      <img unselectable="on" style={{ filter: `invert(${Number(dragItem.colorInvert)})` }} onSelect={() => false} src={dragItem.icon} alt={filterName} />
      <span>{filterName}</span>
    </div>
  );
}
