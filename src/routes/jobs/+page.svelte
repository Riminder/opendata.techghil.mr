<script lang="ts">
    import HorizontalBarChart from "$lib/charts/HorizontalBarChart.svelte";
    import Barchart from "$lib/charts/Barchart.svelte";
    import Map from "$lib/charts/Map.svelte";

    import gpsCoordCandidates from "./gpsCoordCandidates.json"
    import gpsCoordOffers from  "./gpsCoordOffers.json"
    import regions from "./regionCount.json"
    import agenceVsFamily from "./agenceVsFamily.json"
    
    let selectedAgency = $state(agenceVsFamily.datasets[0].label ?? "None")
</script>

<div
    class="w-full flex flex-col items-center justify-center sm:px-16 xl:px-32 py-16"
>
    <div class="flex flex-col items-center w-full h-full space-y-24">
        
        <div class="flex flex-col items-center w-full h-[90vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Localisation des demandeurs d'emploi
            </h3>
            <Map
                maxZoom = {6}
                minZoom = {3}
                zoom= {5}

                markers={gpsCoordCandidates.filter(c => c.num_points > 2).map(c => {
                    return {
                        coords: [c.center.lng, c.center.lat],
                        number: c.num_points
                    }
                })}
            />
        </div>
        <div class="flex flex-col items-center w-full h-[70vh] space-y-8 pb-16">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
                Localisation des demandeurs d'emploi par région
            </h3>
            <Barchart
                yTitle="Nombre de demandeurs d'emplois"
                xLabels={["Région"]}
                series={Object.entries(regions).map(([key, value]) => {
                    return { label: key, data: [value] }; 
                })}
            />
        </div>
        <div class="flex flex-col items-center w-full h-[90vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
               Localisation des offres d'emploi en Mauritanie
            </h3>
            <Map
                maxZoom = {6}
                minZoom = {3}
                zoom= {5}

                markers={gpsCoordOffers.map(c => {
                    return {
                        coords: [c.center.lng, c.center.lat],
                        number: c.num_points,
                        popupText: c.name
                    }
                })}
            />
        </div>
        <div class="flex flex-col items-center w-full h-[90vh] space-y-8">
            <h3 id="gender-vs-category" class="text-2xl text-gray-600">
               Localisation des offres d'emploi par agence
            </h3>
            <div class="flex items-center space-x-4">
                <label for="agency">Sélectionnez une agence</label>
                <select id="agency" class="rounded-md border border-gray-200 px-6 py-2" bind:value={selectedAgency}>
                    {#each agenceVsFamily.datasets as dataset}
                        <option value={dataset.label}>{dataset.label}</option>
                    {/each}
                </select>
            </div>
            <HorizontalBarChart
                yTitle="Nombre de demandeurs"
                xLabels={agenceVsFamily.labels}
                series={agenceVsFamily.datasets.filter(d => d.label == selectedAgency)}
            />
        </div>
    </div>
</div>
