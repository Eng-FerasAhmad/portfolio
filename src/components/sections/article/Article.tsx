import { ReactElement } from 'react';
import {
    ArticleContainer,
    ArticleTitleWrapper,
    ArticleItemContainer,
} from './styles';
import useArticle from './useArticle';

export default function Article(): ReactElement {
    const { viewModel } = useArticle();

    return (
        <ArticleContainer>
            <ArticleTitleWrapper>{viewModel?.entityHeader}</ArticleTitleWrapper>
            <ArticleItemContainer>Coming soon!</ArticleItemContainer>
        </ArticleContainer>
    );
}
