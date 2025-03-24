<script lang="ts">
    import { onMount } from "svelte";
    import { ViolinChart } from "@sgratzl/chartjs-chart-boxplot";
    import { type ChartConfiguration } from "chart.js";
    import { type ViolinChartProps } from "$lib/types";

    let { xTitle, yTitle, xLabels, series, yMin }: ViolinChartProps = $props();

    let canvas: HTMLCanvasElement | null = null;
    let chart: ViolinChart | null = null;

    export function randomValues(
        count: number,
        min: number,
        max: number,
        extra: number[] = [],
    ): number[] {
        const delta = max - min;
        return [
            ...Array.from({ length: count }).map(
                () => Math.random() * delta + min,
            ),
            ...extra,
        ];
    }

    const config: ChartConfiguration<"violin", number[][], string> = {
        type: "violin",
        data: {
            labels: xLabels,
            datasets: series.map(s =>  {
                return {
                    label: s.label,
                    data: [
                        s.data
                    ]
                }
            })
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: !!yTitle,
                        text: yTitle ?? "",
                    },
                    min: yMin
                },
            },
        },
    };

    onMount(() => {
        if (canvas) {
            chart = new ViolinChart(canvas, config);
        }
    });
</script>

<svelte:window onresize={() => chart?.resize()} />
<canvas bind:this={canvas} class="w-full h-full"></canvas>
