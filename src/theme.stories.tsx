import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "react-aria-components";


const meta = {
    title: 'ThemeTest',
    component: ThemeTest,
} satisfies Meta<typeof ThemeTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {}


function ThemeTest() {
    return <div>
        <Heading level={1}>H1 Header</Heading>
        <Heading level={2}>H1 Header</Heading>
        <Heading level={3}>H1 Header</Heading>
        <Heading level={4}>H1 Header</Heading>
        <Heading level={5}>H1 Header</Heading>
        <Heading level={6}>H1 Header</Heading>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos dolor quos ratione asperiores quis et autem vitae distinctio similique recusandae neque labore nobis, illum beatae quas veritatis maiores numquam!</p>
    </div>
}
