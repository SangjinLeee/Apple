import { html } from 'lit';
import '../src/apple-clone.js';

export default {
  title: 'AppleClone',
  component: 'apple-clone',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <apple-clone
      style="--apple-clone-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </apple-clone>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
