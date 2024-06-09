import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { routerPath } from 'router/constant';
import { BlogArticleContainer } from 'src/library/blog-publish/styles';
import { PublishArticles } from 'types/BlogTypes';

interface Props {
    article: PublishArticles;
}

export default function BlogArticle({ article }: Props): ReactElement {
    const navigate = useNavigate();

    const clickHandler = (): void => {
        navigate(`${routerPath.blog}/post/${article.id}`);
    };

    return (
        <BlogArticleContainer onClick={clickHandler}>
            <div>{article.title}</div>
        </BlogArticleContainer>
    );
}
