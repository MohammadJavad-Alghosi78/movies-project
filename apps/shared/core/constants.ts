// Global
export const accountConstants = {
  apiKey: process.env.apiKey,
  sessionId: process.env.sessionId,
  accountId: process.env.accountId,
};

// Button component
export enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  WARNING = "warning",
}

// Rate component
export enum Place {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
}

// Header component
export const headerConstants = {
  placeholder: "Search by movie title",
};
