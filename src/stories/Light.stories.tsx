import { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

enum ColorsState {
    Red,
    Yellow,
    Green,
}

const meta: Meta<typeof Light> = {
  
  component: Light,
  tags: ['autodocs'],
  title: "Light",
  argTypes: {
    variant: {
      options: ColorsState,
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
 
};


export const Red: Story = {
args: {
      variant: 'Red',
   
    },
  };
  export const Yellow: Story = {
    args: {
      variant: 'Yellow'
    },
  };
  export const Green: Story = {
    args: {
      variant: 'Green'
    },
  };