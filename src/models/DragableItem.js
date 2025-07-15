export class DragableItem {
  static id = 1
  id = DragableItem.id
  name = ""
  colorInvert = true
  icon = ""
  onDoubleClick
  coords = { x: 0, y: 0 }

  constructor(name, icon, func, colorInvert = true, coords = { x: 0, y: 0 }) {
    this.name = name
    this.colorInvert = colorInvert
    this.icon = icon
    this.onDoubleClick = func
    this.coords = coords
    DragableItem.id += 1
  }
}
