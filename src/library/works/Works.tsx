import { ReactElement } from 'react';
import BoxBuild from 'src/library/works/box-build/BoxBuild';
import BoxDesign from 'src/library/works/box-design/BoxDesign';
import BoxDevelop from 'src/library/works/box-develop/BoxDevelop';
import BoxKnow from 'src/library/works/box-know/BoxKnow';
import BoxTech from 'src/library/works/box-tech/BoxTech';
import BoxTesting from 'src/library/works/box-test/BoxTesting';
import {
    ContentWrapper,
    TitleWrapper,
    WorksContainer,
} from 'src/library/works/styles';
import { WorksBox } from 'src/library/works/types';
import { TechstackViewModel } from 'types/techstackTypes';

interface Props {
    viewModel: TechstackViewModel;
    isDarkTheme: boolean;
    isSmallScreen: boolean;
}

export default function Works({
    viewModel,
    isDarkTheme,
    isSmallScreen,
}: Props): ReactElement {
    return (
        <WorksContainer data-testid="works">
            <TitleWrapper data-testid="works-title">
                {viewModel.worksTitle}
            </TitleWrapper>
            <ContentWrapper data-testid="works-content">
                <BoxDevelop
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.DEVELOP]}
                />
                <BoxDesign
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.DESIGN]}
                />
                <BoxBuild
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.BUILD]}
                />
                <BoxTesting
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.TEST]}
                />
                <BoxTech
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.TECH]}
                />
                <BoxKnow
                    isDarkTheme={isDarkTheme!}
                    isSmallScreen={isSmallScreen}
                    boxItem={viewModel.works[WorksBox.KNOW]}
                />
            </ContentWrapper>
        </WorksContainer>
    );
}
