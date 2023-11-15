import { Meta, StoryObj } from "@storybook/react";
import Triage from "../Pages/Triage";

const meta: Meta<typeof Triage> = {
  component: Triage,
  tags: ["autodocs"],
  title: "Pages/Triage",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasisVerzorging: Story = {
  args: {},
};
