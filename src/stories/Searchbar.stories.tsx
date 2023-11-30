import { Meta, StoryObj } from '@storybook/react';
import Searchbar from '../Components/Searchbar';

const meta: Meta<typeof Searchbar> = {
    component: Searchbar,
    tags: ['autodocs'],
    title: 'Fundaments/Searchbar',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchbarMedicijnen: Story = {
    args: {
        borderColor: '#497DAE',
        width: 130,
        height: 40,
        borderRadius: 'rounded-full',
        placeholder: 'Search',
    },
};
