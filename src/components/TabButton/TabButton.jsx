function TabButton(props, onSelect){

    return(

            <li>
                <button onClick = {onSelect}>
                    {props.children}
                </button>
            </li>

    );

}
export default TabButton