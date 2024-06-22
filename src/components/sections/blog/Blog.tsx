import { ReactElement } from 'react';
import { ArticleItemContainer, BlogContainer } from './styles';
import useBlog from './useBlog';
import { AnimationFadeIn } from 'style/animation';

export default function Blog(): ReactElement {
    const { viewModel } = useBlog();

    return (
        <BlogContainer data-testid="blog">
            <AnimationFadeIn duration={1}>
                {viewModel && <ArticleItemContainer>blog</ArticleItemContainer>}
            </AnimationFadeIn>
        </BlogContainer>
    );
}
