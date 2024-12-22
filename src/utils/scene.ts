import { Vector3 } from 'three';

interface BuildingData {
  position: Vector3;
  width: number;
  height: number;
}

export function generateBuildingGrid(rows: number, cols: number): BuildingData[] {
  const buildings: BuildingData[] = [];
  const spacing = 2;
  const offset = ((rows - 1) * spacing) / 2;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = i * spacing - offset;
      const z = j * spacing - offset;
      const height = Math.random() * 2 + 1;
      const width = Math.random() * 0.3 + 0.4;

      buildings.push({
        position: new Vector3(x, height / 2, z),
        width,
        height,
      });
    }
  }

  return buildings;
}