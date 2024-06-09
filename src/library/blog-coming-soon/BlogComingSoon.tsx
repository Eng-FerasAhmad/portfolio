import { ReactElement } from 'react';
import BlogNextArticle from 'src/library/blog-coming-soon/BlogNextArticle';
import {
    BlogComingSoonContainer,
    TitleWrapper,
} from 'src/library/blog-coming-soon/styles';
import { BlogViewModel } from 'types/BlogTypes';

interface Props {
    viewModel: BlogViewModel;
}

export default function BlogComingSoon({ viewModel }: Props): ReactElement {
    return (
        <BlogComingSoonContainer>
            <TitleWrapper>{viewModel.comingSoon.title}</TitleWrapper>
            {viewModel.comingSoon.articles.map((article) => {
                return (
                    <BlogNextArticle article={article} key={article.title} />
                );
            })}
        </BlogComingSoonContainer>
    );
}
