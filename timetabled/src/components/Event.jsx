//Event component, no imports because it does not speak with any other file (leaf of the component tree)
//props are handle by calling the variable names set on the Component Calendar where Event is call
//{} = makes it possible to display the variables pass through props
const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </td>
    )
}

export default Event;