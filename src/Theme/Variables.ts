/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export enum Colors {
    TRANSPARENT = 'rgba(0,0,0,0)',
    INPUT_BACKGROUND = '#FFFFFF',
    WHITE = '#ffffff',
    BLACK = '#000000',
    TEXT = '#212529',
    PRIMARY = '#E14032',
    SUCCESS = '#28a745',
    ERROR = '#dc3545',
    GREENDARK = '#3D7363',
    GREENSUPERDARK = '#4C6836',
    GREEN = '#8FD8C4',
    GREENLIGHT = '#84D9BA',
    GRAY = '#ccc',
    GRAYDARK = '#a4a4a4',
    YELLOW = '#F1B541',
    GREENLIGHT_MORELIGHT = '#99FF33',
    // GREENLIGHT2 = '84D9BA',
}

export enum NavigationColors {
    PRIMARY = Colors.PRIMARY,
}

/**
 * FontSize
 */
export enum FontSize {
    SMALL = 16,
    REGULAR = 20,
    LARGE = 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export enum MetricsSizes {
    TINY = tiny,
    SMALL = small,
    REGULAR = regular,
    LARGE = large,
}
