import React from 'react';
import { Line } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleTime, scaleLinear } from '@visx/scale';
import { curveMonotoneX } from '@visx/curve';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { useMarketData } from '../../hooks/useMarketData';

const width = 800;
const height = 400;
const margin = { top: 40, right: 40, bottom: 40, left: 60 };

export default function MarketChart() {
  const { data, isLoading } = useMarketData();
  
  if (isLoading) {
    return <div className="h-[400px] bg-gray-50 rounded-lg animate-pulse" />;
  }

  // Create scales
  const xScale = scaleTime({
    domain: [data[0].date, data[data.length - 1].date],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.value))],
    range: [height - margin.bottom, margin.top],
  });

  return (
    <svg width={width} height={height}>
      <Group>
        <GridRows
          scale={yScale}
          width={width - margin.left - margin.right}
          left={margin.left}
          strokeDasharray="1,3"
          stroke="rgba(0,0,0,0.1)"
        />
        <GridColumns
          scale={xScale}
          height={height - margin.top - margin.bottom}
          top={margin.top}
          strokeDasharray="1,3"
          stroke="rgba(0,0,0,0.1)"
        />
        <Line
          data={data}
          x={d => xScale(d.date)}
          y={d => yScale(d.value)}
          stroke="black"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
        <AxisBottom
          top={height - margin.bottom}
          scale={xScale}
          stroke="black"
          tickStroke="black"
          tickLabelProps={() => ({
            fill: 'black',
            fontSize: 12,
            textAnchor: 'middle',
          })}
        />
        <AxisLeft
          left={margin.left}
          scale={yScale}
          stroke="black"
          tickStroke="black"
          tickLabelProps={() => ({
            fill: 'black',
            fontSize: 12,
            textAnchor: 'end',
            dx: -4,
          })}
        />
      </Group>
    </svg>
  );
}