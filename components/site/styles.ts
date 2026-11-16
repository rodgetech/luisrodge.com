/** Shared class recipes for the site shell and pages (marclou.com-derived system). */
export const FOCUS = "outline-none focus-visible:ring-3 focus-visible:ring-ring";

export const BTN = `inline-flex h-9 items-center justify-center gap-1.5 rounded-[8px] px-4 text-sm font-medium whitespace-nowrap transition-[background-color,scale] duration-150 active:scale-[0.96] ${FOCUS}`;
export const BTN_PRIMARY = `${BTN} bg-primary text-primary-foreground hover:bg-primary/85`;
export const BTN_SECONDARY = `${BTN} bg-card shadow-border hover:bg-muted`;

export const ICON_BTN = `grid size-9 place-items-center rounded-full text-muted-foreground transition-[color,background-color] duration-150 hover:bg-muted hover:text-foreground [&_svg]:size-4 ${FOCUS}`;
