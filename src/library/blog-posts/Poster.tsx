import { ReactElement } from 'react';
import { FrameContainer } from 'src/library/blog-posts/styles';

export default function Poster(): ReactElement {
    return <FrameContainer src={'/post.html'}></FrameContainer>;
}
