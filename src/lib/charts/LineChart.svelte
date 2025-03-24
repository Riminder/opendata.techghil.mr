<script lang="ts">
    import { onMount } from "svelte";
    import Chart, { type ChartConfiguration } from "chart.js/auto";
    import type { LineChartProps } from "$lib/types";

    let {xTitle, yTitle, xLabels, series, displayLegend = true}: LineChartProps = $props()

    let canvas: HTMLCanvasElement | null = null;
    let chart: Chart | null = null;

    const config: ChartConfiguration = {
        type: "line",
        data: {
            labels: xLabels,
            datasets: series
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
                        display: true,
                        text: xTitle,
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

<svelte:window on:resize={() => chart?.resize()} />
<canvas bind:this={canvas} class="w-full h-full"></canvas>
