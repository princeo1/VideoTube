const Comment = ({data}) => {
    const {name,comment} = data;
    return (
        <div className="flex shadow bg-gray-200 m-3 p-3 items-center rounded-xl">
            <img alt="comment-img"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                className="w-8 h-8"/>
            <div className="ml-2">
                <p className="font-bold">Name :{name}</p>
                <p>Comment:{comment}</p>
            </div>
        </div>
    )
}
export default Comment;