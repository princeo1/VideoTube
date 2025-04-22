const Button = (props) => {
    const {name} = props;
    return (
        <div className="m-2">
            <button className="bg-gray-200 p-2 rounded-xl">{name}</button>
        </div>
    )
}
export default Button;