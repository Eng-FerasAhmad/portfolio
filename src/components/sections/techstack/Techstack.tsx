import { ReactElement } from 'react';
import { BoxDetailsContainer, TechstackContainer } from './styles';
import useTechstack from 'components/sections/techstack/useTechstack';
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

    return (
        <TechstackContainer data-testid="techstack">
            {viewModel && (
                <>
                    <Works viewModel={viewModel!} />
                    <BoxDetailsContainer>
                        <BoxDevelopContent
                            works={viewModel.works[WorksBox.DEVELOP]}
                        />
                        <BoxDesignContent
                            works={viewModel.works[WorksBox.DESIGN]}
                        />
                        <BoxBuildContent
                            works={viewModel.works[WorksBox.BUILD]}
                        />
                        <BoxTestingContent
                            works={viewModel.works[WorksBox.TEST]}
                        />
                        <BoxTechContent
                            works={viewModel.works[WorksBox.TECH]}
                        />
                        <BoxKnowContent
                            works={viewModel.works[WorksBox.KNOW]}
                        />
                    </BoxDetailsContainer>
                </>
            )}
        </TechstackContainer>
    );
}
