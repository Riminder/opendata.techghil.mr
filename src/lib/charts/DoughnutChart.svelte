<script lang="ts">
    import { onMount } from "svelte";
    import Chart, { type ChartConfiguration } from "chart.js/auto";
    import type { CircleChartProps } from "$lib/types";
  
    let canvas: HTMLCanvasElement | null = null;
    let chart: Chart | null = null;

    let { xLabels, series }: CircleChartProps = $props();

    const config: ChartConfiguration = {
        type: "pie",
        data: {
            labels: xLabels,
            datasets: series.map(s => {
                return {...s,
                    borderWidth: 0
                }
            })
        },
    };

    onMount(() => {
        if (canvas) {
            chart = new Chart(canvas, config);
        }
    });
</script>

<svelte:window onresize={() => chart?.resize()}/>
<canvas bind:this={canvas} class="w-full h-full"></canvas>
  