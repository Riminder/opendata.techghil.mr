<script
    lang="ts"
    generics="T extends {
    coords: [number, number];
    number?: number
    popupText?: string;
}"
>
    import { onMount } from "svelte";
    import maplibregl from "maplibre-gl";
    import "maplibre-gl/dist/maplibre-gl.css";

    type MapProps<T> = {
        center?: [number, number];
        zoom?: number;
        markers?: T[];
        maxZoom?: number;
        minZoom?: number;
    };

    let {
        center = [-11, 21],
        zoom = 7,
        markers = [],
        maxZoom,
        minZoom
    }: MapProps<T> = $props();

    let mapContainer: HTMLDivElement;

    onMount(() => {
        const map = new maplibregl.Map({
            container: mapContainer,
            attributionControl: false,
            maxZoom: maxZoom,
            minZoom: minZoom,
            style: {
                version: 8,
                sources: {
                    osm: {
                        type: "raster",
                        tiles: [
                            "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        ],
                        tileSize: 256,
                    },
                },
                layers: [
                    {
                        id: "osm-layer",
                        type: "raster",
                        source: "osm",
                    },
                ],
            },
            center,
            zoom,
        });

        markers.forEach((marker) => {
            // Create marker child
            const parent = document.createElement("div");
            parent.className = "custom-marker";

            // SVG Pin
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="rgb(12,153,255)" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="12" r="4"/></svg>`;

            parent.innerHTML = `${svg}`;

            if (marker.number) {
                const child = document.createElement("span");
                child.textContent = `${marker.number}`;
                parent.appendChild(child);
                child.style.position = "absolute";
                child.style.top = "45%";
                child.style.left = "50%";
                child.style.transform = "translate(-50%, -50%)";
                child.style.fontSize = "16px";
                child.style.fontWeight = "bold";
                child.style.color = "#333";
            }

            const markerElement = new maplibregl.Marker({ element: parent })
                .setLngLat(marker.coords)
                .addTo(map);

            // Optional: Add popup to marker
            if (marker.popupText) {
                const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
                    `<p>${marker.popupText}</p>`,
                );
                markerElement.setPopup(popup);
            }
            
        });
        
        return () => map.remove(); // Cleanup when component unmounts
    });
</script>

<div bind:this={mapContainer} class="h-full w-full"></div>
