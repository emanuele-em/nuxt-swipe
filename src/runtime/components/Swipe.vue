<template>
    <div @touchstart="e => $startSwipe(e)" @touchend="e => $handleSwipe(e)">
        <slot />
    </div>
</template>
