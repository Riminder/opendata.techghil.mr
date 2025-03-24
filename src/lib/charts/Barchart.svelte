<script lang="ts">
    import { onMount } from "svelte";
    import Chart, { type ChartConfiguration } from "chart.js/auto";
    import type { BarChartProps } from "$lib/types";

    let { xTitle, yTitle, xLabels, series, displayLegend = true }: BarChartProps = $props();
    let canvas: HTMLCanvasElement | null = null;
    let chart: Chart | null = null;

    const config: ChartConfiguration = {
        type: "bar",
        data: {
            labels: xLabels,
            datasets: series,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: displayLegend
                }
            },
            scales: {
                x: {
                    title: {
                        display: !!xTitle,
                        text: xTitle ?? "",
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yTitle,
                    },
                },
            },
        },
    };

    onMount(() => {
        if (canvas) {
            chart = new Chart(canvas, config);
        }
    });
</script>

<svelte:window onresize={() => chart?.resize()} />
<canvas bind:this={canvas} class="w-full h-full"></canvas>
