import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/movie/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="statsContainer">
                    <div>
                        <h5>Genre</h5>
                        <p>{post.genre}</p>
                    </div>
                    <div>
                        <h5>Rating</h5>
                        <p>{post.rating}/10</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}