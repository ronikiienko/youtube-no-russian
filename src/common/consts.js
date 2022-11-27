export const CMD_GET_CURRENT_TAB = 'CMD_GET_CURRENT_TAB';
export const CMD_TAB_UPDATE = 'CMD_TAB_UPDATE';
export const CMD_ADD_TO_STATS = 'CMD_ADD_TO_STATS';
export const CMD_GET_STATS = 'CMD_GET_STATS'

export const SETTINGS_STORAGE_KEY = 'settings'

export const SETTINGS_KEYS = {
    blockOnHome: 'blockOnHome',
    blockOnWatch: 'blockOnWatch',
    blockOnShorts: 'blockOnShorts',
    whatToDo: 'whatToDo',
    blurIntensity: 'blurIntensity',
    theme: 'theme'
};

export const WHAT_TO_DO_MAP = {
    blur: 'blur',
    notInterested: 'notInterested',
    blockChannel: 'blockChannel',
};
export const BLUR_INTENSITY_MAP =  {
    weak: 'weak',
    normal: 'normal',
    strong: 'strong',
    transparent: 'transparent'
}
export const THEME_MAP = {
    light: 'light',
    dark: 'dark'
}

export const DEFAULT_SETTINGS = {
    blockOnHome: true,
    blockOnWatch: true,
    blockOnShorts: true,
    blurIntensity: 'normal',
    whatToDo: 'blur',
    theme: 'light',
};
export const SELECTOR = {
    CONTAINER_HOME: '#contents.ytd-rich-grid-renderer',
    CONTAINER_WATCH: '.ytd-watch-next-secondary-results-renderer #contents.ytd-item-section-renderer',
    CONTAINER_SHORTS: '#shorts-inner-container',
    IS_AUTH_BUTTONS: '#masthead-container #buttons',
};

export const BLOCKED_VIDEOS_DB_NAME = 'blockedVideos'

export const BLOCKED_VIDEOS_DB_KEYS = {
    title: 'title',
    link: 'link',
    channelName: 'channelName',
    reason: 'reason',
    reasonDetails: 'reasonDetails',
    timeWhenBlocked: 'timeWhenBlocked'
}

export const BLOCK_REASONS_MAP = {
    byCharsTitle: 'byCharsTitle',
    byCharsChannelName: 'byCharsChannelName',
    noCyrillic: 'noCyrillic',
    markerWords: 'markerWords',
    google: 'google'
}