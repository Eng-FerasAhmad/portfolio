import { ReactElement, useContext } from 'react';
import { BoxDetailsContainer, TechstackContainer } from './styles';
import useTechstack from 'components/sections/techstack/useTechstack';
import { ThemeContext } from 'context/ThemeContext';
import BoxBuildContent from 'src/library/works/box-build/BoxBuildContent';
import BoxDesignContent from 'src/library/works/box-design/BoxDesignContent';
import BoxDevelopContent from 'src/library/works/box-develop/BoxDevelopContent';
import BoxKnowContent from 'src/library/works/box-know/BoxKnowContent';
import BoxTechContent from 'src/library/works/box-tech/BoxTechContent';
import BoxTestingContent from 'src/library/works/box-test/BoxTestingContent';
import { WorksBox } from 'src/library/works/types';
import Works from 'src/library/works/Works';

export default function Techstack(): ReactElement {
    const { viewModel } = useTechstack();
    const { isDarkTheme, isSmallScreen } = useContext(ThemeContext);

    return (
        <TechstackContainer data-testid="techstack">
            {viewModel && (
                <>
                    <Works
                        viewModel={viewModel!}
                        isSmallScreen={isSmallScreen}
                        isDarkTheme={isDarkTheme!}
                    />
                    <BoxDetailsContainer data-testid="techstack-box-details">
                        <BoxDevelopContent
                            works={viewModel.works[WorksBox.DEVELOP]}
                            isDarkTheme={isDarkTheme!}
                        />
                        <BoxDesignContent
                            works={viewModel.works[WorksBox.DESIGN]}
                            isDarkTheme={isDarkTheme!}
                        />
                        <BoxBuildContent
                            works={viewModel.works[WorksBox.BUILD]}
                            isDarkTheme={isDarkTheme!}
                        />
                        <BoxTestingContent
                            works={viewModel.works[WorksBox.TEST]}
                            isDarkTheme={isDarkTheme!}
                        />
                        <BoxTechContent
                            works={viewModel.works[WorksBox.TECH]}
                            isDarkTheme={isDarkTheme!}
                        />
                        <BoxKnowContent
                            works={viewModel.works[WorksBox.KNOW]}
                            isDarkTheme={isDarkTheme!}
                        />
                    </BoxDetailsContainer>
                </>
            )}
        </TechstackContainer>
    );
}
