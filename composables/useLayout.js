import { toRefs, reactive, computed } from 'vue';

const layoutConfig = reactive({
    darkTheme: false,
    theme: 'dark',
});

const layoutState = reactive({
    hamburgerMenuActive: false
});

export const useLayout = () => {
    const setTheme = (theme) => {
        layoutConfig.theme = theme;
    };

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    const onHamburgerMenuToggle = () => {
        layoutState.hamburgerMenuActive = !layoutState.hamburgerMenuActive
    };

    const isHamburgerMenuActive = computed(() => layoutState.hamburgerMenuActive);

    return {
        layoutConfig: toRefs(layoutConfig),
        layoutState: toRefs(layoutState),
        setTheme,
        isDarkTheme,
        onHamburgerMenuToggle,
        isHamburgerMenuActive,
        
    };
}