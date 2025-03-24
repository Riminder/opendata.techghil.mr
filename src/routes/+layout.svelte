<script>
    import { Menu } from "lucide-svelte";
    let { children } = $props();
    import "../app.css";

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="flex flex-col px-8 py-4 min-h-screen">
    <div class="flex justify-between items-center text-md">
        <ul class="flex space-x-10 items-center">
            <li>
                <a href="/" class="flex items-center space-x-4">
                    <span class="text-4xl font-semibold">🇲🇷</span>
                    <span class="text-2xl font-semibold">Techghil Mauritanie</span>
                </a>
            </li>
            <!-- <li class="hidden md:flex"><a href="/taxonomy">Référentiel des métiers</a></li> -->
            <li class="hidden md:flex"><a href="/skills">Bassin de compétences</a></li>
            <li class="hidden md:flex"><a href="/jobs">Bassin de l'emploi</a></li>
        </ul>


        <button class="md:hidden flex items-center justify-center p-4 space-x-4" onclick={toggleMenu}>
            <Menu class="size-8"/>
        </button>
    </div>

    {#if isMenuOpen}
        <ul class="md:hidden flex flex-col space-y-4 mt-4 bg-gray-50 p-4 rounded-sm border border-gray-100">
            <!-- <li><a href="/taxonomy">Référentiel des métiers</a></li> -->
            <li><a href="/skills">Bassin de compétences</a></li>
            <li><a href="/jobs">Bassin de l'emploi</a></li>
        </ul>
    {/if}

    {@render children()}
</div>
