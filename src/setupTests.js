import "@testing-library/jest-dom";
import Swal from "sweetalert2";

// Polyfill para TextEncoder
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock do Swal.fire
jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));