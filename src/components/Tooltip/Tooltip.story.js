import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import Tooltip from './Tooltip';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

const stories = storiesOf('Tooltip.Tooltip', module);

const exampleAvatar = (
    <Avatar
        name="John Smith"
        src="https://randomuser.me/api/portraits/men/21.jpg"
        size="lg"
    />
);

const exampleTooltip = (
    <AvatarCard
        name="John Smith"
        jobRole="Sales Manager"
        team="Communication Team"
        avatar={exampleAvatar}
    />
);

stories.add(
    'Wrapper',
    storyWrapper(
        `
Tooltip wraps trigger elements and provides on hover tip functionality.

Put your trigger element as the Tooltip's child.

Then pass your tooltip element to the \`tooltip\` prop.

For example:

    const AvatarCard = (
        <AvatarCard
            name="John Smith"
            jobRole="Sales Manager"
            team="Communication Team"
            avatar={exampleAvatar}
        />
    );

    <Tooltip tooltip={AvatarCard}>
        <Avatar
            name="John Smith"
            src="https://randomuser.me/api/portraits/men/21.jpg"
            size="lg"
        />
    </Tooltip>
`,
        <Tooltip position="top-left" tooltip={exampleTooltip}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

stories.add(
    'Show',
    storyWrapper(
        'Pass the `showTooltip` prop to force show or hide a tooltip.',
        <Tooltip showTooltip tooltip={<TooltipBox>my tooltip</TooltipBox>}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

stories.add(
    'Position',
    storyWrapper(
        'Use the `position` prop to change the location of the tooltip.',
        <Tooltip position="top-center" tooltip={<TooltipBox>top center</TooltipBox>}>
            {exampleAvatar}
        </Tooltip>,
        <div style={{ display: 'inline-block', padding: '30px', border: '1px dashed #999' }}>
            <Tooltip
                position="top-left"
                tooltip={<TooltipBox>positioned top left</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px', marginBottom: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="bottom-left"
                tooltip={<TooltipBox>positioned bottom left</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px', marginBottom: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <br />
            <Tooltip
                position="top-right"
                tooltip={<TooltipBox>positioned top right</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px', marginBottom: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="bottom-right"
                tooltip={<TooltipBox>positioned bottom right</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px', marginBottom: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <br />
            <Tooltip
                position="top-center"
                tooltip={<TooltipBox>positioned top center</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="bottom-center"
                tooltip={<TooltipBox>positioned bottom center</TooltipBox>}
                showTooltip
            >
                {exampleAvatar}
            </Tooltip>
        </div>,
    ),
);