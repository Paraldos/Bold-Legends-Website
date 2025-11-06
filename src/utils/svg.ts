export default class SVG {
  static star(): string {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9Z"
        />
      </svg>
    `;
  }

  static blackHole(): string {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g stroke-width="1.5">
          <circle cx="12" cy="12" r="2" />
          <path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12" />
          <path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12" />
          <path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3" />
          <path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3" />
        </g>
      </svg>
    `;
  }
}
