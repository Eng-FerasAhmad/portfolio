import { ReactElement, ReactNode } from 'react';
import { useParams } from 'react-router';
import Poster from 'src/library/blog-posts/Poster';
import { BlogPostContainer } from 'src/library/blog-posts/styles';

export default function BlogPosts(): ReactElement {
    const { postId } = useParams();

    const postSelector = (): ReactNode => {
        switch (postId) {
            case '1':
                return <Poster />;
            case '2':
                return <>ich bin 2</>;
            case '3':
                return <>ich bin 3</>;
            default:
                return <></>;
        }
    };

    return <BlogPostContainer>{postSelector()}</BlogPostContainer>;
}
