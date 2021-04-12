import { html, css, LitElement, property } from 'lit-element';

import { create, cssomSheet } from 'twind'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet: sheet, preflight: true })

export class EpivizTest extends LitElement {
  static styles = [sheet.target,
    css`
    :host {
      display: block;
      padding: 25px;
      color: var(--epiviz-test-text-color, #000);
    }`
    ];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <div class="${tw`font-sans`}">
      <h2 class="${tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}">${this.title} Nr. ${this.counter}!</h2>
      <button class="${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}" @click=${this.__increment}>increment</button>
    </div>
    `;
  }
}
