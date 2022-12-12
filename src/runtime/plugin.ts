import { defineNuxtPlugin, navigateTo } from '#app'
import mitt from "mitt";
const emitter = mitt();

export default defineNuxtPlugin((NuxtApp) => {
    let swipe
    NuxtApp.provide('bus', {
        $on: emitter.on,
        $emit: emitter.emit,
    })

    NuxtApp.provide('startSwipe', (e) => {
        swipe = new Swipe(e);
    })

    NuxtApp.provide('handleSwipe', (e) => {
        if (!swipe) {
            return;
        }

        swipe.setEndEvent(e);
        if (swipe.isSwipeRight()) {
            return NuxtApp.$bus.$emit('swipe', 'right')
        }
        if (swipe.isSwipeLeft()) {
            return NuxtApp.$bus.$emit('swipe', 'left')
        }
        if (swipe.isSwipeDown()) {
            return NuxtApp.$bus.$emit('swipe', 'down')
        }
        if (swipe.isSwipeUp()) {
            return NuxtApp.$bus.$emit('swipe', 'up')
        }


        swipe = null;
    })

})

class Swipe {
    static SWIPE_THRESHOLD = 50 // Minumum difference in pixels at which a swipe gesture is detected

    static SWIPE_LEFT = 1
    static SWIPE_RIGHT = 2
    static SWIPE_UP = 3
    static SWIPE_DOWN = 4

    constructor(startEvent, endEvent) {
        this.startEvent = startEvent
        this.endEvent = endEvent || null

    }

    isSwipeLeft() {
        return this.getSwipeDirection() == Swipe.SWIPE_LEFT
    }

    isSwipeRight() {
        return this.getSwipeDirection() == Swipe.SWIPE_RIGHT
    }

    isSwipeUp() {
        return this.getSwipeDirection() == Swipe.SWIPE_UP
    }

    isSwipeDown() {
        return this.getSwipeDirection() == Swipe.SWIPE_DOWN
    }

    getSwipeDirection() {
        let start = this.startEvent.changedTouches[0]
        let end = this.endEvent.changedTouches[0]

        if (!start || !end) {
            return null
        }

        let horizontalDifference = start.screenX - end.screenX
        let verticalDifference = start.screenY - end.screenY


        // Horizontal difference dominates
        if (Math.abs(horizontalDifference) > Math.abs(verticalDifference)) {
            if (horizontalDifference >= Swipe.SWIPE_THRESHOLD) {
                return Swipe.SWIPE_LEFT
            } else if (horizontalDifference <= -Swipe.SWIPE_THRESHOLD) {
                return Swipe.SWIPE_RIGHT
            }

            // Verical or no difference dominates
        } else {
            if (verticalDifference >= Swipe.SWIPE_THRESHOLD) {
                return Swipe.SWIPE_UP
            } else if (verticalDifference <= -Swipe.SWIPE_THRESHOLD) {
                return Swipe.SWIPE_DOWN
            }
        }

        return null
    }

    setEndEvent(endEvent) {
        this.endEvent = endEvent
    }
}

