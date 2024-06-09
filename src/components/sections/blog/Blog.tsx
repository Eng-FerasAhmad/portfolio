import { ReactElement } from 'react';
import { ArticleItemContainer, BlogContainer, Divider } from './styles';
import useBlog from './useBlog';
import BlogComingSoon from 'src/library/blog-coming-soon/BlogComingSoon';
import BlogPublish from 'src/library/blog-publish/BlogPublish';
import { AnimationFadeIn } from 'style/animation';

export default function Blog(): ReactElement {
    const { viewModel } = useBlog();

    return (
        <BlogContainer data-testid="blog">
            <AnimationFadeIn duration={1}>
                {viewModel && (
                    <ArticleItemContainer>
                        <BlogPublish viewModel={viewModel} />
                        <Divider />
                        <BlogComingSoon viewModel={viewModel} />
                    </ArticleItemContainer>
                )}
            </AnimationFadeIn>
        </BlogContainer>
    );
}
