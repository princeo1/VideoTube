import Comment from "./Comment";
import { commentsData } from "../utils/constants";

const CommentList = ({comments}) => {
    return (
        comments.map((comment,index)=>(
            <div>
                <Comment key={index} data={comment}/>
                <div className="pl-5 border-1 border-l-black ml-5">
                    <CommentList comments={comment.replies}/>
                </div>
            </div>
        ))
    )
}
const CommentContainer = () => {
    return <div>
        <h1 className="font-bold m-4 text-2xl">Comments</h1>
        <CommentList comments={commentsData}/>
    </div>
}
export default CommentContainer;