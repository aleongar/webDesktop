import { useState, useEffect, useCallback } from "react";
import "./DragableItem.css";

export function DragableItem({ name, icon, colorInvert, initialPos, onDoubleClick}) {
    const [position, setPosition] = useState(initialPos);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    let filterName = name;

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

    if(name.length > 8){
        filterName = name.substr(0,5) + '...'
    }


    return (
        <div
            onMouseDown={startDragging}
            style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute"}}
            className="drag-container"
            onDoubleClick={onDoubleClick}
            name={name}
        >
            <img unselectable="on" style={{filter: `invert(${Number(colorInvert)})`}} onSelect={() => false} src={icon} alt={filterName} />
            <span>{filterName}</span>
        </div>
    );
}
