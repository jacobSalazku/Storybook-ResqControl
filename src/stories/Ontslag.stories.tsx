import { Meta, StoryObj } from "@storybook/react";

import Ontslag from "../Pages/Ontslag";

const meta: Meta<typeof Ontslag> = {
  component: Ontslag,
  tags: ["autodocs"],
  title: "Pages/Ontslag",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
