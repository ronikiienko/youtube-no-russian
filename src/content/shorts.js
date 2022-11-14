import {checkIsVideoDataRu} from '../common/utils/containsRussian';
import {CHECKED_VIDEO_ITEM_CLASSNAME, SELECTOR} from './consts';
import {handleRussianVideoItem, wait, waitForContainerLoad} from './utils';

const handleTitleHeader = async (titleHeader, videoItem) => {
    if (videoItem.classList.contains(CHECKED_VIDEO_ITEM_CLASSNAME)) return;
    if (!titleHeader) return;
    const titleText = titleHeader.innerText;
    if (await checkIsVideoDataRu({title: titleText})) {
        handleRussianVideoItem(videoItem, 'shorts');
    }
    videoItem.classList.add(CHECKED_VIDEO_ITEM_CLASSNAME);
}
const handleVideoItem = async (videoItem) => {
    // title text loads only when you scroll down to video
    const titleHeader = videoItem.querySelector('h2');
    if (titleHeader.innerText) {
        await handleTitleHeader(titleHeader, videoItem)
        return
    }
    const headerObserver = new MutationObserver(async function (mutations) {
        this.disconnect();
        await handleTitleHeader(titleHeader, videoItem)
    });
    headerObserver.observe(titleHeader, {childList: true, subtree: true});
};

export const handleShortsPage = async () => {
    console.log('handling Shorts!~!!!!');
    await waitForContainerLoad(SELECTOR.CONTAINER_SHORTS);
    const videoItemsContainer = document.querySelector(SELECTOR.CONTAINER_SHORTS);
    for (const videoItem of videoItemsContainer.children) {
        if (videoItem.tagName !== 'YTD-REEL-VIDEO-RENDERER') continue;
        await handleVideoItem(videoItem);
    }
    const videoItemsObserver = new MutationObserver(async (mutations) => {
        for (const mutation of mutations) {
            const videoItem = mutation.addedNodes[1];
            if (videoItem.tagName !== 'YTD-REEL-VIDEO-RENDERER') continue;
            await handleVideoItem(videoItem);
        }
    });
    await wait(500);
    videoItemsObserver.observe(videoItemsContainer, {childList: true});
};





