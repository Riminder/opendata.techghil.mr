import type { ViolinDataPoint } from "@sgratzl/chartjs-chart-boxplot"

type BarChartProps = {
    xTitle?: string
    yTitle: string
    xLabels?: string[]
    series: {
        label: string
        data: number[]
        backgroundColor?: string | string[]
    }[]
    xMax?: number
    yMax?: number
    displayLegend?: boolean
}

type LineChartProps = {
    xTitle: string
    yTitle: string
    xLabels: string[]
    displayLegend?: boolean
    series: {
        label: string
        data: number[]
        backgroundColor?: string
        fill: boolean
        borderWidth: number,
        radius: number,
        borderColor: string,
    }[]
}


type CircleChartProps = {
    xLabels: string[]
    series: {
        label: string
        data: number[]
        backgroundColor?: string
    }[]
}

type ViolinChartProps = {
    xTitle?: string
    yTitle?: string
    xLabels: string[]
    yMin?: number
    series: {
        label: string
        data: number[]
    }[]
}