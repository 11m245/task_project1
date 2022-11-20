import { useState } from 'react';

export function LikeDisLikeButton() {
    let [like, setLike] = useState(0);
    let [dislike, setDislike] = useState(0);

    return (
        <div className='button-wrapper'>
            <button className='like' onClick={() => setLike(like + 1)}> <span className='like-symbol'>👍</span> {like}</button>
            <button className='dislike' onClick={() => setDislike(dislike + 1)}> <span className='dislike-symbol'> 👎</span>{dislike}</button>
        </div>
    );
}
