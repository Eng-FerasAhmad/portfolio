import { useState } from 'react';
import {
    ArticleContainer,
    ArticleTitleWrapper,
    ArticleItemContainer,
} from './styles';
import useArticle from './useArticle';

export default function Article(): JSX.Element {
    const { viewModel } = useArticle();
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    return (
        <ArticleContainer>
            <ArticleTitleWrapper onClick={clickHandler}>
                {viewModel?.entityHeader}
            </ArticleTitleWrapper>
            {show && <ArticleItemContainer>Coming soon!</ArticleItemContainer>}
        </ArticleContainer>
    );
}
