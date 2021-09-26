import { Transform } from "class-transformer";

import { removeMask } from "./string";

export function Trim() {
  return Transform(({ value }) => {
    if (Array.isArray(value)) return value.map((item) => (typeof item === "string" ? item.trim() : item));
    return typeof value === "string" ? value.trim() : value;
  });
}

export function Email() {
  return Transform(({ value }) => {
    if (Array.isArray(value))
      return value.map((item) => (typeof item === "string" ? item.trim().toLowerCase() : value));
    return typeof value === "string" ? value.trim().toLowerCase() : value;
  });
}

export function RemoveMask() {
  return Transform(({ value }) => {
    if (Array.isArray(value)) return value.map((item) => (typeof item === "string" ? removeMask(item) : item));
    return typeof value === "string" ? removeMask(value) : value;
  });
}

export function ToInt() {
  return Transform(({ value }) => {
    if (Array.isArray(value)) return value.map((item) => (typeof item === "number" ? Math.trunc(item * 100) : item));
    return typeof value === "number" ? Math.trunc(value * 100) : value;
  });
}

export function RemoveBearer() {
  return Transform(({ value }) => {
    if (typeof value === "string") {
      value = value.trim();
      if (/\s/g.test(value)) {
        const [, token] = value.split(" ");
        return token;
      }

      return value;
    }

    return value;
  });
}
