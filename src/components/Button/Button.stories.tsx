// src/components/Button.stories.tsx
// src/components/Button.stories.tsx

// To this:
import type { Meta, StoryObj } from '@storybook/react-vite';

// ... (rest of the file is the same)
import { Button } from './Button';

// This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas.
        layout: 'centered',
    },
    // This argTypes configuration will allow you to control props using Storybook's UI
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Button',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// The "Primary" story
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        onClick: () => alert('Primary Button Clicked!'),
    },
};

// Example of a second story for the same component
export const Disabled: Story = {
    args: {
        ...Primary.args, // Inherit args from the Primary story
        children: 'Disabled Button',
        disabled: true,
    }
}