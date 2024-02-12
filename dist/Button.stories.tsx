import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';
import './tailwind.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [withTests({ results:results })],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    jest: ['Button.test.tsx']
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 /*  argTypes: {
    backgroundColor: { control: 'color' },
  }, */
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: <XMarkIcon className="w-6 h-6 stroke-2" />,
    backgroundColor: "bg-[linear-gradient(170deg,_#FBFBFD,_#607d8b0d_27%,_#FBFBFD)]",
    className:"flex items-center text-primary text-sm font-bold shadow rounded border-brdrbtn1 h-11 px-3 outline-none"
  }
};

/* export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}; */
