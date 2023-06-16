import { describe, test, expect } from "vitest";

describe("Mathematic operations", () => {
    test("should add two numbers", () => {
        expect(1 + 2).toBe(3);
    });

    test("should return the same number", () => {
        expect(1).toBe(1)
    });

    test("should return error", () => {
        expect(1+5).toBe(6)
    });
});