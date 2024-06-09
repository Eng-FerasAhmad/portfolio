import { ReactElement } from 'react';
import { ComingArticles } from 'types/BlogTypes';

interface Props {
    article: ComingArticles;
}

export default function BlogNextArticle({ article }: Props): ReactElement {
    return (
        <div>
            <div>{article.title}</div>
        </div>
    );
}
