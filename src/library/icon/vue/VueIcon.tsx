import * as React from 'react';
import { SvgTechContainer } from '../../icon-selector/style';

export default function VueIcon(
    props: React.SVGProps<SVGSVGElement>
): JSX.Element {
    return (
        <SvgTechContainer
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
            }}
            {...props}
        >
            <rect
                id="Icons"
                x={-512}
                y={-128}
                width={1280}
                height={800}
                style={{
                    fill: 'none',
                }}
            />
            <g id="Icons1">
                <g id="Strike" />
                <g id="H1" />
                <g id="H2" />
                <g id="H3" />
                <g id="list-ul" />
                <g id="hamburger-1" />
                <g id="hamburger-2" />
                <g id="list-ol" />
                <g id="list-task" />
                <g id="trash" />
                <g id="vertical-menu" />
                <g id="horizontal-menu" />
                <g id="sidebar-2" />
                <g id="Pen" />
                <g id="Pen1" />
                <g id="clock" />
                <g id="external-link" />
                <g id="hr" />
                <g id="info" />
                <g id="warning" />
                <g id="plus-circle" />
                <g id="minus-circle" />
                <g id="vue">
                    <path
                        d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z"
                        style={{
                            fill: '#435466',
                        }}
                    />
                    <path
                        d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z"
                        style={{
                            fill: '#4dba87',
                        }}
                    />
                </g>
                <g id="cog" />
                <g id="logo" />
                <g id="radio-check" />
                <g id="eye-slash" />
                <g id="eye" />
                <g id="toggle-off" />
                <g id="shredder" />
                <g id="spinner--loading--dots-" />
                <g id="react" />
                <g id="check-selected" />
                <g id="turn-off" />
                <g id="code-block" />
                <g id="user" />
                <g id="coffee-bean" />
                <g id="coffee-beans">
                    <g id="coffee-bean1" />
                </g>
                <g id="coffee-bean-filled" />
                <g id="coffee-beans-filled">
                    <g id="coffee-bean2" />
                </g>
                <g id="clipboard" />
                <g id="clipboard-paste" />
                <g id="clipboard-copy" />
                <g id="Layer1" />
            </g>
        </SvgTechContainer>
    );
}
