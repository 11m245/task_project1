import { LikeDisLikeButton } from './LikeDisLikeButton';
export function MovieComponent({ image_url: image_u, title, rating, summary }) {
    return (
        <div className="movie-card">
            <img src={image_u} alt="movie" />
            <div className='content-wrapper'>
                <div className="line-w">
                    <h3 className='title'>{title}.</h3>
                    <div className="rating-w">
                        <img className='star' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png" alt="star" />
                        <h3 className='rating'>{rating}</h3>
                    </div>
                </div>
                <LikeDisLikeButton />
                <p className='summary'>{summary}</p>
            </div>
        </div>
    );
}
