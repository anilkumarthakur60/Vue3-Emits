
import { reactive } from 'vue';

const state = reactive({
    events: {}
});

function on(event, callback) {
    if (!state.events[event]) {
        state.events[event] = [];
    }
    state.events[event].push(callback);
}

function emit(event, ...args) {
    if (state.events[event]) {
        state.events[event].forEach(callback => {
            callback(...args);
        });
    }
}

export function useCommonJs() {
    return {
        on,
        emit
    };
}
