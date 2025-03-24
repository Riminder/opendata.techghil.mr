<script lang="ts">
    import { onMount } from "svelte";
    import Chart, { type ChartConfiguration } from "chart.js/auto";
    import type { BarChartProps } from "$lib/types";

    let { xTitle, yTitle, xLabels, series, xMax, yMax }: BarChartProps = $props();
    let canvas: HTMLCanvasElement | null = null;
    let chart: Chart | null = null;
    
    $effect(() => {
        series;
        xLabels;
        if (chart) {
            chart.data.datasets = series;
          
            chart.data.yLabels = xLabels;
            chart.update();
        }
    })

    const config: ChartConfiguration = {
        type: "bar",
        data: {
            labels: xLabels ?? [""],
            datasets: series,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y", // Flips the bar chart to horizontal
            scales: {
                x: {
                    beginAtZero: true, // Ensure the x-axis starts from zero
                    title: {
                        display: true,
                        text: yTitle, // Swap xTitle with yTitle for correct labeling
                    },
                    max: xMax ? xMax: undefined
                },
                y: {
                    title: {
                        display: !!xTitle,
                        text: xTitle ?? "", // Swap yTitle with xTitle
                    },
                },
            },
            plugins: {
                legend: {
                    position: "top",
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
