import { ReactElement } from 'react';
import BlogArticle from 'src/library/blog-publish/BlogArticle';
import {
    ArticleWrapper,
    BlogPublishContainer,
    TitleWrapper,
} from 'src/library/blog-publish/styles';
import { BlogViewModel } from 'types/BlogTypes';

interface Props {
    viewModel: BlogViewModel;
}

export default function BlogPublish({ viewModel }: Props): ReactElement {
    return (
        <BlogPublishContainer>
            <TitleWrapper>{viewModel.publish.title}</TitleWrapper>
            <ArticleWrapper>
                {viewModel.publish.articles.map((article) => {
                    return (
                        <BlogArticle article={article} key={article.title} />
                    );
                })}
            </ArticleWrapper>
        </BlogPublishContainer>
    );
}
