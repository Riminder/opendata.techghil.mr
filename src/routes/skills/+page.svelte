<script lang="ts">
    import BarChart from "$lib/charts/Barchart.svelte";
    import HorizontalBarChart from "$lib/charts/HorizontalBarChart.svelte";
    import DoughnutChart from "$lib/charts/DoughnutChart.svelte";
    import LineChart from "$lib/charts/LineChart.svelte";
    import CustomViolinChart from "$lib/charts/CustomViolinChart.svelte";

    import ageVsFamily from "./mock_ageVsFamily.json";
    import genderVsFamily from "./mock_genderVsFamily.json";
    import seekerVsEntrepreneur from "./mock_seekerVsEntrepreneur.json";
    import graduationYear from "./mock_graduationYear.json";
    import educationWorkGap from "./mock_educationWorkGap.json";
    import genderVsAge from "./mock_genderVsAge.json";

    let selectedFamilyIndex = $state(0);
</script>

<div
    class="w-full flex flex-col items-center justify-center sm:px-16 xl:px-32 py-16"
>
    <div class="flex flex-col items-center w-full h-full space-y-40">
        <div
            class="flex flex-col items-center w-full h-[100vh] md:h-[70vh] xl:h-[60vh] space-y-8"
        >
            <h3 id="age-vs-category" class="text-2xl text-gray-600">
                Répartition des âges des demandeurs d'emploi
            </h3>
            <div
                class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
            >
                <label for="family">Sélectionnez une famille de métiers</label>
                <select
                    id="family"
                    class="rounded-md border border-gray-200 px-6 py-2 w-full sm:w-auto overflow-auto"
                    bind:value={selectedFamilyIndex}
                >
                    {#each ageVsFamily.labels as label, index}
                        <option value={index} class="whitespace-normal"
                            >{label}</option
                        >
                    {/each}
                </select>
            </div>

            <HorizontalBarChart
                yTitle="% de la catégorie"
                series={ageVsFamily.datasets.map((s, i) => {
                    return {
                        data: [s.data[selectedFamilyIndex]],
                        label: s.label + " ans",
                    };
                })}
            />
        </div>
        <div
            class="flex flex-col items-center w-full max-h-[50vh] space-y-8 pt-16"
        >
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Répartition des genres des demandeurs d'emploi
            </h3>
            <BarChart
                yTitle="% de la catégorie"
                xLabels={genderVsFamily.labels}
                series={genderVsFamily.datasets.map((s) => {
                    return {
                        label: s.label == "male" ? "Homme" : "Femme",
                        data: s.data,
                        backgroundColor:
                            s.label.toLowerCase() == "male"
                                ? "rgb(130,150,230)"
                                : "rgb(230,150,150)",
                    };
                })}
            />
        </div>
        <div class="flex flex-col items-center w-full max-h-[50vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Demandeurs d'emploi et porteurs de projet
            </h3>
            <DoughnutChart
                xLabels={seekerVsEntrepreneur.datasets.map((d) => d.label)}
                series={[
                    {
                        label: "Nombre de personnes",
                        data: seekerVsEntrepreneur.datasets.map((d) => d.value),
                    },
                ]}
            />
        </div>
        <div class="flex flex-col items-center w-full max-h-[50vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Répartition des années de diplômation
            </h3>
            <LineChart
                xTitle="Année"
                yTitle="Nombre de personnes"
                xLabels={graduationYear.map((y) => y.range)}
                displayLegend={false}
                series={[
                    {
                        label: "Nombre de personnes",
                        data: graduationYear.map((y) => y.amount),
                        fill: false,
                        radius: 2,
                        borderWidth: 2,
                        borderColor: "rgb(200,40,150)",
                        backgroundColor: "rgb(200,40,150)",
                    },
                ]}
            />
        </div>
        <div class="flex flex-col items-center w-full max-h-[50vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Ecart entre le diplôme et le premier emploi
            </h3>
            <BarChart
                yTitle="Nombre de personnes"
                xLabels={educationWorkGap.map((r) => r.range)}
                displayLegend={false}
                series={[
                    {
                        label: "Nombre de personnes",
                        data: educationWorkGap.map((r) => r.amount),
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.7)",
                            "rgba(75, 192, 192, 0.7)",
                            "rgba(255, 205, 86, 0.7)",
                            "rgba(54, 162, 235, 0.7)",
                        ],
                    },
                ]}
            />
        </div>
        <div class="flex flex-col items-center w-full max-h-[50vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Pyramide des âges
            </h3>
            <CustomViolinChart
                xLabels={[""]}
                yTitle="Âge"
                yMin={10}
                series={genderVsAge.map((s) => {
                    return {
                        label: s.label,
                        data: s.data,
                    };
                })}
            />
        </div>
    </div>
</div>
