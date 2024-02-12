import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { withTests } from '@storybook/addon-jest';
//import results from '../../.jest-test-results.json';
import './tailwind.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  //decorators: [withTests({ results:results })],
  parameters: {
    layout: 'centered',
    jest: ['Button.test.tsx']
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: <XMarkIcon className="w-6 h-6 stroke-2" />,
    backgroundColor: "bg-[linear-gradient(170deg,_#FBFBFD,_#607d8b0d_27%,_#FBFBFD)]",
    className:"flex items-center text-primary text-sm font-bold shadow rounded border-brdrbtn1 h-11 px-3 outline-none"
  }
};

