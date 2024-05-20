import { ReactElement } from 'react';
import {
    ArticleContainer,
    ArticleTitleWrapper,
    ArticleItemContainer,
} from './styles';
import useArticle from './useArticle';
import { AnimationFadeIn } from 'style/animation';

export default function Article(): ReactElement {
    const { viewModel } = useArticle();

    return (
        <ArticleContainer>
            <AnimationFadeIn duration={1}>
                {viewModel && (
                    <>
                        <ArticleTitleWrapper>
                            {viewModel.entityHeader}
                        </ArticleTitleWrapper>
                        <ArticleItemContainer>
                            Coming soon!
                        </ArticleItemContainer>
                    </>
                )}
            </AnimationFadeIn>
        </ArticleContainer>
    );
}
