import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppbarAI } from "@cx/components";

const meta: Meta<typeof AppbarAI> = {
  title: "cx/AppbarAI",
  component: AppbarAI as never,
  argTypes: {
    variant: { control: "select", options: ["Home", "Chat"] },
    label: { control: "text" },
    onBarcode: { control: false },
    onCart: { control: false },
    onMenu: { control: false },
    onBack: { control: false },
    onLabel: { control: false },
    onHistory: { control: false },
    onAI: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Home",
    label: "Label",
  },
};
export default meta;
type Story = StoryObj<typeof AppbarAI>;

export const Home: Story = {
  args: { variant: "Home" },
};

export const Chat: Story = {
  args: { variant: "Chat", label: "대화 제목" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px", background: "linear-gradient(135deg,#3617ce,#5f6afd)" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#fff" }}>Home — 홈 진입(반투명, barcode/cart/menu)</p>
        <AppbarAI variant="Home" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#fff" }}>Chat — 대화/AI(back+label / history+ai)</p>
        <AppbarAI variant="Chat" label="대화 제목" />
      </div>
    </div>
  ),
};
