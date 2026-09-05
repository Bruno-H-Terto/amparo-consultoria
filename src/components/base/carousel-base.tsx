import type { CSSProperties, ComponentPropsWithRef, HTMLAttributes, KeyboardEvent, ReactNode, Ref } from "react";
import { cloneElement, isValidElement, useCallback, useEffect, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselContext, useCarousel, type CarouselProps } from "./carousel-context";
import { cx } from "@/utils/cx";

export const Root = ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }: ComponentPropsWithRef<"div"> & CarouselProps) => {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins,
    );
    const subscribe = useCallback((onChange: () => void) => {
        if (!api) return () => {};
        api.on("reInit", onChange);
        api.on("select", onChange);
        return () => {
            api.off("reInit", onChange);
            api.off("select", onChange);
        };
    }, [api]);

    // A primitive snapshot remains stable until the external carousel state changes.
    const getSnapshot = useCallback(() => JSON.stringify({
        canScrollPrev: api?.canScrollPrev() ?? false,
        canScrollNext: api?.canScrollNext() ?? false,
        selectedIndex: api?.selectedScrollSnap() ?? 0,
        scrollSnaps: api?.scrollSnapList() ?? [],
    }), [api]);
    useSyncExternalStore(subscribe, getSnapshot);
    const canScrollPrev = api?.canScrollPrev() ?? false;
    const canScrollNext = api?.canScrollNext() ?? false;
    const selectedIndex = api?.selectedScrollSnap() ?? 0;
    const scrollSnaps = api?.scrollSnapList() ?? [];

    const scrollPrev = useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext],
    );

    useEffect(() => {
        if (!api || !setApi) return;

        setApi(api);
    }, [api, setApi]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
                selectedIndex,
                scrollSnaps,
            }}
        >
            <div onKeyDownCapture={handleKeyDown} className={cx("relative", className)} role="region" aria-roledescription="carousel" {...props}>
                {children}
            </div>
        </CarouselContext.Provider>
    );
};

interface CarouselContentProps extends ComponentPropsWithRef<"div"> {
    /** The class name of the content. */
    className?: string;
    /** Whether to hide the overflow. */
    overflowHidden?: boolean;
}

export const Content = ({ className, overflowHidden = true, ...props }: CarouselContentProps) => {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className={cx("h-full w-full", overflowHidden && "overflow-hidden")}>
            <div className={cx("flex max-h-full", orientation === "horizontal" ? "" : "flex-col", className)} {...props} />
        </div>
    );
};

export const Item = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
    return <div role="group" aria-roledescription="slide" className={cx("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />;
};

interface TriggerRenderProps {
    isDisabled: boolean;
    onClick: () => void;
}

interface TriggerProps {
    /** The ref of the trigger. */
    ref?: Ref<HTMLButtonElement>;
    /** If true, the child element will be cloned and passed down the prop of the trigger. */
    asChild?: boolean;
    /** The direction of the trigger. */
    direction: "prev" | "next";
    /** The children of the trigger. Can be a render prop or a valid element. */
    children: ReactNode | ((props: TriggerRenderProps) => ReactNode);
    /** The style of the trigger. */
    style?: CSSProperties;
    /** The class name of the trigger. */
    className?: string | ((args: { isDisabled: boolean }) => string);
}

const Trigger = ({ className, children, asChild, direction, style, ...props }: TriggerProps) => {
    const { scrollPrev, canScrollNext, scrollNext, canScrollPrev } = useCarousel();

    const isDisabled = direction === "prev" ? !canScrollPrev : !canScrollNext;

    const handleClick = () => {
        if (isDisabled) return;

        if (direction === "prev") {
            scrollPrev();
        } else {
            scrollNext();
        }
    };

    const computedClassName = typeof className === "function" ? className({ isDisabled }) : className;

    const defaultAriaLabel = direction === "prev" ? "Previous slide" : "Next slide";

    // If the children is a render prop, we need to pass the necessary props to the render prop.
    if (typeof children === "function") {
        return <>{children({ isDisabled, onClick: handleClick })}</>;
    }

    // If the children is a valid element, we need to clone it and pass the necessary props to the cloned element.
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            onClick: handleClick,
            disabled: isDisabled,
            "aria-label": defaultAriaLabel,
            style: { ...(children.props as HTMLAttributes<HTMLElement>).style, ...style },
            className: [computedClassName, (children.props as HTMLAttributes<HTMLElement>).className].filter(Boolean).join(" ") || undefined,
        } as HTMLAttributes<HTMLElement>);
    }

    return (
        <button aria-label={defaultAriaLabel} disabled={isDisabled} className={computedClassName} onClick={handleClick} {...props}>
            {children}
        </button>
    );
};

export const PrevTrigger = (props: Omit<TriggerProps, "direction">) => <Trigger {...props} direction="prev" />;

export const NextTrigger = (props: Omit<TriggerProps, "direction">) => <Trigger {...props} direction="next" />;

interface CarouselIndicatorRenderProps {
    isSelected: boolean;
    onClick: () => void;
}

interface CarouselIndicatorProps {
    /** The index of the indicator. */
    index: number;
    /** If true, the child element will be cloned and passed down the prop of the indicator. */
    asChild?: boolean;
    /** If true, the indicator will be selected. */
    isSelected?: boolean;
    /** The children of the indicator. Can be a render prop or a valid element. */
    children?: ReactNode | ((props: CarouselIndicatorRenderProps) => ReactNode);
    /** The style of the indicator. */
    style?: CSSProperties;
    /** The class name of the indicator. */
    className?: string | ((args: { isSelected: boolean }) => string);
}

export const Indicator = ({ index, isSelected = false, children, asChild, className, style }: CarouselIndicatorProps) => {
    const { api, selectedIndex } = useCarousel();

    isSelected = isSelected || selectedIndex === index;

    const handleClick = () => {
        api?.scrollTo(index);
    };
    const computedClassName = typeof className === "function" ? className({ isSelected }) : className;

    const defaultAriaLabel = "Go to slide" + (index + 1);

    // If the children is a render prop, we need to pass the necessary props to the render prop.
    if (typeof children === "function") {
        return <>{children({ isSelected, onClick: handleClick })}</>;
    }

    // If the children is a valid element, we need to clone it and pass the necessary props to the cloned element.
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            onClick: handleClick,
            "aria-label": defaultAriaLabel,
            "aria-current": isSelected ? "true" : undefined,
            style: { ...(children.props as HTMLAttributes<HTMLElement>).style, ...style },
            className: [computedClassName, (children.props as HTMLAttributes<HTMLElement>).className].filter(Boolean).join(" ") || undefined,
        } as HTMLAttributes<HTMLElement>);
    }

    return (
        <button aria-label={defaultAriaLabel} aria-current={isSelected ? "true" : undefined} className={computedClassName} onClick={handleClick}>
            {children}
        </button>
    );
};

interface CarouselIndicatorGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: ReactNode | ((props: { index: number }) => ReactNode);
    className?: string;
}

export const IndicatorGroup = ({ children, ...props }: CarouselIndicatorGroupProps) => {
    const { scrollSnaps } = useCarousel();

    // If the children is a render prop, we need to pass the index to the render prop.
    if (typeof children === "function") {
        return <nav {...props}>{scrollSnaps.map((_, index) => children({ index }))}</nav>;
    }

    return <nav {...props}>{children}</nav>;
};
