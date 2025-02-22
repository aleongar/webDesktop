import './TitleBar.css'
export function TitleBar({name, icon, onMouseDown, id}){
    function windowClose(e){
       document.getElementById(id).remove()
    }
    return (
        <div onMouseDown={onmousedown} className="window-title-container">
            <div>
            <img src={icon} alt={name} />
            </div>
            <div>{name}</div>
            <div className="window-title-control">
                <span className="window-title-button"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m5.5 14.5v-5h-5"/><path d="m14.5 9.5h-5v5"/><path d="m.5 5.5h5v-5"/><path d="m9.5.5v5h5"/></g></svg></span>
                <span className="window-title-button"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><path d="m16.5 14.5v-12c0-1.1045695-.8954305-2-2-2h-12c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h12c1.1045695 0 2-.8954305 2-2z"/><path d="m.5 12.5h10c1.1045695 0 2-.8954305 2-2v-10"/><path d="m.5 8.5h7c.55228475 0 1-.44771525 1-1v-7"/></g></svg></span>
                <span onClick={windowClose} className="window-close"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg></span>
            </div>
        </div>
    )
}