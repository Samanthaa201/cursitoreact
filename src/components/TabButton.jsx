export default function TabFunction({children, onSelect}){ //on -> hacer saber que va a activar algún evento
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}