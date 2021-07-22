export const api = (endpoint: string) => `${process.env.REACT_APP_API}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
