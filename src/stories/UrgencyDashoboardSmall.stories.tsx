import { Meta, StoryObj } from "@storybook/react";

import UrgencyDashboardSmall from "../Components/UrgencyDashboardSmall";
const meta: Meta<typeof UrgencyDashboardSmall> = {
  component: UrgencyDashboardSmall,
  tags: ["autodocs"],
  title: "Organisme/Urgency Dashboard Small",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasisVerzorging: Story = {
  args: {},
};
