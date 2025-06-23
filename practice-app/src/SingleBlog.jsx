import { useParams } from "react-router";
function SingleBlog() {
    const params = useParams();
    return (
        <>
            <h1>{params.category} - { params.id }</h1>
        </>
    );
}

export default SingleBlog