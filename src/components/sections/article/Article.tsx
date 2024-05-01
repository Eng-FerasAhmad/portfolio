import { useState } from 'react';
import {
    ArticleContainer,
    ArticleTitleWrapper,
    ArticleItemContainer,
} from './styles';

export default function Article(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    return (
        <ArticleContainer>
            <ArticleTitleWrapper onClick={clickHandler}>
                Articles
            </ArticleTitleWrapper>
            {show && <ArticleItemContainer>Coming soon!</ArticleItemContainer>}
        </ArticleContainer>
    );
}
