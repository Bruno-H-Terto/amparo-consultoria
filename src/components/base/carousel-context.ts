import { createContext, useContext } from "react";
import type useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
    /** The options for the Embla carousel. */
    opts?: CarouselOptions;
    /** The plugins for the Embla carousel. */
    plugins?: CarouselPlugin;
    /** The orientation of the carousel. */
    orientation?: "horizontal" | "vertical";
    /** The function to set the API for the carousel. */
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = CarouselProps & {
    /** The ref of the carousel. */
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    /** The API of the carousel. */
    api: ReturnType<typeof useEmblaCarousel>[1];
    /** The function to scroll the carousel to the previous slide. */
    scrollPrev: () => void;
    /** The function to scroll the carousel to the next slide. */
    scrollNext: () => void;
    /** Whether the carousel can scroll to the previous slide. */
    canScrollPrev: boolean;
    /** Whether the carousel can scroll to the next slide. */
    canScrollNext: boolean;
    /** The index of the selected slide. */
    selectedIndex: number;
    /** The scroll snaps of the carousel. */
    scrollSnaps: number[];
};

export const CarouselContext = createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error("The `useCarousel` hook must be used within a <Carousel />");
    }

    return context;
};

