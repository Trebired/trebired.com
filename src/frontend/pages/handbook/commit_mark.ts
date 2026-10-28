type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const fixed = (value: number) => Math.round(value * 10) / 10;

function circle(radius: number): string {
  const points = Array.from({ length: 96 }, (_, index) => {
      const angle = (index / 96) * Math.PI * 2;
      return `${fixed(50 + Math.cos(angle) * radius)} ${fixed(50 + Math.sin(angle) * radius)}`;
  });
  return `M${points.join("L")}Z`;
}

const COMMIT = {
  line: { canvas: [100, 10], d: "M0 0H100V10H0Z", fit: "fill", viewBox: [100, 10] } satisfies Mark,
  ring: { canvas: [100, 100], d: circle(50) + circle(36), fit: "fill", rule: "evenodd", viewBox: [100, 100] } satisfies Mark,
};

export { COMMIT };
