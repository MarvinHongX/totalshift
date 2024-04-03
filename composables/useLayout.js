import { toRefs, reactive, computed } from 'vue';

const layoutConfig = reactive({
    darkTheme: false,
    theme: 'dark',
});



export const useLayout = () => {
    const setTheme = (theme) => {
        layoutConfig.theme = theme;
    };

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    return {
        layoutConfig: toRefs(layoutConfig),
        setTheme,
        isDarkTheme,
    };
}