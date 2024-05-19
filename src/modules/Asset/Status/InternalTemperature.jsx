import { Box, Stack, Typography } from '@mui/material';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import React, { useLayoutEffect } from 'react';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export const InternalTemperature = () => {
    useLayoutEffect(() => {
        let root = am5.Root.new('chartdiv');

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: 'panX',
                wheelY: 'zoomX',
                pinchZoomX: true,
            })
        );

        chart.get('colors').set('step', 3);

        const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
        cursor.lineY.set('visible', false);
        cursor.lineX.setAll({
            strokeWidth: 30,
            strokeDasharray: 0,
            stroke: '#0560FD',
            opacity: 0.1,
        });

        const xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.3,
                baseInterval: {
                    timeUnit: 'month',
                    count: 1,
                },
                renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        const series = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: 'Series 1',
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value1',
                valueXField: 'date',
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{valueX}: {valueY}',
                }),
            })
        );

        series.bullets.push(function (root) {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    radius: 4,
                    fill: '#fff',
                    stroke: series.get('stroke'),
                    strokeWidth: 2,
                }),
            });
        });

        series.strokes.template.setAll({
            strokeWidth: 2,
        });
        series.setAll({
            stroke: '#0560FD',
        });

        series.get('tooltip').get('background').set('fillOpacity', 0.5);

        const series2 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: 'Series 2',
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value2',
                valueXField: 'date',
            })
        );
        series2.strokes.template.setAll({
            strokeWidth: 2,
        });
        series2.setAll({
            stroke: '#FB757A',
        });

        root.dateFormatter.setAll({
            dateFormat: 'MMMM',
            dateFields: ['valueX'],
        });

        const data = [
            {
                date: new Date(2024, 1, 12).getTime(),
                value1: 50,
                value2: 48,
            },
            {
                date: new Date(2024, 2, 13).getTime(),
                value1: 53,
                value2: 51,
            },
            {
                date: new Date(2024, 5, 14).getTime(),
                value1: 56,
                value2: 58,
            },
            {
                date: new Date(2024, 8, 15).getTime(),
                value1: 52,
                value2: 53,
            },
            {
                date: new Date(2024, 9, 16).getTime(),
                value1: 48,
                value2: 44,
            },
            {
                date: new Date(2024, 10, 17).getTime(),
                value1: 47,
                value2: 42,
            },
            {
                date: new Date(2024, 11, 18).getTime(),
                value1: 59,
                value2: 55,
            },
        ];

        series.data.setAll(data);
        series2.data.setAll(data);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <Box>
            <Stack alignItems={'flex-end'}>
                <Stack direction={'row'} gap={3} mb={1}>
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box width={8} height={8} borderRadius={'50%'} bgcolor={'secondary.main'} />
                        <Typography fontSize={12}>Minimum</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box width={8} height={8} borderRadius={'50%'} bgcolor={'green.main'} />
                        <Typography fontSize={12}>Average</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box width={8} height={8} borderRadius={'50%'} bgcolor={'red.main'} />
                        <Typography fontSize={12}>Maximum</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack gap={4} p={3} border={'1px solid #EBEDF0'} borderRadius={'12px'}>
                <Typography fontSize={20} fontWeight={500}>
                    Internal Temperature
                </Typography>
                <Box height={300} mb={3}>
                    <Box
                        sx={{
                            height: '100%',
                        }}
                        id={'chartdiv'}
                    />
                </Box>
            </Stack>
        </Box>
    );
};
